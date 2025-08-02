'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function DigitalProductsEmpire() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const productsAnimation = useScrollAnimation({ threshold: 0.1 })
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
                    <span className="text-green-400 text-sm font-semibold">CASE STUDY</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              How I Built a Digital Product Empire That Makes <span className="text-green-400">$50K/Month</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Behind the scenes of my digital product business and <span className="text-white font-semibold">the strategies that drive success</span>
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-01-22" readTime="16 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">Digital Empire by the Numbers</h2>
                <div className="grid md:grid-cols-5 gap-4">
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">47</div>
                        <div className="text-gray-400 text-sm">Products Created</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">127K</div>
                        <div className="text-gray-400 text-sm">Total Customers</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">$2.3M</div>
                        <div className="text-gray-400 text-sm">Lifetime Revenue</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-pink-400 mb-2">92%</div>
                        <div className="text-gray-400 text-sm">Profit Margin</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-yellow-400 mb-2">4hrs</div>
                        <div className="text-gray-400 text-sm">Work Per Day</div>
                    </div>
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
              Three years ago, I was broke and trading time for money. Today, I run a <span className="text-white font-semibold">$50K/month digital product empire that runs itself</span>. Here's exactly how I built it.
                </p>

                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">💰 The Digital Product Advantage</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li>• <span className="text-white font-semibold">Create once, sell forever</span> - no inventory</li>
                        <li>• <span className="text-white font-semibold">92% profit margins</span> - almost pure profit</li>
                        <li>• <span className="text-white font-semibold">Instant delivery</span> - customers get value immediately</li>
                        <li>• <span className="text-white font-semibold">Scale infinitely</span> - no physical limitations</li>
                        <li>• <span className="text-white font-semibold">Passive income</span> - sales while you sleep</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The 3-Year Journey</h2>
          
            <div className="space-y-8"><div className="bg-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Year 1: Foundation ($0 → $5K/month)</h3>
                        <p className="text-gray-400 mb-4">Started with one simple template pack</p>
                  
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <h4 className="text-green-400 font-semibold mb-3">What I Did:</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Created first Notion template</li>
                                    <li>• Sold on Gumroad for $19</li>
                                    <li>• Reinvested all profits</li>
                                    <li>• Built email list (500 subs)</li>
                                    <li>• Launched 5 products total</li>
                                </ul>
                            </div>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <h4 className="text-blue-400 font-semibold mb-3">Key Lessons:</h4>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Start before you're ready</li>
                                    <li>• Price higher than comfortable</li>
                                    <li>• Email list = everything</li>
                                    <li>• Feedback drives improvement</li>
                                    <li>• Consistency beats perfection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="bg-zinc-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Year 2: Scale ($5K → $25K/month)</h3>
                    <p className="text-gray-400 mb-4">Discovered the power of premium products</p>
                  
                    <div className="bg-zinc-900 rounded-lg p-6">
                        <h4 className="text-white font-semibold mb-3">Breakthrough Moments:</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li>📚 <span className="text-green-400">Launched first course:</span> $497 price point, $127K revenue</li>
                            <li>🎯 <span className="text-green-400">Niched down hard:</span> AI + content creation focus</li>
                            <li>🚀 <span className="text-green-400">Built sales funnel:</span> Free → $47 → $497 ladder</li>
                            <li>📧 <span className="text-green-400">Email list exploded:</span> 500 → 15,000 subscribers</li>
                            <li>🤝 <span className="text-green-400">First affiliates:</span> 30% of sales from partners</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div><div className="bg-zinc-800 rounded-xl p-6">
        <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Year 3: Empire ($25K → $50K/month)</h3>
                <p className="text-gray-400 mb-4">Systems, automation, and recurring revenue</p>
                  
                <div className="bg-zinc-900 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Empire Building:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <p className="text-green-400 font-semibold mb-2">Products</p>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• 47 total products</li>
                                <li>• 3 flagship courses</li>
                                <li>• Monthly templates</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-blue-400 font-semibold mb-2">Systems</p>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• Full automation</li>
                                <li>• Team of 3 VAs</li>
                                <li>• AI-powered support</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-purple-400 font-semibold mb-2">Revenue</p>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• $50K/mo average</li>
                                <li>• 40% recurring</li>
                                <li>• 92% margins</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</section>

      <section
        ref={productsAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">My Product Portfolio Breakdown</h2>
          
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">💎 Premium Products (70% of revenue)</h3>
                <div className="space-y-4">
                    <div className="bg-zinc-800 rounded p-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-semibold">AI Automation Agency</span>
                            <span className="text-green-400">$997</span>
                        </div>
                        <p className="text-sm text-gray-400">Complete business-in-a-box system</p>
                        <p className="text-xs text-gray-500 mt-1">Sales: 2,347 | Revenue: $2.3M</p>
                    </div>
                
                    <div className="bg-zinc-800 rounded p-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-semibold">Instagram Ignited</span>
                            <span className="text-green-400">$497</span>
                        </div>
                        <p className="text-sm text-gray-400">Instagram growth masterclass</p>
                        <p className="text-xs text-gray-500 mt-1">Sales: 5,123 | Revenue: $2.5M</p>
                    </div>
                
                    <div className="bg-zinc-800 rounded p-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-semibold">Content Empire Blueprint</span>
                            <span className="text-green-400">$297</span>
                        </div>
                        <p className="text-sm text-gray-400">Content creation system</p>
                        <p className="text-xs text-gray-500 mt-1">Sales: 8,472 | Revenue: $2.5M</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">⚡ Entry Products (30% of revenue)</h3>
                <div className="space-y-4">
                    <div className="bg-zinc-800 rounded p-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-semibold">Template Packs</span>
                            <span className="text-blue-400">$47-97</span>
                        </div>
                        <p className="text-sm text-gray-400">20+ different template bundles</p>
                        <p className="text-xs text-gray-500 mt-1">Sales: 47K+ | Revenue: $3.2M</p>
                    </div>
                
                    <div className="bg-zinc-800 rounded p-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-semibold">Mini Courses</span>
                            <span className="text-blue-400">$27-47</span>
                        </div>
                        <p className="text-sm text-gray-400">Quick implementation guides</p>
                        <p className="text-xs text-gray-500 mt-1">Sales: 23K+ | Revenue: $847K</p>
                    </div>
                
                    <div className="bg-zinc-800 rounded p-4">
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-semibold">AI Prompt Packs</span>
                            <span className="text-blue-400">$19-37</span>
                        </div>
                        <p className="text-sm text-gray-400">Curated AI prompts</p>
                        <p className="text-xs text-gray-500 mt-1">Sales: 31K+ | Revenue: $712K</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      <section
        ref={strategyAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">The 7 Strategies That Built This Empire</h2>
          
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-green-400 mb-3">1. Solve Expensive Problems</h3>
                <p className="text-gray-400">People pay for solutions that save time or make money. My products do both.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🪜</div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">2. Value Ladder Everything</h3>
                <p className="text-gray-400">Free lead magnet → $47 template → $497 course → $997 system</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">3. Email Is King</h3>
                <p className="text-gray-400">127K email list = $50K/month. Every email = $0.39 average.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">4. Launch Constantly</h3>
                <p className="text-gray-400">New product every 2-3 weeks. Momentum = money.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">5. Automate Everything</h3>
                <p className="text-gray-400">Sales, delivery, support, follow-up. Work 4 hours/day max.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">6. Recurring Revenue</h3>
                <p className="text-gray-400">40% from subscriptions. Predictable income = peace of mind.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">7. Over-Deliver Always</h3>
                <p className="text-gray-400">10x value at every price point. Happy customers = repeat buyers.</p>
            </div>
        </div>
    </div>
</section>

      <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Monthly Revenue Breakdown</h2>
          
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-8">
            <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded">
                    <div>
                        <span className="text-gray-300">Course Sales</span>
                        <p className="text-sm text-gray-500">3 flagship courses</p>
                    </div>
                    <span className="text-white font-bold text-xl">$22,000</span>
                </div>
              
                <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded">
                    <div>
                        <span className="text-gray-300">Template Sales</span>
                        <p className="text-sm text-gray-500">47 products</p>
                    </div>
                    <span className="text-white font-bold text-xl">$12,000</span>
                </div>
              
                <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded">
                    <div>
                        <span className="text-gray-300">Recurring Subscriptions</span>
                        <p className="text-sm text-gray-500">Monthly template club</p>
                    </div>
                    <span className="text-white font-bold text-xl">$8,000</span>
                </div>
              
                <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded">
                    <div>
                        <span className="text-gray-300">Affiliate Commissions</span>
                        <p className="text-sm text-gray-500">Tool recommendations</p>
                    </div>
                    <span className="text-white font-bold text-xl">$5,000</span>
                </div>
              
                <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded">
                    <div>
                        <span className="text-gray-300">Bundle Deals</span>
                        <p className="text-sm text-gray-500">Special offers</p>
                    </div>
                    <span className="text-white font-bold text-xl">$3,000</span>
                </div>
              
                <div className="flex items-center justify-between p-4 bg-green-500/20 rounded border border-green-500/30">
                    <span className="text-green-400 font-semibold">Total Monthly Revenue</span>
                    <span className="text-green-400 font-bold text-2xl">$50,000</span>
                </div>
            </div>
            
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-zinc-900/50 rounded p-4">
                    <p className="text-gray-400 text-sm">Profit Margin</p>
                    <p className="text-2xl font-bold text-green-400">92%</p>
                </div>
                <div className="bg-zinc-900/50 rounded p-4">
                    <p className="text-gray-400 text-sm">Customer LTV</p>
                    <p className="text-2xl font-bold text-blue-400">$247</p>
                </div>
                <div className="bg-zinc-900/50 rounded p-4">
                    <p className="text-gray-400 text-sm">Refund Rate</p>
                    <p className="text-2xl font-bold text-purple-400">1.2%</p>
                </div>
            </div>
        </div>
    </div>
</section>

      <section className="section-spacing bg-zinc-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Biggest Lessons Learned</h2>
          
        <div className="space-y-4">
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-2">💡 Start Before You're Ready</h3>
                <p className="text-gray-300">My first product was terrible. But it made $500 and taught me everything.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-2">💡 Price Based on Value, Not Time</h3>
                <p className="text-gray-300">A 2-hour template that saves someone 100 hours is worth $100+, not $20.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-2">💡 Your List Is Your Business</h3>
                <p className="text-gray-300">Platforms die. Algorithms change. Your email list is the only asset you truly own.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-pink-400 mb-2">💡 Systems Beat Hustle</h3>
                <p className="text-gray-300">Working 80 hours got me to $5K. Systems and automation got me to $50K.</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-2">💡 Recurring Revenue Changes Everything</h3>
                <p className="text-gray-300">$20K guaranteed each month lets you take risks and think long-term.</p>
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
            Ready to Build Your Digital Empire?
        </h2>
          
        <p className="text-xl text-gray-400 mb-8">
            Get my complete blueprint, systems, and strategies for building a profitable digital product business
        </p>
          
        <Link
            href="/digital-products"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Get The Digital Empire Blueprint
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </Link>
    </div>
</section>
</div>
)
}
