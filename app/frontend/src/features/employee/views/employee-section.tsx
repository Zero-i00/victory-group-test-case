import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'

export function EmployeeSection({id = SECTION_CONFIG.EMPLOYEE, ...rest}: ComponentProps<'section'>) {
    return <section id={id} {...rest}></section>
}
