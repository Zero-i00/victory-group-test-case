import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function ProductSection({id = SECTION_CONFIG.PRODUCT, ...rest}: ComponentProps<'section'>) {
    return <section id={id} {...rest}></section>
}
