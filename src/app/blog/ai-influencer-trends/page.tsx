'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function AIInfluencerTrends() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const trendsAnimation = useScrollAnimation({ threshold: 0.1 })
  const futureAnimation = useScrollAnimation({ threshold: 0.1 })
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
                    <span className="text-pink-400 text-sm font-semibold">TRENDS</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The AI Influencer Revolution: <span className="text-pink-400">$15B Market</span> by 2025
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              How virtual humans are reshaping <span className="text-white font-semibold">social media, marketing, and creator economy</span>
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-02-03" readTime="13 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">The Current State of AI Influencers</h2>
                <div className="grid md:grid-cols-4 gap-4 text-center">
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="text-3xl font-bold text-pink-400 mb-2">$15B</div>
                        <p className="text-gray-400 text-sm">Projected market by 2025</p>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="text-3xl font-bold text-blue-400 mb-2">3x</div>
                        <p className="text-gray-400 text-sm">Higher engagement than humans</p>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="text-3xl font-bold text-green-400 mb-2">58%</div>
                        <p className="text-gray-400 text-sm">Consumers follow AI influencers</p>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4">
                        <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                        <p className="text-gray-400 text-sm">Content creation capability</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={trendsAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The 7 Biggest AI Influencer Trends</h2>
          
            <div className="space-y-8"><div className="bg-zinc-900 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Hyper-Realistic Avatars</h3>
                        <p className="text-gray-400 mb-4">The line between AI and human is disappearing</p>
                  
                        <div className="bg-zinc-800 rounded-lg p-6">
                            <h4 className="text-white font-semibold mb-3">What's happening:</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Unreal Engine 5 MetaHumans in social media</li>
                                <li>• Real-time facial animation and lip-sync</li>
                                <li>• Dynamic lighting and skin textures</li>
                                <li>• Micro-expressions and emotional nuance</li>
                            </ul>
                    
                            <div className="mt-4 grid md:grid-cols-2 gap-4">
                                <div className="bg-zinc-900 rounded p-3">
                                    <p className="text-sm text-gray-400 mb-1">Success Example</p>
                                    <p className="text-white font-semibold">Lil Miquela: 3M followers, $10M+ revenue</p>
                                </div>
                                <div className="bg-zinc-900 rounded p-3">
                                    <p className="text-sm text-gray-400 mb-1">Technology</p>
                                    <p className="text-white font-semibold">Stable Diffusion + Live2D + Unreal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="bg-zinc-900 rounded-xl p-6">
            <div className="flex items-start gap-4">
                <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">Interactive AI Personalities</h3>
                    <p className="text-gray-400 mb-4">Two-way conversations are the new engagement metric</p>
                  
                    <div className="bg-zinc-800 rounded-lg p-6">
                        <h4 className="text-white font-semibold mb-3">Revolutionary features:</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-gray-300">
                                <li>• Real-time DM responses</li>
                                <li>• Personalized content for each follower</li>
                                <li>• Memory of past interactions</li>
                                <li>• Voice and video calls</li>
                            </ul>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Live streaming capabilities</li>
                                <li>• Custom content requests</li>
                                <li>• Emotional intelligence</li>
                                <li>• Multi-language support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className="bg-zinc-900 rounded-xl p-6">
        <div className="flex items-start gap-4">
            <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Niche Specialization</h3>
                <p className="text-gray-400 mb-4">AI influencers for every possible interest</p>
                  
                <div className="bg-zinc-800 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Emerging niches:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="bg-zinc-900 rounded p-3 text-center">
                            <span className="text-2xl mb-1 block">🏋️</span>
                            <p className="text-sm text-gray-300">Fitness Coaches</p>
                        </div>
                        <div className="bg-zinc-900 rounded p-3 text-center">
                            <span className="text-2xl mb-1 block">🍳</span>
                            <p className="text-sm text-gray-300">Cooking Experts</p>
                        </div>
                        <div className="bg-zinc-900 rounded p-3 text-center">
                            <span className="text-2xl mb-1 block">💰</span>
                            <p className="text-sm text-gray-300">Finance Advisors</p>
                        </div>
                        <div className="bg-zinc-900 rounded p-3 text-center">
                            <span className="text-2xl mb-1 block">🎮</span>
                            <p className="text-sm text-gray-300">Gaming Streamers</p>
                        </div>
                        <div className="bg-zinc-900 rounded p-3 text-center">
                            <span className="text-2xl mb-1 block">🧘</span>
                            <p className="text-sm text-gray-300">Wellness Gurus</p>
                        </div>
                        <div className="bg-zinc-900 rounded p-3 text-center">
                            <span className="text-2xl mb-1 block">📚</span>
                            <p className="text-sm text-gray-300">Education Tutors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><div className="bg-zinc-900 rounded-xl p-6">
    <div className="flex items-start gap-4">
        <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
        <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">Brand Collaboration Evolution</h3>
            <p className="text-gray-400 mb-4">Major brands choosing AI over human influencers</p>
                  
            <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">Why brands love AI influencers:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h5 className="text-pink-400 font-semibold mb-2">Control & Consistency</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                            <li>• No scandals or controversies</li>
                            <li>• Perfect brand alignment</li>
                            <li>• Predictable content quality</li>
                            <li>• Complete creative control</li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-pink-400 font-semibold mb-2">Cost Efficiency</h5>
                        <ul className="space-y-1 text-sm text-gray-300">
                            <li>• No travel or accommodation</li>
                            <li>• Unlimited content creation</li>
                            <li>• Multi-campaign usage</li>
                            <li>• Global reach instantly</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div><div className="bg-zinc-900 rounded-xl p-6">
<div className="flex items-start gap-4">
    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
    <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">Cross-Platform Presence</h3>
        <p className="text-gray-400 mb-4">AI influencers everywhere, all at once</p>
                  
        <div className="bg-zinc-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3">Platform strategy:</h4>
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="text-pink-400 font-semibold">Instagram:</span>
                    <span className="text-gray-300">Visual storytelling and lifestyle content</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-pink-400 font-semibold">TikTok:</span>
                    <span className="text-gray-300">Viral dances and trend participation</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-pink-400 font-semibold">YouTube:</span>
                    <span className="text-gray-300">Long-form content and vlogs</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-pink-400 font-semibold">Twitch:</span>
                    <span className="text-gray-300">Live streaming and gaming</span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-pink-400 font-semibold">OnlyFans:</span>
                    <span className="text-gray-300">Premium exclusive content</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div><div className="bg-zinc-900 rounded-xl p-6">
<div className="flex items-start gap-4">
    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">6</div>
    <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">NFT & Metaverse Integration</h3>
        <p className="text-gray-400 mb-4">Virtual influencers in virtual worlds</p>
                  
        <div className="bg-zinc-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3">Revenue streams:</h4>
            <ul className="space-y-2 text-gray-300">
                <li>• NFT collections featuring AI influencer art</li>
                <li>• Virtual fashion and accessory sales</li>
                <li>• Metaverse event appearances</li>
                <li>• Digital real estate partnerships</li>
                <li>• Virtual concert performances</li>
            </ul>
            <div className="mt-4 p-4 bg-zinc-900 rounded">
                <p className="text-sm text-gray-400">
                    <span className="text-pink-400 font-semibold">Case study:</span> Knox Frost's NFT drop sold out in 7 minutes for $1.2M
                </p>
            </div>
        </div>
    </div>
</div>
</div><div className="bg-zinc-900 rounded-xl p-6">
<div className="flex items-start gap-4">
    <div className="bg-pink-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">7</div>
    <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">AI-to-AI Collaborations</h3>
        <p className="text-gray-400 mb-4">Virtual influencers creating content together</p>
                  
        <div className="bg-zinc-800 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3">Collaboration types:</h4>
            <ul className="space-y-2 text-gray-300">
                <li>• Joint photoshoots and campaigns</li>
                <li>• Cross-promotion between AI accounts</li>
                <li>• Virtual relationships and drama</li>
                <li>• Collaborative product launches</li>
                <li>• AI influencer "friend groups"</li>
            </ul>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>

      <section
        ref={futureAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">What's Coming Next</h2>
          
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">🚀 2025 Predictions</h3>
                <ul className="space-y-2 text-gray-300">
                    <li>• First AI influencer with 10M+ followers</li>
                    <li>• AI-generated Hollywood movie star</li>
                    <li>• Virtual influencer talent agencies</li>
                    <li>• Government regulation discussions</li>
                    <li>• $1B+ brand deal announced</li>
                </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">🔮 2025 Vision</h3>
                <ul className="space-y-2 text-gray-300">
                    <li>• Indistinguishable from humans</li>
                    <li>• AI influencer-owned brands</li>
                    <li>• Virtual-first marketing standard</li>
                    <li>• Deep emotional connections</li>
                    <li>• New legal frameworks</li>
                </ul>
            </div>
        </div>
    </div>
</section>

      <section
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8">How to Capitalize on This Trend</h2>
          
        <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-8">
            <div className="space-y-6">
                <div>
                    <h3 className="text-xl font-bold text-white mb-3">For Content Creators:</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>✨ Create your own AI influencer with unique personality</li>
                        <li>✨ Build automated content systems for 24/7 posting</li>
                        <li>✨ Target underserved niches with specialized AI personas</li>
                        <li>✨ Offer AI influencer creation as a service</li>
                    </ul>
                </div>
              
                <div>
                    <h3 className="text-xl font-bold text-white mb-3">For Businesses:</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>💼 Develop brand-specific AI ambassadors</li>
                        <li>💼 Test products with virtual focus groups</li>
                        <li>💼 Create customer service AI personalities</li>
                        <li>💼 Launch AI-powered marketing campaigns</li>
                    </ul>
                </div>
              
                <div>
                    <h3 className="text-xl font-bold text-white mb-3">For Developers:</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>🛠️ Build tools for AI influencer management</li>
                        <li>🛠️ Create marketplaces for AI personas</li>
                        <li>🛠️ Develop interaction automation platforms</li>
                        <li>🛠️ Design analytics for virtual influencers</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Building Your AI Influencer Empire
        </h2>
          
        <p className="text-xl text-gray-400 mb-8">
            Get ahead of the $15B wave with our complete system
        </p>
          
        <Link
            href="/ai-influencer"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Launch Your AI Influencer
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </Link>
    </div>
</section>
</div>
)
}
