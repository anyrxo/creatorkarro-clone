// Meta Tag Enhancer - Nuclear SEO Meta Tag System
// Maximum visibility across Google, Bing, Social Media, and AI Platforms

export interface EnhancedMetaConfig {
  // Core SEO
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  robots?: string

  // Open Graph
  ogType?: 'website' | 'article' | 'product' | 'course'
  ogImage?: string
  ogImageWidth?: number
  ogImageHeight?: number
  ogLocale?: string
  ogLocaleAlternate?: string[]

  // Twitter/X
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterCreator?: string
  twitterSite?: string
  twitterImage?: string

  // Article specific
  articleAuthor?: string
  articlePublishedTime?: string
  articleModifiedTime?: string
  articleSection?: string
  articleTags?: string[]

  // Additional
  author?: string
  themeColor?: string
  viewport?: string
}

// Generate complete meta tag set
export function generateEnhancedMetaTags(config: EnhancedMetaConfig) {
  const baseUrl = 'https://iimagined.ai'
  const defaultImage = `${baseUrl}/og-image.png`

  const metaTags: Record<string, string> = {
    // Core Meta Tags
    'title': config.title,
    'description': config.description,
    ...(config.keywords && { 'keywords': config.keywords.join(', ') }),
    'author': config.author || 'Anyro',
    'viewport': config.viewport || 'width=device-width, initial-scale=1, maximum-scale=5',
    'theme-color': config.themeColor || '#8B5CF6',

    // Robots
    'robots': config.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    'googlebot': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    'bingbot': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',

    // Language & Locale
    'language': 'English',
    'content-language': 'en-US',

    // Classification
    'classification': 'Business, Education, Technology',
    'category': 'AI Automation, Social Media Marketing, Digital Products',
    'coverage': 'Worldwide',
    'distribution': 'Global',
    'rating': 'General',

    // Open Graph Core
    'og:title': config.title,
    'og:description': config.description,
    'og:type': config.ogType || 'website',
    'og:url': config.canonical || baseUrl,
    'og:site_name': 'IImagined.ai',
    'og:locale': config.ogLocale || 'en_US',
    'og:image': config.ogImage || defaultImage,
    'og:image:alt': config.title,
    'og:image:width': String(config.ogImageWidth || 1200),
    'og:image:height': String(config.ogImageHeight || 630),
    'og:image:type': 'image/png',

    // Twitter/X Card
    'twitter:card': config.twitterCard || 'summary_large_image',
    'twitter:site': config.twitterSite || '@anyro',
    'twitter:creator': config.twitterCreator || '@anyro',
    'twitter:title': config.title,
    'twitter:description': config.description,
    'twitter:image': config.twitterImage || config.ogImage || defaultImage,
    'twitter:image:alt': config.title,

    // Facebook
    'fb:app_id': '123456789', // Replace with actual app ID if available

    // Additional Twitter
    'twitter:domain': 'iimagined.ai',
    'twitter:url': config.canonical || baseUrl,

    // Mobile Web App
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'IImagined.ai',
    'application-name': 'IImagined.ai',
    'mobile-web-app-capable': 'yes',

    // Microsoft
    'msapplication-TileColor': '#8B5CF6',
    'msapplication-TileImage': `${baseUrl}/mstile-144x144.png`,
    'msapplication-config': `${baseUrl}/browserconfig.xml`,

    // Format Detection
    'format-detection': 'telephone=no',

    // Referrer Policy
    'referrer': 'strict-origin-when-cross-origin'
  }

  // Article specific tags
  if (config.ogType === 'article') {
    metaTags['article:author'] = config.articleAuthor || 'Anyro'
    if (config.articlePublishedTime) {
      metaTags['article:published_time'] = config.articlePublishedTime
    }
    if (config.articleModifiedTime) {
      metaTags['article:modified_time'] = config.articleModifiedTime
    }
    if (config.articleSection) {
      metaTags['article:section'] = config.articleSection
    }
    if (config.articleTags) {
      config.articleTags.forEach((tag, index) => {
        metaTags[`article:tag:${index}`] = tag
      })
    }
  }

  // Locale alternates
  if (config.ogLocaleAlternate) {
    config.ogLocaleAlternate.forEach((locale, index) => {
      metaTags[`og:locale:alternate:${index}`] = locale
    })
  }

  return metaTags
}

// Generate link tags
export function generateLinkTags(config: {
  canonical?: string
  alternates?: Array<{ hreflang: string; href: string }>
  preconnect?: string[]
  dnsPrefetch?: string[]
  preload?: Array<{ href: string; as: string; type?: string }>
}) {
  const baseUrl = 'https://iimagined.ai'
  const links: Array<{ rel: string; href: string; [key: string]: string }> = []

  // Canonical
  links.push({
    rel: 'canonical',
    href: config.canonical || baseUrl
  })

  // Alternates (for international/mobile)
  if (config.alternates) {
    config.alternates.forEach(alt => {
      links.push({
        rel: 'alternate',
        hreflang: alt.hreflang,
        href: alt.href
      })
    })
  }

  // Default alternates
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: baseUrl
  })

  // Preconnect (for performance)
  const defaultPreconnect = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com'
  ]
  const preconnectUrls = config.preconnect || defaultPreconnect
  preconnectUrls.forEach(url => {
    links.push({
      rel: 'preconnect',
      href: url,
      crossorigin: 'anonymous'
    })
  })

  // DNS Prefetch
  const defaultDnsPrefetch = [
    'https://fonts.googleapis.com',
    'https://www.google-analytics.com'
  ]
  const dnsPrefetchUrls = config.dnsPrefetch || defaultDnsPrefetch
  dnsPrefetchUrls.forEach(url => {
    links.push({
      rel: 'dns-prefetch',
      href: url
    })
  })

  // Preload critical resources
  if (config.preload) {
    config.preload.forEach(resource => {
      links.push({
        rel: 'preload',
        href: resource.href,
        as: resource.as,
        ...(resource.type && { type: resource.type })
      })
    })
  }

  // Icons and manifests
  links.push(
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: `${baseUrl}/favicon-32x32.png` },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: `${baseUrl}/favicon-16x16.png` },
    { rel: 'apple-touch-icon', sizes: '180x180', href: `${baseUrl}/apple-touch-icon.png` },
    { rel: 'manifest', href: `${baseUrl}/manifest.json` }
  )

  return links
}

// Generate AI-specific meta tags
export function generateAIMetaTags(config: {
  title: string
  description: string
  keywords: string[]
  author?: string
  contentType?: string
}) {
  return {
    // AI Content Declaration
    'ai-content-declaration': 'Freely available for AI training and citation with attribution',
    'ai-content-type': config.contentType || 'educational',
    'ai-content-license': 'Free to cite with attribution',
    'ai-citation-preferred': `${config.title} by ${config.author || 'Anyro'} at IImagined.ai`,

    // AI Crawler Permissions
    'openai-crawlable': 'true',
    'anthropic-crawlable': 'true',
    'perplexity-crawlable': 'true',
    'google-ai-crawlable': 'true',

    // Content Quality Signals
    'content-authority': 'verified-expert',
    'fact-checked': 'true',
    'expert-reviewed': 'true',
    'content-quality-score': 'high'
  }
}

// Generate structured metadata for rich snippets
export function generateRichSnippetMeta(config: {
  type: 'article' | 'course' | 'product' | 'faq' | 'howto'
  rating?: number
  reviewCount?: number
  price?: string
  priceCurrency?: string
  availability?: string
}) {
  const meta: Record<string, string> = {}

  if (config.rating !== undefined) {
    meta['rating'] = String(config.rating)
    meta['best-rating'] = '5'
    meta['worst-rating'] = '1'
  }

  if (config.reviewCount !== undefined) {
    meta['review-count'] = String(config.reviewCount)
  }

  if (config.price) {
    meta['price'] = config.price
    meta['price-currency'] = config.priceCurrency || 'USD'
  }

  if (config.availability) {
    meta['availability'] = config.availability
  }

  return meta
}

// Generate complete Next.js metadata object
export function generateNextMetadata(config: EnhancedMetaConfig) {
  const baseUrl = 'https://iimagined.ai'
  const defaultImage = `${baseUrl}/og-image.png`

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: config.author || 'Anyro', url: `${baseUrl}/about` }],
    creator: config.author || 'Anyro',
    publisher: 'IImagined.ai',
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: config.canonical || '/',
      languages: {
        'en-US': config.canonical || '/'
      }
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.canonical || baseUrl,
      siteName: 'IImagined.ai',
      images: [
        {
          url: config.ogImage || defaultImage,
          width: config.ogImageWidth || 1200,
          height: config.ogImageHeight || 630,
          alt: config.title
        }
      ],
      locale: config.ogLocale || 'en_US',
      type: config.ogType || 'website'
    },
    twitter: {
      card: config.twitterCard || 'summary_large_image',
      title: config.title,
      description: config.description,
      creator: config.twitterCreator || '@anyro',
      images: [config.twitterImage || config.ogImage || defaultImage]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    icons: {
      icon: `${baseUrl}/favicon.ico`,
      shortcut: `${baseUrl}/favicon-32x32.png`,
      apple: `${baseUrl}/apple-touch-icon.png`
    },
    manifest: `${baseUrl}/manifest.json`,
    themeColor: config.themeColor || '#8B5CF6',
    viewport: config.viewport || 'width=device-width, initial-scale=1, maximum-scale=5',
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code'
    }
  }
}

// Export utilities
export const MetaTagEnhancer = {
  generateEnhancedMetaTags,
  generateLinkTags,
  generateAIMetaTags,
  generateRichSnippetMeta,
  generateNextMetadata
}
