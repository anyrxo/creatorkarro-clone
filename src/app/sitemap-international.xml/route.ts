// International Sitemap Generator - Multi-country SEO
import { NextResponse } from 'next/server'
import { INTERNATIONAL_MARKETS, generateInternationalSitemap } from '@/lib/international-seo'




export async function GET() {
  const baseUrls = [
    '/',
    '/blog',
    '/digital-products',
    '/resources',
    '/story',
    '/testimonials',
    '/contact',
    '/faq',
    '/instagram-ignited',
    '/ai-influencers',
    '/comfyui-workflows',
    '/n8n-ai-automations'
  ]
  
  // High-priority AI blog posts for international SEO
  const priorityBlogPosts = [
    '/blog/claude-4-agentic-coding-revolution',
    '/blog/gemini-2-pro-bolt-diy-full-stack-revolution',
    '/blog/deepseek-r1-open-source-ai-revolution',
    '/blog/gpt-4-1-vs-claude-sonnet-3-7-comparison',
    '/blog/llama-4-open-source-ai-powerhouse',
    '/blog/ai-automation-guide',
    '/blog/instagram-growth-2025',
    '/blog/digital-products-empire',
    '/blog/passive-income-blueprint',
    '/blog/monetize-with-ai'
  ]
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`

  // Generate URLs for all countries and languages (base pages + priority blog posts)
  const allUrls = [...baseUrls, ...priorityBlogPosts]
  
  allUrls.forEach(path => {
    Object.entries(INTERNATIONAL_MARKETS).forEach(([countryCode, config]) => {
      const url = countryCode === 'US' 
        ? `https://iimagined.ai${path}`
        : `https://iimagined.ai/${countryCode.toLowerCase()}${path}`
      
      // Add main URL
      sitemap += `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>`
      
      // Add hreflang alternates for this URL
      Object.entries(INTERNATIONAL_MARKETS).forEach(([altCountryCode, altConfig]) => {
        const altUrl = altCountryCode === 'US' 
          ? `https://iimagined.ai${path}`
          : `https://iimagined.ai/${altCountryCode.toLowerCase()}${path}`
        
        sitemap += `
    <xhtml:link rel="alternate" hreflang="${altConfig.hreflang}" href="${altUrl}" />`
      })
      
      // Add x-default
      sitemap += `
    <xhtml:link rel="alternate" hreflang="x-default" href="https://iimagined.ai${path}" />
  </url>`
    })
  })
  
  // Add programmatic international pages (AI-focused keywords)
  const keywords = [
    'ai-automation', 'claude-4-training', 'gemini-2-course', 'gpt-4-mastery',
    'ai-influencer-creation', 'deepseek-r1-guide', 'llama-4-training',
    'ai-content-generation', 'chatgpt-business', 'ai-agent-development',
    'multimodal-ai-training', 'ai-workflow-automation', 'ai-model-comparison',
    'instagram-growth', 'digital-marketing', 'passive-income',
    'social-media-marketing', 'content-creation', 'youtube-automation'
  ]
  
  const cities = [
    'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 'philadelphia',
    'san-antonio', 'san-diego', 'dallas', 'san-jose', 'austin', 'jacksonville',
    'toronto', 'vancouver', 'montreal', 'calgary', 'ottawa', 'edmonton',
    'london', 'birmingham', 'manchester', 'glasgow', 'liverpool', 'leeds',
    'sydney', 'melbourne', 'brisbane', 'perth', 'adelaide', 'gold-coast',
    'berlin', 'hamburg', 'munich', 'cologne', 'frankfurt', 'stuttgart',
    'paris', 'marseille', 'lyon', 'toulouse', 'nice', 'nantes',
    'madrid', 'barcelona', 'valencia', 'seville', 'zaragoza', 'bilbao',
    'rome', 'milan', 'naples', 'turin', 'palermo', 'genoa',
    'sao-paulo', 'rio-janeiro', 'brasilia', 'salvador', 'fortaleza', 'belo-horizonte',
    'mexico-city', 'guadalajara', 'monterrey', 'puebla', 'tijuana', 'leon',
    'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata',
    'tokyo', 'osaka', 'nagoya', 'sapporo', 'fukuoka', 'kobe',
    'singapore', 'kuala-lumpur', 'jakarta', 'bangkok', 'manila', 'hanoi'
  ]
  
  const modifiers = [
    'course', 'training', 'bootcamp', 'masterclass', 'workshop', 'certification',
    'program', 'academy', 'school', 'university', 'tutorial', 'guide'
  ]
  
  // Generate programmatic URLs (sample - limit to prevent sitemap being too large)
  keywords.slice(0, 5).forEach(keyword => {
    cities.slice(0, 20).forEach(city => {
      modifiers.slice(0, 3).forEach(modifier => {
        const programmaticUrl = `https://iimagined.ai/programmatic/${keyword}/${city}/${modifier}`
        
        sitemap += `
  <url>
    <loc>${programmaticUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
      })
    })
  })
  
  sitemap += `
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200'
    }
  })
}