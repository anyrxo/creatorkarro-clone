/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development configuration - enables server-side features for FX Calculator
  // This allows the real-time API integration to work properly
  
  images: {
    unoptimized: true,
  },
  
  // Enable server features for real-time trading calculator
  experimental: {
    // Enable server components for live data
  },
  
  // API routes enabled for development
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5001/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig