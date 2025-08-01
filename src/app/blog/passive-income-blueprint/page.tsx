'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function PassiveIncomeBlueprint() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const streamsAnimation = useScrollAnimation({ threshold: 0.1 })
  const roadmapAnimation = useScrollAnimation({ threshold: 0.1 })
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
              <span className="text-green-400 text-sm font-semibold">PASSIVE INCOME</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The <span className="text-green-400">$100K/Year</span> Passive Income Blueprint I Actually Use
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              7 income streams that generate <span className="text-white font-semibold">$8,400/month while I sleep</span>
            </p>

            <BlogMetrics publishDate="2024-03-02" readTime="22 min" />
          </div>
        </div>
      </section>

      {/* Income Breakdown */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">My Current Passive Income Streams</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Course Sales</h3>
                <p className="text-2xl font-bold text-green-400">$3,200</p>
                <p className="text-xs text-gray-500">Per month</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Digital Products</h3>
                <p className="text-2xl font-bold text-blue-400">$2,100</p>
                <p className="text-xs text-gray-500">Per month</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Affiliate Income</h3>
                <p className="text-2xl font-bold text-purple-400">$1,800</p>
                <p className="text-xs text-gray-500">Per month</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Other Streams</h3>
                <p className="text-2xl font-bold text-pink-400">$1,300</p>
                <p className="text-xs text-gray-500">Per month</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-3xl font-bold text-white">Total: <span className="text-green-400">$8,400/month</span></p>
              <p className="text-gray-400">= $100,800/year completely passive</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Truth Section */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Let me be brutally honest: "passive income" is a lie... at first. Every stream I have today took <span className="text-white font-semibold">3-6 months of active work</span> to build. But once built? They run on autopilot.
            </p>

            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-green-400 mb-4">🚨 The Reality Check</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• <span className="text-white font-semibold">Year 1:</span> Made $127 total (not a typo)</li>
                <li>• <span className="text-white font-semibold">Year 2:</span> Broke $1,000/month</li>
                <li>• <span className="text-white font-semibold">Year 3:</span> Hit $5,000/month</li>
                <li>• <span className="text-white font-semibold">Year 4:</span> Scaled to $8,400/month</li>
              </ul>
              <p className="mt-4 text-gray-300">
                The difference? I stopped chasing "quick wins" and built <span className="text-white font-semibold">real assets</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 7 Income Streams */}
      <section 
        ref={streamsAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${streamsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The 7 Passive Income Streams I Use</h2>
          
          <div className="space-y-8">
            {/* Stream 1 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Online Courses ($3,200/mo)</h3>
                  <p className="text-gray-400 mb-4">My biggest earner - create once, sell forever</p>
                  
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-green-400 font-semibold mb-3">What Works:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Solve ONE specific problem</li>
                          <li>• Price at $197-997</li>
                          <li>• Include templates/resources</li>
                          <li>• Evergreen content only</li>
                          <li>• Automated email funnel</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-blue-400 font-semibold mb-3">My Top Courses:</h4>
                        <ul className="space-y-2 text-gray-300">
                          <li>• AI Automation: $997 (40 sales/mo)</li>
                          <li>• Content System: $497 (35 sales/mo)</li>
                          <li>• Instagram Growth: $297 (60 sales/mo)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-zinc-800 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-green-400 font-semibold">Setup time:</span> 2-4 weeks per course | <span className="text-green-400 font-semibold">Maintenance:</span> 2 hours/month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream 2 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Digital Products ($2,100/mo)</h3>
                  <p className="text-gray-400 mb-4">Templates, tools, and resources</p>
                  
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">My Best Sellers:</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">Notion Templates Bundle</span>
                        <span className="text-green-400">$47 × 180 sales = $846/mo</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">Social Media Calendar</span>
                        <span className="text-green-400">$27 × 220 sales = $594/mo</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                        <span className="text-gray-300">Email Templates Pack</span>
                        <span className="text-green-400">$37 × 120 sales = $444/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Other Products</span>
                        <span className="text-green-400">$216/mo</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-zinc-800 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-green-400 font-semibold">Creation time:</span> 2-6 hours each | <span className="text-green-400 font-semibold">Platforms:</span> Gumroad, Etsy, own site
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream 3 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Affiliate Marketing ($1,800/mo)</h3>
                  <p className="text-gray-400 mb-4">Recommend tools I actually use</p>
                  
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Top Affiliate Programs:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-gray-300">
                        <li>• ConvertKit: $400/mo (40% recurring)</li>
                        <li>• Canva: $350/mo (80% first payment)</li>
                        <li>• Notion: $300/mo (50% recurring)</li>
                        <li>• TubeBuddy: $250/mo (50% recurring)</li>
                      </ul>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Teachable: $200/mo (30% recurring)</li>
                        <li>• Grammarly: $150/mo (20-40%)</li>
                        <li>• Others: $150/mo</li>
                      </ul>
                    </div>
                    
                    <div className="mt-4 p-3 bg-zinc-800 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-green-400 font-semibold">Key:</span> Only promote what you use + Create comparison content
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Streams Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">4. YouTube Ad Revenue ($500/mo)</h4>
                <p className="text-gray-400 mb-3">Evergreen how-to videos</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• 45 videos total</li>
                  <li>• 150K views/month</li>
                  <li>• $3-5 RPM average</li>
                  <li>• Upload 1 video/month now</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Best topics: Tutorials, reviews, comparisons</p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">5. Stock Content ($300/mo)</h4>
                <p className="text-gray-400 mb-3">Photos, videos, graphics</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• 500+ items uploaded</li>
                  <li>• Shutterstock, Adobe Stock</li>
                  <li>• $0.25-5 per download</li>
                  <li>• Batch upload monthly</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Focus: Business, tech, lifestyle</p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">6. Print on Demand ($300/mo)</h4>
                <p className="text-gray-400 mb-3">T-shirts, mugs, posters</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• 200+ designs live</li>
                  <li>• Redbubble, Printful</li>
                  <li>• $2-10 profit per item</li>
                  <li>• Trending + evergreen mix</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">No inventory, no shipping</p>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">7. App/SaaS Subscriptions ($200/mo)</h4>
                <p className="text-gray-400 mb-3">Simple tools I built</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Chrome extension: $4.99/mo</li>
                  <li>• Notion widget: $2.99/mo</li>
                  <li>• API tool: $19.99/mo</li>
                  <li>• 50 total subscribers</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Built with no-code tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The System */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The P.A.S.S.I.V.E. System</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <p className="text-gray-300 mb-6">My framework for building income streams that actually last:</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl">P</span>
                <div>
                  <h4 className="text-white font-semibold">Problem-First Approach</h4>
                  <p className="text-gray-400">Find expensive problems people desperately want solved</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl">A</span>
                <div>
                  <h4 className="text-white font-semibold">Automate Everything</h4>
                  <p className="text-gray-400">Sales, delivery, support - if you're involved, it's not passive</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl">S</span>
                <div>
                  <h4 className="text-white font-semibold">Scale Before Perfect</h4>
                  <p className="text-gray-400">Launch at 80% and improve based on feedback</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl">S</span>
                <div>
                  <h4 className="text-white font-semibold">Stack Multiple Streams</h4>
                  <p className="text-gray-400">Never rely on one - diversify across 5-10 sources</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl">I</span>
                <div>
                  <h4 className="text-white font-semibold">Invest Profits Wisely</h4>
                  <p className="text-gray-400">Reinvest 50% into growth, save 30%, enjoy 20%</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl">V</span>
                <div>
                  <h4 className="text-white font-semibold">Value Compounds</h4>
                  <p className="text-gray-400">Each product should promote others - ecosystem thinking</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-green-400 font-bold text-xl">E</span>
                <div>
                  <h4 className="text-white font-semibold">Evergreen Only</h4>
                  <p className="text-gray-400">If it won't sell in 5 years, don't build it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Roadmap */}
      <section 
        ref={roadmapAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${roadmapAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your 90-Day Passive Income Roadmap</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Days 1-30: Foundation Phase</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Week 1: Choose your first income stream (start with digital products)</li>
                <li>• Week 2: Research competition and validate demand</li>
                <li>• Week 3: Create your minimum viable product</li>
                <li>• Week 4: Set up sales funnel and payment processing</li>
              </ul>
              <p className="text-green-400 text-sm mt-3">Goal: Make your first $100</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Days 31-60: Optimization Phase</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Week 5-6: Gather feedback and improve product</li>
                <li>• Week 7: Launch email automation sequence</li>
                <li>• Week 8: Create content to drive organic traffic</li>
              </ul>
              <p className="text-green-400 text-sm mt-3">Goal: Reach $500/month</p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">Days 61-90: Scale Phase</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Week 9-10: Add second income stream</li>
                <li>• Week 11: Implement affiliate marketing</li>
                <li>• Week 12: Optimize and document systems</li>
              </ul>
              <p className="text-green-400 text-sm mt-3">Goal: Hit $1,000/month recurring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">5 Passive Income Myths That Keep You Broke</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <p className="text-white font-semibold">Myth: "It's completely passive from day one"</p>
                  <p className="text-gray-400">Reality: 3-6 months of active work, then passive</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <p className="text-white font-semibold">Myth: "You need a huge audience"</p>
                  <p className="text-gray-400">Reality: 1,000 true fans is enough to start</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <p className="text-white font-semibold">Myth: "Competition means it won't work"</p>
                  <p className="text-gray-400">Reality: Competition = proven demand</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <p className="text-white font-semibold">Myth: "You need to be an expert"</p>
                  <p className="text-gray-400">Reality: Just be 2 steps ahead of beginners</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-red-400 text-xl">❌</span>
                <div>
                  <p className="text-white font-semibold">Myth: "Passive income is easy money"</p>
                  <p className="text-gray-400">Reality: It's front-loaded hard work for future freedom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Steps */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Start Today: Your First $1,000</h2>
          
          <div className="bg-zinc-800 rounded-xl p-8">
            <h3 className="text-xl font-bold text-green-400 mb-6">The Quickest Path to Passive Income</h3>
            
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                <div>
                  <p className="text-white font-semibold">This Week: List 10 problems you've solved</p>
                  <p className="text-gray-400 text-sm">Personal, professional, anything counts</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                <div>
                  <p className="text-white font-semibold">Next Week: Validate one idea</p>
                  <p className="text-gray-400 text-sm">Ask 10 people if they'd pay for the solution</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                <div>
                  <p className="text-white font-semibold">Week 3: Create MVP in 1 weekend</p>
                  <p className="text-gray-400 text-sm">Template, guide, mini-course - keep it simple</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                <div>
                  <p className="text-white font-semibold">Week 4: Launch to your network</p>
                  <p className="text-gray-400 text-sm">Email, social media, DMs - aim for 10 sales</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                <div>
                  <p className="text-white font-semibold">Month 2: Scale what works</p>
                  <p className="text-gray-400 text-sm">More products, more traffic, more automation</p>
                </div>
              </li>
            </ol>
            
            <div className="mt-6 p-4 bg-zinc-900 rounded text-center">
              <p className="text-white">
                Average result: <span className="text-green-400 font-bold">$1,000-2,500/mo by month 3</span>
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
            Ready to Build Your Passive Income Empire?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get my complete passive income system with templates, funnels, and step-by-step training
          </p>
          
          <Link
            href="/passive-income-accelerator"
            className="cta-button inline-flex items-center gap-3"
          >
            Start Building Passive Income
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}