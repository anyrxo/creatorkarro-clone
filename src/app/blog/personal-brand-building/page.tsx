'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function PersonalBrandBuilding() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const frameworkAnimation = useScrollAnimation({ threshold: 0.1 })
  const examplesAnimation = useScrollAnimation({ threshold: 0.1 })
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-sm font-semibold">BRANDING</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Building a Personal Brand That <span className="text-purple-400">Makes You Unforgettable</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              The step-by-step system to create a <span className="text-white font-semibold">magnetic personal brand that attracts opportunities</span>
            </p>

            <BlogMetrics publishDate="2024-02-05" readTime="14 min" />
          </div>
        </div>
      </section>

      {/* The Reality Check */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">The Personal Brand Reality</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-400 mb-4">Why Most Personal Brands Fail</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>❌ Trying to appeal to everyone</li>
                  <li>❌ Copying others instead of being authentic</li>
                  <li>❌ No consistent message or values</li>
                  <li>❌ Focusing on follower count over impact</li>
                  <li>❌ Ignoring the business side of branding</li>
                </ul>
              </div>
              <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">What Actually Works</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>✅ Extreme clarity on who you serve</li>
                  <li>✅ Authentic personality + strategic positioning</li>
                  <li>✅ Consistent value delivery system</li>
                  <li>✅ Building real relationships at scale</li>
                  <li>✅ Monetization strategy from day one</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Framework */}
      <section 
        ref={frameworkAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${frameworkAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The MAGNETIC Personal Brand Framework</h2>
          
          <div className="space-y-8">
            {/* M - Mission */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg">M</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Mission: Your North Star</h3>
                  <p className="text-gray-400 mb-4">Define the transformation you create in the world</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Mission Statement Formula:</h4>
                    <div className="bg-zinc-900 rounded p-4 mb-4">
                      <p className="text-purple-400 font-mono text-sm">
                        I help [SPECIFIC AUDIENCE] achieve [SPECIFIC OUTCOME] through [UNIQUE METHOD] so they can [ULTIMATE TRANSFORMATION]
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-purple-400 font-semibold">Example 1:</p>
                        <p className="text-gray-300">"I help burned-out creators build automated businesses through AI systems so they can create impact without sacrificing their life"</p>
                      </div>
                      <div>
                        <p className="text-purple-400 font-semibold">Example 2:</p>
                        <p className="text-gray-300">"I help aspiring entrepreneurs launch digital products in 30 days through my proven framework so they can quit their 9-5"</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* A - Audience */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg">A</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Audience: Your Tribe</h3>
                  <p className="text-gray-400 mb-4">Get crystal clear on exactly who you serve</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Ideal Audience Avatar:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-purple-400 font-semibold mb-2">Demographics</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Age range and life stage</li>
                          <li>• Income level and goals</li>
                          <li>• Education and experience</li>
                          <li>• Location and lifestyle</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-purple-400 font-semibold mb-2">Psychographics</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Core values and beliefs</li>
                          <li>• Biggest pain points</li>
                          <li>• Dream outcomes</li>
                          <li>• Content preferences</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-purple-400 font-semibold">Remember:</span> The riches are in the niches. Better to be everything to someone than something to everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* G - Genius Zone */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg">G</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Genius Zone: Your Superpower</h3>
                  <p className="text-gray-400 mb-4">Identify what you do better than 95% of people</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Find Your Zone:</h4>
                    <div className="space-y-4">
                      <div className="bg-zinc-900 rounded p-4">
                        <p className="text-purple-400 font-semibold mb-2">Ask yourself:</p>
                        <ul className="space-y-2 text-gray-300">
                          <li>• What do people always ask me for help with?</li>
                          <li>• What feels easy to me but hard for others?</li>
                          <li>• What could I talk about for hours?</li>
                          <li>• What results have I consistently achieved?</li>
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-zinc-900 rounded p-3 text-center">
                          <p className="text-sm text-gray-400">Skills</p>
                          <p className="text-white font-semibold">What you do</p>
                        </div>
                        <div className="bg-zinc-900 rounded p-3 text-center">
                          <p className="text-sm text-gray-400">Experience</p>
                          <p className="text-white font-semibold">What you've done</p>
                        </div>
                        <div className="bg-zinc-900 rounded p-3 text-center">
                          <p className="text-sm text-gray-400">Passion</p>
                          <p className="text-white font-semibold">What you love</p>
                        </div>
                        <div className="bg-zinc-900 rounded p-3 text-center">
                          <p className="text-sm text-gray-400">Market Need</p>
                          <p className="text-white font-semibold">What pays</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* N - Narrative */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg">N</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Narrative: Your Story</h3>
                  <p className="text-gray-400 mb-4">Craft a story that connects and converts</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">The Hero's Journey Formula:</h4>
                    <ol className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span>
                        <div>
                          <p className="text-white font-semibold">The Struggle</p>
                          <p className="text-gray-400 text-sm">Where you started (relatable pain point)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span>
                        <div>
                          <p className="text-white font-semibold">The Discovery</p>
                          <p className="text-gray-400 text-sm">What changed everything (your breakthrough)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span>
                        <div>
                          <p className="text-white font-semibold">The Transformation</p>
                          <p className="text-gray-400 text-sm">Your results (proof it works)</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span>
                        <div>
                          <p className="text-white font-semibold">The Mission</p>
                          <p className="text-gray-400 text-sm">Why you help others (your purpose)</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            {/* E - Expression */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg">E</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Expression: Your Voice</h3>
                  <p className="text-gray-400 mb-4">Develop a unique voice that cuts through the noise</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Voice Development:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-purple-400 font-semibold mb-2">Tone Attributes</h5>
                        <p className="text-gray-300 text-sm mb-2">Choose 3-5 that define you:</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-zinc-900 px-3 py-1 rounded text-xs text-gray-300">Inspirational</span>
                          <span className="bg-zinc-900 px-3 py-1 rounded text-xs text-gray-300">Educational</span>
                          <span className="bg-zinc-900 px-3 py-1 rounded text-xs text-gray-300">Humorous</span>
                          <span className="bg-zinc-900 px-3 py-1 rounded text-xs text-gray-300">Direct</span>
                          <span className="bg-zinc-900 px-3 py-1 rounded text-xs text-gray-300">Empathetic</span>
                          <span className="bg-zinc-900 px-3 py-1 rounded text-xs text-gray-300">Analytical</span>
                        </div>
                      </div>
                      <div>
                        <h5 className="text-purple-400 font-semibold mb-2">Content Pillars</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Educational (40%)</li>
                          <li>• Inspirational (25%)</li>
                          <li>• Personal (20%)</li>
                          <li>• Promotional (15%)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* T - Tactics */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg">T</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Tactics: Your System</h3>
                  <p className="text-gray-400 mb-4">Build systems for consistent brand building</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Daily Brand Building:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400">🌅 Morning:</span>
                        <span className="text-gray-300">Share value-packed content</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400">☀️ Midday:</span>
                        <span className="text-gray-300">Engage with your community</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400">🌙 Evening:</span>
                        <span className="text-gray-300">Share personal insights</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="bg-zinc-900 rounded p-3">
                        <p className="text-purple-400 font-semibold text-sm mb-1">Weekly</p>
                        <p className="text-gray-300 text-sm">Long-form content + email</p>
                      </div>
                      <div className="bg-zinc-900 rounded p-3">
                        <p className="text-purple-400 font-semibold text-sm mb-1">Monthly</p>
                        <p className="text-gray-300 text-sm">Review metrics + adjust</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* I - Income */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg">I</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Income: Your Monetization</h3>
                  <p className="text-gray-400 mb-4">Turn your brand into a business</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Revenue Ladder:</h4>
                    <div className="space-y-3">
                      <div className="bg-zinc-900 rounded p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold">Free Content</span>
                          <span className="text-gray-400">Build trust</span>
                        </div>
                      </div>
                      <div className="bg-zinc-900 rounded p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold">Low-Ticket ($27-97)</span>
                          <span className="text-gray-400">Solve one problem</span>
                        </div>
                      </div>
                      <div className="bg-zinc-900 rounded p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold">Mid-Ticket ($297-997)</span>
                          <span className="text-gray-400">Complete transformation</span>
                        </div>
                      </div>
                      <div className="bg-zinc-900 rounded p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-semibold">High-Ticket ($2k+)</span>
                          <span className="text-gray-400">Personal access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* C - Community */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 text-lg">C</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Community: Your Leverage</h3>
                  <p className="text-gray-400 mb-4">Build a movement, not just a following</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Community Building Strategy:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Create a branded hashtag movement</li>
                      <li>• Host weekly community calls or lives</li>
                      <li>• Feature community success stories</li>
                      <li>• Build in public and share the journey</li>
                      <li>• Create insider language and culture</li>
                      <li>• Facilitate member-to-member connections</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section 
        ref={examplesAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${examplesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Personal Brand Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-3">The Educator Brand</h3>
              <p className="text-gray-300 mb-3">Ali Abdaal - Productivity for Students/Creators</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Clear niche: Evidence-based productivity</li>
                <li>• Consistent voice: Friendly professor</li>
                <li>• Revenue streams: Courses, YouTube, affiliates</li>
                <li>• Result: $2M+/year, 3M+ subscribers</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-3">The Lifestyle Brand</h3>
              <p className="text-gray-300 mb-3">Matt D'Avella - Minimalism & Filmmaking</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Clear aesthetic: Minimal, high-quality</li>
                <li>• Consistent themes: Simple living, creativity</li>
                <li>• Revenue streams: Courses, sponsorships</li>
                <li>• Result: 7-figure business, dream lifestyle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Action Steps */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your 30-Day Brand Launch Plan</h2>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">Week 1:</span>
                <span className="text-gray-300">Define your MAGNETIC framework elements</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">Week 2:</span>
                <span className="text-gray-300">Create brand assets (bio, photos, style guide)</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">Week 3:</span>
                <span className="text-gray-300">Launch content pillars and posting schedule</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-purple-400 font-bold">Week 4:</span>
                <span className="text-gray-300">Engage, analyze, and optimize your approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build Your Magnetic Personal Brand
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get the complete blueprint and 1-on-1 guidance
          </p>
          
          <Link
            href="/creator-personal-brand"
            className="cta-button inline-flex items-center gap-3"
          >
            Start Building Your Brand
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}