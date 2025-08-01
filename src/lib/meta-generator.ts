// AI-Powered Meta Tag Generation System
export interface MetaOptions {
  title?: string
  description?: string
  keywords?: string[]
  location?: string
  service?: string
  modifier?: string
}

export interface BlogPost {
  title: string
  excerpt: string
  slug: string
  category: string
  tags: string[]
  publishDate: string
  readTime: number
  featured?: boolean
}

export function generateDynamicMeta(options: MetaOptions = {}) {
  const {
    title = "AI Automation & Instagram Growth",
    description = "Master AI automation, Instagram growth, and digital products",
    keywords = [],
    location,
    service,
    modifier
  } = options

  // AI-generated power words for higher CTR
  const powerWords = [
    'Ultimate', 'Secret', 'Proven', 'Exclusive', 'Advanced', 'Master',
    'Revolutionary', 'Breakthrough', 'Insider', 'Premium', 'Elite',
    'Guaranteed', 'Explosive', 'Dominant', 'Supreme', 'Legendary'
  ]

  const emotionalTriggers = [
    'Transform Your Life', 'Unlock Hidden Potential', 'Skyrocket Your Success',
    'Dominate Your Competition', 'Achieve Financial Freedom', 'Master the Game',
    'Break Through Barriers', 'Unleash Your Power', 'Discover Secrets',
    'Maximize Your Impact', 'Accelerate Your Growth', 'Revolutionize Your Business'
  ]

  const urgencyWords = [
    'Today', 'Now', 'Instant', 'Immediate', 'Fast', 'Quick',
    'Limited Time', 'Exclusive Access', 'Before It\'s Too Late',
    'Don\'t Miss Out', 'Act Fast', 'While Supplies Last'
  ]

  // Generate location-specific title
  let dynamicTitle = title
  if (location && service) {
    const powerWord = powerWords[Math.floor(Math.random() * powerWords.length)]
    const trigger = emotionalTriggers[Math.floor(Math.random() * emotionalTriggers.length)]
    dynamicTitle = `${powerWord} ${service} in ${location} | ${trigger} | IImagined.ai`
  } else if (modifier && service) {
    const urgency = urgencyWords[Math.floor(Math.random() * urgencyWords.length)]
    dynamicTitle = `${modifier} ${service} - ${urgency} | IImagined.ai`
  }

  // Generate emotionally-charged description
  let dynamicDescription = description
  if (location && service) {
    const trigger = emotionalTriggers[Math.floor(Math.random() * emotionalTriggers.length)]
    const urgency = urgencyWords[Math.floor(Math.random() * urgencyWords.length)]
    dynamicDescription = `${trigger} with our ${service} services in ${location}. ${urgency} - proven strategies that generate real results. Join 127K+ successful entrepreneurs who've transformed their businesses.`
  } else if (service) {
    const powerWord = powerWords[Math.floor(Math.random() * powerWords.length)]
    dynamicDescription = `${powerWord} ${service} strategies that have generated $2.3M+ in revenue. Step-by-step blueprints, proven systems, and insider secrets revealed.`
  }

  // Generate comprehensive keywords
  const baseKeywords = [
    'ai automation', 'instagram growth', 'digital products', 'passive income',
    'content creation', 'social media marketing', 'online business', 'make money online',
    'youtube automation', 'affiliate marketing', 'dropshipping', 'ecommerce',
    'chatgpt automation', 'ai tools', 'comfyui workflows', 'n8n automation'
  ]

  const locationKeywords = location ? [
    `${service} ${location}`,
    `${service} near me`,
    `best ${service} ${location}`,
    `top ${service} ${location}`,
    `professional ${service} ${location}`,
    `${location} ${service} expert`,
    `${location} ${service} consultant`,
    `${location} ${service} agency`
  ] : []

  const longTailKeywords = [
    'how to grow instagram followers fast',
    'ai automation tools for business',
    'best digital products to sell online',
    'passive income ideas 2024',
    'youtube shorts automation',
    'chatgpt prompts for business',
    'comfyui workflows for beginners',
    'instagram growth hacks that work',
    'ai content creation tools',
    'automated business systems'
  ]

  const allKeywords = [
    ...baseKeywords,
    ...locationKeywords,
    ...longTailKeywords,
    ...keywords
  ]

  return {
    title: dynamicTitle.substring(0, 60), // Google's title limit
    description: dynamicDescription.substring(0, 160), // Google's description limit
    keywords: allKeywords.join(', '),
    openGraph: {
      title: dynamicTitle,
      description: dynamicDescription,
      url: `https://iimagined.ai${location ? `/${service}-${location}` : ''}`,
      siteName: 'IImagined.ai',
      images: [{
        url: 'https://iimagined.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: dynamicTitle
      }],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: dynamicTitle,
      description: dynamicDescription,
      images: ['https://iimagined.ai/twitter-image.jpg'],
      creator: '@iimagined_ai'
    },
    canonical: `https://iimagined.ai${location ? `/${service}-${location}` : ''}`,
    alternates: {
      canonical: `https://iimagined.ai${location ? `/${service}-${location}` : ''}`,
      languages: {
        'en-US': `https://iimagined.ai${location ? `/${service}-${location}` : ''}`,
        'es-ES': `https://es.iimagined.ai${location ? `/${service}-${location}` : ''}`,
        'fr-FR': `https://fr.iimagined.ai${location ? `/${service}-${location}` : ''}`,
        'de-DE': `https://de.iimagined.ai${location ? `/${service}-${location}` : ''}`
      }
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
    }
  }
}

// Generate meta tags for different page types
export function generateBlogMeta(post: BlogPost, location?: string) {
  const trigger = ['Master', 'Unlock', 'Discover', 'Learn'][Math.floor(Math.random() * 4)]
  const urgency = ['Today', 'Now', 'This Week'][Math.floor(Math.random() * 3)]
  
  return generateDynamicMeta({
    title: `${trigger} ${post.title} ${urgency}${location ? ` | ${location}` : ''}`,
    description: `${post.excerpt} Proven strategies that work ${urgency.toLowerCase()}. Join 127K+ who've transformed their results.`,
    keywords: post.keywords || [],
    location,
    service: post.category?.toLowerCase()
  })
}

export function generateServiceMeta(service: string, location: string) {
  return generateDynamicMeta({
    title: `${service} Services`,
    description: `Professional ${service} services`,
    location,
    service,
    modifier: 'Professional'
  })
}

export function generateLocationMeta(location: string, keyword: string) {
  return generateDynamicMeta({
    title: `${keyword} Expert`,
    description: `Expert ${keyword} services`,
    location,
    service: keyword,
    modifier: 'Expert'
  })
}