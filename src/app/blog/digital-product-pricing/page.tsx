'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function DigitalProductPricing() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const strategiesAnimation = useScrollAnimation({ threshold: 0.1 })
  const calculatorAnimation = useScrollAnimation({ threshold: 0.1 })
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
                    <span className="text-green-400 text-sm font-semibold">PRICING</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The Psychology of <span className="text-green-400">$97 vs $997</span>: How to Price Digital Products
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Discover the <span className="text-white font-semibold">pricing strategies that 6-figure creators use</span> to maximize revenue
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-02-01" readTime="11 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">The Digital Product Pricing Paradox</h2>
                <div className="bg-zinc-900 rounded-xl p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-red-400 mb-4">Common Pricing Mistakes</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>❌ Pricing based on time invested</li>
                                <li>❌ Following competitor prices blindly</li>
                                <li>❌ Starting too low and raising later</li>
                                <li>❌ One price fits all strategy</li>
                                <li>❌ Ignoring perceived value</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-green-400 mb-4">Smart Pricing Principles</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li>✅ Price based on transformation</li>
                                <li>✅ Test multiple price points</li>
                                <li>✅ Create pricing tiers</li>
                                <li>✅ Use psychological anchoring</li>
                                <li>✅ Factor in market positioning</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={strategiesAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The 5 Proven Pricing Strategies</h2>
          
            <div className="space-y-8"><div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">The 9-Ending Psychology</h3>
                        <p className="text-gray-400 mb-4">Why $97 consistently outperforms $100 (and it's not what you think)</p>
                  
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <h4 className="text-white font-semibold mb-3">The Science:</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Left-digit bias makes $97 feel like "$90-something"</li>
                                <li>• Signals value consciousness, not cheapness</li>
                                <li>• 3.5% higher conversion than round numbers</li>
                                <li>• Works best in $X7 and $X97 formats</li>
                            </ul>
                    
                            <div className="mt-4 p-4 bg-zinc-900 rounded">
                                <p className="text-sm text-gray-400">
                                    <span className="text-green-400 font-semibold">Pro tip:</span> Use $97, $197, $297, $497, $997 as your pricing ladder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="bg-zinc-900 rounded-xl p-6">
            <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Value Stack Pricing</h3>
                    <p className="text-gray-400 mb-4">Build perceived value to 10x your actual price</p>
                  
                    <div className="bg-zinc-800 rounded-lg p-6">
                        <h4 className="text-white font-semibold mb-3">Example Stack:</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Core Training (8 modules)</span>
                                <span className="text-gray-500">Value: $497</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Implementation Templates</span>
                                <span className="text-gray-500">Value: $197</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Private Community Access</span>
                                <span className="text-gray-500">Value: $97/mo</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Bonus: Quick Start Guide</span>
                                <span className="text-gray-500">Value: $47</span>
                            </div>
                            <div className="border-t border-gray-700 pt-3 mt-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-white font-semibold">Total Value</span>
                                    <span className="text-gray-400 line-through">$838</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-white font-semibold">Your Price</span>
                                    <span className="text-green-400 text-2xl font-bold">$197</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className="bg-zinc-900 rounded-xl p-6">
        <div className="flex items-start gap-4">
            <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Tiered Pricing Architecture</h3>
                <p className="text-gray-400 mb-4">Capture every segment of your market</p>
                  
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-blue-400 font-semibold mb-2">Starter</h4>
                        <p className="text-3xl font-bold text-white mb-2">$97</p>
                        <ul className="space-y-1 text-sm text-gray-300">
                            <li>✓ Core content</li>
                            <li>✓ Basic templates</li>
                            <li>✓ Email support</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-3">20-30% of buyers</p>
                    </div>
                    
                    <div className="bg-zinc-800 rounded-lg p-4 ring-2 ring-green-500">
                        <h4 className="text-green-400 font-semibold mb-2">Professional</h4>
                        <p className="text-3xl font-bold text-white mb-2">$297</p>
                        <ul className="space-y-1 text-sm text-gray-300">
                            <li>✓ Everything in Starter</li>
                            <li>✓ Advanced modules</li>
                            <li>✓ Group coaching calls</li>
                            <li>✓ Priority support</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-3">50-60% of buyers</p>
                    </div>
                    
                    <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-purple-400 font-semibold mb-2">Premium</h4>
                        <p className="text-3xl font-bold text-white mb-2">$997</p>
                        <ul className="space-y-1 text-sm text-gray-300">
                            <li>✓ Everything in Pro</li>
                            <li>✓ 1-on-1 coaching</li>
                            <li>✓ Done-for-you setup</li>
                            <li>✓ Lifetime updates</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-3">10-20% of buyers</p>
                    </div>
                </div>
            </div>
        </div>
    </div><div className="bg-zinc-900 rounded-xl p-6">
    <div className="flex items-start gap-4">
        <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
        <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">Psychological Anchoring</h3>
            <p className="text-gray-400 mb-4">Make your real price feel like a steal</p>
                  
            <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">Anchoring Techniques:</h4>
                <div className="space-y-4">
                    <div>
                        <p className="text-green-400 font-semibold mb-1">High Anchor First</p>
                        <p className="text-gray-300">"My private clients pay $5,000 for this system..."</p>
                    </div>
                    <div>
                        <p className="text-green-400 font-semibold mb-1">Competitor Comparison</p>
                        <p className="text-gray-300">"Similar programs cost $2,000-3,000..."</p>
                    </div>
                    <div>
                        <p className="text-green-400 font-semibold mb-1">Time/Money Trade</p>
                        <p className="text-gray-300">"Save 100 hours of trial and error ($5,000 value)..."</p>
                    </div>
                    <div>
                        <p className="text-green-400 font-semibold mb-1">Results Anchor</p>
                        <p className="text-gray-300">"Students typically earn back 10x their investment..."</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div className="bg-zinc-900 rounded-xl p-6">
<div className="flex items-start gap-4">
    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
    <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">Dynamic Pricing Tactics</h3>
        <p className="text-gray-400 mb-4">Maximize revenue with strategic price movement</p>
                  
        <div className="bg-zinc-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3">Revenue Maximization Timeline:</h4>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="text-green-400 font-semibold">Launch:</span>
                    <span className="text-gray-300">$97 early bird (48 hours)</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-green-400 font-semibold">Week 1:</span>
                    <span className="text-gray-300">$147 launch price</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-green-400 font-semibold">Month 1:</span>
                    <span className="text-gray-300">$197 regular price</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-green-400 font-semibold">Ongoing:</span>
                    <span className="text-gray-300">$197 with periodic $147 promos</span>
                </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
                      This strategy typically generates 40% more revenue than flat pricing
            </p>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>

      <section
        ref={calculatorAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Price Point Analysis</h2>
          
        <div className="bg-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">What Happens at Different Price Points</h3>
            
            <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="text-lg font-bold text-white mb-2">$27-47: Impulse Buy Zone</h4>
                    <p className="text-gray-300 mb-2">No real consideration needed. Great for tripwires and entry products.</p>
                    <p className="text-sm text-gray-400">Conversion rate: 5-10% | Refund rate: 15-20%</p>
                </div>
              
                <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="text-lg font-bold text-white mb-2">$97-197: Sweet Spot</h4>
                    <p className="text-gray-300 mb-2">Serious enough for commitment, affordable enough for most.</p>
                    <p className="text-sm text-gray-400">Conversion rate: 2-5% | Refund rate: 5-10%</p>
                </div>
              
                <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="text-lg font-bold text-white mb-2">$297-497: Premium Territory</h4>
                    <p className="text-gray-300 mb-2">Buyers expect significant transformation and support.</p>
                    <p className="text-sm text-gray-400">Conversion rate: 1-3% | Refund rate: 3-5%</p>
                </div>
              
                <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="text-lg font-bold text-white mb-2">$997+: High-Ticket</h4>
                    <p className="text-gray-300 mb-2">Requires sales calls, social proof, and premium positioning.</p>
                    <p className="text-sm text-gray-400">Conversion rate: 0.5-2% | Refund rate: 2-3%</p>
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
        <h2 className="text-3xl font-bold text-white mb-8">The 30-Day Price Testing Framework</h2>
          
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-8">
            <div className="space-y-4">
                <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">1</div>
                    <div>
                        <h4 className="text-white font-semibold">Week 1: Baseline</h4>
                        <p className="text-gray-300">Launch at your gut-feeling price. Track everything.</p>
                    </div>
                </div>
              
                <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">2</div>
                    <div>
                        <h4 className="text-white font-semibold">Week 2: 50% Higher</h4>
                        <p className="text-gray-300">Test 50% above baseline. Monitor conversion drop.</p>
                    </div>
                </div>
              
                <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">3</div>
                    <div>
                        <h4 className="text-white font-semibold">Week 3: Premium Test</h4>
                        <p className="text-gray-300">Double your baseline. Add bonuses if needed.</p>
                    </div>
                </div>
              
                <div className="flex items-start gap-3">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">4</div>
                    <div>
                        <h4 className="text-white font-semibold">Week 4: Optimize</h4>
                        <p className="text-gray-300">Find the sweet spot where revenue is maximized.</p>
                    </div>
                </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-900/5 rounded-lg">
                <p className="text-sm text-gray-300">
                    <span className="text-green-400 font-semibold">Result:</span> Most creators find their optimal price is 40-80% higher than they initially thought
                </p>
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
            Ready to Price Your Products for Maximum Profit?
        </h2>
          
        <p className="text-xl text-gray-400 mb-8">
            Get my complete pricing toolkit and calculator
        </p>
          
        <Link
            href="/digital-products-empire"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Get Pricing Mastery Toolkit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </Link>
    </div>
</section>
</div>
)
}
