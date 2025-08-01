'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function DigitalProductsIdeas2024() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const productsAnimation = useScrollAnimation({ threshold: 0.1 })
  const validationAnimation = useScrollAnimation({ threshold: 0.1 })
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
              <span className="text-pink-400 text-sm font-semibold">2024 TRENDS</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              50 Digital Product Ideas That Are <span className="text-pink-400">Printing Money</span> in 2024
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              From $47 templates to <span className="text-white font-semibold">$10K masterclasses</span> - find your perfect product
            </p>

            <BlogMetrics publishDate="2024-02-23" readTime="25 min" />
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">The Digital Product Gold Rush</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">$325B</div>
                <p className="text-gray-400 text-sm">Market size by 2025</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                <p className="text-gray-400 text-sm">Profit margins</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <p className="text-gray-400 text-sm">Passive income</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
                <p className="text-gray-400 text-sm">Scaling potential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low-Ticket Products */}
      <section 
        ref={productsAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${productsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Low-Ticket Winners ($9-97)</h2>
          
          <div className="space-y-8">
            {/* Templates Category */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Templates & Swipe Files</h3>
                  <p className="text-gray-400 mb-4">The easiest products to create and sell</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Hot Sellers Right Now:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="text-pink-400 font-semibold mb-2">Business Templates:</h5>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li>• Notion dashboards ($27-47)</li>
                          <li>• Email templates ($19-37)</li>
                          <li>• Sales scripts ($47-97)</li>
                          <li>• SOPs & workflows ($37-67)</li>
                          <li>• Contract templates ($47-97)</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-blue-400 font-semibold mb-2">Creative Templates:</h5>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li>• Canva templates ($9-27)</li>
                          <li>• Instagram posts ($19-47)</li>
                          <li>• Lightroom presets ($27-67)</li>
                          <li>• Video intros ($37-97)</li>
                          <li>• Font bundles ($17-47)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-pink-400 font-semibold">Success story:</span> Sarah's Notion templates: $127K in 6 months
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Printables */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Digital Printables</h3>
                  <p className="text-gray-400 mb-4">Print-on-demand without the shipping</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Top Printable Niches:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-pink-400">→</span>
                        <span className="text-gray-300">Planners & journals (daily, weekly, fitness, meal)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-pink-400">→</span>
                        <span className="text-gray-300">Wall art & quotes (motivational, minimalist, boho)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-pink-400">→</span>
                        <span className="text-gray-300">Kids activities (worksheets, coloring, education)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-pink-400">→</span>
                        <span className="text-gray-300">Party printables (invitations, banners, games)</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-lg font-bold text-green-400">$15-35</p>
                        <p className="text-xs text-gray-400">Average price</p>
                      </div>
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-lg font-bold text-blue-400">500+</p>
                        <p className="text-xs text-gray-400">Sales/month</p>
                      </div>
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-lg font-bold text-purple-400">2 hrs</p>
                        <p className="text-xs text-gray-400">Creation time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Low-Ticket Ideas */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-900 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">3. Stock Content Packs</h4>
                <p className="text-gray-400 mb-3">Photos, videos, graphics bundles</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Social media graphics ($19-47)</li>
                  <li>• Video backgrounds ($37-67)</li>
                  <li>• Icon sets ($27-47)</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Avg revenue: $5-15K/mo</p>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">4. Mini Courses</h4>
                <p className="text-gray-400 mb-3">1-2 hour focused trainings</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Quick skills ($47-97)</li>
                  <li>• Tool tutorials ($37-67)</li>
                  <li>• Challenges ($27-47)</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Avg revenue: $10-30K/mo</p>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">5. Spreadsheet Tools</h4>
                <p className="text-gray-400 mb-3">Calculators and trackers</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Budget planners ($19-37)</li>
                  <li>• Business calculators ($47-97)</li>
                  <li>• Analytics dashboards ($67-97)</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Avg revenue: $3-10K/mo</p>
              </div>

              <div className="bg-zinc-900 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-3">6. Prompt Libraries</h4>
                <p className="text-gray-400 mb-3">AI prompts for specific uses</p>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• ChatGPT prompts ($9-27)</li>
                  <li>• Midjourney styles ($19-47)</li>
                  <li>• Business AI toolkit ($47-97)</li>
                </ul>
                <p className="text-green-400 text-sm mt-3">Avg revenue: $5-20K/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Ticket Products */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Mid-Ticket Bestsellers ($97-497)</h2>
          
          <div className="space-y-6">
            {/* Online Courses */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4">7-15. Online Courses That Sell</h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-zinc-900 rounded p-4">
                  <h4 className="text-white font-semibold mb-2">Business Skills</h4>
                  <p className="text-sm text-gray-300">• Social media marketing</p>
                  <p className="text-sm text-gray-300">• Email marketing</p>
                  <p className="text-sm text-gray-300">• Sales training</p>
                  <p className="text-green-400 text-sm mt-2">$197-497</p>
                </div>
                
                <div className="bg-zinc-900 rounded p-4">
                  <h4 className="text-white font-semibold mb-2">Creative Skills</h4>
                  <p className="text-sm text-gray-300">• Photography</p>
                  <p className="text-sm text-gray-300">• Video editing</p>
                  <p className="text-sm text-gray-300">• Graphic design</p>
                  <p className="text-green-400 text-sm mt-2">$147-397</p>
                </div>
                
                <div className="bg-zinc-900 rounded p-4">
                  <h4 className="text-white font-semibold mb-2">Personal Development</h4>
                  <p className="text-sm text-gray-300">• Productivity</p>
                  <p className="text-sm text-gray-300">• Mindset coaching</p>
                  <p className="text-sm text-gray-300">• Habit building</p>
                  <p className="text-green-400 text-sm mt-2">$97-297</p>
                </div>
              </div>
            </div>

            {/* Membership Sites */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">16-20. Membership Sites</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-300">Template vault membership</span>
                  <span className="text-green-400">$27-47/mo</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-300">Coaching community</span>
                  <span className="text-green-400">$97-197/mo</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-300">Stock content library</span>
                  <span className="text-green-400">$47-97/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Mastermind group</span>
                  <span className="text-green-400">$297-497/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Ticket Products */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">High-Ticket Powerhouses ($497+)</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">21. Certification Programs</h3>
              <p className="text-gray-300 mb-3">Turn your expertise into accredited training</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Industry certifications</li>
                  <li>• Professional training</li>
                  <li>• Skill validation</li>
                </ul>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">$997-4,997</p>
                  <p className="text-sm text-gray-400">Average price point</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">22. Done-For-You Services</h3>
              <p className="text-gray-300 mb-3">Productized services sold as packages</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Website in a day</li>
                  <li>• Marketing systems</li>
                  <li>• Business setup</li>
                </ul>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">$2,997-9,997</p>
                  <p className="text-sm text-gray-400">Package pricing</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">23. Coaching Programs</h3>
              <p className="text-gray-300 mb-3">High-touch transformation packages</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• 90-day programs</li>
                  <li>• Group masterminds</li>
                  <li>• 1-on-1 intensive</li>
                </ul>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-400">$1,997-19,997</p>
                  <p className="text-sm text-gray-400">Program pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Niches */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🔥 Hot Niches for 2024</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">AI & Automation</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• AI prompt engineering</li>
                <li>• Workflow automation</li>
                <li>• No-code solutions</li>
                <li>• AI art creation</li>
                <li>• ChatGPT mastery</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Creator Economy</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Content monetization</li>
                <li>• Platform growth</li>
                <li>• Influencer marketing</li>
                <li>• Video creation</li>
                <li>• Live streaming</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Remote Work</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Virtual team building</li>
                <li>• Remote productivity</li>
                <li>• Digital nomad guides</li>
                <li>• Home office setup</li>
                <li>• Async communication</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Health & Wellness</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Mental health tools</li>
                <li>• Fitness programs</li>
                <li>• Nutrition planning</li>
                <li>• Sleep optimization</li>
                <li>• Stress management</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Financial Freedom</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Crypto education</li>
                <li>• Investment guides</li>
                <li>• Side hustle blueprints</li>
                <li>• Budgeting systems</li>
                <li>• Passive income</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Sustainability</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Eco-living guides</li>
                <li>• Zero waste tools</li>
                <li>• Sustainable fashion</li>
                <li>• Green business</li>
                <li>• Climate action</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Framework */}
      <section 
        ref={validationAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${validationAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Validate Your Product Idea</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <ol className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Market Research (2 hours)</h4>
                  <p className="text-gray-400">Check competitor sales, reviews, and pricing on Gumroad, Etsy, Creative Market</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Audience Survey (1 day)</h4>
                  <p className="text-gray-400">Ask your audience what they struggle with and would pay to solve</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">MVP Test (1 week)</h4>
                  <p className="text-gray-400">Create minimal version and pre-sell to validate demand</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Beta Launch (2 weeks)</h4>
                  <p className="text-gray-400">Sell to small group at discount for feedback and testimonials</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Scale (ongoing)</h4>
                  <p className="text-gray-400">Improve based on feedback and scale marketing</p>
                </div>
              </li>
            </ol>
            
            <div className="mt-6 p-4 bg-zinc-800 rounded">
              <p className="text-sm text-gray-300">
                <span className="text-pink-400 font-semibold">Success metric:</span> If you can pre-sell 10 units, you have a winner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Checklist */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Digital Product Launch Checklist</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-pink-400 mb-4">Product Ready</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Main product created</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Bonuses prepared</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Sales page live</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Payment setup</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Delivery automated</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-4">Marketing Ready</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Email sequence</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Social media plan</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Launch partners</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Testimonials ready</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">FAQ document</span>
                  </label>
                </div>
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
            Ready to Launch Your First Digital Product?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get the complete digital product creation system with 50+ templates
          </p>
          
          <Link
            href="/digital-products-empire"
            className="cta-button inline-flex items-center gap-3"
          >
            Start Your Digital Empire
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}