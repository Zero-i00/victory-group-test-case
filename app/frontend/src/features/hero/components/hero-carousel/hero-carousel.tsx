'use client'

import { Carousel } from '@/shared/components/ui/carousel'
import { HeroTechCard } from '../hero-tech-card'
import styles from './hero-carousel.module.scss'

const HERO_CARDS = [
    {
        title: 'Современные технологии',
        desc: 'Лечение на оборудовании последнего поколения',
        progress: 25,
    },
    {
        title: 'Качество и опыт',
        desc: '15 лет успешной практики и тысячи довольных пациентов',
        progress: 49,
    },
    {
        title: 'Без боли и страха',
        desc: 'Комфортные методики, бережное отношение к каждому пациенту',
        progress: 74,
    },
    {
        title: 'Эстетическая стоматология',
        desc: 'Голливудская улыбка — быстро и безопасно',
        progress: 100,
    },
] as const

export function HeroCarousel() {
    return (
        <Carousel options={{ align: 'start', loop: false }} className={styles['hero-carousel']}>
            <Carousel.Content className={styles['hero-carousel__track']}>
                {HERO_CARDS.map((card, i) => (
                    <Carousel.Item
                        key={card.title}
                        index={i}
                        total={HERO_CARDS.length}
                        className={styles['hero-carousel__item']}
                    >
                        <HeroTechCard title={card.title} desc={card.desc} progress={card.progress} />
                    </Carousel.Item>
                ))}
            </Carousel.Content>
            <Carousel.Next className={styles['hero-carousel__next']} />
        </Carousel>
    )
}
