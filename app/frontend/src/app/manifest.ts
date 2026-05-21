import type {MetadataRoute} from 'next'
import {CLINIC_NAME, SEO_DESCRIPTION} from '@/shared/constants/seo.constants'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: CLINIC_NAME,
        short_name: 'DentistAm',
        description: SEO_DESCRIPTION,
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#E21F4D',
        icons: [
            {src: '/icon.png', sizes: '512x512', type: 'image/png'},
            {src: '/apple-icon.png', sizes: '180x180', type: 'image/png'},
        ],
        lang: 'ru-RU',
    }
}
