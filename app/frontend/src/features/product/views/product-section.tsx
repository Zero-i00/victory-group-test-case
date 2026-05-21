'use client'

import {useSuspenseInfiniteQuery} from '@tanstack/react-query'
import cn from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import type {ComponentProps, CSSProperties} from 'react'
import {useCallback, useEffect, useState} from 'react'
import {ProductCard} from '@/features/product/components/elements/product-card'
import {productQuery} from '@/features/product/queries/product.query'
import {SectionCaption} from '@/shared/components/elements/section-caption'
import {Button} from '@/shared/components/ui/button'
import {Typography} from '@/shared/components/ui/typography'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import styles from './product-section.module.scss'

export function ProductSection({id = SECTION_CONFIG.PRODUCT, className, ...rest}: ComponentProps<'section'>) {
    const headingId = `${id}-heading`
    const trackId = `${id}-track`

    const {data} = useSuspenseInfiniteQuery(productQuery.list())

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        containScroll: 'trimSnaps',
        slidesToScroll: 1,
        duration: 25,
    })

    const [canPrev, setCanPrev] = useState(false)
    const [canNext, setCanNext] = useState(false)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        const sync = () => {
            setCanPrev(emblaApi.canScrollPrev())
            setCanNext(emblaApi.canScrollNext())
        }

        sync()
        emblaApi.on('select', sync).on('reInit', sync)

        return () => {
            emblaApi.off('select', sync).off('reInit', sync)
        }
    }, [emblaApi])

    return (
        <section id={id} aria-labelledby={headingId} className={cn(styles['product-section'], className)} {...rest}>
            <div className={cn('container', styles['product-section__wrapper'])}>
                <header className={styles['product-section__header']}>
                    <SectionCaption text={'Наши услуги'}/>
                    <Typography as={'h2'} variant={'h2'} id={headingId} className={styles['product-section__heading']}>
                        предлагаем <span className={`text-accent`}>полное медицинское обслуживание</span> людям с
                        различными проблемами со здоровьем
                    </Typography>
                </header>

                <div
                    className={styles['product-section__carousel']}
                    aria-roledescription={'carousel'}
                    aria-label={'Наши услуги'}
                >
                    <Button
                        variant={'icon'}
                        className={styles['product-section__arrow']}
                        style={{'--btn-icon-size': '50px'} as CSSProperties}
                        onClick={scrollPrev}
                        disabled={!canPrev}
                        aria-label={'Предыдущие услуги'}
                        aria-controls={trackId}
                    >
                        <ChevronLeft aria-hidden={'true'}/>
                    </Button>

                    <div ref={emblaRef} className={styles['product-section__viewport']}>
                        <ul id={trackId} role={'list'} className={styles['product-section__track']}>
                            {data.map((product) => (
                                <li key={product.id} className={styles['product-section__slide']}>
                                    <ProductCard product={product}/>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Button
                        variant={'icon'}
                        className={styles['product-section__arrow']}
                        style={{'--btn-icon-size': '50px'} as CSSProperties}
                        onClick={scrollNext}
                        disabled={!canNext}
                        aria-label={'Следующие услуги'}
                        aria-controls={trackId}
                    >
                        <ChevronRight aria-hidden={'true'}/>
                    </Button>
                </div>
            </div>
        </section>
    )
}
