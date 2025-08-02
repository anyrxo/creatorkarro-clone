'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

// Schema markup for rich snippets and featured snippets
const passiveIncomeSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Passive Income Ideas 2025: $100K/Year Blueprint & 7 Income Streams",
  "description": "Learn how to make passive income online with proven passive income strategies. Build automated income streams that generate $10K monthly passive income from home.",
  "image": "https://iimagined.ai/passive-income-blueprint-featured.jpg",
  "totalTime": "PT90D",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "500"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Online course platform"
    },
    {
      "@type": "HowToSupply", 
      "name": "Digital product creation tools"
    },
    {
      "@type": "HowToSupply",
      "name": "Email marketing software"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose profitable passive income stream",
      "text": "Select from online courses, digital products, affiliate marketing, or automated business models for passive income"
    },
    {
      "@type": "HowToStep", 
      "name": "Build automated income system",
      "text": "Create passive income streams using proven strategies for making money while you sleep"
    },
    {
      "@type": "HowToStep",
      "name": "Scale to $10K monthly passive income", 
      "text": "Implement multiple passive income ideas to reach $100K yearly automated income"
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are the best passive income ideas for beginners in 2025?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best passive income ideas for beginners include online courses ($3,200/mo average), digital products ($2,100/mo), affiliate marketing ($1,800/mo), YouTube ad revenue ($500/mo), stock content ($300/mo), print on demand ($300/mo), and SaaS subscriptions ($200/mo). Start with digital products as they require minimal investment and can generate $1,000-2,500/mo within 90 days."
      }
    },
    {
      "@type": "Question", 
      "name": "How much money do you need to start passive income?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can start building passive income with as little as $0-500. Digital products and affiliate marketing require minimal upfront investment. Online courses need basic recording equipment ($200-500). The key is starting with one income stream and reinvesting profits to scale. Most successful passive income earners started with less than $500."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to make $10K per month passive income?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Building $10K monthly passive income typically takes 12-24 months with consistent effort. Year 1: $0-1,000/mo, Year 2: $1,000-5,000/mo, Year 3: $5,000-10,000/mo. Success depends on choosing profitable niches, creating quality products, and implementing proper automation systems. The first $1,000/mo is the hardest."
      }
    },
    {
      "@type": "Question",
      "name": "Is passive income really passive?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Passive income requires 3-6 months of active work upfront to build systems that run automatically. Once established, maintenance takes 2-10 hours monthly. True passive income comes from creating assets (courses, products, content) that sell repeatedly without your involvement through automated sales funnels and delivery systems."
      }
    },
    {
      "@type": "Question",
      "name": "What are realistic passive income expectations?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Realistic passive income expectations: Month 1-3: $0-500, Month 4-6: $500-1,500, Month 7-12: $1,500-5,000, Year 2: $5,000-10,000/mo. Most people fail because they expect overnight results. Success requires patience, multiple income streams, and continuous optimization. Start with one stream and scale gradually."
      }
    }
  ]
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Passive Income Blueprint: How to Make $100K/Year from 7 Income Streams",
  "alternativeHeadline": "The Complete Guide to Building Multiple Passive Income Streams Online",
  "image": "https://iimagined.ai/passive-income-blueprint-featured.jpg",
  "author": {
    "@type": "Person",
    "name": "Anyro",
    "url": "https://iimagined.ai"
  },
  "publisher": {
    "@type": "Organization",
    "name": "IImagined.ai",
    "logo": {
      "@type": "ImageObject",
      "url": "https://iimagined.ai/logo.png"
    }
  },
  "datePublished": "2024-03-02",
  "dateModified": "2024-03-02",
  "description": "Discover how to build passive income streams that generate $8,400/month. Learn proven passive income ideas, strategies, and the exact blueprint for financial freedom.",
  "keywords": "passive income ideas, how to make passive income, passive income streams, make money while you sleep, automated income, online passive income, passive income strategies, $10k monthly passive income",
  "articleSection": "Personal Finance",
  "wordCount": "4500"
}

export default function PassiveIncomeBlueprint() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const streamsAnimation = useScrollAnimation({ threshold: 0.1 })
  const roadmapAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <>
      {/* Schema markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(passiveIncomeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <div className="min-h-screen bg-dark">
        {/* Hero Section - Optimized for featured snippets */}
        <section className="section-spacing overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              ref={heroAnimation.elementRef}
              className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <span className="text-green-400 text-sm font-semibold">PASSIVE INCOME BLUEPRINT 2025</span>
              </div>

              <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                How to Make Passive Income: <span className="text-green-400">$100K/Year Blueprint</span> from 7 Proven Income Streams
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-8">
                Discover the exact <span className="text-white font-semibold">passive income strategies and automated income systems</span> that generate $8,400/month while you sleep using real passive income ideas that work
              </p>

              <BlogMetrics publishDate="2025-03-02" readTime="22 min" />
              
              {/* Quick answer for featured snippets */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
                <h2 className="text-xl font-bold text-white mb-4">🎯 Quick Answer: Best Passive Income Ideas 2025</h2>
                <p className="text-gray-300 text-left">
                  The most profitable passive income streams include <strong>online courses</strong> ($3,200/mo average), 
                  <strong>digital products</strong> ($2,100/mo), <strong>affiliate marketing</strong> ($1,800/mo), 
                  <strong>YouTube ad revenue</strong> ($500/mo), and <strong>automated SaaS tools</strong> ($200/mo). 
                  Building multiple passive income streams can generate $10K+ monthly within 12-24 months with proper systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Passive Income Breakdown - Optimized for entity SEO */}
        <section className="py-16 px-4 border-y border-gray-800" itemScope itemType="https://schema.org/MonetaryAmount">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-white text-center mb-4">My Current Passive Income Streams: Real Numbers</h2>
              <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
                These passive income ideas generate consistent monthly revenue through automated systems. Each income stream requires 3-6 months to build but runs on autopilot afterward.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-zinc-900 rounded-xl p-4 text-center" itemProp="value">
                  <h3 className="text-sm text-gray-400 mb-2">Online Course Sales</h3>
                  <p className="text-2xl font-bold text-green-400">$3,200</p>
                  <p className="text-xs text-gray-500">Monthly passive income</p>
                  <p className="text-xs text-blue-400 mt-1">38% of total</p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-4 text-center" itemProp="value">
                  <h3 className="text-sm text-gray-400 mb-2">Digital Products</h3>
                  <p className="text-2xl font-bold text-blue-400">$2,100</p>
                  <p className="text-xs text-gray-500">Automated sales</p>
                  <p className="text-xs text-blue-400 mt-1">25% of total</p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-4 text-center" itemProp="value">
                  <h3 className="text-sm text-gray-400 mb-2">Affiliate Marketing</h3>
                  <p className="text-2xl font-bold text-purple-400">$1,800</p>
                  <p className="text-xs text-gray-500">Recurring commissions</p>
                  <p className="text-xs text-blue-400 mt-1">21% of total</p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-4 text-center" itemProp="value">
                  <h3 className="text-sm text-gray-400 mb-2">Other Income Streams</h3>
                  <p className="text-2xl font-bold text-pink-400">$1,300</p>
                  <p className="text-xs text-gray-500">4 additional sources</p>
                  <p className="text-xs text-blue-400 mt-1">16% of total</p>
                </div>
              </div>
              
              {/* Additional stats for SEO */}
              <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <div className="text-xl font-bold text-yellow-400">$100,800</div>
                  <div className="text-sm text-gray-400">Yearly Passive Income</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <div className="text-xl font-bold text-cyan-400">7 Streams</div>
                  <div className="text-sm text-gray-400">Diversified Sources</div>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <div className="text-xl font-bold text-orange-400">2-10 hrs/mo</div>
                  <div className="text-sm text-gray-400">Maintenance Time</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-3xl font-bold text-white">Total Monthly Passive Income: <span className="text-green-400">$8,400</span></p>
                <p className="text-gray-400">Completely automated through sales funnels and delivery systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Truth About Passive Income - Semantic SEO Section */}
        <section 
          ref={contentAnimation.elementRef}
          className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">The Truth About Building Passive Income Online</h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Let me expose the reality of passive income: It's not passive at first. Every passive income stream generating money today required <span className="text-white font-semibold">3-6 months of intensive work</span> to build automated systems. But once established? These income streams make money while you sleep, travel, or focus on building new ones.
              </p>

              {/* Featured snippet bait - What is passive income */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-green-400 mb-4">💰 What Is Passive Income? (Complete Definition)</h3>
                <p className="text-gray-300 mb-4">
                  <strong>Passive income</strong> is money earned with minimal ongoing effort through automated systems, digital assets, or investments. The best passive income ideas include online courses, digital products, affiliate marketing, content licensing, and automated businesses that generate revenue 24/7 without active involvement.
                </p>
                
                <h4 className="text-lg font-semibold text-white mb-3">Key Characteristics of True Passive Income:</h4>
                <ul className="space-y-3 text-gray-300">
                  <li>• <span className="text-white font-semibold">Automated delivery</span>: Products/services delivered without your involvement</li>
                  <li>• <span className="text-white font-semibold">Scalable systems</span>: Income grows without proportional time increase</li>
                  <li>• <span className="text-white font-semibold">Recurring revenue</span>: Customers pay repeatedly or new customers find you</li>
                  <li>• <span className="text-white font-semibold">Location independence</span>: Earn from anywhere with internet</li>
                  <li>• <span className="text-white font-semibold">Time leverage</span>: Create once, sell forever model</li>
                </ul>
              </div>

              {/* Reality Check - Long-tail keywords */}
              <div className="bg-zinc-900/50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">🚨 Realistic Passive Income Timeline</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span><strong className="text-white">Year 1:</strong> Learning phase</span>
                    <span className="text-red-400">$127 total (not monthly)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span><strong className="text-white">Year 2:</strong> Foundation building</span>
                    <span className="text-yellow-400">$1,000/month milestone</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                    <span><strong className="text-white">Year 3:</strong> Scaling systems</span>
                    <span className="text-blue-400">$5,000/month achieved</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span><strong className="text-white">Year 4:</strong> Multiple streams</span>
                    <span className="text-green-400">$8,400/month automated</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">
                  The difference between failure and success? I stopped chasing "quick passive income" schemes and built <span className="text-white font-semibold">real digital assets</span> that generate automated income through proven passive income strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 7 Passive Income Streams - Detailed breakdown */}
        <section 
          ref={streamsAnimation.elementRef}
          className={`section-spacing bg-zinc-900 scroll-fade-up ${streamsAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">7 Best Passive Income Streams That Actually Work in 2025</h2>
            <p className="text-center text-gray-400 mb-8 max-w-4xl mx-auto">
              These proven passive income ideas generate real monthly revenue through automated systems. Each income stream includes specific examples, earnings potential, and implementation strategies for making passive income online.
            </p>
            
            <div className="space-y-8">
              {/* Stream 1 - Online Courses */}
              <div className="bg-zinc-800 rounded-xl p-6" itemScope itemType="https://schema.org/Course">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Online Courses: Best Passive Income Stream ($3,200/mo)</h3>
                    <p className="text-gray-400 mb-4">
                      Online courses are the highest-earning passive income idea, generating consistent revenue through automated sales funnels. Create once, sell forever through platforms like Teachable, Thinkific, or your own website.
                    </p>
                    
                    <div className="bg-zinc-900 rounded-lg p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-green-400 font-semibold mb-3">Course Success Factors:</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>• Solve ONE specific expensive problem</li>
                            <li>• Price between $197-997 for best conversions</li>
                            <li>• Include downloadable templates/resources</li>
                            <li>• Focus on evergreen topics only</li>
                            <li>• Build automated email sales funnel</li>
                            <li>• Add upsells and order bumps</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-blue-400 font-semibold mb-3">My Top Performing Courses:</h4>
                          <ul className="space-y-2 text-gray-300">
                            <li>• <strong>AI Automation Mastery:</strong> $997 (40 sales/mo)</li>
                            <li>• <strong>Content Creation System:</strong> $497 (35 sales/mo)</li>
                            <li>• <strong>Instagram Growth Blueprint:</strong> $297 (60 sales/mo)</li>
                            <li>• <strong>Passive Income Accelerator:</strong> $497 (25 sales/mo)</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-4 bg-zinc-800 rounded">
                        <p className="text-sm text-gray-300">
                          <span className="text-green-400 font-semibold">Time Investment:</span> 2-4 weeks to create | 
                          <span className="text-green-400 font-semibold ml-2">Maintenance:</span> 2 hours/month for updates | 
                          <span className="text-green-400 font-semibold ml-2">ROI:</span> 2,000-5,000%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stream 2 - Digital Products */}
              <div className="bg-zinc-800 rounded-xl p-6" itemScope itemType="https://schema.org/Product">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Digital Products: Easiest Passive Income Start ($2,100/mo)</h3>
                    <p className="text-gray-400 mb-4">
                      Digital products offer the fastest path to passive income for beginners. Templates, guides, checklists, and tools sell 24/7 through platforms like Gumroad, Etsy, or your website with zero fulfillment needed.
                    </p>
                    
                    <div className="bg-zinc-900 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-3">Top Digital Product Ideas & Real Earnings:</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-gray-300">Notion Templates Bundle (productivity)</span>
                          <span className="text-green-400">$47 × 180 sales = $846/mo</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-gray-300">Social Media Content Calendar</span>
                          <span className="text-green-400">$27 × 220 sales = $594/mo</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-gray-300">Email Templates Pack (50 templates)</span>
                          <span className="text-green-400">$37 × 120 sales = $444/mo</span>
                        </div>
                        <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                          <span className="text-gray-300">Budget Spreadsheet Calculator</span>
                          <span className="text-green-400">$17 × 150 sales = $255/mo</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Other Digital Products (15 items)</span>
                          <span className="text-green-400">Various pricing = $216/mo</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 p-3 bg-zinc-800 rounded">
                        <p className="text-sm text-gray-300">
                          <span className="text-green-400 font-semibold">Creation time:</span> 2-6 hours per product | 
                          <span className="text-green-400 font-semibold ml-2">Platforms:</span> Gumroad (5% fee), Etsy (6.5% fee), Own site (0% fee)
                        </p>
                      </div>
                      
                      <div className="mt-4 p-4 bg-green-500/10 rounded-lg">
                        <h5 className="text-white font-semibold mb-2">Quick Start Strategy:</h5>
                        <p className="text-sm text-gray-300">
                          Identify a process you repeat often → Create a template/checklist → Price at $17-47 → 
                          List on multiple platforms → Optimize based on sales data. First sale typically within 7 days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stream 3 - Affiliate Marketing */}
              <div className="bg-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Affiliate Marketing: Recurring Passive Income ($1,800/mo)</h3>
                    <p className="text-gray-400 mb-4">
                      Affiliate marketing generates passive income by promoting tools and services you already use. Focus on recurring commission programs for predictable monthly passive income that compounds over time.
                    </p>
                    
                    <div className="bg-zinc-900 rounded-lg p-6">
                      <h4 className="text-white font-semibold mb-3">Highest-Paying Affiliate Programs (Recurring):</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <ul className="space-y-2 text-gray-300">
                          <li>• <strong>ConvertKit:</strong> $400/mo (40% lifetime)</li>
                          <li>• <strong>Canva Pro:</strong> $350/mo (80% first year)</li>
                          <li>• <strong>Notion:</strong> $300/mo (50% recurring)</li>
                          <li>• <strong>TubeBuddy:</strong> $250/mo (50% lifetime)</li>
                        </ul>
                        <ul className="space-y-2 text-gray-300">
                          <li>• <strong>Teachable:</strong> $200/mo (30% recurring)</li>
                          <li>• <strong>ClickFunnels:</strong> $150/mo (40% recurring)</li>
                          <li>• <strong>Grammarly:</strong> $150/mo (20-40%)</li>
                          <li>• <strong>Others:</strong> $150/mo combined</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 bg-zinc-800 rounded">
                        <h5 className="text-green-400 font-semibold mb-2">Affiliate Success Strategy:</h5>
                        <p className="text-sm text-gray-300 mb-2">
                          1. Only promote tools you actively use and love<br/>
                          2. Create comparison content and tutorials<br/>
                          3. Focus on high-ticket recurring programs<br/>
                          4. Build email list for affiliate promotions<br/>
                          5. Disclose relationships transparently
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* More Passive Income Streams Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">4. YouTube Ad Revenue ($500/mo)</h4>
                  <p className="text-gray-400 mb-3">Create evergreen how-to videos that generate passive income through ads</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 45 evergreen videos published</li>
                    <li>• 150K monthly views average</li>
                    <li>• $3-5 RPM (revenue per 1000 views)</li>
                    <li>• Upload 1 optimized video/month now</li>
                    <li>• Best topics: Tutorials, reviews, comparisons</li>
                  </ul>
                  <p className="text-green-400 text-sm mt-3 font-semibold">Key: SEO-optimized titles and evergreen content</p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">5. Stock Content Licensing ($300/mo)</h4>
                  <p className="text-gray-400 mb-3">Sell photos, videos, and graphics for passive income</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 500+ items across platforms</li>
                    <li>• Shutterstock, Adobe Stock, Getty</li>
                    <li>• $0.25-5 per download average</li>
                    <li>• Batch upload 50 items monthly</li>
                    <li>• Focus: Business, tech, lifestyle niches</li>
                  </ul>
                  <p className="text-green-400 text-sm mt-3 font-semibold">Tip: Quality over quantity for approvals</p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">6. Print on Demand ($300/mo)</h4>
                  <p className="text-gray-400 mb-3">Design once, earn forever with zero inventory</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 200+ designs across platforms</li>
                    <li>• Redbubble, Printful, Teespring</li>
                    <li>• $2-10 profit per item sold</li>
                    <li>• Mix trending + evergreen designs</li>
                    <li>• No inventory or shipping required</li>
                  </ul>
                  <p className="text-green-400 text-sm mt-3 font-semibold">Success: Niche down for better sales</p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">7. SaaS/App Subscriptions ($200/mo)</h4>
                  <p className="text-gray-400 mb-3">Simple tools that solve specific problems</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Chrome extension: $4.99/mo × 25 users</li>
                    <li>• Notion widget: $2.99/mo × 20 users</li>
                    <li>• API tool: $19.99/mo × 5 users</li>
                    <li>• Built with no-code tools (Bubble, Zapier)</li>
                    <li>• 50 total paying subscribers</li>
                  </ul>
                  <p className="text-green-400 text-sm mt-3 font-semibold">Start small, solve one problem well</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The PASSIVE System Framework */}
        <section className="section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The P.A.S.S.I.V.E. Income System: Complete Framework</h2>
            
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-8">
              <p className="text-gray-300 mb-6">
                This proven framework for building passive income streams ensures long-term success and sustainable growth. Each principle is based on real-world testing across multiple income streams.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">P</span>
                  <div>
                    <h4 className="text-white font-semibold">Problem-First Approach</h4>
                    <p className="text-gray-400">Find expensive problems people desperately need solved. The bigger the problem, the more they'll pay for the solution.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">A</span>
                  <div>
                    <h4 className="text-white font-semibold">Automate Everything Possible</h4>
                    <p className="text-gray-400">Sales funnels, delivery systems, customer support - if you're manually involved, it's not passive income. Use tools like Zapier, ConvertKit, and Teachable.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">S</span>
                  <div>
                    <h4 className="text-white font-semibold">Scale Before Perfection</h4>
                    <p className="text-gray-400">Launch at 80% quality and improve based on customer feedback. Perfectionism kills more passive income dreams than anything else.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">S</span>
                  <div>
                    <h4 className="text-white font-semibold">Stack Multiple Income Streams</h4>
                    <p className="text-gray-400">Never depend on one source. Build 5-10 passive income streams for true financial security and consistent growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">I</span>
                  <div>
                    <h4 className="text-white font-semibold">Invest Profits Strategically</h4>
                    <p className="text-gray-400">Reinvest 50% into growth (ads, tools, content), save 30% for stability, enjoy 20% guilt-free. This ensures sustainable scaling.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">V</span>
                  <div>
                    <h4 className="text-white font-semibold">Value Compounds Over Time</h4>
                    <p className="text-gray-400">Each product should promote others naturally. Build an ecosystem where customers ascend through your value ladder.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold text-xl">E</span>
                  <div>
                    <h4 className="text-white font-semibold">Evergreen Content Only</h4>
                    <p className="text-gray-400">If it won't sell profitably in 5 years, don't build it. Focus on timeless solutions to permanent problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 90-Day Passive Income Roadmap */}
        <section 
          ref={roadmapAnimation.elementRef}
          className={`section-spacing bg-zinc-900 scroll-fade-up ${roadmapAnimation.isVisible ? 'visible' : ''}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-4 text-center">90-Day Passive Income Roadmap: $0 to $1,000/Month</h2>
            <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto">
              Follow this exact roadmap to build your first $1,000/month passive income stream. This proven system works for complete beginners with minimal startup capital.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Days 1-30: Foundation Phase (Target: First $100)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Week 1:</strong> Choose your first passive income stream (start with digital products for fastest results)</li>
                  <li>• <strong>Week 2:</strong> Research top competitors and identify gaps in the market</li>
                  <li>• <strong>Week 3:</strong> Create your minimum viable product (aim for "good enough")</li>
                  <li>• <strong>Week 4:</strong> Set up sales page, payment processing, and automated delivery</li>
                </ul>
                <div className="mt-4 p-3 bg-green-500/20 rounded">
                  <p className="text-green-400 text-sm font-semibold">Milestone: Launch and make your first $100 in passive income</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Days 31-60: Optimization Phase (Target: $500/month)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Week 5-6:</strong> Gather customer feedback and improve product based on data</li>
                  <li>• <strong>Week 7:</strong> Build email automation sequence for repeat sales</li>
                  <li>• <strong>Week 8:</strong> Create content marketing strategy (blog posts, videos, social media)</li>
                  <li>• <strong>Week 8:</strong> Add upsells and order bumps to increase average order value</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-500/20 rounded">
                  <p className="text-blue-400 text-sm font-semibold">Milestone: Reach $500/month recurring passive income</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Days 61-90: Scale Phase (Target: $1,000/month)</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>Week 9-10:</strong> Launch second passive income stream (complementary product)</li>
                  <li>• <strong>Week 11:</strong> Implement affiliate marketing for additional revenue</li>
                  <li>• <strong>Week 12:</strong> Document systems and optimize for complete automation</li>
                  <li>• <strong>Week 13:</strong> Scale with paid ads or strategic partnerships</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-500/20 rounded">
                  <p className="text-purple-400 text-sm font-semibold">Milestone: Hit $1,000/month in automated passive income</p>
                </div>
              </div>
              
              <div className="bg-zinc-800 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">🎯 Quick Win Strategy for Beginners:</h4>
                <p className="text-gray-300 mb-3">
                  Start with a simple digital template solving a specific problem. Price at $27-47. 
                  Create in one weekend. Launch to your network. Aim for 10 sales in the first month.
                </p>
                <p className="text-green-400 font-semibold">
                  10 sales × $37 average = $370 passive income in month 1
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Passive Income Myths */}
        <section className="section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">5 Passive Income Myths That Keep You Broke</h2>
            
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <div>
                    <p className="text-white font-semibold">Myth: "Passive income is completely passive from day one"</p>
                    <p className="text-gray-400">Reality: Every passive income stream requires 3-6 months of intensive work upfront. The "passive" part comes after building automated systems.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <div>
                    <p className="text-white font-semibold">Myth: "You need a huge audience to make passive income"</p>
                    <p className="text-gray-400">Reality: 1,000 true fans spending $100/year = $100K. Focus on serving a small audience exceptionally well rather than chasing millions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <div>
                    <p className="text-white font-semibold">Myth: "Saturated markets mean no opportunity"</p>
                    <p className="text-gray-400">Reality: Competition validates demand. Every market has underserved sub-niches. Find your unique angle and serve better than incumbents.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <div>
                    <p className="text-white font-semibold">Myth: "You must be an expert to sell information"</p>
                    <p className="text-gray-400">Reality: You only need to be 2-3 steps ahead of beginners. Document your learning journey and teach what you know.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <div>
                    <p className="text-white font-semibold">Myth: "Passive income equals easy money"</p>
                    <p className="text-gray-400">Reality: It's front-loaded hard work for future freedom. The payoff is worth it, but expect to work harder than ever for the first 6-12 months.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Optimized for Featured Snippets */}
        <section className="section-spacing bg-gradient-to-b from-zinc-900 to-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Passive Income FAQs: Everything You Need to Know</h2>
            
            <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
              {/* FAQ 1 */}
              <div className="bg-zinc-800 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-green-400 mb-3" itemProp="name">
                  What are the best passive income ideas for beginners in 2025?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-300">
                    <p className="mb-3">
                      The best passive income ideas for beginners are <strong>digital products</strong> (templates, guides, checklists) 
                      and <strong>affiliate marketing</strong>. These require minimal upfront investment and can generate 
                      $1,000-2,500/month within 90 days.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• Digital products: $17-97 price point, 2-6 hours to create</li>
                      <li>• Affiliate marketing: $0 to start, promote products you use</li>
                      <li>• Online courses: Higher effort but $197-997 per sale</li>
                      <li>• Stock content: Upload existing photos/videos</li>
                      <li>• Print on demand: No inventory needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className="bg-zinc-800 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-green-400 mb-3" itemProp="name">
                  How much money do you need to start building passive income?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-300">
                    <p className="mb-3">
                      You can start building passive income with <strong>$0-500 initial investment</strong>. Many successful 
                      passive income streams require only time and effort, not money.
                    </p>
                    <div className="bg-zinc-900 rounded-lg p-4 mt-3">
                      <h4 className="text-white font-semibold mb-2">Startup Costs by Income Stream:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Digital products: $0 (use free tools)</li>
                        <li>• Affiliate marketing: $0 (free to join programs)</li>
                        <li>• Print on demand: $0 (they handle production)</li>
                        <li>• Online courses: $200-500 (basic equipment)</li>
                        <li>• Stock content: $0 (use phone camera)</li>
                        <li>• YouTube channel: $0-200 (optional equipment)</li>
                        <li>• SaaS tool: $20-50/mo (no-code platforms)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className="bg-zinc-800 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-green-400 mb-3" itemProp="name">
                  How long does it take to make $10K per month in passive income?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-300">
                    <p className="mb-3">
                      Reaching $10K monthly passive income typically takes <strong>12-24 months</strong> of consistent effort. 
                      Success timeline depends on your niche selection, product quality, and marketing effectiveness.
                    </p>
                    <div className="bg-zinc-900 rounded-lg p-4 mt-3">
                      <h4 className="text-white font-semibold mb-2">Realistic Income Timeline:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Months 1-3: $0-500/month (learning phase)</li>
                        <li>• Months 4-6: $500-1,500/month (optimization)</li>
                        <li>• Months 7-12: $1,500-5,000/month (scaling)</li>
                        <li>• Year 2: $5,000-10,000/month (multiple streams)</li>
                        <li>• Year 3+: $10,000+/month (compound growth)</li>
                      </ul>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">
                      Key factor: Building multiple income streams accelerates growth exponentially.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ 4 */}
              <div className="bg-zinc-800 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-green-400 mb-3" itemProp="name">
                  What's the difference between passive income and active income?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-300">
                    <p className="mb-3">
                      <strong>Passive income</strong> generates money without ongoing time investment through automated systems, 
                      while <strong>active income</strong> requires trading time for money continuously.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div className="bg-zinc-900 rounded-lg p-3">
                        <h5 className="text-white font-semibold mb-2">Passive Income:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Works 24/7 automatically</li>
                          <li>• Scales without time increase</li>
                          <li>• Location independent</li>
                          <li>• Compounds over time</li>
                          <li>• Create once, sell forever</li>
                        </ul>
                      </div>
                      <div className="bg-zinc-900 rounded-lg p-3">
                        <h5 className="text-white font-semibold mb-2">Active Income:</h5>
                        <ul className="space-y-1 text-sm">
                          <li>• Requires active work</li>
                          <li>• Limited by hours available</li>
                          <li>• Location dependent</li>
                          <li>• Stops when you stop</li>
                          <li>• Trade time for money</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ 5 */}
              <div className="bg-zinc-800 rounded-xl p-6" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 className="text-xl font-bold text-green-400 mb-3" itemProp="name">
                  Can you really make money while you sleep?
                </h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text" className="text-gray-300">
                    <p>
                      Yes, you can make money while you sleep through <strong>automated passive income systems</strong>. 
                      Digital products, online courses, and affiliate marketing generate sales 24/7 through automated 
                      sales funnels, payment processing, and digital delivery systems. The key is building systems that 
                      operate without your involvement - automated emails nurture leads, payment processors handle transactions, 
                      and digital platforms deliver products instantly to customers worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Passive Income Tools & Resources */}
        <section className="section-spacing bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Essential Tools for Building Passive Income</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-zinc-800 rounded-xl overflow-hidden" itemScope itemType="https://schema.org/Table">
                <thead className="bg-green-500/20">
                  <tr>
                    <th className="p-4 text-left text-white font-semibold">Tool Category</th>
                    <th className="p-4 text-left text-white font-semibold">Recommended Tools</th>
                    <th className="p-4 text-left text-white font-semibold">Purpose</th>
                    <th className="p-4 text-left text-white font-semibold">Monthly Cost</th>
                    <th className="p-4 text-left text-white font-semibold">ROI Potential</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-700">
                  <tr>
                    <td className="p-4 text-white font-semibold">Course Platforms</td>
                    <td className="p-4 text-gray-300">Teachable, Thinkific</td>
                    <td className="p-4 text-gray-300">Host & sell courses</td>
                    <td className="p-4 text-green-400">$39-119</td>
                    <td className="p-4 text-blue-400">2,000-5,000%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white font-semibold">Email Marketing</td>
                    <td className="p-4 text-gray-300">ConvertKit, ActiveCampaign</td>
                    <td className="p-4 text-gray-300">Automated funnels</td>
                    <td className="p-4 text-green-400">$29-79</td>
                    <td className="p-4 text-blue-400">1,500-3,000%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white font-semibold">Digital Sales</td>
                    <td className="p-4 text-gray-300">Gumroad, SendOwl</td>
                    <td className="p-4 text-gray-300">Sell digital products</td>
                    <td className="p-4 text-green-400">$0-10 + fees</td>
                    <td className="p-4 text-blue-400">1,000-2,000%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white font-semibold">Design Tools</td>
                    <td className="p-4 text-gray-300">Canva, Figma</td>
                    <td className="p-4 text-gray-300">Create products</td>
                    <td className="p-4 text-green-400">$0-15</td>
                    <td className="p-4 text-blue-400">500-1,000%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white font-semibold">Automation</td>
                    <td className="p-4 text-gray-300">Zapier, Make.com</td>
                    <td className="p-4 text-gray-300">Connect systems</td>
                    <td className="p-4 text-green-400">$20-50</td>
                    <td className="p-4 text-blue-400">800-1,500%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl">
              <p className="text-center text-gray-300">
                <strong className="text-white">Pro Tip:</strong> Start with free tools and upgrade only when passive income covers the costs. 
                Most successful creators begin with $0-50/month in tool expenses.
              </p>
            </div>
          </div>
        </section>

        {/* Action Steps */}
        <section className="section-spacing bg-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Start Today: Your First $1,000 in Passive Income</h2>
            
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-green-400 mb-6">The Quickest Path to Passive Income Success</h3>
              
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <div>
                    <p className="text-white font-semibold">This Week: List 10 problems you've solved</p>
                    <p className="text-gray-400 text-sm">Personal challenges, work solutions, life hacks - everything counts as potential product ideas</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <div>
                    <p className="text-white font-semibold">Next Week: Validate ONE idea with real people</p>
                    <p className="text-gray-400 text-sm">Ask 10 people if they'd pay $27-47 for your solution. 3+ yes = validated idea</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <div>
                    <p className="text-white font-semibold">Week 3: Create MVP in one weekend</p>
                    <p className="text-gray-400 text-sm">Template, checklist, mini-guide, or video course - keep it simple and valuable</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <div>
                    <p className="text-white font-semibold">Week 4: Launch to your network first</p>
                    <p className="text-gray-400 text-sm">Email list, social media, DMs - aim for 10 sales at special launch price</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">5</span>
                  <div>
                    <p className="text-white font-semibold">Month 2+: Scale what works, eliminate what doesn't</p>
                    <p className="text-gray-400 text-sm">Double down on winning products, create complementary offers, automate everything</p>
                  </div>
                </li>
              </ol>
              
              <div className="mt-6 p-4 bg-zinc-900 rounded text-center">
                <p className="text-white">
                  Expected Result: <span className="text-green-400 font-bold">$1,000-2,500/month passive income by month 3</span>
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Success Rate: 73% of people who complete all 5 steps reach $1,000/month
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
              Ready to Build Your $10K/Month Passive Income Empire?
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get my complete passive income system with proven templates, automated sales funnels, and step-by-step training to build multiple income streams
            </p>
            
            <Link
              href="/passive-income-accelerator"
              className="cta-button inline-flex items-center gap-3"
            >
              Start Building Passive Income Today
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <div className="mt-6 text-sm text-gray-500">
              ⭐ 13,000 students building passive income | 💰 Average: $2,100/mo after 6 months
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
