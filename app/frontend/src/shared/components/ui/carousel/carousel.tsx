'use client'

import cn from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronDown, ChevronLeft, ChevronRight, ChevronUp} from 'lucide-react'
import type {ComponentProps} from 'react'
import {useCallback, useEffect, useState} from 'react'
import {Button} from '@/shared/components/ui/button'
import {CarouselContext, useCarousel} from './carousel.context'
import styles from './carousel.module.scss'
import type {CarouselArrowProps, CarouselProps} from './carousel.props'

function CarouselRoot({
                          orientation = 'horizontal',
                          options,
                          plugins,
                          setApi,
                          className,
                          children,
                          ...rest
                      }: CarouselProps) {
    const [carouselRef, api] = useEmblaCarousel({...options, axis: orientation === 'horizontal' ? 'x' : 'y'}, plugins)

    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
    const scrollNext = useCallback(() => api?.scrollNext(), [api])

    useEffect(() => {
        if (!api) return
        const sync = () => {
            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }
        sync()
        api.on('select', sync).on('reInit', sync)
        return () => {
            api.off('select', sync).off('reInit', sync)
        }
    }, [api])

    useEffect(() => {
        if (!api) return
        api.reInit({axis: orientation === 'horizontal' ? 'x' : 'y'})
    }, [orientation, api])

    useEffect(() => {
        if (api && setApi) setApi(api)
    }, [api, setApi])

    return (
        <CarouselContext.Provider
            value={{carouselRef, api, orientation, canScrollPrev, canScrollNext, scrollPrev, scrollNext}}
        >
            <div className={cn(styles.carousel, className)} aria-roledescription="carousel" {...rest}>
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

function CarouselContent({className, ...rest}: ComponentProps<'ul'>) {
    const {carouselRef, orientation} = useCarousel()
    return (
        <div ref={carouselRef} className={styles.carousel__viewport}>
            <ul
                role="list"
                className={cn(styles.carousel__track, styles[`carousel__track--${orientation}`], className)}
                {...rest}
            />
        </div>
    )
}

function CarouselItem({className, ...rest}: ComponentProps<'li'>) {
    const {orientation} = useCarousel()
    return (
        <li
            role="group"
            aria-roledescription="slide"
            className={cn(styles.carousel__item, styles[`carousel__item--${orientation}`], className)}
            {...rest}
        />
    )
}

function CarouselPrev({className, ...rest}: CarouselArrowProps) {
    const {scrollPrev, canScrollPrev, orientation} = useCarousel()
    const isVertical = orientation === 'vertical'
    const Icon = isVertical ? ChevronUp : ChevronLeft
    return (
        <Button
            variant="icon"
            size="md"
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            aria-label="Предыдущий слайд"
            className={cn(styles.carousel__arrow, styles[`carousel__arrow--prev-${orientation}`], className)}
            {...rest}
        >
            <Icon aria-hidden="true" size={isVertical ? 28 : 24} />
        </Button>
    )
}

function CarouselNext({className, ...rest}: CarouselArrowProps) {
    const {scrollNext, canScrollNext, orientation} = useCarousel()
    const isVertical = orientation === 'vertical'
    const Icon = isVertical ? ChevronDown : ChevronRight
    return (
        <Button
            variant="icon"
            size="md"
            disabled={!canScrollNext}
            onClick={scrollNext}
            aria-label="Следующий слайд"
            className={cn(styles.carousel__arrow, styles[`carousel__arrow--next-${orientation}`], className)}
            {...rest}
        >
            <Icon aria-hidden="true" size={isVertical ? 28 : 24} />
        </Button>
    )
}

export const Carousel = Object.assign(CarouselRoot, {
    Content: CarouselContent,
    Item: CarouselItem,
    Prev: CarouselPrev,
    Next: CarouselNext,
})
