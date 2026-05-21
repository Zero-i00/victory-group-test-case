import cn from 'clsx'
import Image from 'next/image'
import type {ComponentProps} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import {CLINIC_ADDRESS, CLINIC_MAPS_URL} from '@/shared/constants/seo.constants'
import styles from './header-location.module.scss'

interface Props extends ComponentProps<'address'> {
}

export function HeaderLocation({className, ...rest}: Props) {
    return (
        <address className={cn(styles['header-location'], className)} {...rest}>
            <a
                href={CLINIC_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['header-location__link']}
                aria-label={`Открыть адрес клиники на карте: ${CLINIC_ADDRESS}`}
            >
                <div className={styles['header-location__map-container']}>
                    <Image fill alt="" aria-hidden="true" src={'/images/header/map.webp'} className={styles['header-location__map']}/>
                </div>
                <div className={styles['header-location__content']}>
                    <Typography variant={'subtitle-1'}>г. Москва</Typography>
                    <Typography variant={'body-1'}>ул. Перерва д. 39</Typography>
                </div>
            </a>
        </address>
    )
}
