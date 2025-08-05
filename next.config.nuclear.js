
// NUCLEAR CONFIG - MINIMAL SSR
require('./polyfills.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable as much SSR as possible
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  images: {
    unoptimized: true,
  },
  
  // Disable static generation for problematic pages
  generateStaticParams: () => [],
  
  experimental: {
    forceSwcTransforms: true,
  },
  
  // Simple webpack config
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      crypto: false,
    };
    return config;
  },
};

module.exports = nextConfig;
