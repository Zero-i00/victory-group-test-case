import type {ComponentProps} from 'react'
import {Footer} from '@/shared/components/layout/footer/footer'
import {Header} from '@/shared/components/layout/header/header'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import {SCHEMA} from '@/shared/constants/schema.constants'

export function Layout({children, ...rest}: ComponentProps<'div'>) {
    return (
        <div {...rest}>
            <a href={`#${SECTION_CONFIG.MAIN_CONTENT}`} className="skip-link">
                Перейти к основному содержимому
            </a>
            <Header/>
            <main id={SECTION_CONFIG.MAIN_CONTENT} tabIndex={-1} itemScope itemType={SCHEMA.WebPage}>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
