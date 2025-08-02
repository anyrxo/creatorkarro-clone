'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function SalesPagePsychology() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const triggersAnimation = useScrollAnimation({ threshold: 0.1 })
  const examplesAnimation = useScrollAnimation({ threshold: 0.1 })
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
                    <span className="text-green-400 text-sm font-semibold">SALES</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The Psychology Behind <span className="text-green-400">$10K+ Digital Product</span> Sales Pages
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Discover the <span className="text-white font-semibold">psychological triggers and copywriting techniques</span> that convert visitors into buyers
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-01-26" readTime="14 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">The 6 Core Psychological Principles</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-3xl mb-3">🧠</div>
                        <h3 className="text-white font-semibold mb-2">Reciprocity</h3>
                        <p className="text-gray-400 text-sm">Give value first, ask for sale second</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="text-white font-semibold mb-2">Urgency</h3>
                        <p className="text-gray-400 text-sm">Limited time creates action</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3">👥</div>
                        <h3 className="text-white font-semibold mb-2">Social Proof</h3>
                        <p className="text-gray-400 text-sm">Others' success drives decisions</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3">🎯</div>
                        <h3 className="text-white font-semibold mb-2">Authority</h3>
                        <p className="text-gray-400 text-sm">Expertise builds trust</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3">💎</div>
                        <h3 className="text-white font-semibold mb-2">Scarcity</h3>
                        <p className="text-gray-400 text-sm">Limited availability increases desire</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3">🤝</div>
                        <h3 className="text-white font-semibold mb-2">Commitment</h3>
                        <p className="text-gray-400 text-sm">Small yes leads to big yes</p>
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
            <h2 className="text-3xl font-bold text-white mb-8">The $10K Sales Page Formula</h2>
          
            <div className="space-y-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4">1. The Pattern Interrupt Headline</h3>
                    <p className="text-gray-400 mb-4">Your headline has 3 seconds to stop the scroll. Use these formulas:</p>
                    <div className="bg-zinc-800 rounded-lg p-4 space-y-3">
                        <div className="border-l-4 border-green-400 pl-4">
                            <p className="text-white font-semibold">"How [Specific Person] [Achieved Specific Result] in [Specific Timeframe]"</p>
                            <p className="text-gray-400 text-sm mt-1">Example: How Sarah Made $50K in 30 Days Selling Notion Templates</p>
                        </div>
                        <div className="border-l-4 border-green-400 pl-4">
                            <p className="text-white font-semibold">"The [Unexpected Method] That [Desirable Outcome] (Without [Common Objection])"</p>
                            <p className="text-gray-400 text-sm mt-1">Example: The AI System That Writes Bestselling eBooks (Without Writing a Single Word)</p>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">2. The Emotional Hook</h3>
                    <p className="text-gray-400 mb-4">Connect with their pain before presenting your solution:</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3">The PAS Formula (Problem-Agitate-Solution)</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><span className="text-blue-400 font-semibold">Problem:</span> "You know you should be creating digital products..."</li>
                            <li><span className="text-blue-400 font-semibold">Agitate:</span> "But every time you try, you get overwhelmed by tech, pricing, marketing..."</li>
                            <li><span className="text-blue-400 font-semibold">Solution:</span> "That's exactly why I created this step-by-step system..."</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-4">3. The Credibility Stack</h3>
                    <p className="text-gray-400 mb-4">Build trust fast with strategic proof elements:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-zinc-800 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Personal Results</h4>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• Revenue screenshots</li>
                                <li>• Growth metrics</li>
                                <li>• Time investment</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Student Results</h4>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• Transformation stories</li>
                                <li>• Specific numbers</li>
                                <li>• Diverse examples</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">4. The Value Revelation</h3>
                    <p className="text-gray-400 mb-4">Present your offer as the obvious solution:</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3">The Stack Method</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Module 1: Foundation Training</span>
                                <span className="text-gray-500 line-through">$497</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Module 2: Advanced Strategies</span>
                                <span className="text-gray-500 line-through">$697</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Bonus: Templates & Swipe Files</span>
                                <span className="text-gray-500 line-through">$297</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Bonus: Private Community</span>
                                <span className="text-gray-500 line-through">$197/mo</span>
                            </div>
                            <div className="border-t border-gray-700 pt-3 mt-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-white font-semibold">Total Value</span>
                                    <span className="text-gray-500 line-through">$1,688</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-white font-semibold">Your Investment</span>
                                    <span className="text-green-400 text-2xl font-bold">$197</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={triggersAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Advanced Psychological Triggers</h2>
          
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4">🎯 Loss Aversion</h3>
                    <p className="text-gray-400 mb-3">People fear losing more than they desire gaining.</p>
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                            <span className="text-green-400 font-semibold">Example:</span> "Every day you wait, you're losing $300 in potential revenue"
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">🔥 FOMO Creation</h3>
                    <p className="text-gray-400 mb-3">Fear of missing out drives immediate action.</p>
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                            <span className="text-blue-400 font-semibold">Example:</span> "237 people joined in the last 24 hours"
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-4">💡 Cognitive Ease</h3>
                    <p className="text-gray-400 mb-3">Simple = trustworthy in our brains.</p>
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                            <span className="text-purple-400 font-semibold">Example:</span> "3 simple steps to your first $10K month"
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">🎁 Anchoring Bias</h3>
                    <p className="text-gray-400 mb-3">First price seen becomes the reference point.</p>
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                            <span className="text-yellow-400 font-semibold">Example:</span> "Normally $997, today only $197"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={examplesAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8">Copy That Converts: Real Examples</h2>
          
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Opening That Hooks</h3>
                    <p className="text-gray-300 italic">
                "Last Tuesday at 3:47 AM, I woke up to a notification that changed everything. PayPal: You've received $4,327. 
                Not from a client. Not from a job. From a digital product I created in one weekend. 
                And the crazy part? I was sleeping when it sold."
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                        <span className="text-green-400 font-semibold">Why it works:</span> Specific details + transformation story + possibility
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Objection Handling</h3>
                    <p className="text-gray-300 italic">
                "I know what you're thinking. 'This sounds great, but I'm not creative.' 
                Good news: Neither am I. I failed art class. Twice. 
                But I discovered that profitable digital products aren't about creativity. 
                They're about solving one specific problem better than anyone else."
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                        <span className="text-purple-400 font-semibold">Why it works:</span> Acknowledges fear + relates + reframes belief
                    </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">The Close That Converts</h3>
                    <p className="text-gray-300 italic">
                "You have two choices right now. 
                Keep doing what you're doing and hope something changes. 
                Or take the same step 14,327 others have taken and join us inside. 
                The only question is: Will you be sharing your success story next month, or still reading them?"
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                        <span className="text-yellow-400 font-semibold">Why it works:</span> Binary choice + social proof + future pacing
                    </p>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Sales Page Conversion Checklist</h2>
          
            <div className="bg-zinc-800 rounded-xl p-8">
                <div className="space-y-4">
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Headline promises specific transformation in specific timeframe</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Opening story creates emotional connection</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">At least 5 different types of proof (screenshots, testimonials, case studies)</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Value stack shows 10x price-to-value ratio</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Major objections addressed before they think them</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Risk reversal (guarantee) removes purchase fear</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Urgency/scarcity element that's genuine</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Multiple CTAs throughout the page</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">FAQ section handles remaining doubts</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">P.S. section with final urgency push</span>
                    </label>
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
            Ready to Write Sales Pages That Convert?
            </h2>
          
            <p className="text-xl text-gray-400 mb-8">
            Get my complete sales page templates and swipe file
            </p>
          
            <Link
            href="/digital-products-empire"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Get Sales Page Templates
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
        </div>
    </section>
</div>
)
}
