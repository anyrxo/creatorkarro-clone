/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configured for Vercel deployment with proper routing
  trailingSlash: true,
  
  images: {
    domains: ['images.unsplash.com', 'cdn.pixabay.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Optimize for production
  swcMinify: true,
  
  // Ensure proper routing for Vercel
  async rewrites() {
    return [
      {
        source: '/fx-calc',
        destination: '/fx-calc',
      },
    ];
  },
};

module.exports = nextConfig
