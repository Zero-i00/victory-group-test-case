import cn from 'clsx'
import { Play } from 'lucide-react'
import type { ComponentProps } from 'react'
import type { Review } from '@/features/review/types/review.types'
import { Card } from '@/shared/components/ui/card'
import { Typography } from '@/shared/components/ui/typography'
import { SCHEMA } from '@/shared/constants/schema.constants'
import { CLINIC_NAME } from '@/shared/constants/seo.constants'
import styles from './review-card.module.scss'

interface Props extends ComponentProps<'div'> {
    review: Review
    isActive?: boolean
    onClick?: () => void
}

export function ReviewCard({ review, isActive, onClick, className }: Props) {
    return (
        <Card
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            aria-label={`Воспроизвести отзыв: ${review.recipient_full_name}, ${review.recipient_city}`}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    onClick?.()
                }
            }}
            itemScope
            itemProp="itemListElement"
            itemType={SCHEMA.Review}
            className={cn(styles['review-card'], isActive && styles['review-card--active'], className)}
        >
            <meta itemProp="itemReviewed" content={CLINIC_NAME} />
            <div itemProp="author" itemScope itemType={SCHEMA.Person}>
                <span itemProp="name" className="sr-only">
                    {review.recipient_full_name}
                </span>
            </div>
            <Card.Header className={styles['review-card__header']}>
                <span className={styles['review-card__icon']} aria-hidden="true">
                    <Play aria-hidden="true" className={styles['review-card__play-icon']} />
                </span>
                <Card.Title variant={'subtitle-2'} itemProp="name" className={styles['review-card__title']}>
                    {review.recipient_full_name}
                </Card.Title>
            </Card.Header>
            <Card.Content className={styles['review-card__content']}>
                <Typography variant={'caption'} as={'span'} className={styles['review-card__city']}>
                    {review.recipient_city}
                </Typography>
            </Card.Content>
        </Card>
    )
}
