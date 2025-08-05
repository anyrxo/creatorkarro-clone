// ORYANA Image Sitemap - Visual Search Domination
import { siteConfig } from '@/config/seo'

export async function GET() {
  // All images for maximum visual search coverage
  const images = [
    // Course hero images
    {
      url: '/courses/instagram-ignited/hero.webp',
      title: 'Instagram Ignited - Complete Growth Course',
      caption: 'Master Instagram growth with proven strategies used by 127K+ students',
      location: `${siteConfig.url}/instagram-ignited`
    },
    {
      url: '/courses/digital-products/hero.webp',
      title: 'Digital Products Empire - Build & Scale',
      caption: 'Create profitable digital products that generate passive income',
      location: `${siteConfig.url}/digital-products`
    },
    {
      url: '/courses/n8n-ai-automations/hero.webp',
      title: 'N8N AI Automations - Workflow Mastery',
      caption: 'Master N8N automation with AI integration for business efficiency',
      location: `${siteConfig.url}/n8n-ai-automations`
    },
    {
      url: '/courses/ai-influencers/hero.webp',
      title: 'AI Influencers - Create Virtual Personalities',
      caption: 'Build AI influencers that generate content and income 24/7',
      location: `${siteConfig.url}/ai-influencers`
    },
    {
      url: '/courses/comfyui-workflows/hero.webp',
      title: 'ComfyUI Workflows - Advanced AI Image Generation',
      caption: 'Master ComfyUI for professional AI image generation workflows',
      location: `${siteConfig.url}/comfyui-workflows`
    },
    
    // Blog images
    {
      url: '/blog/claude-4-agentic-coding/hero.webp',
      title: 'Claude 4 Agentic Coding Revolution',
      caption: 'How Claude 4 is revolutionizing development with agentic coding',
      location: `${siteConfig.url}/blog/claude-4-agentic-coding-revolution`
    },
    {
      url: '/blog/deepseek-r1-ai/hero.webp',
      title: 'DeepSeek R1 Open Source AI Revolution',
      caption: 'DeepSeek R1 changing AI landscape with open-source intelligence',
      location: `${siteConfig.url}/blog/deepseek-r1-open-source-ai-revolution`
    },
    {
      url: '/blog/instagram-growth-2025/hero.webp',
      title: 'Instagram Growth 2025 Ultimate Guide',
      caption: 'Master Instagram growth with latest 2025 strategies for 100K followers',
      location: `${siteConfig.url}/blog/instagram-growth-2025`
    },
    {
      url: '/blog/gemini-2-pro-bolt-diy/hero.webp',
      title: 'Gemini 2 Pro + Bolt.DIY Full Stack Revolution',
      caption: 'Build production-ready applications with Gemini 2 Pro and Bolt.DIY',
      location: `${siteConfig.url}/blog/gemini-2-pro-bolt-diy-full-stack-revolution`
    },
    {
      url: '/blog/ai-automation-business/hero.webp',
      title: 'AI Automation Business - $10K/Month Blueprint',
      caption: 'Step-by-step guide to building profitable AI automation business',
      location: `${siteConfig.url}/blog/ai-automation-business`
    },
    
    // Landing page images
    {
      url: '/images/anyro-profile.webp',
      title: 'Anyro - AI Automation Expert & Instagram Growth Strategist',
      caption: 'Leading expert in AI automation and Instagram growth with 127K+ students',
      location: `${siteConfig.url}/about`
    },
    {
      url: '/images/testimonials/sarah-johnson.webp',
      title: 'Sarah Johnson - Success Story',
      caption: 'Generated $50K in first 6 months using Instagram Ignited strategies',
      location: `${siteConfig.url}/testimonials`
    },
    {
      url: '/images/testimonials/mike-chen.webp',
      title: 'Mike Chen - AI Automation Success',
      caption: 'Built 7-figure automation business using IImagined.ai courses',
      location: `${siteConfig.url}/testimonials`
    },
    {
      url: '/images/testimonials/emma-davis.webp',
      title: 'Emma Davis - Digital Products Success',
      caption: 'Scaled digital products to $25K/month using proven frameworks',
      location: `${siteConfig.url}/testimonials`
    },
    
    // Logo and branding
    {
      url: '/logo.webp',
      title: 'IImagined.ai Logo',
      caption: 'IImagined.ai - Leading AI automation and Instagram growth education platform',
      location: `${siteConfig.url}`
    },
    {
      url: '/icon-512.webp',
      title: 'IImagined.ai Icon',
      caption: 'IImagined.ai brand icon for AI automation and digital education',
      location: `${siteConfig.url}`
    },
    
    // Social proof images
    {
      url: '/images/social-proof/instagram-growth-results.webp',
      title: 'Instagram Growth Results - 127K+ Students',
      caption: 'Real results from students who mastered Instagram growth strategies',
      location: `${siteConfig.url}/results`
    },
    {
      url: '/images/social-proof/ai-automation-revenue.webp',
      title: 'AI Automation Revenue Results',
      caption: 'Students generating consistent revenue through AI automation',
      location: `${siteConfig.url}/results`
    },
    {
      url: '/images/social-proof/digital-products-success.webp',
      title: 'Digital Products Success Stories',
      caption: 'Students building profitable digital product businesses',
      location: `${siteConfig.url}/results`
    },
    
    // Geographic landing page images
    {
      url: '/images/geo/new-york-skyline.webp',
      title: 'AI Automation Training New York',
      caption: 'Professional AI automation and Instagram growth training in New York',
      location: `${siteConfig.url}/best-ai-automation-course-new-york`
    },
    {
      url: '/images/geo/los-angeles-tech.webp',
      title: 'Instagram Growth Course Los Angeles',
      caption: 'Master Instagram growth strategies with Los Angeles-based training',
      location: `${siteConfig.url}/best-instagram-growth-training-los-angeles`
    },
    {
      url: '/images/geo/chicago-business.webp',
      title: 'Digital Products Training Chicago',
      caption: 'Build profitable digital products with Chicago-focused business training',
      location: `${siteConfig.url}/best-digital-products-course-chicago`
    }
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(img => `  <url>
    <loc>${img.location}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${siteConfig.url}${img.url}</image:loc>
      <image:title><![CDATA[${img.title}]]></image:title>
      <image:caption><![CDATA[${img.caption}]]></image:caption>
      <image:geo_location>United States</image:geo_location>
      <image:license>${siteConfig.url}/license</image:license>
    </image:image>
  </url>`).join('\n')}
</urlset>`

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=7200, s-maxage=7200',
      'X-Image-Sitemap': 'active',
      'X-Visual-SEO': 'maximum'
    }
  })
}