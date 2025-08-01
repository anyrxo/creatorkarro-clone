import '../blog.css'

export default function WhopClippingGuide() {
  return (
    <div className="min-h-screen blog-content" style={{ backgroundColor: '#0f0f0f' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">MONETIZATION GUIDE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">The Ultimate</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Whop Clipping Strategy
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Turn Twitch streams into a <span className="text-white font-semibold">$10K/month business</span> with this proven system used by 500+ successful clippers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 min read</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>3.2K views</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Jan 22, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$10K+</div>
              <div className="text-gray-400">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">6 Months</div>
              <div className="text-gray-400">To Profitability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">73%</div>
              <div className="text-gray-400">Pitch Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50/50</div>
              <div className="text-gray-400">Revenue Split</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-xl text-gray-300 leading-relaxed">
              I went from zero to <span className="text-white font-semibold">$10,000/month</span> in just 6 months by mastering the art of stream clipping and content repurposing. Today, I'm sharing the exact strategy that transformed my side hustle into a full-time business.
            </p>
          </div>

          {/* Why Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Why Whop Clipping Is The Hidden Gold Mine
            </h2>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6">
                While everyone's chasing viral TikToks, smart creators are quietly banking <span className="text-white font-semibold">$5K-$20K/month</span> by repurposing existing content.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Zero Content Creation</h3>
                    <p className="text-gray-400 text-sm">You're leveraging existing high-quality streams</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Built-in Audience</h3>
                    <p className="text-gray-400 text-sm">Streamers already have engaged communities</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Multiple Revenue Streams</h3>
                    <p className="text-gray-400 text-sm">YouTube ads, sponsorships, affiliate commissions</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Scalable Business Model</h3>
                    <p className="text-gray-400 text-sm">Hire editors and scale to 50+ channels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Step System */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              The 5-Step Whop Clipping System
            </h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Find Your Goldmine Streamers</h3>
                    <p className="text-gray-300 mb-6">Not all streamers are created equal. Here's what to look for:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="text-blue-400 font-semibold mb-1">3K-10K Average Viewers</div>
                        <div className="text-gray-400 text-sm">Big enough for content, small enough to approach</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="text-purple-400 font-semibold mb-1">Personality-Driven Content</div>
                        <div className="text-gray-400 text-sm">Gaming reactions, IRL streams, variety content</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="text-green-400 font-semibold mb-1">No Existing Clips Channel</div>
                        <div className="text-gray-400 text-sm">Untapped opportunity for partnership</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="text-pink-400 font-semibold mb-1">Active Community</div>
                        <div className="text-gray-400 text-sm">High chat engagement = viral clip potential</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">The Perfect Pitch Template</h3>
                    
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20 mb-6">
                      <p className="text-gray-300 italic">
                        "Hey [Streamer], I've been watching your streams and your [specific moment] had me dying 😂 
                        I run a clips channel and would love to help grow your YouTube presence. I handle all editing, 
                        thumbnails, and uploads. You keep 100% of sponsorship revenue, we split YouTube AdSense 50/50. 
                        Here's an example of my work: [link]. Interested?"
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3 text-green-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-semibold">Success Rate: 73% of streamers say yes to this pitch</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">The Viral Clip Formula</h3>
                    <p className="text-gray-300 mb-6">After analyzing 500+ viral clips, here's the formula that consistently gets 100K+ views:</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">Hook (0-3 seconds):</span>
                          <span className="text-gray-400"> Start with the peak moment, not the buildup</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">Context (3-10 seconds):</span>
                          <span className="text-gray-400"> Quick backstory to understand the moment</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">Payoff (10-30 seconds):</span>
                          <span className="text-gray-400"> The funny/epic moment in full</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">Reaction (30-45 seconds):</span>
                          <span className="text-gray-400"> Streamer and chat's response</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">End Screen (45-60 seconds):</span>
                          <span className="text-gray-400"> Subscribe prompt + next video</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Thumbnail Psychology That Converts</h3>
                    <p className="text-gray-300 mb-6">Your thumbnail determines 80% of your video's success:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-3">😱</div>
                        <div className="text-white font-semibold mb-2">Expressive Face</div>
                        <div className="text-gray-400 text-sm">Zoom in on reaction (40% of frame)</div>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-3">🎮</div>
                        <div className="text-white font-semibold mb-2">Context Object</div>
                        <div className="text-gray-400 text-sm">Game or situation (30% of frame)</div>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-3">💬</div>
                        <div className="text-white font-semibold mb-2">Bold Text</div>
                        <div className="text-gray-400 text-sm">3-5 words max, yellow outline</div>
                      </div>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-center">
                        <div className="text-4xl mb-3">🎨</div>
                        <div className="text-white font-semibold mb-2">Contrast Colors</div>
                        <div className="text-gray-400 text-sm">Complementary colors that pop</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-green-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Upload Strategy That Maximizes Revenue</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-white font-semibold">Timing</span>
                        </div>
                        <p className="text-gray-400 text-sm">Upload 2 hours before streamer goes live</p>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                          <span className="text-white font-semibold">Frequency</span>
                        </div>
                        <p className="text-gray-400 text-sm">1-2 clips daily (consistency beats quantity)</p>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          <span className="text-white font-semibold">SEO Title</span>
                        </div>
                        <p className="text-gray-400 text-sm">[Streamer] + [Reaction] + [Context]</p>
                      </div>
                      
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                          </svg>
                          <span className="text-white font-semibold">Tags</span>
                        </div>
                        <p className="text-gray-400 text-sm">Mix streamer, game, and emotion keywords</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Revenue Breakdown: Multiple Income Streams
            </h2>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                  <div>
                    <h3 className="text-white font-semibold mb-1">YouTube AdSense</h3>
                    <p className="text-gray-400 text-sm">Average $4 RPM with gaming content</p>
                  </div>
                  <div className="text-2xl font-bold text-green-400">$2K-5K/mo</div>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Sponsorships</h3>
                    <p className="text-gray-400 text-sm">Gaming peripherals, energy drinks, VPNs</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-400">$3K-8K/mo</div>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Affiliate Marketing</h3>
                    <p className="text-gray-400 text-sm">Streamer's equipment, games, services</p>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">$1K-3K/mo</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-semibold mb-1">Compilation Videos</h3>
                    <p className="text-gray-400 text-sm">Monthly "best of" compilations</p>
                  </div>
                  <div className="text-2xl font-bold text-pink-400">$2K-4K/mo</div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">Total Potential</h3>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      $8K-20K/mo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scaling Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Scaling to $20K/Month: The Agency Model
            </h2>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <p className="text-gray-300 mb-8">Once you've mastered the system with 2-3 channels, it's time to scale:</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Hire Editors ($500-1000/month)</h3>
                    <p className="text-gray-400">Train them on your viral formula and quality standards</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Systemize Everything</h3>
                    <p className="text-gray-400">Create SOPs for clip selection, editing, uploading</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Scale to 10+ Channels</h3>
                    <p className="text-gray-400">Each channel averages $1-2K profit after expenses</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-500 to-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Build Relationships</h3>
                    <p className="text-gray-400">Become the go-to clips agency for streamers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mistakes Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Common Mistakes That Kill Channels
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Clickbait Thumbnails</h3>
                    <p className="text-gray-400 text-sm">Destroys trust and retention</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Poor Audio Quality</h3>
                    <p className="text-gray-400 text-sm">Viewers leave within 10 seconds</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Ignoring Analytics</h3>
                    <p className="text-gray-400 text-sm">Not learning from what works</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Quantity Over Quality</h3>
                    <p className="text-gray-400 text-sm">1 great clip beats 10 mediocre ones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 30-Day Action Plan */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Your 30-Day Action Plan
            </h2>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <p className="text-gray-300 mb-8">Ready to start your Whop clipping empire? Here's your roadmap:</p>
              
              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-2">🗓️ Week 1</h3>
                  <p className="text-gray-300">Research and approach 10 streamers, secure 2-3 partnerships</p>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-2">🎨 Week 2</h3>
                  <p className="text-gray-300">Set up channels, create branding, establish workflow</p>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-2">🚀 Week 3</h3>
                  <p className="text-gray-300">Upload first 20 clips, analyze performance data</p>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-2">📈 Week 4</h3>
                  <p className="text-gray-300">Optimize based on data, scale winning formula</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <svg className="w-12 h-12 text-purple-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-xl text-gray-300 mb-6 italic">
                "I started with zero editing experience and zero connections. Six months later, I'm managing 12 clip channels and clearing $15K/month. The opportunity is massive if you're willing to put in the work."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Alex Chen</div>
                  <div className="text-gray-400">Whop Clipping Pro</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Want More Content Monetization Strategies?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Join <span className="text-white font-semibold">10,000+ creators</span> learning how to turn content into income.
          </p>
          
          <a
            href="https://anyro.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Get Free Strategies
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}