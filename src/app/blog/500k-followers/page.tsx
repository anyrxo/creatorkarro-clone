import '../blog.css'

export default function BlogPost() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">GROWTH GUIDE</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">From 0 to</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                500K Followers
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              The complete Instagram blueprint that took me from zero to <span className="text-white font-semibold">half a million followers</span> and $15K/month
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
                <span>2.1K views</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Jan 15, 2024</span>
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500K</div>
              <div className="text-gray-400">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10 Months</div>
              <div className="text-gray-400">Timeline</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">8.5%</div>
              <div className="text-gray-400">Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$15K+</div>
              <div className="text-gray-400">Monthly</div>
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
              When I started on Instagram 10 months ago, I had zero followers and zero clue about what I was doing. Today, I have over 500,000 engaged followers and a thriving business. Here's exactly how I did it and what you can learn from my journey.
            </p>
          </div>

          {/* Foundation Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The Foundation: Getting Crystal Clear on Your Niche
            </h2>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6">
                The biggest mistake I see creators make is trying to appeal to everyone. I spent my first month posting random content:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🏋️</div>
                  <div className="text-gray-400">Workout videos</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🍔</div>
                  <div className="text-gray-400">Food pics</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">💭</div>
                  <div className="text-gray-400">Random quotes</div>
                </div>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-6">
                <p className="text-gray-300">
                  <span className="text-red-400 font-semibold">Result:</span> My engagement was terrible because my audience had no idea what to expect from me.
                </p>
              </div>
              
              <p className="text-gray-300 mb-6">
                Everything changed when I narrowed down to one specific niche:
              </p>
              
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
                <h3 className="text-white font-semibold text-xl mb-4">Instagram growth strategies for entrepreneurs</h3>
                <p className="text-gray-300 mb-4">This laser focus allowed me to:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Create content that solved specific problems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Build a community of like-minded individuals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Position myself as an expert in one area</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Attract brand partnerships relevant to my audience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 80/20 Rule Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The 80/20 Rule That Changed Everything
            </h2>
            
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <p className="text-gray-300 mb-8">Instead of posting daily random content, I implemented the 80/20 rule:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl font-bold text-blue-400">80%</div>
                    <h3 className="text-white font-semibold text-lg">Value Content</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Educational carousels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Actionable tips</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Behind-the-scenes insights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Case studies</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl font-bold text-purple-400">20%</div>
                    <h3 className="text-white font-semibold text-lg">Personal Content</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">My story</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Struggles & wins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Personality posts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <span className="text-gray-300">Life updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Strategies */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Growth Strategies That Actually Worked
            </h2>
            
            <div className="space-y-8">
              {/* Strategy 1 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">The Carousel Strategy</h3>
                    <p className="text-gray-300 mb-6">Carousels consistently got 3-5x more engagement than single images. My template:</p>
                    
                    <div className="bg-gray-800/50 rounded-xl p-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="text-blue-400 font-semibold">Slide 1:</div>
                          <span className="text-gray-300">Eye-catching hook + promise</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-purple-400 font-semibold">Slides 2-8:</div>
                          <span className="text-gray-300">Step-by-step value</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-pink-400 font-semibold">Slide 9:</div>
                          <span className="text-gray-300">Summary + call-to-action</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-green-400 font-semibold">Slide 10:</div>
                          <span className="text-gray-300">Follow for more + tag friends</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategy 2 */}
              <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Strategic Hashtag Research</h3>
                    <p className="text-gray-300 mb-6">I stopped using random hashtags and started researching:</p>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-2">5</div>
                        <div className="text-white font-semibold mb-1">Large Hashtags</div>
                        <div className="text-gray-400 text-sm">500K+ posts for reach</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-2">15</div>
                        <div className="text-white font-semibold mb-1">Medium Hashtags</div>
                        <div className="text-gray-400 text-sm">100K-500K for engagement</div>
                      </div>
                      <div className="bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-pink-400 mb-2">10</div>
                        <div className="text-white font-semibold mb-1">Small Hashtags</div>
                        <div className="text-gray-400 text-sm">Under 100K for community</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monetization Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Monetization: From Followers to Revenue
            </h2>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <p className="text-gray-300 mb-8">At 50K followers, I started monetizing through:</p>
              
              <div className="space-y-8">
                {/* Digital Products */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-green-400">💰</span>
                    Digital Products ($8K/month)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">Instagram Growth Course</div>
                      <div className="text-3xl font-bold text-green-400">$197</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">Content Templates Pack</div>
                      <div className="text-3xl font-bold text-blue-400">$47</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">1-on-1 Strategy Calls</div>
                      <div className="text-3xl font-bold text-purple-400">$297</div>
                    </div>
                  </div>
                </div>
                
                {/* Brand Partnerships */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-400">🤝</span>
                    Brand Partnerships ($5K/month)
                  </h3>
                  <p className="text-gray-300 mb-4">I reached out to brands that aligned with my audience using this template:</p>
                  
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
                    <p className="text-gray-300 italic">
                      "Hi [Brand], I love your [specific product]. My audience of 50K entrepreneurs would be interested in [specific benefit]. Here are my rates and recent campaign results..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              The Results: 10 Months of Growth
            </h2>
            
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-white font-semibold text-xl mb-6">Growth Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Followers</span>
                      <span className="text-white font-bold">0 → 500K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Engagement Rate</span>
                      <span className="text-white font-bold">8.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Email List</span>
                      <span className="text-white font-bold">25K subscribers</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Monthly Revenue</span>
                      <span className="text-white font-bold">$15K+</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white font-semibold text-xl mb-6">Key Milestones</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <div>
                        <div className="text-white font-medium">Month 2</div>
                        <div className="text-gray-400 text-sm">First viral post (50K likes)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div>
                        <div className="text-white font-medium">Month 4</div>
                        <div className="text-gray-400 text-sm">Hit 100K followers</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <div>
                        <div className="text-white font-medium">Month 6</div>
                        <div className="text-gray-400 text-sm">First $10K month</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                      <div>
                        <div className="text-white font-medium">Month 10</div>
                        <div className="text-gray-400 text-sm">500K followers milestone</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Plan */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Your Action Plan: Start Today
            </h2>
            
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
              <p className="text-gray-300 mb-8">If you're serious about Instagram growth, here's your week 1 action plan:</p>
              
              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Day 1: Define Your Niche</h3>
                      <p className="text-gray-300">Choose your specific audience and what problems you'll solve for them</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Day 2: Research 30 Hashtags</h3>
                      <p className="text-gray-300">Find hashtags in your niche with various sizes</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Day 3: Create Content Pillars</h3>
                      <p className="text-gray-300">Define 3-4 topics you'll consistently cover</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Day 4: Design Your First Carousel</h3>
                      <p className="text-gray-300">Create a 10-slide educational post</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Day 5: Set Up Email Capture</h3>
                      <p className="text-gray-300">Create a link in bio with email opt-in</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Thoughts */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
              <svg className="w-12 h-12 text-purple-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-xl text-gray-300 mb-6 italic">
                Growing on Instagram isn't easy, but with the right strategy and consistent effort, you can achieve incredible results. The opportunities are massive if you approach it systematically.
              </p>
              
              <p className="text-gray-400">
                Remember: Success doesn't happen overnight, but it does happen with the right system.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get The Creator Playbook
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Join <span className="text-white font-semibold">10,000+ creators</span> getting actionable strategies delivered weekly.
          </p>
          
          <a
            href="https://anyro.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
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