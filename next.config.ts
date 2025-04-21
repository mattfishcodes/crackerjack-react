import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.*'],
  sassOptions: {
    additionalData: `
      @use "@/app/mixins" as *;
      @use "@/app/variables" as *;
    `,
  },
}

export default nextConfig
