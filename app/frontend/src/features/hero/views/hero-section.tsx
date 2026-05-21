import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import styles from './hero-section.module.scss'

export function HeroSection({id = SECTION_CONFIG.HERO, ...rest}: ComponentProps<'section'>) {
    return (
        <section id={id} className={styles['hero-section']} {...rest}>
            <div className="container">

            </div>
        </section>
    )
}
