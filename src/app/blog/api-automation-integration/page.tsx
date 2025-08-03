'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function APIAutomationIntegration() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const processAnimation = useScrollAnimation({ threshold: 0.1 })
  const toolsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.inView ? 'in-view' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <span className="text-yellow-400 text-sm font-semibold">API AUTOMATION</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              API Automation & Integration: Build <span className="text-yellow-400">$50K/Month Systems</span> That Connect Everything
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Master <span className="text-white font-semibold">automated API workflows</span> that sync data, trigger actions, and scale businesses without limits
            </p>

            <BlogMetrics className="text-gray-400" publishDate="2024-12-20" readTime="22 min" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">The API Economy Is Exploding</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24,000+</div>
                <p className="text-gray-400 text-sm">Public APIs Available</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">83%</div>
                <p className="text-gray-400 text-sm">Companies Use APIs</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$3T</div>
                <p className="text-gray-400 text-sm">API Economy Value</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">350%</div>
                <p className="text-gray-400 text-sm">ROI from API Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">Why API Automation Creates Millionaires</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Manual Integration Hell</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Copy-pasting data between systems</li>
                <li>• $150K+ developer salaries</li>
                <li>• Months to build integrations</li>
                <li>• Constant maintenance headaches</li>
                <li>• Error-prone manual processes</li>
                <li>• Limited to business hours</li>
                <li>• Can't scale without hiring</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">Automated API Magic</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Real-time data synchronization</li>
                <li>• $50-500/month tool costs</li>
                <li>• Deploy in hours, not months</li>
                <li>• Self-healing connections</li>
                <li>• 99.99% accuracy</li>
                <li>• 24/7/365 operation</li>
                <li>• Infinite scalability</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-8 text-center">
            <p className="text-xl text-gray-300 mb-4">
              "Our API automation system connects 47 different tools, processes 2M+ events daily, and generates $180K monthly revenue on autopilot."
            </p>
            <p className="text-white font-semibold">- Jessica Park, Founder of DataSync Pro</p>
          </div>
        </div>
      </section>

      <section
        ref={processAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${processAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">10 API Automation Systems That Print Money</h2>
          
          <div className="space-y-8">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">E-commerce Sync Automation</h3>
                  <p className="text-gray-400 mb-4">Connect stores, marketplaces, and fulfillment systems seamlessly.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">Integrations</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Shopify ↔ Amazon</li>
                        <li>• WooCommerce ↔ eBay</li>
                        <li>• Inventory ↔ Warehouses</li>
                        <li>• Orders ↔ Shipping</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">Revenue Impact</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• 5x sales channels</li>
                        <li>• 0% overselling</li>
                        <li>• 90% time saved</li>
                        <li>• $20-100K/month value</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-zinc-900 rounded-lg">
                    <span className="text-green-400 font-semibold">Implementation:</span>
                    <span className="text-gray-300"> Zapier/Make + custom webhooks = $200/month</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">CRM & Marketing Automation</h3>
                  <p className="text-gray-400 mb-4">Create intelligent customer journeys across all touchpoints.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400">📧</span>
                      <div>
                        <span className="text-white font-semibold">Email Marketing:</span>
                        <span className="text-gray-400"> Trigger campaigns based on CRM events, behavior, and purchases</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400">📱</span>
                      <div>
                        <span className="text-white font-semibold">SMS/WhatsApp:</span>
                        <span className="text-gray-400"> Automated messages for cart abandonment, order updates</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400">🎯</span>
                      <div>
                        <span className="text-white font-semibold">Lead Scoring:</span>
                        <span className="text-gray-400"> AI-powered scoring based on multi-channel engagement</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-400">🔄</span>
                      <div>
                        <span className="text-white font-semibold">Sales Handoff:</span>
                        <span className="text-gray-400"> Automatic lead routing to the right sales rep at perfect timing</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-zinc-900 rounded-lg">
                    <span className="text-green-400 font-semibold">Tools:</span>
                    <span className="text-gray-300"> HubSpot API + ActiveCampaign + Twilio = 300% conversion boost</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Social Media Command Center</h3>
                  <p className="text-gray-400 mb-4">Manage all social platforms from one automated hub.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📅</div>
                      <h4 className="text-white font-semibold mb-1">Scheduling</h4>
                      <p className="text-sm text-gray-400">Post to 10+ platforms simultaneously</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">💬</div>
                      <h4 className="text-white font-semibold mb-1">Engagement</h4>
                      <p className="text-sm text-gray-400">Auto-reply and sentiment analysis</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <h4 className="text-white font-semibold mb-1">Analytics</h4>
                      <p className="text-sm text-gray-400">Unified reporting dashboard</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-zinc-900 rounded-lg p-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">Platform APIs Connected</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-400">
                      <span>• Instagram</span>
                      <span>• TikTok</span>
                      <span>• Twitter/X</span>
                      <span>• LinkedIn</span>
                      <span>• YouTube</span>
                      <span>• Pinterest</span>
                      <span>• Reddit</span>
                      <span>• Discord</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Payment & Finance Automation</h3>
                  <p className="text-gray-400 mb-4">Streamline invoicing, payments, and financial workflows.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Stripe → QuickBooks</span>
                        <span className="text-yellow-400 text-sm">Auto-reconciliation</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">PayPal → Xero</span>
                        <span className="text-yellow-400 text-sm">Invoice generation</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Bank → Expense Tools</span>
                        <span className="text-yellow-400 text-sm">Transaction categorization</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Recurring Billing</span>
                        <span className="text-yellow-400 text-sm">Subscription management</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-zinc-900 rounded-lg">
                    <span className="text-green-400 font-semibold">Business Impact:</span>
                    <span className="text-gray-300"> Save 40 hours/month on bookkeeping, 0% payment errors</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Content Distribution Network</h3>
                  <p className="text-gray-400 mb-4">Publish once, distribute everywhere automatically.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Blog post → Social media posts (10+ platforms)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">YouTube video → Blog, podcast, social clips</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Podcast → Transcripts, quotes, audiograms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Email newsletter → Website, social, RSS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Webinar → Course content, lead magnets</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-zinc-900 rounded-lg">
                    <span className="text-green-400 font-semibold">Result:</span>
                    <span className="text-gray-300"> 10x content reach, 5x engagement, 90% time saved</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Customer Support Automation</h3>
                  <p className="text-gray-400 mb-4">AI-powered support across all channels.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">Ticket Routing</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• AI categorization</li>
                        <li>• Priority detection</li>
                        <li>• Agent assignment</li>
                        <li>• SLA monitoring</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-yellow-400 font-semibold mb-2">Auto-Responses</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• FAQ handling</li>
                        <li>• Order tracking</li>
                        <li>• Account issues</li>
                        <li>• Escalation triggers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">7. Data Pipeline Automation</h3>
                <p className="text-gray-400 mb-3">ETL workflows without coding</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Database → Data warehouse sync</li>
                  <li>• API → Analytics platform</li>
                  <li>• Real-time transformations</li>
                  <li>• Automated reporting</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">8. HR & Recruiting Automation</h3>
                <p className="text-gray-400 mb-3">Streamline entire hiring process</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• ATS → Calendar scheduling</li>
                  <li>• Resume parsing → CRM</li>
                  <li>• Onboarding workflows</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">9. IoT & Sensor Integration</h3>
                <p className="text-gray-400 mb-3">Connect physical world to digital</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Sensor data → Cloud storage</li>
                  <li>• Alerts → Notification systems</li>
                  <li>• Automation triggers</li>
                  <li>• Predictive maintenance</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">10. AI Model Deployment</h3>
                <p className="text-gray-400 mb-3">Production AI/ML pipelines</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Model serving APIs</li>
                  <li>• Batch prediction jobs</li>
                  <li>• A/B testing frameworks</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={toolsAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${toolsAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Automation Tool Stack</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400">Zapier</h3>
                <span className="text-sm text-gray-500">No-Code Leader</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• 5,000+ app integrations</li>
                    <li>• Visual workflow builder</li>
                    <li>• Filters and formatters</li>
                    <li>• Multi-step Zaps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best For</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Simple automations</li>
                    <li>• Non-technical users</li>
                    <li>• Quick integrations</li>
                    <li>• Small businesses</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-yellow-400 font-semibold">Pricing:</span>
                <span className="text-gray-300"> Free (100 tasks) → $29.99/month (750 tasks)</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-green-400">Make (Integromat)</h3>
                <span className="text-sm text-gray-500">Power User Choice</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Visual scenario builder</li>
                    <li>• Complex logic support</li>
                    <li>• Data transformation</li>
                    <li>• Error handling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best For</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Complex workflows</li>
                    <li>• Data processing</li>
                    <li>• Technical teams</li>
                    <li>• High volume</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-yellow-400 font-semibold">Pricing:</span>
                <span className="text-gray-300"> Free (1,000 ops) → $9/month (10,000 ops)</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">n8n</h3>
                <span className="text-sm text-gray-500">Open Source Power</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Self-hosted option</li>
                    <li>• Code flexibility</li>
                    <li>• Custom nodes</li>
                    <li>• No vendor lock-in</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best For</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Developers</li>
                    <li>• Privacy-focused</li>
                    <li>• Custom integrations</li>
                    <li>• Enterprise</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-yellow-400 font-semibold">Pricing:</span>
                <span className="text-gray-300"> Self-hosted (free) → Cloud from $20/month</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-orange-400">Workato</h3>
                <span className="text-sm text-gray-500">Enterprise Grade</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Enterprise connectors</li>
                    <li>• Recipe marketplace</li>
                    <li>• Advanced security</li>
                    <li>• Compliance tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best For</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Large organizations</li>
                    <li>• Complex systems</li>
                    <li>• Regulated industries</li>
                    <li>• IT departments</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-yellow-400 font-semibold">Pricing:</span>
                <span className="text-gray-300"> Contact sales (starts ~$10K/year)</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">API Development & Testing Tools</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-zinc-800 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">Design</h4>
                <p className="text-sm text-gray-400">Postman, Insomnia, Swagger</p>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4">
                <h4 className="text-orange-400 font-semibold mb-2">Gateway</h4>
                <p className="text-sm text-gray-400">Kong, Apigee, AWS API Gateway</p>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Monitoring</h4>
                <p className="text-sm text-gray-400">Datadog, New Relic, Pingdom</p>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2">Webhooks</h4>
                <p className="text-sm text-gray-400">Webhook.site, RequestBin, ngrok</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">API Automation Success Stories</h2>
          
          <div className="space-y-8">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">SaaS Startup: $2.4M ARR in 18 Months</h3>
                  <p className="text-gray-400 mb-3">
                    Built entire product on API integrations without custom development.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">67</div>
                      <div className="text-sm text-gray-400">APIs Connected</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400">500K</div>
                      <div className="text-sm text-gray-400">Daily API Calls</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">$0</div>
                      <div className="text-sm text-gray-400">Development Cost</div>
                    </div>
                  </div>
                  <div className="mt-4 bg-zinc-900 rounded-lg p-4">
                    <h4 className="text-yellow-400 font-semibold mb-2">Tech Stack</h4>
                    <p className="text-sm text-gray-400">
                      Make.com for workflows + Retool for internal tools + Stripe for payments + 
                      SendGrid for emails + Twilio for SMS + Airtable for database
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📈</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Marketing Agency: 10x Client Results</h3>
                  <p className="text-gray-400 mb-3">
                    Automated entire client reporting and campaign management.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Connected Google Ads, Facebook Ads, Analytics, Search Console</li>
                    <li>• Automated weekly reports with insights and recommendations</li>
                    <li>• Real-time alerts for campaign performance issues</li>
                    <li>• Reduced reporting time from 40 hours to 1 hour per week</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏪</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">E-commerce Brand: $50K Monthly Savings</h3>
                  <p className="text-gray-400 mb-3">
                    Unified inventory across 8 sales channels with zero overselling.
                  </p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-yellow-400 font-semibold mb-2">Before API Automation</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• 5 full-time inventory managers</li>
                          <li>• Daily overselling issues</li>
                          <li>• 48-hour sync delays</li>
                          <li>• $50K monthly labor cost</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2">After API Automation</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• 0 dedicated staff needed</li>
                          <li>• Real-time inventory sync</li>
                          <li>• < 1 second updates</li>
                          <li>• $500 monthly tool cost</li>
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

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your API Automation Roadmap</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-6">30-Day Implementation Plan</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <div className="text-xs text-gray-500">Week 1</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Map Your Tech Stack</h4>
                  <p className="text-gray-400 text-sm">List all tools and identify integration opportunities</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <div className="text-xs text-gray-500">Week 2</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Build First Integration</h4>
                  <p className="text-gray-400 text-sm">Start with highest ROI connection</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <div className="text-xs text-gray-500">Week 3</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Test & Optimize</h4>
                  <p className="text-gray-400 text-sm">Monitor performance and fix edge cases</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <div className="text-xs text-gray-500">Week 4</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Scale & Document</h4>
                  <p className="text-gray-400 text-sm">Add more integrations and create playbooks</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">5</div>
                  <div className="text-xs text-gray-500">Ongoing</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Maintain & Expand</h4>
                  <p className="text-gray-400 text-sm">Monitor, update, and add new integrations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Pro Tips for API Success</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">✓</span>
                <span>Start simple - your first integration should take < 1 hour to build</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">✓</span>
                <span>Always implement error handling and retry logic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">✓</span>
                <span>Document everything - future you will thank present you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">✓</span>
                <span>Monitor API limits and implement rate limiting</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">✓</span>
                <span>Build redundancy - what happens if an API goes down?</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up ${ctaAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build $50K/Month API Systems?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Master API automation and integration in our comprehensive AI Agents Course
          </p>
          
          <Link
            href="/ai-agents"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 transition-all"
          >
            Start API Automation Mastery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}