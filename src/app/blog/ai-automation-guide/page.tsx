'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function AIAutomationGuide() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const toolsAnimation = useScrollAnimation({ threshold: 0.1 })
  const workflowAnimation = useScrollAnimation({ threshold: 0.1 })
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
              <span className="text-purple-400 text-sm font-semibold">AUTOMATION</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              AI Automation Guide: Build Your <span className="text-purple-400">$10K/Month Business Machine</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Complete blueprint for <span className="text-white font-semibold">automating your entire business with AI tools and workflows</span>
            </p>

            <BlogMetrics publishDate="2024-01-18" readTime="18 min" />
          </div>
        </div>
      </section>

      {/* Income Streams */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">My AI Automation Income</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$47K/mo</div>
                <div className="text-gray-400 text-sm">AI Agency Services</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$23K/mo</div>
                <div className="text-gray-400 text-sm">Automation Templates</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$18K/mo</div>
                <div className="text-gray-400 text-sm">Course Sales</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">92%</div>
                <div className="text-gray-400 text-sm">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Revolution */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I went from working 80-hour weeks to <span className="text-white font-semibold">running a $88K/month business in 4 hours per day</span>. The secret? AI automation.
            </p>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">🤖 What AI Automation Really Means</h2>
              <ul className="space-y-3 text-gray-300">
                <li>• <span className="text-white font-semibold">AI does the work</span> while you sleep</li>
                <li>• <span className="text-white font-semibold">One setup</span> = thousands of hours saved</li>
                <li>• <span className="text-white font-semibold">Scale without hiring</span> employees</li>
                <li>• <span className="text-white font-semibold">24/7 operation</span> across time zones</li>
                <li>• <span className="text-white font-semibold">Consistent quality</span> every single time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Pillars */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The 5 Pillars of AI Automation</h2>
          
          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Content Creation Automation</h3>
                  <p className="text-gray-400 mb-4">Generate unlimited content in minutes</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-purple-400 font-semibold mb-3">Tools I Use:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• ChatGPT API for writing</li>
                        <li>• Midjourney for images</li>
                        <li>• ElevenLabs for voiceovers</li>
                        <li>• Canva API for graphics</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-green-400 font-semibold mb-3">Results:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 1000+ posts/month</li>
                        <li>• 500 videos created</li>
                        <li>• 20 hours → 2 hours</li>
                        <li>• $15K/mo saved</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Customer Service Automation</h3>
                  <p className="text-gray-400 mb-4">24/7 support that never sleeps</p>
                  
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">My Setup:</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li>🤖 <span className="text-purple-400">AI Chatbot:</span> Handles 87% of inquiries</li>
                      <li>📧 <span className="text-purple-400">Email Automation:</span> Smart responses in 2 minutes</li>
                      <li>💬 <span className="text-purple-400">Social DMs:</span> Auto-reply with personalization</li>
                      <li>📞 <span className="text-purple-400">Voice AI:</span> Phone support automation</li>
                    </ul>
                    <p className="text-green-400 text-sm mt-4">Saves 40 hours/week + $8K/month in support costs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Sales & Marketing Automation</h3>
                  <p className="text-gray-400 mb-4">Convert leads on autopilot</p>
                  
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Automated Funnel:</h4>
                    <ol className="space-y-2 text-gray-300">
                      <li>1. <span className="text-purple-400">Lead Capture:</span> AI-optimized forms</li>
                      <li>2. <span className="text-purple-400">Nurture Sequence:</span> Personalized AI emails</li>
                      <li>3. <span className="text-purple-400">Sales Calls:</span> AI books appointments</li>
                      <li>4. <span className="text-purple-400">Follow-up:</span> Smart retargeting</li>
                      <li>5. <span className="text-purple-400">Onboarding:</span> Automated delivery</li>
                    </ol>
                    <p className="text-green-400 text-sm mt-4">32% conversion rate (was 8%)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Data Analysis Automation</h3>
                  <p className="text-gray-400 mb-4">Make smarter decisions faster</p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">Real-time</div>
                      <p className="text-sm text-gray-300">Dashboard updates</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-2">Predictive</div>
                      <p className="text-sm text-gray-300">AI forecasting</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">Actionable</div>
                      <p className="text-sm text-gray-300">Auto-recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3">Product Development Automation</h3>
                  <p className="text-gray-400 mb-4">Build and launch faster than ever</p>
                  
                  <div className="bg-zinc-900 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">AI-Powered Creation:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• <span className="text-purple-400">Course Creation:</span> 30 days → 3 days</li>
                      <li>• <span className="text-purple-400">Template Design:</span> AI generates variations</li>
                      <li>• <span className="text-purple-400">Code Writing:</span> AI builds features</li>
                      <li>• <span className="text-purple-400">Testing:</span> Automated QA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tools */}
      <section 
        ref={toolsAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${toolsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">My AI Automation Stack</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🧠 AI Brains</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-white">ChatGPT API:</span> $200/mo</li>
                <li>• <span className="text-white">Claude API:</span> $150/mo</li>
                <li>• <span className="text-white">Perplexity:</span> $20/mo</li>
                <li>• <span className="text-white">Custom GPTs:</span> Free</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🔧 Automation Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-white">Make.com:</span> $29/mo</li>
                <li>• <span className="text-white">n8n:</span> Self-hosted</li>
                <li>• <span className="text-white">Zapier:</span> $69/mo</li>
                <li>• <span className="text-white">Bardeen:</span> $10/mo</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">🎨 Content AI</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-white">Midjourney:</span> $30/mo</li>
                <li>• <span className="text-white">DALL-E 3:</span> $20/mo</li>
                <li>• <span className="text-white">ElevenLabs:</span> $22/mo</li>
                <li>• <span className="text-white">Synthesia:</span> $30/mo</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4">💬 Communication</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-white">Intercom AI:</span> $99/mo</li>
                <li>• <span className="text-white">ManyChat:</span> $15/mo</li>
                <li>• <span className="text-white">Crisp Chat:</span> $25/mo</li>
                <li>• <span className="text-white">Twilio AI:</span> Usage-based</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">📊 Analytics</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-white">Mixpanel:</span> $25/mo</li>
                <li>• <span className="text-white">Databox:</span> $72/mo</li>
                <li>• <span className="text-white">Google AI:</span> Free</li>
                <li>• <span className="text-white">Custom dashboards:</span> DIY</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">🚀 Deployment</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-white">Vercel AI:</span> $20/mo</li>
                <li>• <span className="text-white">Supabase:</span> $25/mo</li>
                <li>• <span className="text-white">Railway:</span> $10/mo</li>
                <li>• <span className="text-white">Cloudflare:</span> Free tier</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-zinc-900 rounded-xl text-center">
            <p className="text-lg text-gray-300">
              <span className="text-purple-400 font-bold">Total Monthly Cost:</span> ~$850 
              <span className="text-green-400 font-bold ml-4">ROI:</span> 10,353%
            </p>
          </div>
        </div>
      </section>

      {/* Sample Workflows */}
      <section 
        ref={workflowAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${workflowAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Real Automation Workflows</h2>
          
          <div className="space-y-8">
            {/* Workflow 1 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">📝 Blog to Everything Workflow</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 text-white rounded w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                  <p className="text-gray-300">Write blog post in Notion</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 text-white rounded w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                  <p className="text-gray-300">AI creates 20 social posts</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 text-white rounded w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                  <p className="text-gray-300">AI generates video script</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 text-white rounded w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                  <p className="text-gray-300">AI creates newsletter</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-purple-500 text-white rounded w-8 h-8 flex items-center justify-center font-bold text-sm">5</div>
                  <p className="text-gray-300">Everything publishes automatically</p>
                </div>
              </div>
              <p className="text-green-400 text-sm mt-4">Result: 1 piece → 25 pieces of content</p>
            </div>

            {/* Workflow 2 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🎯 Lead to Customer Workflow</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Trigger:</h4>
                  <p className="text-gray-300 mb-3">Someone downloads free resource</p>
                  
                  <h4 className="text-white font-semibold mb-3">Actions:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Welcome email (immediate)</li>
                    <li>• AI segments based on behavior</li>
                    <li>• Personalized sequence starts</li>
                    <li>• AI books sales call if qualified</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Results:</h4>
                  <div className="space-y-3">
                    <div className="bg-zinc-900 rounded p-3">
                      <p className="text-sm text-gray-400">Conversion Rate</p>
                      <p className="text-lg font-bold text-blue-400">23.7%</p>
                    </div>
                    <div className="bg-zinc-900 rounded p-3">
                      <p className="text-sm text-gray-400">Time to Purchase</p>
                      <p className="text-lg font-bold text-green-400">4.2 days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow 3 */}
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">💰 Revenue Optimization Workflow</h3>
              <div className="bg-zinc-900 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">Daily AI Analysis:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>✓ Analyzes all sales data</li>
                  <li>✓ Identifies drop-off points</li>
                  <li>✓ Tests new pricing automatically</li>
                  <li>✓ Adjusts email sequences</li>
                  <li>✓ Optimizes ad targeting</li>
                </ul>
                <p className="text-green-400 text-sm mt-4">Increased revenue by 47% in 60 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Start Your AI Automation Journey</h2>
          
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">The 30-Day Quick Start</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-purple-400 font-bold">Week 1:</span>
                <div className="flex-1">
                  <p className="text-gray-300">Set up ChatGPT API + Make.com. Automate your first workflow.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-purple-400 font-bold">Week 2:</span>
                <div className="flex-1">
                  <p className="text-gray-300">Add content automation. Start generating at scale.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-purple-400 font-bold">Week 3:</span>
                <div className="flex-1">
                  <p className="text-gray-300">Implement customer service AI. Free up your time.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-purple-400 font-bold">Week 4:</span>
                <div className="flex-1">
                  <p className="text-gray-300">Launch sales automation. Watch revenue grow.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-zinc-900/50 rounded text-center">
              <p className="text-white">
                Expected Result: <span className="text-green-400 font-bold">70% of your business automated</span>
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
            Ready to Build Your AI Business Machine?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get my complete AI automation blueprints, workflows, and step-by-step implementation guide
          </p>
          
          <Link
            href="/ai-automation-agency"
            className="cta-button inline-flex items-center gap-3"
          >
            Get The AI Automation Blueprint
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}