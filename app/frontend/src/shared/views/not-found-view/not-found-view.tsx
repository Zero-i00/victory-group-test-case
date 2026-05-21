import cn from 'clsx'
import Link from 'next/link'
import type {ComponentProps} from 'react'
import {Card} from '@/shared/components/ui/card'
import {Typography} from '@/shared/components/ui/typography'
import {PAGE_CONFIG} from '@/shared/configs/page.config'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import styles from './not-found-view.module.scss'

export function NotFoundView({className, id = SECTION_CONFIG.MAIN_CONTENT, ...rest}: ComponentProps<'main'>) {
    return (
        <main id={id} className={cn(styles['not-found'], className)} {...rest}>
            <Card className={styles['not-found__card']}>
                <Card.Header className={styles['not-found__header']}>
                    <Typography variant="h1" as="p" className={styles['not-found__code']} aria-hidden="true">
                        404
                    </Typography>
                    <Card.Title as="h1" variant="h2">
                        Страница не найдена
                    </Card.Title>
                    <Card.Description>
                        Запрошенная страница не существует или была удалена. Возможно, ссылка устарела или содержит
                        опечатку.
                    </Card.Description>
                </Card.Header>
                <Card.Footer className={styles['not-found__footer']}>
                    <Link href={PAGE_CONFIG.ROOT} className={styles['not-found__link']}>
                        Вернуться на главную
                    </Link>
                </Card.Footer>
            </Card>
        </main>
    )
}
