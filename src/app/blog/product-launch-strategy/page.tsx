'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function ProductLaunchStrategy() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const phasesAnimation = useScrollAnimation({ threshold: 0.1 })
  const checklistAnimation = useScrollAnimation({ threshold: 0.1 })
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
              <span className="text-green-400 text-sm font-semibold">LAUNCH</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The $250K Digital Product Launch <span className="text-green-400">Blueprint</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              The exact 60-day strategy I use to launch <span className="text-white font-semibold">6-figure digital products consistently</span>
            </p>

            <BlogMetrics publishDate="2024-02-13" readTime="15 min" />
          </div>
        </div>
      </section>

      {/* Launch Stats */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">My Last 5 Launch Results</h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">AI Course</h3>
                <p className="text-2xl font-bold text-green-400">$127K</p>
                <p className="text-xs text-gray-500">7 days</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Templates</h3>
                <p className="text-2xl font-bold text-green-400">$89K</p>
                <p className="text-xs text-gray-500">5 days</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Masterclass</h3>
                <p className="text-2xl font-bold text-green-400">$234K</p>
                <p className="text-xs text-gray-500">14 days</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Workshop</h3>
                <p className="text-2xl font-bold text-green-400">$67K</p>
                <p className="text-xs text-gray-500">3 days</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <h3 className="text-sm text-gray-400 mb-2">Bundle</h3>
                <p className="text-2xl font-bold text-green-400">$312K</p>
                <p className="text-xs text-gray-500">10 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Phases */}
      <section 
        ref={phasesAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${phasesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The 4-Phase Launch System</h2>
          
          <div className="space-y-8">
            {/* Phase 1 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Pre-Launch Phase</h3>
                    <span className="text-gray-400">Days -60 to -30</span>
                  </div>
                  <p className="text-gray-400 mb-4">Build anticipation and validate demand</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Key Activities:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-green-400 font-semibold mb-2">Market Research</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Survey your audience</li>
                          <li>• Analyze competitor launches</li>
                          <li>• Identify pain points</li>
                          <li>• Test pricing sensitivity</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-green-400 font-semibold mb-2">Content Creation</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Create lead magnet</li>
                          <li>• Write email sequences</li>
                          <li>• Design sales page</li>
                          <li>• Record testimonials</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-zinc-900 rounded">
                      <p className="text-sm text-gray-300">
                        <span className="text-green-400 font-semibold">Goal:</span> Build email list of 5,000+ interested prospects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Seed Launch Phase</h3>
                    <span className="text-gray-400">Days -30 to -14</span>
                  </div>
                  <p className="text-gray-400 mb-4">Test everything with a small group</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Beta Launch Strategy:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-green-400">Week 1:</span>
                        <span className="text-gray-300">Open to 50-100 beta users at 50% off</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-400">Week 2:</span>
                        <span className="text-gray-300">Gather feedback, fix issues, get testimonials</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-400">Week 3:</span>
                        <span className="text-gray-300">Create case studies from beta results</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-400">Week 4:</span>
                        <span className="text-gray-300">Refine sales copy based on real feedback</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-green-400">$15-25K</p>
                        <p className="text-xs text-gray-400">Typical seed revenue</p>
                      </div>
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-blue-400">20-30</p>
                        <p className="text-xs text-gray-400">Testimonials gathered</p>
                      </div>
                      <div className="bg-zinc-900 rounded p-3 text-center">
                        <p className="text-2xl font-bold text-purple-400">5-10</p>
                        <p className="text-xs text-gray-400">Case studies created</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Launch Week</h3>
                    <span className="text-gray-400">Days 0 to 7</span>
                  </div>
                  <p className="text-gray-400 mb-4">Maximum intensity for maximum results</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">7-Day Launch Calendar:</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-white font-semibold">Day 1: Doors Open</p>
                        <p className="text-gray-400 text-sm">Email at 9 AM, 2 PM, 8 PM. Social media blitz.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-white font-semibold">Day 2-3: Social Proof</p>
                        <p className="text-gray-400 text-sm">Share testimonials, case studies, live results.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-white font-semibold">Day 4: Objection Handling</p>
                        <p className="text-gray-400 text-sm">Address all concerns, FAQ video, guarantee emphasis.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-white font-semibold">Day 5-6: Bonus Stack</p>
                        <p className="text-gray-400 text-sm">Add limited-time bonuses, increase urgency.</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <p className="text-white font-semibold">Day 7: Final Push</p>
                        <p className="text-gray-400 text-sm">Cart close countdown, last chance messaging.</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-zinc-900 rounded p-4">
                      <h5 className="text-white font-semibold mb-2">Launch Week Stats:</h5>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-400">Emails sent:</span>
                          <span className="text-white ml-2">15-20</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Social posts:</span>
                          <span className="text-white ml-2">50+</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Live streams:</span>
                          <span className="text-white ml-2">3-5</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Sales calls:</span>
                          <span className="text-white ml-2">10-20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">Post-Launch Phase</h3>
                    <span className="text-gray-400">Days 8 to 30</span>
                  </div>
                  <p className="text-gray-400 mb-4">Maximize revenue and set up evergreen</p>
                  
                  <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Post-Launch Actions:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-green-400 font-semibold mb-2">Week 1-2</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Downsell campaign</li>
                          <li>• Payment plan offers</li>
                          <li>• Affiliate recruitment</li>
                          <li>• Student onboarding</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-green-400 font-semibold mb-2">Week 3-4</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                          <li>• Create evergreen funnel</li>
                          <li>• Set up automations</li>
                          <li>• Gather success stories</li>
                          <li>• Plan next launch</li>
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

      {/* Launch Psychology */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Psychology Behind $250K Launches</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">🧠 Psychological Triggers</h3>
              <ul className="space-y-3 text-gray-300">
                <li><span className="text-green-400 font-semibold">Scarcity:</span> Limited time + limited spots</li>
                <li><span className="text-green-400 font-semibold">Social Proof:</span> Results flooding in real-time</li>
                <li><span className="text-green-400 font-semibold">Authority:</span> Expert positioning throughout</li>
                <li><span className="text-green-400 font-semibold">Reciprocity:</span> Value given before asking</li>
                <li><span className="text-green-400 font-semibold">Community:</span> Join a movement, not just buy</li>
              </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">📊 Revenue Distribution</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Day 1</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-700 rounded-full h-2 w-32">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                    <span className="text-gray-400 text-sm">35%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Day 2-3</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-700 rounded-full h-2 w-32">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                    <span className="text-gray-400 text-sm">25%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Day 4-6</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-700 rounded-full h-2 w-32">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="text-gray-400 text-sm">20%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Day 7</span>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-700 rounded-full h-2 w-32">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                    <span className="text-gray-400 text-sm">20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Sequences */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8">The Million-Dollar Email Sequence</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-xl font-bold text-green-400 mb-6">Pre-Launch Sequence (30 days)</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span>
                <div className="flex-1">
                  <p className="text-white font-semibold">The Problem Email</p>
                  <p className="text-gray-400 text-sm">Agitate the pain point they're experiencing</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span>
                <div className="flex-1">
                  <p className="text-white font-semibold">The Story Email</p>
                  <p className="text-gray-400 text-sm">Your journey from problem to solution</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span>
                <div className="flex-1">
                  <p className="text-white font-semibold">The Proof Email</p>
                  <p className="text-gray-400 text-sm">Case studies and testimonials</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span>
                <div className="flex-1">
                  <p className="text-white font-semibold">The Method Email</p>
                  <p className="text-gray-400 text-sm">Tease your unique approach</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">5</span>
                <div className="flex-1">
                  <p className="text-white font-semibold">The Anticipation Email</p>
                  <p className="text-gray-400 text-sm">Something big is coming...</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-zinc-800 rounded">
              <p className="text-sm text-gray-300">
                <span className="text-green-400 font-semibold">Pro tip:</span> Send value emails between each sequence email to maintain engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Checklist */}
      <section 
        ref={checklistAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${checklistAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ultimate Launch Checklist</h2>
          
          <div className="bg-zinc-800 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-4">Technical Setup ⚙️</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Sales page live and tested</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Payment processor integrated</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Email sequences loaded</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Affiliate program ready</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Customer support system</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-blue-400 mb-4">Content Ready 📝</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">20+ testimonials collected</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">5+ case studies written</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">FAQ document complete</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Bonus materials created</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Social media assets</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-purple-400 mb-4">Partners Ready 🤝</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Affiliates recruited</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">JV partners confirmed</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Influencer collabs</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Podcast appearances</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Guest posts scheduled</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-4">Team Ready 👥</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Support team trained</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Sales team briefed</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Tech backup ready</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Content team on standby</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-300">Launch day schedule</span>
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
            Ready to Launch Your First 6-Figure Product?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get the complete launch system with templates, swipes, and coaching
          </p>
          
          <Link
            href="/digital-products-empire"
            className="cta-button inline-flex items-center gap-3"
          >
            Get The Launch Blueprint
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}