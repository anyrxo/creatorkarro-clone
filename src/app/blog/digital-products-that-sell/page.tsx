'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function DigitalProductsThatSell() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const mistakesAnimation = useScrollAnimation({ threshold: 0.1 })
  const frameworkAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="text-green-400 text-sm font-semibold">MONETIZATION</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Why Most Digital Products <span className="text-red-400">Fail</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              And how to build one that sells <span className="text-green-400 font-semibold">$1K+/day</span> using psychology and proven frameworks
            </p>

            <BlogMetrics publishDate="2024-01-18" readTime="16 min" />
          </div>
        </div>
      </section>

      {/* Shocking Stats */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">The Harsh Reality</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">90%</div>
              <div className="text-gray-400">Products Fail</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">$0-100</div>
              <div className="text-gray-400">Average Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">3 Months</div>
              <div className="text-gray-400">Before Giving Up</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">10%</div>
              <div className="text-gray-400">Actually Succeed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              After analyzing over 500 digital product launches and running my own <span className="text-white font-semibold">$3M+ digital product business</span>, I've discovered exactly why most products fail—and more importantly, how to build ones that consistently generate $1,000+ per day.
            </p>

            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-red-400 mb-4">⚠️ Warning: Brutal Honesty Ahead</h2>
              <p className="text-gray-300">
                If you're looking for another "create an ebook and get rich" article, this isn't it. This is about the <span className="text-white font-semibold">psychology, strategy, and systems</span> that separate the 10% who succeed from the 90% who fail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Deadly Mistakes */}
      <section 
        ref={mistakesAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${mistakesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The 7 Deadly Mistakes That Kill Digital Products</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-red-400 font-bold">#1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Building What YOU Think People Need</h3>
                  <p className="text-gray-400 mb-3">The biggest killer of digital products is assumption. Creators build what they think is cool instead of what the market desperately wants.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">The Fix:</span> Pre-validate with real money. Get 10 people to pay before you build.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-red-400 font-bold">#2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Competing on Price Instead of Value</h3>
                  <p className="text-gray-400 mb-3">"I'll just make mine cheaper" is the fast track to failure. You can't out-cheap the internet.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">The Fix:</span> Price based on transformation, not information. $997 courses outsell $27 ones.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-red-400 font-bold">#3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">No Clear Target Avatar</h3>
                  <p className="text-gray-400 mb-3">"This is for everyone!" = This is for no one. Broad products don't convert.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">The Fix:</span> Get hyper-specific. "Instagram growth for wedding photographers" beats "social media marketing."</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-red-400 font-bold">#4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Weak or Non-Existent Sales Copy</h3>
                  <p className="text-gray-400 mb-3">Great products die with bad copy. Features don't sell—transformations do.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">The Fix:</span> Focus on outcomes, not features. Paint the picture of their life after buying.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-red-400 font-bold">#5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Launching to Crickets</h3>
                  <p className="text-gray-400 mb-3">Building in secret then launching to no audience = guaranteed failure.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">The Fix:</span> Build your audience WHILE building your product. Document the journey.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-red-400 font-bold">#6</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">No Backend or Upsell Strategy</h3>
                  <p className="text-gray-400 mb-3">One product = one income stream. Successful creators have product ecosystems.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">The Fix:</span> Plan your value ladder from day one. Entry → Core → Premium.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl text-red-400 font-bold">#7</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Giving Up After Launch Week</h3>
                  <p className="text-gray-400 mb-3">Most sales come AFTER launch. But creators abandon ship too early.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-green-400 font-semibold">The Fix:</span> Build evergreen funnels. My products sell more now than during launch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The $1K/Day Framework */}
      <section 
        ref={frameworkAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${frameworkAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The $1K/Day Digital Product Framework</h2>
          
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-8 mb-8">
            <p className="text-gray-300 mb-6 text-center">
              This is the exact framework I've used to generate <span className="text-white font-semibold">$3M+ in digital product sales</span>
            </p>
            
            <div className="space-y-6">
              <div className="bg-zinc-900/80 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-3">Step 1: The Problem/Solution Sweet Spot</h3>
                <p className="text-gray-300 mb-4">Find problems that are:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• <span className="text-white">Painful enough</span> that people actively search for solutions</li>
                  <li>• <span className="text-white">Specific enough</span> that you can own the category</li>
                  <li>• <span className="text-white">Profitable enough</span> that customers have budget</li>
                </ul>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-3">Step 2: The Irresistible Offer Stack</h3>
                <p className="text-gray-300 mb-4">Layer your offer with:</p>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white">Core Product</span>
                    <span className="text-gray-400">The main transformation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Quick Wins</span>
                    <span className="text-gray-400">Results they get in 24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Bonuses</span>
                    <span className="text-gray-400">Remove all objections</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white">Urgency</span>
                    <span className="text-gray-400">Genuine reason to buy now</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-3">Step 3: The Conversion Sequence</h3>
                <p className="text-gray-300 mb-4">The psychology of turning visitors into buyers:</p>
                <ol className="space-y-2 text-gray-300">
                  <li>1. <span className="text-white">Pattern Interrupt:</span> Stop the scroll with controversy</li>
                  <li>2. <span className="text-white">Problem Agitation:</span> Make them feel the pain</li>
                  <li>3. <span className="text-white">Solution Reveal:</span> Position as only logical choice</li>
                  <li>4. <span className="text-white">Social Proof:</span> Show undeniable results</li>
                  <li>5. <span className="text-white">Risk Reversal:</span> Remove all fear</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">34</div>
              <div className="text-gray-400">Products need just 34 sales/month at $997 to hit $1K/day</div>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">2%</div>
              <div className="text-gray-400">Convert just 2% of 1,700 monthly visitors</div>
            </div>
            <div className="bg-zinc-900 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">57</div>
              <div className="text-gray-400">Daily visitors needed with 2% conversion</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Products That Actually Sell?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get the complete blueprint, templates, and strategies in the Digital Products course.
          </p>
          
          <Link
            href="/digital-products"
            className="cta-button inline-flex items-center gap-3"
          >
            Start Building Your $1K/Day Product
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}