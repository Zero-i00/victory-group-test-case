import type {ComponentProps} from 'react'
import type {TypographyProps, TypographyVariant} from '@/shared/components/ui/typography'

export interface CardProps extends ComponentProps<'div'> {
}

export interface CardHeaderProps extends ComponentProps<'div'> {
}

export interface CardTitleProps extends Omit<TypographyProps, 'variant'> {
    /**
     * Вариант типографики
     *
     * @default 'subtitle-1'
     */
    variant?: TypographyVariant
}

export interface CardDescriptionProps extends Omit<TypographyProps, 'variant'> {
    /**
     * Вариант типографики
     *
     * @default 'body-1'
     */
    variant?: TypographyVariant
}

export interface CardContentProps extends ComponentProps<'div'> {
}

export interface CardFooterProps extends ComponentProps<'div'> {
}
