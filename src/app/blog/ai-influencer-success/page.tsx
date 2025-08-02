'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function AIInfluencerSuccess() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const processAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    
    <div className="min-h-screen bg-dark">

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up `}
          >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                    <span className="text-pink-400 text-sm font-semibold">AI STRATEGY</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The AI Influencer Revolution: How Isabella Torres Built Virtual Personas Earning <span className="text-pink-400">$8K/Month</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Discover how Isabella created <span className="text-white font-semibold">AI models that generate content 24/7</span> and earn through partnerships
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-01-14" readTime="14 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">The Pioneer of AI Influence</h2>
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl p-8">
                    <p className="text-lg text-gray-300 mb-6">
                Isabella Torres was a <span className="text-white font-semibold">struggling photographer</span> who discovered the power of AI-generated influencers. In just 6 months, she built a network of virtual personas earning more than most human influencers.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-pink-400 mb-3">The Breakthrough</h3>
                            <p className="text-gray-400 mb-4">
                    "I realized AI models never sleep, never complain, and can create content in multiple languages simultaneously. They're the perfect influencers."
                            </p>
                            <ul className="space-y-2 text-gray-400">
                                <li>✓ No photo shoots needed</li>
                                <li>✓ Consistent brand messaging</li>
                                <li>✓ 24/7 content creation</li>
                                <li>✓ Perfect engagement timing</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-purple-400 mb-3">The Numbers</h3>
                            <div className="space-y-4">
                                <div className="bg-zinc-800 rounded-lg p-4">
                                    <div className="text-2xl font-bold text-white">3 AI Models</div>
                                    <div className="text-gray-400">Each with unique personalities</div>
                                </div>
                                <div className="bg-zinc-800 rounded-lg p-4">
                                    <div className="text-2xl font-bold text-white">250K+ Followers</div>
                                    <div className="text-gray-400">Combined across platforms</div>
                                </div>
                                <div className="bg-zinc-800 rounded-lg p-4">
                                    <div className="text-2xl font-bold text-white">$8,000/month</div>
                                    <div className="text-gray-400">From brand partnerships</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Isabella's AI Influencer Empire</h2>
          
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-zinc-900 rounded-2xl p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-white mb-2">Luna Chen</h3>
                    <p className="text-pink-400 mb-3">Fashion & Lifestyle</p>
                    <div className="space-y-2 text-sm text-gray-400">
                        <div>📍 128K followers</div>
                        <div>💰 $3,500/month</div>
                        <div>🎯 18-24 female audience</div>
                    </div>
                    <p className="text-gray-400 mt-4">
                Trendy fashionista sharing daily outfits, beauty tips, and lifestyle content. Partners with fashion brands globally.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-white mb-2">Alex Rivers</h3>
                    <p className="text-blue-400 mb-3">Fitness & Wellness</p>
                    <div className="space-y-2 text-sm text-gray-400">
                        <div>📍 87K followers</div>
                        <div>💰 $2,800/month</div>
                        <div>🎯 25-35 health conscious</div>
                    </div>
                    <p className="text-gray-400 mt-4">
                Fitness coach sharing workout routines, meal prep ideas, and motivation. Works with supplement brands.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-white mb-2">Kai Digital</h3>
                    <p className="text-green-400 mb-3">Tech & Gaming</p>
                    <div className="space-y-2 text-sm text-gray-400">
                        <div>📍 42K followers</div>
                        <div>💰 $1,700/month</div>
                        <div>🎯 16-25 gamers</div>
                    </div>
                    <p className="text-gray-400 mt-4">
                Tech reviewer and gaming enthusiast. Partners with gaming peripherals and software companies.
                    </p>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={processAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The 5-Step AI Influencer System</h2>
          
            <div className="space-y-6">
                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Character Development</h3>
                            <p className="text-gray-400 mb-3">Create detailed personas with backstories, interests, and unique voices.</p>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <p className="text-sm text-gray-300">
                                    <span className="text-pink-400 font-semibold">Pro tip:</span> Isabella spends 2 weeks developing each character's personality, ensuring they feel authentic and relatable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">AI Model Training</h3>
                            <p className="text-gray-400 mb-3">Use Stable Diffusion and custom LoRAs to create consistent character appearances.</p>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <p className="text-sm text-gray-300">
                                    <span className="text-pink-400 font-semibold">Tools:</span> ComfyUI + Stable Diffusion XL + Custom training data
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Content Automation</h3>
                            <p className="text-gray-400 mb-3">Build workflows that generate, caption, and post content automatically.</p>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <p className="text-sm text-gray-300">
                                    <span className="text-pink-400 font-semibold">Workflow:</span> N8N + GPT-4 + ComfyUI + Buffer for scheduling
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Engagement Strategy</h3>
                            <p className="text-gray-400 mb-3">Use AI to respond to comments and DMs in character voice.</p>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <p className="text-sm text-gray-300">
                                    <span className="text-pink-400 font-semibold">Key:</span> 15-minute response time maintains illusion of real person
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Monetization</h3>
                            <p className="text-gray-400 mb-3">Pitch to brands, negotiate deals, and deliver campaigns.</p>
                            <div className="bg-zinc-900 rounded-lg p-4">
                                <p className="text-sm text-gray-300">
                                    <span className="text-pink-400 font-semibold">Revenue:</span> $500-2000 per sponsored post per influencer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={resultsAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-8">Isabella's Top Tips for AI Influencer Success</h2>
          
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-pink-400 mb-3">Do's ✓</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Create detailed character bibles</li>
                        <li>• Post consistently (3-5x daily)</li>
                        <li>• Engage within 15 minutes</li>
                        <li>• Be transparent about AI (in bio)</li>
                        <li>• Focus on value, not just looks</li>
                        <li>• Test different content styles</li>
                    </ul>
                </div>
            
                <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-red-400 mb-3">Don'ts ✗</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• Don't mislead brands about AI</li>
                        <li>• Don't use celebrity faces</li>
                        <li>• Don't ignore comments</li>
                        <li>• Don't post low-quality images</li>
                        <li>• Don't break character</li>
                        <li>• Don't spam or over-promote</li>
                    </ul>
                </div>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-8 text-center">
                <blockquote className="text-xl text-gray-300 italic mb-4">
              "AI influencers aren't replacing humans – they're creating a new category of content. The key is authenticity in your artificiality. Be honest, provide value, and the followers (and money) will come."
                </blockquote>
                <div className="text-white font-semibold">- Isabella Torres</div>
                <div className="text-gray-400">AI Influencer Pioneer</div>
            </div>
        </div>
    </section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your AI Influencer Empire?
            </h2>
          
            <p className="text-xl text-gray-400 mb-8">
            Learn Isabella's exact system in our AI Influencer course
            </p>
          
            <Link
            href="/ai-influencer"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Start Creating AI Influencers
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
        </div>
    </section>
</div>
)
}
