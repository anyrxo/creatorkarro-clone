'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function AIInfluencersPage() {
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
              Build Your AI Influencer Empire And Make $10K/Month Without Showing Your Face
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              The complete system to create, grow, and monetize AI-powered virtual influencers
            </p>

            <p className="text-sm text-yellow-400 mb-8">Limited time offer - Price increasing soon</p>

            <Link href="#packages" className="cta-button inline-block text-lg mb-8 btn-animate animate-glow hover-lift">
              Start Building Your AI Influencer
            </Link>

            {/* Reviews */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/1620887224.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/447445188.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">500+ students creating AI influencers</span>
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
            <p className="text-xl text-gray-400 mt-4">Perfect for creators who want to scale without limits</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-gray-400">
                Want to scale your content without burning out or showing your face 24/7
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Digital Entrepreneurs</h3>
              <p className="text-gray-400">
                Looking for the next big opportunity in the creator economy
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Tech-Savvy Marketers</h3>
              <p className="text-gray-400">
                Ready to leverage AI for building multiple revenue streams
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What's possible with AI Influencers?</h2>
            <p className="text-xl text-gray-400">Real results from our students' AI influencers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-3xl font-bold text-blue-400 mb-2">127K</h3>
              <p className="text-gray-400">Followers in 3 months</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-3xl font-bold text-green-400 mb-2">$14,500</h3>
              <p className="text-gray-400">Monthly revenue average</p>
            </div>
            <div className={`bg-zinc-900 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-3xl font-bold text-purple-400 mb-2">24/7</h3>
              <p className="text-gray-400">Content creation on autopilot</p>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Create your AI influencer empire</h3>
            <p className="text-xl text-gray-400 mb-8">Join hundreds of creators building faceless brands that generate real income</p>
            <Link href="#packages" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Get Started Today
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
            <h2 className="text-4xl md:text-5xl font-bold">What you'll learn</h2>
            <p className="text-xl text-gray-400 mt-4">Everything you need to build and scale AI influencers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">AI Character Creation<br />(Total Value: $997)</h3>
              <p className="text-gray-400">
                Create photorealistic AI models using Flux, SDXL, and advanced LoRA training for consistent characters.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Fanvue Domination<br />(Total Value: $1,497)</h3>
              <p className="text-gray-400">
                Complete Fanvue strategy: profile optimization, pricing, PPV campaigns, and fan retention systems.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Content Automation Engine<br />(Total Value: $797)</h3>
              <p className="text-gray-400">
                Generate unlimited AI content: photos, videos, custom requests - all automated with ComfyUI workflows.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">100% Profit Margins<br />(Total Value: $697)</h3>
              <p className="text-gray-400">
                No models, no photographers, no agencies. Keep 100% of earnings with zero overhead costs.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Scaling Systems<br />(Total Value: $1,297)</h3>
              <p className="text-gray-400">
                Manage multiple AI influencers, automate conversations, and scale to 6-figure monthly revenue.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Legal & Compliance<br />(Total Value: $497)</h3>
              <p className="text-gray-400">
                Stay compliant with platform rules, tax implications, and legal requirements for AI-generated content.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${expectAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Plus exclusive bonuses worth $2,000+</h3>
            <Link href="#packages" className="cta-button inline-block mb-4 btn-animate animate-glow hover-lift">
              See Everything Included
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
            <h2 className="text-4xl md:text-5xl font-bold">Start your AI influencer journey</h2>
            <p className="text-xl text-gray-400 mt-4">One-time payment, lifetime access</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className={`bg-zinc-900 border border-zinc-700 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              <div className="mb-8">
                <p className="text-gray-400 mb-2">Complete AI Influencer System</p>
                <p className="text-gray-400 mb-4">Lifetime access + Updates</p>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-gray-400 line-through text-lg">$997</span>
                  <span className="text-green-400 font-bold">Save $700!</span>
                </div>
                <div className="text-5xl font-bold mb-2">$297</div>
                <p className="text-gray-400">USD</p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <p className="text-gray-300">✓ Complete AI character creation training</p>
                <p className="text-gray-300">✓ Content automation workflows & templates</p>
                <p className="text-gray-300">✓ Growth hacking strategies that work</p>
                <p className="text-gray-300">✓ Monetization blueprints & case studies</p>
                <p className="text-gray-300">✓ AI tool mastery (Midjourney, SD, more)</p>
                <p className="text-gray-300">✓ Private community access</p>
                <p className="text-gray-300">✓ Weekly live Q&A calls</p>
                <p className="text-gray-300">✓ 30-day money-back guarantee</p>
              </div>

              <Link href="#" className="cta-button inline-block w-full text-center mb-4 btn-animate animate-glow hover-lift">
                Get Instant Access
              </Link>
              <p className="text-sm text-gray-400">Join 500+ students already creating AI influencers</p>
            </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to build your AI influencer empire?</h2>
            <p className="text-xl text-gray-400 mb-8">Join hundreds of creators who are already making $10K+ per month with faceless AI brands</p>
            <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift">
              Start Creating Today
            </Link>
            <p className="text-sm text-gray-400 mt-4">30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  )
}