import cn from 'clsx'
import {Card, type CardProps} from '@/shared/components/ui/card'
import {Typography} from '@/shared/components/ui/typography'
import styles from './section-caption.module.scss'

interface Props extends CardProps {
    caption: string
}

export function SectionCaption({caption, className, ...rest}: Props) {
    return (
        <Card className={cn(styles['section-caption'], className)} {...rest}>
            <Card.Content>
                <Typography variant={'body-2'} as={'p'} className={styles['section-caption__text']}>
                    {caption}
                </Typography>
            </Card.Content>
        </Card>
    )
}
