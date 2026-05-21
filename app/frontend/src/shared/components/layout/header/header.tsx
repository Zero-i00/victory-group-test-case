import cn from 'clsx'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { HeaderPhoneCall } from '@/shared/components/layout/header/header-phone-call'
import { Logo } from '@/shared/components/ui/logo'
import { Separator } from '@/shared/components/ui/separator'
import { Typography } from '@/shared/components/ui/typography'
import { PAGE_CONFIG } from '@/shared/configs/page.config'
import { SECTION_CONFIG } from '@/shared/configs/section.config'
import { APP_TITLE } from '@/shared/constants/root.constants'
import styles from './header.module.scss'
import { HeaderLocation } from './header-location'

export function Header({ className, id = SECTION_CONFIG.HEADER_CONTENT, ...rest }: ComponentProps<'header'>) {
    return (
        <header id={id} data-header-root className={cn(styles.header, className)} {...rest}>
            <div className="container">
                <div className={styles.header__inner}>
                    <div className={styles.header__brand}>
                        <Link
                            href={PAGE_CONFIG.ROOT}
                            className={styles['header__logo-link']}
                            aria-label={`${APP_TITLE} — перейти на главную`}
                        >
                            <Logo />
                        </Link>
                        <Separator className={styles['header__logo-separator']} />
                        <Typography as="span" variant="body-2" className={styles['header__clinic-name']}>
                            Американский
                            <br />
                            стоматологический центр
                        </Typography>
                    </div>

                    <HeaderLocation className={styles['header__location--desktop']} />

                    <HeaderPhoneCall className={styles['header__phone--desktop']} />
                </div>
            </div>
        </header>
    )
}
