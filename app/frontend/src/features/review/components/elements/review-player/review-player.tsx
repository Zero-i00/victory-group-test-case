import styles from './review-player.module.scss'

export function ReviewPlayer() {
    return (
        <figure>
            <figcaption className="sr-only">Видео отзыва пациента</figcaption>
            <div className={styles['review-player__empty']} role="status">
                Видео недоступно
            </div>
        </figure>
    )
}
