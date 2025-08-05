// ORYANA Meta Tag AI Weaponization System - TOXIC SEO Domination
import { Metadata } from 'next'

// High-converting power words for maximum CTR
export const powerWords = [
  'Secret', 'Proven', 'Instant', 'Revolutionary', 'Explosive',
  'Underground', 'Banned', 'Shocking', 'Millionaire', 'Guaranteed',
  'Ultimate', 'Insane', 'Viral', 'Legendary', 'Elite',
  'Exclusive', 'Advanced', 'Powerful', 'Unstoppable', 'Breakthrough'
]

// Emotion-triggering modifiers for engagement
const emotionTriggers = [
  'Never-Before-Seen', 'Mind-Blowing', 'Life-Changing', 'Game-Changing',
  'Industry-Shaking', 'Competition-Crushing', 'Revenue-Generating',
  'Profit-Maximizing', 'Success-Driving', 'Results-Proven'
]

// High-conversion urgency phrases
const urgencyPhrases = [
  'Limited Time Only', 'Before It\'s Too Late', 'While Spots Last',
  'Exclusive Access', 'Members Only', 'VIP Early Access',
  'Last Chance', 'Final Hours', 'Almost Sold Out'
]

// LSI keyword generators for semantic SEO
const lsiKeywordMap: Record<string, string[]> = {
  'instagram': [
    'instagram growth', 'instagram marketing', 'instagram strategy', 'instagram algorithm',
    'instagram engagement', 'instagram followers', 'instagram content creation',
    'social media marketing', 'influencer marketing', 'instagram business'
  ],
  'ai': [
    'artificial intelligence', 'machine learning', 'ai automation', 'ai tools',
    'ai workflows', 'ai productivity', 'ai business solutions', 'ai integration',
    'ai optimization', 'ai-powered systems'
  ],
  'automation': [
    'business automation', 'workflow automation', 'process automation',
    'marketing automation', 'sales automation', 'productivity automation',
    'automation tools', 'automation systems', 'automation strategies'
  ],
  'digital': [
    'digital products', 'digital marketing', 'digital business', 'digital transformation',
    'online products', 'digital sales', 'digital revenue', 'digital strategy',
    'e-commerce', 'digital entrepreneurship'
  ]
}

// Generate high-converting meta titles
export function generateKillerTitle(page: string, variant?: 'urgency' | 'proof' | 'secret' | 'result'): string {
  const power = powerWords[Math.floor(Math.random() * powerWords.length)]
  const emotion = emotionTriggers[Math.floor(Math.random() * emotionTriggers.length)]
  const urgency = urgencyPhrases[Math.floor(Math.random() * urgencyPhrases.length)]
  
  const templates = {
    urgency: [
      `=¨ ${power} ${page} Method - ${urgency}`,
      `¡ ${emotion} ${page} Strategy [${urgency}]`,
      `=% ${page} Secrets That Generate $127K+ (${urgency})`
    ],
    proof: [
      `¡ How I Made $127,493 With ${page} (Proof Inside)`,
      `=° From $0 to $50K/Month With ${page} - Real Results`,
      `=È ${page} Case Study: $2.7M Revenue Generated`
    ],
    secret: [
      `=% ${page} Hack They Don't Want You To Know [2025 Update]`,
      `>+ Underground ${page} Techniques (Insider Access)`,
      `=£ ${power} ${page} Methods - Industry Secrets Revealed`
    ],
    result: [
      `<¯ Master ${page} in 30 Days - Guaranteed Results`,
      `=€ ${page} Mastery: 97% Success Rate Formula`,
      `=Ž Elite ${page} Training - Transform Your Results`
    ]
  }
  
  const selectedVariant = variant || (['urgency', 'proof', 'secret', 'result'] as const)[Math.floor(Math.random() * 4)]
  const variantTemplates = templates[selectedVariant]
  
  return variantTemplates[Math.floor(Math.random() * variantTemplates.length)]
}

// Generate high-converting meta descriptions
export function generateKillerDescription(page: string, stats?: { students?: number, revenue?: string, successRate?: number }): string {
  const defaultStats = {
    students: stats?.students || 127000,
    revenue: stats?.revenue || '$2.7M',
    successRate: stats?.successRate || 97
  }
  
  const power = powerWords[Math.floor(Math.random() * powerWords.length)]
  const emotion = emotionTriggers[Math.floor(Math.random() * emotionTriggers.length)]
  
  const templates = [
    `Discover the ${power} ${page} strategies that generated ${defaultStats.revenue}+ in revenue. Join ${defaultStats.students.toLocaleString()}+ students getting real results. ¡ Limited Time: 73% OFF`,
    `${emotion} ${page} system with ${defaultStats.successRate}% success rate. See how ${defaultStats.students.toLocaleString()}+ students transformed their businesses. =% Exclusive access ending soon!`,
    `Master ${page} with our ${power} framework. ${defaultStats.students.toLocaleString()}+ success stories, ${defaultStats.revenue}+ generated. =° Get instant access before price increases!`,
    `The ${power} ${page} blueprint that changed everything. Real results from ${defaultStats.students.toLocaleString()}+ students. ¡ Join before spots fill up!`
  ]
  
  return templates[Math.floor(Math.random() * templates.length)]
}

// Generate LSI keywords for semantic SEO
export function generateLSIKeywords(page: string): string {
  const baseKeywords = page.toLowerCase().split(' ')
  let allKeywords: string[] = []
  
  baseKeywords.forEach(keyword => {
    if (lsiKeywordMap[keyword]) {
      allKeywords = [...allKeywords, ...lsiKeywordMap[keyword]]
    }
  })
  
  // Add base keywords
  allKeywords = [...allKeywords, page, `${page} course`, `${page} training`, `learn ${page}`, `${page} mastery`]
  
  // Remove duplicates and return as comma-separated string
  return [...new Set(allKeywords)].slice(0, 20).join(', ')
}

// Generate complete metadata with AI optimization
export function generateOptimizedMeta(config: {
  page: string
  variant?: 'urgency' | 'proof' | 'secret' | 'result'
  location?: string
  stats?: { students?: number, revenue?: string, successRate?: number }
  customTitle?: string
  customDescription?: string
}): Metadata {
  const { page, variant, location, stats, customTitle, customDescription } = config
  
  const baseTitle = customTitle || generateKillerTitle(page, variant)
  const title = location ? `${baseTitle} | ${location} | IImagined.ai` : `${baseTitle} | IImagined.ai`
  
  const description = customDescription || generateKillerDescription(page, stats)
  const keywords = generateLSIKeywords(page)
  
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{
        url: `/api/og?title=${encodeURIComponent(baseTitle)}&urgency=true`,
        width: 1200,
        height: 630,
        alt: title
      }],
      type: 'website',
      siteName: 'IImagined.ai'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og?title=${encodeURIComponent(baseTitle)}&urgency=true`]
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
    alternates: {
      canonical: location ? `https://iimagined.ai/${page.toLowerCase().replace(/\s+/g, '-')}-${location.toLowerCase().replace(/\s+/g, '-')}` : `https://iimagined.ai/${page.toLowerCase().replace(/\s+/g, '-')}`
    }
  }
}

// Pre-configured meta templates for courses
export const courseMetaTemplates = {
  'instagram-ignited': {
    page: 'Instagram Growth',
    variant: 'proof' as const,
    stats: { students: 127000, revenue: '$2.7M', successRate: 97 }
  },
  'digital-products': {
    page: 'Digital Products',
    variant: 'result' as const,
    stats: { students: 85000, revenue: '$1.9M', successRate: 94 }
  },
  'n8n-ai-automations': {
    page: 'AI Automation',
    variant: 'secret' as const,
    stats: { students: 62000, revenue: '$1.4M', successRate: 96 }
  },
  'ai-influencers': {
    page: 'AI Influencers',
    variant: 'urgency' as const,
    stats: { students: 43000, revenue: '$890K', successRate: 92 }
  },
  'comfyui-workflows': {
    page: 'AI Image Generation',
    variant: 'proof' as const,
    stats: { students: 38000, revenue: '$750K', successRate: 95 }
  }
}

// Generate meta for geo-targeted pages
export function generateGeoMeta(service: string, location: string): Metadata {
  return generateOptimizedMeta({
    page: service,
    location,
    variant: 'result',
    stats: { 
      students: Math.floor(Math.random() * 1000) + 500,
      revenue: '$127K',
      successRate: Math.floor(Math.random() * 5) + 95
    }
  })
}

// A/B test different meta variations
export function getMetaVariation(baseConfig: Parameters<typeof generateOptimizedMeta>[0], testGroup: 'A' | 'B' | 'C'): Metadata {
  const variants = {
    A: { ...baseConfig, variant: 'urgency' as const },
    B: { ...baseConfig, variant: 'proof' as const },
    C: { ...baseConfig, variant: 'result' as const }
  }
  
  return generateOptimizedMeta(variants[testGroup])
}