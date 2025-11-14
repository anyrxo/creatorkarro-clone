// MASSIVE Geo-Targeted Sitemap Generator - Million+ Page SEO Empire
import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/seo'


export async function GET() {
  // Priority countries with extensive city coverage
  const geoData = {
    // United States - Priority #1 (50 major cities)
    'us': [
      'new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san-antonio', 
      'san-diego', 'dallas', 'san-jose', 'austin', 'jacksonville', 'fort-worth', 'columbus', 
      'charlotte', 'san-francisco', 'indianapolis', 'seattle', 'denver', 'washington', 'boston', 
      'el-paso', 'detroit', 'nashville', 'portland', 'memphis', 'oklahoma-city', 'las-vegas', 
      'louisville', 'baltimore', 'milwaukee', 'albuquerque', 'tucson', 'fresno', 'mesa', 
      'sacramento', 'atlanta', 'kansas-city', 'colorado-springs', 'miami', 'raleigh', 'omaha', 
      'long-beach', 'virginia-beach', 'oakland', 'minneapolis', 'tulsa', 'arlington', 'tampa', 'new-orleans'
    ],
    
    // Australia - Priority #2 (30 major cities)
    'au': [
      'sydney', 'melbourne', 'brisbane', 'perth', 'adelaide', 'gold-coast', 'canberra', 
      'newcastle', 'wollongong', 'geelong', 'hobart', 'towsville', 'cairns', 'darwin', 
      'toowoomba', 'ballarat', 'bendigo', 'albury-wodonga', 'launceston', 'mackay', 
      'rockhampton', 'bunbury', 'bundaberg', 'coffs-harbour', 'wagga-wagga', 'hervey-bay', 
      'port-macquarie', 'tamworth', 'orange', 'dubbo'
    ],
    
    // United Kingdom - Priority #3 (35 major cities)
    'gb': [
      'london', 'birmingham', 'manchester', 'glasgow', 'liverpool', 'leeds', 'sheffield', 
      'edinburgh', 'bristol', 'cardiff', 'leicester', 'coventry', 'bradford', 'belfast', 
      'nottingham', 'kingston-upon-hull', 'newcastle-upon-tyne', 'stoke-on-trent', 'wolverhampton', 
      'plymouth', 'derby', 'swansea', 'southampton', 'salford', 'aberdeen', 'westminster', 
      'portsmouth', 'york', 'peterborough', 'dundee', 'lancaster', 'oxford', 'newport', 'preston', 'st-albans'
    ],
    
    // Singapore - Priority #4 (25 districts/areas)
    'sg': [
      'marina-bay', 'orchard', 'raffles-place', 'clarke-quay', 'sentosa', 'bugis', 'chinatown', 
      'little-india', 'kampong-glam', 'tanjong-pagar', 'boat-quay', 'newton', 'dhoby-ghaut', 
      'city-hall', 'harbourfront', 'lavender', 'outram-park', 'tiong-bahru', 'telok-ayer', 
      'cecil-street', 'robinson-road', 'shenton-way', 'capitol-hill', 'fort-canning', 'pearl-hill'
    ],
    
    // South Korea - Priority #5 (25 major cities)
    'kr': [
      'seoul', 'busan', 'incheon', 'daegu', 'daejeon', 'gwangju', 'suwon', 'ulsan', 'changwon', 
      'goyang', 'yongin', 'seongnam', 'bucheon', 'cheongju', 'ansan', 'jeonju', 'cheonan', 
      'namyangju', 'pohang', 'uijeongbu', 'gimhae', 'pyeongtaek', 'siheung', 'paju', 'gimpo'
    ],
    
    // Japan - Priority #6 (25 major cities)  
    'jp': [
      'tokyo', 'osaka', 'yokohama', 'nagoya', 'sapporo', 'fukuoka', 'kobe', 'kawasaki', 'kyoto', 
      'saitama', 'hiroshima', 'sendai', 'kitakyushu', 'chiba', 'sakai', 'niigata', 'hamamatsu', 
      'shizuoka', 'sagamihara', 'okayama', 'kumamoto', 'kagoshima', 'hachioji', 'funabashi', 'nara'
    ]
  }

  // Comprehensive service keywords (expanded list)
  const services = [
    // Core services
    'ai-automation-course', 'instagram-growth-training', 'digital-products-course', 
    'n8n-automation-training', 'comfyui-workflows-course', 'social-media-marketing-course',
    'passive-income-course', 'content-creation-course', 'ai-influencer-training', 'youtube-automation-course',
    
    // Extended services for more coverage
    'chatgpt-business-course', 'ai-agent-development-course', 'workflow-automation-training',
    'tiktok-growth-course', 'affiliate-marketing-course', 'dropshipping-course',
    'email-marketing-course', 'seo-training-course', 'facebook-ads-course', 'google-ads-course',
    'web-design-course', 'app-development-course', 'saas-business-course', 'crypto-trading-course',
    'forex-trading-course', 'stock-trading-course', 'real-estate-course', 'coaching-business-course'
  ]

  // Quality modifiers for variation
  const modifiers = [
    'best', 'top', 'professional', 'advanced', 'expert', 'certified', 
    'premium', 'ultimate', 'complete', 'comprehensive', 'affordable', 'intensive'
  ]

  const geoUrls: Array<{
    url: string
    lastmod: string
    changefreq: string
    priority: string
  }> = []

  // Generate MASSIVE geo combinations using proper /geo/[country]/[modifier]/[service]/[city] structure
  Object.entries(geoData).forEach(([countryCode, cities], countryIndex) => {
    const countryPriority = countryIndex < 3 ? '0.8' : '0.7' // Higher priority for top 3 countries
    
    cities.forEach(city => {
      services.forEach(service => {
        modifiers.forEach(modifier => {
          geoUrls.push({
            url: `${siteConfig.url}/geo/${countryCode}/${modifier}/${service}/${city}`,
            lastmod: new Date().toISOString(),
            changefreq: 'monthly', 
            priority: countryPriority
          })
        })
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