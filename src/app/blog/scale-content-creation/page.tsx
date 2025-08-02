'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function ScaleContentCreation() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const systemAnimation = useScrollAnimation({ threshold: 0.1 })
  const workflowAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    
    <div className="min-h-screen bg-dark">

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up `}
          >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <span className="text-blue-400 text-sm font-semibold">PRODUCTIVITY</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Scale Your Content Creation: <span className="text-blue-400">100 Posts in 2 Hours</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              My exact system for creating <span className="text-white font-semibold">a month's worth of content in a single afternoon</span>
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-01-15" readTime="12 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">The Content Creation Trap</h2>
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                    <ul className="space-y-3 text-gray-300">
                        <li>• Spending <span className="text-white font-semibold">3-4 hours daily</span> on content</li>
                        <li>• Running out of ideas by week 2</li>
                        <li>• Inconsistent posting = algorithm punishment</li>
                        <li>• Burnout from constant creation pressure</li>
                        <li>• Quality dropping when rushed</li>
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
            <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I went from spending 20 hours/week on content to <span className="text-white font-semibold">2 hours every Sunday</span>. Here's the exact system that changed everything.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">The Batch Creation Revolution</h2>
            
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">🚀 Why Batching Works</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>• <span className="text-white font-semibold">Context switching kills productivity</span> - Stay in one mode</li>
                        <li>• <span className="text-white font-semibold">Templates save 80% of time</span> - Reuse what works</li>
                        <li>• <span className="text-white font-semibold">Bulk tools exist</span> - Create 100 graphics in minutes</li>
                        <li>• <span className="text-white font-semibold">AI multiplies output</span> - Generate variations instantly</li>
                        <li>• <span className="text-white font-semibold">Momentum builds quality</span> - Better ideas when flowing</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={systemAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The 5-Step Content Scaling System</h2>
          
            <div className="space-y-6"><div className="bg-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">Content Ideation Sprint (20 min)</h3>
                        <p className="text-gray-400 mb-4">Generate 100+ ideas in one session</p>
                  
                        <div className="bg-zinc-900 rounded-lg p-6">
                            <h4 className="text-white font-semibold mb-3">My Ideation Framework:</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>• <span className="text-blue-400">10 How-to posts:</span> Step-by-step tutorials</li>
                                <li>• <span className="text-blue-400">10 Tips/hacks:</span> Quick value bombs</li>
                                <li>• <span className="text-blue-400">10 Mistakes:</span> What to avoid</li>
                                <li>• <span className="text-blue-400">10 Tools/resources:</span> Recommendations</li>
                                <li>• <span className="text-blue-400">10 Case studies:</span> Success stories</li>
                                <li>• <span className="text-blue-400">10 Q&amp;As:</span> Answer common questions</li>
                                <li>• <span className="text-blue-400">10 Trends:</span> Industry insights</li>
                            </ul>
                            <p className="text-green-400 text-sm mt-4">= 70 ideas in 20 minutes</p>
                        </div>
                    </div>
                </div>
            </div><div className="bg-zinc-800 rounded-xl p-6">
            <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">AI Content Generation (30 min)</h3>
                    <p className="text-gray-400 mb-4">Turn ideas into full content pieces</p>
                  
                    <div className="bg-zinc-900 rounded-lg p-6">
                        <h4 className="text-white font-semibold mb-3">My AI Workflow:</h4>
                        <ol className="space-y-3 text-gray-300">
                            <li>1. <span className="text-blue-400">Prompt template:</span> "[Type] post about [topic] for [audience]"</li>
                            <li>2. <span className="text-blue-400">Generate variations:</span> 3-5 versions per idea</li>
                            <li>3. <span className="text-blue-400">Mix and match:</span> Combine best parts</li>
                            <li>4. <span className="text-blue-400">Add personality:</span> Inject your voice</li>
                            <li>5. <span className="text-blue-400">Batch edit:</span> Polish all at once</li>
                        </ol>
                        <p className="text-green-400 text-sm mt-4">Output: 100 pieces of content</p>
                    </div>
                </div>
            </div>
        </div><div className="bg-zinc-800 rounded-xl p-6">
        <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-3">Visual Creation Sprint (40 min)</h3>
                <p className="text-gray-400 mb-4">Design all graphics in one go</p>
                  
                <div className="bg-zinc-900 rounded-lg p-6">
                    <h4 className="text-white font-semibold mb-3">Bulk Design Process:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-blue-400 font-semibold mb-2">Canva Bulk Create:</p>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• Upload CSV with content</li>
                                <li>• Apply to templates</li>
                                <li>• Generate 100 designs</li>
                                <li>• Download all</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-blue-400 font-semibold mb-2">Quick Tools:</p>
                            <ul className="space-y-1 text-sm text-gray-300">
                                <li>• Bannerbear API</li>
                                <li>• Placeit templates</li>
                                <li>• Remove.bg batch</li>
                                <li>• Figma components</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><div className="bg-zinc-800 rounded-xl p-6">
    <div className="flex items-start gap-4">
        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
        <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-3">Platform Optimization (20 min)</h3>
            <p className="text-gray-400 mb-4">Adapt content for each platform</p>
                  
            <div className="bg-zinc-900 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-3">Platform Adaptations:</h4>
                <ul className="space-y-2 text-gray-300">
                    <li>• <span className="text-blue-400">Instagram:</span> Square images, 30 hashtags, emoji-rich</li>
                    <li>• <span className="text-blue-400">Twitter:</span> Thread format, 280 char chunks</li>
                    <li>• <span className="text-blue-400">LinkedIn:</span> Professional tone, no hashtags</li>
                    <li>• <span className="text-blue-400">TikTok:</span> Hook-heavy, trending sounds</li>
                    <li>• <span className="text-blue-400">YouTube:</span> SEO titles, detailed descriptions</li>
                </ul>
            </div>
        </div>
    </div>
</div><div className="bg-zinc-800 rounded-xl p-6">
<div className="flex items-start gap-4">
    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
    <div className="flex-1">
        <h3 className="text-2xl font-bold text-white mb-3">Scheduling Marathon (10 min)</h3>
        <p className="text-gray-400 mb-4">Queue everything for the month</p>
                  
        <div className="bg-zinc-900 rounded-lg p-6">
            <h4 className="text-white font-semibold mb-3">Scheduling Strategy:</h4>
            <ul className="space-y-2 text-gray-300">
                <li>• Use Buffer/Later/Hootsuite bulk upload</li>
                <li>• Optimal posting times per platform</li>
                <li>• Space content 4-6 hours apart</li>
                <li>• Mix content types daily</li>
                <li>• Leave room for real-time posts</li>
            </ul>
            <p className="text-green-400 text-sm mt-4">Result: 30 days of content scheduled</p>
        </div>
    </div>
</div>
</div>
</div>
</div>
</section>

      <section
        ref={workflowAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">My Content Templates Library</h2>
          
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">📝 Text Templates</h3>
                <div className="space-y-3">
                    <div className="bg-zinc-800 rounded p-3">
                        <p className="text-sm font-semibold text-white mb-1">How-To Template:</p>
                        <p className="text-xs text-gray-400">How to [achieve outcome] in [timeframe] (even if [objection])</p>
                    </div>
                    <div className="bg-zinc-800 rounded p-3">
                        <p className="text-sm font-semibold text-white mb-1">List Template:</p>
                        <p className="text-xs text-gray-400">[Number] [category] that [benefit]</p>
                    </div>
                    <div className="bg-zinc-800 rounded p-3">
                        <p className="text-sm font-semibold text-white mb-1">Mistake Template:</p>
                        <p className="text-xs text-gray-400">Stop [common action]. Do this instead: [solution]</p>
                    </div>
                </div>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">🎨 Visual Templates</h3>
                <div className="space-y-3">
                    <div className="bg-zinc-800 rounded p-3">
                        <p className="text-sm font-semibold text-white mb-1">Quote Cards:</p>
                        <p className="text-xs text-gray-400">Bold text + gradient background + author</p>
                    </div>
                    <div className="bg-zinc-800 rounded p-3">
                        <p className="text-sm font-semibold text-white mb-1">Before/After:</p>
                        <p className="text-xs text-gray-400">Split screen + transformation + stats</p>
                    </div>
                    <div className="bg-zinc-800 rounded p-3">
                        <p className="text-sm font-semibold text-white mb-1">Carousel:</p>
                        <p className="text-xs text-gray-400">Cover + 5-7 tips + CTA slide</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      <section className="section-spacing bg-zinc-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Essential Batch Creation Tools</h2>
          
        <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-zinc-800 rounded-xl p-4">
                <h4 className="text-lg font-bold text-blue-400 mb-3">💡 Ideation</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• AnswerThePublic</li>
                    <li>• BuzzSumo</li>
                    <li>• Reddit</li>
                    <li>• Google Trends</li>
                </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-4">
                <h4 className="text-lg font-bold text-green-400 mb-3">✍️ Writing</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• ChatGPT</li>
                    <li>• Jasper</li>
                    <li>• Copy.ai</li>
                    <li>• Writesonic</li>
                </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-4">
                <h4 className="text-lg font-bold text-purple-400 mb-3">🎨 Design</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Canva Bulk</li>
                    <li>• Figma</li>
                    <li>• Adobe Express</li>
                    <li>• Bannerbear</li>
                </ul>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-4">
                <h4 className="text-lg font-bold text-pink-400 mb-3">📅 Scheduling</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Buffer</li>
                    <li>• Later</li>
                    <li>• Hootsuite</li>
                    <li>• SocialPilot</li>
                </ul>
            </div>
        </div>
    </div>
</section>

      <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">The Results Speak for Themselves</h2>
          
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-bold text-blue-400 mb-4">⏰ Before (Daily Creation)</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• 3-4 hours per day</li>
                        <li>• 20+ hours per week</li>
                        <li>• Constant stress</li>
                        <li>• Inconsistent quality</li>
                        <li>• Creative burnout</li>
                    </ul>
                </div>
              
                <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">🚀 After (Batch System)</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li>• 2 hours per month</li>
                        <li>• 30+ days of content ready</li>
                        <li>• Stress-free posting</li>
                        <li>• Consistent high quality</li>
                        <li>• Time for strategy</li>
                    </ul>
                </div>
            </div>
            
            <div className="mt-8 p-4 bg-zinc-900/50 rounded text-center">
                <p className="text-white text-lg">
                    <span className="text-green-400 font-bold">90% time saved</span> + <span className="text-blue-400 font-bold">3x more content</span> = <span className="text-purple-400 font-bold">10x better results</span>
                </p>
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
            Ready to 10x Your Content Output?
        </h2>
          
        <p className="text-xl text-gray-400 mb-8">
            Get my complete content scaling system with templates, workflows, and automation
        </p>
          
        <Link
            href="/digital-products"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Get The Content Scaling System
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </Link>
    </div>
</section>
</div>
)
}
