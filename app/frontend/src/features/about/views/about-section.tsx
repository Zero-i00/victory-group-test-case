import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function AboutSection({id = SECTION_CONFIG.ABOUT, ...rest}: ComponentProps<'section'>) {
    return <section id={id} {...rest}></section>
}
