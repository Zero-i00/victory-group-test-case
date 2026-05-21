import cn from 'clsx'
import {MessageCircle} from 'lucide-react'
import type {ComponentProps} from 'react'
import {Typography} from '@/shared/components/ui/typography'
import {CLINIC_WHATSAPP_URL} from '@/shared/constants/seo.constants'
import styles from './footer-social-media.module.scss'

interface Props extends ComponentProps<'div'> {}

export function FooterSocialMedia({className, ...rest}: Props) {
    return (
        <div className={cn(styles['footer-social-media'], className)} {...rest}>
            <a
                href={CLINIC_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Написать нам в WhatsApp"
                className={styles['footer-social-media__link']}
            >
                <MessageCircle className={styles['footer-social-media__icon']}/>
                <Typography variant="body-1">Напиши нам в WhatsApp</Typography>
            </a>
        </div>
    )
}
