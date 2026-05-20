import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function Footer({id = SECTION_CONFIG.FOOTER_CONTENT, ...rest}: ComponentProps<'footer'>) {
    return <footer id={id} {...rest}></footer>
}
