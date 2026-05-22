'use client'

import cn from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react'
import type { ComponentProps } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/shared/components/ui/button'
import { CarouselContext, useCarouselContext } from './carousel.context'
import styles from './carousel.module.scss'
import type { CarouselArrowProps, CarouselItemProps, CarouselProps } from './carousel.props'

function CarouselRoot({
    orientation = 'horizontal',
    options,
    plugins,
    setApi,
    className,
    children,
    ...rest
}: CarouselProps) {
    const [carouselRef, api] = useEmblaCarousel({ ...options, axis: orientation === 'horizontal' ? 'x' : 'y' }, plugins)

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
        api.reInit({ axis: orientation === 'horizontal' ? 'x' : 'y' })
    }, [orientation, api])

    useEffect(() => {
        if (api && setApi) setApi(api)
    }, [api, setApi])

    return (
        <CarouselContext.Provider
            value={{ carouselRef, api, orientation, canScrollPrev, canScrollNext, scrollPrev, scrollNext }}
        >
            <div
                data-slot="carousel"
                data-orientation={orientation}
                role="region"
                aria-roledescription="carousel"
                className={cn(styles.carousel, className)}
                {...rest}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

function CarouselContent({ className, ...rest }: ComponentProps<'ul'>) {
    const { carouselRef } = useCarouselContext()
    return (
        <div data-slot="carousel-viewport" ref={carouselRef} className={styles.carousel__viewport}>
            <ul data-slot="carousel-content" role="list" className={cn(styles.carousel__track, className)} {...rest} />
        </div>
    )
}

function CarouselItem({ className, index, total, ...rest }: CarouselItemProps) {
    const slideLabel = index !== undefined && total !== undefined ? `Слайд ${index + 1} из ${total}` : undefined
    return (
        <li
            data-slot="carousel-item"
            role="group"
            aria-roledescription="slide"
            aria-label={slideLabel}
            className={cn(styles.carousel__item, className)}
            {...rest}
        />
    )
}

function CarouselPrev({ className, ...rest }: CarouselArrowProps) {
    const { scrollPrev, canScrollPrev, orientation } = useCarouselContext()
    const isVertical = orientation === 'vertical'
    const Icon = isVertical ? ChevronUp : ChevronLeft
    return (
        <Button
            data-slot="carousel-prev"
            data-orientation={orientation}
            variant="icon"
            size="md"
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            aria-label="Предыдущий слайд"
            className={cn(styles.carousel__arrow, styles['carousel__arrow--prev'], className)}
            {...rest}
        >
            <Icon aria-hidden="true" className={styles.carousel__icon} />
        </Button>
    )
}

function CarouselNext({ className, ...rest }: CarouselArrowProps) {
    const { scrollNext, canScrollNext, orientation } = useCarouselContext()
    const isVertical = orientation === 'vertical'
    const Icon = isVertical ? ChevronDown : ChevronRight
    return (
        <Button
            data-slot="carousel-next"
            data-orientation={orientation}
            variant="icon"
            size="md"
            disabled={!canScrollNext}
            onClick={scrollNext}
            aria-label="Следующий слайд"
            className={cn(styles.carousel__arrow, styles['carousel__arrow--next'], className)}
            {...rest}
        >
            <Icon aria-hidden="true" className={styles.carousel__icon} />
        </Button>
    )
}

export const Carousel = Object.assign(CarouselRoot, {
    Content: CarouselContent,
    Item: CarouselItem,
    Prev: CarouselPrev,
    Next: CarouselNext,
})
