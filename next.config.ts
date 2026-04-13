import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4003',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '4003',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      // Add your production domain here when ready
      // {
      //   protocol: 'https',
      //   hostname: 'your-production-domain.com',
      //   pathname: '/uploads/**',
      // },
    ],
  },
}

export default nextConfig
