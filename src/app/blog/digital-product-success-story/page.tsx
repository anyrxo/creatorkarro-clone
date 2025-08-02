'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function DigitalProductSuccessStory() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const strategiesAnimation = useScrollAnimation({ threshold: 0.1 })
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
                    <span className="text-green-400 text-sm font-semibold">SUCCESS STORY</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              From $0 to <span className="text-green-400">$25K/Month</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              How Sophia Chen launched her <span className="text-white font-semibold">digital product empire</span> using proven strategies from Anyro's course
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-01-10" readTime="15 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">$25K</div>
                    <div className="text-gray-400">Monthly Revenue</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">3 Products</div>
                    <div className="text-gray-400">Launched</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">5,000+</div>
                    <div className="text-gray-400">Customers</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">92%</div>
                    <div className="text-gray-400">Profit Margin</div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Just 6 months ago, Sophia Chen was a burnt-out marketing manager dreaming of financial freedom. Today, she runs a <span className="text-white font-semibold">$25,000/month digital product business</span> from her laptop. Here's exactly how she did it.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">The Breaking Point</h2>
            
                <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
                    <p className="text-gray-300 mb-6">
                Sophia's journey began when she realized her 9-5 was killing her creativity:
                    </p>
              
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                            <div className="text-red-400 text-2xl">❌</div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">60-Hour Work Weeks</h3>
                                <p className="text-gray-400 text-sm">No time for personal projects or growth</p>
                            </div>
                        </div>
                
                        <div className="flex gap-4">
                            <div className="text-red-400 text-2xl">❌</div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">Capped Income</h3>
                                <p className="text-gray-400 text-sm">$65K salary with minimal raises</p>
                            </div>
                        </div>
                
                        <div className="flex gap-4">
                            <div className="text-red-400 text-2xl">❌</div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">No Location Freedom</h3>
                                <p className="text-gray-400 text-sm">Tied to expensive city office</p>
                            </div>
                        </div>
                
                        <div className="flex gap-4">
                            <div className="text-red-400 text-2xl">❌</div>
                            <div>
                                <h3 className="text-white font-semibold mb-2">Unfulfilling Work</h3>
                                <p className="text-gray-400 text-sm">Marketing products she didn't believe in</p>
                            </div>
                        </div>
                    </div>
              
                    <div className="mt-8 p-6 bg-zinc-800 rounded-xl">
                        <p className="text-gray-300 italic">
                  "I was making good money, but I felt trapped. I knew I had valuable skills, but I was using them to make someone else rich. That's when I found Anyro's Digital Products course."
                        </p>
                        <p className="text-green-400 mt-4 font-semibold">- Sophia Chen</p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6">The Transformation Journey</h2>
            
                <div className="space-y-8 mb-8">
                    <div className="bg-zinc-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">Month 1: Finding Her Profitable Niche</h3>
                        <p className="text-gray-300 mb-4">Using the course's Niche Validation Framework, Sophia discovered a gap:</p>
                        <div className="bg-zinc-800 rounded-lg p-4">
                            <p className="text-white font-semibold mb-2">The Opportunity:</p>
                            <p className="text-gray-300">Marketing templates specifically for health & wellness coaches who struggled with tech and design</p>
                        </div>
                        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <div className="flex justify-between">
                                <span className="text-white font-semibold">First Product Created:</span>
                                <span className="text-green-400 font-bold">"Wellness Brand Kit"</span>
                            </div>
                        </div>
                    </div>
              
                    <div className="bg-zinc-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">Month 2-3: The $10K Launch</h3>
                        <p className="text-gray-300 mb-4">Following the course's launch strategy to the letter:</p>
                        <ul className="space-y-2 text-gray-300">
                            <li>✓ <span className="text-white font-semibold">Pre-launch List:</span> Built email list of 500 targeted coaches</li>
                            <li>✓ <span className="text-white font-semibold">Beta Testing:</span> Got 20 coaches to test and provide testimonials</li>
                            <li>✓ <span className="text-white font-semibold">Launch Week:</span> Used the 7-day launch sequence template</li>
                        </ul>
                        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                            <div className="flex justify-between">
                                <span className="text-white font-semibold">Launch Results:</span>
                                <span className="text-green-400 font-bold">$10,847 in 7 days</span>
                            </div>
                        </div>
                    </div>
              
                    <div className="bg-zinc-900 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-3">Month 4-6: Scaling to $25K/Month</h3>
                        <p className="text-gray-300 mb-4">With validation, Sophia expanded her product suite:</p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-white font-medium">Wellness Brand Kit</div>
                                    <div className="text-gray-400 text-sm">Complete branding templates</div>
                                </div>
                                <div className="text-green-400 font-bold">$10K/mo</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-white font-medium">Social Media Templates Pro</div>
                                    <div className="text-gray-400 text-sm">365 done-for-you posts</div>
                                </div>
                                <div className="text-blue-400 font-bold">$8K/mo</div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-white font-medium">Email Marketing Mastery</div>
                                    <div className="text-gray-400 text-sm">52 weeks of email campaigns</div>
                                </div>
                                <div className="text-purple-400 font-bold">$7K/mo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={strategiesAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The Strategies That Made The Difference</h2>
          
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="text-3xl mb-4">🎯</div>
                    <h3 className="text-white font-semibold mb-3">Hyper-Specific Targeting</h3>
                    <p className="text-gray-400 text-sm mb-4">Focused only on health & wellness coaches, not "all businesses"</p>
                    <div className="text-green-400 font-semibold">Result: 47% conversion rate</div>
                </div>
            
                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="text-3xl mb-4">💎</div>
                    <h3 className="text-white font-semibold mb-3">Premium Pricing Strategy</h3>
                    <p className="text-gray-400 text-sm mb-4">Priced based on value, not competition ($297-$997)</p>
                    <div className="text-blue-400 font-semibold">Result: 92% profit margins</div>
                </div>
            
                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="text-3xl mb-4">🔄</div>
                    <h3 className="text-white font-semibold mb-3">Evergreen Sales System</h3>
                    <p className="text-gray-400 text-sm mb-4">Automated funnel runs 24/7 without constant launches</p>
                    <div className="text-purple-400 font-semibold">Result: Consistent daily sales</div>
                </div>
            
                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="text-3xl mb-4">📧</div>
                    <h3 className="text-white font-semibold mb-3">Email Marketing Machine</h3>
                    <p className="text-gray-400 text-sm mb-4">Nurture sequences that convert cold leads into buyers</p>
                    <div className="text-pink-400 font-semibold">Result: $42 per email sent</div>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-zinc-900 rounded-2xl p-8">
                <svg className="w-12 h-12 text-green-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            
                <p className="text-xl text-gray-300 mb-6 italic">
              "The Digital Products course didn't just teach me how to create products - it showed me how to build a real business. The pricing psychology module alone was worth 10x the course price. I quit my job after month 3 and never looked back."
                </p>
            
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full"></div>
                    <div>
                        <div className="text-white font-semibold">Sophia Chen</div>
                        <div className="text-gray-400">Digital Products Success Story</div>
                    </div>
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
            Ready to Build Your Digital Product Empire?
            </h2>
          
            <p className="text-xl text-gray-400 mb-8">
            Join thousands of creators learning to build and scale profitable digital products.
            </p>
          
            <Link
            href="/digital-products"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Start Digital Products Course
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
        </div>
    </section>
</div>
)
}
