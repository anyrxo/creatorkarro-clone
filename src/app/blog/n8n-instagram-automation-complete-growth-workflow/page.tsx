import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

// Comprehensive SEO Metadata
export const metadata = {
  title: "N8N Instagram Automation 2026: Complete Growth Workflow - Auto-Post, DM, Analytics & More",
  description: "Master Instagram automation with N8N. Auto-posting from Airtable, comment monitoring, DM automation, analytics tracking. Case study: Agency managing 10 accounts saving 35 hours/week.",
  keywords: [
    "n8n instagram automation", "instagram automation workflow", "n8n social media automation",
    "instagram auto posting n8n", "instagram dm automation", "instagram comment automation",
    "n8n airtable instagram", "instagram analytics automation", "instagram growth automation",
    "n8n instagram api", "automate instagram posts", "instagram marketing automation",
    "instagram business automation", "n8n social media scheduler", "instagram workflow n8n"
  ],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "N8N Instagram Automation 2026: Complete Growth Workflow",
    description: "Complete Instagram automation with N8N - auto-posting, DM automation, comment monitoring, analytics tracking. Agency case study included.",
    url: "https://iimagined.ai/blog/n8n-instagram-automation-complete-growth-workflow",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-15T11:00:00.000Z",
    modifiedTime: new Date().toISOString(),
    authors: ["Anyro"],
    tags: ["n8n", "instagram automation", "social media automation", "marketing automation", "n8n workflows"],
    images: [{
      url: "https://iimagined.ai/images/n8n-instagram-automation-og.jpg",
      width: 1200,
      height: 630,
      alt: "N8N Instagram Automation Complete Workflow",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "N8N Instagram Automation - Complete Growth Workflow",
    description: "Complete Instagram automation with N8N - auto-posting, DM automation, comment monitoring, analytics tracking",
    images: [{
      url: "https://iimagined.ai/images/n8n-instagram-automation-og.jpg",
      alt: "N8N Instagram Automation"
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://iimagined.ai/blog/n8n-instagram-automation-complete-growth-workflow"
  }
}

export default function N8nInstagramAutomation() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "n8n-instagram-automation-complete-growth-workflow",
    publishedTime: metadata.openGraph.publishedTime,
    modifiedTime: metadata.openGraph.modifiedTime,
    category: metadata.category,
    keywords: metadata.keywords,
    image: metadata.openGraph.images[0].url
  })

  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <span className="text-pink-400 text-sm font-semibold">INSTAGRAM GROWTH AUTOMATION</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              N8N Instagram Automation: <span className="text-pink-400">Complete Growth Workflow</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Automate your entire Instagram strategy with N8N. <span className="text-white font-semibold">Save 35+ hours/week</span> managing multiple accounts with auto-posting, DM automation, and analytics tracking.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-pink-400">35+</div>
                <div className="text-sm text-gray-400">Hours Saved/Week</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-purple-400">10</div>
                <div className="text-sm text-gray-400">Accounts Managed</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-sm text-gray-400">Automated</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <div className="text-2xl font-bold text-green-400">3x</div>
                <div className="text-sm text-gray-400">Engagement Boost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Introduction */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Real Case Study: Digital Marketing Agency</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-pink-400 mb-3">Before N8N Automation:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Managing 10 Instagram accounts manually</li>
                    <li>• 40 hours/week spent on posting and engagement</li>
                    <li>• Inconsistent posting schedules</li>
                    <li>• Missed DMs and comments</li>
                    <li>• Manual analytics reporting (5 hours/week)</li>
                    <li>• Team burnout and errors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-3">After N8N Automation:</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• All 10 accounts fully automated</li>
                    <li>• Only 5 hours/week for strategy</li>
                    <li>• Consistent posting (3x per day per account)</li>
                    <li>• Auto-responses to 80% of DMs</li>
                    <li>• Automated daily analytics reports</li>
                    <li>• 3x engagement increase in 60 days</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-zinc-900 rounded-lg text-center">
                <p className="text-xl font-bold text-white">
                  Result: <span className="text-green-400">35 hours/week saved</span> + <span className="text-pink-400">$8,000/month revenue increase</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram API Limitations Warning */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 border border-red-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-red-400">⚠️</span> Critical: Instagram API Limits & Restrictions
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="font-semibold text-white">You MUST understand these limitations before building automation:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><span className="text-white font-semibold">Business/Creator Account Required:</span> Personal accounts don't have API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><span className="text-white font-semibold">Facebook Page Connection:</span> Instagram must be linked to a Facebook Business Page</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><span className="text-white font-semibold">API Rate Limits:</span> 200 calls/hour per user, 4800 calls/hour per app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><span className="text-white font-semibold">Content Publishing Limits:</span> 25 posts per day, 50 comments per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><span className="text-white font-semibold">Messaging Limitations:</span> Can only respond to incoming messages (no cold DMs via API)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><span className="text-white font-semibold">Story Publishing:</span> Limited to 100 stories per day</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><span className="text-white font-semibold">Hashtag Limits:</span> Maximum 30 hashtags per post</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">💡</span> Pro Tips for Staying Within Limits
            </h3>
            <ul className="space-y-2 text-gray-300 ml-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Use scheduling to spread posts evenly throughout the day</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Implement exponential backoff for rate limit handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Cache data to minimize API calls</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Use webhooks instead of polling when possible</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Monitor your rate limit usage in N8N workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 mt-1">✓</span>
                <span>Consider third-party tools like Apify for scraping (use carefully)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Complete Workflow Architecture */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>🏗️</span>
            Complete Instagram Automation Architecture
          </h2>

          <div className="bg-zinc-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-pink-400 mb-4">System Overview</h3>
            <p className="text-gray-300 mb-4">
              This architecture connects Airtable (content database), N8N (automation engine), Instagram Graph API (publishing), and analytics platforms (tracking).
            </p>
            <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-green-400">{`Airtable Content Database
         ↓
    N8N Scheduler (checks every 30 min)
         ↓
    Content Formatter Node
         ↓
    Instagram Graph API
         ↓
    [Post Published]
         ↓
    Analytics Tracker → Google Sheets/Notion
         ↓
    Performance Reports → Slack Notification`}</pre>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Workflow Components Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-300">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="p-3 text-pink-400">Component</th>
                      <th className="p-3 text-pink-400">Purpose</th>
                      <th className="p-3 text-pink-400">Execution Time</th>
                      <th className="p-3 text-pink-400">Node Count</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    <tr>
                      <td className="p-3 font-semibold">Content Scheduler</td>
                      <td className="p-3">Fetch posts from Airtable, check scheduled time</td>
                      <td className="p-3 text-green-400">2-3 seconds</td>
                      <td className="p-3 text-blue-400">4 nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Image Processor</td>
                      <td className="p-3">Download, resize, optimize images</td>
                      <td className="p-3 text-yellow-400">5-8 seconds</td>
                      <td className="p-3 text-blue-400">6 nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Caption Generator</td>
                      <td className="p-3">Format caption, add hashtags, emojis</td>
                      <td className="p-3 text-green-400">1 second</td>
                      <td className="p-3 text-blue-400">3 nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Publisher</td>
                      <td className="p-3">Publish to Instagram via Graph API</td>
                      <td className="p-3 text-yellow-400">3-5 seconds</td>
                      <td className="p-3 text-blue-400">5 nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Comment Monitor</td>
                      <td className="p-3">Check for new comments, auto-respond</td>
                      <td className="p-3 text-green-400">2 seconds</td>
                      <td className="p-3 text-blue-400">7 nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">DM Automation</td>
                      <td className="p-3">Respond to incoming DMs with templates</td>
                      <td className="p-3 text-green-400">1-2 seconds</td>
                      <td className="p-3 text-blue-400">8 nodes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Analytics Collector</td>
                      <td className="p-3">Gather engagement metrics, save to database</td>
                      <td className="p-3 text-yellow-400">4-6 seconds</td>
                      <td className="p-3 text-blue-400">9 nodes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 1: Auto-Posting from Airtable */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>📅</span>
            Workflow 1: Auto-Posting from Airtable/Google Sheets
          </h2>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">What This Workflow Does</h3>
            <p className="text-gray-300">
              Automatically publishes Instagram posts from your content calendar in Airtable or Google Sheets. Schedule posts weeks in advance, and N8N handles the rest - including image processing, caption formatting, and hashtag optimization.
            </p>
          </div>

          {/* Step-by-step Tutorial */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Set Up Airtable Content Database</h3>
                  <p className="text-gray-400 mb-4">Create your content calendar structure</p>

                  <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-3">Required Airtable Fields:</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-gray-300">
                        <thead className="bg-zinc-900">
                          <tr>
                            <th className="p-2 text-left text-pink-400">Field Name</th>
                            <th className="p-2 text-left text-pink-400">Type</th>
                            <th className="p-2 text-left text-pink-400">Purpose</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-700">
                          <tr>
                            <td className="p-2 font-semibold">Post ID</td>
                            <td className="p-2">Auto Number</td>
                            <td className="p-2">Unique identifier</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold">Schedule Time</td>
                            <td className="p-2">Date/Time</td>
                            <td className="p-2">When to publish</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold">Caption</td>
                            <td className="p-2">Long Text</td>
                            <td className="p-2">Post caption</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold">Image URL</td>
                            <td className="p-2">URL/Attachment</td>
                            <td className="p-2">Image to post</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold">Hashtags</td>
                            <td className="p-2">Long Text</td>
                            <td className="p-2">Hashtag list</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold">Status</td>
                            <td className="p-2">Single Select</td>
                            <td className="p-2">Draft/Scheduled/Published</td>
                          </tr>
                          <tr>
                            <td className="p-2 font-semibold">Account</td>
                            <td className="p-2">Single Select</td>
                            <td className="p-2">Which IG account</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-sm text-blue-300 mb-2">💡 Pro Tip:</p>
                    <p className="text-sm text-gray-400">
                      Add a "Performance" field group to track likes, comments, saves, and reach after publishing. This enables automatic ROI tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Configure N8N Schedule Trigger</h3>
                  <p className="text-gray-400 mb-4">Check Airtable every 30 minutes for posts ready to publish</p>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Trigger Node Configuration:</h4>
                    <div className="space-y-3">
                      <div className="bg-zinc-950 rounded p-3">
                        <p className="text-sm text-gray-400 mb-1">Node Type:</p>
                        <code className="text-green-400">Schedule Trigger</code>
                      </div>
                      <div className="bg-zinc-950 rounded p-3">
                        <p className="text-sm text-gray-400 mb-1">Interval:</p>
                        <code className="text-green-400">Every 30 minutes</code>
                      </div>
                      <div className="bg-zinc-950 rounded p-3">
                        <p className="text-sm text-gray-400 mb-1">Cron Expression (Alternative):</p>
                        <code className="text-green-400">*/30 * * * *</code>
                        <p className="text-xs text-gray-500 mt-1">Runs at :00 and :30 of every hour</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Fetch Scheduled Posts from Airtable</h3>
                  <p className="text-gray-400 mb-4">Query posts ready to publish</p>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Airtable Node Setup:</h4>
                    <div className="bg-zinc-950 rounded p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">{`Operation: List
Table: Content Calendar
View: Ready to Publish

Filter Formula:
AND(
  {Status} = "Scheduled",
  {Schedule Time} <= NOW(),
  {Schedule Time} >= DATEADD(NOW(), -30, 'minutes')
)

Fields to Return:
- Post ID
- Caption
- Image URL
- Hashtags
- Account
- Schedule Time`}</pre>
                    </div>
                  </div>

                  <div className="mt-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                    <p className="text-sm text-yellow-300 mb-2">⚠️ Important:</p>
                    <p className="text-sm text-gray-400">
                      The filter ensures you only fetch posts scheduled in the last 30 minutes. This prevents re-publishing old posts if the workflow was temporarily disabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Process and Format Content</h3>
                  <p className="text-gray-400 mb-4">Prepare caption and download images</p>

                  <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-3">Function Node - Format Caption:</h4>
                    <div className="bg-zinc-950 rounded p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">{`// Format caption with hashtags
const items = $input.all();

return items.map(item => {
  const caption = item.json.Caption || '';
  const hashtags = item.json.Hashtags || '';

  // Combine caption and hashtags
  let fullCaption = caption.trim();

  // Add spacing before hashtags
  if (hashtags) {
    fullCaption += '\\n\\n' + hashtags;
  }

  // Ensure it's within Instagram's 2,200 character limit
  if (fullCaption.length > 2200) {
    fullCaption = fullCaption.substring(0, 2197) + '...';
  }

  return {
    json: {
      ...item.json,
      FormattedCaption: fullCaption,
      CharacterCount: fullCaption.length
    }
  };
});`}</pre>
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">HTTP Request Node - Download Image:</h4>
                    <div className="bg-zinc-950 rounded p-4">
                      <pre className="text-sm text-green-400">{`Method: GET
URL: {{$json["Image URL"]}}
Response Format: File
Binary Property: image_data

Options:
- Timeout: 30000ms
- Follow Redirects: Yes`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Publish to Instagram via Graph API</h3>
                  <p className="text-gray-400 mb-4">Two-step publishing process (required by Instagram)</p>

                  <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-3">Step 5a: Create Media Container</h4>
                    <div className="bg-zinc-950 rounded p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">{`HTTP Request Node:
Method: POST
URL: https://graph.facebook.com/v18.0/{{$json["InstagramAccountID"]}}/media

Headers:
- Authorization: Bearer {{$credentials.facebookAccessToken}}

Body (JSON):
{
  "image_url": "{{$json["Image URL"]}}",
  "caption": "{{$json["FormattedCaption"]}}",
  "access_token": "{{$credentials.facebookAccessToken}}"
}

Response contains:
- creation_id (needed for next step)`}</pre>
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Step 5b: Publish Media Container</h4>
                    <div className="bg-zinc-950 rounded p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">{`HTTP Request Node:
Method: POST
URL: https://graph.facebook.com/v18.0/{{$json["InstagramAccountID"]}}/media_publish

Body (JSON):
{
  "creation_id": "{{$json["creation_id"]}}",
  "access_token": "{{$credentials.facebookAccessToken}}"
}

Response contains:
- id (published post ID)`}</pre>
                    </div>
                  </div>

                  <div className="mt-4 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <p className="text-sm text-blue-300 mb-2">💡 Why Two Steps?</p>
                    <p className="text-sm text-gray-400">
                      Instagram Graph API requires creating a media container first, then publishing it. This allows Instagram to process and validate your image/video before it goes live.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Update Airtable & Send Notification</h3>
                  <p className="text-gray-400 mb-4">Mark as published and notify team</p>

                  <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                    <h4 className="text-white font-semibold mb-3">Airtable Update Node:</h4>
                    <div className="bg-zinc-950 rounded p-4">
                      <pre className="text-sm text-green-400">{`Operation: Update
Table: Content Calendar
Record ID: {{$json["Post ID"]}}

Fields to Update:
- Status: "Published"
- Instagram Post ID: {{$json["id"]}}
- Published At: {{$now.toISO()}}
- Post URL: https://www.instagram.com/p/{{$json["id"]}}/`}</pre>
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Slack Notification Node:</h4>
                    <div className="bg-zinc-950 rounded p-4">
                      <pre className="text-sm text-green-400">{`Channel: #instagram-updates

Message:
✅ Instagram Post Published!

Account: {{$json["Account"]}}
Caption: {{$json["Caption"].substring(0, 100)}}...
Post URL: https://www.instagram.com/p/{{$json["id"]}}/

Scheduled: {{$json["Schedule Time"]}}
Published: {{$now.format('MM/DD/YYYY HH:mm')}}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 7 - Error Handling */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">7</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Error Handling & Retry Logic</h3>
                  <p className="text-gray-400 mb-4">Handle API failures gracefully</p>

                  <div className="bg-zinc-800 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Error Workflow Implementation:</h4>
                    <div className="bg-zinc-950 rounded p-4 overflow-x-auto">
                      <pre className="text-sm text-green-400">{`Error Trigger Node (connects to any node's error output)
         ↓
  Check Error Type (IF Node)
         ↓
  Rate Limit Error? → Wait 15 minutes → Retry
  Image Error? → Send Alert → Mark as Failed
  API Error? → Wait 5 minutes → Retry (max 3 times)
         ↓
  Update Airtable Status = "Failed"
         ↓
  Send Urgent Alert to Slack with Error Details`}</pre>
                    </div>
                  </div>

                  <div className="mt-4 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <p className="text-sm text-red-300 mb-2">⚠️ Common Errors to Handle:</p>
                    <ul className="text-sm text-gray-400 space-y-1 ml-4">
                      <li>• Rate limit exceeded (Error code 32)</li>
                      <li>• Invalid image format or size</li>
                      <li>• Expired access token</li>
                      <li>• Image URL not accessible</li>
                      <li>• Caption too long (&gt;2,200 chars)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complete Workflow JSON */}
          <div className="mt-8 bg-zinc-800 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Complete Workflow JSON (Import to N8N)</h3>
            <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto max-h-96">
              <pre className="text-xs text-green-400">{`{
  "name": "Instagram Auto-Poster from Airtable",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [
            {
              "field": "minutes",
              "minutesInterval": 30
            }
          ]
        }
      },
      "name": "Schedule Trigger",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1,
      "position": [250, 300]
    },
    {
      "parameters": {
        "operation": "list",
        "application": "appXXXXXXXXXXXXXX",
        "table": "Content Calendar",
        "options": {
          "filterByFormula": "AND({Status}='Scheduled',{Schedule Time}<=NOW(),{Schedule Time}>=DATEADD(NOW(),-30,'minutes'))"
        }
      },
      "name": "Airtable - Get Scheduled Posts",
      "type": "n8n-nodes-base.airtable",
      "typeVersion": 1,
      "position": [450, 300],
      "credentials": {
        "airtableApi": {
          "id": "1",
          "name": "Airtable account"
        }
      }
    },
    {
      "parameters": {
        "functionCode": "const items = $input.all();\\n\\nreturn items.map(item => {\\n  const caption = item.json.Caption || '';\\n  const hashtags = item.json.Hashtags || '';\\n  let fullCaption = caption.trim();\\n  if (hashtags) {\\n    fullCaption += '\\\\n\\\\n' + hashtags;\\n  }\\n  if (fullCaption.length > 2200) {\\n    fullCaption = fullCaption.substring(0, 2197) + '...';\\n  }\\n  return {\\n    json: {\\n      ...item.json,\\n      FormattedCaption: fullCaption\\n    }\\n  };\\n});"
      },
      "name": "Format Caption",
      "type": "n8n-nodes-base.function",
      "typeVersion": 1,
      "position": [650, 300]
    },
    {
      "parameters": {
        "url": "={{$json[\\"Image URL\\"]}}",
        "responseFormat": "file",
        "options": {}
      },
      "name": "Download Image",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [850, 300]
    },
    {
      "parameters": {
        "url": "=https://graph.facebook.com/v18.0/{{$json[\\"InstagramAccountID\\"]}}/media",
        "method": "POST",
        "jsonParameters": true,
        "options": {},
        "bodyParametersJson": "={ \\"image_url\\": \\"{{$json[\\"Image URL\\"]}}\\"  \\"caption\\": \\"{{$json[\\"FormattedCaption\\"]}}\\" }"
      },
      "name": "Create Media Container",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [1050, 300],
      "credentials": {
        "httpHeaderAuth": {
          "id": "2",
          "name": "Facebook Access Token"
        }
      }
    },
    {
      "parameters": {
        "url": "=https://graph.facebook.com/v18.0/{{$json[\\"InstagramAccountID\\"]}}/media_publish",
        "method": "POST",
        "jsonParameters": true,
        "bodyParametersJson": "={ \\"creation_id\\": \\"{{$json[\\"creation_id\\"]}}\\" }"
      },
      "name": "Publish Post",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 3,
      "position": [1250, 300]
    },
    {
      "parameters": {
        "operation": "update",
        "application": "appXXXXXXXXXXXXXX",
        "table": "Content Calendar",
        "id": "={{$json[\\"Post ID\\"]}}",
        "fieldsUi": {
          "fieldValues": [
            {
              "fieldName": "Status",
              "fieldValue": "Published"
            },
            {
              "fieldName": "Instagram Post ID",
              "fieldValue": "={{$json[\\"id\\"]}}"
            },
            {
              "fieldName": "Published At",
              "fieldValue": "={{$now.toISO()}}"
            }
          ]
        }
      },
      "name": "Update Airtable",
      "type": "n8n-nodes-base.airtable",
      "typeVersion": 1,
      "position": [1450, 300]
    },
    {
      "parameters": {
        "channel": "#instagram-updates",
        "text": "=✅ Instagram Post Published!\\n\\nAccount: {{$json[\\"Account\\"]}}\\nPost URL: https://www.instagram.com/p/{{$json[\\"id\\"]}}/",
        "otherOptions": {}
      },
      "name": "Slack Notification",
      "type": "n8n-nodes-base.slack",
      "typeVersion": 1,
      "position": [1650, 300],
      "credentials": {
        "slackApi": {
          "id": "3",
          "name": "Slack account"
        }
      }
    }
  ],
  "connections": {
    "Schedule Trigger": {
      "main": [[{ "node": "Airtable - Get Scheduled Posts", "type": "main", "index": 0 }]]
    },
    "Airtable - Get Scheduled Posts": {
      "main": [[{ "node": "Format Caption", "type": "main", "index": 0 }]]
    },
    "Format Caption": {
      "main": [[{ "node": "Download Image", "type": "main", "index": 0 }]]
    },
    "Download Image": {
      "main": [[{ "node": "Create Media Container", "type": "main", "index": 0 }]]
    },
    "Create Media Container": {
      "main": [[{ "node": "Publish Post", "type": "main", "index": 0 }]]
    },
    "Publish Post": {
      "main": [[{ "node": "Update Airtable", "type": "main", "index": 0 }]]
    },
    "Update Airtable": {
      "main": [[{ "node": "Slack Notification", "type": "main", "index": 0 }]]
    }
  }
}`}</pre>
            </div>
            <div className="mt-4 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
              <p className="text-sm text-blue-300 mb-2">📥 How to Import:</p>
              <ol className="text-sm text-gray-400 space-y-1 ml-4">
                <li>1. Copy the entire JSON above</li>
                <li>2. In N8N, click "Import from File" or "Import from JSON"</li>
                <li>3. Paste the JSON and click Import</li>
                <li>4. Update credentials and configuration values</li>
                <li>5. Test with a sample post from Airtable</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* First CTA */}
      <section className="section-spacing bg-gradient-to-b from-dark to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Master Automation & Scale Your Growth
            </h2>

            <p className="text-xl text-gray-400 mb-6">
              Learn how to build powerful automation workflows with N8N, Make, and Zapier. Complete courses on automation strategies for creators and businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">N8N masterclass</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Workflow templates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">API integration guides</span>
              </div>
            </div>

            <Link
              href="https://n8n.io"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all px-8 py-4 rounded-xl text-white font-semibold text-lg"
            >
              Learn N8N Automation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <p className="text-gray-500 mt-6 text-sm">
              Save 35+ hours per week with automation
            </p>
          </div>
        </div>
      </section>

      {/* Workflow 2: Comment Monitoring */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <span>💬</span>
            Workflow 2: Comment Monitoring & Auto-Responses
          </h2>

          <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">What This Workflow Does</h3>
            <p className="text-gray-300">
              Monitors all comments on your Instagram posts and automatically responds based on keywords, sentiment, and predefined rules. Flags spam, answers FAQs, and escalates complex questions to humans.
            </p>
          </div>

          <div className="space-y-6">
            {/* Comment Monitoring Architecture */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Comment Monitoring Flow</h3>
              <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-green-400">{`Webhook Trigger (Instagram sends comment event)
         ↓
  Extract Comment Data (username, text, post_id)
         ↓
  Check for Spam (IF Node - keywords, patterns)
         ↓
  [Is Spam?] → Hide Comment → Log to Database
         ↓ [Not Spam]
  Sentiment Analysis (positive/negative/question)
         ↓
  Match Keywords (FAQ responses)
         ↓
  [Match Found?] → Send Auto-Reply → Log to Database
         ↓ [No Match]
  Notify Team → Store in "Needs Response" Database`}</pre>
              </div>
            </div>

            {/* Step 1: Webhook Setup */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Step 1: Configure Instagram Webhook</h3>
              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Webhook Setup in Facebook Developer Portal:</h4>
                <pre className="text-sm text-gray-300">{`1. Go to developers.facebook.com
2. Select your app → Products → Webhooks
3. Subscribe to "comments" field for Instagram
4. Callback URL: https://your-n8n-instance.com/webhook/instagram-comments
5. Verify Token: your_secret_verify_token_here

Subscribed Events:
- comments (new comments)
- mentions (when tagged)
- live_comments (live video comments)`}</pre>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">N8N Webhook Node Configuration:</h4>
                <pre className="text-sm text-green-400">{`Node Type: Webhook
HTTP Method: POST
Path: instagram-comments
Authentication: None (verified by Facebook)

Response:
- Response Code: 200
- Response Mode: On Received

Webhook Verification (GET request):
Return: {{$parameter["hub.challenge"]}} when hub.verify_token matches`}</pre>
              </div>
            </div>

            {/* Step 2: Comment Analysis */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Step 2: Analyze Comment</h3>
              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Function Node - Extract & Analyze:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`const items = $input.all();

return items.map(item => {
  const comment = item.json.entry[0].changes[0].value;
  const text = comment.text.toLowerCase();
  const username = comment.from.username;
  const commentId = comment.id;
  const postId = comment.media.id;

  // Spam detection patterns
  const spamKeywords = ['dm me', 'check my bio', 'follow me', 'buy followers', '🔥🔥🔥'];
  const isSpam = spamKeywords.some(keyword => text.includes(keyword));

  // Emoji/link spam
  const emojiCount = (text.match(/[\\u{1F600}-\\u{1F64F}]/gu) || []).length;
  const linkCount = (text.match(/http/g) || []).length;
  const hasExcessiveEmojis = emojiCount > 5;
  const hasLinks = linkCount > 0;

  // Question detection
  const isQuestion = text.includes('?') ||
                     text.startsWith('how') ||
                     text.startsWith('what') ||
                     text.startsWith('when') ||
                     text.startsWith('where') ||
                     text.startsWith('why');

  // Sentiment (basic)
  const positiveWords = ['love', 'great', 'amazing', 'awesome', 'beautiful', 'thanks'];
  const negativeWords = ['bad', 'hate', 'terrible', 'worst', 'disappointed'];

  const positiveCount = positiveWords.filter(word => text.includes(word)).length;
  const negativeCount = negativeWords.filter(word => text.includes(word)).length;

  let sentiment = 'neutral';
  if (positiveCount > negativeCount) sentiment = 'positive';
  if (negativeCount > positiveCount) sentiment = 'negative';

  return {
    json: {
      commentId,
      postId,
      username,
      text: comment.text,
      timestamp: comment.timestamp,
      isSpam: isSpam || hasExcessiveEmojis || hasLinks,
      isQuestion,
      sentiment,
      needsResponse: isQuestion && !isSpam
    }
  };
});`}</pre>
              </div>
            </div>

            {/* Step 3: Auto-Response Logic */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Step 3: Auto-Response Rules</h3>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3">IF Node - Route Comments:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead className="bg-zinc-900">
                      <tr>
                        <th className="p-3 text-left text-pink-400">Condition</th>
                        <th className="p-3 text-left text-pink-400">Action</th>
                        <th className="p-3 text-left text-pink-400">Response Template</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-700">
                      <tr>
                        <td className="p-3">isSpam = true</td>
                        <td className="p-3 text-red-400">Hide comment</td>
                        <td className="p-3 font-mono text-xs">No response</td>
                      </tr>
                      <tr>
                        <td className="p-3">text contains "price"</td>
                        <td className="p-3 text-green-400">Auto-reply</td>
                        <td className="p-3 font-mono text-xs">Hi! Check our website for pricing: [link]</td>
                      </tr>
                      <tr>
                        <td className="p-3">text contains "shipping"</td>
                        <td className="p-3 text-green-400">Auto-reply</td>
                        <td className="p-3 font-mono text-xs">We offer free shipping on orders over $50!</td>
                      </tr>
                      <tr>
                        <td className="p-3">sentiment = positive</td>
                        <td className="p-3 text-green-400">Thank you reply</td>
                        <td className="p-3 font-mono text-xs">Thank you so much! ❤️</td>
                      </tr>
                      <tr>
                        <td className="p-3">isQuestion = true</td>
                        <td className="p-3 text-yellow-400">Check FAQ match</td>
                        <td className="p-3 font-mono text-xs">Dynamic based on question</td>
                      </tr>
                      <tr>
                        <td className="p-3">No match found</td>
                        <td className="p-3 text-blue-400">Notify team</td>
                        <td className="p-3 font-mono text-xs">We'll get back to you soon!</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">HTTP Request - Post Reply:</h4>
                <pre className="text-sm text-green-400">{`Method: POST
URL: https://graph.facebook.com/v18.0/{{$json["commentId"]}}/replies

Body (JSON):
{
  "message": "{{$json["responseText"]}}",
  "access_token": "{{$credentials.facebookAccessToken}}"
}

Rate Limit Handling:
- Max 50 comment replies per day per account
- Implement counter in workflow variables
- If limit reached, queue responses for next day`}</pre>
              </div>
            </div>

            {/* Step 4: Advanced FAQ Matching */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Step 4: Advanced FAQ Matching with AI</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">OpenAI Node - Smart Response Generation:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`Model: gpt-3.5-turbo
Temperature: 0.3 (more deterministic)

System Prompt:
"You are a helpful Instagram comment responder for [BRAND NAME].
Respond to customer questions briefly (max 50 words) and friendly.
Use 1-2 emojis maximum. Always include a call-to-action when appropriate.

FAQs:
- Shipping: Free on orders over $50, 3-5 business days
- Returns: 30-day return policy
- Custom orders: Available, DM us for details
- Pricing: Check our website [link]
- Product availability: In stock, ships within 24 hours

If the question is complex or outside these FAQs, say:
'Great question! Please DM us or email support@yourbrand.com for detailed help!'"

User Message:
{{$json["text"]}}

Max Tokens: 100
Stop Sequences: ["\n\n"]`}</pre>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2">💡 Pro Tip: AI Cost Optimization</p>
                <p className="text-sm text-gray-400 mb-2">
                  Use AI only for questions that don't match your predefined templates. This saves API costs while maintaining quality:
                </p>
                <ul className="text-sm text-gray-400 space-y-1 ml-4">
                  <li>• Check keyword matches first (free, instant)</li>
                  <li>• Only call OpenAI for complex/unique questions</li>
                  <li>• Cache AI responses for similar future questions</li>
                  <li>• Cost: ~$0.002 per response with GPT-3.5-turbo</li>
                </ul>
              </div>
            </div>

            {/* Step 5: Spam Handling */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Step 5: Hide Spam Comments</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">HTTP Request - Hide Comment:</h4>
                <pre className="text-sm text-green-400">{`Method: POST
URL: https://graph.facebook.com/v18.0/{{$json["commentId"]}}

Body (JSON):
{
  "hide": true,
  "access_token": "{{$credentials.facebookAccessToken}}"
}

Note: Hiding comments doesn't delete them, just makes them
invisible to other users. The commenter can still see it.

Alternative (Delete):
Method: DELETE
URL: https://graph.facebook.com/v18.0/{{$json["commentId"]}}`}</pre>
              </div>

              <div className="mt-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-sm text-yellow-300 mb-2">⚠️ Spam Detection Best Practices:</p>
                <ul className="text-sm text-gray-400 space-y-1 ml-4">
                  <li>• Start conservative - better to miss spam than hide legitimate comments</li>
                  <li>• Review hidden comments weekly to improve filters</li>
                  <li>• Never auto-hide comments from verified accounts</li>
                  <li>• Log all spam detections for pattern analysis</li>
                </ul>
              </div>
            </div>

            {/* Step 6: Database Logging */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Step 6: Log Comments to Database</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Airtable/Google Sheets - Log Entry:</h4>
                <pre className="text-sm text-green-400">{`Table: Comment Log

Fields:
- Comment ID (unique)
- Post ID
- Username
- Comment Text
- Timestamp
- Sentiment (positive/neutral/negative)
- Is Spam (checkbox)
- Is Question (checkbox)
- Response Sent (text)
- Response Time (datetime)
- Handled By (Auto/Human)
- Status (Pending/Responded/Escalated)

Benefits:
✓ Track response rate and speed
✓ Analyze common questions for FAQ updates
✓ Measure sentiment over time
✓ Audit auto-responses for quality
✓ Train better spam filters`}</pre>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="mt-8 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Comment Automation Results</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-sm text-gray-400">Comments auto-responded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">&lt;60s</div>
                <div className="text-sm text-gray-400">Average response time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-sm text-gray-400">Spam detection accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 3: DM Automation */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Workflow 3: DM Automation for Lead Generation</h2>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">What This Workflow Does</h3>
            <p className="text-gray-300 mb-3">
              Automatically responds to Instagram DMs with personalized messages, qualifying leads, and routing high-intent prospects to your sales team. Handles FAQs, sends product catalogs, and schedules consultations.
            </p>
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
              <p className="text-sm text-red-300 mb-1">⚠️ API Limitation:</p>
              <p className="text-sm text-gray-400">
                Instagram API only allows responding to incoming DMs. You cannot send cold DMs via automation. However, you can trigger DM responses with Story mentions, comment replies directing users to DM, or lead magnets.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* DM Flow Architecture */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">DM Automation Flow</h3>
              <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-green-400">{`Webhook (Instagram sends message event)
         ↓
  Extract Message Data (sender, text, thread_id)
         ↓
  Check if First Message (new conversation?)
         ↓ [Yes - New Lead]
  Send Welcome Message + Quick Reply Options
         ↓
  [User Selects Option]
         ↓
  Route Based on Selection:
  - "Pricing" → Send pricing info + link
  - "Book Demo" → Send Calendly link
  - "Product Info" → Send catalog
  - "Support" → Route to support team
         ↓
  Save Lead to CRM (Airtable/HubSpot)
         ↓
  Qualify Lead (high/medium/low intent)
         ↓
  [High Intent] → Notify Sales Team Immediately`}</pre>
              </div>
            </div>

            {/* DM Webhook Setup */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Step 1: Configure DM Webhook</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Facebook Webhook Subscription:</h4>
                <pre className="text-sm text-gray-300">{`Subscribe to these fields:
- messages (new direct messages)
- messaging_postbacks (button clicks)
- message_reads (read receipts)

Webhook Fields to Monitor:
{
  "entry": [
    {
      "id": "instagram-account-id",
      "messaging": [
        {
          "sender": {"id": "sender-id"},
          "recipient": {"id": "your-account-id"},
          "timestamp": 1234567890,
          "message": {
            "mid": "message-id",
            "text": "User's message here"
          }
        }
      ]
    }
  ]
}`}</pre>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">N8N Webhook Node:</h4>
                <pre className="text-sm text-green-400">{`Node Type: Webhook
HTTP Method: POST
Path: instagram-messages
Response Code: 200

Webhook Verification (required):
IF hub.mode = "subscribe" AND hub.verify_token = "your_secret_token"
THEN return hub.challenge`}</pre>
              </div>
            </div>

            {/* Message Analysis */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Step 2: Analyze Incoming Message</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Function Node - Message Parser:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`const items = $input.all();

return items.map(item => {
  const messaging = item.json.entry[0].messaging[0];
  const senderId = messaging.sender.id;
  const messageText = messaging.message?.text?.toLowerCase() || '';
  const messageId = messaging.message?.mid;
  const timestamp = messaging.timestamp;

  // Intent detection
  const intents = {
    pricing: ['price', 'cost', 'how much', 'pricing', 'rates', '$'],
    demo: ['demo', 'consultation', 'call', 'meeting', 'schedule'],
    product: ['product', 'features', 'catalog', 'options', 'what do you'],
    support: ['help', 'issue', 'problem', 'not working', 'error'],
    general: ['hi', 'hello', 'hey', 'info', 'interested']
  };

  let detectedIntent = 'general';
  for (const [intent, keywords] of Object.entries(intents)) {
    if (keywords.some(keyword => messageText.includes(keyword))) {
      detectedIntent = intent;
      break;
    }
  }

  // Lead scoring (basic)
  const urgencyWords = ['asap', 'urgent', 'now', 'today', 'immediately'];
  const buyingWords = ['buy', 'purchase', 'order', 'get started', 'sign up'];

  let leadScore = 0;
  if (urgencyWords.some(word => messageText.includes(word))) leadScore += 30;
  if (buyingWords.some(word => messageText.includes(word))) leadScore += 40;
  if (detectedIntent === 'demo' || detectedIntent === 'pricing') leadScore += 20;
  if (messageText.length > 50) leadScore += 10; // Detailed message = serious

  let leadQuality = 'low';
  if (leadScore >= 50) leadQuality = 'high';
  else if (leadScore >= 25) leadQuality = 'medium';

  return {
    json: {
      senderId,
      messageText: messaging.message?.text,
      messageId,
      timestamp,
      detectedIntent,
      leadScore,
      leadQuality,
      isFirstMessage: messaging.message?.is_echo !== true
    }
  };
});`}</pre>
              </div>
            </div>

            {/* Response Templates */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Step 3: Send Automated Responses</h3>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-3">Response Template Library:</h4>
                <div className="space-y-3">
                  <div className="bg-zinc-950 rounded p-4">
                    <p className="text-pink-400 font-semibold mb-2">Welcome Message (First Contact):</p>
                    <pre className="text-sm text-gray-300">{`Hi {{username}}! 👋

Thanks for reaching out! I'm here to help.

What can I assist you with today?

Quick options:
💰 Pricing & Packages
📅 Book a Demo
📦 Product Catalog
💬 General Questions

Just type your choice or send your question!`}</pre>
                  </div>

                  <div className="bg-zinc-950 rounded p-4">
                    <p className="text-blue-400 font-semibold mb-2">Pricing Intent:</p>
                    <pre className="text-sm text-gray-300">{`Great question! 💵

Our pricing starts at $XX/month with three tiers:

✨ Starter: $XX/mo - Perfect for beginners
🚀 Pro: $XX/mo - Most popular!
💎 Enterprise: Custom pricing

Check out all the details here: [pricing-link]

Want to book a quick 15-min call to discuss the best fit for you? 📞`}</pre>
                  </div>

                  <div className="bg-zinc-950 rounded p-4">
                    <p className="text-green-400 font-semibold mb-2">Demo Request:</p>
                    <pre className="text-sm text-gray-300">{`I'd love to show you what we can do! 🎯

Book a free 30-minute demo here:
👉 [calendly-link]

Or if you prefer, I can have our team reach out directly.
What's your preferred email/phone number?`}</pre>
                  </div>

                  <div className="bg-zinc-950 rounded p-4">
                    <p className="text-purple-400 font-semibold mb-2">Product Info:</p>
                    <pre className="text-sm text-gray-300">{`Here's our complete product catalog! 📦

[Send media attachment: PDF or carousel]

Key features:
✅ Feature 1
✅ Feature 2
✅ Feature 3

Which one interests you most? Or have specific questions?`}</pre>
                  </div>

                  <div className="bg-zinc-950 rounded p-4">
                    <p className="text-orange-400 font-semibold mb-2">High Intent (Immediate Notify Sales):</p>
                    <pre className="text-sm text-gray-300">{`That's awesome! Let me connect you with our team right away. 🚀

I'm notifying them now - expect a message within 15 minutes!

In the meantime, is there anything specific you'd like to know?

You can also reach us directly:
📧 sales@yourbrand.com
📞 (123) 456-7890`}</pre>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">HTTP Request - Send DM Reply:</h4>
                <pre className="text-sm text-green-400">{`Method: POST
URL: https://graph.facebook.com/v18.0/me/messages

Headers:
- Authorization: Bearer {{$credentials.facebookPageAccessToken}}

Body (JSON):
{
  "recipient": {
    "id": "{{$json["senderId"]}}"
  },
  "message": {
    "text": "{{$json["responseText"]}}"
  },
  "messaging_type": "RESPONSE"
}

Note: messaging_type must be "RESPONSE" to reply to incoming messages.
You cannot use "MESSAGE_TAG" or "UPDATE" for marketing messages via API.`}</pre>
              </div>
            </div>

            {/* Quick Replies */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Step 4: Add Quick Reply Buttons</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Quick Reply Implementation:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`{
  "recipient": {"id": "{{$json["senderId"]}}"},
  "message": {
    "text": "What would you like to know more about?",
    "quick_replies": [
      {
        "content_type": "text",
        "title": "💰 Pricing",
        "payload": "PRICING_INFO"
      },
      {
        "content_type": "text",
        "title": "📅 Book Demo",
        "payload": "BOOK_DEMO"
      },
      {
        "content_type": "text",
        "title": "📦 Products",
        "payload": "PRODUCT_CATALOG"
      },
      {
        "content_type": "text",
        "title": "💬 Other Question",
        "payload": "GENERAL_QUESTION"
      }
    ]
  }
}`}</pre>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2">💡 Quick Reply Benefits:</p>
                <ul className="text-sm text-gray-400 space-y-1 ml-4">
                  <li>• Users can tap instead of typing (better UX)</li>
                  <li>• You get structured data (easier to process)</li>
                  <li>• Higher response rate (30-40% vs text-only)</li>
                  <li>• Cleaner conversation flow</li>
                  <li>• Works on mobile perfectly</li>
                </ul>
              </div>
            </div>

            {/* CRM Integration */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Step 5: Save Lead to CRM</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Airtable/HubSpot - Create Lead:</h4>
                <pre className="text-sm text-green-400">{`Table: Instagram Leads

Fields to Save:
- Instagram User ID (unique)
- Username
- First Message
- Detected Intent
- Lead Score (0-100)
- Lead Quality (High/Medium/Low)
- Conversation Started (datetime)
- Last Response (datetime)
- Status (New/Contacted/Qualified/Converted/Lost)
- Assigned To (sales rep)
- Notes (auto-generated summary)

Conditional Logic:
IF leadQuality = "high"
  → Assign to senior sales rep
  → Send immediate Slack notification
  → Schedule follow-up call within 2 hours

IF leadQuality = "medium"
  → Add to email nurture sequence
  → Assign to junior sales rep
  → Follow up within 24 hours

IF leadQuality = "low"
  → Add to general mailing list
  → Send educational content
  → Re-engage in 7 days`}</pre>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Enrich Lead Data (Optional):</h4>
                <pre className="text-sm text-green-400">{`Use Instagram Graph API to fetch:
- Profile picture
- Follower count
- Following count
- Bio description
- Is verified?
- Is business account?

High-value indicators:
✓ Verified account (influencer/business)
✓ High follower count (>10k)
✓ Business account with website link
✓ Bio contains relevant keywords

Auto-upgrade lead quality if indicators present.`}</pre>
              </div>
            </div>

            {/* Sales Team Notification */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Step 6: Notify Sales Team (High Intent Leads)</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Slack Notification (Urgent):</h4>
                <pre className="text-sm text-green-400">{`Channel: #hot-leads

Message:
🔥 HIGH INTENT INSTAGRAM LEAD 🔥

Username: @{{$json["username"]}}
Lead Score: {{$json["leadScore"]}}/100
Intent: {{$json["detectedIntent"]}}

First Message:
"{{$json["messageText"]}}"

Profile:
- Followers: {{$json["followerCount"]}}
- Business Account: {{$json["isBusinessAccount"]}}
- Verified: {{$json["isVerified"]}}

📱 Respond in Instagram DMs ASAP!
🔗 CRM Link: [airtable-record-link]

Assigned to: @{{$json["assignedSalesRep"]}}`}</pre>
              </div>

              <div className="mt-4 bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-sm text-green-300 mb-2">✅ Notification Best Practices:</p>
                <ul className="text-sm text-gray-400 space-y-1 ml-4">
                  <li>• Only notify for genuinely high-intent leads (avoid notification fatigue)</li>
                  <li>• Include all context needed to respond immediately</li>
                  <li>• Assign to specific person (not just general channel)</li>
                  <li>• Set SLA: respond within 15 minutes during business hours</li>
                  <li>• Track response times and conversion rates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DM Automation Results */}
          <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">DM Automation Performance</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">72%</div>
                <div className="text-sm text-gray-400">DMs auto-handled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">3x</div>
                <div className="text-sm text-gray-400">Lead capture increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                <div className="text-sm text-gray-400">User satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-sm text-gray-400">Conversion rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow 4: Analytics Tracking */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Workflow 4: Analytics Tracking to Google Sheets/Notion</h2>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-3">What This Workflow Does</h3>
            <p className="text-gray-300">
              Automatically collects Instagram analytics (followers, engagement, reach, impressions) and saves to Google Sheets or Notion. Creates daily/weekly reports, tracks growth trends, and identifies top-performing content.
            </p>
          </div>

          <div className="space-y-6">
            {/* Analytics Flow */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Analytics Collection Flow</h3>
              <div className="bg-zinc-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-green-400">{`Schedule Trigger (Daily at 8 AM)
         ↓
  Fetch Account Insights (followers, reach, impressions)
         ↓
  Fetch Recent Posts (last 24 hours)
         ↓
  For Each Post: Get Engagement Metrics
  - Likes
  - Comments
  - Saves
  - Shares
  - Reach
  - Impressions
         ↓
  Calculate Aggregated Metrics
  - Total Engagement
  - Engagement Rate
  - Best Performing Post
  - Worst Performing Post
         ↓
  Save to Google Sheets (append row)
         ↓
  Compare with Yesterday (growth/decline)
         ↓
  Generate Summary Report → Send to Slack`}</pre>
              </div>
            </div>

            {/* Metrics to Track */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Key Metrics to Track</h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-300">
                  <thead className="bg-zinc-900">
                    <tr>
                      <th className="p-3 text-left text-pink-400">Metric Category</th>
                      <th className="p-3 text-left text-pink-400">Metrics</th>
                      <th className="p-3 text-left text-pink-400">API Endpoint</th>
                      <th className="p-3 text-left text-pink-400">Update Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-700">
                    <tr>
                      <td className="p-3 font-semibold">Account Insights</td>
                      <td className="p-3">
                        • Follower Count<br/>
                        • Following Count<br/>
                        • Profile Views<br/>
                        • Website Clicks
                      </td>
                      <td className="p-3 font-mono text-xs">/insights?metric=follower_count,profile_views</td>
                      <td className="p-3 text-green-400">Daily</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Content Performance</td>
                      <td className="p-3">
                        • Impressions<br/>
                        • Reach<br/>
                        • Engagement<br/>
                        • Saved
                      </td>
                      <td className="p-3 font-mono text-xs">/insights?metric=impressions,reach,engagement</td>
                      <td className="p-3 text-green-400">Per Post</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Audience</td>
                      <td className="p-3">
                        • Demographics<br/>
                        • Location<br/>
                        • Age Range<br/>
                        • Gender Split
                      </td>
                      <td className="p-3 font-mono text-xs">/insights?metric=audience_city,audience_gender_age</td>
                      <td className="p-3 text-yellow-400">Weekly</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Stories</td>
                      <td className="p-3">
                        • Story Views<br/>
                        • Exits<br/>
                        • Replies<br/>
                        • Taps Forward/Back
                      </td>
                      <td className="p-3 font-mono text-xs">/stories/insights</td>
                      <td className="p-3 text-green-400">Daily</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* API Calls */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Step 1: Fetch Account Insights</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">HTTP Request - Account Metrics:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`Method: GET
URL: https://graph.facebook.com/v18.0/{{$json["InstagramAccountID"]}}/insights

Query Parameters:
- metric: follower_count,impressions,reach,profile_views,website_clicks
- period: day
- access_token: {{$credentials.facebookAccessToken}}

Response Format:
{
  "data": [
    {
      "name": "follower_count",
      "period": "day",
      "values": [
        {"value": 10523, "end_time": "2025-01-15T08:00:00+0000"}
      ]
    },
    {
      "name": "impressions",
      "period": "day",
      "values": [
        {"value": 45782, "end_time": "2025-01-15T08:00:00+0000"}
      ]
    }
  ]
}`}</pre>
              </div>
            </div>

            {/* Post Analytics */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Step 2: Fetch Post-Level Analytics</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Get Recent Posts:</h4>
                <pre className="text-sm text-green-400">{`Method: GET
URL: https://graph.facebook.com/v18.0/{{$json["InstagramAccountID"]}}/media

Query Parameters:
- fields: id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count
- since: {{$now.minus({days: 1}).toSeconds()}}
- access_token: {{$credentials.facebookAccessToken}}`}</pre>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Get Post Insights (Loop Through Posts):</h4>
                <pre className="text-sm text-green-400">{`Method: GET
URL: https://graph.facebook.com/v18.0/{{$json["postId"]}}/insights

Query Parameters:
- metric: impressions,reach,engagement,saved,video_views
- access_token: {{$credentials.facebookAccessToken}}

Calculate Engagement Rate:
engagement_rate = (likes + comments + saves + shares) / reach * 100`}</pre>
              </div>
            </div>

            {/* Data Processing */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Step 3: Process and Calculate Metrics</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Function Node - Calculate Aggregates:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`const accountData = $input.first().json;
const postsData = $input.all().slice(1); // Assuming posts come after account data

// Account-level metrics
const followers = accountData.data.find(m => m.name === 'follower_count')?.values[0]?.value || 0;
const impressions = accountData.data.find(m => m.name === 'impressions')?.values[0]?.value || 0;
const reach = accountData.data.find(m => m.name === 'reach')?.values[0]?.value || 0;
const profileViews = accountData.data.find(m => m.name === 'profile_views')?.values[0]?.value || 0;

// Post-level aggregations
let totalLikes = 0;
let totalComments = 0;
let totalSaves = 0;
let totalPostReach = 0;
let totalPostImpressions = 0;

let bestPost = null;
let bestEngagementRate = 0;

postsData.forEach(item => {
  const post = item.json;
  const likes = post.like_count || 0;
  const comments = post.comments_count || 0;
  const saves = post.insights?.saved || 0;
  const postReach = post.insights?.reach || 0;
  const postImpressions = post.insights?.impressions || 0;

  totalLikes += likes;
  totalComments += comments;
  totalSaves += saves;
  totalPostReach += postReach;
  totalPostImpressions += postImpressions;

  // Calculate engagement rate for this post
  const engagementRate = postReach > 0 ? ((likes + comments + saves) / postReach * 100) : 0;

  if (engagementRate > bestEngagementRate) {
    bestEngagementRate = engagementRate;
    bestPost = {
      caption: post.caption?.substring(0, 100),
      url: post.permalink,
      likes,
      comments,
      engagementRate: engagementRate.toFixed(2)
    };
  }
});

// Overall engagement rate
const avgEngagementRate = totalPostReach > 0
  ? ((totalLikes + totalComments + totalSaves) / totalPostReach * 100).toFixed(2)
  : 0;

return [{
  json: {
    date: new Date().toISOString().split('T')[0],
    followers,
    impressions,
    reach,
    profileViews,
    totalPosts: postsData.length,
    totalLikes,
    totalComments,
    totalSaves,
    totalPostReach,
    totalPostImpressions,
    avgEngagementRate,
    bestPost
  }
}];`}</pre>
              </div>
            </div>

            {/* Save to Google Sheets */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-4">Step 4: Save to Google Sheets</h3>

              <div className="bg-zinc-950 rounded p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Google Sheets Structure:</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-gray-300 border border-zinc-700">
                    <thead className="bg-zinc-900">
                      <tr>
                        <th className="p-2 border border-zinc-700">Date</th>
                        <th className="p-2 border border-zinc-700">Followers</th>
                        <th className="p-2 border border-zinc-700">Impressions</th>
                        <th className="p-2 border border-zinc-700">Reach</th>
                        <th className="p-2 border border-zinc-700">Profile Views</th>
                        <th className="p-2 border border-zinc-700">Posts</th>
                        <th className="p-2 border border-zinc-700">Total Likes</th>
                        <th className="p-2 border border-zinc-700">Total Comments</th>
                        <th className="p-2 border border-zinc-700">Avg Eng. Rate %</th>
                        <th className="p-2 border border-zinc-700">Best Post URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="p-2 border border-zinc-700">2025-01-15</td>
                        <td className="p-2 border border-zinc-700">10,523</td>
                        <td className="p-2 border border-zinc-700">45,782</td>
                        <td className="p-2 border border-zinc-700">32,144</td>
                        <td className="p-2 border border-zinc-700">1,254</td>
                        <td className="p-2 border border-zinc-700">3</td>
                        <td className="p-2 border border-zinc-700">1,842</td>
                        <td className="p-2 border border-zinc-700">156</td>
                        <td className="p-2 border border-zinc-700">6.22%</td>
                        <td className="p-2 border border-zinc-700 text-blue-400 underline">link</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Google Sheets Node Configuration:</h4>
                <pre className="text-sm text-green-400">{`Operation: Append Row
Spreadsheet: Instagram Analytics
Sheet: Daily Data

Values to Append:
- {{$json["date"]}}
- {{$json["followers"]}}
- {{$json["impressions"]}}
- {{$json["reach"]}}
- {{$json["profileViews"]}}
- {{$json["totalPosts"]}}
- {{$json["totalLikes"]}}
- {{$json["totalComments"]}}
- {{$json["avgEngagementRate"]}}
- {{$json["bestPost"]["url"]}}

Options:
✓ Value Input Option: USER_ENTERED (formulas will work)
✓ Insert Data Option: INSERT_ROWS (don't overwrite)`}</pre>
              </div>
            </div>

            {/* Growth Comparison */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Step 5: Calculate Growth Trends</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Function Node - Compare with Yesterday:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`// Fetch yesterday's data from Google Sheets
// Assuming you have a "Read" node before this that gets last 2 rows

const today = $input.first().json;
const yesterday = $input.last().json;

const followerGrowth = today.followers - yesterday.followers;
const followerGrowthPercent = ((followerGrowth / yesterday.followers) * 100).toFixed(2);

const impressionGrowth = today.impressions - yesterday.impressions;
const impressionGrowthPercent = ((impressionGrowth / yesterday.impressions) * 100).toFixed(2);

const reachGrowth = today.reach - yesterday.reach;
const reachGrowthPercent = ((reachGrowth / yesterday.reach) * 100).toFixed(2);

const engagementChange = (today.avgEngagementRate - yesterday.avgEngagementRate).toFixed(2);

// Determine trend emoji
const getTrendEmoji = (growth) => {
  if (growth > 5) return '🚀';
  if (growth > 0) return '📈';
  if (growth < -5) return '📉';
  if (growth < 0) return '⚠️';
  return '➡️';
};

return [{
  json: {
    ...today,
    growth: {
      followers: followerGrowth,
      followersPercent: followerGrowthPercent,
      followersEmoji: getTrendEmoji(parseFloat(followerGrowthPercent)),
      impressions: impressionGrowth,
      impressionsPercent: impressionGrowthPercent,
      impressionsEmoji: getTrendEmoji(parseFloat(impressionGrowthPercent)),
      reach: reachGrowth,
      reachPercent: reachGrowthPercent,
      reachEmoji: getTrendEmoji(parseFloat(reachGrowthPercent)),
      engagementChange,
      engagementEmoji: getTrendEmoji(parseFloat(engagementChange))
    }
  }
}];`}</pre>
              </div>
            </div>

            {/* Daily Report */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">Step 6: Generate & Send Daily Report</h3>

              <div className="bg-zinc-950 rounded p-4">
                <h4 className="text-white font-semibold mb-2">Slack Report Message:</h4>
                <pre className="text-sm text-green-400 overflow-x-auto">{`Channel: #instagram-analytics

Message:
📊 Instagram Daily Report - {{$json["date"]}}

━━━━━━━━━━━━━━━━━━━━━━━━━━
👥 AUDIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━
Followers: {{$json["followers"]}} ({{$json["growth"]["followersEmoji"]}} {{$json["growth"]["followers"]}} / {{$json["growth"]["followersPercent"]}}%)
Profile Views: {{$json["profileViews"]}}

━━━━━━━━━━━━━━━━━━━━━━━━━━
📈 PERFORMANCE
━━━━━━━━━━━━━━━━━━━━━━━━━━
Impressions: {{$json["impressions"]}} ({{$json["growth"]["impressionsEmoji"]}} {{$json["growth"]["impressionsPercent"]}}%)
Reach: {{$json["reach"]}} ({{$json["growth"]["reachEmoji"]}} {{$json["growth"]["reachPercent"]}}%)
Avg Engagement Rate: {{$json["avgEngagementRate"]}}% ({{$json["growth"]["engagementEmoji"]}} {{$json["growth"]["engagementChange"]}}%)

━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━
Posts Today: {{$json["totalPosts"]}}
Total Likes: {{$json["totalLikes"]}}
Total Comments: {{$json["totalComments"]}}
Total Saves: {{$json["totalSaves"]}}

━━━━━━━━━━━━━━━━━━━━━━━━━━
⭐ BEST PERFORMING POST
━━━━━━━━━━━━━━━━━━━━━━━━━━
Caption: {{$json["bestPost"]["caption"]}}...
Engagement Rate: {{$json["bestPost"]["engagementRate"]}}%
🔗 {{$json["bestPost"]["url"]}}

━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Full Data: [Google Sheets Link]`}</pre>
              </div>

              <div className="mt-4 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm text-blue-300 mb-2">💡 Advanced Reporting Options:</p>
                <ul className="text-sm text-gray-400 space-y-1 ml-4">
                  <li>• Weekly summary every Monday (7-day trends)</li>
                  <li>• Monthly report with charts (use Google Charts API)</li>
                  <li>• Automated insights: "Your engagement is 25% higher on Wednesdays"</li>
                  <li>• Competitor comparison (if tracking multiple accounts)</li>
                  <li>• Goal tracking: "You're 85% to your 15K follower goal"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Node Breakdown Table */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Complete System: Node Breakdown & Execution Times</h2>

          <div className="bg-zinc-800 rounded-xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-gray-300">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="p-3 text-left text-pink-400">Workflow</th>
                    <th className="p-3 text-left text-pink-400">Total Nodes</th>
                    <th className="p-3 text-left text-pink-400">Avg Execution Time</th>
                    <th className="p-3 text-left text-pink-400">Frequency</th>
                    <th className="p-3 text-left text-pink-400">Monthly Executions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr>
                    <td className="p-3 font-semibold">Auto-Posting (Airtable)</td>
                    <td className="p-3 text-blue-400">8 nodes</td>
                    <td className="p-3 text-green-400">12-18 seconds</td>
                    <td className="p-3">Every 30 min</td>
                    <td className="p-3 text-yellow-400">~1,440</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Comment Monitoring</td>
                    <td className="p-3 text-blue-400">12 nodes</td>
                    <td className="p-3 text-green-400">2-4 seconds</td>
                    <td className="p-3">On event (webhook)</td>
                    <td className="p-3 text-yellow-400">~500-2000</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">DM Automation</td>
                    <td className="p-3 text-blue-400">15 nodes</td>
                    <td className="p-3 text-green-400">3-6 seconds</td>
                    <td className="p-3">On event (webhook)</td>
                    <td className="p-3 text-yellow-400">~200-800</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Analytics Tracking</td>
                    <td className="p-3 text-blue-400">9 nodes</td>
                    <td className="p-3 text-yellow-400">20-30 seconds</td>
                    <td className="p-3">Daily (8 AM)</td>
                    <td className="p-3 text-yellow-400">~30</td>
                  </tr>
                  <tr className="bg-zinc-900 font-semibold">
                    <td className="p-3">TOTAL SYSTEM</td>
                    <td className="p-3 text-blue-400">44 nodes</td>
                    <td className="p-3">-</td>
                    <td className="p-3">-</td>
                    <td className="p-3 text-green-400">~2,170-4,270</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-3">💡 Execution Cost Estimate (N8N Cloud)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <p className="text-white font-semibold mb-2">Starter Plan ($20/mo):</p>
                <ul className="space-y-1 ml-4">
                  <li>• 50K executions included</li>
                  <li>• This system uses: ~2,170-4,270/month</li>
                  <li>• <span className="text-green-400 font-semibold">Easily fits within limit!</span></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">Self-Hosted (Free):</p>
                <ul className="space-y-1 ml-4">
                  <li>• Unlimited executions</li>
                  <li>• Only pay for server (~$10-20/mo)</li>
                  <li>• <span className="text-green-400 font-semibold">Best value for high volume!</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Tips */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Optimization Tips for Instagram Automation</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <span>💡</span> Performance Optimization
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Use Webhooks Over Polling</p>
                    <p className="text-sm text-gray-400">Webhooks are instant and use fewer executions than scheduled checks</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Batch Process When Possible</p>
                    <p className="text-sm text-gray-400">Process multiple posts/comments in one workflow run</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Cache Frequently Used Data</p>
                    <p className="text-sm text-gray-400">Store hashtag lists, response templates in workflow static data</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <div>
                    <p className="font-semibold text-white">Optimize Image Processing</p>
                    <p className="text-sm text-gray-400">Use CDN links when possible instead of downloading/reuploading</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                <span>⚠️</span> Common Pitfalls to Avoid
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="font-semibold text-white">Exceeding Rate Limits</p>
                    <p className="text-sm text-gray-400">Always implement rate limit detection and exponential backoff</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="font-semibold text-white">Generic Auto-Responses</p>
                    <p className="text-sm text-gray-400">Users can tell. Make responses contextual and human-like</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="font-semibold text-white">No Error Notifications</p>
                    <p className="text-sm text-gray-400">Always get alerted when workflows fail (posts not published, etc)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">✗</span>
                  <div>
                    <p className="font-semibold text-white">Over-Automation</p>
                    <p className="text-sm text-gray-400">Keep some human touch - don't automate everything</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <span>✅</span> Best Practices
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <p className="font-semibold text-white">Test thoroughly before going live</p>
                    <p className="text-sm text-gray-400">Use a test Instagram account first</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <p className="font-semibold text-white">Review auto-responses weekly</p>
                    <p className="text-sm text-gray-400">Improve templates based on actual conversations</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <p className="font-semibold text-white">Keep workflows modular</p>
                    <p className="text-sm text-gray-400">One workflow per function makes debugging easier</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">•</span>
                  <div>
                    <p className="font-semibold text-white">Document your automations</p>
                    <p className="text-sm text-gray-400">Add notes to nodes explaining logic for future you</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                <span>⚡</span> Advanced Techniques
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">★</span>
                  <div>
                    <p className="font-semibold text-white">A/B Test Posting Times</p>
                    <p className="text-sm text-gray-400">Track performance by posting time, auto-optimize schedule</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">★</span>
                  <div>
                    <p className="font-semibold text-white">Hashtag Performance Analysis</p>
                    <p className="text-sm text-gray-400">Track which hashtags drive most engagement, auto-rotate</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">★</span>
                  <div>
                    <p className="font-semibold text-white">Competitor Monitoring</p>
                    <p className="text-sm text-gray-400">Track competitor posts, get alerts on their strategies</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">★</span>
                  <div>
                    <p className="font-semibold text-white">AI Content Suggestions</p>
                    <p className="text-sm text-gray-400">Use GPT to suggest captions based on top-performing posts</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Is automating Instagram against their Terms of Service?</h3>
              <p className="text-gray-300">
                Using the official Instagram Graph API (as shown in this guide) is 100% compliant with Instagram's TOS. What's NOT allowed: third-party bots that scrape data, auto-follow/unfollow, or spam. We only use official APIs here.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Do I need a Business or Creator account?</h3>
              <p className="text-gray-300">
                Yes, Instagram Graph API only works with Business or Creator accounts connected to a Facebook Page. Personal accounts don't have API access. You can switch to a Business account for free in Instagram settings.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What's the Instagram API rate limit?</h3>
              <p className="text-gray-300">
                200 calls per hour per user, 4800 calls per hour per app. For publishing: 25 posts per day, 50 comments per day. These limits are generous for most use cases. The workflows in this guide stay well within limits.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I auto-DM people who aren't following me?</h3>
              <p className="text-gray-300">
                No. Instagram API only allows responding to incoming DMs. You cannot send cold DMs via automation. However, you can encourage DMs through posts/stories and then auto-respond.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">How much does N8N cost for Instagram automation?</h3>
              <p className="text-gray-300">
                N8N Cloud Starter ($20/mo) easily handles 10 Instagram accounts with all workflows. Or self-host for free (unlimited usage). This is 10x cheaper than alternatives like ManyChat or Zapier.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Can I schedule Instagram Stories automatically?</h3>
              <p className="text-gray-300">
                Yes, the Instagram Graph API supports story publishing (limit: 100 stories/day). The workflow is similar to posts: upload media to Facebook CDN, then create story via API.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">What if my workflow fails while I'm sleeping?</h3>
              <p className="text-gray-300">
                Implement error workflows that send urgent notifications to Slack/email. Also set up retry logic with exponential backoff. The workflows in this guide include comprehensive error handling.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">How accurate is the AI sentiment analysis?</h3>
              <p className="text-gray-300">
                Basic keyword matching (shown in this guide) is ~75-80% accurate. For better accuracy, use OpenAI's GPT-3.5 or GPT-4 for sentiment analysis (~95% accurate). It costs ~$0.001 per comment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA */}
      <section className="section-spacing bg-gradient-to-b from-zinc-900 to-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Automate Your Instagram Growth?
            </h2>

            <p className="text-xl text-gray-400 mb-6">
              Get all 4 workflow JSONs, video tutorials, and our Instagram automation blueprint. Start automating today and save 35+ hours per week.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">4 Complete workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">JSON templates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Video tutorials</span>
              </div>
            </div>

            <Link
              href="https://n8n.io"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all px-8 py-4 rounded-xl text-white font-semibold text-lg"
            >
              Master N8N Automation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            <p className="text-gray-500 mt-6 text-sm">
              Save 35+ hours per week with automation
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <span>📚</span>
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/instagram-hashtag-strategy-2025-what-actually-works" className="group">
              <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition-all h-full">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Instagram Hashtag Strategy 2025
                </h3>
                <p className="text-gray-400">
                  What actually works for hashtags in 2025
                </p>
              </div>
            </Link>

            <Link href="/blog/instagram-content-pillars-build-engaged-audience" className="group">
              <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition-all h-full">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Instagram Content Pillars
                </h3>
                <p className="text-gray-400">
                  Build a highly engaged audience with strategic content
                </p>
              </div>
            </Link>

            <Link href="/blog/automation-tools-comparison" className="group">
              <div className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-700 transition-all h-full">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  Automation Tools Comparison
                </h3>
                <p className="text-gray-400">
                  N8N vs Make vs Zapier - Which is best for you?
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
