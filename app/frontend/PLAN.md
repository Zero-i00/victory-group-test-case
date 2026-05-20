# План реализации фронтенда DentistAm

## Стек

Next.js 15 (App Router) · React 19 · React Query v5 · axios · react-hook-form · react-hot-toast · SCSS modules + БЭМ · framer-motion (LazyMotion) · lucide-react · Bun · Docker

## Порядок реализации

1. **Скелет** — `package.json`, `tsconfig.json`, `biome.json`, `next.config.ts`, `.env*`, `Dockerfile`, `docker-compose.yml`
2. **Глобальные стили** — `globals.scss` (токены CSS-переменные, reset), `_breakpoints.scss`, `_mixins.scss`, `_animations.scss`
3. **UI-кит** — Button → Input → Typography → Container/Section → Card → Modal (в `shared/components/ui/`)
4. **API-слой** — `axiosClient`, 4 сервиса-класса (employees / products / reviews / applications), типы, QueryProvider, query keys
5. **Layout** — Header, Footer, Mobile-Nav + Providers (Query / Motion / PWA) + `MetadataAPI` / JSON-LD / Toaster
6. **Hero + Application Modal + Form** — CTA открывает модалку с формой заявки (`full_name + email`)
7. **Products / Employees / Reviews** — SSR prefetch → `HydrationBoundary`, `RevealOnScroll`, grid-карточки
8. **Benefits + Location** — статические секции, Яндекс-карта через lazy-iframe
9. **PWA** — `app/manifest.ts` + `public/sw.js` (cache-first для статики / network-first для API)
10. **SEO-доводка** — `sitemap.ts`, `robots.ts`, structured data, Lighthouse-аудит
11. **README + EXPLAIN.md**

---

## Секции лендинга

| # | Секция | Источник данных |
|---|--------|----------------|
| 1 | **Header** | статика + навигация + CTA → модалка |
| 2 | **Hero** | статика (заголовок, фото врача, бейдж «Топ 5») |
| 3 | **Services** | `GET /api/v1/products` |
| 4 | **Doctors** | `GET /api/v1/employees` |
| 5 | **Benefits** | статика (`features/benefits/data/`) |
| 6 | **Reviews** | `GET /api/v1/reviews` (video mp4 → graceful fallback) |
| 7 | **Location** | статика + Яндекс iframe |
| 8 | **Footer** | статика |

---

## Структура проекта

```
app/frontend/
├── docker/
│   └── Dockerfile              # multistage: dev | deps | builder | prod
├── docker-compose.yml
├── public/
│   ├── manifest.webmanifest
│   ├── icons/{192,512,maskable}.png
│   ├── sw.js                   # ServiceWorker
│   ├── favicon.ico
│   └── decor/star.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx           # html, fonts, Providers, JSON-LD, Toaster, ApplicationModal
│   │   ├── page.tsx             # RSC: prefetch → <HydrationBoundary> → секции
│   │   ├── not-found.tsx
│   │   ├── error.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── manifest.ts
│   │   ├── globals.scss
│   │   └── providers/
│   │       ├── index.tsx
│   │       ├── query/{query-provider.tsx, get-query-client.ts}
│   │       ├── motion/motion-provider.tsx      # LazyMotion domAnimation
│   │       └── pwa/pwa-provider.tsx            # SW регистрация (prod only)
│   ├── features/
│   │   ├── hero/views/hero-section-view.tsx
│   │   ├── products/
│   │   │   ├── services/product.service.ts
│   │   │   ├── hooks/use-products.ts
│   │   │   ├── types/product.types.ts
│   │   │   ├── components/product-card/
│   │   │   ├── views/products-section-view.tsx
│   │   │   └── index.ts
│   │   ├── employees/          # аналогично products
│   │   ├── reviews/
│   │   │   ├── services/review.service.ts
│   │   │   ├── hooks/use-reviews.ts
│   │   │   ├── components/{review-player, review-thumb}/
│   │   │   └── views/reviews-section-view.tsx
│   │   ├── benefits/
│   │   │   ├── data/benefits.data.ts
│   │   │   ├── components/benefit-item/
│   │   │   └── views/benefits-section-view.tsx
│   │   ├── location/views/location-section-view.tsx
│   │   └── application/
│   │       ├── services/application.service.ts
│   │       ├── hooks/use-create-application.ts
│   │       ├── stores/application-modal.store.ts   # useSyncExternalStore
│   │       ├── types/application.types.ts
│   │       ├── components/application-form/
│   │       └── components/application-modal/
│   └── shared/
│       ├── api/
│       │   ├── api.helper.ts
│       │   └── interceptors/root.interceptor.ts   # axiosClient
│       ├── components/
│       │   ├── ui/{button, input, textarea, modal, card, typography, container, section, spinner, badge}
│       │   ├── layout/{header, footer, mobile-nav}/
│       │   └── wrappers/{reveal-on-scroll, lazy-image, query-boundary}/
│       ├── configs/{seo.config.ts, query-client.config.ts, navigation.config.ts, clinic-info.config.ts}
│       ├── constants/{root.constants.ts, error.constants.ts, regex.constants.ts, query-keys.constants.ts, animation.constants.ts}
│       ├── hooks/{use-media-query.ts, use-scroll-lock.ts}
│       ├── styles/{_breakpoints.scss, _mixins.scss, _animations.scss}
│       ├── types/{api.types.ts, pagination.types.ts, fast-api-error.types.ts}
│       └── utils/{cn.ts, build-image-url.ts, parse-api-error.ts, build-json-ld.ts}
├── biome.json
├── bunfig.toml
├── next.config.ts
├── tsconfig.json
├── package.json
├── Makefile
├── EXPLAIN.md
├── README.md
├── .env
├── .env.example
└── design/{desktop.png, mobile.png}
```

---

## UI-компоненты

Шаблон: `<name>/{<name>.tsx, <name>.props.ts, <name>.module.scss, index.ts}` — named export, `'use client'` если интерактивный, `forwardRef` + `displayName`, JSDoc на русском.

| Компонент | Ключевые props |
|-----------|---------------|
| **Button** | `variant: 'primary'\|'secondary'\|'ghost'`, `size: 'sm'\|'md'\|'lg'`, `isLoading`, `leftIcon`, `rightIcon`, `fullWidth` |
| **Input** | `label?`, `error?`, `size`, `leftIcon?`, forwardRef |
| **Modal** | `isOpen`, `onClose`, `title?`, `size?` — нативный `<dialog>` + framer-motion |
| **Card** | `as?: ElementType`, `interactive?`, `padding?` |
| **Typography** | `variant: 'h1'…'caption'`, `as?`, `align?`, `color?` |

БЭМ: `.block`, `.block__element`, `.block--modifier`. Применение через `cn(styles.block, styles[\`block--${variant}\`])`.

---

## API-слой

**`shared/constants/root.constants.ts`**
```ts
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8080'
export const API_URL_INTERNAL = process.env.API_URL_INTERNAL ?? API_URL
export const IS_SERVER = typeof window === 'undefined'
```

**`shared/api/interceptors/root.interceptor.ts`**
```ts
export const axiosClient = axios.create({
    baseURL: IS_SERVER ? API_URL_INTERNAL : API_URL,
    headers: APP_API_HEADERS,
})
```

**Сервисы** (class-singleton):
```ts
class ProductService {
    private readonly BASE_URL = '/api/v1/products'
    async list(params: PaginationParams) {
        const { data } = await axiosClient.get<ProductOut[]>(this.BASE_URL, { params })
        return data
    }
}
export const productService = new ProductService()
```

⚠️ Shape mismatch: `/employees` → `PaginatedResponse<EmployeeOut>`, `/products` + `/reviews` → голый `T[]`.

**React Query hooks** (`features/<name>/hooks/use-*.ts`):
```ts
export const useProducts = (params = DEFAULT_PAGINATION) =>
    useQuery({ queryKey: QK.products(params), queryFn: () => productService.list(params), staleTime: 5 * 60_000 })

export const useCreateApplication = () =>
    useMutation({
        mutationFn: applicationService.create,
        onSuccess: () => toast.success('Заявка отправлена. Мы свяжемся с вами в ближайшее время.'),
        onError: (err) => toast.error(parseApiError(err)),
    })
```

**SSR prefetch** в `app/page.tsx`:
```tsx
const queryClient = getQueryClient()
await Promise.all([
    queryClient.prefetchQuery({ queryKey: QK.products(...), queryFn: ... }),
    queryClient.prefetchQuery({ queryKey: QK.employees(...), queryFn: ... }),
    queryClient.prefetchQuery({ queryKey: QK.reviews(...), queryFn: ... }),
])
return <HydrationBoundary state={dehydrate(queryClient)}>...</HydrationBoundary>
```

---

## Дизайн-токены (`globals.scss`)

Акцент малиновый `#E50066`, фон белый, поверхности светло-розовые:

```scss
:root {
    --color-bg: #ffffff;
    --color-surface: #fdf2f5;
    --color-surface-strong: #ffe4ec;
    --color-text: #1a1a1a;
    --color-text-muted: #6b6b6b;
    --color-primary: #e50066;
    --color-primary-hover: #c10056;
    --color-primary-soft: #ffd9e4;
    --color-accent-gold: #f4b400;
    --color-border: #f0d2dc;
    --color-danger: #e5484d;
    --color-success: #30a46c;

    --space-1: 4px;  --space-2: 8px;   --space-3: 12px;
    --space-4: 16px; --space-5: 24px;  --space-6: 32px;
    --space-7: 48px; --space-8: 64px;  --space-9: 96px;

    --radius-sm: 6px; --radius-md: 14px; --radius-lg: 24px; --radius-pill: 999px;

    --fs-caption: 12px; --fs-body: 16px; --fs-h4: 20px;
    --fs-h3: clamp(22px, 2.2vw, 28px);
    --fs-h2: clamp(28px, 3.4vw, 44px);
    --fs-h1: clamp(36px, 5.2vw, 72px);

    --shadow-sm: 0 2px 6px rgba(229, 0, 102, .08);
    --shadow-md: 0 8px 24px rgba(229, 0, 102, .12);
    --shadow-lg: 0 20px 48px rgba(229, 0, 102, .18);

    --tr-fast: 150ms cubic-bezier(.2, .8, .2, 1);
    --tr-base: 250ms cubic-bezier(.2, .8, .2, 1);

    --container-max: 1200px;
    --header-h: 72px;
}
```

Миксины в `shared/styles/_breakpoints.scss`:
```scss
@mixin tablet  { @media (min-width: 768px)  { @content } }
@mixin desktop { @media (min-width: 1024px) { @content } }
```
Использование в модулях: `@use 'shared/styles/breakpoints' as bp;` (path alias в `next.config.ts → sassOptions.includePaths`).

---

## Анимации

- **CSS**: hover/transitions кнопок и карточек, skeleton-shimmer, `@keyframes float` для декоративных звёзд
- **framer-motion** (LazyMotion + `m.*`):
  - `<RevealOnScroll>` — `whileInView` с `viewport={{ once: true, amount: 0.2 }}`
  - Stagger для grid: `staggerChildren: 0.08`
  - Модалка — `AnimatePresence` + scale/opacity
- `@media (prefers-reduced-motion)` — обнуляем длительности глобально

---

## Docker

**`docker/Dockerfile`** — multistage (target: `dev` | `prod`):

```dockerfile
FROM oven/bun:1 AS dev
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install
ENV NEXT_TELEMETRY_DISABLED=1
CMD ["bun", "run", "dev"]

FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

FROM oven/bun:1 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ../frontend .
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

FROM oven/bun:1-slim AS prod
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["bun", "server.js"]
```

**`docker-compose.yml`** (frontend service, attach к `app_network` как external):
```yaml
services:
    frontend:
        build:
            context: ./app/frontend
            dockerfile: ./docker/Dockerfile
            target: dev
        env_file: ./app/frontend/.env
        environment:
            - API_URL_INTERNAL=http://backend:8080
        volumes:
            - ./app/frontend/src:/app/src
            - ./app/frontend/public:/app/public
            - ./app/frontend/next.config.ts:/app/next.config.ts
        ports:
            - "3000:3000"
        networks:
            - app_network
        depends_on:
            - backend
networks:
    app_network:
        external: true
```

Root `docker-compose.yml`:
```yaml
include:
    - ./app/backend/docker-compose.yml
    - ./app/frontend/docker-compose.yml
```

**.env**:
```
NEXT_PUBLIC_API_URL=http://localhost:8080
API_URL_INTERNAL=http://backend:8080
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Форма заявки

Поля: `full_name` + `email` (только то, что принимает backend POST `/api/v1/applications`).

```ts
useForm<{ full_name: string; email: string }>({ mode: 'onChange', defaultValues: { full_name: '', email: '' } })
```

`parseApiError`: FastAPI 422 `{detail: [{loc, msg, type}]}` → `setError(fieldName, { message })`. Управление модалкой — `applicationModalStore` (singleton + `useSyncExternalStore`).

---

## Ключевые риски

| Риск | Решение |
|------|---------|
| reviews mp4 отсутствуют | `ReviewPlayer` показывает poster + «Видео скоро появится» если `video === null` |
| `photo === ''` у employee | fallback на `lucide-react: UserRound` |
| SSR fetch в Docker | `typeof window === 'undefined'` → `API_URL_INTERNAL=http://backend:8080` |
| PWA в dev ломает HMR | регистрация SW только в `NODE_ENV === 'production'` |
| Яндекс-карта | lazy-iframe `https://yandex.ru/map-widget/v1/...`, координаты в `clinic-info.config.ts` |

---

## Верификация

1. `./run restart` → `http://localhost:3000` лендинг
2. `view-source:http://localhost:3000` → карточки врачей/услуг в HTML (SSR работает)
3. Форма → POST `/api/v1/applications` → 201 → toast «Заявка отправлена»
4. Невалидный email → ошибка под полем
5. `bun run build && bun run start` → Lighthouse ≥ 90 по всем метрикам
6. DevTools → Application → Manifest + SW в production
