import type { NextConfig } from 'next'

const command = process.env.npm_lifecycle_event

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: command === 'build' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    loaderFile: './imageLoader.ts',
    deviceSizes: [576, 768, 992, 1200, 1400],
    imageSizes: [16, 32, 256],
  },
  allowedDevOrigins: ['192.168.1.*'],
}

export default nextConfig
