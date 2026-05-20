import type {Metadata} from 'next'
import {Manrope} from 'next/font/google'
import './globals.scss'
import type {PropsWithChildren} from 'react'
import {APP_TITLE} from '@/shared/constants/root.constants'
import {SEO_DESCRIPTION, SEO_KEYWORDS, SEO_TITLE} from '@/shared/constants/seo.constants'

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})
export const metadata: Metadata = {
    // metadataBase: new URL(SEO_URL),
    alternates: {canonical: '/'},
    title: {
        default: SEO_TITLE,
        template: `%s | ${APP_TITLE}`,
    },
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    openGraph: {
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        siteName: APP_TITLE,
        type: 'website',
        locale: 'ru_RU',
        // url: SEO_LANDING_URL,
        // images: [
        //     {
        //         url: `${APP_BASE_PATH}/seo/og-image.png`,
        //         width: 1200,
        //         height: 630,
        //         alt: SEO_TITLE,
        //     },
        // ],
    },
    // icons: {
    //     icon: `${APP_BASE_PATH}/favicon.svg`,
    //     shortcut: `${APP_BASE_PATH}/favicon.svg`,
    //     apple: `${APP_BASE_PATH}/seo/touch-icons/touch-icon-180x180.png`,
    // },
}

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="ru" className={manrope.variable} data-scroll-behavior="smooth">
        <body>{children}</body>
        </html>
    )
}
