'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function InstagramIgnitedPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const expectAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.2 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })
  const testimonials = [
    {
      name: "Jake Chen",
      role: "Digital Entrepreneur",
      avatar: "https://ext.same-assets.com/1161517358/1430260149.webp",
      content: "The Digital Products course is pure gold! I launched my first info product and hit $10K in sales within 3 weeks. Anyro's pricing psychology and launch strategies are game-changing. I've now built a sustainable $25K/month business selling educational content!"
    },
    {
      name: "Michael Torres",
      role: "Course Creator",
      avatar: "https://ext.same-assets.com/1161517358/527605891.webp",
      content: "I was struggling to monetize my expertise until I found Digital Products by Anyro. The framework helped me create and launch 3 profitable courses. I went from $0 to $18K/month in 5 months. The product validation methods saved me months of work!"
    },
    {
      name: "Emma Rodriguez",
      role: "Online Coach",
      avatar: "https://ext.same-assets.com/1161517358/366375215.webp",
      content: "Digital Products transformed how I think about online business! I created my coaching program using Anyro's frameworks and launched to $12K in the first month. The pricing strategies and sales psychology insights are incredible!"
    }
  ]

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
              Your Complete <span className="text-blue-400">System</span> to
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"> Grow an Audience</span> and Turn It Into
              <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent"> Income</span>
            </h1>

            <p className="text-xl text-gray-400 mb-8">
              Now includes <span className="text-blue-300">Digital Product Academy</span> and <span className="text-blue-300">Viral Carousels Mastery</span> in one bundle.
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
              <h3 className="text-2xl font-bold mb-4">Total Beginners</h3>
              <p className="text-gray-400">
                People who've never made a dollar online and want a bulletproof way to start earning consistently.
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-gray-400">
                Someone who's grown an audience but struggles to monetize it consistently and earn enough.
              </p>
            </div>
            <div className={`testimonial-card text-center card-hover hover-lift scroll-fade-up ${whoForAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Online Educators</h3>
              <p className="text-gray-400">
                People with expertise who want to help others but don't know how to turn it into consistent online income.
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to see results like this?</h2>
            <p className="text-xl text-gray-400">Some of the results I've achieved with digital products:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/1504420078.png"
                alt="Digital Product Result 1"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/3271701469.png"
                alt="Digital Product Result 2"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            <div className={`bg-zinc-900 rounded-lg overflow-hidden card-hover hover-lift scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <Image
                src="https://ext.same-assets.com/1161517358/2562102632.png"
                alt="Digital Product Result 3"
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Start selling your <span className="text-green-400">digital products</span> today</h3>
            <p className="text-xl text-gray-400 mb-8">Join <span className="text-green-300">Digital Product Academy</span> and start earning with digital products today.</p>
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
              <h3 className="text-2xl font-bold mb-4">Digital Product Mastery<br />(Total Value: $997)</h3>
              <p className="text-gray-400">
                Complete system for creating eBooks, courses, guides, templates, and methods that sell.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4"><span className="text-green-400">Niche Research</span> Vault<br />(Total Value: $597)</h3>
              <p className="text-gray-400">
                Find profitable niches with tools and strategies that identify high-demand, low-competition markets.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4"><span className="text-green-400">Content Creation</span> Engine<br />(Total Value: $797)</h3>
              <p className="text-gray-400">
                Templates and systems to create professional guides, workbooks, and courses in days, not months.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-2xl font-bold mb-4"><span className="text-green-400">Sales Page</span> Secrets<br />(Total Value: $697)</h3>
              <p className="text-gray-400">
                High-converting sales page templates and copywriting formulas that turn visitors into buyers.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-2xl font-bold mb-4"><span className="text-green-400">Launch Strategy</span> System<br />(Total Value: $497)</h3>
              <p className="text-gray-400">
                Step-by-step product launch sequences that generate buzz and maximize first-week sales.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${expectAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-2xl font-bold mb-4"><span className="text-green-400">Scaling & Automation</span><br />(Total Value: $997)</h3>
              <p className="text-gray-400">
                Systems to automate sales, create product funnels, and scale to multiple income streams.
              </p>
            </div>
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${expectAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Unlock my $500K digital product system</h3>
            <p className="text-xl text-gray-400 mb-8">Join now to access proven strategies for building your digital product empire.</p>
            <Link href="#packages" className="cta-button inline-block mb-4 btn-animate animate-glow hover-lift">
              Claim Your Spot Now!
            </Link>
            <p className="text-sm text-gray-400">And claim all the bonuses</p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={bonusAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">BONUS</p>
            <h2 className="text-4xl md:text-5xl font-bold">Comes with lifetime access.</h2>
            <p className="text-xl text-gray-400 mt-4">Join now and get all these bonuses included.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Bonus 1: Product Mockups<br />(Total Value: $297)</h3>
              <p className="text-gray-400">
                Get ready-made digital product mockups that boost your sales and save you time.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Bonus 2: Launch Bundle<br />(Total Value: $497)</h3>
              <p className="text-gray-400">
                Get a launch checklist plus 5 digital products to resell from day one.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Bonus 3: Community Access<br />(Total Value: $997)</h3>
              <p className="text-gray-400">
                Access lifetime membership to IImagined community and support.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Bonus 4: Email Case Study<br />(Total Value: $597)</h3>
              <p className="text-gray-400">
                Get an in-depth email case study showing how one promo earned $5K in just 2 days.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Bonus 5: Live Q&As<br />(Total Value: $597)</h3>
              <p className="text-gray-400">
                Get access to weekly live Q&A calls to ask questions, get feedback, and stay on track.
              </p>
            </div>
            <div className={`testimonial-card card-hover hover-lift scroll-fade-up ${bonusAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <h3 className="text-2xl font-bold mb-4">Bonus 6: Algorithm Hacks<br />(Total Value: $897)</h3>
              <p className="text-gray-400">
                Learn 7 ways to beat Instagram's algorithm and grow your reach.
              </p>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Total Value: $8,464<br />Today Only: $197</h3>
            <Link href="#packages" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Enroll TODAY
            </Link>
            <p className="text-sm text-gray-400 mt-4">And claim all the bonuses</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-spacing bg-zinc-900/30" id="packages">
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
                  <span className="text-gray-400 line-through text-lg">$495.95</span>
                  <span className="text-green-400 font-bold">Save $299!</span>
                </div>
                <div className="text-5xl font-bold mb-2">$197</div>
                <p className="text-gray-400">USD</p>
              </div>

              <div className="space-y-4 text-left mb-8">
                <p className="text-gray-300">✓ Full lifetime access to the Digital Product Academy.</p>
                <p className="text-gray-300">✓ Learn how to pick your perfect digital product niche.</p>
                <p className="text-gray-300">✓ Grow your audience fast with my organic content strategy.</p>
                <p className="text-gray-300">✓ Discover how to create a digital product that sells like wildfire.</p>
                <p className="text-gray-300">✓ Bonus: 5+ hours training on launching & selling digital products without ads.</p>
                <p className="text-gray-300">✓ Bonus: Sales video that made $300K with full script included.</p>
                <p className="text-gray-300">✓ Bonus: Launch checklist + 5 resellable digital products.</p>
                <p className="text-gray-300">✓ Bonus: My $20K launch strategy with sales pages & marketing.</p>
                <p className="text-gray-300">✓ Bonus: Email promo that earned $5K in 2 days (live case).</p>
                <p className="text-gray-300">✓ Bonus: Lifetime access to IImagined community.</p>
              </div>

              <Link href="#" className="cta-button inline-block w-full text-center mb-4 btn-animate animate-glow hover-lift">
                Purchase
              </Link>
              <p className="text-sm text-gray-400">Price will go up as more modules are added.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={testimonialsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">RESULTS</p>
            <h2 className="text-4xl md:text-5xl font-bold">Real People, Real Results</h2>
            <p className="text-xl text-gray-400 mt-4">I don't brag, but my students do...</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-card card-hover hover-lift scroll-fade-up ${testimonialsAnimation.isVisible ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}>
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">Become my next success story</h3>
            <p className="text-xl text-gray-400 mb-8">Join Digital Product Academy and start earning with digital products today.</p>
            <Link href="#packages" className="cta-button inline-block btn-animate animate-glow hover-lift">
              I'm Ready To Enroll
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Fast-track your results with a proven system</h2>
            <p className="text-xl text-gray-400 mb-8">Learn how to create, launch, and sell digital products successfully—without wasting time or money.</p>
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
