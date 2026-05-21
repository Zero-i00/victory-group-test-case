import cn from 'clsx'
import type {TypographyProps, TypographyVariant} from './typography.props'
import styles from './typography.module.scss'

const TYPOGRAPHY_MAPPED_ELEMENT: Record<TypographyVariant, keyof HTMLElementTagNameMap> = {
    h1: 'h1',
    h2: 'h2',
    'subtitle-1': 'p',
    'subtitle-2': 'p',
    'body-1': 'p',
    'body-2': 'p',
    caption: 'span',
}

export function Typography({variant, as, children, className, ...rest}: TypographyProps) {
    const Component = as ?? TYPOGRAPHY_MAPPED_ELEMENT[variant]
    return (
        <Component className={cn(styles.typography, styles[`typography--${variant}`], className)} {...rest}>
            {children}
        </Component>
    )
}
