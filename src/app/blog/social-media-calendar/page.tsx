'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function SocialMediaCalendar() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const calendarAnimation = useScrollAnimation({ threshold: 0.1 })
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                    <span className="text-green-400 text-sm font-semibold">CONTENT STRATEGY</span>
                </div>

                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              The 30-Day Social Media Calendar That <span className="text-green-400">Tripled My Sales</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 mb-8">
              Copy my exact posting schedule and content themes that <span className="text-white font-semibold">convert followers into customers</span>
                </p>

                <BlogMetrics className="text-gray-400" publishDate="2025-01-16" readTime="11 min" />
            </div>
        </div>
    </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">30-Day Calendar Results</h2>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">3.2x</div>
                        <div className="text-gray-400 text-sm">Sales Increase</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">247%</div>
                        <div className="text-gray-400 text-sm">Engagement Boost</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">52K</div>
                        <div className="text-gray-400 text-sm">New Followers</div>
                    </div>
                    <div className="bg-zinc-900 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-pink-400 mb-2">$147K</div>
                        <div className="text-gray-400 text-sm">Revenue Generated</div>
                    </div>
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
              I used to post randomly, hoping something would stick. Then I discovered <span className="text-white font-semibold">the power of strategic content planning</span> - and everything changed.
                </p>

                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">❌ The Random Posting Trap</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li>• <span className="text-white font-semibold">Inconsistent messaging</span> confuses your audience</li>
                        <li>• <span className="text-white font-semibold">No clear value proposition</span> = no sales</li>
                        <li>• <span className="text-white font-semibold">Burnout from daily pressure</span> to create</li>
                        <li>• <span className="text-white font-semibold">Missing key selling opportunities</span></li>
                        <li>• <span className="text-white font-semibold">Algorithm punishment</span> for inconsistency</li>
                    </ul>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">✅ The Strategic Calendar Solution</h2>
                    <ul className="space-y-3 text-gray-300">
                        <li>• <span className="text-white font-semibold">Predictable value delivery</span> builds trust</li>
                        <li>• <span className="text-white font-semibold">Strategic sales integration</span> feels natural</li>
                        <li>• <span className="text-white font-semibold">Batch creation</span> saves 20+ hours/month</li>
                        <li>• <span className="text-white font-semibold">Theme consistency</span> strengthens brand</li>
                        <li>• <span className="text-white font-semibold">Algorithm rewards</span> regular posting</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

      <section
        ref={calendarAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">The Exact 30-Day Calendar</h2><div className="mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-4">Week 1: Trust Building</h3>
            <div className="grid md:grid-cols-7 gap-2">
                <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="text-sm font-bold text-white mb-2">Monday</div>
                    <div className="text-xs text-blue-400 font-semibold mb-1">Motivation</div>
                    <p className="text-xs text-gray-300">Inspire action with success story</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="text-sm font-bold text-white mb-2">Tuesday</div>
                    <div className="text-xs text-purple-400 font-semibold mb-1">Tutorial</div>
                    <p className="text-xs text-gray-300">Quick how-to video</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="text-sm font-bold text-white mb-2">Wednesday</div>
                    <div className="text-xs text-pink-400 font-semibold mb-1">Behind Scene</div>
                    <p className="text-xs text-gray-300">Show your process</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="text-sm font-bold text-white mb-2">Thursday</div>
                    <div className="text-xs text-green-400 font-semibold mb-1">Value Bomb</div>
                    <p className="text-xs text-gray-300">Free resource/tip</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="text-sm font-bold text-white mb-2">Friday</div>
                    <div className="text-xs text-yellow-400 font-semibold mb-1">Community</div>
                    <p className="text-xs text-gray-300">Feature followers</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="text-sm font-bold text-white mb-2">Saturday</div>
                    <div className="text-xs text-red-400 font-semibold mb-1">Soft Sell</div>
                    <p className="text-xs text-gray-300">Product mention</p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4">
                    <div className="text-sm font-bold text-white mb-2">Sunday</div>
                    <div className="text-xs text-cyan-400 font-semibold mb-1">Lifestyle</div>
                    <p className="text-xs text-gray-300">Personal content</p>
                </div>
            </div>
        </div><div className="mb-8">
        <h3 className="text-2xl font-bold text-green-400 mb-4">Week 2: Authority Building</h3>
        <div className="grid md:grid-cols-7 gap-2">
            <div className="bg-zinc-800 rounded-lg p-4">
                <div className="text-sm font-bold text-white mb-2">Monday</div>
                <div className="text-xs text-blue-400 font-semibold mb-1">Case Study</div>
                <p className="text-xs text-gray-300">Client success</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
                <div className="text-sm font-bold text-white mb-2">Tuesday</div>
                <div className="text-xs text-purple-400 font-semibold mb-1">Expert Tips</div>
                <p className="text-xs text-gray-300">Industry insights</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
                <div className="text-sm font-bold text-white mb-2">Wednesday</div>
                <div className="text-xs text-pink-400 font-semibold mb-1">Q&A</div>
                <p className="text-xs text-gray-300">Answer questions</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
                <div className="text-sm font-bold text-white mb-2">Thursday</div>
                <div className="text-xs text-green-400 font-semibold mb-1">Tool Review</div>
                <p className="text-xs text-gray-300">Helpful resources</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
                <div className="text-sm font-bold text-white mb-2">Friday</div>
                <div className="text-xs text-yellow-400 font-semibold mb-1">Collab</div>
                <p className="text-xs text-gray-300">Guest feature</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4 border-2 border-red-500">
                <div className="text-sm font-bold text-white mb-2">Saturday</div>
                <div className="text-xs text-red-400 font-semibold mb-1">LAUNCH</div>
                <p className="text-xs text-gray-300">Product drop</p>
            </div>
            <div className="bg-zinc-800 rounded-lg p-4">
                <div className="text-sm font-bold text-white mb-2">Sunday</div>
                <div className="text-xs text-cyan-400 font-semibold mb-1">Social Proof</div>
                <p className="text-xs text-gray-300">Testimonials</p>
            </div>
        </div>
    </div><div className="mb-8">
    <h3 className="text-2xl font-bold text-green-400 mb-4">Week 3: Engagement Focus</h3>
    <div className="grid md:grid-cols-7 gap-2">
        <div className="bg-zinc-800 rounded-lg p-4">
            <div className="text-sm font-bold text-white mb-2">Monday</div>
            <div className="text-xs text-blue-400 font-semibold mb-1">Challenge</div>
            <p className="text-xs text-gray-300">Start 5-day series</p>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
            <div className="text-sm font-bold text-white mb-2">Tuesday</div>
            <div className="text-xs text-purple-400 font-semibold mb-1">Live Session</div>
            <p className="text-xs text-gray-300">Real-time value</p>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
            <div className="text-sm font-bold text-white mb-2">Wednesday</div>
            <div className="text-xs text-pink-400 font-semibold mb-1">Poll/Vote</div>
            <p className="text-xs text-gray-300">Get feedback</p>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
            <div className="text-sm font-bold text-white mb-2">Thursday</div>
            <div className="text-xs text-green-400 font-semibold mb-1">User Content</div>
            <p className="text-xs text-gray-300">Share mentions</p>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
            <div className="text-sm font-bold text-white mb-2">Friday</div>
            <div className="text-xs text-yellow-400 font-semibold mb-1">Giveaway</div>
            <p className="text-xs text-gray-300">Boost engagement</p>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
            <div className="text-sm font-bold text-white mb-2">Saturday</div>
            <div className="text-xs text-red-400 font-semibold mb-1">Flash Sale</div>
            <p className="text-xs text-gray-300">24hr discount</p>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4">
            <div className="text-sm font-bold text-white mb-2">Sunday</div>
            <div className="text-xs text-cyan-400 font-semibold mb-1">Recap</div>
            <p className="text-xs text-gray-300">Week highlights</p>
        </div>
    </div>
</div><div className="mb-8">
<h3 className="text-2xl font-bold text-green-400 mb-4">Week 4: Sales Push</h3>
<div className="grid md:grid-cols-7 gap-2">
    <div className="bg-zinc-800 rounded-lg p-4">
        <div className="text-sm font-bold text-white mb-2">Monday</div>
        <div className="text-xs text-blue-400 font-semibold mb-1">Problem</div>
        <p className="text-xs text-gray-300">Pain points</p>
    </div>
    <div className="bg-zinc-800 rounded-lg p-4">
        <div className="text-sm font-bold text-white mb-2">Tuesday</div>
        <div className="text-xs text-purple-400 font-semibold mb-1">Solution</div>
        <p className="text-xs text-gray-300">Your product</p>
    </div>
    <div className="bg-zinc-800 rounded-lg p-4 border-2 border-green-500">
        <div className="text-sm font-bold text-white mb-2">Wednesday</div>
        <div className="text-xs text-green-400 font-semibold mb-1">MEGA SALE</div>
        <p className="text-xs text-gray-300">Best offer</p>
    </div>
    <div className="bg-zinc-800 rounded-lg p-4">
        <div className="text-sm font-bold text-white mb-2">Thursday</div>
        <div className="text-xs text-green-400 font-semibold mb-1">Urgency</div>
        <p className="text-xs text-gray-300">Limited time</p>
    </div>
    <div className="bg-zinc-800 rounded-lg p-4">
        <div className="text-sm font-bold text-white mb-2">Friday</div>
        <div className="text-xs text-yellow-400 font-semibold mb-1">Last Call</div>
        <p className="text-xs text-gray-300">Final hours</p>
    </div>
    <div className="bg-zinc-800 rounded-lg p-4">
        <div className="text-sm font-bold text-white mb-2">Saturday</div>
        <div className="text-xs text-red-400 font-semibold mb-1">Results</div>
        <p className="text-xs text-gray-300">Share wins</p>
    </div>
    <div className="bg-zinc-800 rounded-lg p-4">
        <div className="text-sm font-bold text-white mb-2">Sunday</div>
        <div className="text-xs text-cyan-400 font-semibold mb-1">Planning</div>
        <p className="text-xs text-gray-300">Next month</p>
    </div>
</div>
</div>
</div>
</section>

      <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Content Themes That Convert</h2>
          
        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-4">💙</div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Motivation Monday</h3>
                <p className="text-gray-400 mb-4">Start week with inspiration</p>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Success stories</li>
                    <li>• Mindset shifts</li>
                    <li>• Goal setting</li>
                    <li>• Action plans</li>
                </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-4">💜</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Tutorial Tuesday</h3>
                <p className="text-gray-400 mb-4">Teach valuable skills</p>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Step-by-step guides</li>
                    <li>• Tool demonstrations</li>
                    <li>• Quick tips</li>
                    <li>• Hacks & shortcuts</li>
                </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-4">💚</div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Win Wednesday</h3>
                <p className="text-gray-400 mb-4">Celebrate successes</p>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Client results</li>
                    <li>• Milestones</li>
                    <li>• Testimonials</li>
                    <li>• Case studies</li>
                </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-4">💛</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-3">Throwback Thursday</h3>
                <p className="text-gray-400 mb-4">Share your journey</p>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Before/after</li>
                    <li>• Lessons learned</li>
                    <li>• Old content</li>
                    <li>• Evolution story</li>
                </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-4">❤️</div>
                <h3 className="text-xl font-bold text-red-400 mb-3">Feature Friday</h3>
                <p className="text-gray-400 mb-4">Spotlight community</p>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>• User highlights</li>
                    <li>• Collaborations</li>
                    <li>• Guest content</li>
                    <li>• Shoutouts</li>
                </ul>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
                <div className="text-3xl mb-4">💗</div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">Sales Weekend</h3>
                <p className="text-gray-400 mb-4">Strategic promotions</p>
                <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Special offers</li>
                    <li>• Bundle deals</li>
                    <li>• Flash sales</li>
                    <li>• Bonuses</li>
                </ul>
            </div>
        </div>
    </div>
</section>

      <section
        ref={resultsAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Real Results From This Calendar</h2>
          
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">📈 Growth Metrics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-green-400 font-semibold mb-3">Before Calendar:</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>• 127 daily followers</li>
                            <li>• 2.3% engagement rate</li>
                            <li>• $14K monthly revenue</li>
                            <li>• 3-5 sales per day</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-blue-400 font-semibold mb-3">After 30 Days:</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>• 1,733 daily followers</li>
                            <li>• 8.1% engagement rate</li>
                            <li>• $147K monthly revenue</li>
                            <li>• 25-30 sales per day</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">🎯 Key Success Factors</h3>
                <ul className="space-y-3 text-gray-300">
                    <li>✅ <span className="text-white font-semibold">Consistency</span> - Posted every single day without fail</li>
                    <li>✅ <span className="text-white font-semibold">Value First</span> - 80% value, 20% promotion ratio</li>
                    <li>✅ <span className="text-white font-semibold">Strategic Timing</span> - Sales aligned with engagement peaks</li>
                    <li>✅ <span className="text-white font-semibold">Theme Repetition</span> - Audience knew what to expect</li>
                    <li>✅ <span className="text-white font-semibold">Cross-Platform</span> - Same calendar on all channels</li>
                </ul>
            </div>
        </div>
    </div>
</section>

      <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Implement This Calendar</h2>
          
        <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">📅 Planning Phase</h3>
                <ol className="space-y-3 text-gray-300">
                    <li><span className="text-white font-semibold">1.</span> Block 2 hours on Sunday</li>
                    <li><span className="text-white font-semibold">2.</span> Plan all 30 days at once</li>
                    <li><span className="text-white font-semibold">3.</span> Create content buckets</li>
                    <li><span className="text-white font-semibold">4.</span> Schedule major promotions</li>
                    <li><span className="text-white font-semibold">5.</span> Leave flexibility for trends</li>
                </ol>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">🎨 Creation Phase</h3>
                <ol className="space-y-3 text-gray-300">
                    <li><span className="text-white font-semibold">1.</span> Batch create weekly</li>
                    <li><span className="text-white font-semibold">2.</span> Use templates for speed</li>
                    <li><span className="text-white font-semibold">3.</span> Repurpose across platforms</li>
                    <li><span className="text-white font-semibold">4.</span> Schedule in advance</li>
                    <li><span className="text-white font-semibold">5.</span> Track performance daily</li>
                </ol>
            </div>
        </div>
          
        <div className="mt-8 p-6 bg-zinc-900 rounded-xl text-center">
            <p className="text-lg text-gray-300">
                <span className="text-green-400 font-bold">Pro Tip:</span> Start with Week 1 only. Once comfortable, expand to full month.
            </p>
        </div>
    </div>
</section>

      <section
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up `}
      >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get The Complete Calendar System
        </h2>
          
        <p className="text-xl text-gray-400 mb-8">
            Including templates, scheduling tools, and my exact content formulas
        </p>
          
        <Link
            href="/digital-products"
            className="cta-button inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Get The Social Media Calendar
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </Link>
    </div>
</section>
</div>
)
}
