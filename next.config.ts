import type { NextConfig } from 'next'

const command = process.env.npm_lifecycle_event

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: command === 'build' ? 'export' : undefined,
  trailingSlash: true,
  images: {
    loaderFile: './imageLoader.ts',
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.*'],
  sassOptions: {
    additionalData: `
      @use "@/app/mixins" as *;
      @use "@/app/variables" as *;
    `,
  },
}

export default nextConfig
