import styles from './hero-tech-card.module.scss'

interface Props {
    title: string
    desc: string
    progress: number
}

export function HeroTechCard({ title, desc, progress }: Props) {
    return (
        <div className={styles['hero-tech-card']}>
            <div className={styles['hero-tech-card__card']}>
                <h3 className={styles['hero-tech-card__title']}>{title}</h3>
                <p className={styles['hero-tech-card__desc']}>{desc}</p>
                <div
                    role="progressbar"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Уровень оснащения технологиями"
                    className={styles['hero-tech-card__bar']}
                >
                    <span className={styles['hero-tech-card__bar-fill']} style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    )
}
