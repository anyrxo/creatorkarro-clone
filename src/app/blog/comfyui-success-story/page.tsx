'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function ComfyUISuccessStory() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const workflowAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-sm font-semibold">AI TOOLS</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              ComfyUI Mastery: Ryan Blackwood's Journey to <span className="text-purple-400">$10K/Month</span> AI Art Business
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Learn how Ryan increased his client work rate by <span className="text-white font-semibold">500%</span> using AI-enhanced design workflows
            </p>

            <BlogMetrics publishDate="2024-01-16" readTime="13 min" />
          </div>
        </div>
      </section>

      {/* Ryan's Background */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">From Struggling Designer to AI Art Master</h2>
            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-4">Before ComfyUI</h3>
                  <p className="text-gray-300 mb-4">
                    Ryan was a freelance graphic designer struggling to keep up with client demands:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 2-3 days per logo design</li>
                    <li>• $500-800 per project</li>
                    <li>• 4-5 clients per month max</li>
                    <li>• Constant creative burnout</li>
                    <li>• Losing clients to faster competitors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-4">After ComfyUI</h3>
                  <p className="text-gray-300 mb-4">
                    Now he runs a thriving AI-enhanced design studio:
                  </p>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 2-3 hours per complete project</li>
                    <li>• $1,500-3,000 per project</li>
                    <li>• 20+ clients per month</li>
                    <li>• Endless creative possibilities</li>
                    <li>• Waitlist of eager clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8">The Game-Changing Discovery</h2>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              "I was about to quit design completely," Ryan recalls. "Then I discovered ComfyUI through Anyro's course, and everything changed overnight."
            </p>

            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">What Made ComfyUI Different</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">🎨 Visual Workflow</h4>
                  <p className="text-gray-400">Node-based system that designers understand intuitively</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">⚡ Lightning Fast</h4>
                  <p className="text-gray-400">Generate hundreds of variations in minutes</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">🔧 Total Control</h4>
                  <p className="text-gray-400">Fine-tune every aspect of the generation</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">🚀 Professional Quality</h4>
                  <p className="text-gray-400">Client-ready outputs with minimal editing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Workflows */}
      <section 
        ref={workflowAnimation.elementRef}
        className={`section-spacing bg-zinc-900 scroll-fade-up ${workflowAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ryan's Million-Dollar Workflows</h2>
          
          <div className="space-y-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎨</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Logo Generation System</h3>
                  <p className="text-gray-400 mb-4">Creates 50+ logo variations from a single text prompt</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-purple-400 font-semibold">Input:</span>
                        <p className="text-gray-300">Company name + industry + style preferences</p>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">Output:</span>
                        <p className="text-gray-300">50+ unique logos in various styles</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <span className="text-green-400 font-semibold">Time saved:</span>
                      <span className="text-gray-300 ml-2">48 hours → 30 minutes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🖼️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Product Mockup Magic</h3>
                  <p className="text-gray-400 mb-4">Generates photorealistic product mockups in any environment</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-purple-400 font-semibold">Input:</span>
                        <p className="text-gray-300">Product image + environment description</p>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">Output:</span>
                        <p className="text-gray-300">Professional product photography</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <span className="text-green-400 font-semibold">Revenue increase:</span>
                      <span className="text-gray-300 ml-2">+$2,000 per client</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎭</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Brand Character Creator</h3>
                  <p className="text-gray-400 mb-4">Develops consistent brand mascots and characters</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-purple-400 font-semibold">Input:</span>
                        <p className="text-gray-300">Character description + brand guidelines</p>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">Output:</span>
                        <p className="text-gray-300">Complete character in multiple poses</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <span className="text-green-400 font-semibold">Client retention:</span>
                      <span className="text-gray-300 ml-2">95% comeback rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">Social Media Content Factory</h3>
                  <p className="text-gray-400 mb-4">Produces month's worth of content in one session</p>
                  <div className="bg-zinc-900 rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-purple-400 font-semibold">Input:</span>
                        <p className="text-gray-300">Brand style + content calendar</p>
                      </div>
                      <div>
                        <span className="text-purple-400 font-semibold">Output:</span>
                        <p className="text-gray-300">30+ posts with variations</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <span className="text-green-400 font-semibold">New service line:</span>
                      <span className="text-gray-300 ml-2">$3,000/month retainers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section 
        ref={resultsAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Real Client Transformations</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-2xl mb-3">🏪</div>
              <h3 className="text-xl font-bold text-white mb-2">E-commerce Brand</h3>
              <p className="text-gray-400 mb-4">Created entire product catalog imagery</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Traditional cost:</span>
                  <span className="text-gray-300">$15,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Ryan's price:</span>
                  <span className="text-green-400">$3,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Delivery time:</span>
                  <span className="text-purple-400">3 days</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-2xl mb-3">🎮</div>
              <h3 className="text-xl font-bold text-white mb-2">Gaming Startup</h3>
              <p className="text-gray-400 mb-4">Designed complete visual identity</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Deliverables:</span>
                  <span className="text-gray-300">Logo + 20 assets</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Revenue:</span>
                  <span className="text-green-400">$5,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time spent:</span>
                  <span className="text-purple-400">8 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-2xl mb-3">🍔</div>
              <h3 className="text-xl font-bold text-white mb-2">Restaurant Chain</h3>
              <p className="text-gray-400 mb-4">Monthly social media content</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Contract value:</span>
                  <span className="text-gray-300">$36,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Time per month:</span>
                  <span className="text-purple-400">4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Profit margin:</span>
                  <span className="text-green-400">92%</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="text-2xl mb-3">👗</div>
              <h3 className="text-xl font-bold text-white mb-2">Fashion Brand</h3>
              <p className="text-gray-400 mb-4">AI fashion photography</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Photos delivered:</span>
                  <span className="text-gray-300">200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Project fee:</span>
                  <span className="text-green-400">$8,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Repeat orders:</span>
                  <span className="text-purple-400">Quarterly</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ryan's Monthly Revenue</h3>
            <div className="text-5xl font-bold text-purple-400 mb-2">$10,000+</div>
            <p className="text-gray-400 mb-6">Working just 25 hours per week</p>
            <blockquote className="text-xl text-gray-300 italic">
              "ComfyUI didn't just save my business – it transformed it into something I never imagined possible. I'm now an AI-enhanced creative director, not just a designer."
            </blockquote>
            <div className="text-white font-semibold mt-4">- Ryan Blackwood</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaAnimation.elementRef}
        className={`section-spacing bg-gradient-to-b from-zinc-900 to-dark scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Master ComfyUI Like Ryan
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Get instant access to Ryan's exact workflows and strategies
          </p>
          
          <Link
            href="/comfyui-mastery"
            className="cta-button inline-flex items-center gap-3"
          >
            Start ComfyUI Mastery
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}