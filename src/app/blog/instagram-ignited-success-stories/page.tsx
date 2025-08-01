import '../blog.css'

export default function InstagramIgnitedSuccessStories() {
  return (
    <>
      <style jsx global>{`
        /* Remove all CSS variable dependencies */
        .blog-text-fix,
        .blog-text-fix * {
          --foreground: white !important;
          --text-foreground: white !important;
          color: rgb(255, 255, 255) !important;
          opacity: 1 !important;
          visibility: visible !important;
          -webkit-text-fill-color: unset !important;
          text-fill-color: unset !important;
        }
        
        .blog-text-fix p,
        .blog-text-fix .text-gray-300,
        .blog-text-fix .text-gray-400,
        .blog-text-fix .text-gray-500 {
          color: rgb(209, 213, 219) !important;
          -webkit-text-fill-color: unset !important;
        }
        
        .blog-text-fix h1,
        .blog-text-fix h2,
        .blog-text-fix h3,
        .blog-text-fix h4,
        .blog-text-fix .text-white {
          color: rgb(255, 255, 255) !important;
          -webkit-text-fill-color: unset !important;
        }
        
        .blog-text-fix .text-blue-400 {
          color: rgb(96, 165, 250) !important;
          -webkit-text-fill-color: unset !important;
        }
        
        .blog-text-fix .text-purple-400 {
          color: rgb(196, 181, 253) !important;
          -webkit-text-fill-color: unset !important;
        }
        
        .blog-text-fix .text-pink-400 {
          color: rgb(244, 114, 182) !important;
          -webkit-text-fill-color: unset !important;
        }
        
        .blog-text-fix .text-green-400 {
          color: rgb(74, 222, 128) !important;
          -webkit-text-fill-color: unset !important;
        }
        
        /* Override any gradient text */
        .blog-text-fix [class*="bg-clip-text"] {
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
        }
        
        /* Force visibility on all elements */
        .blog-text-fix div,
        .blog-text-fix span,
        .blog-text-fix strong,
        .blog-text-fix em,
        .blog-text-fix li {
          color: inherit !important;
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
      <div className="min-h-screen blog-content blog-text-fix" style={{ backgroundColor: '#0f0f0f' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-600/20"></div>
        <div className="relative pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-sm font-semibold">SUCCESS STORY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">From 800 to</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                125K Followers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              How Marcus Rivera used <span className="text-white font-semibold">Instagram Ignited</span> to build a $15K/month business in just 8 months
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>1.8K views</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Jan 8, 2024</span>
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">125K</div>
              <div className="text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">8 Months</div>
              <div className="text-gray-400">Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$15K/mo</div>
              <div className="text-gray-400">Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">12%</div>
              <div className="text-gray-400">Engagement</div>
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
              When Marcus Rivera joined <span className="text-white font-semibold">Instagram Ignited</span>, he had just 800 followers and was struggling to get his content seen. Today, he's sitting at 125K engaged followers, making $15K/month through sponsored posts and digital products. Here's his complete transformation story.
            </p>
          </div>

          {/* Starting Point Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The Starting Point: Struggling Content Creator
            </h2>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6">
                Marcus joined Instagram Ignited feeling overwhelmed by the platform. Like many creators, he was:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Posting Inconsistently</h3>
                    <p className="text-gray-400 text-sm">Random posting times with no strategy</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Flat Engagement</h3>
                    <p className="text-gray-400 text-sm">Averaging just 15-30 likes per post</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">No Clear Strategy</h3>
                    <p className="text-gray-400 text-sm">Posting random content without focus</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Ready to Give Up</h3>
                    <p className="text-gray-400 text-sm">Frustrated and losing motivation</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-900/50 rounded-xl">
                <p className="text-gray-300 italic">
                  "I was ready to give up on Instagram. I'd watch other creators blow up overnight while I couldn't even break 50 likes on my posts. That's when I found <span className="text-white font-semibold">Anyro's Instagram Ignited</span> program."
                </p>
                <p className="text-purple-400 mt-4 font-semibold">- Marcus Rivera</p>
              </div>
            </div>
          </div>

          {/* Month-by-Month Transformation */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              The 8-Month Transformation Journey
            </h2>
            
            <div className="space-y-8">
              {/* Month 1 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    M1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Foundation & Niche Clarity</h3>
                    <p className="text-gray-300 mb-6">The first breakthrough came when Marcus used the <span className="text-white font-semibold">Niche OS</span> module:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="text-purple-400 font-semibold mb-1">Specific Audience</div>
                        <div className="text-gray-400 text-sm">Young entrepreneurs building side hustles</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="text-pink-400 font-semibold mb-1">Content Pillars</div>
                        <div className="text-gray-400 text-sm">Productivity, routines, success mindsets</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="text-blue-400 font-semibold mb-1">Visual Style</div>
                        <div className="text-gray-400 text-sm">Clean carousels with bold typography</div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <div className="text-green-400 font-semibold mb-1">Posting Schedule</div>
                        <div className="text-gray-400 text-sm">5 posts/week using proven timing</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Month 1 Results:</span>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">800 → 2,100 followers</div>
                          <div className="text-blue-400 text-sm">Engagement: 2% → 8%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Months 2-3 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    M2-3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Content Mastery & Viral Breakthroughs</h3>
                    <p className="text-gray-300 mb-6">Marcus's real transformation began when he implemented the <span className="text-white font-semibold">Instagram OS framework</span>:</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">Viral Carousel Templates:</span>
                          <span className="text-gray-400"> Used proven designs that hit 10K+ likes</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">Hook Psychology:</span>
                          <span className="text-gray-400"> Applied emotional triggers that stop scrolling</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">Storytelling Framework:</span>
                          <span className="text-gray-400"> Learned 5-slide story structure for connection</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                        <div>
                          <span className="text-white font-semibold">Algorithm Optimization:</span>
                          <span className="text-gray-400"> Posted at peak times with engagement-driving captions</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-4 border border-purple-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Months 2-3 Results:</span>
                        <div className="text-right">
                          <div className="text-purple-400 font-bold">2,100 → 25,000 followers</div>
                          <div className="text-blue-400 text-sm">First viral post: 45K likes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Months 4-8 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                    M4-8
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Scaling to 6-Figure Revenue</h3>
                    <p className="text-gray-300 mb-6">With 25K engaged followers, Marcus was ready to implement monetization strategies:</p>
                    
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 mb-6">
                      <h4 className="text-white font-semibold mb-4">Revenue Streams That Changed Everything</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">Digital Course Sales</div>
                            <div className="text-gray-400 text-sm">"Productivity Systems for Entrepreneurs"</div>
                          </div>
                          <div className="text-green-400 font-bold">$8K/mo</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">Brand Partnerships</div>
                            <div className="text-gray-400 text-sm">Sponsored posts with productivity brands</div>
                          </div>
                          <div className="text-blue-400 font-bold">$4K/mo</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">Affiliate Commissions</div>
                            <div className="text-gray-400 text-sm">Promoting tools he genuinely used</div>
                          </div>
                          <div className="text-purple-400 font-bold">$2K/mo</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">Coaching Services</div>
                            <div className="text-gray-400 text-sm">One-on-one productivity coaching</div>
                          </div>
                          <div className="text-pink-400 font-bold">$1K/mo</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Final Results:</span>
                        <div className="text-right">
                          <div className="text-green-400 font-bold">25K → 125K followers</div>
                          <div className="text-blue-400 text-sm">Total Revenue: $15K/month</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Viral Strategies Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The Exact Strategies That Generated 100K+ Views
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                <div className="text-3xl mb-4">📖</div>
                <h3 className="text-white font-semibold mb-3">The 5-Slide Success Story</h3>
                <p className="text-gray-400 text-sm mb-4">Personal transformation posts that got 50K+ likes</p>
                <div className="text-purple-400 font-semibold">Avg. Engagement: 15.2%</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                <div className="text-3xl mb-4">🎬</div>
                <h3 className="text-white font-semibold mb-3">Behind-the-Scenes Content</h3>
                <p className="text-gray-400 text-sm mb-4">Daily routine posts that built connections</p>
                <div className="text-blue-400 font-semibold">Avg. Saves: 2.3K per post</div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-xl p-6 border border-pink-500/20">
                <div className="text-3xl mb-4">🔥</div>
                <h3 className="text-white font-semibold mb-3">Controversial Takes</h3>
                <p className="text-gray-400 text-sm mb-4">Opinions that sparked debate and discussion</p>
                <div className="text-pink-400 font-semibold">Avg. Comments: 500+</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-white font-semibold mb-3">Tutorial Carousels</h3>
                <p className="text-gray-400 text-sm mb-4">Step-by-step guides with immediate value</p>
                <div className="text-green-400 font-semibold">Avg. Shares: 1.8K</div>
              </div>
            </div>
          </div>

          {/* Why Instagram Ignited Works */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Why Instagram Ignited Worked When Other Courses Failed
            </h2>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <p className="text-gray-300 mb-8">
                Instagram Ignited by Anyro isn't just another Instagram course. It's a comprehensive system built on proven strategies that have generated over 100 million views:
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Instagram OS Framework</h3>
                    <p className="text-gray-400">A complete operating system for understanding and leveraging the Instagram algorithm</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Viral Carousel Templates</h3>
                    <p className="text-gray-400">Done-for-you templates that consistently generate high engagement</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Monetization Strategies</h3>
                    <p className="text-gray-400">Step-by-step guidance on turning followers into paying customers</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Live Community Support</h3>
                    <p className="text-gray-400">Weekly mastermind calls with Anyro and other successful creators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Key Takeaways for Your Instagram Growth
            </h2>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <p className="text-gray-300 mb-8">Marcus's success wasn't overnight, but it was systematic. Here are the key lessons:</p>
              
              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Niche Focus</h3>
                      <p className="text-gray-300">Pick one specific audience and serve them deeply</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">📅</div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Consistency</h3>
                      <p className="text-gray-300">Post regularly and engage authentically</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">💎</div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Value First</h3>
                      <p className="text-gray-300">Always lead with value before asking for anything</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">⚙️</div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">System Over Hustle</h3>
                      <p className="text-gray-300">Follow proven frameworks rather than random tactics</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🤝</div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Community Building</h3>
                      <p className="text-gray-300">Focus on building relationships, not just followers</p>
                    </div>
                  </div>
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
                "The Instagram Ignited program gave me a clear roadmap. Instead of guessing what might work, I had a proven system to follow. The results speak for themselves."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <div className="text-white font-semibold">Marcus Rivera</div>
                  <div className="text-gray-400">Instagram Ignited Success Story</div>
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
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Transform Your Instagram?
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Join <span className="text-white font-semibold">10,000+ creators</span> getting proven Instagram growth strategies delivered weekly.
          </p>
          
          <a
            href="https://anyro.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-lg font-bold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Join Free Newsletter
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
      </div>
    </>
  )
}