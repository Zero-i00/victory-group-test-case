import type {ComponentProps} from 'react'
import {Footer} from '@/shared/components/layout/footer/footer'
import {Header} from '@/shared/components/layout/header/header'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function Layout({children, ...rest}: ComponentProps<'div'>) {
    return (
        <div {...rest}>
            <div>
                <Header/>
                <main id={SECTION_CONFIG.MAIN_CONTENT}>{children}</main>
                <Footer/>
            </div>
        </div>
    )
}
