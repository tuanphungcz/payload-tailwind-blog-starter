import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    level: 'info',
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
  env: {
    NEXT_PUBLIC_VERCEL_URL: process.env.VERCEL_URL,
    NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
}

export default withPayload(nextConfig)
