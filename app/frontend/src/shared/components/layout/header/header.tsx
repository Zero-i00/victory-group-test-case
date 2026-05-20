import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function Header({id = SECTION_CONFIG.HEADER_CONTENT, ...rest}: ComponentProps<'header'>) {
    return <header id={id} {...rest}></header>
}
