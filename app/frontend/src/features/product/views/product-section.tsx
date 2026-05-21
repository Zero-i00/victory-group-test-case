'use client'

import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import cn from 'clsx'
import type { ComponentProps, CSSProperties } from 'react'
import { ProductCard } from '@/features/product/components/elements/product-card'
import { productQuery } from '@/features/product/queries/product.query'
import { SectionCaption } from '@/shared/components/elements/section-caption'
import { Carousel } from '@/shared/components/ui/carousel'
import { Typography } from '@/shared/components/ui/typography'
import { SECTION_CONFIG } from '@/shared/configs/section.config'
import styles from './product-section.module.scss'

export function ProductSection({ id = SECTION_CONFIG.PRODUCT, className, ...rest }: ComponentProps<'section'>) {
    const headingId = `${id}-heading`

    const { data } = useSuspenseInfiniteQuery(productQuery.list())

    return (
        <section id={id} aria-labelledby={headingId} className={cn(styles['product-section'], className)} {...rest}>
            <div className={cn('container', styles['product-section__wrapper'])}>
                <header className={styles['product-section__header']}>
                    <SectionCaption text={'Наши услуги'} />
                    <Typography as={'h2'} variant={'h2'} id={headingId} className={styles['product-section__heading']}>
                        предлагаем <span className="text-accent">полное медицинское обслуживание</span> людям с
                        различными проблемами со здоровьем
                    </Typography>
                </header>

                <div className={styles['product-section__carousel-container']}>
                    <Carousel
                        aria-label="Наши услуги"
                        options={{ align: 'start', containScroll: 'trimSnaps', slidesToScroll: 1, duration: 25, watchDrag: false }}
                        className={styles['product-section__carousel']}
                    >
                        <Carousel.Prev
                            className={styles['product-section__arrow']}
                            style={{ '--btn-icon-size': '50px' } as CSSProperties}
                        />
                        <Carousel.Content>
                            {data.map((product) => (
                                <Carousel.Item key={product.id} className={styles['product-section__slide']}>
                                    <ProductCard product={product} />
                                </Carousel.Item>
                            ))}
                        </Carousel.Content>
                        <Carousel.Next
                            className={styles['product-section__arrow']}
                            style={{ '--btn-icon-size': '50px' } as CSSProperties}
                        />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
