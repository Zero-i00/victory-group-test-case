import styles from './review-player.module.scss'

export function ReviewPlayer() {
    return (
        <div className={styles['review-player__empty']} aria-live="polite">
            Видео недоступно
        </div>
    )
}
