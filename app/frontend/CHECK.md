# Frontend Review Checklist

> `[ ]` — не проверен · `[x]` — прошёл review · файлы с FIXME будут исправлены

```
app/frontend/
├── [x] biome.json
├── [x] docker-compose.yml
├── [x] next.config.ts
├── [x] next-env.d.ts
├── [x] package.json
├── [x] tsconfig.json
├── [x] .env.example
│
├── design/
│   ├── [x] desktop.png
│   └── [x] mobile.png
│
├── docker/
│   ├── [x] Dockerfile
│   └── [x] .dockerignore
│
├── public/
│   └── images/
│       ├── [x] logo.webp
│       ├── about/
│       │   ├── [x] about-banner.webp
│       │   ├── [x] card1.webp
│       │   ├── [x] card2.webp
│       │   ├── [x] card3.webp
│       │   └── [x] card4.webp
│       ├── footer/
│       │   ├── [x] footer-background.webp
│       │   └── [x] footer-map.png
│       ├── header/
│       │   └── [x] map.webp
│       └── hero/
│           └── [x] hero-background.webp
│
└── src/
    ├── app/
    │   ├── [x] layout.tsx
    │   ├── [x] page.tsx
    │   ├── [ ] globals.scss
    │   ├── [x] not-found.tsx
    │   ├── [x] robots.ts
    │   ├── [x] sitemap.ts
    │   └── [x] favicon.ico
    │
    ├── features/
    │   ├── about/
    │   │   ├── [x] index.ts
    │   │   ├── components/elements/advantage-card/
    │   │   │   ├── [ ] advantage-card.tsx
    │   │   │   ├── [ ] advantage-card.module.scss
    │   │   │   └── [ ] index.ts
    │   │   ├── data/
    │   │   │   └── [x] advantage.data.ts
    │   │   ├── types/
    │   │   │   └── [x] advantage.types.ts
    │   │   └── views/
    │   │       ├── [ ] about-section.tsx
    │   │       └── [ ] about-section.module.scss
    │   │
    │   ├── employee/
    │   │   ├── [x] index.ts
    │   │   ├── components/elements/employee-card/
    │   │   │   ├── [ ] employee-card.tsx
    │   │   │   ├── [ ] employee-card.module.scss
    │   │   │   └── [ ] index.ts
    │   │   ├── queries/
    │   │   │   └── [x] employee.query.ts
    │   │   ├── services/
    │   │   │   └── [x] employee.service.ts
    │   │   ├── types/
    │   │   │   └── [x] employee.types.ts
    │   │   └── views/
    │   │       ├── [ ] employee-section.tsx
    │   │       └── [ ] employee-section.module.scss
    │   │
    │   ├── hero/
    │   │   ├── [x] index.ts
    │   │   └── views/
    │   │       ├── [ ] hero-section.tsx
    │   │       └── [ ] hero-section.module.scss
    │   │
    │   ├── product/
    │   │   ├── [x] index.ts
    │   │   ├── components/elements/product-card/
    │   │   │   ├── [ ] product-card.tsx
    │   │   │   ├── [ ] product-card.module.scss
    │   │   │   └── [ ] index.ts
    │   │   ├── queries/
    │   │   │   └── [x] product.query.ts
    │   │   ├── services/
    │   │   │   └── [x] product.service.ts
    │   │   ├── types/
    │   │   │   └── [x] product.types.ts
    │   │   └── views/
    │   │       ├── [ ] product-section.tsx
    │   │       └── [ ] product-section.module.scss
    │   │
    │   └── review/
    │       ├── [x] index.ts
    │       ├── components/elements/
    │       │   ├── review-card/
    │       │   │   ├── [ ] review-card.tsx
    │       │   │   ├── [ ] review-card.module.scss
    │       │   │   └── [ ] index.ts
    │       │   └── review-player/
    │       │       ├── [ ] review-player.tsx
    │       │       ├── [ ] review-player.module.scss
    │       │       └── [ ] index.ts
    │       ├── queries/
    │       │   └── [x] review.query.ts
    │       ├── services/
    │       │   └── [x] review.service.ts
    │       ├── types/
    │       │   └── [x] review.types.ts
    │       └── views/
    │           ├── [ ] review-section.tsx
    │           └── [ ] review-section.module.scss
    │
    └── shared/
        ├── api/
        │   ├── [x] api.interceptor.ts
        │   └── [x] api.utils.ts
        ├── components/
        │   ├── elements/section-caption/
        │   │   ├── [x] section-caption.tsx
        │   │   ├── [x] section-caption.module.scss
        │   │   └── [x] index.ts
        │   ├── forms/application-form/
        │   │   ├── [x] application-form.tsx
        │   │   ├── [x] application-form.module.scss
        │   │   └── [x] index.ts
        │   ├── layout/
        │   │   ├── [x] layout.tsx
        │   │   ├── footer/
        │   │   │   ├── [ ] footer.tsx
        │   │   │   ├── [ ] footer.module.scss
        │   │   │   ├── [ ] index.ts
        │   │   │   ├── footer-hours/
        │   │   │   │   ├── [ ] footer-hours.tsx
        │   │   │   │   ├── [ ] footer-hours.module.scss
        │   │   │   │   └── [ ] index.ts
        │   │   │   ├── footer-location/
        │   │   │   │   ├── [ ] footer-location.tsx
        │   │   │   │   ├── [ ] footer-location.module.scss
        │   │   │   │   └── [ ] index.ts
        │   │   │   ├── footer-phone-call/
        │   │   │   │   ├── [ ] footer-phone-call.tsx
        │   │   │   │   ├── [ ] footer-phone-call.module.scss
        │   │   │   │   └── [ ] index.ts
        │   │   │   └── footer-social-media/
        │   │   │       ├── [ ] footer-social-media.tsx
        │   │   │       ├── [ ] footer-social-media.module.scss
        │   │   │       └── [ ] index.ts
        │   │   └── header/
        │   │       ├── [ ] header.tsx
        │   │       ├── [ ] header.module.scss
        │   │       ├── [ ] index.ts
        │   │       ├── header-location/
        │   │       │   ├── [ ] header-location.tsx
        │   │       │   ├── [ ] header-location.module.scss
        │   │       │   └── [ ] index.ts
        │   │       └── header-phone-call/
        │   │           ├── [ ] header-phone-call.tsx
        │   │           ├── [ ] header-phone-call.module.scss
        │   │           └── [ ] index.ts
        │   └── ui/
        │       ├── button/
        │       │   ├── [x] button.tsx
        │       │   ├── [x] button.module.scss
        │       │   ├── [x] button.props.ts
        │       │   └── [x] index.ts
        │       ├── card/
        │       │   ├── [x] card.tsx
        │       │   ├── [x] card.module.scss
        │       │   ├── [x] card.props.ts
        │       │   └── [x] index.ts
        │       ├── carousel/
        │       │   ├── [x] carousel.tsx
        │       │   ├── [x] carousel.module.scss
        │       │   ├── [x] carousel.props.ts
        │       │   ├── [x] carousel.context.ts
        │       │   └── [x] index.ts
        │       ├── input/
        │       │   ├── [x] input.tsx
        │       │   ├── [x] input.module.scss
        │       │   ├── [x] input.props.ts
        │       │   └── [x] index.ts
        │       ├── loader/
        │       │   ├── [x] loader.tsx
        │       │   ├── [x] loader.module.scss
        │       │   ├── [x] loader.props.ts
        │       │   └── [x] index.ts
        │       ├── logo/
        │       │   ├── [x] logo.tsx
        │       │   ├── [x] logo.props.ts
        │       │   └── [x] index.ts
        │       ├── pulse/
        │       │   ├── [x] pulse.tsx
        │       │   ├── [x] pulse.module.scss
        │       │   ├── [x] pulse.props.ts
        │       │   └── [x] index.ts
        │       ├── separator/
        │       │   ├── [x] separator.tsx
        │       │   ├── [x] separator.module.scss
        │       │   ├── [x] separator.props.ts
        │       │   └── [x] index.ts
        │       └── typography/
        │           ├── [x] typography.tsx
        │           ├── [x] typography.module.scss
        │           ├── [x] typography.props.ts
        │           └── [x] index.ts
        ├── configs/
        │   ├── [x] page.config.ts
        │   └── [x] section.config.ts
        ├── constants/
        │   ├── [x] error.constants.ts
        │   ├── [x] regex.constants.ts
        │   ├── [x] root.constants.ts
        │   └── [ ] seo.constants.ts
        ├── hooks/
        │   └── [x] use-media-query.ts
        ├── providers/
        │   ├── [x] providers.tsx
        │   ├── [x] index.ts
        │   └── query/
        │       ├── [x] query-client.ts
        │       ├── [x] query-provider.tsx
        │       └── [x] index.ts
        ├── views/
        │   └── not-found-view/
        │       ├── [x] not-found-view.tsx
        │       ├── [x] not-found-view.module.scss
        │       └── [x] index.ts
        ├── queries/
        │   └── [x] application.query.ts
        ├── services/
        │   └── [x] application.service.ts
        └── types/
            ├── [x] api.types.ts
            └── [x] application.types.ts
```
