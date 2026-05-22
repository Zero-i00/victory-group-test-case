import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
    compress: true,
    poweredByHeader: false,
    experimental: {
        optimizePackageImports: ['lucide-react', '@tanstack/react-query', 'react-hot-toast'],
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        qualities: [75, 85, 100],
        minimumCacheTTL: 31536000,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
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
