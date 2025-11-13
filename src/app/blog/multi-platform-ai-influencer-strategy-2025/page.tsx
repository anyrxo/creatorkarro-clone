import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

export const metadata = {
  title: "Multi-Platform AI Influencer Strategy 2025: 500K Combined Followers Playbook | IImagined",
  description: "Complete cross-platform strategy for AI influencers. Content adaptation, platform optimization, repurposing workflows, and growth tactics for Instagram, TikTok, YouTube, and Twitter.",
  keywords: ["multi-platform influencer", "AI influencer strategy", "cross-platform content", "Instagram TikTok YouTube", "content repurposing", "social media growth", "platform optimization"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "AI Influencers",
  openGraph: {
    title: "Multi-Platform AI Influencer Strategy: 500K Followers Playbook",
    description: "Master Instagram, TikTok, YouTube, and Twitter with optimized content adaptation and cross-promotion strategies.",
    url: "https://iimagined.ai/blog/multi-platform-ai-influencer-strategy-2025",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-22T14:00:00.000Z",
    modifiedTime: "2025-01-22T14:00:00.000Z",
    authors: ["Anyro"],
    tags: ["AI Influencers", "Multi-Platform Strategy", "Social Media Growth", "Content Strategy", "Platform Optimization"],
    images: [{
      url: "https://iimagined.ai/images/multi-platform-strategy-og.jpg",
      width: 1200,
      height: 630,
      alt: "Multi-Platform AI Influencer Strategy",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Multi-Platform AI Influencer: 500K Followers Strategy",
    description: "Cross-platform optimization and growth tactics",
    images: [{
      url: "https://iimagined.ai/images/multi-platform-strategy-og.jpg",
      alt: "Multi-Platform Strategy"
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
    canonical: "https://iimagined.ai/blog/multi-platform-ai-influencer-strategy-2025"
  }
}

export default function MultiPlatformStrategy() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "multi-platform-ai-influencer-strategy-2025",
    publishedTime: metadata.openGraph.publishedTime,
    modifiedTime: metadata.openGraph.modifiedTime,
    category: metadata.category || "AI Influencers",
    keywords: metadata.keywords || [],
    image: metadata.openGraph.images[0].url
  })

  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-sm font-semibold">GROWTH STRATEGY</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Multi-Platform AI Influencer: <span className="text-purple-400">The 500K Combined Followers Blueprint</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Master Instagram, TikTok, YouTube, and Twitter with <span className="text-white font-semibold">optimized content adaptation, cross-promotion, and platform-specific growth tactics</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">The Multi-Platform Advantage</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">3.2x</div>
                <p className="text-gray-400 mb-2">Higher Total Reach</p>
                <p className="text-sm text-gray-500">vs single-platform creators</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">2.5x</div>
                <p className="text-gray-400 mb-2">More Revenue Opportunities</p>
                <p className="text-sm text-gray-500">Multiple monetization streams</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">80%</div>
                <p className="text-gray-400 mb-2">Risk Reduction</p>
                <p className="text-sm text-gray-500">Not dependent on one algorithm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Requirements & Best Practices</h2>

          <div className="bg-zinc-900 rounded-xl p-8 mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold">Platform</th>
                    <th className="text-center py-4 px-4 text-gray-400 text-sm font-semibold">Aspect Ratio</th>
                    <th className="text-center py-4 px-4 text-gray-400 text-sm font-semibold">Ideal Length</th>
                    <th className="text-center py-4 px-4 text-gray-400 text-sm font-semibold">Post Frequency</th>
                    <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold">Content Style</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">
                      <div className="text-white font-semibold">Instagram Feed</div>
                      <div className="text-xs text-gray-500">Primary platform</div>
                    </td>
                    <td className="py-4 px-4 text-center text-purple-400 font-mono">1:1 / 4:5</td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm">Single image</td>
                    <td className="py-4 px-4 text-center text-green-400 font-semibold">1-2x/day</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Curated, aesthetic, high-quality</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">
                      <div className="text-white font-semibold">Instagram Reels</div>
                      <div className="text-xs text-gray-500">Algorithm favorite</div>
                    </td>
                    <td className="py-4 px-4 text-center text-purple-400 font-mono">9:16</td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm">15-30 sec</td>
                    <td className="py-4 px-4 text-center text-green-400 font-semibold">3-5x/week</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Trendy, engaging, quick hooks</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">
                      <div className="text-white font-semibold">TikTok</div>
                      <div className="text-xs text-gray-500">Virality engine</div>
                    </td>
                    <td className="py-4 px-4 text-center text-purple-400 font-mono">9:16</td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm">15-60 sec</td>
                    <td className="py-4 px-4 text-center text-green-400 font-semibold">2-3x/day</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Raw, authentic, trend-driven</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">
                      <div className="text-white font-semibold">YouTube Shorts</div>
                      <div className="text-xs text-gray-500">Discovery tool</div>
                    </td>
                    <td className="py-4 px-4 text-center text-purple-400 font-mono">9:16</td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm">15-60 sec</td>
                    <td className="py-4 px-4 text-center text-yellow-400 font-semibold">1x/day</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Educational, entertaining, value-driven</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4">
                      <div className="text-white font-semibold">Twitter/X</div>
                      <div className="text-xs text-gray-500">Community building</div>
                    </td>
                    <td className="py-4 px-4 text-center text-purple-400 font-mono">1:1 / 16:9</td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm">Single image</td>
                    <td className="py-4 px-4 text-center text-green-400 font-semibold">3-5x/day</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Conversational, witty, interactive</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4">
                      <div className="text-white font-semibold">Pinterest</div>
                      <div className="text-xs text-gray-500">Long-tail traffic</div>
                    </td>
                    <td className="py-4 px-4 text-center text-purple-400 font-mono">2:3</td>
                    <td className="py-4 px-4 text-center text-gray-300 text-sm">Single image</td>
                    <td className="py-4 px-4 text-center text-yellow-400 font-semibold">5-10x/day</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Inspirational, aspirational, high-quality</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-8 mb-12">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Platform Priority Recommendation</h3>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-white">Starter (0-10K followers):</span> Instagram + TikTok. These two platforms have the best discovery algorithms for new creators.
            </p>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-white">Growth (10K-50K followers):</span> Instagram + TikTok + Twitter. Add Twitter for community engagement and brand outreach.
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Scale (50K+ followers):</span> All platforms. Add YouTube Shorts for long-term SEO traffic and Pinterest for passive reach.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cross-Platform Content Adaptation</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">The 1-to-20 Repurposing Framework</h3>

              <p className="text-gray-300 mb-6">
                Create one base photoshoot (100 images), then adapt into 20+ unique platform-specific posts. Maximize efficiency without sacrificing quality.
              </p>

              <div className="bg-zinc-800 rounded-lg p-6 mb-6">
                <h4 className="text-white font-semibold mb-4">Example: Fashion Photoshoot Repurposing</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-blue-400 font-semibold mb-2">Base Asset: 100 outfit images (1 shoot)</p>
                    <p className="text-gray-400 text-sm">5 outfits × 20 angles = 100 total images</p>
                  </div>

                  <div className="bg-zinc-900 p-4 rounded">
                    <p className="text-white font-semibold mb-3">Repurpose Into:</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="text-gray-300">
                        <span className="font-semibold text-green-400">Instagram Feed:</span> 10 posts (best 10 images, 1:1 crop)
                      </div>
                      <div className="text-gray-300">
                        <span className="font-semibold text-green-400">Instagram Reels:</span> 3 videos ("outfit transition" compilations)
                      </div>
                      <div className="text-gray-300">
                        <span className="font-semibold text-green-400">TikTok:</span> 5 videos (same Reels + 2 unique trend adaptations)
                      </div>
                      <div className="text-gray-300">
                        <span className="font-semibold text-green-400">YouTube Shorts:</span> 3 videos (top-performing TikToks)
                      </div>
                      <div className="text-gray-300">
                        <span className="font-semibold text-green-400">Twitter:</span> 15 posts (different angles of same outfits)
                      </div>
                      <div className="text-gray-300">
                        <span className="font-semibold text-green-400">Pinterest:</span> 20 pins (2:3 crop, keyword-optimized)
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-700">
                    <p className="text-green-400 font-semibold">Total Output: 56 pieces of content from 1 photoshoot</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-green-400 font-semibold mb-3">Time Savings</h4>
                <p className="text-gray-300 text-sm">
                  <span className="font-semibold text-white">Manual approach:</span> 56 posts × 20 min each = 18.7 hours<br />
                  <span className="font-semibold text-white">Repurposing approach:</span> 4 hours shoot + 3 hours editing/adaptation = 7 hours<br />
                  <span className="font-semibold text-green-400">Savings: 11.7 hours (62% time reduction)</span>
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Platform-Specific Optimization</h3>

              <div className="space-y-6">
                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg w-12 h-12 flex items-center justify-center text-white font-bold">IG</div>
                    <h4 className="text-xl font-bold text-white">Instagram Optimization</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Captions:</p>
                      <p className="text-gray-400">150-200 characters. Ask engaging question. Include 10-15 hashtags (mix of big + niche).</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Best Times:</p>
                      <p className="text-gray-400">9 AM, 12 PM, 7 PM EST. Weekdays perform better than weekends.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Content Strategy:</p>
                      <p className="text-gray-400">70% lifestyle/aesthetic, 20% educational, 10% promotional. Reels get 3x more reach than photos.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-12 h-12 flex items-center justify-center text-white font-bold">TT</div>
                    <h4 className="text-xl font-bold text-white">TikTok Optimization</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Hook:</p>
                      <p className="text-gray-400">First 3 seconds determine success. Use text overlay with bold claim or question.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Sounds:</p>
                      <p className="text-gray-400">Use trending sounds (update weekly). Check TikTok Creative Center for top sounds in your niche.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Hashtags:</p>
                      <p className="text-gray-400">3-5 max. Mix trending + niche. #FYP doesn't actually help despite myths.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg w-12 h-12 flex items-center justify-center text-white font-bold">YT</div>
                    <h4 className="text-xl font-bold text-white">YouTube Shorts Optimization</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Titles:</p>
                      <p className="text-gray-400">Keyword-rich, under 50 characters. Include numbers ("5 Ways to...") for higher CTR.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Thumbnails:</p>
                      <p className="text-gray-400">Not visible in Shorts feed, but important for search/suggested. Use face close-up with text.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">CTA:</p>
                      <p className="text-gray-400">End with "Subscribe for more" or "Follow on Instagram @handle" to funnel traffic.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg w-12 h-12 flex items-center justify-center text-white font-bold">X</div>
                    <h4 className="text-xl font-bold text-white">Twitter/X Optimization</h4>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Format:</p>
                      <p className="text-gray-400">Short punchy text (under 280 chars) + image. Threads (3-5 tweets) get 2x engagement.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Engagement:</p>
                      <p className="text-gray-400">Reply to comments within 1 hour. Quote-retweet fan content. Be conversational, not promotional.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Frequency:</p>
                      <p className="text-gray-400">3-5x/day minimum. Twitter favors active accounts. Use scheduling tools to maintain consistency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Audience Building Strategy Per Platform</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-xl font-bold text-purple-400 mb-6">Instagram Growth Tactics</h3>

              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Reels Are King</h4>
                  <p className="text-gray-400 text-sm">Reels get 30-50% of all Instagram impressions. Post 3-5 Reels/week for maximum growth. Copy trending formats from Explore page.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Collaboration Strategy</h4>
                  <p className="text-gray-400 text-sm">Use Instagram's Collab feature to co-post with similar-sized accounts. Instantly exposes you to their audience. Aim for 2-3 collabs/month.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Story Engagement Loops</h4>
                  <p className="text-gray-400 text-sm">Post 5-10 Stories daily with polls, questions, quizzes. High story engagement signals Instagram to boost your feed posts.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Strategic Hashtags</h4>
                  <p className="text-gray-400 text-sm">Use hashtags with 10K-500K posts (not millions). Create 5 hashtag sets, rotate them. Track which sets drive most discovery.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-xl font-bold text-blue-400 mb-6">TikTok Growth Tactics</h3>

              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Trend Jacking</h4>
                  <p className="text-gray-400 text-sm">Jump on trends within 48 hours of emergence. Check TikTok Creative Center daily for trending sounds/hashtags in your niche.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">3-Second Hook Rule</h4>
                  <p className="text-gray-400 text-sm">If viewers don't stay 3+ seconds, TikTok kills reach. Start with bold statement or question. No intros!</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Comment Reply Videos</h4>
                  <p className="text-gray-400 text-sm">Reply to top comments with new videos using TikTok's "Reply" feature. These often outperform regular posts.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Niche Down Hard</h4>
                  <p className="text-gray-400 text-sm">TikTok algorithm favors consistency. Post same type of content 20-30x before pivoting. Confusing content kills growth.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-xl font-bold text-red-400 mb-6">YouTube Shorts Growth Tactics</h3>

              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">SEO Optimization</h4>
                  <p className="text-gray-400 text-sm">YouTube Shorts show in regular search. Use keyword-rich titles/descriptions. Research with YouTube autocomplete.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Call to Subscribe</h4>
                  <p className="text-gray-400 text-sm">Shorts viewers convert to long-form subscribers at 10x rate vs ads. Always CTA to subscribe in first 5 seconds.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Consistency Matters</h4>
                  <p className="text-gray-400 text-sm">Post 1 Short daily minimum. YouTube heavily promotes channels with upload consistency. Use scheduling.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Funnel to Long-Form</h4>
                  <p className="text-gray-400 text-sm">Once at 10K+ subs from Shorts, pivot to long-form content for higher monetization. Shorts build audience, long-form builds revenue.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Twitter/X Growth Tactics</h3>

              <div className="space-y-4">
                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Reply Guy Strategy</h4>
                  <p className="text-gray-400 text-sm">Reply to tweets from larger accounts (50K+ followers) in your niche. Witty, valuable replies get seen by their audience.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Thread Mastery</h4>
                  <p className="text-gray-400 text-sm">Write 1 educational thread/week. Threads get 10x more impressions than single tweets. End with CTA to follow.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Engagement Farming</h4>
                  <p className="text-gray-400 text-sm">Tweet "controversial" takes or questions that drive replies. Replies = engagement = algorithm boost. Stay authentic to brand.</p>
                </div>

                <div className="bg-zinc-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Cross-Platform Teasers</h4>
                  <p className="text-gray-400 text-sm">"New post on Instagram 📸" with preview image. Drive followers to primary platform while maintaining Twitter presence.</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Cross-Promotion Strategies</h2>

          <div className="bg-zinc-900 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-green-400 mb-6">The Platform Funnel System</h3>

            <p className="text-gray-300 mb-6">
              Strategic cross-promotion converts casual followers on one platform into super-fans following you everywhere.
            </p>

            <div className="space-y-6">
              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">Entry Point: TikTok/Instagram Reels</h4>
                <p className="text-gray-300 mb-3 text-sm">These platforms have best discoverability. Most new followers start here.</p>
                <div className="bg-zinc-900 p-4 rounded">
                  <p className="text-blue-400 font-semibold mb-2">Funnel Strategy:</p>
                  <p className="text-gray-400 text-sm">
                    Add CTA in video: "Follow my Instagram for daily content @handle" OR "More tips on Twitter @handle"<br />
                    Put links in bio to other platforms<br />
                    Comment pinned post: "I'm most active on [primary platform]!"
                  </p>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">Retention: Instagram Feed</h4>
                <p className="text-gray-300 mb-3 text-sm">Feed posts build deeper connection. Move Reels/TikTok followers here.</p>
                <div className="bg-zinc-900 p-4 rounded">
                  <p className="text-blue-400 font-semibold mb-2">Funnel Strategy:</p>
                  <p className="text-gray-400 text-sm">
                    Stories: "Just posted on TikTok! Go watch and like 💕 [swipe up]"<br />
                    Feed captions: "Saw this on TikTok? Follow there for more @tiktokhandle"<br />
                    Bio: Linktree with all platforms listed
                  </p>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">Monetization: Twitter + Email List</h4>
                <p className="text-gray-300 mb-3 text-sm">Direct communication channels for brand deals and product launches.</p>
                <div className="bg-zinc-900 p-4 rounded">
                  <p className="text-blue-400 font-semibold mb-2">Funnel Strategy:</p>
                  <p className="text-gray-400 text-sm">
                    Instagram/TikTok: "Join my exclusive newsletter for BTS content [link]"<br />
                    Twitter: "DM for brand collabs" + email in bio<br />
                    Offer exclusive content/giveaways for multi-platform followers
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-900/30 border border-green-500/30 rounded-lg p-6">
              <h4 className="text-green-400 font-semibold mb-3">Multi-Platform Incentive</h4>
              <p className="text-gray-300 text-sm">
                Run monthly giveaway: "Follow me on Instagram, TikTok, and Twitter for 3x entries!" This tactic can convert 20-30% of single-platform followers to multi-platform fans.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Case Study: 500K Combined Followers</h2>

          <div className="bg-zinc-900 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">
                NX
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">@NovaCross - AI Fashion & Lifestyle Influencer</h3>
                <p className="text-gray-400">500K+ combined followers across 4 platforms</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-blue-400 font-semibold mb-4">Platform Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-zinc-900 rounded">
                    <span className="text-white font-semibold">Instagram</span>
                    <span className="text-purple-400 font-bold">200K followers</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-900 rounded">
                    <span className="text-white font-semibold">TikTok</span>
                    <span className="text-blue-400 font-bold">150K followers</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-900 rounded">
                    <span className="text-white font-semibold">YouTube</span>
                    <span className="text-red-400 font-bold">100K subscribers</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-900 rounded">
                    <span className="text-white font-semibold">Twitter</span>
                    <span className="text-cyan-400 font-bold">50K followers</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-green-400 font-semibold mb-4">Revenue Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-zinc-900 rounded">
                    <span className="text-gray-300">Brand deals (IG + TikTok)</span>
                    <span className="text-green-400 font-semibold">$18K/month</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-900 rounded">
                    <span className="text-gray-300">YouTube ads</span>
                    <span className="text-green-400 font-semibold">$3.2K/month</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-900 rounded">
                    <span className="text-gray-300">Affiliate (all platforms)</span>
                    <span className="text-green-400 font-semibold">$4.5K/month</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-zinc-900 rounded">
                    <span className="text-gray-300">Digital products</span>
                    <span className="text-green-400 font-semibold">$2.8K/month</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-900 rounded border-t-2 border-green-500">
                    <span className="text-white font-bold">Total</span>
                    <span className="text-green-400 font-bold text-xl">$28.5K/month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-lg p-6 mb-6">
              <h4 className="text-white font-semibold mb-4">Growth Timeline</h4>
              <div className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <span className="text-purple-400 font-semibold w-20">Month 1-3:</span>
                  <span className="text-gray-300">Started Instagram only. Hit 10K through Reels strategy (3-5x/week).</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-purple-400 font-semibold w-20">Month 4-6:</span>
                  <span className="text-gray-300">Added TikTok, repurposed Reels. Grew to 25K IG, 20K TikTok. 45K combined.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-purple-400 font-semibold w-20">Month 7-9:</span>
                  <span className="text-gray-300">Added Twitter for community + brand outreach. 50K IG, 45K TikTok, 12K Twitter.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-purple-400 font-semibold w-20">Month 10-12:</span>
                  <span className="text-gray-300">Added YouTube Shorts. Hit 100K IG milestone. 107K combined. First $10K month revenue.</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-purple-400 font-semibold w-20">Month 13-18:</span>
                  <span className="text-gray-300">Scaled all platforms. Hit 500K combined. Revenue plateaued at $25-30K/month.</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
              <h4 className="text-blue-400 font-semibold mb-3">Creator's Key Insight</h4>
              <p className="text-gray-300 italic text-sm">
                "Multi-platform saved my business twice. When Instagram engagement tanked (algorithm update), TikTok kept me afloat. When TikTok threatened US ban, I already had 200K Instagram followers as backup. Never depend on one platform - it's business suicide. Plus, brands pay 30-50% more for multi-platform packages."
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <Link
              href="/ai-influencers"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:scale-105 transition-transform"
            >
              Master Multi-Platform Strategy
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Should I start with one platform or multiple?</h3>
              <p className="text-gray-400">
                Start with 1-2 platforms max (Instagram + TikTok recommended). Master content creation and posting rhythm on these before expanding. Trying to launch on 4 platforms simultaneously leads to burnout and low-quality content. Add new platforms once you hit 10K followers on primary.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How do I adapt content without it feeling repetitive?</h3>
              <p className="text-gray-400">
                Change captions, crop ratios, and presentation style. Same image can be: aesthetic post (IG), trend adaptation (TikTok), inspirational pin (Pinterest), conversational tweet (Twitter). Audiences rarely follow you on all platforms, so 90%+ won't notice repurposing.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Which platform has the best growth potential in 2025?</h3>
              <p className="text-gray-400">
                TikTok for raw discovery, Instagram Reels for monetization, YouTube Shorts for longevity. TikTok can take you 0-100K fastest (3-6 months), but Instagram has better brand deal opportunities. YouTube builds long-term passive traffic. Ideal: Start TikTok, monetize Instagram, compound YouTube.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How much time does multi-platform management take?</h3>
              <p className="text-gray-400">
                With automation and repurposing: 8-10 hours/month. Break down: 4 hours content creation, 3 hours adaptation/scheduling, 2 hours engagement/analytics, 1 hour strategy. Use tools like Buffer, Planable, or N8N for cross-platform scheduling. Manual approach would take 40+ hours/month.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do I need different content strategies per platform?</h3>
              <p className="text-gray-400">
                Yes! Instagram favors aesthetic/aspirational, TikTok wants entertaining/trend-focused, YouTube values educational/valuable, Twitter prefers conversational/relatable. Same photo shoot can serve all, but framing changes. Example: Beach photo = "Living my best life" (IG), "Beach day outfit check!" (TikTok), "Vitamin Sea 🌊" (Twitter).
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I automate cross-platform posting?</h3>
              <p className="text-gray-400">
                Partially. Instagram, Twitter, Pinterest support auto-posting via APIs. TikTok requires manual posting (API limited). YouTube can be automated. Best approach: Schedule Instagram/Twitter/Pinterest, manually post TikTok during high-traffic hours (6-10 PM). Takes 5 min/day.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What metrics should I track per platform?</h3>
              <p className="text-gray-400">
                Instagram: Engagement rate, reach, saves. TikTok: Watch time, shares, FYP appearances. YouTube: AVD (average view duration), CTR, subscriber conversion. Twitter: Impressions, engagement rate, profile visits. Track weekly, compare to previous period. Focus on engagement over vanity metrics (follower count).
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How do I handle platform-specific trends across all channels?</h3>
              <p className="text-gray-400">
                Don't force all trends everywhere. TikTok trends stay on TikTok (unless they cross over). Instagram Reels trends are usually 1-2 weeks behind TikTok. YouTube Shorts don't need trends - focus on evergreen searchable content. Twitter has its own meme culture. Let each platform breathe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
