'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function ComfyUIWorkflowLibrary() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const workflowsAnimation = useScrollAnimation({ threshold: 0.1 })
  const setupAnimation = useScrollAnimation({ threshold: 0.1 })
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
              <span className="text-purple-400 text-sm font-semibold">WORKFLOWS</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              50 ComfyUI Workflows That <span className="text-purple-400">Print Money</span> for Content Creators
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Copy-paste ready workflows for <span className="text-white font-semibold">AI art, video, animation, and automation</span>
            </p>

            <BlogMetrics publishDate="2024-02-11" readTime="16 min" />
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Workflow Categories</h2>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center bg-zinc-900 rounded-xl p-4">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="text-white font-semibold">Art Generation</h3>
                <p className="text-gray-400 text-sm">15 workflows</p>
              </div>
              <div className="text-center bg-zinc-900 rounded-xl p-4">
                <div className="text-3xl mb-2">🎬</div>
                <h3 className="text-white font-semibold">Video Creation</h3>
                <p className="text-gray-400 text-sm">10 workflows</p>
              </div>
              <div className="text-center bg-zinc-900 rounded-xl p-4">
                <div className="text-3xl mb-2">🌟</div>
                <h3 className="text-white font-semibold">Animation</h3>
                <p className="text-gray-400 text-sm">8 workflows</p>
              </div>
              <div className="text-center bg-zinc-900 rounded-xl p-4">
                <div className="text-3xl mb-2">🏭</div>
                <h3 className="text-white font-semibold">Batch Processing</h3>
                <p className="text-gray-400 text-sm">12 workflows</p>
              </div>
              <div className="text-center bg-zinc-900 rounded-xl p-4">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-white font-semibold">Advanced</h3>
                <p className="text-gray-400 text-sm">5 workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Generation Workflows */}
      <section 
        ref={workflowsAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${workflowsAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🎨 Art Generation Workflows</h2>
          
          <div className="space-y-6">
            {/* Workflow 1 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. Instagram Story Generator</h3>
                  <p className="text-gray-400">Create consistent branded stories at scale</p>
                </div>
                <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm">Beginner</span>
              </div>
              
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">What it does:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Generates 1080x1920 story templates</li>
                  <li>• Maintains brand colors and style</li>
                  <li>• Adds text overlays automatically</li>
                  <li>• Exports in batch (30 stories in 5 minutes)</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="text-purple-400">Nodes: 12</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-400">Models: SDXL + ControlNet</span>
                <span className="text-gray-400">|</span>
                <span className="text-green-400">Revenue: $500-2K/mo</span>
              </div>
            </div>

            {/* Workflow 2 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. Product Mockup Automation</h3>
                  <p className="text-gray-400">Turn designs into realistic product shots</p>
                </div>
                <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm">Intermediate</span>
              </div>
              
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Features:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• T-shirt, mug, poster mockups</li>
                  <li>• Realistic lighting and shadows</li>
                  <li>• Multiple angles per product</li>
                  <li>• Background removal/replacement</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="text-purple-400">Nodes: 18</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-400">Models: SDXL + IP-Adapter</span>
                <span className="text-gray-400">|</span>
                <span className="text-green-400">Revenue: $2-5K/mo</span>
              </div>
            </div>

            {/* Workflow 3 */}
            <div className="bg-zinc-900 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">3. AI Influencer Face Consistency</h3>
                  <p className="text-gray-400">Keep your AI influencer's face perfect across 1000s of images</p>
                </div>
                <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-sm">Advanced</span>
              </div>
              
              <div className="bg-zinc-800 rounded-lg p-4 mb-4">
                <h4 className="text-white font-semibold mb-2">Advanced features:</h4>
                <ul className="space-y-1 text-sm text-gray-300">
                  <li>• Face locking with multiple LoRAs</li>
                  <li>• Expression control (happy, sad, surprised)</li>
                  <li>• Outfit changes with same face</li>
                  <li>• Age progression capabilities</li>
                </ul>
              </div>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="text-purple-400">Nodes: 35</span>
                <span className="text-gray-400">|</span>
                <span className="text-blue-400">Models: Custom LoRA + FaceID</span>
                <span className="text-gray-400">|</span>
                <span className="text-green-400">Revenue: $10K+/mo</span>
              </div>
            </div>

            {/* More Art Workflows */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4">
                <h4 className="text-lg font-bold text-white mb-2">4. Thumbnail A/B Testing Suite</h4>
                <p className="text-gray-400 text-sm">Generate 20 thumbnail variations in different styles</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <h4 className="text-lg font-bold text-white mb-2">5. Logo to 3D Converter</h4>
                <p className="text-gray-400 text-sm">Turn flat logos into 3D animations</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <h4 className="text-lg font-bold text-white mb-2">6. Style Transfer Pipeline</h4>
                <p className="text-gray-400 text-sm">Apply any art style to your photos</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4">
                <h4 className="text-lg font-bold text-white mb-2">7. Background Removal Pro</h4>
                <p className="text-gray-400 text-sm">Perfect cutouts for any image type</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Creation Workflows */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🎬 Video Creation Workflows</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">8. Text-to-Video Generator</h3>
              <p className="text-gray-400 mb-3">Turn scripts into engaging videos</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• AnimateDiff integration</p>
                <p>• Smooth transitions</p>
                <p>• Music sync capabilities</p>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">9. Green Screen Compositor</h3>
              <p className="text-gray-400 mb-3">Professional compositing without After Effects</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Automatic keying</p>
                <p>• Shadow generation</p>
                <p>• Color matching</p>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">10. Talking Head Animator</h3>
              <p className="text-gray-400 mb-3">Make AI influencers speak any text</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Lip sync accuracy</p>
                <p>• Emotion control</p>
                <p>• Multi-language support</p>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">11. Music Visualizer</h3>
              <p className="text-gray-400 mb-3">Create Spotify Canvas-style visuals</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Beat detection</p>
                <p>• Particle effects</p>
                <p>• Genre-specific styles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Workflows */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🌟 Animation Workflows</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">12. Character Turnaround Generator</h3>
              <p className="text-gray-300 mb-3">Create consistent character views for animation</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-white/5 rounded p-2 text-center text-sm">Front View</div>
                <div className="bg-white/5 rounded p-2 text-center text-sm">Side View</div>
                <div className="bg-white/5 rounded p-2 text-center text-sm">Back View</div>
                <div className="bg-white/5 rounded p-2 text-center text-sm">3/4 View</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">13. Motion Graphics Templates</h3>
              <p className="text-gray-300 mb-3">Lower thirds, transitions, and overlays</p>
              <p className="text-sm text-gray-400">Perfect for YouTube intros and social media</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">14. Stop Motion Simulator</h3>
              <p className="text-gray-300 mb-3">Create stop-motion style from regular video</p>
              <p className="text-sm text-gray-400">Trending on TikTok and Instagram Reels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Batch Processing */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8">🏭 Batch Processing Workflows</h2>
          
          <div className="bg-zinc-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-6">The Money-Making Workflows</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-bold text-white">15. 1000 Product Variations Generator</h4>
                <p className="text-gray-400">Color, pattern, and style variations for POD businesses</p>
                <p className="text-sm text-green-400 mt-1">Used by sellers making $50K+/month</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-bold text-white">16. Social Media Content Calendar</h4>
                <p className="text-gray-400">30 days of content in 30 minutes</p>
                <p className="text-sm text-green-400 mt-1">Save 20+ hours per month</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-bold text-white">17. NFT Collection Builder</h4>
                <p className="text-gray-400">10,000 unique pieces with metadata</p>
                <p className="text-sm text-green-400 mt-1">Complete with rarity system</p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="text-lg font-bold text-white">18. Course Thumbnail Suite</h4>
                <p className="text-gray-400">Consistent branding across all lessons</p>
                <p className="text-sm text-green-400 mt-1">Increases course completion by 40%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section 
        ref={setupAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${setupAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How to Use These Workflows</h2>
          
          <div className="bg-zinc-900 rounded-xl p-8">
            <ol className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Install ComfyUI</h4>
                  <p className="text-gray-400">One-click installer or manual setup (takes 10 minutes)</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Download Workflow Pack</h4>
                  <p className="text-gray-400">Get all 50 workflows + required models list</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Import & Customize</h4>
                  <p className="text-gray-400">Drag JSON file into ComfyUI, adjust for your needs</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <h4 className="text-white font-semibold mb-2">Generate & Profit</h4>
                  <p className="text-gray-400">Start creating content that converts</p>
                </div>
              </li>
            </ol>
            
            <div className="mt-6 p-4 bg-zinc-800 rounded">
              <p className="text-sm text-gray-300">
                <span className="text-purple-400 font-semibold">Pro tip:</span> Start with workflows 1, 2, and 15 for fastest ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Workflows Preview */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">🚀 Advanced Workflows (Game Changers)</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">46. Real-Time Style Transfer</h3>
              <p className="text-gray-300">Live video processing for streaming</p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">47. AI Music Video Generator</h3>
              <p className="text-gray-300">Sync visuals to any audio track automatically</p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">48. Virtual Try-On System</h3>
              <p className="text-gray-300">Let customers see products on themselves</p>
            </div>
            
            <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">49. Deep Dream Enhancement</h3>
              <p className="text-gray-300">Psychedelic effects that go viral</p>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">50. The Ultimate Pipeline</h3>
              <p className="text-gray-300">Combines 10 workflows into one mega-system</p>
            </div>
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
            Get All 50 ComfyUI Workflows
          </h2>
          
          <p className="text-xl text-gray-400 mb-8">
            Plus video tutorials, model recommendations, and lifetime updates
          </p>
          
          <Link
            href="/ai-accelerator"
            className="cta-button inline-flex items-center gap-3"
          >
            Get The Workflow Library
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}