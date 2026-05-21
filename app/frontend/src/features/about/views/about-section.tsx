import cn from 'clsx'
import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import styles from './about-section.module.scss'

export function AboutSection({className, id = SECTION_CONFIG.ABOUT, ...rest}: ComponentProps<'section'>) {
    return (
        <section id={id} className={cn(styles['about-section'], className)} {...rest}>
            <div className={`container`}></div>
        </section>
    )
}
