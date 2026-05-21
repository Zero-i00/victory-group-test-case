import cn from 'clsx'
import Image from 'next/image'
import type {Advantage} from '@/features/about/types/advantage.types'
import {Card, type CardProps} from '@/shared/components/ui/card'
import styles from './advantage-card.module.scss'

interface Props extends CardProps {
    advantage: Advantage
}

export function AdvantageCard({advantage, className, ...rest}: Props) {
    return (
        <Card className={cn(styles['advantage-card'], className)} {...rest}>
            <Card.Header>
                <Image alt={''} width={60} height={60} src={advantage.icon}/>
            </Card.Header>
            <Card.Content>
                <Card.Description>{advantage.text}</Card.Description>
            </Card.Content>
        </Card>
    )
}
