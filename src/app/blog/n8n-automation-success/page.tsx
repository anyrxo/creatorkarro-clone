'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function N8NAutomationSuccess() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const workflowAnimation = useScrollAnimation({ threshold: 0.1 })
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
              <span className="text-blue-400 text-sm font-semibold">AUTOMATION</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              How Devon Mitchell Automated His Entire Business with <span className="text-blue-400">N8N AI Workflows</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              See how Devon saved <span className="text-white font-semibold">40+ hours per week</span> by automating his content workflow across 5 platforms
            </p>

            <BlogMetrics publishDate="2024-01-12" readTime="10 min" />
          </div>
        </div>
      </section>

      {/* Devon's Story */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Meet Devon Mitchell</h2>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8">
              <p className="text-lg text-gray-300 mb-4">
                <span className="text-white font-semibold">Digital Marketing Agency Owner</span> managing 15+ client accounts
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-red-400">Before N8N</div>
                  <ul className="mt-3 space-y-2 text-gray-400">
                    <li>• 60+ hours/week working</li>
                    <li>• Manual content posting</li>
                    <li>• Constant context switching</li>
                    <li>• Missing opportunities</li>
                  </ul>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">The Problem</div>
                  <ul className="mt-3 space-y-2 text-gray-400">
                    <li>• Posting to 5 platforms daily</li>
                    <li>• Managing multiple calendars</li>
                    <li>• Tracking analytics manually</li>
                    <li>• No time for strategy</li>
                  </ul>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">After N8N</div>
                  <ul className="mt-3 space-y-2 text-gray-400">
                    <li>• 20 hours/week working</li>
                    <li>• Fully automated posting</li>
                    <li>• Focus on high-value tasks</li>
                    <li>• 3x revenue growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8">The 5-Workflow System That Changed Everything</h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Devon discovered N8N through our course and within 30 days, he had automated 80% of his daily tasks. Here's exactly what he built:
            </p>
          </div>
        </div>
      </section>

      {/* The Workflows */}
      <section 
        ref={workflowAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${workflowAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The 5 Game-Changing Workflows</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Content Distribution Workflow</h3>
                  <p className="text-gray-400 mb-4">Automatically posts content to Instagram, Twitter, LinkedIn, TikTok, and Facebook with platform-specific formatting.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Trigger:</span>
                      <span className="text-gray-300">New content in Google Drive folder</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Actions:</span>
                      <span className="text-gray-300">Resize images → Generate captions → Schedule posts → Track performance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 font-semibold">Time Saved:</span>
                      <span className="text-gray-300">15 hours/week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">AI Content Generation Pipeline</h3>
                  <p className="text-gray-400 mb-4">Uses GPT-4 to generate content ideas, write captions, and create variations for A/B testing.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Trigger:</span>
                      <span className="text-gray-300">Weekly schedule (Monday 9 AM)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Actions:</span>
                      <span className="text-gray-300">Analyze trends → Generate ideas → Create content → Store in database</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 font-semibold">Time Saved:</span>
                      <span className="text-gray-300">8 hours/week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Client Reporting Automation</h3>
                  <p className="text-gray-400 mb-4">Pulls data from all platforms, creates beautiful PDF reports, and emails them to clients automatically.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Trigger:</span>
                      <span className="text-gray-300">First Monday of each month</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Actions:</span>
                      <span className="text-gray-300">Fetch analytics → Generate charts → Create PDF → Send emails</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 font-semibold">Time Saved:</span>
                      <span className="text-gray-300">10 hours/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Lead Nurturing System</h3>
                  <p className="text-gray-400 mb-4">Automatically responds to DMs, qualifies leads, and books calls directly into calendar.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Trigger:</span>
                      <span className="text-gray-300">New DM or form submission</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Actions:</span>
                      <span className="text-gray-300">Send response → Qualify lead → Book meeting → Add to CRM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 font-semibold">Time Saved:</span>
                      <span className="text-gray-300">7 hours/week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 text-lg">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Performance Monitoring Dashboard</h3>
                  <p className="text-gray-400 mb-4">Real-time dashboard showing all metrics, sending alerts when intervention needed.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Trigger:</span>
                      <span className="text-gray-300">Every 30 minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-semibold">Actions:</span>
                      <span className="text-gray-300">Check metrics → Update dashboard → Send alerts → Log anomalies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400 font-semibold">Time Saved:</span>
                      <span className="text-gray-300">5 hours/week</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section 
        ref={resultsAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Life-Changing Results</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">40+</div>
              <div className="text-xl text-white font-semibold mb-2">Hours Saved Weekly</div>
              <p className="text-gray-400">From 60 to 20 hours per week</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">3x</div>
              <div className="text-xl text-white font-semibold mb-2">Revenue Growth</div>
              <p className="text-gray-400">More time for high-value activities</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">15</div>
              <div className="text-xl text-white font-semibold mb-2">Client Accounts</div>
              <p className="text-gray-400">Managed effortlessly</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-xl text-white font-semibold mb-2">Client Retention</div>
              <p className="text-gray-400">Thanks to consistent delivery</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 text-center">
            <blockquote className="text-xl text-gray-300 italic mb-4">
              "N8N didn't just save me time – it gave me my life back. I now work 20 hours a week, travel whenever I want, and my business runs better than ever. The AI Accelerator course made it all possible."
            </blockquote>
            <div className="text-white font-semibold">- Devon Mitchell</div>
            <div className="text-gray-400">Digital Marketing Agency Owner</div>
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
            Ready to Automate Your Business Like Devon?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Learn the exact N8N workflows and strategies in AI Accelerator
          </p>
          
          <Link
            href="/ai-accelerator"
            className="cta-button inline-flex items-center gap-3"
          >
            Join AI Accelerator
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}