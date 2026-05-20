import type {Metadata} from 'next'
import {Manrope} from 'next/font/google'
import './globals.scss'
import type {PropsWithChildren} from 'react'
import {Layout} from '@/shared/components/layout/layout'
import {APP_TITLE} from '@/shared/constants/root.constants'
import {SEO_DESCRIPTION, SEO_KEYWORDS, SEO_TITLE} from '@/shared/constants/seo.constants'
import {Providers} from '@/shared/providers'

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
})
export const metadata: Metadata = {
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
    },
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
