import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  if (secret !== process.env.INDEXING_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const baseUrl = 'https://iimagined.ai'
    
    // High-priority URLs for immediate indexing
    const priorityUrls = [
      `${baseUrl}/`,
      `${baseUrl}/n8n-ai-automations`,
      `${baseUrl}/instagram-ignited`,
      `${baseUrl}/comfyui-workflows`,
      `${baseUrl}/ai-influencers`,
      `${baseUrl}/digital-products`,
      `${baseUrl}/blog/ai-automation-guide`,
      `${baseUrl}/blog/robotic-process-automation`,
      `${baseUrl}/blog/ai-seo-content-optimization`,
      `${baseUrl}/blog/instagram-growth-2025`,
      `${baseUrl}/blog/n8n-beginners-guide`
    ]

    const results = []

    // Submit sitemap to Google (if Google Search Console API is configured)
    try {
      const sitemapUrl = `${baseUrl}/sitemap.xml`
      
      // In production, you would use Google Search Console API here
      // For now, we'll log the URLs that should be submitted
      console.log('Submitting sitemap to Google:', sitemapUrl)
      console.log('Priority URLs for indexing:', priorityUrls)
      
      results.push({
        action: 'sitemap_submitted',
        url: sitemapUrl,
        status: 'logged'
      })

      // Submit individual URLs for instant indexing
      for (const url of priorityUrls) {
        console.log('Requesting indexing for:', url)
        results.push({
          action: 'url_submitted',
          url: url,
          status: 'logged'
        })
      }

    } catch (error) {
      console.error('Error submitting to Google:', error)
      results.push({
        action: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      })
    }

    return NextResponse.json({
      message: 'Indexing requests processed',
      results: results,
      timestamp: new Date().toISOString(),
      note: 'In production, configure Google Search Console API for actual submission'
    })

  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Error processing indexing requests', 
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Google indexing endpoint active',
    endpoints: {
      submit: 'POST with ?secret=YOUR_SECRET',
      sitemap: 'https://iimagined.ai/sitemap.xml',
      robots: 'https://iimagined.ai/robots.txt'
    },
    timestamp: new Date().toISOString()
  })
}