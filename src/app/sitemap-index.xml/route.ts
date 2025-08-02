import { siteConfig } from '@/config/seo'

export async function GET() {
  const sitemaps = [
    {
      url: `${siteConfig.url}/sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/news-sitemap.xml`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/sitemap-international.xml`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/rss.xml`,
      lastModified: new Date(),
    }
  ]
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps.map(sitemap => `
  <sitemap>
    <loc>${sitemap.url}</loc>
    <lastmod>${sitemap.lastModified.toISOString()}</lastmod>
  </sitemap>
  `).join('')}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=7200' // 2 hours cache
    }
  })
}