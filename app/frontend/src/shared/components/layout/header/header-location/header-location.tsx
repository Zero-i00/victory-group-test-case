import cn from 'clsx'
import Image from 'next/image'
import type {ComponentProps} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import {CLINIC_ADDRESS, CLINIC_MAPS_URL} from '@/shared/constants/seo.constants'
import styles from './header-location.module.scss'

interface Props extends ComponentProps<'address'> {
    compact?: boolean
}

export function HeaderLocation({className, compact: _compact, ...rest}: Props) {
    return (
        <address className={cn(styles['header-address'], className)} {...rest}>
            <a
                href={CLINIC_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles['header-address__link']}
                aria-label={`Открыть адрес клиники на карте: ${CLINIC_ADDRESS}`}
            >
                <div className={styles['header-address__map-container']}>
                    <Image fill alt="" src={'/images/header/map.webp'} className={styles['header-address__map']}/>
                </div>
                <div className={styles['header-address__content']}>
                    <Typography variant={'subtitle-1'}>г. Москва</Typography>
                    <Typography variant={'body-1'}>ул. Перерва д. 39</Typography>
                </div>
            </a>
        </address>
    )
}
