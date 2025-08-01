// TOXIC SEO Edge Worker - Global Content Delivery & Geo-Targeting
// Deploy to Cloudflare Workers, Vercel Edge Functions, or AWS Lambda@Edge

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const geo = request.cf || {}
    const country = geo.country || 'US'
    const city = geo.city || 'New York'
    const region = geo.region || 'NY'
    
    // A/B Testing Edge Logic
    const abTestVariant = getABTestVariant(request)
    
    // Geo-targeted content serving
    const geoContent = await getGeoTargetedContent(country, city, region)
    
    // Real-time personalization
    const userSegment = identifyUserSegment(request)
    
    // SEO-optimized response modifications
    const response = await handleSEOOptimizations(request, url, {
      country,
      city,
      region,
      abTestVariant,
      geoContent,
      userSegment
    })
    
    return response
  }
}

// A/B Testing System
function getABTestVariant(request) {
  const userAgent = request.headers.get('user-agent') || ''
  const ipHash = hashIP(request.headers.get('cf-connecting-ip') || '')
  
  // Stable A/B test assignment based on IP hash
  const variants = ['control', 'variant-a', 'variant-b', 'variant-c']
  const variantIndex = ipHash % variants.length
  
  return {
    name: variants[variantIndex],
    headlines: getVariantHeadlines(variants[variantIndex]),
    cta: getVariantCTA(variants[variantIndex]),
    pricing: getVariantPricing(variants[variantIndex])
  }
}

function getVariantHeadlines(variant) {
  const headlines = {
    'control': 'Master AI Automation & Instagram Growth',
    'variant-a': 'Generate $10K+/Month With AI Automation',
    'variant-b': '127K+ Students Can\'t Be Wrong - Join Now',
    'variant-c': 'From $0 to $100K Using These AI Secrets'
  }
  return headlines[variant] || headlines.control
}

function getVariantCTA(variant) {
  const ctas = {
    'control': 'Start Learning Today',
    'variant-a': 'Get Instant Access Now',
    'variant-b': 'Join 127K+ Winners',
    'variant-c': 'Unlock My AI Empire'
  }
  return ctas[variant] || ctas.control
}

function getVariantPricing(variant) {
  const pricing = {
    'control': { price: '$497', savings: '$200' },
    'variant-a': { price: '$397', savings: '$300' },
    'variant-b': { price: '$597', savings: '$100' },
    'variant-c': { price: '$297', savings: '$400' }
  }
  return pricing[variant] || pricing.control
}

// Geo-targeted content system
async function getGeoTargetedContent(country, city, region) {
  const localizedContent = {
    US: {
      currency: 'USD',
      testimonials: 'american-success-stories',
      examples: 'Made $50K in Dallas using these strategies',
      urgency: 'Limited time - US residents only'
    },
    CA: {
      currency: 'CAD',
      testimonials: 'canadian-success-stories', 
      examples: 'Toronto entrepreneur hits $30K CAD monthly',
      urgency: 'Exclusive Canadian launch pricing'
    },
    GB: {
      currency: 'GBP',
      testimonials: 'uk-success-stories',
      examples: 'London creator generates £25K monthly',
      urgency: 'Brexit-proof income strategies'
    },
    AU: {
      currency: 'AUD',
      testimonials: 'aussie-success-stories',
      examples: 'Sydney student makes $40K AUD monthly',
      urgency: 'Australian exclusive access'
    },
    DE: {
      currency: 'EUR',
      testimonials: 'german-success-stories',
      examples: 'Berlin entrepreneur earns €35K monthly',
      urgency: 'DSGPR-compliant AI strategies'
    }
  }
  
  return localizedContent[country] || localizedContent.US
}

// User segmentation for personalization
function identifyUserSegment(request) {
  const userAgent = request.headers.get('user-agent') || ''
  const referer = request.headers.get('referer') || ''
  
  // Traffic source identification
  if (referer.includes('youtube.com')) return 'youtube-traffic'
  if (referer.includes('instagram.com')) return 'instagram-traffic'
  if (referer.includes('tiktok.com')) return 'tiktok-traffic'
  if (referer.includes('google.com')) return 'google-search'
  if (referer.includes('facebook.com')) return 'facebook-traffic'
  
  // Device-based segmentation
  if (userAgent.includes('Mobile')) return 'mobile-user'
  if (userAgent.includes('iPad')) return 'tablet-user'
  
  return 'desktop-organic'
}

// SEO optimization handler
async function handleSEOOptimizations(request, url, context) {
  const { country, city, region, abTestVariant, geoContent, userSegment } = context
  
  // Handle different URL patterns
  if (url.pathname.startsWith('/programmatic/')) {
    return handleProgrammaticPages(request, url, context)
  }
  
  if (url.pathname.startsWith('/local/')) {
    return handleLocalSEOPages(request, url, context)
  }
  
  // Default response with edge optimizations
  const response = await fetch(request)
  
  if (response.headers.get('content-type')?.includes('text/html')) {
    return await injectEdgeOptimizations(response, context)
  }
  
  return response
}

// Programmatic page handler
async function handleProgrammaticPages(request, url, context) {
  const pathParts = url.pathname.split('/')
  const [, , keyword, location, modifier] = pathParts
  
  // Generate dynamic programmatic content
  const pageContent = generateProgrammaticContent({
    keyword: decodeURIComponent(keyword || 'ai-automation'),
    location: decodeURIComponent(location || context.city),
    modifier: decodeURIComponent(modifier || 'course'),
    country: context.country,
    geoContent: context.geoContent,
    abTestVariant: context.abTestVariant
  })
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${pageContent.title}</title>
  <meta name="description" content="${pageContent.description}">
  <link rel="canonical" href="https://iimagined.ai${url.pathname}">
  <script type="application/ld+json">
    ${JSON.stringify(pageContent.schema)}
  </script>
</head>
<body>
  <main>
    <h1>${pageContent.h1}</h1>
    <p>${pageContent.content}</p>
    <div class="cta">
      <a href="/courses?utm_source=programmatic&utm_campaign=${keyword}-${location}">
        ${context.abTestVariant.cta}
      </a>
    </div>
  </main>
  <script>
    // Track programmatic page performance
    gtag('event', 'programmatic_page_view', {
      keyword: '${keyword}',
      location: '${location}',
      modifier: '${modifier}',
      ab_variant: '${context.abTestVariant.name}'
    });
  </script>
</body>
</html>`
  
  return new Response(html, {
    headers: {
      'content-type': 'text/html',
      'cache-control': 'public, max-age=3600',
      'x-edge-generated': 'true'
    }
  })
}

// Local SEO page handler
async function handleLocalSEOPages(request, url, context) {
  const city = url.searchParams.get('city') || context.city
  const service = url.searchParams.get('service') || 'ai-automation'
  
  const localContent = generateLocalSEOContent({
    city,
    service,
    region: context.region,
    country: context.country,
    geoContent: context.geoContent
  })
  
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${localContent.title}</title>
  <meta name="description" content="${localContent.description}">
  <link rel="canonical" href="https://iimagined.ai/local/${city}">
  <script type="application/ld+json">
    ${JSON.stringify(localContent.localBusinessSchema)}
  </script>
</head>
<body>
  <main>
    <h1>${localContent.h1}</h1>
    <div class="local-content">
      ${localContent.content}
    </div>
    <div class="local-testimonials">
      ${localContent.testimonials}
    </div>
  </main>
</body>
</html>`
  
  return new Response(html, {
    headers: {
      'content-type': 'text/html',
      'cache-control': 'public, max-age=1800'
    }
  })
}

// Inject edge optimizations into existing pages
async function injectEdgeOptimizations(response, context) {
  let html = await response.text()
  
  // Inject personalized content based on geo and user segment
  html = html.replace(
    /<title>(.*?)<\/title>/i,
    `<title>${context.abTestVariant.headlines} - ${context.geoContent.currency}</title>`
  )
  
  // Inject geo-specific testimonials
  html = html.replace(
    /<div class="testimonials">/i,
    `<div class="testimonials geo-${context.country.toLowerCase()}">`
  )
  
  // Inject A/B test tracking
  const trackingScript = `
<script>
  window.edgeContext = {
    country: '${context.country}',
    city: '${context.city}',
    abVariant: '${context.abTestVariant.name}',
    userSegment: '${context.userSegment}'
  };
  
  // Track edge optimizations
  gtag('event', 'edge_optimization', {
    country: '${context.country}',
    ab_variant: '${context.abTestVariant.name}',
    user_segment: '${context.userSegment}'
  });
</script>`
  
  html = html.replace('</head>', `${trackingScript}</head>`)
  
  return new Response(html, {
    headers: {
      ...Object.fromEntries(response.headers.entries()),
      'x-edge-optimized': 'true',
      'x-ab-variant': context.abTestVariant.name,
      'x-geo-country': context.country
    }
  })
}

// Content generation helpers
function generateProgrammaticContent({ keyword, location, modifier, country, geoContent, abTestVariant }) {
  const title = `${capitalizeWords(keyword)} ${capitalizeWords(modifier)} in ${location} | IImagined.ai`
  const description = `Best ${keyword} ${modifier} in ${location}. Join 127K+ students learning AI automation and Instagram growth. ${geoContent.urgency}`
  
  return {
    title,
    description,
    h1: `#1 ${capitalizeWords(keyword)} ${capitalizeWords(modifier)} in ${location}`,
    content: `Discover the most effective ${keyword} strategies specifically designed for ${location} entrepreneurs. Our proven system has helped thousands of ${location} residents build profitable online businesses using AI automation.`,
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `IImagined.ai - ${keyword} ${modifier} ${location}`,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location,
        "addressCountry": country
      }
    }
  }
}

function generateLocalSEOContent({ city, service, region, country, geoContent }) {
  return {
    title: `AI Automation Services in ${city}, ${region} | IImagined.ai`,
    description: `Professional AI automation and Instagram growth services in ${city}. Transform your business with proven strategies. ${geoContent.urgency}`,
    h1: `AI Automation Experts Serving ${city}, ${region}`,
    content: `<p>Looking for AI automation services in ${city}? You've found the right place. Our team specializes in helping ${city}-based entrepreneurs build profitable online businesses.</p>`,
    testimonials: `<div class="testimonial">"Thanks to IImagined.ai, my ${city} business went from struggling to generating $15K monthly!" - Local ${city} Success Story</div>`,
    localBusinessSchema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `IImagined.ai ${city}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city,
        "addressRegion": region,
        "addressCountry": country
      }
    }
  }
}

// Utility functions
function hashIP(ip) {
  let hash = 0
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return Math.abs(hash)
}

function capitalizeWords(str) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
}