'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

export default function InstagramIgnitedPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const studentResultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const modulesAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const storiesAnimation = useScrollAnimation({ threshold: 0.1 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const finalCtaAnimation = useScrollAnimation({ threshold: 0.2 })

  // For grid items that need staggered animations
  const whoForCards = useScrollAnimations(3, { threshold: 0.1 })
  const moduleCards = useScrollAnimations(9, { threshold: 0.1 })
  const bonusCards = useScrollAnimations(6, { threshold: 0.1 })
  const testimonialCards = useScrollAnimations(9, { threshold: 0.1 })

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Reviews */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/2822588328.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/3376144705.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1 hover:scale-110 transition-transform duration-300"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/2657109700.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex text-yellow-400 animate-float">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">2,000+ reviews</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              Your Complete <span className="text-blue-400">System</span> to <span className="text-blue-400">Grow an Audience</span> and Turn It Into <span className="text-blue-400">Income</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Now includes <span className="text-blue-300">Digital Product Academy</span> and <span className="text-blue-300">Viral Carousels Mastery</span> in one bundle.
            </p>

            {/* YouTube Channel Link instead of embedded video */}
            <div className="bg-zinc-900 rounded-lg p-6 mb-8 max-w-md mx-auto hover-lift">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">Watch My Content</h3>
                  <p className="text-gray-400 text-sm">Free videos on entrepreneurship & content creation</p>
                </div>
              </div>
              <Link
                href="https://www.youtube.com/@anyrxo"
                target="_blank"
                className="cta-button inline-block w-full text-center mt-4"
              >
                Visit YouTube Channel
              </Link>
            </div>

            <p className="text-sm text-yellow-400 mb-4 animate-float">
              The price will increase very soon.
            </p>

            <Link
              href="#pricing"
              className="cta-button inline-block text-lg btn-animate animate-glow hover-lift"
            >
              Claim IImagined 4.0 Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={resultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">RESULTS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              If you're not growing your audience, you'll get left behind...
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Look at what's happened since I committed to growing my audience. Everything I've learned and implemented is packed into this course.
            </p>
          </div>

          <div className={`flex justify-center mb-12 scroll-scale ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <Image
              src="https://ext.same-assets.com/1161517358/3647070516.png"
              alt="Growth Chart"
              width={500}
              height={400}
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Ready to take your brand to the next level?</p>
            <Link href="#pricing" className="cta-button inline-block">
              Claim Full Creator Bundle
            </Link>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whoForAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">IS THIS YOU?</p>
            <h2 className="text-3xl md:text-5xl font-bold">Who is this for?</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-4">See if you can relate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              ref={whoForCards.setElementRef(0)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[0] ? 'visible scroll-stagger-1' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Total Beginners</h3>
              <p className="text-gray-400">
                People who've never made a dollar online and want a bulletproof way to start earning consistently.
              </p>
            </div>
            <div
              ref={whoForCards.setElementRef(1)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[1] ? 'visible scroll-stagger-2' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-gray-400">
                Someone who's grown an audience but struggles to monetize it consistently and earn enough.
              </p>
            </div>
            <div
              ref={whoForCards.setElementRef(2)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[2] ? 'visible scroll-stagger-3' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Small Businesses</h3>
              <p className="text-gray-400">
                Want to grow your business without ads? Learn to use organic content to build your brand and drive sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Results Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={studentResultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">RESULTS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Real People, Real Results</h2>
            <p className="text-lg md:text-xl text-gray-400">I don't brag, but my students do...</p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            {[
              "https://ext.same-assets.com/1161517358/2553333123.png",
              "https://ext.same-assets.com/1161517358/2540924890.png",
              "https://ext.same-assets.com/1161517358/1437365004.png",
              "https://ext.same-assets.com/1161517358/1050234867.png",
              "https://ext.same-assets.com/1161517358/3362327865.png",
              "https://ext.same-assets.com/1161517358/1516888547.png",
              "https://ext.same-assets.com/1161517358/2654192877.png",
              "https://ext.same-assets.com/1161517358/2696442599.png",
              "https://ext.same-assets.com/1161517358/4190764954.png",
              "https://ext.same-assets.com/1161517358/136081273.png",
              "https://ext.same-assets.com/1161517358/1271876621.png",
              "https://ext.same-assets.com/1161517358/1083277758.png",
              "https://ext.same-assets.com/1161517358/4079791797.png",
              "https://ext.same-assets.com/1161517358/854930725.png",
              "https://ext.same-assets.com/1161517358/2133246252.png",
              "https://ext.same-assets.com/1161517358/1498123507.png",
              "https://ext.same-assets.com/1161517358/3909965009.png",
              "https://ext.same-assets.com/1161517358/562722659.png",
              "https://ext.same-assets.com/1161517358/3920519464.png"
            ].map((image, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden hover-lift">
                <Image
                  src={image}
                  alt={`Result ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Become my next success story</h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Join IImagined and turn content creation into a full-time career!</p>
            <Link href="#pricing" className="cta-button inline-block">
              Join IImagined 4.0
            </Link>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={modulesAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">MODULAR</p>
            <h2 className="text-3xl md:text-5xl font-bold">What to expect</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-4">We've split the course into a number of modules.</p>
          </div>

          <div className={`max-w-4xl mx-auto mb-12 scroll-scale ${modulesAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center hover-lift">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">10+ Modules<br />100+ Lessons</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "IImagined 4.0 Core Modules",
                description: "The Only Content Creation Program Based On Continually Tested Strategies & Concepts."
              },
              {
                title: "<span class='text-blue-400'>Instagram</span> OS",
                description: "Master the short-form content framework that drove 100M+ views and earned me over half a million dollars."
              },
              {
                title: "<span class='text-blue-400'>Monetization</span> OS",
                description: "Learn how to scale your personal brand's revenue with advanced strategies and diverse income streams."
              },
              {
                title: "<span class='text-blue-400'>Newsletter</span> OS",
                description: "Learn how I used chatbots and short-form content to grow a 50K+ email list and build your business's most valuable asset."
              },
              {
                title: "<span class='text-blue-400'>Niche</span> OS",
                description: "Stop second-guessing your niche. Learn to choose the perfect one that fits your skills, passion, and long-term success."
              },
              {
                title: "<span class='text-blue-400'>Editing</span> OS",
                description: "Unlock the editing secrets that have driven over 1 billion views on Instagram for both myself and my clients."
              },
              {
                title: "Mindset OS",
                description: "The mindset shifts that helped me grow to 500K+ followers and earn over half a million dollars online."
              },
              {
                title: "Mastermind OS",
                description: "Unlock pre-recorded masterminds and join weekly live sessions to ask any question you want."
              },
              {
                title: "Q&A OS",
                description: "Unlock the pre-recorded FAQ bank and get instant answers to your most common questions within minutes."
              }
            ].map((module, index) => (
              <div
                key={index}
                ref={moduleCards.setElementRef(index)}
                className={`testimonial-card hover-lift scroll-fade-up ${moduleCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <h3 className="text-lg md:text-2xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: module.title }}></h3>
                <p className="text-gray-400">{module.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join & get a personalized page audit.</h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Access all recorded page audits, lessons, and our private community in the evergreen, constantly updated program.
            </p>
            <Link href="#pricing" className="cta-button inline-block">
              Join IImagined 4.0
            </Link>
            <p className="text-sm text-gray-400 mt-4">And claim all the bonuses</p>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={bonusAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">BONUS</p>
            <h2 className="text-3xl md:text-5xl font-bold">Comes with lifetime access.</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-4">Join now and get all these bonuses included.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Digital Product Academy",
                description: "Step-by-step program to launch and scale your digital product business to $5K–$10K/month using organic content."
              },
              {
                title: "Viral Carousels Mastery",
                description: "Learn how I got millions of views and made six figures using simple Instagram carousels."
              },
              {
                title: "Private Community",
                description: "Get all of your questions answered and receive consistent daily support from Anyro and the community."
              },
              {
                title: "Pre-made Stock Footage (300+ clips)",
                description: "Access 300+ pre-made aesthetic clips for your reels."
              },
              {
                title: "All My Presets",
                description: "Get my exclusive presets that I use for editing my videos & pictures."
              },
              {
                title: "Page Audits",
                description: "Submit your page for an audit anytime and get a personalized growth strategy."
              }
            ].map((bonus, index) => (
              <div
                key={index}
                ref={bonusCards.setElementRef(index)}
                className={`testimonial-card hover-lift scroll-fade-up ${bonusCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <h3 className="text-lg md:text-2xl font-bold mb-4">{bonus.title}</h3>
                <p className="text-gray-400">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Success Stories */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={storiesAnimation.elementRef}
            className={`text-center mb-4 scroll-fade-up ${storiesAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-8">
              Get direct access to me, plus everything you need to achieve results like this.
            </h2>
          </div>

          <div className="space-y-16 max-w-4xl mx-auto">
            {[
              {
                name: "Houston",
                story: "Houston joined Instagram Ignited with a few thousand followers. After applying the viral strategies from IImagined, he hit 20K+ followers in a month, launched digital products, and grew his brand to 80K+."
              },
              {
                name: "Tim",
                story: "Tim joined the Instagram Ignited program feeling lost in content creation. After following Anyro's clear structure, his growth skyrocketed, and he built a strong foundation, reaching 100K+ followers."
              },
              {
                name: "Jake",
                story: "Jake joined IImagined in summer 2024 with under 100 followers. After completing the Instagram Ignited program and getting a personalized audit, his growth soared from 15K to 64K followers, earning a full-time income from his brand."
              }
            ].map((story, index) => (
              <div
                key={index}
                className={`bg-zinc-900 rounded-2xl p-6 md:p-8 text-center hover-lift scroll-fade-up ${storiesAnimation.isVisible ? `visible scroll-stagger-${index + 2}` : ''}`}
              >
                <h3 className="text-2xl md:text-4xl font-bold mb-6">{story.name}</h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  {story.story}
                </p>
                <Link href="#pricing" className="cta-button inline-block">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Testimonials Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={testimonialsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-5xl font-bold">What <span className="text-blue-400">Instagram Ignited</span> students say...</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                name: "Marcus Rivera",
                role: "Content Creator",
                avatar: "https://ext.same-assets.com/1161517358/1430260149.webp",
                content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months using Anyro's viral carousel techniques. My engagement rate jumped from 2% to 12%, and I'm now making $15K/month through sponsored posts and my own digital products. The community support is incredible!"
              },
              {
                name: "Allan Rodriguez",
                role: "Lifestyle Blogger",
                avatar: "https://ext.same-assets.com/1161517358/432373971.webp",
                content: "The Instagram OS module alone was worth the entire course! I finally understood the algorithm and my first viral carousel got 2.3M views. Within 3 months, I grew from 5K to 85K followers and landed my first $25K brand partnership. Anyro's strategies actually work!"
              },
              {
                name: "David Chen",
                role: "Fitness Coach",
                avatar: "https://ext.same-assets.com/1161517358/2128294924.webp",
                content: "I was skeptical about another Instagram course, but Instagram Ignited delivered results immediately. My engagement went from 300 likes to 8K+ per post. The monetization strategies helped me scale my coaching business to $22K/month. The ROI was instant!"
              },
              {
                name: "Jake Martinez",
                role: "Business Coach",
                avatar: "https://ext.same-assets.com/1161517358/3465280603.webp",
                content: "As someone who struggled with Instagram for years, this course was a game-changer. The Niche OS helped me find my perfect audience, and within 6 months I had 180K engaged followers. My course sales increased 400% thanks to the Instagram traffic. Absolutely life-changing!"
              },
              {
                name: "Brendan Thompson",
                role: "Digital Entrepreneur",
                avatar: "https://ext.same-assets.com/1161517358/366375215.webp",
                content: "Instagram Ignited took me from 1,200 followers to 240K in 10 months! The content templates and posting strategies are pure gold. I'm now generating $35K/month through affiliate marketing and my own products. This program is the real deal - no fluff, just results!"
              },
              {
                name: "Aria Williams",
                role: "Fashion Influencer",
                avatar: "https://ext.same-assets.com/1161517358/2908592891.webp",
                content: "The editing techniques in Instagram Ignited are incredible! My content quality skyrocketed and so did my follower count - from 3K to 95K in 7 months. I've secured partnerships with major fashion brands worth over $50K. The community mastermind calls are invaluable!"
              },
              {
                name: "Ryan Foster",
                role: "Tech Reviewer",
                avatar: "https://ext.same-assets.com/1161517358/430339476.webp",
                content: "I was stuck at 12K followers for months until I found Instagram Ignited. The mindset shifts and content frameworks helped me break through to 165K followers. My tech review videos now get 500K+ views regularly, and I've monetized through courses making $18K/month!"
              },
              {
                name: "Ashton Torres",
                role: "Travel Blogger",
                avatar: "https://ext.same-assets.com/1161517358/640627202.jpeg",
                content: "Instagram Ignited taught me how to turn my travel passion into profit! From 2K to 130K followers in 9 months, with engagement rates of 15%+. The newsletter strategies helped me build a 25K email list. I'm now earning $28K/month through travel partnerships and my own courses!"
              },
              {
                name: "Cameron Lee",
                role: "Food Content Creator",
                avatar: "https://ext.same-assets.com/1161517358/1695287196.jpeg",
                content: "The Instagram Ignited program is pure genius! My food content went from a few hundred views to consistently hitting 100K+ views per post. Grew from 4K to 200K followers in under a year. Restaurant partnerships and cookbook sales now bring in $32K/month. Best investment ever!"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                ref={testimonialCards.setElementRef(index)}
                className={`testimonial-card hover-lift scroll-fade-up ${testimonialCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
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
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Results CTA */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={finalCtaAnimation.elementRef}
            className={`scroll-fade-up ${finalCtaAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/2822588328.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/3376144705.webp"
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
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to get results like these?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Join IImagined and grow a highly profitable personal brand!</p>
            <Link href="#pricing" className="cta-button inline-block text-lg" id="pricing">
              Claim Full Creator Bundle
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}