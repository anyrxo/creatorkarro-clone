/**
 * Submit all blog posts to IndexNow
 * Run this script after deploying new content
 *
 * Usage: npx ts-node scripts/submit-to-indexnow.ts
 */

const INDEXNOW_KEY = 'f99b84c777d0620e877241daaa1d8d48'
const SITE_URL = 'https://creatorkarro.com'
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`

async function submitToIndexNow(urls: string[]) {
  try {
    console.log(`📡 Submitting ${urls.length} URLs to IndexNow...`)

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'creatorkarro.com',
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    })

    if (response.status === 200 || response.status === 202) {
      console.log(`✅ Successfully submitted ${urls.length} URLs to IndexNow`)
      console.log(`   Status: ${response.status} ${response.statusText}`)
      return true
    } else {
      console.error(`❌ Failed to submit URLs: ${response.status} ${response.statusText}`)
      const text = await response.text()
      console.error(`   Response: ${text}`)
      return false
    }
  } catch (error) {
    console.error(`❌ Error submitting to IndexNow:`, error)
    return false
  }
}

// All completed blog posts (2000+ lines)
const completedBlogPosts = [
  `${SITE_URL}/blog/personal-brand-building`,
  `${SITE_URL}/blog/alpha-evolve-ai-business-empire`,
  `${SITE_URL}/blog/youtube-shorts-strategy`,
  `${SITE_URL}/blog/best-ai-content-creation-tools-virtual-influencers-2025`,
  `${SITE_URL}/blog/monetize-with-ai`,
  `${SITE_URL}/blog/500k-followers`,
  `${SITE_URL}/blog/scale-content-creation`,
  `${SITE_URL}/blog/n8n-instagram-automation-complete-growth-workflow`,
  `${SITE_URL}/blog/create-faceless-youtube-channel`,
  `${SITE_URL}/blog/viral-carousel-guide`,
  `${SITE_URL}/blog/ai-influencer-success`,
  `${SITE_URL}/blog/gpt-4-1-vs-claude-sonnet-3-7-comparison`,
  `${SITE_URL}/blog/ai-content-income`,
]

// Important pages
const mainPages = [
  `${SITE_URL}/`,
  `${SITE_URL}/blog`,
  `${SITE_URL}/instagram-ignited`,
  `${SITE_URL}/n8n-ai-automations`,
  `${SITE_URL}/digital-products`,
]

async function main() {
  console.log('🚀 Starting IndexNow submission...\n')

  // Submit in batches of 100 (recommended best practice)
  const allUrls = [...mainPages, ...completedBlogPosts]
  const batchSize = 100

  for (let i = 0; i < allUrls.length; i += batchSize) {
    const batch = allUrls.slice(i, i + batchSize)
    console.log(`\n📦 Batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allUrls.length / batchSize)}`)

    const success = await submitToIndexNow(batch)

    if (!success) {
      console.log('⚠️  Continuing with next batch...')
    }

    // Wait 1 second between batches to avoid rate limiting
    if (i + batchSize < allUrls.length) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  console.log('\n✨ IndexNow submission complete!')
  console.log(`\n📊 Summary:`)
  console.log(`   Total URLs submitted: ${allUrls.length}`)
  console.log(`   Main pages: ${mainPages.length}`)
  console.log(`   Blog posts: ${completedBlogPosts.length}`)
  console.log(`\n💡 Tip: URLs are now queued for indexing in Bing, Yandex, and other participating search engines`)
}

main()
