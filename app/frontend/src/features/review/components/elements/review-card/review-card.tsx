import cn from 'clsx'
import { Play } from 'lucide-react'
import type { ComponentProps } from 'react'
import type { Review } from '@/features/review/types/review.types'
import { Card } from '@/shared/components/ui/card'
import { Typography } from '@/shared/components/ui/typography'
import styles from './review-card.module.scss'

interface Props extends ComponentProps<'div'> {
    review: Review
    isActive?: boolean
}

export function ReviewCard({ review, isActive, className, ...rest }: Props) {
    return (
        <Card className={cn(styles['review-card'], isActive && styles['review-card--active'], className)} {...rest}>
            <Card.Header className={styles['review-card__header']}>
                <span className={styles['review-card__icon']} aria-hidden="true">
                    <Play size={16} />
                </span>
                <Card.Title variant={'subtitle-2'} className={styles['review-card__title']}>
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
