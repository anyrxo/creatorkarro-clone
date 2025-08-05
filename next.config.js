// Load polyfills first
require('./polyfills.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // FINAL SOLUTION - Standard Vercel deployment
  experimental: {
    forceSwcTransforms: true,
  },
  
  // Basic optimizations
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  
  // Increase timeout for large builds
  staticPageGenerationTimeout: 600,
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    SITE_URL: 'https://iimagined.ai',
    ENABLE_ANALYTICS: process.env.NODE_ENV === 'production' ? 'true' : 'false',
  },
};

module.exports = nextConfig