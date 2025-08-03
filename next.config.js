/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react', 'framer-motion'],
    optimizeCss: true,
    serverMinification: true,
  },

  // Turbopack configuration (now stable)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  // Image optimization - NUCLEAR PERFORMANCE
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
      {
        protocol: 'https',
        hostname: 'iimagined.ai',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      }
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
  },

  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Static optimization
  trailingSlash: false,

  // Headers for MAXIMUM performance and FORTRESS PROTECTION
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // ORYANA Fortress Protection Headers
          {
            key: 'X-Fortress-Protection',
            value: 'active'
          },
          {
            key: 'X-Anti-Scraping',
            value: 'enabled'
          },
          {
            key: 'X-Content-Protection',
            value: 'maximum'
          },
          // Security headers
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), accelerometer=(), gyroscope=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // Anti-scraping headers
          {
            key: 'X-Robots-Tag',
            value: 'noarchive, nosnippet, notranslate, noimageindex'
          },
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
          },
          // Performance headers
          {
            key: 'X-Preload',
            value: '</fonts/montserrat-variable.woff2>; rel=preload; as=font; type=font/woff2; crossorigin'
          }
        ],
      },
      // Cache static assets AGGRESSIVELY
      {
        source: '/_next/image/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },

  // SEO-optimized redirects
  async redirects() {
    return [
      // Consolidate www to non-www
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
      },
      // Social media redirects for link building
      {
        source: '/twitter',
        destination: 'https://twitter.com/iimagined_ai',
        permanent: false,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/iimagined.ai',
        permanent: false,
      },
      {
        source: '/youtube',
        destination: 'https://youtube.com/@iimaginedai',
        permanent: false,
      }
    ]
  },

  // Dynamic rewrites for programmatic pages + SEO optimization
  async rewrites() {
    return [
      // SEO-critical sitemap routing
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
      // International redirects - country-specific pages
      {
        source: '/ca/:path*',
        destination: '/ca/:path*',
      },
      {
        source: '/gb/:path*', 
        destination: '/gb/:path*',
      },
      {
        source: '/au/:path*',
        destination: '/au/:path*',
      },
      {
        source: '/de/:path*',
        destination: '/de/:path*',
      },
      {
        source: '/fr/:path*',
        destination: '/fr/:path*',
      },
      {
        source: '/es/:path*',
        destination: '/es/:path*',
      },
      {
        source: '/it/:path*',
        destination: '/it/:path*',
      },
      {
        source: '/br/:path*',
        destination: '/br/:path*',
      },
      {
        source: '/mx/:path*',
        destination: '/mx/:path*',
      },
      {
        source: '/in/:path*',
        destination: '/in/:path*',
      },
      {
        source: '/jp/:path*',
        destination: '/jp/:path*',
      },
      {
        source: '/sg/:path*',
        destination: '/sg/:path*',
      },
      // Service pages for local SEO domination
      {
        source: '/:service-:location',
        destination: '/services?service=:service&location=:location',
      },
      // Location pages
      {
        source: '/locations/:location',
        destination: '/location?city=:location',
      },
      // Blog category pages
      {
        source: '/category/:category',
        destination: '/blog?category=:category',
      },
      // Programmatic pages for international SEO
      {
        source: '/programmatic/:keyword/:location/:modifier?',
        destination: '/api/programmatic?keyword=:keyword&location=:location&modifier=:modifier',
      }
    ]
  },

  // Webpack optimizations for MAXIMUM performance
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      // Dead code elimination
      config.optimization.usedExports = true
      config.optimization.sideEffects = false

      // Advanced chunk splitting for NUCLEAR performance
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types)[\\/]/,
            priority: 40,
            enforce: true,
          },
          framerMotion: {
            name: 'framer-motion',
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            priority: 30,
            chunks: 'all',
          },
          animations: {
            name: 'animations',
            test: /[\\/](framer-motion|gsap|lottie)[\\/]/,
            priority: 25,
            chunks: 'async',
          },
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'all',
            minChunks: 2,
          },
          commons: {
            name: 'commons',
            priority: 20,
            minChunks: 2,
            reuseExistingChunk: true,
          }
        }
      }
      
      // Tree shaking optimization
      config.optimization.providedExports = true
      config.optimization.usedExports = true
      config.optimization.concatenateModules = true
    }

    return config
  },

  // Environment variables
  env: {
    SITE_URL: 'https://iimagined.ai',
    ENABLE_ANALYTICS: process.env.NODE_ENV === 'production' ? 'true' : 'false',
  },
};

module.exports = nextConfig
