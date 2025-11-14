import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/seo'
import { generateMassiveSitemaps, getAllBlogSlugs } from '@/lib/sitemap-generator'

// Product/Course slugs
const productPages = [
  'ai-influencers',
  'digital-products',
  'ai-automations',
  'instagram-ignited'
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

  // Get all blog posts dynamically by scanning the blog directory
  const blogPosts = getAllBlogSlugs()

  // Blog posts (AI-focused content gets higher priority)
  const blogPages = blogPosts.map((slug) => {
    const isAIContent = slug.includes('ai-') || slug.includes('claude-') ||
                       slug.includes('gemini-') || slug.includes('deepseek-') ||
                       slug.includes('gpt-') || slug.includes('llama-') ||
                       slug.includes('comfyui') || slug.includes('n8n-') ||
                       slug.includes('automation')

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

  // REMOVED: Spammy massive sitemaps that pollute the sitemap with non-existent pages
  // Focus on REAL pages that actually exist

  console.log(`✅ Sitemap generated with ${staticPages.length + blogPages.length + productPageUrls.length + toolPageUrls.length} real pages`)
  console.log(`📝 Blog posts included: ${blogPages.length}`)

  return [...staticPages, ...blogPages, ...productPageUrls, ...toolPageUrls]
}
