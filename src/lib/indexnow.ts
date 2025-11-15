/**
 * IndexNow Integration
 * Instantly notify search engines of URL changes
 */

const INDEXNOW_KEY = 'f99b84c777d0620e877241daaa1d8d48'
const SITE_URL = 'https://creatorkarro.com'
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`

// Search engines that support IndexNow
const SEARCH_ENGINES = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
]

interface IndexNowResponse {
  success: boolean
  message: string
  statusCode?: number
}

/**
 * Submit a single URL to IndexNow
 */
export async function submitUrlToIndexNow(url: string): Promise<IndexNowResponse> {
  try {
    const fullUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`

    // Use api.indexnow.org (notifies all participating search engines)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'creatorkarro.com',
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: [fullUrl],
      }),
    })

    if (response.status === 200) {
      return {
        success: true,
        message: `Successfully submitted ${fullUrl} to IndexNow`,
        statusCode: 200,
      }
    } else if (response.status === 202) {
      return {
        success: true,
        message: `URL accepted for processing: ${fullUrl}`,
        statusCode: 202,
      }
    } else {
      return {
        success: false,
        message: `Failed to submit URL: ${response.status} ${response.statusText}`,
        statusCode: response.status,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: `Error submitting URL to IndexNow: ${error}`,
    }
  }
}

/**
 * Submit multiple URLs in bulk to IndexNow
 */
export async function submitBulkUrlsToIndexNow(urls: string[]): Promise<IndexNowResponse> {
  try {
    const fullUrls = urls.map(url =>
      url.startsWith('http') ? url : `${SITE_URL}${url}`
    )

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'creatorkarro.com',
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: fullUrls,
      }),
    })

    if (response.status === 200 || response.status === 202) {
      return {
        success: true,
        message: `Successfully submitted ${fullUrls.length} URLs to IndexNow`,
        statusCode: response.status,
      }
    } else {
      return {
        success: false,
        message: `Failed to submit URLs: ${response.status} ${response.statusText}`,
        statusCode: response.status,
      }
    }
  } catch (error) {
    return {
      success: false,
      message: `Error submitting bulk URLs to IndexNow: ${error}`,
    }
  }
}

/**
 * Submit all blog post URLs to IndexNow
 */
export async function submitAllBlogPosts(): Promise<IndexNowResponse> {
  // You can dynamically generate this list or maintain it manually
  const blogUrls = [
    '/blog/scale-content-creation',
    '/blog/n8n-instagram-automation-complete-growth-workflow',
    '/blog/create-faceless-youtube-channel',
    '/blog/viral-carousel-guide',
    '/blog/gpt-4-1-vs-claude-sonnet-3-7-comparison',
    '/blog/personal-brand-building',
    '/blog/alpha-evolve-ai-business-empire',
    '/blog/youtube-shorts-strategy',
    '/blog/best-ai-content-creation-tools-virtual-influencers-2025',
    '/blog/monetize-with-ai',
    '/blog/500k-followers',
    '/blog/ai-influencer-success',
    '/blog/ai-content-income',
    // Add more blog URLs as they're completed
  ]

  return submitBulkUrlsToIndexNow(blogUrls)
}
