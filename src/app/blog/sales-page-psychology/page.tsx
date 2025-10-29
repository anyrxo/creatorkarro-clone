import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'

// Comprehensive SEO Metadata
export const metadata = {
  title: "Sales Page Psychology: Complete Guide & Expert Strategies",
  description: "Sales Page Psychology - comprehensive strategies, tools, and techniques for 2025",
  keywords: ["sales", "page", "psychology", "sales 2025", "sales page psychology", "automation", "AI tools", "business growth", "productivity", "2025 strategies"],
  authors: [{ name: "IImagined.ai Team", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "Sales Page Psychology: Complete Guide & Expert Strategies",
    description: "Sales Page Psychology - comprehensive strategies, tools, and techniques for 2025",
    url: "https://iimagined.ai/blog/sales-page-psychology",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2025-01-15T10:00:00.000Z",
    modifiedTime: "2025-08-03T06:14:29.964Z",
    authors: ["IImagined.ai Team"],
    tags: ["sales", "page", "psychology", "sales 2025", "sales page psychology", "automation", "AI tools", "business growth"],
    images: [{
      url: "https://iimagined.ai/images/sales-page-psychology-og.jpg",
      width: 1200,
      height: 630,
      alt: "Sales Page Psychology",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai", 
    title: "Sales Page Psychology: Complete Guide & Expert Strategies",
    description: "Sales Page Psychology - comprehensive strategies, tools, and techniques for 2025",
    images: [{
      url: "https://iimagined.ai/images/sales-page-psychology-og.jpg",
      alt: "Sales Page Psychology"
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://iimagined.ai/blog/sales-page-psychology"
  }
}

export default function SalesPagePsychology() {

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "sales-page-psychology",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Technology",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})

          
  return (
    
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            
            className="text-center max-w-5xl mx-auto"
          >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                    <span className="text-green-400 text-sm font-semibold">SALES</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The Psychology Behind <span className="text-green-400">$10K+ Digital Product</span> Sales Pages
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Discover the <span className="text-white font-semibold">psychological triggers and copywriting techniques</span> that convert visitors into buyers
                </p>

                
            </div>
        </div>
    </section>

      {/* Course CTA #1 */}
      <section className="py-12 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💎</span>
              <h3 className="text-2xl font-bold text-white">Master Digital Products</h3>
            </div>
            <p className="text-gray-300 mb-6">Transform your sales pages with psychology-backed templates, proven copywriting formulas, and conversion optimization tools used by 6-figure creators.</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">$5,959</div>
                <div className="text-sm text-gray-400">Total Value</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">50+</div>
                <div className="text-sm text-gray-400">Templates Included</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">$189</div>
                <div className="text-sm text-gray-400">Today Only</div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/digital-products" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Get Complete Digital Products Course - Just $189
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-sm text-gray-400 mt-3">
                Lifetime Access • 30-Day Money-Back Guarantee • Join 18,900+ Students
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center">
                  <span className="mr-3">🧠</span>
                  The 6 Core Psychological Principles
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-3xl mb-3">🧠</div>
                        <h3 className="text-white font-semibold mb-2">Reciprocity</h3>
                        <p className="text-gray-400 text-sm">Give value first, ask for sale second</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3"></div>
                        <h3 className="text-white font-semibold mb-2">Urgency</h3>
                        <p className="text-gray-400 text-sm">Limited time creates action</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3"></div>
                        <h3 className="text-white font-semibold mb-2">Social Proof</h3>
                        <p className="text-gray-400 text-sm">Others' success drives decisions</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3"></div>
                        <h3 className="text-white font-semibold mb-2">Authority</h3>
                        <p className="text-gray-400 text-sm">Expertise builds trust</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3"></div>
                        <h3 className="text-white font-semibold mb-2">Scarcity</h3>
                        <p className="text-gray-400 text-sm">Limited availability increases desire</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl mb-3">🤝</div>
                        <h3 className="text-white font-semibold mb-2">Commitment</h3>
                        <p className="text-gray-400 text-sm">Small yes leads to big yes</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section

        className="section-spacing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="mr-3">💰</span>
              The $10K Sales Page Formula
            </h2>
          
            <div className="space-y-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4">1. The Pattern Interrupt Headline</h3>
                    <p className="text-gray-400 mb-4">Your headline has 3 seconds to stop the scroll. Use these formulas:</p>
                    <div className="bg-zinc-800 rounded-lg p-4 space-y-3">
                        <div className="border-l-4 border-green-400 pl-4">
                            <p className="text-white font-semibold">"How [Specific Person] [Achieved Specific Result] in [Specific Timeframe]"</p>
                            <p className="text-gray-400 text-sm mt-1">Example: How Sarah Made $50K in 30 Days Selling Notion Templates</p>
                        </div>
                        <div className="border-l-4 border-green-400 pl-4">
                            <p className="text-white font-semibold">"The [Unexpected Method] That [Desirable Outcome] (Without [Common Objection])"</p>
                            <p className="text-gray-400 text-sm mt-1">Example: The AI System That Writes Bestselling eBooks (Without Writing a Single Word)</p>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">2. The Emotional Hook</h3>
                    <p className="text-gray-400 mb-4">Connect with their pain before presenting your solution:</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3">The PAS Formula (Problem-Agitate-Solution)</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li><span className="text-blue-400 font-semibold">Problem:</span>"You know you should be creating digital products..."</li>
                            <li><span className="text-blue-400 font-semibold">Agitate:</span>"But every time you try, you get overwhelmed by tech, pricing, marketing..."</li>
                            <li><span className="text-blue-400 font-semibold">Solution:</span>"That's exactly why I created this step-by-step system..."</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-4">3. The Credibility Stack</h3>
                    <p className="text-gray-400 mb-4">Build trust fast with strategic proof elements:</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-zinc-800 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Personal Results</h4>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• Revenue screenshots</li>
                                <li>• Growth metrics</li>
                                <li>• Time investment</li>
                            </ul>
                        </div>
                        <div className="bg-zinc-800 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Student Results</h4>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• Transformation stories</li>
                                <li>• Specific numbers</li>
                                <li>• Diverse examples</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">4. The Value Revelation</h3>
                    <p className="text-gray-400 mb-4">Present your offer as the obvious solution:</p>
                    <div className="bg-zinc-800 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-3">The Stack Method</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Module 1: Foundation Training</span>
                                <span className="text-gray-500 line-through">$497</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Module 2: Advanced Strategies</span>
                                <span className="text-gray-500 line-through">$697</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Bonus: Templates & Swipe Files</span>
                                <span className="text-gray-500 line-through">$297</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-300">Bonus: Private Community</span>
                                <span className="text-gray-500 line-through">$197/mo</span>
                            </div>
                            <div className="border-t border-gray-700 pt-3 mt-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-white font-semibold">Total Value</span>
                                    <span className="text-gray-500 line-through">$1,688</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-white font-semibold">Your Investment</span>
                                    <span className="text-green-400 text-2xl font-bold">$197</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        
        className="section-spacing bg-zinc-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Advanced Psychological Triggers</h2>
          
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4"> Loss Aversion</h3>
                    <p className="text-gray-400 mb-3">People fear losing more than they desire gaining.</p>
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                            <span className="text-green-400 font-semibold">Example:</span>"Every day you wait, you're losing $300 in potential revenue"
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4"> FOMO Creation</h3>
                    <p className="text-gray-400 mb-3">Fear of missing out drives immediate action.</p>
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                            <span className="text-blue-400 font-semibold">Example:</span>"237 people joined in the last 24 hours"
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-4"> Cognitive Ease</h3>
                    <p className="text-gray-400 mb-3">Simple = trustworthy in our brains.</p>
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                            <span className="text-purple-400 font-semibold">Example:</span>"3 simple steps to your first $10K month"
                        </p>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-yellow-400 mb-4"> Anchoring Bias</h3>
                    <p className="text-gray-400 mb-3">First price seen becomes the reference point.</p>
                    <div className="bg-zinc-900 rounded-lg p-4">
                        <p className="text-sm text-gray-300">
                            <span className="text-yellow-400 font-semibold">Example:</span>"Normally $997, today only $197"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        
        className="section-spacing"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8">Copy That Converts: Real Examples</h2>
          
            <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Opening That Hooks</h3>
                    <p className="text-gray-300 italic">"Last Tuesday at 3:47 AM, I woke up to a notification that changed everything. PayPal: You've received $4,327. 
                Not from a client. Not from a job. From a digital product I created in one weekend. 
                And the crazy part? I was sleeping when it sold."
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                        <span className="text-green-400 font-semibold">Why it works:</span> Specific details + transformation story + possibility
                    </p>
                </div>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Objection Handling</h3>
                    <p className="text-gray-300 italic">"I know what you're thinking. 'This sounds great, but I'm not creative.' 
                Good news: Neither am I. I failed art class. Twice. 
                But I discovered that profitable digital products aren't about creativity. 
                They're about solving one specific problem better than anyone else."
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                        <span className="text-purple-400 font-semibold">Why it works:</span> Acknowledges fear + relates + reframes belief
                    </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">The Close That Converts</h3>
                    <p className="text-gray-300 italic">"You have two choices right now. 
                Keep doing what you're doing and hope something changes. 
                Or take the same step 14,327 others have taken and join us inside. 
                The only question is: Will you be sharing your success story next month, or still reading them?"
                    </p>
                    <p className="text-sm text-gray-400 mt-3">
                        <span className="text-yellow-400 font-semibold">Why it works:</span> Binary choice + social proof + future pacing
                    </p>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Sales Page Conversion Checklist</h2>
          
            <div className="bg-zinc-800 rounded-xl p-8">
                <div className="space-y-4">
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Headline promises specific transformation in specific timeframe</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Opening story creates emotional connection</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">At least 5 different types of proof (screenshots, testimonials, case studies)</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Value stack shows 10x price-to-value ratio</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Major objections addressed before they think them</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Risk reversal (guarantee) removes Access fear</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Urgency/scarcity element that's genuine</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">Multiple CTAs throughout the page</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">FAQ section handles remaining doubts</span>
                    </label>
                    <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-gray-300">P.S. section with final urgency push</span>
                    </label>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Sales Page Structure That Converts at 15%+</h2>

            <div className="bg-zinc-800 rounded-xl p-8">
                <div className="space-y-6">
                    <div className="border-b border-gray-700 pb-6">
                        <h3 className="text-xl font-bold text-green-400 mb-3">Above the Fold (First 3 seconds)</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-green-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Pattern interrupt headline</p>
                                    <p className="text-sm text-gray-400">Shocking stat or unexpected claim</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Subheadline with specific result</p>
                                    <p className="text-sm text-gray-400">Who it's for + outcome + timeframe</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Visual proof element</p>
                                    <p className="text-sm text-gray-400">Revenue screenshot or transformation photo</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-green-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Strong CTA button</p>
                                    <p className="text-sm text-gray-400">"Get Instant Access" not "Buy Now"</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-700 pb-6">
                        <h3 className="text-xl font-bold text-blue-400 mb-3">The Hook Section (Scroll depth: 10-20%)</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">The relatable story</p>
                                    <p className="text-sm text-gray-400">"I know exactly how you feel because..."</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Pain amplification</p>
                                    <p className="text-sm text-gray-400">3-5 bullet points of current struggles</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-blue-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">The turning point</p>
                                    <p className="text-sm text-gray-400">"Everything changed when I discovered..."</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-700 pb-6">
                        <h3 className="text-xl font-bold text-purple-400 mb-3">Proof & Authority (Scroll: 20-40%)</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Results showcase</p>
                                    <p className="text-sm text-gray-400">Grid of student results with numbers</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Video testimonials</p>
                                    <p className="text-sm text-gray-400">3-5 authentic transformation stories</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Authority indicators</p>
                                    <p className="text-sm text-gray-400">As seen on, media mentions, credentials</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-700 pb-6">
                        <h3 className="text-xl font-bold text-yellow-400 mb-3">The Offer (Scroll: 40-60%)</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-yellow-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Value stack section</p>
                                    <p className="text-sm text-gray-400">Each component with individual value</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-yellow-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Total value calculation</p>
                                    <p className="text-sm text-gray-400">Show $5,000+ total, charge $197-497</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-yellow-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Bonus reveal</p>
                                    <p className="text-sm text-gray-400">3-5 limited-time bonuses</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-yellow-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Price anchor reveal</p>
                                    <p className="text-sm text-gray-400">Strike through high price, show discount</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-yellow-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Second CTA</p>
                                    <p className="text-sm text-gray-400">Same or different angle than first</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-700 pb-6">
                        <h3 className="text-xl font-bold text-pink-400 mb-3">Objection Handling (Scroll: 60-80%)</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-pink-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">FAQ section</p>
                                    <p className="text-sm text-gray-400">10-15 common questions answered</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-pink-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Guarantee section</p>
                                    <p className="text-sm text-gray-400">30-60 day money-back promise</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-pink-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">"Who this is for" section</p>
                                    <p className="text-sm text-gray-400">Include who it's NOT for (builds trust)</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-pink-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Comparison table</p>
                                    <p className="text-sm text-gray-400">Your solution vs alternatives</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-orange-400 mb-3">The Close (Scroll: 80-100%)</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="text-orange-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Urgency/scarcity element</p>
                                    <p className="text-sm text-gray-400">Countdown timer or limited spots</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Final summary</p>
                                    <p className="text-sm text-gray-400">Recap of what they get + transformation</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">Final CTA (3rd+)</p>
                                    <p className="text-sm text-gray-400">Make it big, bold, impossible to miss</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-orange-400 font-bold">→</span>
                                <div>
                                    <p className="font-semibold">P.S. section</p>
                                    <p className="text-sm text-gray-400">Last chance reminder + strongest benefit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Conversion Rate Optimization Secrets</h2>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4">Color Psychology</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300">Green CTA</span>
                            <span className="text-green-400">+21% conversion</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300">Red urgency</span>
                            <span className="text-green-400">+18% click rate</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300">Blue trust</span>
                            <span className="text-green-400">+15% credibility</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300">Yellow attention</span>
                            <span className="text-green-400">+27% notice rate</span>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Copy Power Words</h3>
                    <div className="space-y-2">
                        <div className="bg-zinc-800 rounded p-2 text-sm text-gray-300">
                            "Proven" (+31% trust)
                        </div>
                        <div className="bg-zinc-800 rounded p-2 text-sm text-gray-300">
                            "Guarantee" (+28% confidence)
                        </div>
                        <div className="bg-zinc-800 rounded p-2 text-sm text-gray-300">
                            "Results" (+25% credibility)
                        </div>
                        <div className="bg-zinc-800 rounded p-2 text-sm text-gray-300">
                            "Free" (+42% engagement)
                        </div>
                        <div className="bg-zinc-800 rounded p-2 text-sm text-gray-300">
                            "Instant" (+33% urgency)
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-4">CTA Button Tests</h3>
                    <div className="space-y-3 text-sm">
                        <div>
                            <p className="text-gray-300 font-semibold">"Get Started Now"</p>
                            <p className="text-green-400">Baseline (100%)</p>
                        </div>
                        <div>
                            <p className="text-gray-300 font-semibold">"Yes, I Want Access"</p>
                            <p className="text-green-400">+24% conversion</p>
                        </div>
                        <div>
                            <p className="text-gray-300 font-semibold">"Claim My Spot"</p>
                            <p className="text-green-400">+18% conversion</p>
                        </div>
                        <div>
                            <p className="text-gray-300 font-semibold">"Start My Transformation"</p>
                            <p className="text-green-400">+32% conversion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">A/B Testing Results from $2M in Sales</h2>

            <div className="bg-zinc-800 rounded-xl overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-700">
                            <th className="text-left p-4 text-gray-400">Element Tested</th>
                            <th className="text-left p-4 text-gray-400">Version A</th>
                            <th className="text-left p-4 text-gray-400">Version B</th>
                            <th className="text-left p-4 text-gray-400">Winner</th>
                            <th className="text-left p-4 text-gray-400">Lift</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-300">
                        <tr className="border-b border-gray-700">
                            <td className="p-4 font-semibold">Headline</td>
                            <td className="p-4">Feature-focused</td>
                            <td className="p-4">Benefit-focused</td>
                            <td className="p-4 text-green-400">Version B</td>
                            <td className="p-4 text-green-400">+47%</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="p-4 font-semibold">Price Display</td>
                            <td className="p-4">$997</td>
                            <td className="p-4">$997 $497 Today</td>
                            <td className="p-4 text-green-400">Version B</td>
                            <td className="p-4 text-green-400">+63%</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="p-4 font-semibold">Testimonials</td>
                            <td className="p-4">Text only</td>
                            <td className="p-4">Video + photo</td>
                            <td className="p-4 text-green-400">Version B</td>
                            <td className="p-4 text-green-400">+38%</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="p-4 font-semibold">CTA Color</td>
                            <td className="p-4">Blue button</td>
                            <td className="p-4">Green button</td>
                            <td className="p-4 text-green-400">Version B</td>
                            <td className="p-4 text-green-400">+21%</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="p-4 font-semibold">Guarantee</td>
                            <td className="p-4">30-day refund</td>
                            <td className="p-4">60-day + bonus</td>
                            <td className="p-4 text-green-400">Version B</td>
                            <td className="p-4 text-green-400">+29%</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <td className="p-4 font-semibold">FAQ Placement</td>
                            <td className="p-4">Bottom only</td>
                            <td className="p-4">Top + bottom</td>
                            <td className="p-4 text-green-400">Version B</td>
                            <td className="p-4 text-green-400">+34%</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-semibold">Urgency</td>
                            <td className="p-4">No timer</td>
                            <td className="p-4">Countdown timer</td>
                            <td className="p-4 text-green-400">Version B</td>
                            <td className="p-4 text-green-400">+56%</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-6 p-6 bg-green-900/20 border border-green-500/30 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3">Key Takeaway</h3>
                <p className="text-gray-300">
                    Implementing all 7 winning elements together resulted in a <span className="text-green-400 font-bold">312% increase</span> in conversion rate - from 2.3% to 9.5% - generating an additional <span className="text-green-400 font-bold">$847,000 in revenue</span> without spending a dollar more on traffic.
                </p>
            </div>
        </div>
    </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Mobile vs Desktop Optimization</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4">Mobile Optimization (67% of traffic)</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="text-green-400">✓</span>
                            <div>
                                <p className="font-semibold">Shorter headlines (6-8 words max)</p>
                                <p className="text-sm text-gray-400">People skim faster on mobile</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-400">✓</span>
                            <div>
                                <p className="font-semibold">Sticky CTA bar at bottom</p>
                                <p className="text-sm text-gray-400">Always visible while scrolling</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-400">✓</span>
                            <div>
                                <p className="font-semibold">Larger tap targets (44x44px min)</p>
                                <p className="text-sm text-gray-400">Easy thumb navigation</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-400">✓</span>
                            <div>
                                <p className="font-semibold">Video autoplay (muted)</p>
                                <p className="text-sm text-gray-400">Catch attention immediately</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-400">✓</span>
                            <div>
                                <p className="font-semibold">One-click checkout</p>
                                <p className="text-sm text-gray-400">Apple Pay, Google Pay integration</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-400 mb-4">Desktop Optimization (33% but higher AOV)</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400">✓</span>
                            <div>
                                <p className="font-semibold">Longer-form content works</p>
                                <p className="text-sm text-gray-400">People read more deeply on desktop</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400">✓</span>
                            <div>
                                <p className="font-semibold">Sidebar CTAs</p>
                                <p className="text-sm text-gray-400">Fixed position while scrolling</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400">✓</span>
                            <div>
                                <p className="font-semibold">Multi-column layouts</p>
                                <p className="text-sm text-gray-400">Use horizontal space effectively</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400">✓</span>
                            <div>
                                <p className="font-semibold">Comparison tables</p>
                                <p className="text-sm text-gray-400">Easier to read side-by-side</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-400">✓</span>
                            <div>
                                <p className="font-semibold">Exit-intent popups</p>
                                <p className="text-sm text-gray-400">Capture abandoning visitors</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-zinc-900 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-green-400">67%</p>
                    <p className="text-sm text-gray-400">Mobile traffic</p>
                    <p className="text-xs text-gray-500 mt-1">Avg order: $147</p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-blue-400">33%</p>
                    <p className="text-sm text-gray-400">Desktop traffic</p>
                    <p className="text-xs text-gray-500 mt-1">Avg order: $327</p>
                </div>
                <div className="bg-zinc-900 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-purple-400">2.2x</p>
                    <p className="text-sm text-gray-400">Desktop AOV advantage</p>
                    <p className="text-xs text-gray-500 mt-1">Optimize both!</p>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Sales Page Psychology Case Studies</h2>

            <div className="space-y-6">
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Case Study: $487K Course Launch</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-green-400 font-semibold mb-3">What They Did:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Led with shocking stat: "92% fail at this"</li>
                                <li>• Used 47 testimonials (video + text)</li>
                                <li>• Created "impossible to lose" guarantee</li>
                                <li>• Added countdown timer (real deadline)</li>
                                <li>• Showed live sales notifications</li>
                                <li>• Included 14 FAQs addressing doubts</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-green-400 font-semibold mb-3">The Results:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• 14,237 visitors in 7 days</li>
                                <li>• 11.3% conversion rate</li>
                                <li>• 1,609 total sales</li>
                                <li>• $487,113 in revenue</li>
                                <li>• $34.21 cost per acquisition</li>
                                <li>• 8.9x ROAS</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Case Study: Template Bundle ($97 product)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-blue-400 font-semibold mb-3">Strategy:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Before/after template examples</li>
                                <li>• "Used by 10,000+ businesses" social proof</li>
                                <li>• Value stack showing $847 worth</li>
                                <li>• Priced at $97 (88% discount angle)</li>
                                <li>• Added 3 bonuses worth $247</li>
                                <li>• 30-day guarantee + keep bonuses</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-blue-400 font-semibold mb-3">Performance:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• 8.7% conversion rate</li>
                                <li>• 380-420 sales per month</li>
                                <li>• $36,860-40,740 monthly revenue</li>
                                <li>• 2.3% refund rate (very low)</li>
                                <li>• 34% bought upsell ($47)</li>
                                <li>• Total AOV: $113</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3">Case Study: Membership Site ($47/month)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="text-purple-400 font-semibold mb-3">Psychological Triggers Used:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• Community showcase (FOMO)</li>
                                <li>• Live member count ticker</li>
                                <li>• "Closing to new members soon" scarcity</li>
                                <li>• 7-day trial for $1</li>
                                <li>• Behind-the-scenes member results</li>
                                <li>• Exclusive perks for first 100</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-purple-400 font-semibold mb-3">Results:</h4>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                <li>• 23.4% trial conversion</li>
                                <li>• 67% trial-to-paid conversion</li>
                                <li>• 2,847 active members</li>
                                <li>• $133,809 MRR</li>
                                <li>• 8.2 month average lifetime</li>
                                <li>• $385 lifetime value per member</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">How long should my sales page be?</h3>
                    <p className="text-gray-400">
                        For products under $50: 2,000-3,000 words. For $100-500 products: 3,000-5,000 words. For $500+ products: 5,000-8,000 words. The more expensive the product, the more proof and detail needed to justify the investment.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">What's a good conversion rate for sales pages?</h3>
                    <p className="text-gray-400">
                        Cold traffic: 2-5% is excellent. Warm traffic: 5-10% is good. Email list: 10-20% is achievable. Launch traffic: 15-30% is possible. If you're below 2%, your page needs optimization.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">Should I use countdown timers?</h3>
                    <p className="text-gray-400">
                        Yes, but only if genuine. Evergreen timers can work (24 hours from first visit), but actual launch deadlines convert 40-60% better. Never use fake scarcity - it destroys trust and long-term sales.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">How many testimonials should I include?</h3>
                    <p className="text-gray-400">
                        Minimum 10, optimal is 20-30. Mix formats: 3-5 video testimonials, 10-15 text with photos, 5-10 short quotes. Spread them throughout the page, not just one section. Different testimonials address different objections.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">What guarantee converts best?</h3>
                    <p className="text-gray-400">
                        60-day money-back guarantees outperform 30-day by 29%. Even better: "Results or refund" - if they don't get specific results, they get their money back. This shows confidence and reduces perceived risk.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">How do I price my digital product?</h3>
                    <p className="text-gray-400">
                        Test 3 price points. Start at 10x your perceived effort cost. A course that took you 40 hours should be at least $400. Templates should be $27-97. Masterminds $997-2,997. Always test higher than you think - you'll be surprised.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">Should I show the price upfront or later?</h3>
                    <p className="text-gray-400">
                        For warm traffic and known brands: show price early (above fold). For cold traffic: build value first, reveal price after you've stacked the offer (scroll depth 50-60%). This allows you to establish value before discussing investment.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-3">What's the biggest sales page mistake to avoid?</h3>
                    <p className="text-gray-400">
                        Talking about features instead of transformation. Nobody cares about "10 modules and 47 videos." They care about "going from struggling freelancer to booked solid in 60 days." Sell the outcome, not the vehicle.
                    </p>
                </div>
            </div>
        </div>
    </section>

      {/* Course CTA #2 */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🚀</span>
              <h3 className="text-2xl font-bold text-white">Master Digital Products</h3>
            </div>
            <p className="text-gray-300 mb-6">Get my complete sales page templates, psychology-backed swipe files, and conversion optimization toolkit that's generated millions in sales.</p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-zinc-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">$5,959</div>
                <div className="text-sm text-gray-400">Total Value</div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Templates Included</div>
              </div>
              <div className="bg-zinc-800 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">$189</div>
                <div className="text-sm text-gray-400">Today Only</div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/digital-products"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
              >
                Get Complete Digital Products Course - Just $189
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-sm text-gray-400 mt-3">
                Lifetime Access • 30-Day Money-Back Guarantee • Join 18,900+ Students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-8 rounded-xl mb-12 border border-purple-600/20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
              <span className="mr-3">📚</span>
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/how-to-sell-templates" className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-700 hover:border-purple-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">How To Sell Templates</h3>
                <p className="text-gray-400 text-sm mb-3">Turn 2-hour projects into $47K/month passive income</p>
                <span className="text-purple-400 text-sm font-semibold">Read More →</span>
              </Link>

              <Link href="/blog/digital-products-that-sell-2025" className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-700 hover:border-purple-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">Digital Products That Sell</h3>
                <p className="text-gray-400 text-sm mb-3">17 profitable digital product ideas for 2025</p>
                <span className="text-purple-400 text-sm font-semibold">Read More →</span>
              </Link>

              <Link href="/blog/passive-income-blueprint-digital-products" className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-700 hover:border-purple-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-2">Passive Income Blueprint</h3>
                <p className="text-gray-400 text-sm mb-3">Build a 6-figure digital products business</p>
                <span className="text-purple-400 text-sm font-semibold">Read More →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
</div>
)
}
