import cn from 'clsx'
import Image from 'next/image'
import type { ComponentProps } from 'react'
import { Button } from '@/shared/components/ui/button'
import { Typography } from '@/shared/components/ui/typography'
import { SECTION_CONFIG } from '@/shared/configs/section.config'
import { HeroCarousel } from '../components/hero-carousel'
import styles from './hero-section.module.scss'

export function HeroSection({ id = SECTION_CONFIG.HERO, className, ...rest }: ComponentProps<'section'>) {
    return (
        <section id={id} aria-labelledby="hero-title" className={cn(styles['hero-section'], className)} {...rest}>
            <Image
                src="/images/hero/hero-background.webp"
                alt=""
                fill
                priority
                sizes="100vw"
                className={styles['hero-section__bg']}
            />
            <div aria-hidden="true" className={styles['hero-section__decor']}>
                <span className={styles['hero-section__circle-lg']} />
                <span className={styles['hero-section__circle-md']} />
                <span className={styles['hero-section__circle-sm']} />
            </div>
            <div className={styles['hero-section__left']}>
                <Image
                    src="/images/hero/doctor.png"
                    alt="Врач-стоматолог"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, min(22rem, 100vw)"
                    className={styles['hero-doctor-photo']}
                />
            </div>
            <div className={styles['hero-section__inner']}>
                <div className={styles['hero-section__right']}>
                    <div className={styles['hero-headline']}>
                        <Typography as="h1" id="hero-title" variant="h1" className={styles['hero-headline__title']}>
                            <span className="text-accent">Американский</span> стоматологический центр «Дантист»
                        </Typography>
                        <p className={styles['hero-headline__lead']}>
                            Обратившись к нам, Вы можете быть уверены, что Вас обслужат на высшем уровне, и все Ваши
                            проблемы с зубами останутся в прошлом.
                        </p>
                        <Button
                            variant="default"
                            size="xl"
                            popoverTarget="application-modal"
                            aria-haspopup="dialog"
                            className={styles['hero-headline__cta']}
                        >
                            Записаться на приём
                        </Button>
                    </div>
                    <HeroCarousel />
                </div>
            </div>
        </section>
    )
}
