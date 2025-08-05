// Dynamic Sitemap Index Generator - Part of TOXIC SEO Strategy
import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/seo'



// Required for static export
export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  const sitemaps = [
    {
      url: `${siteConfig.url}/sitemap.xml`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.url}/blog-sitemap.xml`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.url}/pages-sitemap.xml`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.url}/products-sitemap.xml`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${siteConfig.url}/geo-sitemap.xml`,
      lastModified: new Date().toISOString(),
    }
  ]

  const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${sitemap.url}</loc>
    <lastmod>${sitemap.lastModified}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`

  return new NextResponse(sitemapIndexXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}