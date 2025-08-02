import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/seo'
import { generateMassiveSitemaps } from '@/lib/sitemap-generator'

// Blog posts slugs (updated with all 64 articles)
const blogPosts = [
  // Original posts
  'instagram-growth-2025',
  'instagram-reels-guide',
  'tiktok-growth-hacks',
  'comfyui-workflow-library',
  'youtube-shorts-strategy',
  'scale-content-creation',
  'social-media-calendar',
  'product-launch-strategy',
  'ai-automation-guide',
  'instagram-monetization-guide',
  'email-marketing-guide',
  'ai-era-skills',
  'digital-products-empire',
  'ai-content-opportunity',
  'digital-products-ideas-2025',
  'faceless-content-strategy',
  'how-to-sell-templates',
  'create-faceless-youtube-channel',
  'monetize-with-ai',
  'ai-image-generation-guide',
  'chatgpt-automation-tips',
  'content-scaling-framework',
  'n8n-beginners-guide',
  'passive-income-blueprint',
  'prompt-engineering-guide',
  'social-media-automation',
  
  // Additional posts
  '500k-followers',
  'ai-automation-business',
  'ai-automation-guide-toxic-seo',
  'ai-content-income',
  'ai-influencer-success',
  'ai-influencer-trends',
  'comfyui-comparison',
  'comfyui-success-story',
  'creating-ai-influencers',
  'digital-product-pricing',
  'digital-product-success-story',
  'digital-products-that-sell',
  'essential-n8n-workflows',
  'instagram-ignited-success-stories',
  'instagram-mistakes-lessons',
  'n8n-automation-success',
  'personal-brand-building',
  'sales-page-psychology',
  'viral-carousel-guide',
  'whop-clipping',
  'why-n8n-is-different',
  
  // Latest AI-focused posts
  'claude-4-agentic-coding-revolution',
  'composer-agent-code-llm-full-stack',
  'dart-ai-free-agentic-project-manager',
  'deepagent-update-god-tier-ai-automation',
  'deepseek-janus-pro-7b-multimodal-ai-revolution',
  'deepseek-r1-browser-use-ai-research',
  'deepseek-r1-open-source-ai-revolution',
  'deepseek-r2-open-source-ai-revolution',
  'gemini-2-5-flash-budget-ai-model',
  'gemini-2-pro-bolt-diy-full-stack-revolution',
  'gpt-4-1-vs-claude-sonnet-3-7-comparison',
  'llama-4-open-source-ai-powerhouse',
  'manus-ai-general-automation-agent',
  'qwen-3-alibaba-open-source-llm',
  'roocode-v3-3-cline-alternative',
  'vectorize-all-in-one-rag-platform'
]

// Product/Course slugs
const productPages = [
  'instagram-ignited',
  'digital-products',
  'ai-influencers',
  'comfyui-workflows',
  'n8n-ai-automations'
]

// Tool pages
const toolPages = [
  'algorithm-defense',
  'analytics-dashboard',
  'competitor-backlinks',
  'ctr',
  'defense',
  'guest-posts',
  'link-wheel',
  'parasite',
  'pbn',
  'rank-tracking',
  'social-signals',
  'clusters'
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/digital-products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/story`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Blog posts (AI-focused content gets higher priority)
  const blogPages = blogPosts.map((slug) => {
    const isAIContent = slug.includes('ai-') || slug.includes('claude-') || 
                       slug.includes('gemini-') || slug.includes('deepseek-') || 
                       slug.includes('gpt-') || slug.includes('llama-')
    
    return {
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: isAIContent ? 0.8 : 0.7,
    }
  })

  // Product pages
  const productPageUrls = productPages.map((slug) => ({
    url: `${siteConfig.url}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Tool pages  
  const toolPageUrls = toolPages.map((slug) => ({
    url: `${siteConfig.url}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Get first chunk of massive sitemap (limited to 50,000 for main sitemap)
  const massiveSitemaps = await generateMassiveSitemaps()
  const firstChunk = massiveSitemaps[0] || []

  return [...staticPages, ...blogPages, ...productPageUrls, ...toolPageUrls, ...firstChunk.slice(0, 40000)]
}
