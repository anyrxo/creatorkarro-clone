'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function InstagramMonetizationGuide() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const methodsAnimation = useScrollAnimation({ threshold: 0.1 })
  const calculatorAnimation = useScrollAnimation({ threshold: 0.1 })
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <span className="text-pink-400 text-sm font-semibold">MONETIZATION</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your Instagram Into a <span className="text-pink-400">$10K/Month Business</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              The complete guide to <span className="text-white font-semibold">Instagram monetization in 2025</span> (with real numbers)
            </p>

            <BlogMetrics publishDate="2025-02-15" readTime="18 min" />
          </div>
        </div>
      </section>

      {/* Money Math */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">The Instagram Money Math</h2>
            <div className="bg-zinc-900 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">What Most People Think</h3>
                  <div className="space-y-3 text-gray-400">
                    <p>• Need 100K+ followers</p>
                    <p>• Must be an influencer</p>
                    <p>• Only brand deals make money</p>
                    <p>• Takes years to profit</p>
                    <p>• Need perfect content</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-4">The Actual Truth</h3>
                  <div className="space-y-3 text-gray-400">
                    <p>• 1,000 engaged followers is enough</p>
                    <p>• Micro-niches pay more</p>
                    <p>• Multiple revenue streams</p>
                    <p>• Can profit in 30 days</p>
                    <p>• Authenticity &gt; perfection</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-zinc-800 rounded text-center">
                <p className="text-lg text-white">
                  <span className="text-pink-400 font-bold">1,000 true fans</span> × <span className="text-green-400 font-bold">$10/month</span> = <span className="text-white font-bold text-2xl">$10,000/month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 10 Methods */}
      <section 
        ref={methodsAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${methodsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">10 Ways to Monetize Instagram in 2025</h2>
          
          <div className="space-y-8">
            {/* Method 1 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Digital Products</h3>
                  <p className="text-gray-400 mb-4">The highest profit margin monetization method</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-pink-400 font-semibold mb-3">What Sells:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Templates & presets ($9-47)</li>
                          <li>• E-books & guides ($27-97)</li>
                          <li>• Online courses ($197-997)</li>
                          <li>• Coaching programs ($997-5K)</li>
                          <li>• Membership sites ($29-97/mo)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold mb-3">Real Examples:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• @creator1: $45K/mo from presets</li>
                          <li>• @creator2: $120K launch (course)</li>
                          <li>• @creator3: $25K/mo membership</li>
                          <li>• @creator4: $8K/mo templates</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-pink-400 font-semibold">Profit margin:</span> 95-98% | 
                        <span className="text-green-400 font-semibold ml-3">Time to first sale:</span> 7-14 days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 2 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Affiliate Marketing</h3>
                  <p className="text-gray-400 mb-4">Earn commissions promoting products you love</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Top Affiliate Programs:</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Amazon Associates</span>
                        <span className="text-gray-400">1-10% commission</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Software (Canva, Later)</span>
                        <span className="text-green-400">30-50% recurring</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Course platforms</span>
                        <span className="text-green-400">30-40% one-time</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Fashion/Beauty</span>
                        <span className="text-gray-400">5-20% commission</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-sm text-gray-400">Average earnings</p>
                        <p className="text-lg font-bold text-white">$2-10K/mo</p>
                      </div>
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-sm text-gray-400">Followers needed</p>
                        <p className="text-lg font-bold text-white">1,000+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 3 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Brand Partnerships</h3>
                  <p className="text-gray-400 mb-4">Get paid to create content for brands</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Rate Card by Followers:</h4>
                    <div className="space-y-2 text-gray-300">
                      <div className="flex justify-between">
                        <span>1K-10K followers</span>
                        <span className="text-green-400">$100-500 per post</span>
                      </div>
                      <div className="flex justify-between">
                        <span>10K-50K followers</span>
                        <span className="text-green-400">$500-2,000 per post</span>
                      </div>
                      <div className="flex justify-between">
                        <span>50K-100K followers</span>
                        <span className="text-green-400">$2,000-5,000 per post</span>
                      </div>
                      <div className="flex justify-between">
                        <span>100K+ followers</span>
                        <span className="text-green-400">$5,000+ per post</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-400 mt-4">
                      *Rates vary by niche, engagement rate matters more than followers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Method 4-10 Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Method 4 */}
              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">4</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Instagram Shop</h4>
                    <p className="text-gray-400 mb-3">Sell physical products directly</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>• Handmade items</p>
                      <p>• Print on demand</p>
                      <p>• Dropshipping</p>
                    </div>
                    <p className="text-green-400 text-sm mt-3">Avg: $3-15K/mo</p>
                  </div>
                </div>
              </div>

              {/* Method 5 */}
              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">5</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Paid Subscriptions</h4>
                    <p className="text-gray-400 mb-3">Exclusive content for subscribers</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>• Behind the scenes</p>
                      <p>• Early access</p>
                      <p>• Premium content</p>
                    </div>
                    <p className="text-green-400 text-sm mt-3">$4.99/mo per sub</p>
                  </div>
                </div>
              </div>

              {/* Method 6 */}
              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">6</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Live Badges</h4>
                    <p className="text-gray-400 mb-3">Fans buy badges during lives</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>• $0.99 - $4.99 badges</p>
                      <p>• Regular live schedule</p>
                      <p>• Engaged community</p>
                    </div>
                    <p className="text-green-400 text-sm mt-3">Avg: $500-3K/mo</p>
                  </div>
                </div>
              </div>

              {/* Method 7 */}
              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">7</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Reels Play Bonus</h4>
                    <p className="text-gray-400 mb-3">Get paid for viral reels</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>• 1M+ views needed</p>
                      <p>• US creators only</p>
                      <p>• Invite-based</p>
                    </div>
                    <p className="text-green-400 text-sm mt-3">Up to $1,200/mo</p>
                  </div>
                </div>
              </div>

              {/* Method 8 */}
              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">8</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">UGC Creation</h4>
                    <p className="text-gray-400 mb-3">Create content for brands</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>• $50-500 per video</p>
                      <p>• No posting required</p>
                      <p>• Portfolio needed</p>
                    </div>
                    <p className="text-green-400 text-sm mt-3">Avg: $2-8K/mo</p>
                  </div>
                </div>
              </div>

              {/* Method 9 */}
              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">9</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Services</h4>
                    <p className="text-gray-400 mb-3">Sell your expertise</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>• Social media management</p>
                      <p>• Photography</p>
                      <p>• Consulting</p>
                    </div>
                    <p className="text-green-400 text-sm mt-3">$50-500/hour</p>
                  </div>
                </div>
              </div>

              {/* Method 10 */}
              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">10</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Email List</h4>
                    <p className="text-gray-400 mb-3">The hidden goldmine</p>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>• $1-3 per subscriber/mo</p>
                      <p>• Direct sales channel</p>
                      <p>• You own the list</p>
                    </div>
                    <p className="text-green-400 text-sm mt-3">$3-30K/mo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section 
        ref={calculatorAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${calculatorAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Instagram Revenue Potential</h2>
          
          <div className="bg-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-pink-400 mb-6">Monthly Revenue Calculator</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-3">With 1,000 Engaged Followers:</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Digital product (10% conversion @ $97)</span>
                    <span className="text-green-400">$970</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Affiliate income (50 sales @ $20 commission)</span>
                    <span className="text-green-400">$1,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1 brand partnership</span>
                    <span className="text-green-400">$300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Services (10 hours @ $75)</span>
                    <span className="text-green-400">$750</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 flex justify-between">
                    <span className="font-semibold">Total Potential</span>
                    <span className="text-green-400 font-bold text-xl">$3,020/mo</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">With 10,000 Engaged Followers:</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Digital products (multiple)</span>
                    <span className="text-green-400">$5,000-10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Affiliate income</span>
                    <span className="text-green-400">$2,000-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Brand partnerships (3-5)</span>
                    <span className="text-green-400">$3,000-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email list revenue</span>
                    <span className="text-green-400">$2,000-4,000</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 flex justify-between">
                    <span className="font-semibold">Total Potential</span>
                    <span className="text-green-400 font-bold text-xl">$12,000-24,000/mo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Plan */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8">Your 30-Day Monetization Action Plan</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Week 1: Foundation</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Optimize bio with clear value proposition</li>
                <li>✓ Create lead magnet for email capture</li>
                <li>✓ Set up link-in-bio tool</li>
                <li>✓ Apply to affiliate programs</li>
                <li>✓ Plan first digital product</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Week 2: Content Strategy</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Create content pillars (educate, inspire, sell)</li>
                <li>✓ Post daily with strategic CTAs</li>
                <li>✓ Start email welcome sequence</li>
                <li>✓ Engage in DMs (build relationships)</li>
                <li>✓ Create first product mockups</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Week 3: Launch</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Soft launch digital product to email list</li>
                <li>✓ Share affiliate recommendations</li>
                <li>✓ Pitch to 5 brands for partnerships</li>
                <li>✓ Create Instagram Shop (if applicable)</li>
                <li>✓ Host first monetized live</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Week 4: Scale</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Analyze what's working (double down)</li>
                <li>✓ Create second product/offer</li>
                <li>✓ Set up automation systems</li>
                <li>✓ Increase posting frequency</li>
                <li>✓ Plan next month's strategy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Tips */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Instagram Monetization Success Tips</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">🎯 Content That Converts</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 40% value content (educate)</li>
                <li>• 30% personal content (connect)</li>
                <li>• 20% social proof (testimonials)</li>
                <li>• 10% direct promotion (sell)</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">💬 DM Strategy</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Reply to every DM personally</li>
                <li>• Send voice notes (builds trust)</li>
                <li>• Ask questions (understand needs)</li>
                <li>• Share exclusive offers in DMs</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">📊 Track What Matters</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Link clicks &gt; likes</li>
                <li>• DMs &gt; comments</li>
                <li>• Sales &gt; followers</li>
                <li>• Email signups &gt; reach</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🚀 Scale Faster</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Batch content creation</li>
                <li>• Automate where possible</li>
                <li>• Repurpose everything</li>
                <li>• Test and iterate weekly</li>
              </ul>
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
            Ready to Build Your $10K/Month Instagram Business?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get the complete Instagram monetization system
          </p>
          
          <Link
            href="/instagram-money-machine"
            className="cta-button inline-flex items-center gap-3"
          >
            Start Making Money on Instagram
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
