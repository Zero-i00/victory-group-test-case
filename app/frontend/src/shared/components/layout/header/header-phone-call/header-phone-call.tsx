import cn from 'clsx'
import {PhoneCall} from 'lucide-react'
import {Card, type CardProps} from '@/shared/components/ui/card'
import {Pulse} from '@/shared/components/ui/pulse'
import {Typography} from '@/shared/components/ui/typography'
import {CLINIC_WORKING_HOURS} from '@/shared/constants/seo.constants'
import styles from './header-phone-call.module.scss'

interface Props extends CardProps {
}

export function HeaderPhoneCall({className, ...rest}: Props) {
    return (
        <Card className={cn(styles['header-phone-call'], className)} {...rest}>
            <div className={styles['header-phone-call__icon']} aria-hidden="true">
                <PhoneCall className={styles['header-phone-call__icon-svg']}/>
            </div>
            <div className={styles['header-phone-call__body']}>
                <a href="tel:+79855357666" className={styles['header-phone-call__link']}>
                    <Typography as="span" variant="subtitle-1" className={styles['header-phone-call__phone-prefix']}>
                        +7 985
                    </Typography>
                    <Typography as="span" variant="subtitle-1" className={styles['header-phone-call__phone-postfix']}>
                        535 76 66
                    </Typography>
                </a>
                <div className={styles['header-phone-call__status']}>
                    <Pulse/>
                    <Typography as="span" variant="body-2" className={styles['header-phone-call__status-text']}>
                        {CLINIC_WORKING_HOURS}
                    </Typography>
                </div>
            </div>
        </Card>
    )
}
