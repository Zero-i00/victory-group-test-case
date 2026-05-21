'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import type {ComponentProps} from 'react'
import {FooterHours} from '@/shared/components/layout/footer/footer-hours'
import {FooterSocialMedia} from '@/shared/components/layout/footer/footer-social-media'
import {Typography} from '@/shared/components/ui/typography'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import {CLINIC_ADDRESS, CLINIC_MAPS_URL} from '@/shared/constants/seo.constants'
import styles from './footer.module.scss'
import {FooterLocation} from './footer-location'
import {FooterPhoneCall} from './footer-phone-call'

export function Footer({className, id = SECTION_CONFIG.FOOTER_CONTENT, ...rest}: ComponentProps<'footer'>) {
    return (
        <footer className={cn(styles.footer, className)} {...rest}>
            <Image
                fill
                alt={''}
                loading="lazy"
                aria-hidden
                sizes={'100vw'}
                src={'/images/footer/footer-background.webp'}
                className={styles.footer__background}
            />
            <div className={'container'}>
                <div className={styles.footer__inner}>
                    <Typography variant={'h2'} className={styles.footer__heading}>
                        <span className={'text-accent'}>Удобное</span> расположение
                    </Typography>
                    <Typography variant={'body-1'} className={styles.footer__caption}>
                        Деятельность центра направлена не только на восстановление
                        <br/> жевательной функцию зубов, а и на обеспечение в полной мере их эстетики.
                    </Typography>
                </div>
            </div>
            <div className={'container'}>
                <div className={styles.footer__layout}>
                    <div className={cn(styles.footer__side, styles['footer__side--left'])}>
                        <FooterLocation/>
                        <FooterPhoneCall/>
                        <div className={cn(styles.footer__links, styles['footer__links--left'])}>
                            <Link href="#" className={styles['footer__link']}>
                                <Typography as="span" variant="body-1">Полезные статьи</Typography>
                            </Link>
                            <Link href="#" className={styles['footer__link']}>
                                <Typography as="span" variant="body-1">Правовая информация</Typography>
                            </Link>
                        </div>
                    </div>
                    <div className={cn(styles.footer__side, styles['footer__side--right'])}>
                        <FooterSocialMedia/>
                        <FooterHours/>
                        <div className={cn(styles.footer__links, styles['footer__links--right'])}>
                            <Link href="#" className={styles['footer__link']}>
                                <Typography as="span" variant="body-1">Сертификаты сотрудников</Typography>
                            </Link>
                            <Link href="#" className={styles['footer__link']}>
                                <Typography as="span" variant="body-1">Политика конфиденциальности</Typography>
                            </Link>
                        </div>
                    </div>
                    <a
                        href={CLINIC_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Открыть адрес клиники на карте: ${CLINIC_ADDRESS}`}
                        className={styles['footer__map-link']}
                    >
                        <div className={styles['footer__map-container']}>
                            <Image
                                fill
                                alt=""
                                src={'/images/footer/footer-map.png'}
                                sizes="(max-width: 768px) 90vw, 520px"
                                className={styles['footer__map']}
                            />
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    )
}
