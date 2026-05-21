import cn from 'clsx'
import {Typography} from '@/shared/components/ui/typography'
import type {
    CardContentProps,
    CardDescriptionProps,
    CardFooterProps,
    CardHeaderProps,
    CardProps,
    CardTitleProps,
} from './card.props'
import styles from './card.module.scss'

function CardRoot({children, className, ...rest}: CardProps) {
    return (
        <div className={cn(styles.card, className)} data-slot="card" {...rest}>
            {children}
        </div>
    )
}

function CardHeader({className, ...props}: CardHeaderProps) {
    return <div data-slot="card-header" className={cn(styles.card__header, className)} {...props} />
}

function CardTitle({className, variant = 'subtitle-1', ...props}: CardTitleProps) {
    return (
        <Typography data-slot="card-title" variant={variant} className={cn(styles.card__title, className)} {...props} />
    )
}

function CardDescription({className, variant = 'body-1', ...props}: CardDescriptionProps) {
    return (
        <Typography
            data-slot="card-description"
            variant={variant}
            className={cn(styles.card__description, className)}
            {...props}
        />
    )
}

function CardContent({className, ...props}: CardContentProps) {
    return <div data-slot="card-content" className={cn(styles.card__content, className)} {...props} />
}

function CardFooter({className, ...props}: CardFooterProps) {
    return <div data-slot="card-footer" className={cn(styles.card__footer, className)} {...props} />
}

export const Card = Object.assign(CardRoot, {
    Header: CardHeader,
    Footer: CardFooter,
    Title: CardTitle,
    Description: CardDescription,
    Content: CardContent,
})
