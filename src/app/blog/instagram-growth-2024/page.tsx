'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function InstagramGrowth2024() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const strategiesAnimation = useScrollAnimation({ threshold: 0.1 })
  const mistakesAnimation = useScrollAnimation({ threshold: 0.1 })
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">GROWTH GUIDE</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Instagram Growth Hacks That Actually Work in <span className="text-blue-400">2024</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Proven strategies to grow your Instagram following <span className="text-white font-semibold">organically and sustainably</span>
            </p>

            <BlogMetrics publishDate="2024-02-01" readTime="12 min" />
          </div>
        </div>
      </section>

      {/* What's Changed in 2024 */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">What's Changed in 2024</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <div className="text-white font-semibold">Stories → Notes</div>
              <div className="text-gray-400 text-sm">Notes get 3x engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎬</div>
              <div className="text-white font-semibold">Reels Saturation</div>
              <div className="text-gray-400 text-sm">Quality beats quantity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <div className="text-white font-semibold">AI Detection</div>
              <div className="text-gray-400 text-sm">Authenticity wins</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="text-white font-semibold">DM Strategy</div>
              <div className="text-gray-400 text-sm">Private engagement up 85%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Instagram has evolved dramatically in 2024. The old "post and pray" strategies are dead. After growing to <span className="text-white font-semibold">500K+ followers</span> and analyzing what's working NOW, here are the only growth hacks that actually move the needle.
            </p>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">🚨 The Algorithm Update You Must Know</h2>
              <p className="text-gray-300">
                Instagram's 2024 algorithm prioritizes <span className="text-white font-semibold">"meaningful interactions"</span> over vanity metrics. Comments matter 12x more than likes. Shares matter 6x more than comments. DMs are the new gold standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 10 Growth Hacks */}
      <section 
        ref={strategiesAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${strategiesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">10 Growth Hacks That Actually Work in 2024</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The 3-2-1 Content Strategy</h3>
                  <p className="text-gray-400 mb-3">Post 3 value posts, 2 personal stories, 1 direct CTA per week. This ratio maximizes engagement while building trust.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Result:</span> 47% higher engagement rate than random posting</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The Notes Goldmine</h3>
                  <p className="text-gray-400 mb-3">Instagram Notes (the status updates) get 3x more engagement than stories. Post controversial opinions or questions daily.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Example:</span> "Hot take: Carousels &gt; Reels in 2024" got 500+ DMs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Strategic Story Polls</h3>
                  <p className="text-gray-400 mb-3">Use polls to train the algorithm. People who engage with polls are 5x more likely to see your posts.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Hack:</span> Ask binary questions about your niche to identify super fans</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The DM Close Friends Hack</h3>
                  <p className="text-gray-400 mb-3">Add your most engaged followers to Close Friends. Send exclusive content. They become your growth army.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Result:</span> Close Friends share 8x more than regular followers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Posts 2.0</h3>
                  <p className="text-gray-400 mb-3">Partner with accounts 50% your size. You tap into their engaged audience without looking desperate.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Sweet spot:</span> 3-5 collaborations per month</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The Comment Pod Evolution</h3>
                  <p className="text-gray-400 mb-3">Create topic-specific engagement groups. 10 niche accounts &gt; 100 random accounts.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Rule:</span> Meaningful 7+ word comments only</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">7</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">SEO Your Instagram</h3>
                  <p className="text-gray-400 mb-3">Instagram is a search engine now. Optimize your name field, bio, and alt text with keywords.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Format:</span> Name | What You Do | Main Keyword</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">8</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The 60-Second Rule</h3>
                  <p className="text-gray-400 mb-3">Respond to every comment within 60 seconds of posting. This signals high engagement to the algorithm.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Impact:</span> 3x more reach in first 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">9</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Broadcast Channels &gt; Everything</h3>
                  <p className="text-gray-400 mb-3">Start a broadcast channel. It's Instagram's push notification system. Direct access to your audience.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Conversion:</span> 25% of followers join channels</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">10</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">The Human Touch Strategy</h3>
                  <p className="text-gray-400 mb-3">Voice message 10 new followers daily. Personal connection = lifetime fans.</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <p className="text-sm text-gray-300"><span className="text-blue-400 font-semibold">Script:</span> "Hey [name], saw you followed - what content helps you most?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section 
        ref={mistakesAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${mistakesAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">5 Growth Killers to Avoid in 2024</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <div className="text-2xl mb-3">❌</div>
              <h3 className="text-white font-semibold mb-2">Buying Followers/Engagement</h3>
              <p className="text-gray-400">Instagram's AI detection is insane now. One fake follower purchase = shadowban.</p>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <div className="text-2xl mb-3">❌</div>
              <h3 className="text-white font-semibold mb-2">Follow/Unfollow Strategy</h3>
              <p className="text-gray-400">Dead since 2022. Now it triggers spam detection and limits your reach.</p>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <div className="text-2xl mb-3">❌</div>
              <h3 className="text-white font-semibold mb-2">Generic Hashtags</h3>
              <p className="text-gray-400">#love #instagood = invisible. Use specific 10K-100K hashtags only.</p>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <div className="text-2xl mb-3">❌</div>
              <h3 className="text-white font-semibold mb-2">Posting Without Strategy</h3>
              <p className="text-gray-400">Random content confuses the algorithm. Stick to 2-3 content pillars max.</p>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 md:col-span-2">
              <div className="text-2xl mb-3">❌</div>
              <h3 className="text-white font-semibold mb-2">Ignoring Your Analytics</h3>
              <p className="text-gray-400">Not checking Insights weekly = flying blind. Data tells you exactly what works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Master Instagram Growth?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get the complete Instagram growth system with proven templates, strategies, and community support.
          </p>
          
          <Link
            href="/instagram-ignited"
            className="cta-button inline-flex items-center gap-3"
          >
            Join Instagram Ignited
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}