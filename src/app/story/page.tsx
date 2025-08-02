'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import NumberTicker from '@/components/magicui/number-ticker'
import ShimmerButton from '@/components/magicui/shimmer-button'
import WordRotate from '@/components/magicui/word-rotate'

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
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              <BlurIn
                word="MY"
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block mr-4"
                duration={0.8}
              />
              <WordRotate
                words={["STORY", "JOURNEY", "PATH", "VISION"]}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block"
                duration={2500}
              />
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
              Like most people, I started out completely lost. I was watching every YouTube video, buying every course, trying to find my path. But instead of chasing quick wins, I went deep on what actually fascinated me - AI, automation, and content creation. That's when everything changed.
            </p>

            <p>
              I started experimenting with everything - building AI influencers that generate income 24/7, automating entire businesses with N8N, creating viral content with ComfyUI, mastering the algorithm on every platform, and packaging my knowledge into digital products. Each success built on the last, and suddenly I wasn't just learning - I was earning.
            </p>

            <div
              ref={statsAnimation.elementRef}
              className={`bg-zinc-900 rounded-2xl p-6 md:p-8 my-12 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}
            >
              <BlurIn
                word="The Numbers"
                className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                duration={0.8}
              />
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div className={`hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
                  <NumberTicker value={500} suffix="K+" className="text-3xl md:text-4xl font-bold text-blue-400 mb-2" />
                  <p className="text-gray-400">Total Followers</p>
                </div>
                <div className={`hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
                  <NumberTicker value={3} prefix="$" suffix="M+" className="text-3xl md:text-4xl font-bold text-green-400 mb-2" />
                  <p className="text-gray-400">Revenue Generated</p>
                </div>
                <div className={`hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
                  <NumberTicker value={500} suffix="M+" className="text-3xl md:text-4xl font-bold text-purple-400 mb-2" />
                  <p className="text-gray-400">Total Views</p>
                </div>
              </div>
            </div>

            <p>
              Here's what I discovered: success isn't about picking one thing - it's about stacking skills that multiply each other. My AI influencers drive traffic to my digital products. My N8N automations handle the backend while I sleep. ComfyUI lets me create content at scale. Going viral brings in the audience. And digital products turn that audience into revenue. It's all connected.
            </p>

            <p>
              IImagined isn't just another course. It's the exact blueprint for all 5 systems that built my empire. No fluff, no theory - just proven methods: AI influencers, N8N automations, ComfyUI workflows, viral content strategies, and digital product funnels. Everything that took me to $3M+, and everything my students are using to build their own success.
            </p>

            <p>
              Look, I'm not special. I don't have some secret talent. I just found what works and went all in. These 5 methods aren't random - they're the future of online business. Master them now while most people are still figuring out basic social media.
            </p>

            <div
              ref={missionAnimation.elementRef}
              className={`bg-blue-600/10 border border-blue-600/30 rounded-lg p-6 md:p-8 text-center scroll-scale ${missionAnimation.isVisible ? 'visible' : ''}`}
            >
              <TypingAnimation
                text="My Mission"
                className="text-xl md:text-2xl font-bold mb-4"
                duration={100}
              />
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
            <BlurIn
              word="Ready to start your journey?"
              className="text-2xl md:text-3xl font-bold mb-4"
              duration={0.8}
            />
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Join thousands of creators who have transformed their lives with IImagined.
            </p>
            <Link href="/instagram-ignited">
              <ShimmerButton
                className="shadow-2xl"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #2563eb, #9333ea)"
                borderRadius="9999px"
              >
                <span className="whitespace-nowrap text-lg font-bold px-6 py-2">
                  Start Your Transformation
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
