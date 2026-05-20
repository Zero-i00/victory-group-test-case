import type { NextConfig } from 'next'
import path from 'node:path'

const nextConfig: NextConfig = {
    sassOptions: {
        // автоматически добавляется в каждый *.module.scss — не нужно писать @use вручную
        additionalData: `@use '${path.resolve('./src/shared/styles/breakpoints').replace(/\\/g, '/')}' as bp; @use '${path.resolve('./src/shared/styles/mixins').replace(/\\/g, '/')}' as mx;`,
        silenceDeprecations: ['legacy-js-api'],
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '/static/**',
            },
            {
                protocol: 'http',
                hostname: 'backend',
                pathname: '/static/**',
            },
        ],
    },
}

export default nextConfig
