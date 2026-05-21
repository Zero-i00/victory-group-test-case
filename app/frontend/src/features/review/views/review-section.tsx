'use client'

import {useSuspenseInfiniteQuery} from '@tanstack/react-query'
import cn from 'clsx'
import type {ComponentProps, KeyboardEvent} from 'react'
import {useState} from 'react'
import {ReviewCard} from '@/features/review/components/elements/review-card'
import {ReviewPlayer} from '@/features/review/components/elements/review-player'
import {reviewQuery} from '@/features/review/queries/review.query'
import {SectionCaption} from '@/shared/components/elements/section-caption'
import {Carousel} from '@/shared/components/ui/carousel'
import {Typography} from '@/shared/components/ui/typography'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import {useMediaQuery} from '@/shared/hooks/use-media-query'
import styles from './review-section.module.scss'

export function ReviewSection({className, id = SECTION_CONFIG.REVIEW, ...rest}: ComponentProps<'section'>) {
    const {data} = useSuspenseInfiniteQuery(reviewQuery.list())
    const [activeIndex, setActiveIndex] = useState(0)
    const isDesktop = useMediaQuery('(min-width: 1024px)')

    const handleSelect = (i: number) => setActiveIndex(i)

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, i: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleSelect(i)
        }
    }

    return (
        <section id={id} aria-labelledby={`${id}-title`} className={cn(styles['review-section'], className)} {...rest}>
            <div className={cn('container', styles['review-section__wrapper'])}>
                <header className={styles['review-section__header']}>
                    <SectionCaption text={'Отзывы'}/>
                    <Typography variant={'h2'} id={`${id}-title`} className={styles['review-section__heading']}>
                        <span className="text-accent">Вдохновляющие </span>истории
                    </Typography>
                </header>

                <div className={styles['review-section__body']}>
                    <div className={styles['review-section__player']}>
                        <ReviewPlayer/>
                    </div>

                    <div className={styles['review-section__playlist']}>
                        <Carousel
                            orientation={isDesktop ? 'vertical' : 'horizontal'}
                            options={{align: 'start', containScroll: 'trimSnaps', duration: 25}}
                            className={styles['review-section__carousel']}
                        >
                            <Carousel.Content>
                                {data.map((review, i) => (
                                    <Carousel.Item key={review.id} className={styles['review-section__slide']}>
                                        <ReviewCard
                                            review={review}
                                            isActive={i === activeIndex}
                                            role="button"
                                            tabIndex={0}
                                            aria-pressed={i === activeIndex}
                                            aria-label={`Воспроизвести отзыв: ${review.recipient_full_name}, ${review.recipient_city}`}
                                            onClick={() => handleSelect(i)}
                                            onKeyDown={(e) => handleKeyDown(e, i)}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel.Content>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}
