import { NextRequest, NextResponse } from 'next/server'
import { submitUrlToIndexNow, submitBulkUrlsToIndexNow } from '@/lib/indexnow'

/**
 * IndexNow API Route
 * POST /api/indexnow
 *
 * Submit URLs to IndexNow for instant search engine indexing
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { url, urls } = body

    // Validate request
    if (!url && (!urls || !Array.isArray(urls))) {
      return NextResponse.json(
        { error: 'Either "url" (string) or "urls" (array) is required' },
        { status: 400 }
      )
    }

    // Submit single URL
    if (url) {
      const result = await submitUrlToIndexNow(url)
      return NextResponse.json(result, {
        status: result.success ? 200 : 500
      })
    }

    // Submit bulk URLs
    if (urls && urls.length > 0) {
      // IndexNow recommends max 10,000 URLs per request
      if (urls.length > 10000) {
        return NextResponse.json(
          { error: 'Maximum 10,000 URLs per request' },
          { status: 400 }
        )
      }

      const result = await submitBulkUrlsToIndexNow(urls)
      return NextResponse.json(result, {
        status: result.success ? 200 : 500
      })
    }

    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )

  } catch (error) {
    return NextResponse.json(
      { error: `Failed to process IndexNow request: ${error}` },
      { status: 500 }
    )
  }
}

/**
 * GET /api/indexnow
 *
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    service: 'IndexNow',
    status: 'active',
    key: 'f99b84c777d0620e877241daaa1d8d48',
    keyLocation: 'https://creatorkarro.com/f99b84c777d0620e877241daaa1d8d48.txt',
    documentation: 'https://www.indexnow.org/documentation',
  })
}
