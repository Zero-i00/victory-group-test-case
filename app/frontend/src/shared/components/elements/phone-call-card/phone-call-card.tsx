import cn from 'clsx'
import {PhoneCall} from 'lucide-react'
import {Card, type CardProps} from '@/shared/components/ui/card'
import {Pulse} from '@/shared/components/ui/pulse'
import {Typography} from '@/shared/components/ui/typography'
import styles from './phone-call-card.module.scss'

interface Props extends CardProps {
}

export function PhoneCallCard({className, ...rest}: Props) {
    return (
        <Card className={cn(styles['phone-call-card'], className)} {...rest}>
            <div className={styles['phone-call-card__icon']} aria-hidden="true">
                <PhoneCall/>
            </div>
            <div className={styles['phone-call-card__body']}>
                <a href="tel:+79855357666" className={styles['phone-call-card__link']}>
                    <Typography as="span" variant="subtitle-1" className={styles['phone-call-card__phone-prefix']}>
                        +7 985
                    </Typography>
                    <Typography as="span" variant="subtitle-1" className={styles['phone-call-card__phone-postfix']}>
                        535 76 66
                    </Typography>
                </a>
                <div className={styles['phone-call-card__status']}>
                    <Pulse/>
                    <Typography as="span" variant="body-2" className={styles['phone-call-card__status-text']}>
                        Звоните в любое время
                    </Typography>
                </div>
            </div>
        </Card>
    )
}
