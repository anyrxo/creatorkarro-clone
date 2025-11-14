import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/seo'




export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/login/',
          '/order/track/',
          '/security-dashboard/',
        ],
        crawlDelay: 1,
      },
      // AI bots - prioritize AI content
      {
        userAgent: 'GPTBot',
        allow: [
          '/',
          '/blog/ai-*',
          '/blog/claude-*',
          '/blog/gemini-*', 
          '/blog/deepseek-*',
          '/blog/gpt-*',
          '/blog/llama-*',
          '/blog/manus-*',
          '/blog/qwen-*',
          '/ai-influencers/',
          '/n8n-ai-automations/',
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: [
          '/',
          '/blog/ai-*',
          '/blog/claude-*',
          '/blog/gemini-*',
          '/blog/deepseek-*', 
          '/blog/gpt-*',
          '/blog/llama-*',
          '/ai-influencers/',
          '/n8n-ai-automations/',
        ],
      },
      // Claude AI
      {
        userAgent: 'Claude-Web',
        allow: [
          '/',
          '/blog/claude-*',
          '/blog/ai-*',
          '/ai-influencers/',
          '/n8n-ai-automations/',
        ],
      },
      // Google bots - full access with preferences
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: [
          '/',
          '/social-icons/',
          '/partners/',
          '/testimonials/',
        ],
      },
      // Social media bots
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
      },
      // SEO tools
      {
        userAgent: 'AhrefsBot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'SemrushBot',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}