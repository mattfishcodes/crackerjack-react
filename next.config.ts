import type { NextConfig } from 'next'

const command = process.env.npm_lifecycle_event

const nextConfig: NextConfig = {
  output: command === 'build' ? 'export' : undefined,
  allowedDevOrigins: ['192.168.1.*'],
  sassOptions: {
    additionalData: `
      @use "@/app/mixins" as *;
      @use "@/app/variables" as *;
    `,
  },
}

export default nextConfig
