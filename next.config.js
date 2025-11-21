/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone mode instead of export to avoid error page generation issues
  output: 'standalone',
  // Removed trailingSlash to fix Clerk webhook 308 redirects

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configuration to reduce build issues with static export
  experimental: {
    workerThreads: false,
    cpus: 1,
  },

  // Production optimizations - Remove console statements in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'], // Keep console.error for critical debugging
    } : false,
  },
};

module.exports = nextConfig
