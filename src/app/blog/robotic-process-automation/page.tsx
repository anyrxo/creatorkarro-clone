'use client'

import React from 'react'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function RoboticProcessAutomation() {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
              <span className="text-orange-400 text-sm font-semibold">RPA AUTOMATION</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Robotic Process Automation: <span className="text-orange-400">Save $500K+/Year</span> by Automating Everything
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Deploy <span className="text-white font-semibold">software robots that work 24/7</span>, eliminate human errors, and transform your business operations at enterprise scale
            </p>

            <BlogMetrics className="text-gray-400" publishDate="2024-06-25" readTime="19 min" />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">The RPA Revolution in Numbers</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">$12.5B</div>
                <p className="text-gray-400 text-sm">RPA Market by 2027</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">86%</div>
                <p className="text-gray-400 text-sm">Error Reduction</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
                <p className="text-gray-400 text-sm">Cost Savings</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">15x</div>
                <p className="text-gray-400 text-sm">Faster Processing</p>
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
          <h2 className="text-3xl font-bold text-white mb-8">Why Your Business Desperately Needs RPA</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Manual Process Hell</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Employees waste 60% of time on repetitive tasks</li>
                <li>• Human errors cost millions annually</li>
                <li>• Processes take days instead of minutes</li>
                <li>• Staff burnout from mundane work</li>
                <li>• Inconsistent process execution</li>
                <li>• Limited to business hours</li>
                <li>• Scaling requires hiring more people</li>
              </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">RPA Paradise</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Robots handle 100% of repetitive work</li>
                <li>• Zero errors in automated processes</li>
                <li>• Complete tasks in seconds</li>
                <li>• Employees focus on strategic work</li>
                <li>• Perfect consistency every time</li>
                <li>• 24/7/365 operation</li>
                <li>• Infinite scalability without hiring</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-8 text-center">
            <p className="text-xl text-gray-300 mb-4">
              "RPA saved us $1.2M in the first year alone. Our 50 software robots now handle work that would require 200+ employees."
            </p>
            <p className="text-white font-semibold">- Jennifer Park, COO at GlobalFinance Corp</p>
          </div>
        </div>
      </section>

      <section
        ref={processAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${processAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">10 Game-Changing RPA Use Cases</h2>
          
          <div className="space-y-8">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Invoice Processing Automation</h3>
                  <p className="text-gray-400 mb-4">Process thousands of invoices without human intervention.</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-orange-400 font-semibold mb-2">Process Flow</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• Extract data from PDFs/emails</li>
                        <li>• Validate against PO numbers</li>
                        <li>• Enter into ERP systems</li>
                        <li>• Route for approvals</li>
                      </ul>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4">
                      <h4 className="text-orange-400 font-semibold mb-2">Results</h4>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li>• 95% faster processing</li>
                        <li>• 100% accuracy</li>
                        <li>• $50K monthly savings</li>
                        <li>• Real-time tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Customer Onboarding</h3>
                  <p className="text-gray-400 mb-4">Automate entire customer onboarding from start to finish.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400">📋</span>
                      <div>
                        <span className="text-white font-semibold">KYC Verification:</span>
                        <span className="text-gray-400"> Automated document verification and background checks</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400">📊</span>
                      <div>
                        <span className="text-white font-semibold">Account Setup:</span>
                        <span className="text-gray-400"> Create accounts across multiple systems simultaneously</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400">📧</span>
                      <div>
                        <span className="text-white font-semibold">Welcome Process:</span>
                        <span className="text-gray-400"> Send personalized welcome kits and training materials</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400">🔄</span>
                      <div>
                        <span className="text-white font-semibold">Integration:</span>
                        <span className="text-gray-400"> Sync data across CRM, ERP, and support systems</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">HR Process Automation</h3>
                  <p className="text-gray-400 mb-4">Transform HR operations with intelligent automation.</p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <h4 className="text-white font-semibold mb-1">Recruitment</h4>
                      <p className="text-sm text-gray-400">Resume screening & interview scheduling</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">💰</div>
                      <h4 className="text-white font-semibold mb-1">Payroll</h4>
                      <p className="text-sm text-gray-400">Automated calculations & disbursements</p>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📝</div>
                      <h4 className="text-white font-semibold mb-1">Leave Management</h4>
                      <p className="text-sm text-gray-400">Request processing & balance tracking</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Data Migration & Integration</h3>
                  <p className="text-gray-400 mb-4">Move and sync data between systems without errors.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Legacy System Extraction</span>
                        <span className="text-green-400 text-sm">100% automated</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Data Transformation</span>
                        <span className="text-green-400 text-sm">Rule-based mapping</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">Validation & Cleansing</span>
                        <span className="text-green-400 text-sm">AI-powered checks</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-zinc-800 rounded">
                        <span className="text-gray-300">System Loading</span>
                        <span className="text-green-400 text-sm">Batch or real-time</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Report Generation & Distribution</h3>
                  <p className="text-gray-400 mb-4">Create and distribute reports automatically across the organization.</p>
                  <div className="bg-zinc-900 rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Pull data from 20+ sources automatically</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Generate custom reports based on templates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Distribute via email, Slack, or portals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Schedule daily, weekly, monthly reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">Alert on anomalies or thresholds</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">6. Order Processing</h3>
                <p className="text-gray-400 mb-3">End-to-end order automation</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Order entry from multiple channels</li>
                  <li>• Inventory checking and allocation</li>
                  <li>• Shipping label generation</li>
                  <li>• Customer notifications</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">7. IT Operations</h3>
                <p className="text-gray-400 mb-3">Automate IT support and maintenance</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Password resets and account creation</li>
                  <li>• Software installation and updates</li>
                  <li>• System monitoring and alerts</li>
                  <li>• Backup and recovery processes</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">8. Compliance Reporting</h3>
                <p className="text-gray-400 mb-3">Ensure 100% regulatory compliance</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Data collection from all systems</li>
                  <li>• Report formatting to standards</li>
                  <li>• Audit trail maintenance</li>
                  <li>• Automatic submission to authorities</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">9. Supply Chain Management</h3>
                <p className="text-gray-400 mb-3">Optimize entire supply chain</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Vendor communication automation</li>
                  <li>• Purchase order processing</li>
                  <li>• Shipment tracking and updates</li>
                  <li>• Inventory level optimization</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">10. Financial Reconciliation</h3>
                <p className="text-gray-400 mb-3">Perfect accuracy in financial operations</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Bank statement reconciliation</li>
                  <li>• Inter-company transactions</li>
                  <li>• GL account matching</li>
                  <li>• Exception reporting</li>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Enterprise RPA Platform Comparison</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-blue-400">UiPath</h3>
                <span className="text-sm text-gray-500">Market Leader</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Intuitive Studio interface</li>
                    <li>• Extensive activity library</li>
                    <li>• Strong AI/ML capabilities</li>
                    <li>• Excellent training resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best For</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Large enterprises</li>
                    <li>• Complex workflows</li>
                    <li>• Citizen developers</li>
                    <li>• AI-powered automation</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-orange-400 font-semibold">Pricing:</span>
                <span className="text-gray-300"> $420/month per robot (starting)</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-green-400">Automation Anywhere</h3>
                <span className="text-sm text-gray-500">Cloud Pioneer</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Cloud-native architecture</li>
                    <li>• Advanced analytics</li>
                    <li>• Bot marketplace</li>
                    <li>• Mobile app support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best For</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Cloud-first organizations</li>
                    <li>• Scalable deployments</li>
                    <li>• Analytics-driven RPA</li>
                    <li>• Mobile automation</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-orange-400 font-semibold">Pricing:</span>
                <span className="text-gray-300"> $750/month Cloud Starter Pack</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400">Blue Prism</h3>
                <span className="text-sm text-gray-500">Enterprise Focus</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Bank-grade security</li>
                    <li>• Scalable architecture</li>
                    <li>• Strong governance</li>
                    <li>• Enterprise integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best For</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Financial services</li>
                    <li>• Regulated industries</li>
                    <li>• Large-scale RPA</li>
                    <li>• Security-first approach</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-orange-400 font-semibold">Pricing:</span>
                <span className="text-gray-300"> Enterprise pricing (contact sales)</span>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-pink-400">Microsoft Power Automate</h3>
                <span className="text-sm text-gray-500">Office Integration</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Strengths</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Office 365 integration</li>
                    <li>• Low-code approach</li>
                    <li>• AI Builder included</li>
                    <li>• Affordable pricing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Best For</h4>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Microsoft shops</li>
                    <li>• Small to medium businesses</li>
                    <li>• Office automation</li>
                    <li>• Quick wins</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-zinc-800 rounded">
                <span className="text-orange-400 font-semibold">Pricing:</span>
                <span className="text-gray-300"> $15/user/month (per user plan)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">RPA Implementation Success Stories</h2>
          
          <div className="space-y-8">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏦</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Bank: $4.2M Annual Savings</h3>
                  <p className="text-gray-400 mb-3">
                    Automated 85% of back-office operations with 200+ RPA bots.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">2.5M</div>
                      <div className="text-sm text-gray-400">Transactions/Month</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400">99.9%</div>
                      <div className="text-sm text-gray-400">Accuracy Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">180</div>
                      <div className="text-sm text-gray-400">FTEs Redeployed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Healthcare Network: 90% Faster Claims</h3>
                  <p className="text-gray-400 mb-3">
                    RPA bots process insurance claims and patient records 24/7.
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Claims processing: 8 hours → 45 minutes</li>
                    <li>• Prior authorization: 3 days → 2 hours</li>
                    <li>• Patient onboarding: 2 hours → 15 minutes</li>
                    <li>• Zero HIPAA violations with automated compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🛒</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">E-commerce Giant: 10x Order Capacity</h3>
                  <p className="text-gray-400 mb-3">
                    Scaled operations without adding headcount using RPA army.
                  </p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-orange-400 font-semibold mb-2">Before RPA</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• 10,000 orders/day capacity</li>
                          <li>• 48-hour processing time</li>
                          <li>• 3% error rate</li>
                          <li>• 200 staff members</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-green-400 font-semibold mb-2">After RPA</h4>
                        <ul className="space-y-1 text-sm text-gray-400">
                          <li>• 100,000 orders/day capacity</li>
                          <li>• 2-hour processing time</li>
                          <li>• 0.01% error rate</li>
                          <li>• 50 staff + 150 bots</li>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Your RPA Implementation Roadmap</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <div className="text-xs text-gray-500">Week 1-2</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Process Discovery</h4>
                  <p className="text-gray-400 text-sm">Identify and prioritize processes for automation</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <div className="text-xs text-gray-500">Week 3-4</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Tool Selection</h4>
                  <p className="text-gray-400 text-sm">Choose RPA platform based on requirements</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <div className="text-xs text-gray-500">Month 2</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Pilot Development</h4>
                  <p className="text-gray-400 text-sm">Build and test your first RPA bot</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <div className="text-xs text-gray-500">Month 3</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Scale & Optimize</h4>
                  <p className="text-gray-400 text-sm">Deploy more bots and establish CoE</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2 font-bold">5</div>
                  <div className="text-xs text-gray-500">Ongoing</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">Continuous Improvement</h4>
                  <p className="text-gray-400 text-sm">Monitor, maintain, and expand automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up ${ctaAnimation.inView ? 'in-view' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Save Millions with RPA?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Master RPA implementation in our comprehensive AI Agents Course
          </p>
          
          <Link
            href="/ai-agents"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all"
          >
            Start Your RPA Journey
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}