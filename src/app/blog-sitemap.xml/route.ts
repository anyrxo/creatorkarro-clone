// Blog-Specific Sitemap Generator - TOXIC SEO Domination
import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/seo'

export async function GET() {
  // Blog posts from existing sitemap.ts
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
    'social-media-automation',
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

  const blogSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteConfig.url}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${blogPosts
  .map(
    (slug) => {
      const lastModified = new Date().toISOString()
      const isAIContent = slug.includes('ai-') || slug.includes('claude-') || 
                         slug.includes('gemini-') || slug.includes('deepseek-') || 
                         slug.includes('gpt-') || slug.includes('llama-')
      
      return `  <url>
    <loc>${siteConfig.url}/blog/${slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${isAIContent ? '0.8' : '0.7'}</priority>
    <image:image>
      <image:loc>${siteConfig.url}/blog/${slug}/og-image.jpg</image:loc>
      <image:title>${slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}</image:title>
    </image:image>
  </url>`
    }
  )
  .join('\n')}
</urlset>`

  return new NextResponse(blogSitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}