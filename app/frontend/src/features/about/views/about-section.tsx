'use client'

import cn from 'clsx'
import Image from 'next/image'
import toast from 'react-hot-toast'
import type {ComponentProps} from 'react'
import {AdvantageCard} from '@/features/about/components/elements/advantage-card'
import {ADVANTAGE_DATA} from '@/features/about/data/advantage.data'
import {SectionCaption} from '@/shared/components/elements/section-caption'
import {Button} from '@/shared/components/ui/button'
import {Typography} from '@/shared/components/ui/typography'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import styles from './about-section.module.scss'

export function AboutSection({className, id = SECTION_CONFIG.ABOUT, ...rest}: ComponentProps<'section'>) {
    return (
        <section id={id} aria-labelledby={`${id}-title`} className={cn(styles['about-section'], className)} {...rest}>
            <div className={cn('container', styles['about-section__wrapper'])}>
                <div className={styles['about-section__media']}>
                    <Image
                        src="/images/about/about-banner.webp"
                        alt="Улыбающаяся пациентка после визита в стоматологию «Дантист»"
                        width={862}
                        height={862}
                        loading="lazy"
                        sizes="(min-width: 1024px) 862px, (min-width: 768px) 400px, 100vw"
                        className={styles['about-section__photo']}
                    />
                </div>

                <div className={styles['about-section__content']}>
                    <SectionCaption text={'Наши принципы'}/>
                    <Typography variant={'h2'} id={`${id}-title`} className={styles['about-section__title']}>
                        Улучшите
                        <span className="text-accent"> качество вашей жизни,</span>
                        <br/>
                        благодаря лучшему здоровью
                    </Typography>
                    <ul className={styles['about-section__advantage-list']}>
                        {ADVANTAGE_DATA.map((advantage, index) => (
                            <li key={index}>
                                <AdvantageCard advantage={advantage}/>
                            </li>
                        ))}
                    </ul>
                    <Button size={'xl'} className={styles['about-section__application-btn']} onClick={() => toast.success('Заявка принята')}>
                        Записаться на приём
                    </Button>
                </div>
            </div>
        </section>
    )
}
