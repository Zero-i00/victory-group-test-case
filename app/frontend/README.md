# Frontend — DentistAm

Фронтенд одностраничного лендинга стоматологической клиники на **Next.js 16 (App Router)**.

## Стек

| Инструмент | Версия | Назначение |
|---|---|---|
| Next.js | 16 | SSR, роутинг, оптимизация изображений |
| React | 19 | UI |
| TypeScript | 6 | Типизация |
| TanStack Query | 5 | Серверный prefetch + клиентская инфинити-пагинация |
| SCSS Modules + BEM | — | Стилизация |
| Biome | 2 | Линтинг и форматирование |
| Bun | — | Пакетный менеджер и рантайм |

## Запуск

```bash
bun install
bun dev          # http://localhost:3000
```

Для запуска в Docker (биндинг на 0.0.0.0):

```bash
bun docker:dev
```

## Сборка и продакшн

```bash
bun build
bun start
```

## Линтинг и форматирование

```bash
bun lint      # biome check
bun format    # biome format --write
```

## Структура `src/`

```
src/
├── app/                    # App Router: layout, page, metadata
├── features/               # Секции лендинга (feature-sliced)
│   ├── hero/
│   ├── product/            # Услуги клиники
│   ├── employee/           # Врачи
│   ├── about/              # О клинике
│   └── review/             # Видеоотзывы
└── shared/
    ├── api/                # Axios-инстанс
    ├── components/
    │   ├── ui/             # UI-кит: Button, Input, Card, Typography…
    │   ├── elements/       # Переиспользуемые блоки: PhoneCallCard…
    │   └── layout/         # Header, Footer
    ├── configs/            # SECTION_CONFIG, NAVIGATION_ITEMS
    ├── providers/          # QueryClientProvider + HydrationBoundary
    └── types/              # Общие типы (Pagination и др.)
```

Подробные правила разработки — в [CLAUDE.md](./CLAUDE.md).  
Обоснование выбора Next.js — в [EXPLAIN.md](./EXPLAIN.md).
