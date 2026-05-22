'use client'

import cn from 'clsx'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { HeaderLocation } from '@/shared/components/layout/header/header-location'
import { HeaderPhoneCall } from '@/shared/components/layout/header/header-phone-call'
import { Logo } from '@/shared/components/ui/logo'
import { PAGE_CONFIG } from '@/shared/configs/page.config'
import { SECTION_CONFIG } from '@/shared/configs/section.config'
import styles from './header-mobile-menu.module.scss'

interface Props {
    className?: string
}

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

const NAV_LINKS = [
    { id: SECTION_CONFIG.PRODUCT, label: 'Услуги' },
    { id: SECTION_CONFIG.EMPLOYEE, label: 'Специалисты' },
    { id: SECTION_CONFIG.ABOUT, label: 'О клинике' },
    { id: SECTION_CONFIG.REVIEW, label: 'Отзывы' },
] as const

export function HeaderMobileMenu({ className }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    const closeBtnRef = useRef<HTMLButtonElement>(null)
    const didOpenRef = useRef(false)
    const overlayId = useId()

    const close = () => setIsOpen(false)

    useEffect(() => {
        if (!isOpen) {
            if (didOpenRef.current) triggerRef.current?.focus()
            return
        }

        didOpenRef.current = true

        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        const main = document.getElementById(SECTION_CONFIG.MAIN_CONTENT)
        const footer = document.getElementById(SECTION_CONFIG.FOOTER_CONTENT)
        main?.setAttribute('inert', '')
        footer?.setAttribute('inert', '')

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        document.addEventListener('keydown', onKeyDown)

        requestAnimationFrame(() => closeBtnRef.current?.focus())

        return () => {
            document.body.style.overflow = prevOverflow
            main?.removeAttribute('inert')
            footer?.removeAttribute('inert')
            document.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen])

    const handleTrap = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== 'Tab') return
        const root = overlayRef.current
        if (!root) return
        const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE))
        if (!items.length) return
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault()
            last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault()
            first.focus()
        }
    }

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                aria-label="Открыть меню"
                aria-expanded={isOpen}
                aria-controls={overlayId}
                onClick={() => setIsOpen(true)}
                className={cn(styles['header-mobile-menu__trigger'], className)}
            >
                <Menu aria-hidden="true" className={styles['header-mobile-menu__icon']} />
            </button>

            {isOpen && (
                <div
                    ref={overlayRef}
                    id={overlayId}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Меню навигации"
                    className={styles['header-mobile-menu__overlay']}
                    onKeyDown={handleTrap}
                >
                    <div className={styles['header-mobile-menu__header']}>
                        <Link href={PAGE_CONFIG.ROOT} onClick={close} aria-label="DentistAm — на главную">
                            <Logo />
                        </Link>
                        <button
                            ref={closeBtnRef}
                            type="button"
                            aria-label="Закрыть меню"
                            onClick={close}
                            className={styles['header-mobile-menu__close']}
                        >
                            <X aria-hidden="true" className={styles['header-mobile-menu__icon']} />
                        </button>
                    </div>

                    <nav aria-label="Разделы сайта" className={styles['header-mobile-menu__nav']}>
                        {NAV_LINKS.map(({ id, label }) => (
                            <a key={id} href={`#${id}`} onClick={close} className={styles['header-mobile-menu__link']}>
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className={styles['header-mobile-menu__contacts']}>
                        <HeaderLocation />
                        <HeaderPhoneCall />
                    </div>
                </div>
            )}
        </>
    )
}
