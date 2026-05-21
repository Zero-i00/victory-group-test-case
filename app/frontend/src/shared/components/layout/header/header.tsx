import cn from 'clsx'
import Link from 'next/link'
import type {ComponentProps} from 'react'
import {PhoneCallCard} from '@/shared/components/elements/phone-call-card'
import {Logo} from '@/shared/components/ui/logo'
import {PAGE_CONFIG} from '@/shared/configs/page.config'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import {APP_TITLE} from '@/shared/constants/root.constants'
import styles from './header.module.scss'

export function Header({className, id = SECTION_CONFIG.HEADER_CONTENT, ...rest}: ComponentProps<'header'>) {
    return (
        <header id={id} className={cn(styles.header, className)} {...rest}>
            <div className={'container'}>
                <div className={styles.header__inner}>
                    <Link href={PAGE_CONFIG.ROOT} aria-label={`${APP_TITLE} — перейти на главную`}>
                        <Logo/>
                    </Link>
                    <PhoneCallCard/>
                </div>
            </div>
        </header>
    )
}
