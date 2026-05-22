export const SITE_URL = 'https://dentistam.ru'

export const CLINIC_ADDRESS = 'г. Москва, ул. Перерва, д. 39'
export const CLINIC_MAPS_URL = 'https://yandex.ru/maps/?text=г.+Москва,+ул.+Перерва,+д.+39'
export const CLINIC_PHONE = '+7 985 535 76 66'
export const CLINIC_PHONE_HREF = 'tel:+79855357666'
export const CLINIC_WHATSAPP_URL = 'https://wa.me/79855357666'
export const CLINIC_WORKING_HOURS = 'Звоните в любое время'

export const CLINIC_NAME = 'DentistAm — Американский стоматологический центр Дантист'

export const NO_INDEX = {
    robots: { index: false, follow: false },
}

export const SEO_TITLE = 'DentistAm — Американский стоматологический центр Дантист. Лечение, имплантация, отбеливание'

export const SEO_DESCRIPTION =
    'Американский стоматологический центр Дантист: лечение зубов, имплантация, отбеливание и протезирование ' +
    'по стандартам США. Опытные врачи, современное оборудование, безболезненное лечение. Запишитесь онлайн.'

export const SEO_KEYWORDS: string[] = [
    // Бренд
    'DentistAm',
    'Дантист',
    'американский стоматологический центр',
    'американский стоматологический центр Дантист',
    'стоматология DentistAm',

    // Основные услуги
    'стоматология',
    'лечение зубов',
    'имплантация зубов',
    'протезирование зубов',
    'отбеливание зубов',
    'брекеты',
    'виниры',
    'удаление зубов',
    'лечение кариеса',
    'зубные коронки',

    // Специализации
    'терапевтическая стоматология',
    'хирургическая стоматология',
    'ортопедическая стоматология',
    'ортодонтия',
    'пародонтология',
    'детская стоматология',
    'эстетическая стоматология',

    // Целевая аудитория / запросы
    'стоматология без боли',
    'безболезненное лечение зубов',
    'стоматолог запись онлайн',
    'записаться к стоматологу',
    'стоматология топ 5',
    'лучшая стоматология',
    'стоматология по американским стандартам',

    // Гео (при наличии конкретного города — уточнить)
    'стоматологическая клиника',
    'частная стоматология',
    'платная стоматология',
]

export const CLINIC_CITY = 'Москва'
export const CLINIC_STREET = 'ул. Перерва, д. 39'
export const CLINIC_COUNTRY = 'RU'

export const CLINIC_GEO = { latitude: 55.6505, longitude: 37.753 } as const

export const CLINIC_PRICE_RANGE = '₽₽'

export const CLINIC_WORKING_HOURS_SPEC = [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr'] as const, opens: '09:00', closes: '21:00' },
    { days: ['Sa', 'Su'] as const, opens: '10:00', closes: '20:00' },
] as const

export const SCHEMA_DAY_MAP = {
    Mo: 'Monday',
    Tu: 'Tuesday',
    We: 'Wednesday',
    Th: 'Thursday',
    Fr: 'Friday',
    Sa: 'Saturday',
    Su: 'Sunday',
} as const

export const HUMAN_DAY_LABELS = {
    weekdays: 'ПН-ПТ',
    weekend: 'СБ-ВС',
} as const
