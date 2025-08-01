'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ComfyUIWorkflowsPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const solutionAnimation = useScrollAnimation({ threshold: 0.1 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const curriculumAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const valueAnimation = useScrollAnimation({ threshold: 0.1 })
  const comparisonAnimation = useScrollAnimation({ threshold: 0.1 })
  const expectAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.2 })
  const urgencyAnimation = useScrollAnimation({ threshold: 0.1 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
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
            <div className="bg-zinc-900 border border-green-600/30 rounded-lg p-3 mb-6 inline-block card-hover">
              <p className="text-green-300 font-semibold">🎯 EARLY BIRD SPECIAL: Professional ComfyUI mastery at an unbeatable price</p>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Stop Wasting Hours on <span className="text-red-400">Inconsistent AI Results</span> - Master <span className="text-orange-400">ComfyUI Workflows</span> That Actually Work
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Transform from frustrated AI user to <span className="text-orange-300">workflow master</span> - Create professional content 10x faster with bulletproof systems that deliver <span className="text-green-400">consistent, stunning results</span> every single time
            </p>

            <div className="bg-zinc-900 border border-blue-600/30 rounded-lg p-4 mb-8 inline-block card-hover">
              <p className="text-blue-300 font-semibold">🏆 COMPLETE SYSTEM: 50+ workflows + lifetime updates included</p>
            </div>

            <Link href="#packages" className="cta-button inline-block text-lg mb-8 btn-animate animate-glow hover-lift">
              Lock In Early Bird Price →
            </Link>

            {/* Social Proof */}
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/3820475784.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/3495288803.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/2908592891.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">847+ creators earning $5-15K/month with ComfyUI</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
              <div className="bg-zinc-900/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-green-400">10x</p>
                <p className="text-xs text-gray-400">Faster Creation</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-blue-400">95%</p>
                <p className="text-xs text-gray-400">Time Saved</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-purple-400">$12K</p>
                <p className="text-xs text-gray-400">Avg Monthly Revenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={problemAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-red-400 uppercase tracking-wider mb-4">THE PROBLEM</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Are You Tired of <span className="text-red-400">Wasting Time</span> on AI Tools That Don't Work?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">If you're struggling with inconsistent AI results and spending hours getting nowhere, you're not alone. Here's what's really holding you back...</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">😤</div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Midjourney Frustration</h3>
              <p className="text-gray-400 mb-4">
                Spending hours tweaking prompts, getting random results, and never being able to recreate what worked. Basic tools giving you basic results while competitors are creating mind-blowing content.
              </p>
              <div className="bg-red-800/30 rounded-lg p-3">
                <p className="text-red-200 text-sm font-semibold">"I waste 4+ hours daily on prompts that don't work"</p>
              </div>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">🎲</div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Inconsistent Results</h3>
              <p className="text-gray-400 mb-4">
                One day you get amazing results, the next day the same prompt produces garbage. No control over style, composition, or quality. Clients are getting frustrated with the unpredictability.
              </p>
              <div className="bg-red-800/30 rounded-lg p-3">
                <p className="text-red-200 text-sm font-semibold">"I can't deliver consistent quality to my clients"</p>
              </div>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Time Hemorrhaging</h3>
              <p className="text-gray-400 mb-4">
                Manual processes eating up your entire day. Spending more time fighting with AI tools than actually creating. Missing deadlines because the tools won't cooperate when you need them most.
              </p>
              <div className="bg-red-800/30 rounded-lg p-3">
                <p className="text-red-200 text-sm font-semibold">"I'm working 12-hour days for mediocre results"</p>
              </div>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">💸</div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Lost Opportunities</h3>
              <p className="text-gray-400 mb-4">
                Watching competitors land high-paying clients while you struggle with basic AI outputs. Missing out on lucrative projects because your AI skills aren't professional-level.
              </p>
              <div className="bg-red-800/30 rounded-lg p-3">
                <p className="text-red-200 text-sm font-semibold">"I lost a $15K project because my AI work wasn't good enough"</p>
              </div>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">🤯</div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Technical Overwhelm</h3>
              <p className="text-gray-400 mb-4">
                Advanced AI tools seem impossible to learn. Complex interfaces, technical jargon, and steep learning curves. You know these tools could transform your business but don't know where to start.
              </p>
              <div className="bg-red-800/30 rounded-lg p-3">
                <p className="text-red-200 text-sm font-semibold">"ComfyUI looks powerful but it's too complicated"</p>
              </div>
            </div>

            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="text-red-400 text-3xl mb-4">😩</div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Falling Behind</h3>
              <p className="text-gray-400 mb-4">
                Your competition is using advanced AI workflows while you're stuck with basic tools. Clients are expecting more sophisticated results and you can't deliver. The gap is widening every day.
              </p>
              <div className="bg-red-800/30 rounded-lg p-3">
                <p className="text-red-200 text-sm font-semibold">"Everyone else seems to have figured this out except me"</p>
              </div>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-red-600/50 rounded-lg p-8 max-w-4xl mx-auto card-hover">
              <h3 className="text-3xl font-bold mb-4 text-red-300">The Brutal Truth</h3>
              <p className="text-xl text-gray-300 mb-6">
                While you're struggling with basic AI tools, your competitors are using professional ComfyUI workflows to create stunning content in minutes, charge premium prices, and land high-value clients.
              </p>
              <p className="text-lg text-red-200 font-semibold">Every day you wait is another day they get further ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={solutionAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-green-400 uppercase tracking-wider mb-4">THE SOLUTION</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Finally, A <span className="text-green-400">Systematic Approach</span> To Master ComfyUI</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Stop wasting time with trial and error. Get the exact workflows, techniques, and systems that professionals use to create consistent, stunning AI content.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
            <div className={`scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-3xl font-bold mb-6 text-green-400">What Makes This Different</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Battle-Tested Workflows</h4>
                    <p className="text-gray-400">50+ professional workflows that have generated millions in client revenue. No theory - just systems that work.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Copy & Paste Systems</h4>
                    <p className="text-gray-400">Download, import, and start creating professional content immediately. No complex setup or technical knowledge required.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Consistent Results</h4>
                    <p className="text-gray-400">Never get random outputs again. These workflows deliver predictable, professional results every single time.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">10x Faster Creation</h4>
                    <p className="text-gray-400">What used to take hours now takes minutes. Automate 95% of your AI content creation process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`scroll-fade-up ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="bg-zinc-900 border border-green-600/30 rounded-lg p-8">
                <h4 className="text-2xl font-bold mb-6 text-green-300">Transformation Timeline</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <p className="font-semibold">Day 1: Install & Setup</p>
                      <p className="text-gray-400 text-sm">Get ComfyUI running with professional workflows</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">7</div>
                    <div>
                      <p className="font-semibold">Week 1: First Results</p>
                      <p className="text-gray-400 text-sm">Creating consistent, professional AI content</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">30</div>
                    <div>
                      <p className="font-semibold">Month 1: Master Level</p>
                      <p className="text-gray-400 text-sm">Advanced workflows, custom models, client-ready</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">90</div>
                    <div>
                      <p className="font-semibold">Month 3: Revenue Growth</p>
                      <p className="text-gray-400 text-sm">$5-15K monthly from AI services</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-green-600/30">
                  <p className="text-green-300 font-semibold text-center">"From struggling beginner to ComfyUI master in 90 days"</p>
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
            <p className="text-xl text-gray-400 mt-4">Perfect for creators ready to level up their AI game</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-gray-400">
                Want to create professional AI content without the technical overwhelm
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">AI Artists</h3>
              <p className="text-gray-400">
                Ready to go beyond basic prompts and create complex, consistent artwork
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Digital Agencies</h3>
              <p className="text-gray-400">
                Need to deliver high-quality AI content at scale for clients
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What students achieve with ComfyUI</h2>
            <p className="text-xl text-gray-400">Real results from our workflow masters</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">10x</h3>
              <p className="text-gray-400">Faster content creation</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-3xl font-bold text-green-400 mb-2">$5-10K</h3>
              <p className="text-gray-400">Monthly from AI services</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">50+</h3>
              <p className="text-gray-400">Ready-to-use workflows</p>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Create professional <span className="text-orange-400">AI content</span> effortlessly</h3>
            <p className="text-xl text-gray-400 mb-8">Join creators who've mastered the most powerful <span className="text-orange-300">AI image tool</span> available</p>
            <Link href="#packages" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Start Creating Now
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Curriculum Section */}
      <section className="section-spacing bg-purple-900/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={curriculumAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-purple-400 uppercase tracking-wider mb-4">COMPLETE CURRICULUM</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">8 Modules. 50+ Workflows. <span className="text-purple-400">Everything You Need</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">This isn't just another course - it's the complete ComfyUI mastery system used by professionals earning $10K+ monthly</p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Module 1 */}
            <div className={`bg-purple-900/20 border border-purple-600/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">Module 1: ComfyUI Foundations</h3>
                  <p className="text-purple-400 font-semibold">Value: $97</p>
                </div>
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Essential
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-200">What You'll Master:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Complete ComfyUI installation & setup (Windows/Mac/Linux)</li>
                    <li>• Node-based workflow fundamentals</li>
                    <li>• Essential nodes and connections</li>
                    <li>• Model management and optimization</li>
                    <li>• Troubleshooting common issues</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-200">Included Workflows:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Basic text-to-image workflow</li>
                    <li>• Model loading and switching</li>
                    <li>• Output optimization setup</li>
                    <li>• Batch processing basics</li>
                    <li>• Quality control workflow</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 2 */}
            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300 mb-2">Module 2: Advanced Node Systems</h3>
                  <p className="text-blue-400 font-semibold">Value: $127</p>
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Advanced
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-200">What You'll Master:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Complex node combinations and logic</li>
                    <li>• ControlNet integration mastery</li>
                    <li>• Custom node installation and management</li>
                    <li>• Workflow optimization techniques</li>
                    <li>• Advanced sampling methods</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-200">Included Workflows:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Multi-ControlNet workflow</li>
                    <li>• Pose and depth control</li>
                    <li>• Style transfer system</li>
                    <li>• Advanced inpainting</li>
                    <li>• Composition control workflow</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 3 */}
            <div className={`bg-zinc-900 border border-green-600/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-300 mb-2">Module 3: Custom Model Training</h3>
                  <p className="text-green-400 font-semibold">Value: $147</p>
                </div>
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Professional
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-200">What You'll Master:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• LoRA training from scratch</li>
                    <li>• Dataset preparation and optimization</li>
                    <li>• Training parameter optimization</li>
                    <li>• Model fine-tuning techniques</li>
                    <li>• Custom checkpoint creation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-200">Included Systems:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Complete LoRA training pipeline</li>
                    <li>• Character consistency system</li>
                    <li>• Style LoRA creation</li>
                    <li>• Concept training workflow</li>
                    <li>• Model merging techniques</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Module 4 */}
            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-red-300 mb-2">Module 4: Video Generation Mastery</h3>
                  <p className="text-red-400 font-semibold">Value: $197</p>
                </div>
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Cutting-Edge
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-200">What You'll Master:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• AnimateDiff workflow mastery</li>
                    <li>• Stable Video Diffusion (SVD)</li>
                    <li>• Video-to-video transformations</li>
                    <li>• Motion control and direction</li>
                    <li>• High-quality video upscaling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-200">Included Workflows:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Text-to-video generation</li>
                    <li>• Image-to-video animation</li>
                    <li>• Motion-controlled sequences</li>
                    <li>• Video style transfer</li>
                    <li>• Professional video workflows</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Continue with remaining modules */}
            <div className={`bg-zinc-900 border border-yellow-600/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-2">Module 5: LoRA Training Suite</h3>
                  <p className="text-yellow-400 font-semibold">Value: $147</p>
                </div>
                <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Specialist
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-200">What You'll Master:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Advanced LoRA architectures</li>
                    <li>• Multi-concept training</li>
                    <li>• Training optimization secrets</li>
                    <li>• LoRA merging and blending</li>
                    <li>• Commercial LoRA creation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-200">Included Systems:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Character LoRA system</li>
                    <li>• Style consistency suite</li>
                    <li>• Object/product LoRAs</li>
                    <li>• Clothing/fashion LoRAs</li>
                    <li>• Environment/scene LoRAs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Remaining modules 6-8 */}
            <div className={`bg-indigo-900/20 border border-indigo-600/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-indigo-300 mb-2">Module 6: Production Workflows</h3>
                  <p className="text-indigo-400 font-semibold">Value: $127</p>
                </div>
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Commercial
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-200">What You'll Master:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Batch processing automation</li>
                    <li>• High-volume content creation</li>
                    <li>• Quality control systems</li>
                    <li>• Automated workflows</li>
                    <li>• Production optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-indigo-200">Included Systems:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Mass content generation</li>
                    <li>• Automated quality checks</li>
                    <li>• Batch upscaling system</li>
                    <li>• Production monitoring</li>
                    <li>• Error handling workflows</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`bg-pink-900/20 border border-pink-600/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-7' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-pink-300 mb-2">Module 7: Client Work Systems</h3>
                  <p className="text-pink-400 font-semibold">Value: $97</p>
                </div>
                <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Business
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-pink-200">What You'll Master:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Client consultation frameworks</li>
                    <li>• Project workflow setup</li>
                    <li>• Revision management systems</li>
                    <li>• Quality delivery processes</li>
                    <li>• Client communication tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-pink-200">Included Templates:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Client proposal templates</li>
                    <li>• Project management workflows</li>
                    <li>• Revision tracking systems</li>
                    <li>• Quality assurance checklists</li>
                    <li>• Delivery optimization workflows</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`bg-teal-900/20 border border-teal-600/30 rounded-lg p-8 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible scroll-stagger-8' : ''}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-teal-300 mb-2">Module 8: Automation & Scaling</h3>
                  <p className="text-teal-400 font-semibold">Value: $97</p>
                </div>
                <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Enterprise
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-teal-200">What You'll Master:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• API integration and automation</li>
                    <li>• Scripted workflow execution</li>
                    <li>• Cloud deployment strategies</li>
                    <li>• Scaling production systems</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-teal-200">Included Systems:</h4>
                  <ul className="text-gray-400 space-y-2 text-sm">
                    <li>• Automated content pipelines</li>
                    <li>• Cloud processing workflows</li>
                    <li>• API-driven generation</li>
                    <li>• Scaling optimization scripts</li>
                    <li>• Performance monitoring tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-orange-300">Total Curriculum Value: $1,237</h3>
              <p className="text-xl text-gray-300 mb-6">8 comprehensive modules + 50+ professional workflows + lifetime updates</p>
              <p className="text-lg text-orange-200 font-semibold">Everything you need to become a ComfyUI master and build a 6-figure AI business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="section-spacing bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={bonusAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-purple-400 uppercase tracking-wider mb-4">EXCLUSIVE BONUSES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">But Wait, There's <span className="text-purple-400">More!</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Get these incredible bonuses worth $4,285 - absolutely FREE when you join today</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Bonus 1 */}
            <div className={`bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-purple-400 text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-300">50+ Done-For-You Workflows</h3>
              <p className="text-gray-400 mb-4">
                Professional workflows ready to import and use immediately. Created by industry experts and tested with real clients.
              </p>
              <div className="bg-purple-800/30 rounded-lg p-3">
                <p className="text-purple-200 text-sm font-semibold">Value: $397 - Yours FREE</p>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className={`bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-blue-400 text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-300">Private Discord Community</h3>
              <p className="text-gray-400 mb-4">
                Join 800+ ComfyUI masters sharing workflows, techniques, and supporting each other's success.
              </p>
              <div className="bg-blue-800/30 rounded-lg p-3">
                <p className="text-blue-200 text-sm font-semibold">Value: $197/year - Lifetime Access FREE</p>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className={`bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-green-400 text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">Weekly Workflow Workshops</h3>
              <p className="text-gray-400 mb-4">
                Live workshops every week covering new techniques, trends, and advanced strategies. Recordings included.
              </p>
              <div className="bg-green-800/30 rounded-lg p-3">
                <p className="text-green-200 text-sm font-semibold">Value: $297/year - Included FREE</p>
              </div>
            </div>

            {/* Bonus 4 */}
            <div className={`bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-orange-400 text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-300">Custom Node Pack</h3>
              <p className="text-gray-400 mb-4">
                Exclusive collection of custom nodes developed specifically for our students. Not available anywhere else.
              </p>
              <div className="bg-orange-800/30 rounded-lg p-3">
                <p className="text-orange-200 text-sm font-semibold">Value: $97 - Exclusive FREE</p>
              </div>
            </div>

            {/* Bonus 5 */}
            <div className={`bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="text-pink-400 text-4xl mb-4">📋</div>
              <h3 className="text-2xl font-bold mb-4 text-pink-300">Client Proposal Templates</h3>
              <p className="text-gray-400 mb-4">
                Professional proposal templates, contracts, and pricing guides used to land $10K+ projects.
              </p>
              <div className="bg-pink-800/30 rounded-lg p-3">
                <p className="text-pink-200 text-sm font-semibold">Value: $197 - Included FREE</p>
              </div>
            </div>

            {/* Bonus 6 */}
            <div className={`bg-gradient-to-br from-teal-900/30 to-green-900/30 border border-teal-600/30 rounded-lg p-8 card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="text-teal-400 text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-teal-300">Speed Optimization Pack</h3>
              <p className="text-gray-400 mb-4">
                Advanced techniques to 10x your generation speed and optimize for maximum efficiency.
              </p>
              <div className="bg-teal-800/30 rounded-lg p-3">
                <p className="text-teal-200 text-sm font-semibold">Value: $147 - Yours FREE</p>
              </div>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-600/50 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Total Bonus Value: $1,332</h3>
              <p className="text-xl text-gray-300 mb-6">All included FREE when you join the ComfyUI Workflow Mastery course today</p>
              <p className="text-lg text-purple-200 font-semibold">These bonuses alone are worth 20x more than the course price!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={valueAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${valueAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-yellow-400 uppercase tracking-wider mb-4">VALUE BREAKDOWN</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">You're Getting <span className="text-yellow-400">$2,569</span> Worth of Value</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Here's everything included in your ComfyUI Workflow Mastery package</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-yellow-600/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-8 text-yellow-300 text-center">Complete Value Breakdown</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-yellow-600/20">
                  <span className="text-gray-300">Module 1: ComfyUI Foundations</span>
                  <span className="text-yellow-400 font-semibold">$97</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-yellow-600/20">
                  <span className="text-gray-300">Module 2: Advanced Node Systems</span>
                  <span className="text-yellow-400 font-semibold">$127</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-yellow-600/20">
                  <span className="text-gray-300">Module 3: Custom Model Training</span>
                  <span className="text-yellow-400 font-semibold">$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-yellow-600/20">
                  <span className="text-gray-300">Module 4: Video Generation Mastery</span>
                  <span className="text-yellow-400 font-semibold">$197</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-yellow-600/20">
                  <span className="text-gray-300">Module 5: LoRA Training Suite</span>
                  <span className="text-yellow-400 font-semibold">$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-yellow-600/20">
                  <span className="text-gray-300">Module 6: Production Workflows</span>
                  <span className="text-yellow-400 font-semibold">$127</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-yellow-600/20">
                  <span className="text-gray-300">Module 7: Client Work Systems</span>
                  <span className="text-yellow-400 font-semibold">$97</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-yellow-600/20">
                  <span className="text-gray-300">Module 8: Automation & Scaling</span>
                  <span className="text-yellow-400 font-semibold">$97</span>
                </div>
                
                <div className="py-4">
                  <p className="text-center text-yellow-300 font-semibold text-lg">CORE CURRICULUM SUBTOTAL: $1,237</p>
                </div>
                
                <div className="border-t border-yellow-600/30 pt-4 space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">BONUS: 50+ Done-For-You Workflows</span>
                    <span className="text-green-400 font-semibold">$397</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">BONUS: Private Discord Community (Lifetime)</span>
                    <span className="text-green-400 font-semibold">$197</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">BONUS: Weekly Workflow Workshops</span>
                    <span className="text-green-400 font-semibold">$297</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">BONUS: Custom Node Pack</span>
                    <span className="text-green-400 font-semibold">$97</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">BONUS: Client Proposal Templates</span>
                    <span className="text-green-400 font-semibold">$197</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-300">BONUS: Speed Optimization Pack</span>
                    <span className="text-green-400 font-semibold">$147</span>
                  </div>
                </div>
                
                <div className="border-t border-yellow-600/30 pt-6">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span className="text-yellow-300">TOTAL VALUE:</span>
                    <span className="text-yellow-400">$2,569</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`text-center mt-12 scroll-fade-up ${valueAnimation.isVisible ? 'visible' : ''}`}>
              <div className="bg-zinc-900 border border-green-600/50 rounded-lg p-8">
                <h3 className="text-3xl font-bold mb-4 text-green-300">Your Investment Today</h3>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="text-6xl font-bold text-green-400">$147</span>
                  <div className="text-left">
                    <p className="text-gray-400 line-through">$2,569 value</p>
                    <p className="text-green-300 font-semibold">94% savings</p>
                  </div>
                </div>
                <p className="text-xl text-gray-300 mb-6">One-time payment. Lifetime access. No recurring fees.</p>
                <p className="text-lg text-green-200 font-semibold">Less than the cost of a single freelance project that this course will help you land!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="section-spacing bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={comparisonAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${comparisonAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-orange-400 uppercase tracking-wider mb-4">INVESTMENT COMPARISON</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Compare Your <span className="text-orange-400">Options</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">See how our comprehensive course compares to other ways of learning ComfyUI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* DIY Learning */}
            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 text-center scroll-fade-up ${comparisonAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-red-400 text-4xl mb-4">😰</div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">DIY Learning</h3>
              <div className="text-3xl font-bold text-red-400 mb-4">$5,000+</div>
              <p className="text-gray-400 mb-6">Piecing together free tutorials and courses</p>
              
              <div className="space-y-3 text-left mb-6">
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">2+ years to master</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">Outdated information</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">No professional workflows</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">No support or community</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">Trial and error frustration</span>
                </div>
              </div>
              
              <div className="bg-red-800/30 rounded-lg p-3">
                <p className="text-red-200 text-sm font-semibold">"Slow, frustrating, expensive"</p>
              </div>
            </div>

            {/* Hiring Expert */}
            <div className={`bg-orange-900/30 border border-orange-600/30 rounded-lg p-8 text-center scroll-fade-up ${comparisonAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-orange-400 text-4xl mb-4">💸</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-300">Hiring Expert</h3>
              <div className="text-3xl font-bold text-orange-400 mb-4">$10,000+</div>
              <p className="text-gray-400 mb-6">Per month for professional services</p>
              
              <div className="space-y-3 text-left mb-6">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-400">Professional results</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">Extremely expensive</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">No knowledge transfer</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">Dependent on others</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-400 mr-2">✗</span>
                  <span className="text-gray-400">Ongoing monthly costs</span>
                </div>
              </div>
              
              <div className="bg-orange-800/30 rounded-lg p-3">
                <p className="text-orange-200 text-sm font-semibold">"Effective but unsustainable"</p>
              </div>
            </div>

            {/* Our Course */}
            <div className={`bg-green-900/30 border-2 border-green-500/50 rounded-lg p-8 text-center relative scroll-fade-up ${comparisonAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                BEST CHOICE
              </div>
              <div className="text-green-400 text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">This Course</h3>
              <div className="text-3xl font-bold text-green-400 mb-4">$147</div>
              <p className="text-gray-400 mb-6">One-time investment, lifetime value</p>
              
              <div className="space-y-3 text-left mb-6">
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-400">Master in 30-90 days</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-400">Latest techniques & models</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-400">50+ professional workflows</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-400">Expert support & community</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-gray-400">Systematic, proven approach</span>
                </div>
              </div>
              
              <div className="bg-green-800/30 rounded-lg p-3">
                <p className="text-green-200 text-sm font-semibold">"Fast, comprehensive, affordable"</p>
              </div>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${comparisonAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-green-600/50 rounded-lg p-8 max-w-4xl mx-auto card-hover">
              <h3 className="text-3xl font-bold mb-4 text-green-300">The Math is Simple</h3>
              <p className="text-xl text-gray-300 mb-6">
                Pay once, learn everything, earn forever. Our students typically land their first $2-5K client within 30 days - 
                that's 10-25x return on investment from just one project!
              </p>
              <p className="text-lg text-green-200 font-semibold">Why spend years struggling when you can master ComfyUI in weeks?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing" id="packages">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={pricingAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="bg-zinc-900 border border-red-600/30 rounded-lg p-4 mb-6 inline-block">
              <p className="text-red-300 font-semibold">⚠️ PRICE INCREASES TO $497 IN 48 HOURS - SECURE YOUR SPOT NOW</p>
            </div>
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">EARLY BIRD PRICING</p>
            <h2 className="text-4xl md:text-5xl font-bold">Secure Your <span className="text-orange-400">Early Bird</span> Price</h2>
            <p className="text-xl text-gray-400 mt-4">Only 23 spots left at this exclusive price</p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className={`bg-gradient-to-br from-orange-900/30 to-red-900/30 border-2 border-orange-500/50 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                🔥 EARLY BIRD SPECIAL
              </div>
              
              <div className="mb-8">
                <p className="text-orange-300 font-semibold mb-2">Complete ComfyUI Workflow Mastery</p>
                <p className="text-gray-400 mb-4">8 Modules + 50+ Workflows + $4,285 in Bonuses</p>
                
                <div className="bg-zinc-900 border border-red-600/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <span className="text-gray-400 line-through text-2xl">$11,159</span>
                    <span className="text-red-300 font-bold">Total Value</span>
                  </div>
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <span className="text-gray-400 line-through text-xl">$497</span>
                    <span className="text-red-300 font-bold">Regular Price</span>
                  </div>
                </div>
                
                <div className="text-6xl font-bold mb-2 text-orange-400">$197</div>
                <p className="text-gray-400">One-time payment • Lifetime access</p>
                <p className="text-green-400 font-semibold">Save $300 Today Only!</p>
              </div>

              <div className="bg-orange-900/20 border border-orange-600/30 rounded-lg p-6 mb-8">
                <h4 className="font-bold mb-4 text-orange-300">Everything Included:</h4>
                <div className="space-y-3 text-left text-sm">
                  <p className="text-gray-300">✓ 8 Complete Training Modules (20+ hours)</p>
                  <p className="text-gray-300">✓ 50+ Professional Workflow Templates</p>
                  <p className="text-gray-300">✓ Advanced Video Generation Mastery</p>
                  <p className="text-gray-300">✓ Custom LoRA Training Systems</p>
                  <p className="text-gray-300">✓ Production-Grade Automation Tools</p>
                  <p className="text-gray-300">✓ Client Work & Business Templates</p>
                  <p className="text-gray-300">✓ Private Discord Community (800+ members)</p>
                  <p className="text-gray-300">✓ Weekly Live Workshops & Updates</p>
                  <p className="text-gray-300">✓ Custom Node Pack (Exclusive)</p>
                  <p className="text-gray-300">✓ Speed Optimization Techniques</p>
                  <p className="text-gray-300">✓ Lifetime Updates & New Workflows</p>
                  <p className="text-green-300 font-semibold">✓ 30-Day Money-Back Guarantee</p>
                </div>
              </div>

              <Link href="#" className="cta-button inline-block w-full text-center mb-4 btn-animate animate-glow hover-lift text-lg font-bold">
                🚀 SECURE YOUR EARLY BIRD PRICE →
              </Link>
              
              <div className="space-y-2 text-sm">
                <p className="text-orange-300 font-semibold">⏰ Price increases in 48 hours</p>
                <p className="text-gray-400">Join 847+ creators earning $5-15K monthly</p>
                <p className="text-green-400">✅ Instant access • ✅ No recurring fees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency/Scarcity Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={urgencyAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${urgencyAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-red-400 uppercase tracking-wider mb-4">URGENT - LIMITED TIME</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why You Must <span className="text-red-400">Act Now</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">These bonuses and this price won't last forever. Here's what happens next...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className={`bg-zinc-900 border border-red-600/30 rounded-lg p-8 scroll-fade-up ${urgencyAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-red-400 text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold mb-4 text-red-300">Price Increase Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-red-600/20">
                  <span className="text-gray-300">Current Price (Next 48 hours)</span>
                  <span className="text-green-400 font-bold">$197</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-red-600/20">
                  <span className="text-gray-300">After Early Bird Ends</span>
                  <span className="text-red-400 font-bold">$497</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-red-600/20">
                  <span className="text-gray-300">When Course is Complete</span>
                  <span className="text-red-400 font-bold">$997</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Your Savings Today</span>
                  <span className="text-green-400 font-bold">$800</span>
                </div>
              </div>
            </div>

            <div className={`bg-orange-900/30 border border-orange-600/30 rounded-lg p-8 scroll-fade-up ${urgencyAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-orange-400 text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-4 text-orange-300">Bonuses Disappearing</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-orange-600/20">
                  <span className="text-gray-300">Custom Node Pack</span>
                  <span className="text-orange-400 font-semibold">Ends in 3 days</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-orange-600/20">
                  <span className="text-gray-300">Speed Optimization Pack</span>
                  <span className="text-orange-400 font-semibold">Ends in 5 days</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-orange-600/20">
                  <span className="text-gray-300">Client Proposal Templates</span>
                  <span className="text-orange-400 font-semibold">Ends in 7 days</span>
                </div>
                <div className="bg-orange-800/30 rounded-lg p-3">
                  <p className="text-orange-200 text-sm font-semibold">Act now or lose $1,191 in bonuses</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${urgencyAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-red-600/50 rounded-lg p-8 max-w-4xl mx-auto card-hover">
              <h3 className="text-3xl font-bold mb-4 text-red-300">The Cost of Waiting</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-4xl font-bold text-red-400 mb-2">$300</p>
                  <p className="text-gray-400">Lost savings if you wait 48 hours</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-red-400 mb-2">$1,191</p>
                  <p className="text-gray-400">Lost bonuses if you wait 1 week</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-red-400 mb-2">$15,000</p>
                  <p className="text-gray-400">Potential lost income this year</p>
                </div>
              </div>
              <p className="text-lg text-red-200 font-semibold">Don't let perfectionism cost you thousands. Take action now.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={faqAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-blue-400 uppercase tracking-wider mb-4">FREQUENTLY ASKED QUESTIONS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything You Need to <span className="text-blue-400">Know</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Common questions about the ComfyUI Workflow Mastery course</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">What are the technical requirements?</h3>
              <p className="text-gray-400">
                You'll need a Windows, Mac, or Linux computer with at least 8GB RAM (16GB recommended) and a dedicated graphics card with 4GB+ VRAM. An NVIDIA GPU is strongly recommended for optimal performance. We provide detailed setup guides for all operating systems.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">How quickly will I see results?</h3>
              <p className="text-gray-400">
                Most students create their first professional-quality images within the first week. By month 1, you'll have mastered the fundamentals and be creating client-ready work. By month 3, our students typically earn $5-15K monthly from ComfyUI services. Your results depend on how much time you invest in learning and practicing.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">What support is included?</h3>
              <p className="text-gray-400">
                You get lifetime access to our private Discord community with 800+ members, weekly live workshops, direct access to instructors, and detailed documentation. We also provide troubleshooting guides, installation support, and regular Q&A sessions.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">What skill level is required?</h3>
              <p className="text-gray-400">
                Complete beginners are welcome! We start from absolute basics - installing ComfyUI, understanding nodes, and creating your first workflow. No prior AI or technical experience required. However, advanced users will also benefit from our professional workflows and optimization techniques.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Do you offer a money-back guarantee?</h3>
              <p className="text-gray-400">
                Yes! We offer a 30-day, no-questions-asked money-back guarantee. If you're not completely satisfied with the course content, community, or results, simply email us within 30 days for a full refund. We're confident this course will transform your AI creation abilities.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Will the workflows work with future ComfyUI updates?</h3>
              <p className="text-gray-400">
                Absolutely! We continuously update our workflows to work with the latest ComfyUI versions. You'll receive lifetime updates, new workflows, and compatibility fixes. Our team actively monitors ComfyUI development to ensure your workflows stay current.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-7' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">Can I use these workflows for client work?</h3>
              <p className="text-gray-400">
                Yes! All workflows come with commercial licensing. You can use them for client projects, sell the outputs, and even modify the workflows for your specific business needs. We also include client proposal templates and pricing guides to help you land high-paying projects.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-8' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">How is this different from free YouTube tutorials?</h3>
              <p className="text-gray-400">
                Free tutorials are scattered, often outdated, and lack professional workflows. Our course provides a systematic, step-by-step path from beginner to expert, with battle-tested workflows used to generate millions in client revenue. Plus, you get community support, live workshops, and lifetime updates.
              </p>
            </div>

            <div className={`bg-zinc-900 border border-blue-600/30 rounded-lg p-8 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-9' : ''}`}>
              <h3 className="text-xl font-bold mb-4 text-blue-300">What if I'm already familiar with AI tools like Midjourney?</h3>
              <p className="text-gray-400">
                Perfect! Your existing AI knowledge will help you progress faster. ComfyUI offers far more control and consistency than Midjourney. You'll learn to create repeatable, professional workflows that deliver predictable results - something impossible with prompt-based tools.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-blue-600/50 rounded-lg p-8 max-w-4xl mx-auto card-hover">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Still Have Questions?</h3>
              <p className="text-xl text-gray-300 mb-6">
                Join our Discord community and get answers from 800+ ComfyUI masters, or reach out to our support team directly.
              </p>
              <p className="text-lg text-blue-200 font-semibold">We're here to ensure your success every step of the way.</p>
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
              Real <span className="text-orange-400">ComfyUI</span> Masters
            </h2>
            <p className="text-xl text-gray-400 mt-4">Students creating professional AI content</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className={`testimonial-card card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/2908592891.webp"
                  alt="Ryan Blackwood"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-orange-400 transition-colors duration-300">Ryan Blackwood</h4>
                  <p className="text-sm text-gray-400">Visual Artist</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                "ComfyUI & Workflows turned me into an AI art powerhouse! I can now create stunning visuals in minutes instead of hours. My client work rate increased 500% and I'm charging premium prices for AI-enhanced designs. The workflow templates are incredibly professional!"
              </p>
              <div className="bg-orange-600/10 border border-orange-600/30 rounded-lg p-3 group-hover:bg-orange-600/20 group-hover:border-orange-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors duration-300">500% productivity increase, premium pricing</p>
              </div>
            </div>

            <div className={`testimonial-card card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/1695287196.jpeg"
                  alt="Brendan Williams"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-orange-400 transition-colors duration-300">Brendan Williams</h4>
                  <p className="text-sm text-gray-400">AI Artist</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                "ComfyUI & Workflows opened up endless creative possibilities! I went from basic Midjourney prompts to creating complex, professional AI art workflows. My art business revenue jumped 400% and I'm booked solid with client work. The training is incredibly detailed!"
              </p>
              <div className="bg-orange-600/10 border border-orange-600/30 rounded-lg p-3 group-hover:bg-orange-600/20 group-hover:border-orange-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors duration-300">400% revenue increase, booked solid</p>
              </div>
            </div>

            <div className={`testimonial-card card-hover hover-lift group scroll-fade-up ${ctaAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-center mb-4">
                <Image
                  src="https://ext.same-assets.com/1161517358/366375215.webp"
                  alt="Alex Foster"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-semibold group-hover:text-orange-400 transition-colors duration-300">Alex Foster</h4>
                  <p className="text-sm text-gray-400">Creative Director</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                "The ComfyUI course transformed my entire creative workflow! I was struggling with inconsistent AI outputs until I learned Anyro's systematic approach. Now I'm creating commercial-grade visuals that clients love. My agency landed 3 major contracts thanks to our AI capabilities!"
              </p>
              <div className="bg-orange-600/10 border border-orange-600/30 rounded-lg p-3 group-hover:bg-orange-600/20 group-hover:border-orange-500/50 transition-all duration-300">
                <p className="text-sm font-semibold text-orange-300 group-hover:text-orange-200 transition-colors duration-300">Commercial-grade workflows, 3 major contracts</p>
              </div>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Master ComfyUI like these professionals</h3>
            <p className="text-xl text-gray-400 mb-8">Join creators using AI workflows to transform their businesses</p>
            <Link href="#packages" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Master ComfyUI Today
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-gradient-to-r from-orange-900/30 to-red-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaAnimation.elementRef}
            className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="bg-zinc-900 border border-red-600/30 rounded-lg p-4 mb-8 inline-block">
              <p className="text-red-300 font-semibold">⚠️ FINAL WARNING: Price increases in 48 hours - Don't miss out!</p>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your <span className="text-orange-400">ComfyUI Master</span> Journey<br />Starts <span className="text-red-400">Right Now</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 max-w-4xl mx-auto">
              While others waste months struggling with inconsistent AI results, you'll be creating 
              <span className="text-green-400"> professional content in days</span> and 
              <span className="text-yellow-400"> earning $5-15K monthly within 90 days.</span>
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <div className="bg-zinc-900 border border-green-600/30 rounded-lg p-6">
                <div className="text-green-400 text-3xl mb-2">✅</div>
                <h3 className="font-bold text-green-300 mb-2">Get Started Today</h3>
                <p className="text-gray-400 text-sm">Instant access to all 8 modules + bonuses</p>
              </div>
              <div className="bg-zinc-900 border border-blue-600/30 rounded-lg p-6">
                <div className="text-blue-400 text-3xl mb-2">🚀</div>
                <h3 className="font-bold text-blue-300 mb-2">Master in 30 Days</h3>
                <p className="text-gray-400 text-sm">Create professional workflows that work</p>
              </div>
              <div className="bg-purple-900/30 border border-purple-600/30 rounded-lg p-6">
                <div className="text-purple-400 text-3xl mb-2">💰</div>
                <h3 className="font-bold text-purple-300 mb-2">Earn $5K+ Monthly</h3>
                <p className="text-gray-400 text-sm">Turn skills into profitable AI services</p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <div className="bg-zinc-900 border border-yellow-600/30 rounded-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">Last Chance Savings:</h3>
                <div className="flex items-center justify-center space-x-8 mb-4">
                  <div>
                    <p className="text-gray-400 line-through text-xl">$11,159</p>
                    <p className="text-sm text-gray-400">Total Value</p>
                  </div>
                  <div>
                    <p className="text-gray-400 line-through text-lg">$497</p>
                    <p className="text-sm text-gray-400">Regular Price</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-yellow-400">$197</p>
                    <p className="text-sm text-yellow-300">Early Bird Price</p>
                  </div>
                </div>
                <p className="text-green-400 font-semibold">Save $300 • Only 48 Hours Left</p>
              </div>
            </div>

            <Link href="#packages" className="cta-button inline-block text-xl px-12 py-4 mb-8 btn-animate animate-glow hover-lift">
              🔥 SECURE YOUR EARLY BIRD PRICE NOW →
            </Link>
            
            <div className="space-y-2 mb-8">
              <p className="text-green-400 font-semibold">✅ 30-Day Money-Back Guarantee</p>
              <p className="text-blue-400 font-semibold">✅ Instant Access • No Waiting</p>
              <p className="text-purple-400 font-semibold">✅ Join 847+ Successful Students</p>
            </div>

            <div className="bg-zinc-900 border border-red-600/30 rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-red-300 mb-4">Don't Let This Moment Pass</h3>
              <p className="text-lg text-gray-300 mb-4">
                Six months from now, you'll either be a ComfyUI master earning thousands monthly, 
                or you'll still be struggling with basic AI tools wishing you had taken action today.
              </p>
              <p className="text-xl font-bold text-red-200">The choice is yours. Choose wisely.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}