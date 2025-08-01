import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/seo'
import { generateMassiveSitemaps } from '@/lib/sitemap-generator'

// Blog posts slugs (would typically come from a database or CMS)
const blogPosts = [
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
  'social-media-automation'
]

// Course slugs
const courses = [
  'instagram-ignited',
  'digital-products',
  'ai-automation-agency'
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
      url: `${siteConfig.url}/courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Blog posts
  const blogPages = blogPosts.map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Course pages
  const coursePages = courses.map((slug) => ({
    url: `${siteConfig.url}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Get first chunk of massive sitemap (limited to 50,000 for main sitemap)
  const massiveSitemaps = await generateMassiveSitemaps()
  const firstChunk = massiveSitemaps[0] || []

  return [...staticPages, ...blogPages, ...coursePages, ...firstChunk.slice(0, 45000)]
}
