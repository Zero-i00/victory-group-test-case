import cn from 'clsx'
import {MousePointer2} from 'lucide-react'
import type {ComponentProps} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import {CLINIC_ADDRESS, CLINIC_MAPS_URL} from '@/shared/constants/seo.constants'
import styles from './footer-location.module.scss'

interface Props extends ComponentProps<'address'> {}

export function FooterLocation({className, ...rest}: Props) {
    return (
        <address className={cn(styles['footer-location'], className)} {...rest}>
            <a
                href={CLINIC_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Открыть адрес клиники на карте: ${CLINIC_ADDRESS}`}
                className={styles['footer-location__link']}
            >
                <MousePointer2 className={styles['footer-location__icon']}/>
                <div className={styles['footer-location__content']}>
                    <Typography variant="subtitle-1">г. Москва</Typography>
                    <Typography variant="body-1">ул. Перерва д. 39</Typography>
                </div>
            </a>
        </address>
    )
}
