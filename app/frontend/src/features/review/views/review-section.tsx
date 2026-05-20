import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function ReviewSection({id = SECTION_CONFIG.REVIEW, ...rest}: ComponentProps<'section'>) {
    return <section id={id} {...rest}></section>
}
