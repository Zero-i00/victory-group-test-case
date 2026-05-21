import cn from 'clsx'
import {MousePointer2} from 'lucide-react'
import type {ComponentProps} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import {SCHEMA} from '@/shared/constants/schema.constants'
import {CLINIC_ADDRESS, CLINIC_CITY, CLINIC_COUNTRY, CLINIC_MAPS_URL} from '@/shared/constants/seo.constants'
import styles from './footer-location.module.scss'

interface Props extends ComponentProps<'address'> {}

export function FooterLocation({className, ...rest}: Props) {
    return (
        <address
            itemProp="address"
            itemScope
            itemType={SCHEMA.PostalAddress}
            className={cn(styles['footer-location'], className)}
            {...rest}
        >
            <meta itemProp="addressCountry" content={CLINIC_COUNTRY} />
            <meta itemProp="addressLocality" content={CLINIC_CITY} />
            <a
                href={CLINIC_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Открыть адрес клиники на карте: ${CLINIC_ADDRESS}`}
                className={styles['footer-location__link']}
            >
                <MousePointer2 className={styles['footer-location__icon']} aria-hidden="true"/>
                <div className={styles['footer-location__content']}>
                    <Typography variant="subtitle-1">г. Москва</Typography>
                    <Typography variant="body-1" itemProp="streetAddress">ул. Перерва д. 39</Typography>
                </div>
            </a>
        </address>
    )
}
