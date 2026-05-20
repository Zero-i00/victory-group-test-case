import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function HeroSection({id = SECTION_CONFIG.HERO, ...rest}: ComponentProps<'section'>) {
    return <section id={id} {...rest}></section>
}
