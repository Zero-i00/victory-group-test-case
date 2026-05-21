'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import type {ComponentProps} from 'react'
import {FooterHours} from '@/shared/components/layout/footer/footer-hours'
import {FooterSocialMedia} from '@/shared/components/layout/footer/footer-social-media'
import {Typography} from '@/shared/components/ui/typography'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import {SCHEMA} from '@/shared/constants/schema.constants'
import {
    CLINIC_ADDRESS,
    CLINIC_GEO,
    CLINIC_MAPS_URL,
    CLINIC_NAME,
    CLINIC_PRICE_RANGE,
    CLINIC_WHATSAPP_URL,
    SITE_URL,
} from '@/shared/constants/seo.constants'
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
            <div itemScope itemType={SCHEMA.Dentist}>
                <span itemProp="name" className="sr-only">{CLINIC_NAME}</span>
                <meta itemProp="priceRange" content={CLINIC_PRICE_RANGE} />
                <meta itemProp="image" content={`${SITE_URL}/opengraph-image`} />
                <link itemProp="url" href={SITE_URL} />
                <meta itemProp="logo" content={`${SITE_URL}/icon.png`} />
                <link itemProp="sameAs" href={CLINIC_WHATSAPP_URL} />
                <div itemProp="geo" itemScope itemType={SCHEMA.GeoCoordinates} className="sr-only">
                    <meta itemProp="latitude" content={String(CLINIC_GEO.latitude)} />
                    <meta itemProp="longitude" content={String(CLINIC_GEO.longitude)} />
                </div>
                <div className={'container'}>
                    <section aria-labelledby="footer-location-heading">
                        <div className={styles.footer__inner}>
                            <Typography variant={'h2'} id="footer-location-heading" className={styles.footer__heading}>
                                <span className={'text-accent'}>Удобное</span> расположение
                            </Typography>
                            <Typography variant={'body-1'} className={styles.footer__caption}>
                                Деятельность центра направлена не только на восстановление
                                <br/> жевательной функцию зубов, а и на обеспечение в полной мере их эстетики.
                            </Typography>
                        </div>
                    </section>
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
                            itemProp="hasMap"
                        >
                            <div className={styles['footer__map-container']}>
                                <Image
                                    fill
                                    alt=""
                                    aria-hidden="true"
                                    src={'/images/footer/footer-map.png'}
                                    sizes="(max-width: 768px) 90vw, 520px"
                                    className={styles['footer__map']}
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
