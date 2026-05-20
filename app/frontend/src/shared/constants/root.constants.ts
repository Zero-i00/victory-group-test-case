export const APP_TITLE = process.env.TITLE ?? 'DentistAm'

export const IS_SERVER = typeof window === 'undefined'
export const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL ?? ''
export const SERVER_URL_INTERNAL = process.env.SERVER_URL_INTERNAL ?? SERVER_URL

export const BASE_API_URL = `${SERVER_URL}/api/v1`
export const BASE_API_URL_INTERNAL = `${SERVER_URL_INTERNAL}/api/v1`
