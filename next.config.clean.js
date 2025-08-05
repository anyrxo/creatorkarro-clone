/** @type {import('next').NextConfig} */
const nextConfig = {
  // Absolutely minimal configuration for Vercel
  experimental: {
    forceSwcTransforms: true,
  },
  
  // Essential settings only
  compress: true,
  poweredByHeader: false,
  
  // Timeout for large builds
  staticPageGenerationTimeout: 600,
  
  // Basic image settings
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig