import type {HTMLAttributes} from 'react'

export type TypographyVariant = 'h1' | 'h2' | 'subtitle-1' | 'subtitle-2' | 'body-1' | 'body-2' | 'caption'

export const TYPOGRAPHY_ELEMENTS = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'li',
    'em',
    'span',
    'address',
] as const satisfies ReadonlyArray<keyof HTMLElementTagNameMap>

export type TypographyElement = (typeof TYPOGRAPHY_ELEMENTS)[number]

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    as?: TypographyElement
    variant: TypographyVariant
}
