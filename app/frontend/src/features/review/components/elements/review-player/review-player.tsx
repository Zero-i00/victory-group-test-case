import type { Review } from '@/features/review/types/review.types'
import { SERVER_URL } from '@/shared/constants/root.constants'
import styles from './review-player.module.scss'

interface Props {
    review: Review | undefined
}

export function ReviewPlayer({ review }: Props) {
    if (!review?.video) {
        return (
            <div className={styles['review-player__empty']} aria-live="polite">
                Видео недоступно
            </div>
        )
    }

    return (
        <video
            key={review.id}
            className={styles['review-player__video']}
            controls
            preload="metadata"
            playsInline
            aria-label={`Видеоотзыв: ${review.recipient_full_name}, ${review.recipient_city}`}
        >
            <source src={`${SERVER_URL}${review.video}#t=0.1`} type="video/mp4" />
            Ваш браузер не поддерживает встроенное видео.
        </video>
    )
}
