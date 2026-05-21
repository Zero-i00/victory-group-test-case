import cn from 'clsx'
import {PhoneCall} from 'lucide-react'
import type {ComponentProps} from 'react'
import {Pulse} from '@/shared/components/ui/pulse'
import {Typography} from '@/shared/components/ui/typography'
import {SCHEMA} from '@/shared/constants/schema.constants'
import {CLINIC_PHONE, CLINIC_PHONE_HREF, CLINIC_WORKING_HOURS} from '@/shared/constants/seo.constants'
import styles from './footer-phone-call.module.scss'

interface Props extends ComponentProps<'div'> {
}

export function FooterPhoneCall({className, ...rest}: Props) {
    return (
        <div className={cn(styles['footer-phone-call'], className)} {...rest}>
            <PhoneCall className={styles['footer-phone-call__icon']} aria-hidden="true"/>
            <div className={styles['footer-phone-call__body']}>
                <div itemProp="contactPoint" itemScope itemType={SCHEMA.ContactPoint}>
                    <meta itemProp="contactType" content="reservations" />
                    <meta itemProp="availableLanguage" content="Russian" />
                    <a
                        href={CLINIC_PHONE_HREF}
                        className={styles['footer-phone-call__link']}
                        aria-label={`Позвонить в клинику: ${CLINIC_PHONE}`}
                        itemProp="telephone"
                    >
                        <Typography as="span" variant="subtitle-1">
                            {CLINIC_PHONE}
                        </Typography>
                    </a>
                </div>
                <div className={styles['footer-phone-call__status']}>
                    <Pulse/>
                    <Typography as="span" variant="body-2" className={styles['footer-phone-call__status-text']}>
                        {CLINIC_WORKING_HOURS}
                    </Typography>
                </div>
            </div>
        </div>
    )
}
