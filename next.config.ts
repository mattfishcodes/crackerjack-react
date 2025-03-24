import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  
  sassOptions: {
    additionalData: `
      $primary: #3a0756;
      $secondary: #e6b01d;
      $light: #f9fafb;
    `
  }
};

export default nextConfig;
