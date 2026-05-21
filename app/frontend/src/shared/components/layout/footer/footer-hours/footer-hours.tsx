import cn from 'clsx'
import {Clock} from 'lucide-react'
import type {ComponentProps} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import styles from './footer-hours.module.scss'

interface Props extends ComponentProps<'div'> {}

export function FooterHours({className, ...rest}: Props) {
    return (
        <div className={cn(styles['footer-hours'], className)} {...rest}>
            <Clock className={styles['footer-hours__icon']}/>
            <div className={styles['footer-hours__content']}>
                <Typography variant="body-1">ПН-ПТ 09:00—21:00</Typography>
                <Typography variant="body-1">СБ-ВС 10:00—20:00</Typography>
            </div>
        </div>
    )
}
