import type {Metadata, Viewport} from 'next'
import {Manrope} from 'next/font/google'
import './globals.scss'
import type {PropsWithChildren} from 'react'
import {Layout} from '@/shared/components/layout/layout'
import {APP_TITLE} from '@/shared/constants/root.constants'
import {CLINIC_NAME, SEO_DESCRIPTION, SEO_KEYWORDS, SEO_TITLE, SITE_URL} from '@/shared/constants/seo.constants'
import {Providers} from '@/shared/providers'

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    alternates: {canonical: '/'},
    title: {
        default: SEO_TITLE,
        template: `%s | ${APP_TITLE}`,
    },
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    authors: [{name: CLINIC_NAME}],
    creator: CLINIC_NAME,
    publisher: CLINIC_NAME,
    formatDetection: {telephone: false, email: false, address: false},
    icons: {icon: '/icon.png', apple: '/apple-icon.png'},
    manifest: '/manifest.webmanifest',
    openGraph: {
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        siteName: APP_TITLE,
        type: 'website',
        locale: 'ru_RU',
        url: SITE_URL,
        images: [{url: '/opengraph-image.png', width: 1200, height: 630, alt: SEO_TITLE}],
    },
    twitter: {
        card: 'summary_large_image',
        title: SEO_TITLE,
        description: SEO_DESCRIPTION,
        images: ['/opengraph-image.png'],
    },
}

export const viewport: Viewport = {
    themeColor: '#E21F4D',
    colorScheme: 'light',
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="ru" className={manrope.variable} data-scroll-behavior="smooth">
        <body>
        <Providers>
            <Layout>{children}</Layout>
        </Providers>
        </body>
        </html>
    )
}
