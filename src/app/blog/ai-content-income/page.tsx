'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function AIContentIncome() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const breakdownAnimation = useScrollAnimation({ threshold: 0.1 })
  const strategyAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    
    <div className="min-h-screen bg-dark">

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up `}
          >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                    <span className="text-green-400 text-sm font-semibold">INCOME REPORT</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              How I Make <span className="text-green-400">$5K+ Per Month</span> with AI-Generated Content
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Full breakdown of my <span className="text-white font-semibold">AI content monetization strategy</span> and income streams
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-02-15" readTime="13 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">$5,847</div>
                    <div className="text-gray-400">Last Month</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">3 Hours</div>
                    <div className="text-gray-400">Daily Work</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">7 Streams</div>
                    <div className="text-gray-400">Income Sources</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">$65/hr</div>
                    <div className="text-gray-400">Effective Rate</div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={breakdownAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">February 2025 Income Breakdown</h2>
          
            <div className="space-y-4 mb-12">
                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">AI Art Commissions</h3>
                            <p className="text-gray-400 text-sm">Custom AI artwork for businesses</p>
                        </div>
                        <div className="text-2xl font-bold text-green-400">$2,100</div>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3">
                        <div className="bg-green-400 h-3 rounded-full" style={{width: '36%'}}></div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Stock Photo Sales</h3>
                            <p className="text-gray-400 text-sm">AI-generated stock photography</p>
                        </div>
                        <div className="text-2xl font-bold text-blue-400">$1,450</div>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3">
                        <div className="bg-blue-400 h-3 rounded-full" style={{width: '25%'}}></div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Content Templates</h3>
                            <p className="text-gray-400 text-sm">Social media templates with AI graphics</p>
                        </div>
                        <div className="text-2xl font-bold text-purple-400">$897</div>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3">
                        <div className="bg-purple-400 h-3 rounded-full" style={{width: '15%'}}></div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">YouTube Ad Revenue</h3>
                            <p className="text-gray-400 text-sm">AI content creation tutorials</p>
                        </div>
                        <div className="text-2xl font-bold text-pink-400">$650</div>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3">
                        <div className="bg-pink-400 h-3 rounded-full" style={{width: '11%'}}></div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">AI Writing Services</h3>
                            <p className="text-gray-400 text-sm">Blog posts and sales copy</p>
                        </div>
                        <div className="text-2xl font-bold text-orange-400">$450</div>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3">
                        <div className="bg-orange-400 h-3 rounded-full" style={{width: '8%'}}></div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Affiliate Commissions</h3>
                            <p className="text-gray-400 text-sm">AI tool recommendations</p>
                        </div>
                        <div className="text-2xl font-bold text-yellow-400">$200</div>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3">
                        <div className="bg-yellow-400 h-3 rounded-full" style={{width: '3%'}}></div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h3 className="text-xl font-semibold text-white">Course Pre-Sales</h3>
                            <p className="text-gray-400 text-sm">AI Content Mastery course</p>
                        </div>
                        <div className="text-2xl font-bold text-red-400">$100</div>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-3">
                        <div className="bg-red-400 h-3 rounded-full" style={{width: '2%'}}></div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Total February Income</h3>
                <div className="text-5xl font-bold text-green-400">$5,847</div>
                <p className="text-gray-400 mt-2">93 hours worked • $62.87/hour</p>
            </div>
        </div>
    </section>

      <section
        ref={strategyAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">My AI Content Creation Stack</h2>
          
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">AI Art Generation</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between text-gray-300">
                            <span>Midjourney</span>
                            <span className="text-gray-500">$30/mo</span>
                        </li>
                        <li className="flex justify-between text-gray-300">
                            <span>ComfyUI</span>
                            <span className="text-gray-500">Free</span>
                        </li>
                        <li className="flex justify-between text-gray-300">
                            <span>DALL-E 3</span>
                            <span className="text-gray-500">$20/mo</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">AI Writing Tools</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between text-gray-300">
                            <span>ChatGPT Plus</span>
                            <span className="text-gray-500">$20/mo</span>
                        </li>
                        <li className="flex justify-between text-gray-300">
                            <span>Claude Pro</span>
                            <span className="text-gray-500">$20/mo</span>
                        </li>
                        <li className="flex justify-between text-gray-300">
                            <span>Jasper AI</span>
                            <span className="text-gray-500">$49/mo</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Automation Tools</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between text-gray-300">
                            <span>N8N</span>
                            <span className="text-gray-500">Self-hosted</span>
                        </li>
                        <li className="flex justify-between text-gray-300">
                            <span>Make.com</span>
                            <span className="text-gray-500">$29/mo</span>
                        </li>
                        <li className="flex justify-between text-gray-300">
                            <span>Buffer</span>
                            <span className="text-gray-500">$15/mo</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Other Tools</h3>
                    <ul className="space-y-3">
                        <li className="flex justify-between text-gray-300">
                            <span>Canva Pro</span>
                            <span className="text-gray-500">$12/mo</span>
                        </li>
                        <li className="flex justify-between text-gray-300">
                            <span>Adobe Creative</span>
                            <span className="text-gray-500">$55/mo</span>
                        </li>
                        <li className="flex justify-between text-gray-300">
                            <span>Hosting</span>
                            <span className="text-gray-500">$20/mo</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4 text-center">Total Monthly Expenses</h3>
                <div className="text-3xl font-bold text-red-400 text-center mb-4">$290</div>
                <div className="text-center">
                    <p className="text-gray-400 mb-2">Net Profit: <span className="text-green-400 font-bold">$5,557</span></p>
                    <p className="text-gray-400">Profit Margin: <span className="text-white font-bold">95%</span></p>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">5 Key Lessons from AI Content Monetization</h2>
          
            <div className="space-y-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-3">1. Quality &gt; Quantity Always Wins</h3>
                    <p className="text-gray-300">
                I generate 10-15 high-quality pieces instead of 100 mediocre ones. Clients pay premium for AI content that doesn't look like AI content.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">2. Niche Down for Higher Rates</h3>
                    <p className="text-gray-300">
                Specializing in "AI art for SaaS companies" lets me charge $500/project instead of $50 for generic work.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-3">3. Automation is Everything</h3>
                    <p className="text-gray-300">
                80% of my workflow is automated. I focus on creative direction while AI and automation handle execution.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-pink-400 mb-3">4. Multiple Income Streams = Stability</h3>
                    <p className="text-gray-300">
                No single source is more than 40% of income. If one dries up, I'm still profitable.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-orange-400 mb-3">5. Teaching Scales Better Than Doing</h3>
                    <p className="text-gray-300">
                My upcoming AI course will 10x my income without 10x the work. Knowledge products scale infinitely.
                    </p>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Learn My Complete AI Content System?
            </h2>
          
            <p className="text-xl text-gray-400 mb-8">
            Join the waitlist for AI Content Mastery and start building your own AI income streams.
            </p>
          
            <a
            href="https://anyro.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Join the Waitlist
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
        </div>
    </section>
</div>
)
}