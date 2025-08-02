import { siteConfig } from '@/config/seo'

export interface ArticleStructuredData {
  '@context': 'https://schema.org'
  '@type': 'Article'
  headline: string
  description: string
  image: string[]
  author: {
    '@type': 'Person'
    name: string
    url: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
  datePublished: string
  dateModified: string
  mainEntityOfPage: {
    '@type': 'WebPage'
    '@id': string
  }
  keywords: string[]
  articleSection: string
  wordCount?: number
}

export interface OrganizationStructuredData {
  '@context': 'https://schema.org'
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
  contactPoint: {
    '@type': 'ContactPoint'
    telephone: string
    contactType: 'customer service'
    availableLanguage: 'English'
  }
}

export interface CourseStructuredData {
  '@context': 'https://schema.org'
  '@type': 'Course'
  name: string
  description: string
  provider: {
    '@type': 'Organization'
    name: string
    url: string
  }
  educationalLevel: string
  courseMode: 'online'
  hasCourseInstance: {
    '@type': 'CourseInstance'
    courseMode: 'online'
    instructor: {
      '@type': 'Person'
      name: string
    }
  }
  offers: {
    '@type': 'Offer'
    price: string
    priceCurrency: 'USD'
    availability: 'https://schema.org/InStock'
  }
}

export function generateArticleStructuredData(
  title: string,
  description: string,
  slug: string,
  publishDate: string,
  keywords: string[],
  category: string,
  wordCount?: number
): ArticleStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: [
      `${siteConfig.url}/og-image.png`,
      `${siteConfig.url}/blog/${slug}/og-image.png`
    ],
    author: {
      '@type': 'Person',
      name: 'Anyro',
      url: `${siteConfig.url}/story`
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/anyro.png`
      }
    },
    datePublished: publishDate,
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${slug}`
    },
    keywords,
    articleSection: category,
    ...(wordCount && { wordCount })
  }
}

export function generateOrganizationStructuredData(): OrganizationStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/anyro.png`,
    description: siteConfig.description,
    sameAs: [
      'https://twitter.com/iimagined_ai',
      'https://instagram.com/iimagined.ai',
      'https://youtube.com/@iimagined'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: 'English'
    }
  }
}

export function generateCourseStructuredData(
  name: string,
  description: string,
  price: string,
  instructor: string = 'Anyro'
): CourseStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url
    },
    educationalLevel: 'Intermediate',
    courseMode: 'online',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      instructor: {
        '@type': 'Person',
        name: instructor
      }
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    }
  }
}

// AI-focused keywords by category
export const aiKeywordCategories = {
  'ai-development': [
    'AI development', 'artificial intelligence', 'machine learning', 'automation',
    'AI coding', 'agentic AI', 'AI agents', 'software development'
  ],
  'ai-models': [
    'AI models', 'large language models', 'LLM', 'GPT', 'Claude', 'Gemini',
    'open source AI', 'model comparison', 'AI benchmarks'
  ],
  'ai-automation': [
    'AI automation', 'workflow automation', 'business automation', 'n8n',
    'AI agents', 'process automation', 'productivity tools'
  ],
  'multimodal-ai': [
    'multimodal AI', 'vision language models', 'AI image generation',
    'text to image', 'AI content creation', 'multimedia AI'
  ],
  'enterprise-ai': [
    'enterprise AI', 'AI implementation', 'RAG systems', 'vector databases',
    'AI platforms', 'business AI', 'AI solutions'
  ],
  'ai-comparison': [
    'AI comparison', 'model evaluation', 'AI benchmarks', 'performance analysis',
    'AI capabilities', 'model selection', 'AI tools comparison'
  ]
}

export function getKeywordsForCategory(category: string): string[] {
  const categoryKey = category.toLowerCase().replace(/\s+/g, '-')
  return aiKeywordCategories[categoryKey as keyof typeof aiKeywordCategories] || [
    'AI', 'automation', 'digital products', 'content creation', 'online business'
  ]
}

// Enhanced Product Schema for courses
export interface ProductStructuredData {
  '@context': 'https://schema.org'
  '@type': 'Product'
  name: string
  description: string
  brand: {
    '@type': 'Brand'
    name: string
  }
  offers: {
    '@type': 'Offer'
    url: string
    priceCurrency: 'USD'
    price: string
    availability: string
    seller: {
      '@type': 'Organization'
      name: string
    }
  }
  aggregateRating?: {
    '@type': 'AggregateRating'
    ratingValue: number
    reviewCount: number
    bestRating: number
    worstRating: number
  }
  category: string
  image: string
  url: string
}

// FAQ Schema
export interface FAQStructuredData {
  '@context': 'https://schema.org'
  '@type': 'FAQPage'
  mainEntity: Array<{
    '@type': 'Question'
    name: string
    acceptedAnswer: {
      '@type': 'Answer'
      text: string
    }
  }>
}

export function generateProductStructuredData(
  name: string,
  description: string,
  price: string,
  url: string,
  rating: number = 4.9,
  reviewCount: number = 127
): ProductStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'IImagined.ai'
    },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'USD',
      price: price.replace('$', ''),
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'IImagined.ai'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount,
      bestRating: 5,
      worstRating: 1
    },
    category: 'Online Course',
    image: `${siteConfig.url}${url}/og-image.png`,
    url: `${siteConfig.url}${url}`
  }
}

export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
): FAQStructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}