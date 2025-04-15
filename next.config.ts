import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `
      @use "@/app/mixins" as *;
      @use "@/app/variables" as *;
    `,
  },
}

export default nextConfig
