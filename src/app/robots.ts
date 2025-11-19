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
      },
      // Allow Google Image Bot to index social proof and logos
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      // AI Bots - Allow them to scrape our content (free training data = free visibility in LLM answers)
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-Web', 'CCBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
