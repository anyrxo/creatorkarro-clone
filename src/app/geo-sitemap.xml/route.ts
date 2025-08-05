// Geo-Targeted Sitemap Generator - TOXIC SEO Domination
import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/seo'

export async function GET() {
  // Major cities for geo-targeting
  const cities = [
    'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix',
    'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose',
    'austin', 'jacksonville', 'fort-worth', 'columbus', 'charlotte',
    'san-francisco', 'indianapolis', 'seattle', 'denver', 'washington',
    'boston', 'el-paso', 'detroit', 'nashville', 'portland',
    'memphis', 'oklahoma-city', 'las-vegas', 'louisville', 'baltimore',
    'milwaukee', 'albuquerque', 'tucson', 'fresno', 'mesa',
    'sacramento', 'atlanta', 'kansas-city', 'colorado-springs', 'miami',
    'raleigh', 'omaha', 'long-beach', 'virginia-beach', 'oakland',
    'minneapolis', 'tulsa', 'arlington', 'tampa', 'new-orleans'
  ]

  const services = [
    'ai-automation-course',
    'instagram-growth-training',
    'digital-products-course',
    'n8n-automation-training',
    'comfyui-workflows-course',
    'social-media-marketing-course',
    'passive-income-course',
    'content-creation-course',
    'ai-influencer-training',
    'youtube-automation-course'
  ]

  const geoUrls: Array<{
    url: string
    lastmod: string
    changefreq: string
    priority: string
  }> = []

  // Generate city + service combinations
  cities.forEach(city => {
    services.forEach(service => {
      geoUrls.push({
        url: `${siteConfig.url}/${service}-${city}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: '0.6'
      })
    })
  })

  // Generate state-level pages
  const states = [
    'california', 'texas', 'florida', 'new-york', 'pennsylvania',
    'illinois', 'ohio', 'georgia', 'north-carolina', 'michigan',
    'new-jersey', 'virginia', 'washington', 'arizona', 'massachusetts',
    'tennessee', 'indiana', 'missouri', 'maryland', 'wisconsin',
    'colorado', 'minnesota', 'south-carolina', 'alabama', 'louisiana',
    'kentucky', 'oregon', 'oklahoma', 'connecticut', 'utah'
  ]

  states.forEach(state => {
    services.forEach(service => {
      geoUrls.push({
        url: `${siteConfig.url}/${service}-${state}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: '0.5'
      })
    })
  })

  const geoSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${geoUrls
  .slice(0, 45000) // Limit to 45k URLs to stay under sitemap limits
  .map(
    (geoUrl) => `  <url>
    <loc>${geoUrl.url}</loc>
    <lastmod>${geoUrl.lastmod}</lastmod>
    <changefreq>${geoUrl.changefreq}</changefreq>
    <priority>${geoUrl.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new NextResponse(geoSitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  })
}