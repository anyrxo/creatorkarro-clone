'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ComfyUIWorkflowsPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const expectAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.2 })
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master <span className="text-orange-400">ComfyUI & AI Workflows</span> To Create <span className="text-orange-400">Stunning Content</span> in Minutes
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Build professional <span className="text-orange-300">AI image generation workflows</span> that save hours and deliver consistent results
            </p>

            <p className="text-sm text-yellow-400 mb-8">Early bird pricing - Save 60% today</p>

            <Link href="#packages" className="cta-button inline-block text-lg mb-8 btn-animate animate-glow hover-lift">
              Master ComfyUI Today
            </Link>

            {/* Reviews */}
            <div className="flex items-center justify-center">
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
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">300+ creators mastering AI workflows</span>
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

      {/* What to Expect Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={expectAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${expectAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">CURRICULUM</p>
            <h2 className="text-4xl md:text-5xl font-bold">Master every aspect of ComfyUI</h2>
            <p className="text-xl text-gray-400 mt-4">From basics to advanced workflows</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4"><span className="text-orange-400">Next-Gen AI</span> Models<br />(Total Value: $997)</h3>
              <p className="text-gray-400">
                Master Flux, HunyuanDiT, WAN, SDXL and cutting-edge models for photorealistic generation.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4"><span className="text-orange-400">Video Generation</span> Mastery<br />(Total Value: $1,497)</h3>
              <p className="text-gray-400">
                AI videos, image-to-video, video-to-video transformations using AnimateDiff and SVD workflows.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4"><span className="text-orange-400">LoRA Training</span> Suite<br />(Total Value: $797)</h3>
              <p className="text-gray-400">
                Train custom LoRAs for consistent characters, styles, and concepts - complete training pipeline.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Advanced Image Processing<br />(Total Value: $697)</h3>
              <p className="text-gray-400">
                Image-to-image workflows, upscaling, face restoration, and professional editing techniques.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">FramePack System<br />(Total Value: $1,297)</h3>
              <p className="text-gray-400">
                My personal workflow collection for consistent character generation across all scenarios.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Production Workflows<br />(Total Value: $897)</h3>
              <p className="text-gray-400">
                Batch processing, automation scripts, and commercial-grade workflows for high-volume content.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${expectAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Plus 50+ done-for-you workflows</h3>
            <Link href="#packages" className="cta-button inline-block mb-4 btn-animate animate-glow hover-lift">
              Get Full Access
            </Link>
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
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">PRICING</p>
            <h2 className="text-4xl md:text-5xl font-bold">Master ComfyUI today</h2>
            <p className="text-xl text-gray-400 mt-4">One payment, lifetime access to everything</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className={`bg-zinc-900 border border-zinc-700 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              <div className="mb-8">
                <p className="text-gray-400 mb-2">Complete ComfyUI Mastery</p>
                <p className="text-gray-400 mb-4">All workflows + Future updates</p>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-gray-400 line-through text-lg">$497</span>
                  <span className="text-green-400 font-bold">Save $300!</span>
                </div>
                <div className="text-5xl font-bold mb-2">$197</div>
                <p className="text-gray-400">USD</p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <p className="text-gray-300">✓ Complete ComfyUI video course (8+ hours)</p>
                <p className="text-gray-300">✓ 50+ ready-to-use workflow templates</p>
                <p className="text-gray-300">✓ Advanced ControlNet techniques</p>
                <p className="text-gray-300">✓ Animation and video workflows</p>
                <p className="text-gray-300">✓ Custom model training guide</p>
                <p className="text-gray-300">✓ Private Discord community</p>
                <p className="text-gray-300">✓ Weekly workflow workshops</p>
                <p className="text-gray-300">✓ Lifetime updates included</p>
              </div>

              <Link href="#" className="cta-button inline-block w-full text-center mb-4 btn-animate animate-glow hover-lift">
                Get Instant Access
              </Link>
              <p className="text-sm text-gray-400">Join 300+ workflow masters</p>
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
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaAnimation.elementRef}
            className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stop struggling with AI tools</h2>
            <p className="text-xl text-gray-400 mb-8">Master ComfyUI and create professional AI content that stands out from the crowd</p>
            <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift">
              Start Your Journey
            </Link>
            <p className="text-sm text-gray-400 mt-4">30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  )
}