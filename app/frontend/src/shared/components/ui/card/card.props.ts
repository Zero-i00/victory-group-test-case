import type {ComponentProps} from 'react'
import type {TypographyElement, TypographyProps, TypographyVariant} from '@/shared/components/ui/typography'

export type CardProps = ComponentProps<'div'>

export type CardHeaderProps = ComponentProps<'div'>

export interface CardTitleProps extends Omit<TypographyProps, 'variant'> {
    as?: TypographyElement
    variant?: TypographyVariant
}

export interface CardDescriptionProps extends Omit<TypographyProps, 'variant'> {
    variant?: TypographyVariant
}

export type CardContentProps = ComponentProps<'div'>

export type CardFooterProps = ComponentProps<'div'>
