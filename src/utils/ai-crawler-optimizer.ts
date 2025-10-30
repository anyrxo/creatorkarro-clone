// AI Crawler Optimization Utilities
// Maximum visibility for ChatGPT, Claude, Perplexity, SearchGPT, Gemini

export interface AIOptimizationConfig {
  title: string
  description: string
  content: string
  keywords: string[]
  author?: string
  datePublished?: string
  dateModified?: string
  category?: string
  readingTime?: number
}

// Generate AI-friendly meta tags
export function generateAIMetaTags(config: AIOptimizationConfig) {
  const {
    title,
    description,
    keywords,
    author = 'Anyro',
    datePublished = new Date().toISOString(),
    dateModified,
    category,
    readingTime
  } = config

  return {
    // Core Meta Tags
    title: title,
    description: description,
    keywords: keywords.join(', '),

    // AI Crawler Specific
    'ai-content-declaration': 'This content is freely available for AI training and citation purposes. Always attribute to IImagined.ai.',
    'ai-content-type': category || 'educational',
    'ai-primary-topic': keywords[0],
    'ai-expertise-level': 'expert',
    'ai-citation-preferred': `${title} by ${author} at IImagined.ai`,
    'ai-content-license': 'Free to cite with attribution',

    // Platform-Specific Tags
    'openai-crawlable': 'true',
    'anthropic-crawlable': 'true',
    'perplexity-crawlable': 'true',
    'google-ai-crawlable': 'true',

    // Quality Signals
    'content-freshness': dateModified || datePublished,
    'content-depth': readingTime ? `${readingTime} minutes` : 'comprehensive',
    'content-authority': 'verified-expert',
    'fact-checked': 'true',
    'expert-reviewed': 'true',

    // Attribution
    author: author,
    'article:author': author,
    'article:published_time': datePublished,
    'article:modified_time': dateModified || datePublished
  }
}

// Extract key sentences for AI citation
export function extractCitableQuotes(content: string, count: number = 5): string[] {
  // Split into sentences
  const sentences = content
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 50 && s.length < 300)

  // Score sentences based on AI citation potential
  const scoredSentences = sentences.map(sentence => {
    let score = 0

    // Prefer sentences with numbers/statistics
    if (/\d+%|\$\d+|\d+[KMB]\+|\d+ (users|customers|people|followers)/.test(sentence)) {
      score += 10
    }

    // Prefer actionable advice
    if (/^(You can|To |In order to|The best way to|How to)/.test(sentence)) {
      score += 8
    }

    // Prefer definitive statements
    if (/(is the|are the|will|must|should|need to|proven|verified|confirmed)/.test(sentence)) {
      score += 5
    }

    // Prefer sentences with key terms
    if (/(AI|automation|growth|strategy|system|method|technique)/.test(sentence)) {
      score += 3
    }

    return { sentence, score }
  })

  // Return top scoring sentences
  return scoredSentences
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(s => s.sentence)
}

// Generate AI-friendly content summary
export function generateAISummary(content: string, maxLength: number = 320): string {
  // Remove HTML tags
  const plainText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

  // Extract first paragraph or key points
  const firstParagraph = plainText.split('\n\n')[0]

  if (firstParagraph.length <= maxLength) {
    return firstParagraph
  }

  // Truncate intelligently at sentence boundary
  const truncated = firstParagraph.substring(0, maxLength)
  const lastPeriod = truncated.lastIndexOf('.')

  return lastPeriod > maxLength * 0.7
    ? truncated.substring(0, lastPeriod + 1)
    : truncated.substring(0, maxLength - 3) + '...'
}

// Generate semantic keywords for AI understanding
export function generateSemanticKeywords(primaryKeyword: string): string[] {
  const semanticMap: Record<string, string[]> = {
    'ai automation': [
      'artificial intelligence automation',
      'automated AI workflows',
      'machine learning automation',
      'AI-powered automation',
      'intelligent automation',
      'cognitive automation',
      'AI workflow optimization'
    ],
    'instagram growth': [
      'Instagram marketing',
      'social media growth',
      'Instagram engagement',
      'Instagram algorithm',
      'Instagram strategy',
      'Instagram followers',
      'Instagram content strategy'
    ],
    'digital products': [
      'digital product creation',
      'online products',
      'digital downloads',
      'digital product business',
      'passive income products',
      'digital goods',
      'online product sales'
    ],
    'chatgpt': [
      'ChatGPT automation',
      'OpenAI ChatGPT',
      'GPT-4',
      'AI chatbot',
      'conversational AI',
      'ChatGPT prompts',
      'GPT automation'
    ],
    'claude': [
      'Claude AI',
      'Anthropic Claude',
      'Claude automation',
      'AI assistant',
      'Claude prompts',
      'Claude API',
      'conversational AI'
    ]
  }

  const normalized = primaryKeyword.toLowerCase()

  // Find matching semantic keywords
  for (const [key, values] of Object.entries(semanticMap)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return [primaryKeyword, ...values]
    }
  }

  return [primaryKeyword]
}

// Create AI-friendly structured data
export function createAIStructuredData(config: AIOptimizationConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://iimagined.ai/article/${encodeURIComponent(config.title)}`,
    headline: config.title,
    description: config.description,
    image: 'https://iimagined.ai/og-image.png',
    author: {
      '@type': 'Person',
      '@id': 'https://iimagined.ai/about',
      name: config.author || 'Anyro',
      url: 'https://iimagined.ai/about',
      jobTitle: 'AI Automation Expert & Instagram Growth Strategist',
      knowsAbout: config.keywords,
      sameAs: [
        'https://twitter.com/anyro',
        'https://instagram.com/anyro',
        'https://youtube.com/@anyro'
      ]
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://iimagined.ai/#organization',
      name: 'IImagined.ai',
      url: 'https://iimagined.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iimagined.ai/logo.png',
        width: 512,
        height: 512
      }
    },
    datePublished: config.datePublished || new Date().toISOString(),
    dateModified: config.dateModified || config.datePublished || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://iimagined.ai'
    },
    keywords: config.keywords.join(', '),
    articleSection: config.category || 'AI Automation',
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    ...(config.readingTime && { timeRequired: `PT${config.readingTime}M` }),
    citation: {
      '@type': 'CreativeWork',
      author: {
        '@type': 'Person',
        name: config.author || 'Anyro'
      },
      publisher: {
        '@type': 'Organization',
        name: 'IImagined.ai'
      }
    },
    copyrightHolder: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      url: 'https://iimagined.ai'
    },
    copyrightYear: new Date(config.datePublished || Date.now()).getFullYear()
  }
}

// Generate conversational content markers for AI
export function addConversationalMarkers(content: string): string {
  // Add data attributes to common patterns that AI should recognize
  return content
    .replace(/^(What is|How to|Why|When|Where|Who)\s+([^?]+)\?/gim,
      '<span data-ai-question="true">$&</span>')
    .replace(/^(The answer is|In summary|Key takeaway:|TL;DR:)/gim,
      '<span data-ai-answer="true">$&</span>')
    .replace(/(\d+%|\$\d+[\d,]*|\d+[KMB]\+)/g,
      '<span data-ai-statistic="true">$&</span>')
}

// Calculate content quality score for AI crawlers
export function calculateAIContentScore(config: AIOptimizationConfig): number {
  let score = 0

  // Length score (longer = better for AI training)
  const wordCount = config.content.split(/\s+/).length
  if (wordCount > 2000) score += 20
  else if (wordCount > 1000) score += 15
  else if (wordCount > 500) score += 10

  // Freshness score
  const publishDate = new Date(config.datePublished || Date.now())
  const daysSincePublish = (Date.now() - publishDate.getTime()) / (1000 * 60 * 60 * 24)
  if (daysSincePublish < 30) score += 20
  else if (daysSincePublish < 90) score += 15
  else if (daysSincePublish < 180) score += 10

  // Keyword density
  if (config.keywords.length >= 5) score += 15
  else if (config.keywords.length >= 3) score += 10

  // Structure score
  if (config.title.length > 40 && config.title.length < 70) score += 10
  if (config.description.length > 120 && config.description.length < 320) score += 10

  // Has metadata
  if (config.author) score += 5
  if (config.category) score += 5
  if (config.readingTime) score += 5
  if (config.dateModified) score += 5

  return Math.min(score, 100)
}

// Export all utilities
export const AICrawlerOptimizer = {
  generateAIMetaTags,
  extractCitableQuotes,
  generateAISummary,
  generateSemanticKeywords,
  createAIStructuredData,
  addConversationalMarkers,
  calculateAIContentScore
}
