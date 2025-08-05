/** @type {import('next').NextConfig} */
const nextConfig = {
  // FINAL SOLUTION: Static export with simplified routes
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  images: {
    unoptimized: true,
  },
  
  // Remove problematic webpack configuration that causes navigator issues
  experimental: {
    // Remove forceSwcTransforms which was causing problems
  },

module.exports = nextConfig
