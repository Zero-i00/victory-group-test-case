# DentistAm

Одностраничный лендинг стоматологической клиники. Монорепо с отдельными сервисами для бэкенда и фронтенда.

## Стек

| Слой | Технологии |
|---|---|
| Frontend | Next.js 16 · React 19 · TypeScript 6 · SCSS Modules · TanStack Query 5 · bun |
| Backend | Python 3.14 · FastAPI · Uvicorn · Pydantic v2 · uv |
| Инфраструктура | Docker · Docker Compose |

## Структура

```
app/
├── backend/   FastAPI — Mock REST API
└── frontend/  Next.js 16 App Router — лендинг
docker-compose.yml
```

## Запуск через Docker

### 1. Переменные окружения

Скопировать `.env.example` в `.env` для каждого сервиса:

```bash
cp app/backend/.env.example app/backend/.env
cp app/frontend/.env.example app/frontend/.env
```

### 2. Запуск

```bash
docker compose up --build
```

Оба сервиса поднимаются одной командой из корня монорепо.

| Сервис | URL |
|---|---|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:8080 |
| Swagger UI | http://localhost:8080/docs |
| ReDoc | http://localhost:8080/redoc |

### Остановка

```bash
docker compose down
```

## Локальный запуск

### Backend

```bash
cd app/backend
uv sync
uv run uvicorn src.main:app --reload
```

### Frontend

```bash
cd app/frontend
bun install
bun dev
```

## API

| Метод | Путь | Описание |
|---|---|---|
| `GET` | `/health` | Проверка доступности |
| `GET` | `/api/v1/employees` | Список врачей |
| `GET` | `/api/v1/products` | Список услуг |
| `GET` | `/api/v1/reviews` | Список отзывов |
| `POST` | `/api/v1/applications` | Заявка на приём |

Коллекции поддерживают пагинацию: `?page=1&per_page=10`.

## Переменные окружения

### Backend (`app/backend/.env`)

| Переменная | Значение по умолчанию | Описание |
|---|---|---|
| `DEBUG` | `False` | Режим отладки |
| `HOST` | `0.0.0.0` | Хост сервера |
| `PORT` | `8080` | Порт сервера |
| `ALLOWED_HOSTS` | `["http://localhost:3000"]` | Разрешённые CORS-источники |

### Frontend (`app/frontend/.env`)

| Переменная | Значение по умолчанию | Описание |
|---|---|---|
| `PORT` | `3000` | Порт dev-сервера |
| `NEXT_PUBLIC_SERVER_URL` | `http://localhost:8080` | URL API для браузера |
| `SERVER_URL_INTERNAL` | `http://backend:8080` | URL API для SSR внутри docker-сети |
