import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8080',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'backend',
                port: '8080',
                pathname: '/**',
            },
        ],
    },
}

export default nextConfig
