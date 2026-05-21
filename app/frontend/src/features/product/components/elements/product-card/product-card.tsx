'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import type {Product} from '@/features/product/types/product.types'
import {Button} from '@/shared/components/ui/button'
import {Card, type CardProps} from '@/shared/components/ui/card'
import {SERVER_URL} from '@/shared/constants/root.constants'
import styles from './product-card.module.scss'

interface ProductCardProps extends CardProps {
    product: Product
}

export function ProductCard({product, className, ...rest}: ProductCardProps) {
    return (
        <Card className={cn(styles['product-card'], className)} {...rest}>
            <Card.Header className={styles['product-card__header']}>
                <Image
                    fill
                    unoptimized
                    alt={`Услуга стоматологии: ${product.title}`}
                    src={SERVER_URL + product.image}
                    sizes="(min-width: 1440px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={styles['product-card__image']}
                />
            </Card.Header>
            <Card.Content className={styles['product-card__content']}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Description className={styles['product-card__description']}>
                    {product.description}
                </Card.Description>
            </Card.Content>
            <Card.Footer className={styles['product-card__footer']}>
                <Button
                    size={'lg'}
                    className={styles['product-card__application']}
                    aria-label={`Записаться на услугу: ${product.title}`}
                    onClick={() => toast.success('Заявка принята')}
                >
                    Записаться
                </Button>
                <Link
                    href={`/products/${product.id}`}
                    className={styles['product-card__more']}
                    aria-label={`Читать полностью про услугу: ${product.title}`}
                >
                    Читать полностью
                </Link>
            </Card.Footer>
        </Card>
    )
}
