// Load polyfills first
require('./polyfills.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // VERCEL OPTIMIZATION - Simple configuration for 550 blog posts
  experimental: {
    forceSwcTransforms: true,
  },
  
  // Basic optimizations
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  
  // Increase timeout for large builds
  staticPageGenerationTimeout: 600,
  
  // Simple image optimization
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    SITE_URL: 'https://iimagined.ai',
    ENABLE_ANALYTICS: process.env.NODE_ENV === 'production' ? 'true' : 'false',
  },

  // Basic headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
          }
        ],
      }
    ]
  },

  // Basic redirects
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.iimagined.ai',
          },
        ],
        destination: 'https://iimagined.ai/:path*',
        permanent: true,
      }
    ]
  },

  // Basic rewrites
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      }
    ]
  },
};

module.exports = nextConfig