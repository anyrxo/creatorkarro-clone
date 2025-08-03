'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function InstagramMistakesLessons() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const mistakesAnimation = useScrollAnimation({ threshold: 0.1 })
  const lessonsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    
    <div className="min-h-screen bg-dark">

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up `}
          >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                    <span className="text-pink-400 text-sm font-semibold">LESSONS</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              How I Lost 50K Followers & Built a <span className="text-pink-400">$100K/Month Business</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              The brutal Instagram mistakes that taught me <span className="text-white font-semibold">what actually matters for monetization</span>
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-02-09" readTime="12 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">My Instagram Journey: The Numbers</h2>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="text-3xl font-bold text-pink-400 mb-2">2019</div>
                        <p className="text-gray-400 text-sm">Started at 0</p>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="text-3xl font-bold text-blue-400 mb-2">2021</div>
                        <p className="text-gray-400 text-sm">Peak: 75K followers</p>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="text-3xl font-bold text-red-400 mb-2">2022</div>
                        <p className="text-gray-400 text-sm">Dropped to 25K</p>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="text-3xl font-bold text-green-400 mb-2">2025</div>
                        <p className="text-gray-400 text-sm">$100K/mo revenue</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={mistakesAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The 10 Mistakes That Cost Me Everything (And Made Me Rich)</h2>
          
            <div className="space-y-8"><div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Chasing Vanity Metrics</h3>
                        <p className="text-gray-400 mb-4">I was addicted to follower count instead of engagement quality</p>
                  
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-red-400 font-semibold mb-2">What I did wrong:</h4>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li>• Follow/unfollow tactics</li>
                                        <li>• Generic viral content</li>
                                        <li>• Engagement pods</li>
                                        <li>• Buying shoutouts</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-green-400 font-semibold mb-2">What actually works:</h4>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li>• Niche-specific value</li>
                                        <li>• Building real relationships</li>
                                        <li>• Quality over quantity</li>
                                        <li>• Email list focus</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-sm text-gray-400 mt-4">
                                <span className="text-pink-400 font-semibold">Result:</span> Lost 50K followers but gained 5K buyers
                            </p>
                        </div>
                    </div>
                </div>
            </div><div className="bg-zinc-900 rounded-xl p-6">
            <div className="flex items-start gap-4">
                <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Ignoring Algorithm Changes</h3>
                    <p className="text-gray-400 mb-4">Kept doing what worked in 2020 when it was already 2022</p>
                  
                    <div className="bg-zinc-800 rounded-lg p-6">
                        <h4 className="text-white font-semibold mb-3">Algorithm evolution I missed:</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-pink-400">2020:</span>
                                <span className="text-gray-300">Pretty photos + hashtags = growth</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-pink-400">2021:</span>
                                <span className="text-gray-300">Reels became mandatory</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-pink-400">2022:</span>
                                <span className="text-gray-300">Original content + SEO keywords</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-pink-400">2023:</span>
                                <span className="text-gray-300">DMs and shares &gt; likes</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-pink-400">2025:</span>
                                <span className="text-gray-300">AI content + authenticity balance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className="bg-zinc-900 rounded-xl p-6">
        <div className="flex items-start gap-4">
            <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">No Monetization Strategy</h3>
                <p className="text-gray-400 mb-4">Had 75K followers but no products, no email list, no plan</p>
                  
                <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">The wake-up call:</h4>
                    <div className="bg-zinc-900 rounded p-4 mb-4">
                        <p className="text-gray-300">75,000 followers × $0 per follower = <span className="text-red-400 font-bold">$0</span></p>
                        <p className="text-gray-300 mt-2">25,000 followers × $4 per follower = <span className="text-green-400 font-bold">$100,000</span></p>
                    </div>
                    <p className="text-gray-300">Started treating Instagram as a business, not a popularity contest.</p>
                </div>
            </div>
        </div>
    </div><div className="bg-zinc-900 rounded-xl p-6">
    <div className="flex items-start gap-4">
        <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
        <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">Copying Instead of Creating</h3>
            <p className="text-gray-400 mb-4">Tried to be everyone else instead of being myself</p>
                  
            <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">What I learned:</h4>
                <ul className="space-y-2 text-gray-300">
                    <li>• Your weird is your superpower</li>
                    <li>• Authenticity beats perfection</li>
                    <li>• Personal stories &gt; generic tips</li>
                    <li>• Vulnerability creates connection</li>
                    <li>• Your failures are content gold</li>
                </ul>
            </div>
        </div>
    </div>
</div><div className="bg-zinc-900 rounded-xl p-6">
<div className="flex items-start gap-4">
    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
    <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">Neglecting Community Building</h3>
        <p className="text-gray-400 mb-4">Broadcasting instead of conversing</p>
                  
        <div className="bg-zinc-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3">Community &gt; Audience:</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <p className="text-pink-400 font-semibold mb-2">Before (Audience):</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li>• One-way content</li>
                        <li>• Ignored DMs</li>
                        <li>• No personal touch</li>
                        <li>• Generic responses</li>
                    </ul>
                </div>
                <div>
                    <p className="text-green-400 font-semibold mb-2">After (Community):</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Reply to every DM</li>
                        <li>• Remember names</li>
                        <li>• Share their wins</li>
                        <li>• Create inside jokes</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div><div className="grid md:grid-cols-2 gap-6">
<div className="bg-zinc-900 rounded-xl p-6">
    <div className="flex items-start gap-3">
        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">6</div>
        <div>
            <h4 className="text-lg font-bold text-white mb-2">Posting Without Purpose</h4>
            <p className="text-gray-400 text-sm">Every post should move followers closer to becoming customers</p>
        </div>
    </div>
</div>
              
<div className="bg-zinc-900 rounded-xl p-6">
    <div className="flex items-start gap-3">
        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">7</div>
        <div>
            <h4 className="text-lg font-bold text-white mb-2">Ignoring Analytics</h4>
            <p className="text-gray-400 text-sm">What gets measured gets monetized</p>
        </div>
    </div>
</div>
              
<div className="bg-zinc-900 rounded-xl p-6">
    <div className="flex items-start gap-3">
        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">8</div>
        <div>
            <h4 className="text-lg font-bold text-white mb-2">No Email Capture</h4>
            <p className="text-gray-400 text-sm">Instagram owns your audience until they're on your list</p>
        </div>
    </div>
</div>
              
<div className="bg-zinc-900 rounded-xl p-6">
    <div className="flex items-start gap-3">
        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">9</div>
        <div>
            <h4 className="text-lg font-bold text-white mb-2">Fear of Selling</h4>
            <p className="text-gray-400 text-sm">If you don't sell, you can't serve at scale</p>
        </div>
    </div>
</div>
              
<div className="bg-zinc-900 rounded-xl p-6 md:col-span-2">
    <div className="flex items-start gap-3">
        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">10</div>
        <div>
            <h4 className="text-lg font-bold text-white mb-2">Not Testing and Iterating</h4>
            <p className="text-gray-400 text-sm">Stuck to what wasn't working instead of experimenting relentlessly</p>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>

      <section
        ref={lessonsAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">The 7 Lessons That Changed Everything</h2>
          
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">1. Engagement Rate &gt; Follower Count</h3>
                <p className="text-gray-300">I'd rather have 1,000 true fans who buy than 100,000 ghosts who scroll.</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">2. Every Follower is a Potential Customer</h3>
                <p className="text-gray-300">Start treating your profile like a business from day one. Have products ready.</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">3. The Money is in the DMs</h3>
                <p className="text-gray-300">More deals closed in DMs than any sales page. Be human, be helpful.</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">4. Content is a Means, Not the End</h3>
                <p className="text-gray-300">Your content should lead somewhere. Every post is a step in the customer journey.</p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">5. Test Everything, Assume Nothing</h3>
                <p className="text-gray-300">What works for others might not work for you. Data &gt; opinions.</p>
            </div>
            
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">6. Platform Changes are Opportunities</h3>
                <p className="text-gray-300">While others complain about algorithm changes, early adopters profit.</p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">7. Your Biggest Mistakes Make the Best Content</h3>
                <p className="text-gray-300">This blog post exists because I failed spectacularly. Failure is data.</p>
            </div>
        </div>
    </div>
</section>

      <section
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8">How I Turned It Around</h2>
          
        <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-xl font-bold text-pink-400 mb-6">The 90-Day Revenue System</h3>
            
            <div className="space-y-6">
                <div>
                    <h4 className="text-white font-semibold mb-3">Days 1-30: Foundation</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Defined my ONE core offer</li>
                        <li>• Created lead magnet for email capture</li>
                        <li>• Set up automated DM funnel</li>
                        <li>• Posted value content daily</li>
                    </ul>
                </div>
              
                <div>
                    <h4 className="text-white font-semibold mb-3">Days 31-60: Optimization</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>• A/B tested content formats</li>
                        <li>• Refined messaging based on DMs</li>
                        <li>• Built email nurture sequence</li>
                        <li>• Created social proof content</li>
                    </ul>
                </div>
              
                <div>
                    <h4 className="text-white font-semibold mb-3">Days 61-90: Scale</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Launched high-ticket offer</li>
                        <li>• Implemented referral system</li>
                        <li>• Automated repetitive tasks</li>
                        <li>• Hit first $50K month</li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-6 p-4 bg-zinc-800 rounded">
                <p className="text-green-400 font-semibold">Result: From $0 to $100K/month in 12 months with 25K engaged followers</p>
            </div>
        </div>
    </div>
</section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Learn From My Mistakes, Skip to Success
        </h2>
          
        <p className="text-xl text-gray-400 mb-8">
            Get my complete Instagram monetization playbook
        </p>
          
        <Link
            href="/instagram-money-machine"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Get The Instagram Playbook
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </Link>
    </div>
</section>
</div>
)
}