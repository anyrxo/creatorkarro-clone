import { siteConfig } from '@/config/seo'

export interface InternalLink {
  url: string
  anchor: string
  context: string
  priority: 'high' | 'medium' | 'low'
}

export interface ContentCluster {
  pillarPage: string
  clusterPages: string[]
  topicKeywords: string[]
  internalLinks: InternalLink[]
}

// AI Content Clusters
export const aiContentClusters: ContentCluster[] = [
  {
    pillarPage: '/ai-influencers',
    clusterPages: [
      '/blog/claude-4-agentic-coding-revolution',
      '/blog/ai-automation-guide',
      '/blog/ai-era-skills',
      '/blog/ai-content-opportunity',
      '/blog/creating-ai-influencers'
    ],
    topicKeywords: ['AI influencers', 'AI automation', 'artificial intelligence', 'AI content creation'],
    internalLinks: [
      {
        url: '/ai-influencers',
        anchor: 'AI Influencers Course',
        context: 'Learn how to create AI influencers',
        priority: 'high'
      }
    ]
  },
  {
    pillarPage: '/n8n-ai-automations',
    clusterPages: [
      '/blog/n8n-beginners-guide',
      '/blog/n8n-automation-success',
      '/blog/social-media-automation',
      '/blog/essential-n8n-workflows'
    ],
    topicKeywords: ['n8n automation', 'workflow automation', 'business automation', 'no-code automation'],
    internalLinks: [
      {
        url: '/n8n-ai-automations',
        anchor: 'N8N AI Automations',
        context: 'Complete N8N automation workflows',
        priority: 'high'
      }
    ]
  },
  {
    pillarPage: '/instagram-ignited',
    clusterPages: [
      '/blog/instagram-growth-2025',
      '/blog/instagram-reels-guide',
      '/blog/instagram-monetization-guide',
      '/blog/instagram-mistakes-lessons',
      '/blog/instagram-ignited-success-stories'
    ],
    topicKeywords: ['Instagram growth', 'Instagram marketing', 'social media growth', 'Instagram automation'],
    internalLinks: [
      {
        url: '/instagram-ignited',
        anchor: 'Instagram Ignited Course',
        context: 'Master Instagram growth strategies',
        priority: 'high'
      }
    ]
  },
  {
    pillarPage: '/digital-products',
    clusterPages: [
      '/blog/digital-products-empire',
      '/blog/digital-products-ideas-2025',
      '/blog/digital-products-that-sell',
      '/blog/digital-product-pricing',
      '/blog/digital-product-success-story',
      '/blog/how-to-sell-templates',
      '/blog/product-launch-strategy'
    ],
    topicKeywords: ['digital products', 'online business', 'passive income', 'product creation'],
    internalLinks: [
      {
        url: '/digital-products',
        anchor: 'Digital Products Guide',
        context: 'Complete digital product creation guide',
        priority: 'high'
      }
    ]
  }
]

// AI Model Comparison Cluster
export const aiModelCluster: ContentCluster = {
  pillarPage: '/blog/gpt-4-1-vs-claude-sonnet-3-7-comparison',
  clusterPages: [
    '/blog/claude-4-agentic-coding-revolution',
    '/blog/gemini-2-pro-bolt-diy-full-stack-revolution',
    '/blog/deepseek-r1-open-source-ai-revolution',
    '/blog/llama-4-open-source-ai-powerhouse',
    '/blog/qwen-3-alibaba-open-source-llm',
    '/blog/deepseek-janus-pro-7b-multimodal-ai-revolution'
  ],
  topicKeywords: ['AI models', 'AI comparison', 'large language models', 'open source AI'],
  internalLinks: []
}

// Content Creation Cluster
export const contentCreationCluster: ContentCluster = {
  pillarPage: '/blog/scale-content-creation',
  clusterPages: [
    '/blog/content-scaling-framework',
    '/blog/faceless-content-strategy',
    '/blog/create-faceless-youtube-channel',
    '/blog/ai-image-generation-guide',
    '/blog/social-media-calendar',
    '/blog/youtube-shorts-strategy',
    '/blog/tiktok-growth-hacks',
    '/blog/viral-carousel-guide'
  ],
  topicKeywords: ['content creation', 'content scaling', 'social media content', 'content automation'],
  internalLinks: []
}

export function generateInternalLinks(currentSlug: string, content: string): InternalLink[] {
  const links: InternalLink[] = []
  
  // Find relevant clusters for current page
  const relevantClusters = aiContentClusters.filter(cluster => 
    cluster.clusterPages.includes(`/blog/${currentSlug}`) ||
    cluster.pillarPage.includes(currentSlug)
  )
  
  // Add cluster-based internal links
  relevantClusters.forEach(cluster => {
    // Link to pillar page if current page is a cluster page
    if (cluster.clusterPages.includes(`/blog/${currentSlug}`)) {
      links.push({
        url: cluster.pillarPage,
        anchor: cluster.pillarPage.split('/').pop()?.replace('-', ' ') || 'Related Course',
        context: `Learn more about ${cluster.topicKeywords.join(', ')}`,
        priority: 'high'
      })
    }
    
    // Link to related cluster pages
    cluster.clusterPages
      .filter(page => page !== `/blog/${currentSlug}`)
      .slice(0, 3) // Limit to 3 related links
      .forEach(page => {
        const anchor = page.split('/').pop()?.replace(/-/g, ' ') || 'Related Article'
        links.push({
          url: page,
          anchor: anchor.charAt(0).toUpperCase() + anchor.slice(1),
          context: 'Related reading',
          priority: 'medium'
        })
      })
  })
  
  // AI-specific contextual links
  if (content.includes('Claude') || currentSlug.includes('claude')) {
    links.push({
      url: '/blog/claude-4-agentic-coding-revolution',
      anchor: 'Claude 4 Agentic Coding Revolution',
      context: 'Discover Claude 4\'s latest capabilities',
      priority: 'high'
    })
  }
  
  if (content.includes('GPT') || content.includes('OpenAI')) {
    links.push({
      url: '/blog/gpt-4-1-vs-claude-sonnet-3-7-comparison',
      anchor: 'GPT-4.1 vs Claude Sonnet Comparison',
      context: 'Compare the leading AI models',
      priority: 'high'
    })
  }
  
  if (content.includes('automation') || content.includes('n8n')) {
    links.push({
      url: '/n8n-ai-automations',
      anchor: 'N8N AI Automations Course',
      context: 'Master workflow automation',
      priority: 'high'
    })
  }
  
  if (content.includes('Instagram') || content.includes('social media')) {
    links.push({
      url: '/instagram-ignited',
      anchor: 'Instagram Ignited',
      context: 'Grow your Instagram following',
      priority: 'high'
    })
  }
  
  // Always include high-value conversion pages
  if (!currentSlug.includes('digital-products')) {
    links.push({
      url: '/digital-products',
      anchor: 'Digital Products Hub',
      context: 'Explore our digital product collection',
      priority: 'medium'
    })
  }
  
  return links.slice(0, 6) // Limit to 6 internal links per page
}

export function generateBreadcrumbs(slug: string, category?: string): Array<{name: string, url: string}> {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]
  
  if (category) {
    breadcrumbs.push({
      name: category,
      url: `/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`
    })
  }
  
  const pageName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  breadcrumbs.push({
    name: pageName,
    url: `/blog/${slug}`
  })
  
  return breadcrumbs
}

// Topic clusters for better content organization
export const topicClusters = {
  'ai-development': [
    'claude-4-agentic-coding-revolution',
    'gemini-2-pro-bolt-diy-full-stack-revolution',
    'composer-agent-code-llm-full-stack',
    'roocode-v3-3-cline-alternative'
  ],
  'ai-models': [
    'gpt-4-1-vs-claude-sonnet-3-7-comparison',
    'deepseek-r1-open-source-ai-revolution',
    'llama-4-open-source-ai-powerhouse',
    'qwen-3-alibaba-open-source-llm',
    'deepseek-janus-pro-7b-multimodal-ai-revolution'
  ],
  'automation': [
    'n8n-beginners-guide',
    'n8n-automation-success',
    'social-media-automation',
    'essential-n8n-workflows',
    'ai-automation-guide'
  ],
  'content-creation': [
    'scale-content-creation',
    'content-scaling-framework',
    'faceless-content-strategy',
    'create-faceless-youtube-channel',
    'ai-image-generation-guide'
  ],
  'social-growth': [
    'instagram-growth-2025',
    'instagram-reels-guide',
    'tiktok-growth-hacks',
    'youtube-shorts-strategy',
    'viral-carousel-guide'
  ],
  'digital-business': [
    'digital-products-empire',
    'digital-products-ideas-2025',
    'passive-income-blueprint',
    'product-launch-strategy',
    'monetize-with-ai'
  ]
}

export function getRelatedPosts(currentSlug: string, limit: number = 4): string[] {
  // Find which cluster the current post belongs to
  for (const [cluster, posts] of Object.entries(topicClusters)) {
    if (posts.includes(currentSlug)) {
      return posts.filter(post => post !== currentSlug).slice(0, limit)
    }
  }
  
  // If not in any cluster, return AI-focused posts
  return topicClusters['ai-models'].slice(0, limit)
}