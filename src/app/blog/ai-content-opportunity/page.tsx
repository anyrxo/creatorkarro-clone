'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function AIContentOpportunity() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const opportunitiesAnimation = useScrollAnimation({ threshold: 0.1 })
  const strategyAnimation = useScrollAnimation({ threshold: 0.1 })
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
              <span className="text-purple-400 text-sm font-semibold">OPPORTUNITY</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The <span className="text-purple-400">$1.2 Trillion</span> AI Content Gold Rush
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Why the next 24 months will create more <span className="text-white font-semibold">content millionaires than the last 24 years</span>
            </p>

            <BlogMetrics publishDate="2024-02-19" readTime="16 min" />
          </div>
        </div>
      </section>

      {/* Market Size */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">The AI Content Economy Explosion</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$1.2T</div>
                <p className="text-gray-400 text-sm">Creator economy by 2027</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500M</div>
                <p className="text-gray-400 text-sm">New creators by 2025</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">82%</div>
                <p className="text-gray-400 text-sm">Content will be AI-assisted</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">1000x</div>
                <p className="text-gray-400 text-sm">Content production speed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section 
        ref={opportunitiesAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${opportunitiesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">10 Massive AI Content Opportunities</h2>
          
          <div className="space-y-8">
            {/* Opportunity 1 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Course Empire</h3>
                  <p className="text-gray-400 mb-4">Create 100x more educational content in 1/10th the time</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">The Opportunity:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-purple-400 font-semibold mb-2">What's Possible Now:</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Generate course outlines in minutes</li>
                          <li>• Create video scripts instantly</li>
                          <li>• Auto-generate quizzes and exercises</li>
                          <li>• Translate to 50+ languages</li>
                          <li>• Personalize for each student</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-green-400 font-semibold mb-2">Real Results:</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Course creation: 30 days → 3 days</li>
                          <li>• Revenue per course: $50K-500K</li>
                          <li>• Students reached: 10x more</li>
                          <li>• Profit margins: 95%+</li>
                          <li>• Market size: $350B by 2025</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-purple-400 font-semibold">Case Study:</span> Creator used AI to build 12 courses in 3 months, generated $1.2M
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunity 2 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Faceless YouTube Channels</h3>
                  <p className="text-gray-400 mb-4">Build multiple channels without showing your face</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">The AI Advantage:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400">→</span>
                        <span className="text-gray-300">AI voice narration (indistinguishable from human)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400">→</span>
                        <span className="text-gray-300">Script generation for any niche</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400">→</span>
                        <span className="text-gray-300">Automated video editing with AI</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-purple-400">→</span>
                        <span className="text-gray-300">Thumbnail A/B testing at scale</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-green-400">$10-50K</p>
                        <p className="text-xs text-gray-400">Monthly revenue</p>
                      </div>
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-blue-400">5-10</p>
                        <p className="text-xs text-gray-400">Channels possible</p>
                      </div>
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-purple-400">2-4hrs</p>
                        <p className="text-xs text-gray-400">Per video</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunity 3 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">AI Influencer Networks</h3>
                  <p className="text-gray-400 mb-4">Manage 10-100 AI influencers across platforms</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Business Model:</h4>
                    <div className="space-y-2 text-gray-300">
                      <p>• Create diverse AI personalities for different niches</p>
                      <p>• Automate content creation and posting</p>
                      <p>• Monetize through brands, affiliates, products</p>
                      <p>• Scale without human limitations</p>
                    </div>
                    <p className="text-green-400 font-semibold mt-4">Potential: $1-10M/year with 20+ AI influencers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunity 4 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Micro-Niche Publishing Empire</h3>
                  <p className="text-gray-400 mb-4">Dominate 100s of micro-niches with AI content</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">The Strategy:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-300">
                        <li>• Identify underserved niches</li>
                        <li>• Generate expert-level content</li>
                        <li>• Build niche authority sites</li>
                        <li>• Monetize with ads/affiliates</li>
                      </ul>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Example: "Left-handed guitar"</li>
                        <li>• 1000 articles in 1 week</li>
                        <li>• $500-5K/month per site</li>
                        <li>• Manage 50-100 sites</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunities 5-10 Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">5</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Newsletter Arbitrage</h4>
                    <p className="text-gray-400 mb-3">Buy newsletters, 10x with AI, flip for profit</p>
                    <p className="text-sm text-gray-300">• Buy at 2-3x revenue</p>
                    <p className="text-sm text-gray-300">• AI-enhance content quality</p>
                    <p className="text-sm text-gray-300">• Sell at 10-15x revenue</p>
                    <p className="text-green-400 text-sm mt-3">ROI: 300-500%</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">6</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">AI Book Publishing</h4>
                    <p className="text-gray-400 mb-3">Publish 100+ books per year</p>
                    <p className="text-sm text-gray-300">• Fiction & non-fiction</p>
                    <p className="text-sm text-gray-300">• Multiple pen names</p>
                    <p className="text-sm text-gray-300">• Amazon KDP goldmine</p>
                    <p className="text-green-400 text-sm mt-3">$50-500K/year</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">7</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Podcast Networks</h4>
                    <p className="text-gray-400 mb-3">AI-powered podcast empire</p>
                    <p className="text-sm text-gray-300">• AI hosts and guests</p>
                    <p className="text-sm text-gray-300">• Infinite content topics</p>
                    <p className="text-sm text-gray-300">• 24/7 production</p>
                    <p className="text-green-400 text-sm mt-3">CPM: $25-50</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">8</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">SaaS Content Moats</h4>
                    <p className="text-gray-400 mb-3">Build SEO fortresses for SaaS</p>
                    <p className="text-sm text-gray-300">• 10,000+ pages per site</p>
                    <p className="text-sm text-gray-300">• Programmatic SEO</p>
                    <p className="text-sm text-gray-300">• $100K+ contracts</p>
                    <p className="text-green-400 text-sm mt-3">Per client: $10-50K/mo</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">9</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Virtual Events</h4>
                    <p className="text-gray-400 mb-3">AI-powered summits & conferences</p>
                    <p className="text-sm text-gray-300">• AI speakers</p>
                    <p className="text-sm text-gray-300">• Infinite scalability</p>
                    <p className="text-sm text-gray-300">• Year-round events</p>
                    <p className="text-green-400 text-sm mt-3">$50-200K per event</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 text-sm">10</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Local Business Domination</h4>
                    <p className="text-gray-400 mb-3">Own local SEO in 1000s of cities</p>
                    <p className="text-sm text-gray-300">• "Best X in [City]" sites</p>
                    <p className="text-sm text-gray-300">• Lead generation</p>
                    <p className="text-sm text-gray-300">• Sell leads to businesses</p>
                    <p className="text-green-400 text-sm mt-3">$100-1K per lead</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Strategy */}
      <section 
        ref={strategyAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${strategyAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your AI Content Empire Strategy</h2>
          
          <div className="bg-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-purple-400 mb-6">The 5-Step Domination Plan</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Master the AI Stack (Week 1-2)</h4>
                  <p className="text-gray-400">ChatGPT, Claude, Midjourney, ElevenLabs, Synthesia. Become fluent in AI.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Pick Your Battlefield (Week 3)</h4>
                  <p className="text-gray-400">Choose 1-2 opportunities from above. Go deep, not wide.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Build Your Machine (Week 4-8)</h4>
                  <p className="text-gray-400">Create systems, workflows, and automation. Remove yourself from production.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Scale Aggressively (Month 3-6)</h4>
                  <p className="text-gray-400">10x your output. Test monetization models. Optimize for profit.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Empire Mode (Month 6+)</h4>
                  <p className="text-gray-400">Multiple revenue streams, team building, acquisition opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why The Next 24 Months Are Critical</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">1. The Technology Sweet Spot</h3>
              <p className="text-gray-300">AI is powerful enough to create amazing content but most people haven't figured out how to use it yet. Early adopters win.</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">2. Platform Gold Rush</h3>
              <p className="text-gray-300">Platforms are desperate for content. Algorithm favor + monetization opportunities = perfect storm.</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">3. Consumer Appetite</h3>
              <p className="text-gray-300">Content consumption at all-time high. People want more personalized, niche content than ever.</p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">4. Business Demand</h3>
              <p className="text-gray-300">Every business needs content. AI makes you a one-person content agency.</p>
            </div>
            
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">5. Competitive Advantage Window</h3>
              <p className="text-gray-300">In 24 months, everyone will use AI. Right now, you can dominate entire markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Content Creator's New Reality</h2>
          
          <div className="bg-zinc-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-400 mb-4">Old World (Pre-2024)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 1 piece of content = hours/days</li>
                  <li>• Limited by personal capacity</li>
                  <li>• One language, one format</li>
                  <li>• Linear income growth</li>
                  <li>• Burnout inevitable</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">New World (2024+)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 100 pieces = hours/days</li>
                  <li>• Limited only by imagination</li>
                  <li>• All languages, all formats</li>
                  <li>• Exponential income growth</li>
                  <li>• Work becomes strategy</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-zinc-900 rounded text-center">
              <p className="text-xl text-white font-semibold">
                The question isn't IF you'll use AI for content...
              </p>
              <p className="text-purple-400 mt-2">
                It's whether you'll be among the first to build an empire with it.
              </p>
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
            Join the AI Content Gold Rush
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get the complete AI content empire blueprint and tools
          </p>
          
          <Link
            href="/ai-accelerator"
            className="cta-button inline-flex items-center gap-3"
          >
            Start Building Your AI Empire
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}