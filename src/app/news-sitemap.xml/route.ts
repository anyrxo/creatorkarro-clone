import { generateNewsSitemap } from '@/lib/sitemap-generator'

export async function GET() {
  const newsUrls = await generateNewsSitemap()
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsUrls.map(url => `
  <url>
    <loc>${url.url}</loc>
    <lastmod>${url.lastModified.toISOString()}</lastmod>
    <changefreq>${url.changeFrequency}</changefreq>
    <priority>${url.priority}</priority>
    <news:news>
      <news:publication>
        <news:name>IImagined.ai</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${url.lastModified.toISOString()}</news:publication_date>
      <news:title>AI Automation Breakthrough ${url.lastModified.getTime()}</news:title>
    </news:news>
  </url>
  `).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}