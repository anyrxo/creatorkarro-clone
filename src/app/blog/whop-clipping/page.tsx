'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

export default function WhopClippingGuide() {
  // Scroll animations
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const strategyAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">MONETIZATION GUIDE</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The Ultimate <span className="text-blue-400">Whop Clipping Strategy</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Turn Twitch streams into a <span className="text-white font-semibold">$10K/month business</span> with this proven system used by 500+ successful clippers
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Jan 22, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
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
      </section>

      {/* Main Content */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I went from zero to <span className="text-white font-semibold">$10,000/month</span> in just 6 months by mastering the art of stream clipping and content repurposing. Today, I'm sharing the exact strategy that transformed my side hustle into a full-time business.
            </p>

            <h2 className="text-3xl font-bold text-white mb-6">Why Whop Clipping is the Perfect Business Model</h2>
            
            <div className="bg-zinc-900 rounded-2xl p-8 mb-8">
              <p className="text-gray-300 mb-6">The creator economy has created a massive opportunity:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="text-blue-400 text-2xl mb-3">📈</div>
                  <h3 className="text-white font-semibold mb-2">Low Startup Cost</h3>
                  <p className="text-gray-400">Start with just editing software and internet</p>
                </div>
                
                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="text-purple-400 text-2xl mb-3">⚡</div>
                  <h3 className="text-white font-semibold mb-2">Scalable Income</h3>
                  <p className="text-gray-400">Work with multiple creators simultaneously</p>
                </div>
                
                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="text-green-400 text-2xl mb-3">🎯</div>
                  <h3 className="text-white font-semibold mb-2">In-Demand Service</h3>
                  <p className="text-gray-400">Streamers desperately need quality clips</p>
                </div>
                
                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="text-pink-400 text-2xl mb-3">💰</div>
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
                  <p className="text-gray-300 italic">
                    "Hey [Name], I've been watching your streams and your [specific moment] had me dying 😂 I specialize in turning moments like these into viral TikToks/Shorts. I work on a 50/50 revenue split - you keep creating, I handle all the clipping and posting. Here are 3 sample clips I made from your recent streams: [links]. Interested?"
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
        </div>
      </section>

      {/* Real Results */}
      <section 
        ref={resultsAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Real Results From My Students</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-400 mb-2">$12,400</div>
              <div className="text-white font-semibold mb-1">Jake M.</div>
              <p className="text-gray-400 text-sm">First month working with 3 streamers</p>
            </div>
            
            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">147M</div>
              <div className="text-white font-semibold mb-1">Sarah K.</div>
              <p className="text-gray-400 text-sm">Total views in 6 months</p>
            </div>
            
            <div className="bg-zinc-800 rounded-lg p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">22</div>
              <div className="text-white font-semibold mb-1">Marcus T.</div>
              <p className="text-gray-400 text-sm">Creators in his network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies That Work */}
      <section 
        ref={strategyAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${strategyAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Advanced Strategies for Maximum Revenue</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-blue-400 text-2xl mb-3">🎯</div>
              <h3 className="text-white font-semibold mb-2">The Compilation Strategy</h3>
              <p className="text-gray-400">Create longer YouTube videos (8-10 min) from best clips for higher ad revenue</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-purple-400 text-2xl mb-3">📊</div>
              <h3 className="text-white font-semibold mb-2">Data-Driven Decisions</h3>
              <p className="text-gray-400">Track every metric and double down on viral formats</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-green-400 text-2xl mb-3">🤝</div>
              <h3 className="text-white font-semibold mb-2">Network Effect</h3>
              <p className="text-gray-400">Get referrals from current creators to their streamer friends</p>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-pink-400 text-2xl mb-3">💎</div>
              <h3 className="text-white font-semibold mb-2">Premium Services</h3>
              <p className="text-gray-400">Offer channel management and brand deals for extra revenue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Thoughts */}
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

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get The Creator Playbook
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Join <span className="text-white font-semibold">10,000+ creators</span> getting actionable strategies delivered weekly.
          </p>
          
          <a
            href="https://anyro.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-3"
          >
            Join Free Newsletter
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}