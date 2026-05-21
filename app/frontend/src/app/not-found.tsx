import type {Metadata} from 'next'
import Link from 'next/link'
import {Card} from '@/shared/components/ui/card'
import {Typography} from '@/shared/components/ui/typography'
import {NO_INDEX} from '@/shared/constants/seo.constants'
import styles from './not-found.module.scss'

export const metadata: Metadata = NO_INDEX

export default function NotFound() {
    return (
        <main className={styles['not-found']}>
            <Card className={styles['not-found__card']}>
                <Card.Header className={styles['not-found__header']}>
                    <Typography variant="h1" as="p" className={styles['not-found__code']} aria-hidden="true">
                        404
                    </Typography>
                    <Card.Title as="h1" variant="h2">
                        Страница не найдена
                    </Card.Title>
                    <Card.Description>
                        Запрошенная страница не существует или была удалена.
                        Возможно, ссылка устарела или содержит опечатку.
                    </Card.Description>
                </Card.Header>
                <Card.Footer className={styles['not-found__footer']}>
                    <Link href="/" className={styles['not-found__link']}>
                        Вернуться на главную
                    </Link>
                </Card.Footer>
            </Card>
        </main>
    )
}
