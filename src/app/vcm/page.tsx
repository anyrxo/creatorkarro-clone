'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function VCMPage() {
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
              Master N8N AI Automations And Build Your Content Empire on Autopilot
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Automate your entire content workflow with N8N - no coding required
            </p>

            <p className="text-sm text-yellow-400 mb-8">The price is increasing very soon.</p>

            <Link href="#packages" className="cta-button inline-block text-lg mb-8 btn-animate animate-glow hover-lift">
              Claim Your Spot NOW!
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
                <span className="text-sm text-gray-400">2,000+ reviews</span>
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
            <p className="text-xl text-gray-400 mt-4">See if you can relate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-gray-400">
                Automate your content creation, scheduling, and distribution across all platforms with N8N.
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Digital Entrepreneurs</h3>
              <p className="text-gray-400">
                Build automated systems that run your business 24/7 without constant manual work.
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Agency Owners</h3>
              <p className="text-gray-400">
                Scale your agency with automated workflows that handle repetitive tasks for clients.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to automate like this?</h2>
            <p className="text-xl text-gray-400">Real automation results from N8N workflows:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/3662667715.jpeg"
                alt="Carousel Result 1"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/1676737570.jpeg"
                alt="Carousel Result 2"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/1070547540.jpeg"
                alt="Carousel Result 3"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Start automating your business today</h3>
            <p className="text-xl text-gray-400 mb-8">Join N8N AI Automations and build workflows that save hours every day.</p>
            <Link href="#packages" className="cta-button inline-block btn-animate animate-glow hover-lift">
              I'm Ready To Enroll
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
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">MODULAR</p>
            <h2 className="text-4xl md:text-5xl font-bold">What to expect</h2>
            <p className="text-xl text-gray-400 mt-4">Everything you need in one place.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">N8N Core Training<br />(Total Value: $997)</h3>
              <p className="text-gray-400">
                Complete N8N mastery from basics to advanced automation workflows.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">100+ N8N Workflows<br />(Total Value: $1,497)</h3>
              <p className="text-gray-400">
                Pre-built workflows for social media, email marketing, data processing, and business automation.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">AI Integration Mastery<br />(Total Value: $797)</h3>
              <p className="text-gray-400">
                Connect ChatGPT, Claude, and other AI tools to automate content creation and customer service.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Business Process Automation<br />(Total Value: $1,197)</h3>
              <p className="text-gray-400">
                Automate lead generation, customer onboarding, invoicing, and project management workflows.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Advanced Scaling Techniques<br />(Total Value: $897)</h3>
              <p className="text-gray-400">
                Error handling, webhook management, and enterprise-level automation for growing businesses.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Custom Workflow Builder<br />(Total Value: $697)</h3>
              <p className="text-gray-400">
                Learn to build custom automations for any business need, from simple tasks to complex systems.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${expectAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Total Value: $3,482<br />Today Only: $47</h3>
            <Link href="#packages" className="cta-button inline-block mb-4 btn-animate animate-glow hover-lift">
              Enroll TODAY
            </Link>
            <p className="text-sm text-gray-400">And claim all the bonuses</p>
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
            <h2 className="text-4xl md:text-5xl font-bold">Purchase for life</h2>
            <p className="text-xl text-gray-400 mt-4">Join Now And Get Full Lifetime Access</p>
          </div>

          <div className="max-w-md mx-auto">
            <div className={`bg-zinc-900 border border-zinc-700 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              <div className="mb-8">
                <p className="text-gray-400 mb-2">Full Lifetime Access.</p>
                <p className="text-gray-400 mb-4">One time payment.</p>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-gray-400 line-through text-lg">$297</span>
                  <span className="text-green-400 font-bold">Save $250!</span>
                </div>
                <div className="text-5xl font-bold mb-2">$47</div>
                <p className="text-gray-400">USD</p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <p className="text-gray-300">✓ Full lifetime access to <span className="text-purple-400">N8N AI Automations</span> course.</p>
                <p className="text-gray-300">✓ 100+ pre-built <span className="text-blue-300">automation workflows</span> for every business need.</p>
                <p className="text-gray-300">✓ Complete N8N mastery from <span className="text-green-300">beginner to advanced</span> level.</p>
                <p className="text-gray-300">✓ <span className="text-yellow-300">AI integration tutorials</span> for ChatGPT, Claude, and more.</p>
                <p className="text-gray-300">✓ Business process automation for <span className="text-pink-300">lead generation</span> and customer management.</p>
                <p className="text-gray-300">✓ Bonus: Private community access with <span className="text-blue-300">1-on-1 support</span> from Anyro.</p>
                <p className="text-gray-300">✓ Bonus: Advanced scaling techniques for <span className="text-green-300">enterprise-level</span> automation.</p>
              </div>

              <Link href="#" className="cta-button inline-block w-full text-center mb-4 btn-animate animate-glow hover-lift">
                Purchase
              </Link>
              <p className="text-sm text-gray-400">Price will go up as more modules are added.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Fast-track your <span className="text-purple-400">automation</span> with a proven system
            </h2>
            <p className="text-xl text-gray-400 mb-8">Master <span className="text-blue-300">N8N AI workflows</span> that automate your entire business—without the technical complexity or learning curve.</p>
            <Link href="#packages" className="cta-button inline-block text-lg btn-animate animate-glow hover-lift">
              Yes, I want to join TODAY!
            </Link>
            <p className="text-sm text-gray-400 mt-4">And claim all the bonuses</p>
          </div>
        </div>
      </section>
    </div>
  )
}
