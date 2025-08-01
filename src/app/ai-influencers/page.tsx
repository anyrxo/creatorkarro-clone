'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AIInfluencersPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const solutionAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const curriculumAnimation = useScrollAnimation({ threshold: 0.1 })
  const expectAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const transformationAnimation = useScrollAnimation({ threshold: 0.1 })
  const comparisonAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.2 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const urgencyAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Your <span className="text-pink-400">AI Influencer Empire</span> And Make <span className="text-pink-400">$10K/Month</span> Without Showing Your Face
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              The complete system to create, grow, and monetize <span className="text-pink-300">AI-powered virtual models</span>
            </p>

            <p className="text-sm text-yellow-400 mb-8">Limited time offer - Price increasing soon</p>

            <Link href="#packages" className="cta-button inline-block text-lg mb-8 btn-animate animate-glow hover-lift">
              Start Building Your AI Influencer
            </Link>

            {/* Reviews */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/1620887224.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/447445188.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">500+ students creating AI influencers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Pain Points Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={problemAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-red-400 uppercase tracking-wider mb-4">THE BRUTAL TRUTH</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Most Content Creators Are Stuck</h2>
            <p className="text-xl text-gray-400">The hidden problems keeping you from scaling your influence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-zinc-900 border border-red-500/20 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-4xl mb-4">😰</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Burnout From Face-To-Camera</h3>
              <p className="text-gray-400">Constantly showing your face, maintaining appearance, and being "on" 24/7 is exhausting and unsustainable</p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/20 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Time Prison</h3>
              <p className="text-gray-400">Your income is directly tied to your time. Can't scale beyond 24 hours in a day</p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/20 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">High Overhead Costs</h3>
              <p className="text-gray-400">Expensive equipment, editing, photoshoots, and team members eating into profits</p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/20 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Privacy Invasion</h3>
              <p className="text-gray-400">Your personal life becomes public content. No boundaries between work and private life</p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/20 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="text-4xl mb-4">📉</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Inconsistent Content</h3>
              <p className="text-gray-400">Bad days, sick days, vacation days = no content = no income. One person can't be everywhere</p>
            </div>
            <div className={`bg-zinc-900 border border-red-500/20 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-4 text-red-400">Platform Dependency</h3>
              <p className="text-gray-400">One algorithm change or account ban can destroy years of work instantly</p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-8 max-w-3xl mx-auto card-hover">
              <h3 className="text-2xl font-bold mb-4 text-red-400">The Real Cost of Traditional Content Creation</h3>
              <p className="text-lg text-gray-300 mb-4">
                Most creators spend <span className="text-red-400 font-bold">80% of their time</span> on content creation and only 
                <span className="text-red-400 font-bold"> 20% on revenue generation</span>
              </p>
              <p className="text-gray-400">
                This backwards approach keeps you trapped in a cycle of constant work with limited income potential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={solutionAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-green-400 uppercase tracking-wider mb-4">THE BREAKTHROUGH</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">AI Influencer Empire: The Ultimate Solution</h2>
            <p className="text-xl text-gray-400">How to build a scalable, profitable content empire without showing your face</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
            <div className={`scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-3xl font-bold mb-6 text-green-400">What if you could...</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Create multiple AI models that work 24/7 while you sleep</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Generate unlimited content without ever showing your face</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Scale to multiple platforms simultaneously with zero extra effort</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Keep 100% of your profits with virtually no overhead costs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Build a brand that's platform-independent and algorithm-proof</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Maintain complete privacy while building massive influence</p>
                </div>
              </div>
            </div>
            <div className={`scroll-fade-up ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4 text-center">AI Influencer Empire Formula</h4>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-pink-400 mb-2">$10K-50K/Month</div>
                  <p className="text-gray-300">Per AI Influencer Model</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-pink-400 font-semibold">Step 1:</span> Create photorealistic AI character
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-pink-400 font-semibold">Step 2:</span> Build automated content system
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-pink-400 font-semibold">Step 3:</span> Deploy across multiple platforms
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-pink-400 font-semibold">Step 4:</span> Scale to multiple AI models
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-green-500/30 rounded-lg p-8 max-w-4xl mx-auto card-hover">
              <h3 className="text-3xl font-bold mb-4 text-green-400">This Changes Everything</h3>
              <p className="text-lg text-gray-300 mb-6">
                Instead of being limited by your personal capacity, you can create an entire network of AI influencers, 
                each with their own personality, audience, and revenue streams
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400 mb-2">Infinite Scale</div>
                  <p className="text-sm text-gray-400">Create as many AI models as you want</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400 mb-2">Zero Burnout</div>
                  <p className="text-sm text-gray-400">Your AI models never get tired or sick</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400 mb-2">Pure Profit</div>
                  <p className="text-sm text-gray-400">No salaries, no overhead, just revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={whoForAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">IS THIS YOU?</p>
            <h2 className="text-4xl md:text-5xl font-bold">Who is this for?</h2>
            <p className="text-xl text-gray-400 mt-4">Perfect for creators who want to scale without limits</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-gray-400">
                Want to scale your content without burning out or showing your face 24/7
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Digital Entrepreneurs</h3>
              <p className="text-gray-400">
                Looking for the next big opportunity in the creator economy
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Tech-Savvy Marketers</h3>
              <p className="text-gray-400">
                Ready to leverage AI for building multiple revenue streams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={resultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">RESULTS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's possible with AI Influencers?</h2>
            <p className="text-xl text-gray-400">Real results from our students' AI influencers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">127K</h3>
              <p className="text-gray-400">Followers in 3 months</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-3xl font-bold text-green-400 mb-2">$14,500</h3>
              <p className="text-gray-400">Monthly revenue average</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">24/7</h3>
              <p className="text-gray-400">Content creation on autopilot</p>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Create your <span className="text-pink-400">AI influencer empire</span></h3>
            <p className="text-xl text-gray-400 mb-8">Join hundreds of creators building <span className="text-pink-300">faceless brands</span> that generate real income</p>
            <Link href="#packages" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Curriculum Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={curriculumAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">COMPLETE CURRICULUM</p>
            <h2 className="text-4xl md:text-5xl font-bold">The Complete AI Influencer Empire System</h2>
            <p className="text-xl text-gray-400 mt-4">8 comprehensive modules + bonuses worth over $8,000</p>
          </div>

          {/* Module Breakdown */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Module 1 */}
            <div className={`bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-start space-x-6">
                <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-pink-400">AI Character Creation Mastery</h3>
                  <p className="text-gray-300 mb-4">Learn to create photorealistic AI models that look and feel authentic</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">What You'll Learn:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Advanced Flux & SDXL model training</li>
                        <li>• LoRA training for consistent faces</li>
                        <li>• Character personality development</li>
                        <li>• Facial expression control</li>
                        <li>• Age, ethnicity, and style variations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Deliverables:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• 3+ photorealistic AI characters</li>
                        <li>• Character style guides</li>
                        <li>• Training datasets</li>
                        <li>• Custom LoRA models</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="bg-pink-900/20 border border-pink-500/30 rounded px-2 py-1 text-pink-400 font-semibold text-sm">Value: $197</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className={`bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-start space-x-6">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Content Automation Engine</h3>
                  <p className="text-gray-300 mb-4">Build systems that generate unlimited content automatically</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">What You'll Learn:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• ComfyUI automation workflows</li>
                        <li>• Batch image generation</li>
                        <li>• Video content creation</li>
                        <li>• Custom request fulfillment</li>
                        <li>• Content scheduling systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Tools Included:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• 50+ ComfyUI workflows</li>
                        <li>• Automation scripts</li>
                        <li>• Content templates</li>
                        <li>• Scheduling tools</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="bg-blue-900/20 border border-blue-500/30 rounded px-2 py-1 text-blue-400 font-semibold text-sm">Value: $147</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className={`bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-start space-x-6">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Platform Domination Strategy</h3>
                  <p className="text-gray-300 mb-4">Master every major platform with AI influencer specific strategies</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Platforms Covered:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Instagram growth & monetization</li>
                        <li>• TikTok viral strategies</li>
                        <li>• Twitter/X engagement tactics</li>
                        <li>• YouTube Shorts automation</li>
                        <li>• Fanvue & OnlyFans optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Growth Techniques:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Algorithm optimization</li>
                        <li>• Hashtag research systems</li>
                        <li>• Engagement automation</li>
                        <li>• Cross-platform synergy</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="bg-green-900/20 border border-green-500/30 rounded px-2 py-1 text-green-400 font-semibold text-sm">Value: $197</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className={`bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="flex items-start space-x-6">
                <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">4</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">Monetization Mastery</h3>
                  <p className="text-gray-300 mb-4">Turn your AI influencers into profit-generating machines</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Revenue Streams:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Brand partnerships & sponsorships</li>
                        <li>• Custom content & PPV sales</li>
                        <li>• Subscription tier optimization</li>
                        <li>• Affiliate marketing systems</li>
                        <li>• Premium content upsells</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Pricing Psychology:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Value-based pricing models</li>
                        <li>• Scarcity & urgency tactics</li>
                        <li>• Tier structure optimization</li>
                        <li>• Conversion rate optimization</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="bg-purple-900/20 border border-purple-500/30 rounded px-2 py-1 text-purple-400 font-semibold text-sm">Value: $147</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 5 */}
            <div className={`bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="flex items-start space-x-6">
                <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">5</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-orange-400">Scaling & Automation Systems</h3>
                  <p className="text-gray-300 mb-4">Scale to multiple AI models and automate everything</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Scaling Strategies:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Multi-model management</li>
                        <li>• Team building & delegation</li>
                        <li>• Workflow optimization</li>
                        <li>• Quality control systems</li>
                        <li>• Performance tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Automation Tools:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Conversation automation</li>
                        <li>• Content distribution systems</li>
                        <li>• Customer service bots</li>
                        <li>• Analytics dashboards</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="bg-orange-900/20 border border-orange-500/30 rounded px-2 py-1 text-orange-400 font-semibold text-sm">Value: $197</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 6 */}
            <div className={`bg-gradient-to-r from-teal-900/20 to-cyan-900/20 border border-teal-500/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="flex items-start space-x-6">
                <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">6</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-teal-400">Legal & Compliance Framework</h3>
                  <p className="text-gray-300 mb-4">Stay compliant and protect your business legally</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Legal Topics:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• AI content disclosure requirements</li>
                        <li>• Platform terms of service</li>
                        <li>• Copyright & trademark protection</li>
                        <li>• Tax implications & structures</li>
                        <li>• International compliance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Templates Included:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Disclosure templates</li>
                        <li>• Terms of service templates</li>
                        <li>• Privacy policy generators</li>
                        <li>• Contract templates</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="bg-teal-900/20 border border-teal-500/30 rounded px-2 py-1 text-teal-400 font-semibold text-sm">Value: $127</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 7 */}
            <div className={`bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-7' : ''}`}>
              <div className="flex items-start space-x-6">
                <div className="bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">7</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">Advanced Psychology & Engagement</h3>
                  <p className="text-gray-300 mb-4">Master the psychology behind viral AI influencers</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Psychology Concepts:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Parasocial relationship building</li>
                        <li>• Emotional trigger identification</li>
                        <li>• Addiction mechanics in content</li>
                        <li>• Persona development psychology</li>
                        <li>• Fan loyalty & retention</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Engagement Tactics:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Conversation starter frameworks</li>
                        <li>• Community building strategies</li>
                        <li>• Interactive content formats</li>
                        <li>• Feedback loop optimization</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="bg-yellow-900/20 border border-yellow-500/30 rounded px-2 py-1 text-yellow-400 font-semibold text-sm">Value: $127</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 8 */}
            <div className={`bg-gradient-to-r from-rose-900/20 to-pink-900/20 border border-rose-500/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-8' : ''}`}>
              <div className="flex items-start space-x-6">
                <div className="bg-rose-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">8</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-rose-400">Case Studies & Implementation</h3>
                  <p className="text-gray-300 mb-4">Real examples and step-by-step implementation guides</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Case Studies:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• $50K/month fitness influencer</li>
                        <li>• $30K/month lifestyle brand</li>
                        <li>• $25K/month fashion model</li>
                        <li>• $40K/month gaming personality</li>
                        <li>• Multi-niche empire breakdown</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Implementation:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• 30-day launch roadmap</li>
                        <li>• Daily action checklists</li>
                        <li>• Troubleshooting guides</li>
                        <li>• Success metrics tracking</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 text-right">
                    <span className="bg-rose-900/20 border border-rose-500/30 rounded px-2 py-1 text-rose-400 font-semibold text-sm">Value: $147</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Total Value */}
          <div className={`text-center mt-16 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-gold-900/30 to-yellow-900/30 border border-gold-500/50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">Total Curriculum Value</h3>
              <div className="text-5xl font-bold text-yellow-400 mb-2">$1,397</div>
              <p className="text-gray-300">8 comprehensive modules + implementation guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Bonuses Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={bonusAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gold-400 uppercase tracking-wider mb-4">EXCLUSIVE BONUSES</p>
            <h2 className="text-4xl md:text-5xl font-bold">But Wait, There's More!</h2>
            <p className="text-xl text-gray-400 mt-4">Limited-time bonuses worth over $3,500</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-gradient-to-br from-gold-900/20 to-yellow-900/20 border border-gold-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-bold mb-3 text-gold-400">AI Model Library</h3>
              <p className="text-gray-400 mb-3 text-sm">50+ pre-trained AI models ready to use</p>
              <div className="text-sm font-bold text-gold-400">Value: $197</div>
            </div>
            <div className={`bg-gradient-to-br from-gold-900/20 to-yellow-900/20 border border-gold-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-lg font-bold mb-3 text-gold-400">Content Template Vault</h3>
              <p className="text-gray-400 mb-3 text-sm">1000+ proven content templates</p>
              <div className="text-sm font-bold text-gold-400">Value: $147</div>
            </div>
            <div className={`bg-gradient-to-br from-gold-900/20 to-yellow-900/20 border border-gold-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold mb-3 text-gold-400">Automation Scripts</h3>
              <p className="text-gray-400 mb-3 text-sm">Complete automation toolkit</p>
              <div className="text-sm font-bold text-gold-400">Value: $127</div>
            </div>
            <div className={`bg-gradient-to-br from-gold-900/20 to-yellow-900/20 border border-gold-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-bold mb-3 text-gold-400">Private Mastermind</h3>
              <p className="text-gray-400 mb-3 text-sm">Exclusive community access</p>
              <div className="text-sm font-bold text-gold-400">Value: $147</div>
            </div>
            <div className={`bg-gradient-to-br from-gold-900/20 to-yellow-900/20 border border-gold-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg font-bold mb-3 text-gold-400">1-on-1 Strategy Call</h3>
              <p className="text-gray-400 mb-3 text-sm">Personal consultation with me</p>
              <div className="text-sm font-bold text-gold-400">Value: $197</div>
            </div>
            <div className={`bg-gradient-to-br from-gold-900/20 to-yellow-900/20 border border-gold-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-lg font-bold mb-3 text-gold-400">Fast-Track Checklist</h3>
              <p className="text-gray-400 mb-3 text-sm">30-day implementation roadmap</p>
              <div className="text-sm font-bold text-gold-400">Value: $97</div>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-gold-900/30 to-yellow-900/30 border border-gold-500/50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gold-400">Total Bonus Value</h3>
              <div className="text-4xl font-bold text-gold-400 mb-2">$1,032</div>
              <p className="text-gray-300">Free when you join today</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stacking & Pricing Section */}
      <section className="section-spacing bg-gradient-to-b from-zinc-900/50 to-black" id="packages">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={pricingAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-red-400 uppercase tracking-wider mb-4">LIMITED TIME OFFER</p>
            <h2 className="text-4xl md:text-5xl font-bold">Here's Everything You Get</h2>
            <p className="text-xl text-gray-400 mt-4">Complete AI Influencer Empire System + Bonuses</p>
          </div>

          {/* Value Stack */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 border-2 border-gold-500/50 rounded-2xl p-8 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-gold-400">Total Package Value Breakdown</h3>
                <p className="text-gray-300">Everything you need to build a successful AI influencer empire</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ 8 Complete Training Modules</span>
                  <span className="text-gold-400 font-bold">$1,297</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ AI Model Library (50+ Models)</span>
                  <span className="text-gold-400 font-bold">$197</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ Content Template Vault (1000+ Templates)</span>
                  <span className="text-gold-400 font-bold">$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ Complete Automation Scripts</span>
                  <span className="text-gold-400 font-bold">$127</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ Private Mastermind Community</span>
                  <span className="text-gold-400 font-bold">$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ 1-on-1 Strategy Call with Me</span>
                  <span className="text-gold-400 font-bold">$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ 30-Day Fast-Track Implementation</span>
                  <span className="text-gold-400 font-bold">$97</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ Lifetime Updates & New Content</span>
                  <span className="text-gold-400 font-bold">$147</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">✓ 60-Day Money-Back Guarantee</span>
                  <span className="text-gold-400 font-bold">Priceless</span>
                </div>
              </div>

              <div className="border-t-2 border-gold-500/50 pt-6">
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-white">TOTAL VALUE:</span>
                  <span className="text-gold-400">$1,997</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Regular Price Card */}
            <div className={`bg-zinc-900 border border-zinc-700 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-gray-400">Regular Price</h3>
                <p className="text-gray-500 mb-4">What this would normally cost</p>
                <div className="text-4xl font-bold mb-2 text-gray-500 line-through">$1,497</div>
                <p className="text-gray-500">Too expensive for most people</p>
              </div>

              <div className="space-y-3 text-left mb-8">
                <p className="text-gray-500">✓ Same complete system</p>
                <p className="text-gray-500">✓ Same lifetime access</p>
                <p className="text-gray-500">✓ Same bonuses worth $1,032</p>
                <p className="text-gray-500">✓ Same results potential</p>
              </div>

              <div className="bg-gray-800 text-gray-500 py-3 px-6 rounded-lg font-bold">
                Not Available
              </div>
            </div>

            {/* Special Offer Card */}
            <div className={`bg-gradient-to-br from-pink-900/30 to-purple-900/30 border-2 border-pink-500 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up relative ${pricingAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm animate-pulse">
                  🔥 LIMITED TIME 🔥
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-pink-400">Special Launch Price</h3>
                <p className="text-gray-300 mb-4">97% OFF - Only for early adopters</p>
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <span className="text-gray-400 line-through text-2xl">$1,497</span>
                  <span className="text-green-400 font-bold text-lg">Save $1,300!</span>
                </div>
                <div className="text-6xl font-bold mb-2 text-pink-400">$197</div>
                <p className="text-gray-300">One-time payment, lifetime access</p>
              </div>

              <div className="space-y-3 text-left mb-8">
                <p className="text-gray-300">✓ Complete 8-module system ($1,297 value)</p>
                <p className="text-gray-300">✓ All exclusive bonuses ($1,032 value)</p>
                <p className="text-gray-300">✓ Private community & 1-on-1 call</p>
                <p className="text-gray-300">✓ Lifetime updates & new content</p>
                <p className="text-gray-300">✓ 60-day money-back guarantee</p>
                <p className="text-gray-300">✓ Start making money in 30 days</p>
              </div>

              <Link href="#" className="cta-button inline-block w-full text-center mb-4 btn-animate animate-glow hover-lift">
                🚀 Secure Your Spot NOW - $197
              </Link>
              
              <div className="bg-pink-900/20 border border-pink-500/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-pink-300 font-bold">🎯 Early Bird Special - Limited Time Offer</p>
                <p className="text-xs text-gray-400 mt-1">Join 847+ students who locked in this price</p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="flex text-yellow-400">{'⭐'.repeat(5)}</div>
                  <span className="text-sm text-gray-400">500+ success stories</span>
                </div>
                <p className="text-xs text-gray-400">💳 Secure payment • 🔒 SSL protected</p>
              </div>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className={`text-center mt-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400">🛡️ 60-Day "Build Your Empire" Guarantee</h3>
              <p className="text-gray-300 mb-4">
                Try the AI Influencer Empire system for 60 full days. If you don't see real progress building your first AI influencer and generating income within 60 days, I'll refund every penny.
              </p>
              <p className="text-sm text-gray-400">
                That's how confident I am this works. You have ZERO risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">SUCCESS STORIES</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Real <span className="text-pink-400">AI Influencer</span> Results
            </h2>
            <p className="text-xl text-gray-400 mt-4">Students building successful virtual models</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className={`testimonial-card card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/432373971.webp"
                  alt="Ashton Torres"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-pink-400 transition-colors duration-300">Ashton Torres</h4>
                  <p className="text-sm text-gray-400">AI Content Creator</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                "AI Influencers opened up a completely new revenue stream for me! I created 3 AI models that generate content 24/7. Within 2 months, my AI models gained 200K combined followers and started earning $8K/month through partnerships. Anyro's approach is revolutionary!"
              </p>
              <div className="bg-pink-600/10 border border-pink-600/30 rounded-lg p-3 group-hover:bg-pink-600/20 group-hover:border-pink-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors duration-300">200K combined followers, $8K/month AI revenue</p>
              </div>
            </div>

            <div className={`testimonial-card card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/2908592891.webp"
                  alt="Jake Harrison"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-pink-400 transition-colors duration-300">Jake Harrison</h4>
                  <p className="text-sm text-gray-400">Virtual Model Creator</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                "I was skeptical about AI models until I tried Anyro's system. Now I manage 5 different AI models across Instagram and TikTok. They work around the clock while I sleep! Last month alone, my AI models generated $12K through brand deals and custom content requests."
              </p>
              <div className="bg-pink-600/10 border border-pink-600/30 rounded-lg p-3 group-hover:bg-pink-600/20 group-hover:border-pink-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors duration-300">5 AI models, $12K/month revenue</p>
              </div>
            </div>

            <div className={`testimonial-card card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/1695287196.jpeg"
                  alt="Jason Chen"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-pink-400 transition-colors duration-300">Jason Chen</h4>
                  <p className="text-sm text-gray-400">Digital Entrepreneur</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                "The AI Influencers course changed everything for me. I went from struggling to grow my personal brand to managing multiple AI models that each have their own fanbase. My virtual models are now booking paid collaborations and I'm scaling to 6 figures!"
              </p>
              <div className="bg-pink-600/10 border border-pink-600/30 rounded-lg p-3 group-hover:bg-pink-600/20 group-hover:border-pink-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors duration-300">Multiple AI models, scaling to 6 figures</p>
              </div>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Become our next AI influencer success story</h3>
            <p className="text-xl text-gray-400 mb-8">Join creators building profitable virtual models with zero face-to-camera content</p>
            <Link href="#packages" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Start Your AI Empire
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={faqAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">FREQUENTLY ASKED</p>
            <h2 className="text-4xl md:text-5xl font-bold">Got Questions? We Have Answers</h2>
            <p className="text-xl text-gray-400 mt-4">Everything you need to know about building AI influencer empires</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">Is this legal? Can I really make money with AI influencers?</h3>
              <p className="text-gray-300">
                Absolutely legal and highly profitable. AI-generated content is completely legal when properly disclosed. Many AI influencers are already making $10K-50K+ per month. We cover all legal requirements and disclosure best practices in Module 6. The AI influencer market is projected to reach $15+ billion by 2025.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">Do I need technical skills or expensive equipment?</h3>
              <p className="text-gray-300">
                No technical background required. You just need a computer and internet connection. We provide all the tools, templates, and step-by-step tutorials. Our students range from complete beginners to experienced marketers - everyone succeeds with our system.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">How long before I see results?</h3>
              <p className="text-gray-300">
                Most students create their first AI influencer within 7-14 days and start generating income within 30 days. Sarah M. made $3,200 in her first month. Jake hit $12K/month by month 3. Results depend on implementation, but our fast-track system is designed for quick wins.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">What if platforms ban AI-generated content?</h3>
              <p className="text-gray-300">
                We stay ahead of platform policies and teach compliant strategies. Most platforms allow AI content with proper disclosure. We also show you how to build platform-independent audiences and diversify across multiple channels to protect your business.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">Can I create AI influencers in any niche?</h3>
              <p className="text-gray-300">
                Yes! Our system works for any niche - fitness, lifestyle, gaming, fashion, travel, business, etc. We provide niche-specific strategies and show you how to research profitable niches. Many students run multiple AI influencers across different niches.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">How much time does this require daily?</h3>
              <p className="text-gray-300">
                Initially 1-2 hours daily for setup and learning. Once automated, just 30 minutes daily for monitoring and optimization. The beauty of AI influencers is they work 24/7 while you sleep. Scale to multiple models without proportionally increasing time investment.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-7' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">What's included in the private community?</h3>
              <p className="text-gray-300">
                Access to our exclusive Discord server with 500+ active members, weekly live Q&A calls, case study breakdowns, tool recommendations, troubleshooting help, and networking opportunities. Plus direct access to me and my team for support.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-8' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">Is there ongoing support and updates?</h3>
              <p className="text-gray-300">
                Lifetime access includes all future updates, new modules, tool additions, and platform strategy changes. Our community and support never expires. As AI technology evolves, we evolve with it and share everything with our members.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-9' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">What if I don't get results?</h3>
              <p className="text-gray-300">
                60-day money-back guarantee. If you implement our system and don't see progress building your AI influencer within 60 days, we'll refund every penny. We're confident this works because we've seen it work for hundreds of students.
              </p>
            </div>

            <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-10' : ''}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400">How is this different from other AI courses?</h3>
              <p className="text-gray-300">
                This is the most comprehensive AI influencer system available. While others teach basic AI image generation, we cover the complete business model: character creation, content automation, platform strategies, monetization, scaling, legal compliance, and psychology. Plus real case studies and ongoing support.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-pink-900/30 to-purple-900/30 border border-pink-500/30 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Still Have Questions?</h3>
              <p className="text-gray-300 mb-6">
                Join our free Discord community where you can ask questions and see proof of our students' results
              </p>
              <Link href="#" className="inline-block bg-discord-500 hover:bg-discord-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                Join Free Discord Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency & Scarcity Section */}
      <section className="section-spacing border-t border-red-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={urgencyAnimation.elementRef}
            className={`text-center scroll-fade-up ${urgencyAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">⚠️ This Offer Won't Last Forever</h2>
              
              <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-8 mb-8 card-hover">
                <h3 className="text-2xl font-bold mb-4 text-red-300">Why I'm Limiting This Offer</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-bold text-white mb-2">🎯 Quality Control</h4>
                    <p className="text-gray-300 mb-4">I personally review every student's progress and provide 1-on-1 guidance. Too many students would compromise the quality of support.</p>
                    
                    <h4 className="font-bold text-white mb-2">💎 Exclusivity Protection</h4>
                    <p className="text-gray-300">If everyone has access to these exact strategies, the market becomes saturated. Limited access keeps the advantage for our community.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">🚀 Early Adopter Advantage</h4>
                    <p className="text-gray-300 mb-4">AI influencers are still new. Early adopters get the biggest market share before mainstream adoption.</p>
                    
                    <h4 className="font-bold text-white mb-2">📈 Rising Costs</h4>
                    <p className="text-gray-300">As we add more content and tools, the value increases. Early members lock in the current price forever.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400">Limited Time Offer</h3>
                    <div className="text-lg text-yellow-300">Price increasing soon</div>
                  </div>
                </div>
                <p className="text-gray-300">
                  <span className="text-yellow-400 font-bold">Current Price: $197</span> • 
                  <span className="text-red-400 font-bold"> New Price: $497</span> • 
                  <span className="text-gray-400">Full Price: $1,497</span>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-800 border border-zinc-600 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">847</div>
                  <div className="text-sm text-gray-400">Students Enrolled</div>
                </div>
                <div className="bg-zinc-800 border border-zinc-600 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">153</div>
                  <div className="text-sm text-gray-400">Spots Remaining</div>
                </div>
                <div className="bg-zinc-800 border border-zinc-600 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">$23,847</div>
                  <div className="text-sm text-gray-400">Avg Student Revenue</div>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-8">
                Don't let this opportunity slip away. Every day you wait is money left on the table while others build their AI empires.
              </p>

              <Link href="#packages" className="cta-button inline-block text-2xl py-4 px-12 btn-animate animate-glow hover-lift">
                🔥 SECURE YOUR SPOT NOW - $197 🔥
              </Link>

              <p className="text-sm text-green-400 mt-4 font-bold">
                ✅ Lifetime access + 60-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaAnimation.elementRef}
            className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to build your AI influencer empire?</h2>
            <p className="text-xl text-gray-400 mb-8">Join hundreds of creators who are already making $10K+ per month with faceless AI brands</p>
            <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift">
              Start Creating Today
            </Link>
            <p className="text-sm text-gray-400 mt-4">30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  )
}