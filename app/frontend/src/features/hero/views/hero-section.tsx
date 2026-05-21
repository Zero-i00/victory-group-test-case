import type {ComponentProps} from 'react'
import {SECTION_CONFIG} from '@/shared/configs/section.config'
import {Typography} from '@/shared/components/ui/typography'
import {Button} from '@/shared/components/ui/button'
import {Card} from '@/shared/components/ui/card'
import {Input} from '@/shared/components/ui/input'
import {Loader} from '@/shared/components/ui/loader'
import styles from './hero-section.module.scss'

export function HeroSection({id = SECTION_CONFIG.HERO, ...rest}: ComponentProps<'section'>) {
    return (
        <section id={id} className={styles.section} {...rest}>
            <div className="container">

                {/* ─── Typography ─── */}
                <div className={styles.group}>
                    <Typography variant="h1">Heading h1 — Современная стоматология</Typography>
                    <Typography variant="h2">Heading h2 — Профессиональная помощь</Typography>
                    <Typography variant="subtitle-1">Subtitle 1 — Опытные специалисты с заботой о здоровье</Typography>
                    <Typography variant="subtitle-2">Subtitle 2 — Записаться удобно онлайн</Typography>
                    <Typography variant="body-1">Body 1 — Мы предлагаем полный спектр стоматологических услуг: лечение, протезирование, имплантация и профилактика.</Typography>
                    <Typography variant="body-2">Body 2 — Работаем без выходных, принимаем детей с 3 лет.</Typography>
                    <Typography variant="caption">Caption — * Цены уточняйте при записи.</Typography>
                </div>

                {/* ─── Button ─── */}
                <div className={styles.group}>
                    <Typography variant="subtitle-1" as="h3">Button</Typography>
                    <div className={styles.row}>
                        <Button variant="default" size="sm">Default sm</Button>
                        <Button variant="default" size="md">Default md</Button>
                        <Button variant="default" size="lg">Default lg</Button>
                        <Button variant="default" size="xl">Default xl</Button>
                    </div>
                    <div className={styles.row}>
                        <Button variant="outline" size="md">Outline</Button>
                        <Button variant="icon" size="md">🦷</Button>
                        <Button variant="default" size="md" disabled>Disabled</Button>
                        <Button variant="default" size="md" isLoading>Loading</Button>
                    </div>
                </div>

                {/* ─── Input ─── */}
                <div className={styles.group}>
                    <Typography variant="subtitle-1" as="h3">Input</Typography>
                    <div className={styles.inputGrid}>
                        <Input id="name" placeholder="Ваше имя" />
                        <Input id="phone" type="tel" placeholder="Телефон" required />
                        <Input id="hint-ex" placeholder="С подсказкой" hint="Мы не передаём данные третьим лицам" />
                        <Input id="error-ex" placeholder="С ошибкой" error="Обязательное поле" />
                        <Input id="disabled-ex" placeholder="Недоступно" disabled />
                    </div>
                </div>

                {/* ─── Loader ─── */}
                <div className={styles.group}>
                    <Typography variant="subtitle-1" as="h3">Loader</Typography>
                    <div className={styles.row}>
                        <Loader />
                        <Loader />
                        <Loader />
                    </div>
                </div>

                {/* ─── Card ─── */}
                <div className={styles.group}>
                    <Typography variant="subtitle-1" as="h3">Card</Typography>
                    <div className={styles.cardGrid}>
                        <Card>
                            <Card.Header>
                                <Card.Title variant="subtitle-1">Терапия</Card.Title>
                            </Card.Header>
                            <Card.Content>
                                <Card.Description>
                                    Лечение кариеса, пульпита и других заболеваний зуба с применением современных материалов.
                                </Card.Description>
                            </Card.Content>
                            <Card.Footer>
                                <Button size="sm" variant="outline">Подробнее</Button>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Header>
                                <Card.Title variant="subtitle-1">Имплантация</Card.Title>
                            </Card.Header>
                            <Card.Content>
                                <Card.Description>
                                    Установка зубных имплантов с гарантией на 15 лет. Консультация — бесплатно.
                                </Card.Description>
                            </Card.Content>
                            <Card.Footer>
                                <Button size="sm" variant="outline">Подробнее</Button>
                            </Card.Footer>
                        </Card>

                        <Card>
                            <Card.Header>
                                <Card.Title variant="subtitle-1">Ортодонтия</Card.Title>
                            </Card.Header>
                            <Card.Content>
                                <Card.Description>
                                    Брекеты, элайнеры и ретейнеры для идеальной улыбки в любом возрасте.
                                </Card.Description>
                            </Card.Content>
                            <Card.Footer>
                                <Button size="sm" variant="outline">Подробнее</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>

            </div>
        </section>
    )
}
