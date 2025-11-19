import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/seo'
import { getAllBlogSlugs } from '@/lib/sitemap-generator'

// Product/Course slugs
const productPages = [
  'instagram-ignited',
  'ai-influencers',
  'digital-products',
  'ai-automations'
]

// Tool pages (Calculators, etc.)
const toolPages = [
  // Main calculators (embedded in pages now, but if they have standalone routes, add here)
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/story`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9, // High priority for authority
    },
    {
      url: `${siteConfig.url}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/testimonials`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8, // Social proof is key
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${siteConfig.url}/refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Get all blog posts dynamically by scanning the blog directory
  const blogPosts = getAllBlogSlugs()

  // Blog posts (AI-focused content gets higher priority)
  const blogPages = blogPosts.map((slug) => {
    const isAIContent = slug.includes('ai') || slug.includes('claude') || 
                       slug.includes('gpt') || slug.includes('automation') ||
                       slug.includes('deepseek') || slug.includes('gemini')

    return {
      url: `${siteConfig.url}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: isAIContent ? 0.8 : 0.6,
    }
  })

  // Product pages (High priority)
  const productPageUrls = productPages.map((slug) => ({
    url: `${siteConfig.url}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  console.log(`✅ Sitemap generated with ${staticPages.length + blogPages.length + productPageUrls.length} pages`)

  return [...staticPages, ...productPageUrls, ...blogPages]
}
