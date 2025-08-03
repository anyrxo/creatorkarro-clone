import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://iimagined.ai'
  const currentDate = new Date().toISOString()

  const staticPages = [
    {
      url: '/',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: '/blog',
      lastModified: currentDate,
      changeFrequency: 'daily', 
      priority: 0.9
    },
    {
      url: '/story',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ]

  const coursePages = [
    {
      url: '/n8n-ai-automations',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: '/instagram-ignited',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: '/comfyui-workflows',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: '/ai-influencers',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0
    },
    {
      url: '/digital-products',
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0
    }
  ]

  const highPriorityBlogs = [
    {
      url: '/blog/ai-automation-guide',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: '/blog/robotic-process-automation',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: '/blog/ai-seo-content-optimization',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: '/blog/instagram-growth-2025',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    },
    {
      url: '/blog/n8n-beginners-guide',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9
    }
  ]

  const additionalBlogs = [
    '/blog/database-automation-systems',
    '/blog/voice-ai-automation', 
    '/blog/machine-learning-automation',
    '/blog/windsurf-ai-coding',
    '/blog/api-automation-integration',
    '/blog/cursor-ai-coding',
    '/blog/saas-automation-systems',
    '/blog/iot-automation-systems',
    '/blog/cloud-automation-infrastructure',
    '/blog/no-code-automation-tools',
    '/blog/security-automation-systems',
    '/blog/ai-agents-business-automation',
    '/blog/devops-automation-pipeline',
    '/blog/mobile-app-automation',
    '/blog/claude-4-vs-gpt-4-comparison',
    '/blog/chatgpt-automation-workflows',
    '/blog/workflow-automation-guide'
  ].map(url => ({
    url,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8
  }))

  const allPages = [...staticPages, ...coursePages, ...highPriorityBlogs, ...additionalBlogs]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}