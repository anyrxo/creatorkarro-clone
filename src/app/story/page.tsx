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
              Hey, I'm Anyro (formerly known as Karro). I'm a content creator, entrepreneur, and educator who's built a multi-six-figure business through organic content creation and digital products.
            </p>

            <p>
              My journey started like many others - confused, overwhelmed, and trying to figure out how to make money online. I spent countless hours consuming content, trying different strategies, and failing more times than I can count.
            </p>

            <p>
              But everything changed when I discovered the power of personal branding and content creation. I started sharing my journey, my learnings, and my failures. What began as a small Instagram account documenting my entrepreneurial journey has now grown into a community of over 500,000 followers across all platforms.
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
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2 animate-float [animation-delay:0.5s]">$555K+</div>
                  <p className="text-gray-400">Revenue Generated</p>
                </div>
                <div className={`hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2 animate-float [animation-delay:1s]">100M+</div>
                  <p className="text-gray-400">Total Views</p>
                </div>
              </div>
            </div>

            <p>
              Through trial, error, and relentless testing, I discovered what actually works in the content creation space. I learned how to create viral content consistently, how to build an engaged audience, and most importantly, how to monetize that audience effectively.
            </p>

            <p>
              The IImagined program is the culmination of everything I've learned. It's not just theory - it's a proven system that I've used to build my own business and that hundreds of my students have used to achieve similar results.
            </p>

            <p>
              I believe that everyone has the potential to build a successful online business. You just need the right guidance, the right strategies, and the willingness to take action. That's exactly what IImagined provides.
            </p>

            <div
              ref={missionAnimation.elementRef}
              className={`bg-blue-600/10 border border-blue-600/30 rounded-lg p-6 md:p-8 text-center scroll-scale ${missionAnimation.isVisible ? 'visible' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">My Mission</h3>
              <p className="text-lg md:text-xl">
                To help creators turn their passion into profit by providing them with the exact strategies, tools, and support they need to build a thriving online business.
              </p>
            </div>

            <p>
              When I'm not creating content or helping students, you can find me traveling the world, trying new experiences, and constantly learning. I believe that the best content comes from living an interesting life and sharing those experiences with others.
            </p>

            <p>
              Whether you're just starting out or looking to take your existing business to the next level, I'm here to help you succeed. Let's build something amazing together.
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
              href="/creator-world"
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
