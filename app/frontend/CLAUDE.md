# Frontend — Обязательные правила разработки

Стек: **Next.js 16 (App Router) · React 19 · SCSS modules · BEM · TypeScript 6 · TanStack Query 5 · biome · bun**

> Каждый компонент и каждая секция ОБЯЗАНЫ соответствовать всем четырём блокам правил ниже.
> Перед завершением работы проверь каждый пункт.

---

## 1. SSR — Server Components по умолчанию

- **Все компоненты — Server Components**, пока не доказано обратное.
- `'use client'` ставить **только** если компонент использует: `useState`, `useEffect`, `useRef`, браузерные API, обработчики событий, `useSuspenseInfiniteQuery` / хуки React Query.
- Клиентские компоненты должны быть **листовыми** — не оборачивать в них серверные дети без нужды.
- Данные из API — через SSR prefetch в `src/app/page.tsx`:
  ```ts
  await queryClient.prefetchInfiniteQuery(employeeQuery.list())
  ```
  и `<HydrationBoundary>` в JSX → клиентский `useSuspenseInfiniteQuery` читает данные синхронно, без waterfall.
- `next/image` для **всех** изображений: обязательны `width`+`height` (или `fill` с контейнером фиксированного размера) → **CLS = 0**.
- `priority` на `<Image>` — только для above-the-fold (Hero). Всё остальное — `loading="lazy"` (по умолчанию).

### Проверка SSR
```
view-source:http://localhost:3000
```
Разметка всех секций должна присутствовать в HTML без JS.

---

## 2. Производительность — Lighthouse ≥ 90 по всем метрикам

### Изображения
- Формат **webp** на бэкенде, `sizes` указывать точно под реальный размер отображения.
- Fallback при пустом URL (`photo === ''`) — иконка из `lucide-react`, никаких broken img.

### Шрифты
- Шрифт Manrope подключён через `next/font/google` в `layout.tsx`, CSS-переменная `--font-manrope`.
- `display: swap` — уже настроено, не менять.

### Анимации — **только CSS/SCSS**
- `framer-motion`, `gsap`, `lottie` и другие JS-анимационные библиотеки **запрещены**.
- Разрешено: `transition`, `@keyframes`, `IntersectionObserver` через нативный hook.
- Scroll-reveal: нативный `IntersectionObserver` hook (`'use client'`) ставит `data-revealed="true"`, SCSS реагирует через атрибут-селектор.
- **`@media (prefers-reduced-motion: reduce)`** — глобальный reset уже есть в `globals.scss`; он гасит все `transition` и `animation` до `0.01ms`. Локальные анимации дополнительно оборачивать не нужно. Для `@keyframes` в фоновых декорациях оборачивать в `@media (prefers-reduced-motion: no-preference)`.

### Bundle
- Нет лишних зависимостей. Иконки — только `lucide-react` (tree-shaking).
- Динамический `import()` для тяжёлых компонентов (карта, видеоплеер).

### Иконки lucide-react
- Размер задаётся **только** через CSS-переменные `--icon-xs/sm/md/lg/xl` из `globals.scss`, применённые через `className` на иконке и `width/height: var(--icon-*)` в SCSS.
- **Запрещено:** проп `size={number}`, прибитые `px`-значения в SCSS, рендер `<Icon />` без `className` (даёт неявный дефолт 24 px).
- Если ни один из пяти токенов не подходит — сначала ввести новый `--icon-*` в `globals.scss`, потом использовать.

---

## 3. Доступность (A11y / Accessibility) — Lighthouse Accessibility = 100

### Семантика
- `<section>` → обязательно `aria-labelledby` на `id` своего `<h2>`.
- Иерархия заголовков строго: `<h1>` (Hero) → `<h2>` (секции) → `<h3>` (карточки).
- Используй: `<nav>`, `<article>`, `<address>`, `<header>`, `<footer>`, `<main>` — по семантике, не по виду.

### ARIA
- Декоративные иконки и SVG: `aria-hidden="true"`.
- Смысловые иконки: `aria-label` на родителе или `<title>` внутри SVG.
- Кнопки с контекстом из дизайна: `aria-label="Подробнее о {имя}"` — чтобы скрин-ридер понимал, о ком речь.
- Модальное окно: `role="dialog"`, `aria-modal="true"`, `aria-label`.
- Загрузочный спиннер: `role="status"`, `aria-label="Загрузка"`.
- `<ul>` со снятыми стилями списка: добавить `role="list"` (Safari/VoiceOver).

### Клавиатура
- Все интерактивные элементы доступны через `Tab`.
- Видимый `focus-visible` на всех интерактивных элементах (`outline: 2px solid var(--color-primary)`).
- Модалка/дравер при открытии → фокус на первый элемент внутри; при закрытии → фокус возвращается на триггер.
- `Escape` закрывает модалку/дравер.
- `tabIndex` — только `-1` для программного фокуса на скрытых элементах; `tabIndex >= 0` не использовать, **кроме** non-native interactive elements с ARIA role (`role="button"`, `role="tab"` и т.п.) — там `tabIndex={0}` обязателен по ARIA spec.

### Изображения
- `alt` — обязателен на всех `<img>` / `<Image>`: смысловые — описание, декоративные — `alt=""`.
- `<iframe>` (карта) — `title` атрибут.

### Цвет и контраст
- Все цвета — только через CSS-переменные из `globals.scss`. Они уже WCAG AA-совместимы.
- Не использовать цвет как единственный способ передачи информации.

---

## 4. SCSS Modules + БЭМ

### Структура файлов компонента
```
component-name/
├── component-name.tsx
├── component-name.props.ts
├── component-name.module.scss
└── index.ts                    ← реэкспорт компонента и типов
```

### БЭМ-нейминг

Нейминг классов:
```scss
.block { }
.block__element { }
.block__multi-word-element { }
.block--modifier { }
.block__element--modifier { }
```

Структура в SCSS — элементы вложены в блок через `&__`:
```scss
.block {
  color: var(--color-primary);

  &__element {
    gap: var(--spacing-sm);

    &:hover { opacity: 0.85; }
    &:focus-visible { outline: 2px solid var(--color-primary); }
  }

  &__element--modifier { opacity: 0.5; }
}
```

**Запрещено:**
- `block__element__sub` — двойной `__`. BEM не поддерживает многоуровневые элементы; использовать `block__sub`.
- Голые HTML-селекторы внутри BEM-класса (`img { }`, `p { }`, `span { }`). Давать BEM-класс напрямую через `className`.

Вложенность в SCSS — максимум 2 уровня (`&__element { &:hover { } }`). Псевдоэлементы (`::before`, `::after`) и псевдоклассы (`:hover`, `:focus-visible`) — допустимы внутри элемента.

### Применение классов в TSX
```tsx
import cn from 'clsx'               // всегда 'clsx', не локальная утилита
import styles from './name.module.scss'

cn(styles.block, styles[`block--${variant}`], className)
cn(styles['block__element'], isActive && styles['block__element--active'])
```

### CSS-переменные — только из `globals.scss`
```scss
/* ✅ правильно */
color: var(--color-primary);
padding: var(--spacing-md);
border-radius: var(--rounded-lg);
font-size: var(--font-size-subtitle-1);

/* ❌ запрещено */
color: #E21F4D;
padding: 16px;
border-radius: 14px;
```
Локальные переменные внутри компонента — допустимы (`--card-spacing`, `--btn-icon-size`).

### Адаптив — Mobile First
```scss
.block {
  display: grid;
  grid-template-columns: 1fr; /* mobile — базовый */

  @media (min-width: 768px) { grid-template-columns: repeat(2, 1fr); }  /* tablet */
  @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); } /* desktop */
}
```

### Утилитарные классы (из `globals.scss`)
- `.container` — центрирование контента, `max-width: 1200px`, адаптивные паддинги.
- `.section-container-x` — горизонтальные паддинги секций.
- Секция всегда: `<section id={...} aria-labelledby={...} className={styles['section-name']}>` + `<div className="container">` внутри.

---

## Справочник токенов

### Цвета
| Переменная | Значение |
|---|---|
| `--color-primary` | #E21F4D |
| `--color-primary-shadow` | #E21F4D73 |
| `--surface-card` | #fdf2f5 |
| `--color-white` | #ffffff |
| `--color-gray-100…900` | от #f9f9f9 до #1a1a1a |
| `--color-overlay` | rgba(26,26,26,0.48) |
| `--color-error` | #e5484d |
| `--color-success` | #30a46c |

### Spacing
`--spacing-xs` 4px · `--spacing-sm` 8px · `--spacing-md` 16px · `--spacing-lg` 24px · `--spacing-xl` 48px

### Shadows, Transitions, Focus
`--shadow-sm` · `--shadow-md` · `--shadow-lg` · `--shadow-lg-hover`
`--transition-fast` 120ms · `--transition-base` 180ms · `--transition-slow` 250ms
`--focus-ring` 2px solid primary · `--focus-ring-offset` 4px

### Border-radius
`--rounded-xs` 4px · `--rounded-sm` 8px · `--rounded-md` 14px · `--rounded-lg` 24px · `--rounded-xl` 40px · `--rounded-full` 9999px

### Z-index
`--z-base` 0 · `--z-dropdown` 10 · `--z-sticky` 100 · `--z-overlay` 150 · `--z-modal` 200 · `--z-toast` 300

### Типографика (variant → переменные)
| Variant | font-size | font-weight | line-height |
|---|---|---|---|
| h1 | `clamp(28px→55px)` | 800 | 1.1 |
| h2 | `clamp(20px→30px)` | 800 | 1.2 |
| subtitle-1 | `clamp(15px→18px)` | 600 | 1.4 |
| subtitle-2 | `clamp(14px→16px)` | 500 | 1.4 |
| body-1 | `clamp(13px→14px)` | 400 | 1.6 |
| body-2 | `clamp(11px→12px)` | 400 | 1.6 |
| caption | `clamp(9px→10px)` | 400 | 1.5 |

---

## Существующий UI-кит (`src/shared/components/ui/`)

Перед созданием нового компонента — проверь, есть ли он уже.

| Компонент | Props | Примечания |
|---|---|---|
| `<Button>` | `variant: default\|outline\|icon`, `size: sm\|md\|lg\|xl`, `isLoading` | aria-busy, aria-disabled |
| `<Input>` | `label?`, `error?`, `hint?`, `id` | `'use client'`, forwardRef, aria-invalid |
| `<Card>` | составной: `.Header`, `.Title`, `.Description`, `.Content`, `.Footer` | data-slot атрибуты |
| `<Typography>` | `variant: h1\|h2\|subtitle-1\|…\|caption`, `as?` | полиморфный |
| `<Loader>` | — | role="status", aria-label="Загрузка" |

---

## Конфиги

- **`SECTION_CONFIG`** (`src/shared/configs/section.config.ts`) — `id`-строки для всех секций: `HERO`, `PRODUCT`, `EMPLOYEE`, `ABOUT`, `REVIEW`, `HEADER_CONTENT`, `MAIN_CONTENT`, `FOOTER_CONTENT`.
- **`applicationModalStore`** (`src/features/application/stores/application-modal.store.ts`) — `useSyncExternalStore`-совместимый стор для открытия модалки заявки — **планируется**.

---

## Секции лендинга

| Секция | Файл | Тип | Данные |
|---|---|---|---|
| Header | `shared/components/layout/header/` | server | статика |
| Hero | `features/hero/views/` | server | статика |
| Product (услуги) | `features/product/views/` | client | `productQuery.list()` |
| Employee (врачи) | `features/employee/views/` | client | `employeeQuery.list()` |
| About | `features/about/views/` | server | статика |
| Review (отзывы) | `features/review/views/` | client | `reviewQuery.list()` + видео |
| Footer | `shared/components/layout/footer/` | server | статика |

---

## Чек-лист перед завершением работы над секцией

```
SSR
  [ ] view-source:localhost:3000 — разметка секции в HTML (без JS)
  [ ] 'use client' только где действительно нужен state/effect/handler

Производительность
  [ ] next/image с width+height на всех картинках (CLS = 0)
  [ ] loading="lazy" на всех картинках кроме Hero
  [ ] Нет JS-библиотек для анимаций

A11y
  [ ] <section aria-labelledby="..."> → <h2 id="...">
  [ ] Иерархия h1→h2→h3 не нарушена
  [ ] Все интерактивные элементы Tab-доступны
  [ ] focus-visible виден на всех кнопках/ссылках
  [ ] Декоративные иконки: aria-hidden="true"
  [ ] Кнопки с неочевидным контекстом: aria-label

SCSS + БЭМ
  [ ] Только CSS-переменные, ни одного хардкод-значения
  [ ] БЭМ: block / block__element / block--modifier
  [ ] Элементы вложены через &__ внутри блока, не плоские отдельные классы
  [ ] Нет двойного __: block__el__sub → запрещено, использовать block__sub
  [ ] Нет голых HTML-селекторов (img, p, span) внутри BEM-класса
  [ ] Mobile-first: @media min-width вложены внутрь класса
  [ ] Файлы: component.tsx / component.props.ts / component.module.scss / index.ts

Адаптив
  [ ] 360px, 640px, 768px, 1024px, 1440px — нет горизонтального скролла
  [ ] prefers-reduced-motion: reduce — анимации не воспроизводятся
```
