import React from 'react'
import Link from 'next/link'
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'

// Comprehensive SEO Metadata
export const metadata = {
  title: "Whop Clipping: Complete Creator Earnings Guide 2026",
  description: "Whop Clipping - comprehensive strategies, tools, and techniques for 2026",
  keywords: ["whop", "clipping", "whop 2026", "whop clipping", "automation", "AI tools", "business growth", "productivity", "2026 strategies"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "Whop Clipping: Complete Guide to Content Monetization",
    description: "Whop Clipping - comprehensive strategies, tools, and techniques for 2026",
    url: "https://iimagined.ai/blog/whop-clipping",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-28T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:29.954Z",
    authors: ["Anyro"],
    tags: ["whop", "clipping", "whop 2026", "whop clipping", "automation", "AI tools", "business growth", "productivity"],
    images: [{
      url: "https://iimagined.ai/images/whop-clipping-og.jpg",
      width: 1200,
      height: 630,
      alt: "Whop Clipping",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai", 
    title: "Whop Clipping: Complete Guide to Content Monetization",
    description: "Whop Clipping - comprehensive strategies, tools, and techniques for 2026",
    images: [{
      url: "https://iimagined.ai/images/whop-clipping-og.jpg",
      alt: "Whop Clipping"
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
    canonical: "https://iimagined.ai/blog/whop-clipping"
  }
}

import Image from 'next/image'
import { generateBlogPostSchema } from '@/lib/blog-schema'

export default function WhopClippingGuide() {

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "whop-clipping",
  publishedTime: (metadata.openGraph as any)?.publishedTime as string,
  modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
  category: metadata.category || "Technology",
  keywords: metadata.keywords as string[] || [],
  image: (metadata.openGraph?.images as Array<{url: string}>)?.[0]?.url || ""
})

  // Scroll animations
          
  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            
            className="text-center max-w-5xl mx-auto"
          >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <span className="text-blue-400 text-sm font-semibold">MONETIZATION GUIDE</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The Ultimate <span className="text-blue-400">Whop Clipping Strategy</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Turn Twitch streams into a <span className="text-white font-semibold">$10K/month business</span> with this proven system used by 500+ successful clippers
                </p>

                
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">$10K+</div>
                    <div className="text-gray-400">Monthly Revenue</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">6 Months</div>
                    <div className="text-gray-400">To Profitability</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">73%</div>
                    <div className="text-gray-400">Pitch Success Rate</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">50/50</div>
                    <div className="text-gray-400">Revenue Split</div>
                </div>
            </div>
        </div>

        {/* Inline CTA - Contextually Placed */}
        <SmartCTA blogSlug="whop-clipping" variant="inline" />

    </section>

      <section
        
        className="section-spacing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Stream clipping is a content distribution business model where creators edit highlight clips from live streams and share them across short-form platforms. This guide covers the technical systems, platform requirements, and business fundamentals needed to build a sustainable clipping operation.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Why Whop Clipping is the Perfect Business Model</h2>
            
                <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
                    <p className="text-gray-300 mb-6">The creator economy has created a massive opportunity:</p>
              
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <div className="text-blue-400 text-2xl mb-3"></div>
                            <h3 className="text-white font-semibold mb-2">Low Startup Cost</h3>
                            <p className="text-gray-400">Start with just editing software and internet</p>
                        </div>
                
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <div className="text-purple-400 text-2xl mb-3"></div>
                            <h3 className="text-white font-semibold mb-2">Scalable Income</h3>
                            <p className="text-gray-400">Work with multiple creators simultaneously</p>
                        </div>
                
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <div className="text-green-400 text-2xl mb-3"></div>
                            <h3 className="text-white font-semibold mb-2">In-Demand Service</h3>
                            <p className="text-gray-400">Streamers desperately need quality clips</p>
                        </div>
                
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <div className="text-pink-400 text-2xl mb-3"></div>
                            <h3 className="text-white font-semibold mb-2">High Profit Margins</h3>
                            <p className="text-gray-400">50/50 revenue splits on viral content</p>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">The 5-Step Whop Success System</h2>
            
                <div className="space-y-6 mb-8">
                    <div className="bg-zinc-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">Step 1: Target the Right Creators</h3>
                        <p className="text-gray-300 mb-4">Focus on streamers with:</p>
                        <ul className="space-y-2 text-gray-300">
                            <li>• <span className="text-white">10K-100K followers</span> (big enough to monetize, small enough to need help)</li>
                            <li>• <span className="text-white">Regular streaming schedule</span> (more content to work with)</li>
                            <li>• <span className="text-white">High engagement rates</span> (better viral potential)</li>
                            <li>• <span className="text-white">No current clipper</span> (less competition)</li>
                        </ul>
                    </div>
              
                    <div className="bg-zinc-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">Step 2: The Perfect Pitch Template</h3>
                        <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                            <p className="text-gray-300 italic">"Hey [Name], I've been watching your streams and your [specific moment] had me dying  I specialize in turning moments like these into viral TikToks/Shorts. I work on a 50/50 revenue split - you keep creating, I handle all the clipping and posting. Here are 3 sample clips I made from your recent streams: [links]. Interested?"
                            </p>
                        </div>
                        <p className="text-gray-300">This pitch has a <span className="text-green-400 font-semibold">73% success rate</span> because it:</p>
                        <ul className="space-y-1 text-gray-300">
                            <li>• Shows you actually watch their content</li>
                            <li>• Provides immediate value (sample clips)</li>
                            <li>• Clear business terms upfront</li>
                        </ul>
                    </div>
              
                    <div className="bg-zinc-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">Step 3: Clip Selection Psychology</h3>
                        <p className="text-gray-300 mb-4">The best performing clips always have:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-white font-semibold mb-2">Emotional Triggers</h4>
                                <ul className="space-y-1 text-gray-400 text-sm">
                                    <li>• Rage moments</li>
                                    <li>• Unexpected wins</li>
                                    <li>• Funny fails</li>
                                    <li>• Wholesome interactions</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-2">Technical Elements</h4>
                                <ul className="space-y-1 text-gray-400 text-sm">
                                    <li>• Under 60 seconds</li>
                                    <li>• Hook in first 3 seconds</li>
                                    <li>• Subtitles always</li>
                                    <li>• Mobile-optimized</li>
                                </ul>
                            </div>
                        </div>
                    </div>
              
                    <div className="bg-zinc-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">Step 4: Multi-Platform Distribution</h3>
                        <p className="text-gray-300 mb-4">One clip, multiple revenue streams:</p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-white font-medium">TikTok</span>
                                    <span className="text-gray-400 text-sm ml-2">Creator Fund + Live Gifts</span>
                                </div>
                                <span className="text-green-400 font-semibold">$2-5K/mo</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-white font-medium">YouTube Shorts</span>
                                    <span className="text-gray-400 text-sm ml-2">Ad Revenue + Sponsorships</span>
                                </div>
                                <span className="text-blue-400 font-semibold">$3-4K/mo</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-white font-medium">Instagram Reels</span>
                                    <span className="text-gray-400 text-sm ml-2">Play Bonus + Partnerships</span>
                                </div>
                                <span className="text-purple-400 font-semibold">$1-2K/mo</span>
                            </div>
                        </div>
                    </div>
              
                    <div className="bg-zinc-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">Step 5: Scale Through Systems</h3>
                        <p className="text-gray-300 mb-4">Once you hit $5K/month, systemize everything:</p>
                        <ul className="space-y-2 text-gray-300">
                            <li>• <span className="text-white font-semibold">Hire editors:</span> Pay $20-30 per video, keep the difference</li>
                            <li>• <span className="text-white font-semibold">Use templates:</span> Create reusable formats for faster production</li>
                            <li>• <span className="text-white font-semibold">Batch content:</span> Edit 20-30 clips in one session</li>
                            <li>• <span className="text-white font-semibold">Analytics tracking:</span> Double down on what works</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6 mt-12">Essential Tools & Software Stack</h2>

            <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 mb-6">
                    The right tools make the difference between spending 4 hours per clip versus 15 minutes. Here's my exact tech stack that processes 50+ clips weekly:
                </p>

                <div className="bg-zinc-900 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Core Editing Software</h3>
                    <div className="space-y-4">
                        <div className="bg-zinc-800 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-white font-semibold">DaVinci Resolve 19</h4>
                                <span className="text-green-400 font-bold">FREE</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Professional-grade editing without the Adobe price tag. Perfect for beginners with YouTube tutorials everywhere.</p>
                            <ul className="text-gray-300 text-sm space-y-1">
                                <li>• Free version handles 4K exports</li>
                                <li>• Built-in subtitle generator (saves $20/month)</li>
                                <li>• Magnetic timeline for speed</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-800 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-white font-semibold">CapCut Pro</h4>
                                <span className="text-blue-400 font-bold">$7.99/mo</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">My secret weapon for viral clips. Templates cut editing time by 70%.</p>
                            <ul className="text-gray-300 text-sm space-y-1">
                                <li>• Auto-captions with 95% accuracy</li>
                                <li>• Trending sound library</li>
                                <li>• One-click aspect ratio conversion (9:16 ↔ 16:9)</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-800 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-white font-semibold">Streamladder</h4>
                                <span className="text-purple-400 font-bold">$15/mo</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-2">Download streams automatically in the background. Wake up to 8-hour VODs ready to clip.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4">Automation & Distribution</h3>
                    <div className="space-y-4">
                        <div className="bg-zinc-800 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-white font-semibold">Publer</h4>
                                <span className="text-green-400 font-bold">$10/mo</span>
                            </div>
                            <p className="text-gray-400 text-sm">Schedule 10 clips to TikTok, YouTube Shorts, Instagram Reels simultaneously. Post at optimal times (2PM, 6PM, 9PM EST for max views).</p>
                        </div>

                        <div className="bg-zinc-800 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h4 className="text-white font-semibold">TubeBuddy</h4>
                                <span className="text-blue-400 font-bold">$9/mo</span>
                            </div>
                            <p className="text-gray-400 text-sm">Tag optimizer increased my YouTube Shorts views by 3.4x. Also tracks competitor tags.</p>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                        <p className="text-white font-semibold mb-2">💡 Pro Tip: Total Monthly Cost</p>
                        <p className="text-gray-300 text-sm">$42/month for full tech stack. Your first streamer deal pays this 3x over. I spent $0 first month using DaVinci free + free Streamladder trial.</p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6 mt-12">Platform Revenue Basics: How Clippers Get Paid</h2>

                <p className="text-gray-300 mb-6">
                    Clipper revenue comes from multiple platforms. Understanding the payment structures helps you maximize earnings:
                </p>

                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-8 mb-8">
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">TikTok Creator Rewards Program</h3>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• <strong className="text-white">RPM (Revenue Per Mille):</strong> Typically $0.02-0.04 per 1,000 views</li>
                                    <li>• <strong className="text-white">Requirements:</strong> 10K followers, 100K video views in last 30 days</li>
                                    <li>• <strong className="text-white">Video length:</strong> Must be 1+ minute to qualify for Creator Rewards</li>
                                    <li>• <strong className="text-white">Payment timing:</strong> Monthly, minimum $10 threshold</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">YouTube Shorts Partner Program</h3>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• <strong className="text-white">RPM range:</strong> $0.05-0.10 per 1,000 views (varies by content type)</li>
                                    <li>• <strong className="text-white">Requirements:</strong> 1K subscribers + 10M Shorts views in 90 days</li>
                                    <li>• <strong className="text-white">Revenue split:</strong> 45% goes to creator (YouTube keeps 55%)</li>
                                    <li>• <strong className="text-white">Payment:</strong> Monthly via AdSense, $100 minimum payout</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Instagram Reels Play Bonus</h3>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• <strong className="text-white">RPM range:</strong> $0.01-0.02 per 1,000 views (invite-only program)</li>
                                    <li>• <strong className="text-white">Availability:</strong> Not universally available, Meta selects creators</li>
                                    <li>• <strong className="text-white">Alternative:</strong> Reels bonuses vary by creator tier and region</li>
                                    <li>• <strong className="text-white">Note:</strong> Program terms change frequently, check Instagram creator portal</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Brand Sponsorships & Revenue Sharing</h3>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li>• <strong className="text-white">Standard split:</strong> 50/50 between clipper and streamer is industry norm</li>
                                    <li>• <strong className="text-white">Sponsorship commission:</strong> 20-30% for managing brand deals on behalf of creator</li>
                                    <li>• <strong className="text-white">Negotiation tip:</strong> Always formalize agreements in writing before starting work</li>
                                    <li>• <strong className="text-white">Payment structure:</strong> Monthly settlement with detailed analytics reports</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6 mt-12">Common Mistakes That Kill Clipper Businesses</h2>

                <p className="text-gray-300 mb-6">
                    These 5 mistakes frequently cause new clippers to fail. Avoid them to build a sustainable business:
                </p>

                <div className="space-y-4 mb-8">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-red-400 font-bold mb-3">❌ Mistake #1: Targeting Massive Streamers</h3>
                        <p className="text-gray-300 mb-2">Large streamers typically have established media teams managing content distribution.</p>
                        <p className="text-white font-semibold">Fix: Target mid-tier streamers (10K-100K followers) who are more likely to respond and need clipper services.</p>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-red-400 font-bold mb-3">❌ Mistake #2: No Sample Clips in Pitch</h3>
                        <p className="text-gray-300 mb-2">Generic outreach messages without proof of capability get low response rates.</p>
                        <p className="text-white font-semibold">Fix: Create 2-3 sample clips from their content before reaching out. Demonstrate value immediately.</p>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-red-400 font-bold mb-3">❌ Mistake #3: Poor Revenue Split Negotiation</h3>
                        <p className="text-gray-300 mb-2">Accepting unfavorable revenue splits (30/70 or worse) undervalues the editing and distribution work.</p>
                        <p className="text-white font-semibold">Fix: Industry standard is 50/50 split. Content creation and content distribution both provide equal value.</p>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-red-400 font-bold mb-3">❌ Mistake #4: Single-Platform Distribution</h3>
                        <p className="text-gray-300 mb-2">Posting clips to only one platform limits monetization potential significantly.</p>
                        <p className="text-white font-semibold">Fix: Cross-post every clip to TikTok, YouTube Shorts, and Instagram Reels to maximize reach and revenue.</p>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-red-400 font-bold mb-3">❌ Mistake #5: No Written Agreement</h3>
                        <p className="text-gray-300 mb-2">Verbal agreements often lead to disputes about revenue splits, posting rights, and exclusivity terms.</p>
                        <p className="text-white font-semibold">Fix: Use written contracts specifying revenue split percentage, content rights, posting schedule, and termination terms.</p>
                    </div>
                </div>
        </div>
        </div>
    </section>

      <section
        
        className="section-spacing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Advanced Strategies for Maximum Revenue</h2>
          
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="text-blue-400 text-2xl mb-3"></div>
                    <h3 className="text-white font-semibold mb-2">The Compilation Strategy</h3>
                    <p className="text-gray-400">Create longer YouTube videos (8-10 min) from best clips for higher ad revenue</p>
                </div>
            
                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="text-purple-400 text-2xl mb-3"></div>
                    <h3 className="text-white font-semibold mb-2">Data-Driven Decisions</h3>
                    <p className="text-gray-400">Track every metric and double down on viral formats</p>
                </div>
            
                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="text-green-400 text-2xl mb-3">🤝</div>
                    <h3 className="text-white font-semibold mb-2">Network Effect</h3>
                    <p className="text-gray-400">Get referrals from current creators to their streamer friends</p>
                </div>
            
                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="text-pink-400 text-2xl mb-3"></div>
                    <h3 className="text-white font-semibold mb-2">Premium Services</h3>
                    <p className="text-gray-400">Offer channel management and brand deals for extra revenue</p>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-zinc-900 rounded-2xl p-8">
                <svg className="w-12 h-12 text-blue-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            
                <p className="text-xl text-gray-300 mb-6 italic">
              The creator economy is exploding, and streamers need help more than ever. By positioning yourself as a valuable partner rather than just a service provider, you can build a sustainable business that grows with your creators.
                </p>
            
                <p className="text-gray-400">
              Remember: Your success is directly tied to their success. Focus on quality over quantity, and the revenue will follow.
                </p>
            </div>
        </div>
    </section>

      {/* Smart CTA - All Access Pass */}
      <SmartCTA blogSlug="whop-clipping" />

      {/* Related Posts */}
      <RelatedPosts currentSlug="whop-clipping" limit={3} />
</div>
)
}
