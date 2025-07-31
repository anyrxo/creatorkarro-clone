'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function StoryPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const imageAnimation = useScrollAnimation({ threshold: 0.2 })
  const storyAnimation = useScrollAnimation({ threshold: 0.1 })
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })
  const missionAnimation = useScrollAnimation({ threshold: 0.2 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div
            ref={heroAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              MY STORY
            </h1>
          </div>

          {/* Hero Image */}
          <div
            ref={imageAnimation.elementRef}
            className={`mb-16 text-center scroll-scale ${imageAnimation.isVisible ? 'visible' : ''}`}
          >
            <Image
              src="/anyro.png"
              alt="Anyro"
              width={300}
              height={300}
              className="w-48 md:w-64 h-48 md:h-64 rounded-full mx-auto object-cover hover-lift hover:shadow-2xl hover:shadow-blue-500/20"
            />
          </div>

          {/* Story Content */}
          <div
            ref={storyAnimation.elementRef}
            className={`space-y-6 md:space-y-8 text-base md:text-lg text-gray-300 leading-relaxed scroll-fade-up ${storyAnimation.isVisible ? 'visible' : ''}`}
          >
            <p>
              Hey, I'm Anyro. I create content, build businesses, and teach others how to do the same. What started as me posting random stuff online has somehow turned into a 7-figure business. Wild, right?
            </p>

            <p>
              Like most people, I started out completely lost. I was watching every YouTube video, buying every course, trying every "get rich quick" scheme. Nothing worked. I failed at dropshipping, failed at crypto, failed at pretty much everything I touched.
            </p>

            <p>
              Then one day, I decided to just be real. I started posting about my failures, my small wins, the messy behind-the-scenes stuff. People actually connected with that. My Instagram blew up, and before I knew it, I had half a million people following my journey across different platforms.
            </p>

            <div
              ref={statsAnimation.elementRef}
              className={`bg-zinc-900 rounded-2xl p-6 md:p-8 my-12 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                The Numbers
              </h2>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div className={`hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 animate-float">500K+</div>
                  <p className="text-gray-400">Total Followers</p>
                </div>
                <div className={`hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 animate-float [animation-delay:0.5s]">$3M+</div>
                  <p className="text-gray-400">Revenue Generated</p>
                </div>
                <div className={`hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 animate-float [animation-delay:1s]">500M+</div>
                  <p className="text-gray-400">Total Views</p>
                </div>
              </div>
            </div>

            <p>
              Here's what I learned after posting thousands of pieces of content: most advice online is BS. What actually works is being authentic, understanding human psychology, and having systems that scale. Once I figured out the viral content formula and how to turn views into dollars, everything clicked.
            </p>

            <p>
              IImagined isn't just another course. It's literally everything I wish someone had told me when I started. No fluff, no theory - just the exact strategies that took me from broke to $3M+. And yeah, my students are crushing it too.
            </p>

            <p>
              Look, I'm not special. I don't have some secret talent. If I can go from failing at everything to building a 7-figure business, you can too. You just need someone to show you what actually works (and save you from wasting years like I did).
            </p>

            <div
              ref={missionAnimation.elementRef}
              className={`bg-blue-600/10 border border-blue-600/30 rounded-lg p-6 md:p-8 text-center scroll-scale ${missionAnimation.isVisible ? 'visible' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">My Mission</h3>
              <p className="text-lg md:text-xl">
                To help as many people as possible escape the 9-5, build real wealth through content, and actually enjoy their life while doing it. Because making money online shouldn't feel like torture.
              </p>
            </div>

            <p>
              When I'm not working (which is rare because I'm obsessed with this stuff), I'm probably traveling somewhere random, trying weird foods, or deep in a YouTube rabbit hole learning something new. Living an interesting life makes creating content way easier.
            </p>

            <p>
              Whether you're at zero or already making money, there's always another level. I'm here to help you hit it. Let's get after it.
            </p>
          </div>

          {/* CTA Section */}
          <div
            ref={ctaAnimation.elementRef}
            className={`mt-16 text-center bg-zinc-900/50 rounded-2xl p-6 md:p-8 scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Join thousands of creators who have transformed their lives with IImagined.
            </p>
            <Link
              href="/instagram-ignited"
              className="cta-button inline-block hover-lift"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
