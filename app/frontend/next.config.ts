import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
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
