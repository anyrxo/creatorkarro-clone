'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import WordRotate from '@/components/magicui/word-rotate'
import ScrambleText from '@/components/magicui/scramble-text'
import NumberTicker from '@/components/magicui/number-ticker'
import { ChevronRight, Target, Users, Award, Rocket, TrendingUp, Heart } from 'lucide-react'

export default function AboutPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const storyAnimation = useScrollAnimation({ threshold: 0.2 })
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })
  const valuesAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-black relative">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-r from-blue-400/20 via-purple-500/30 to-pink-500/20 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400/25 via-pink-500/35 to-blue-500/25 rounded-full blur-3xl animate-pulse opacity-70" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <AnimatedGradientText>
                  <hr className="mx-2 h-4 w-[1px] shrink-0 bg-zinc-300" />{" "}
                  <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                    Our Story
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight">
                <ScrambleText
                  text="About IImagined"
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight"
                  scrambleSpeed={1}
                  revealSpeed={1}
                />
              </h1>

              <div className="max-w-4xl mx-auto">
                <TypingAnimation
                  text="Building the future of creator education through AI automation, proven systems, and community-driven success."
                  className="text-xl md:text-2xl text-zinc-300 leading-relaxed"
                  duration={40}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { value: 4000, suffix: '+', label: 'Students' },
              { value: 8500, suffix: '+', label: 'Community Members' },
              { value: 500, suffix: 'K+', label: 'Instagram Followers' },
              { value: 95, suffix: '%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-zinc-400 text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/anyro.webp"
                  alt="Anyro - Founder of IImagined"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <BlurIn
                  word="The Journey"
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  duration={0.6}
                />
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  <WordRotate
                    words={["Beyond Limits", "Past Dreams", "Above Expectations", "Through Barriers"]}
                    className="text-3xl md:text-4xl font-bold"
                    duration={3000}
                  />
                </div>
              </div>

              <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
                <p>
                  IImagined was born from a simple belief: anyone can build a thriving online business with the right systems, tools, and guidance.
                </p>
                <p>
                  What started as a personal journey to 500K+ Instagram followers became a mission to help thousands of creators achieve the same success and beyond.
                </p>
                <p>
                  Today, we've helped over 4,000 students build profitable businesses through AI automation, Instagram growth, and digital product creation. Our community has generated millions in revenue using the exact systems we teach.
                </p>
              </div>

              <Link href="/story">
                <ShimmerButton
                  className="shadow-lg"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #3b82f6, #9333ea)"
                  borderRadius="12px"
                >
                  <span className="font-semibold px-6 py-2 flex items-center gap-2">
                    Read Full Story
                    <ChevronRight size={18} />
                  </span>
                </ShimmerButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BlurIn
              word="Our Values"
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              duration={0.8}
            />
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={32} />,
                title: 'Results-Driven',
                description: 'Every strategy we teach is proven to work. No theory, only real-world results from thousands of successful students.'
              },
              {
                icon: <Users size={32} />,
                title: 'Community First',
                description: 'Your success is our success. We build supportive communities where creators help each other grow and win together.'
              },
              {
                icon: <Rocket size={32} />,
                title: 'Innovation',
                description: 'Stay ahead with cutting-edge AI automation, growth strategies, and tools that give you an unfair advantage.'
              },
              {
                icon: <Award size={32} />,
                title: 'Excellence',
                description: 'We obsess over quality. From course content to support, everything is crafted to exceed expectations.'
              },
              {
                icon: <TrendingUp size={32} />,
                title: 'Continuous Growth',
                description: 'The creator economy evolves fast. We update our courses regularly so you always have the latest strategies.'
              },
              {
                icon: <Heart size={32} />,
                title: 'Authenticity',
                description: 'Real people, real results, real support. No hype, no false promises - just proven systems that work.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 hover:bg-zinc-800/60 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zinc-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black"></div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Ready to Join Our{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Community?
              </span>
            </h2>
            <p className="text-xl text-zinc-300 mb-12 leading-relaxed">
              Become part of 4,000+ creators building profitable businesses with proven systems
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/instagram-ignited">
                <ShimmerButton
                  className="shadow-2xl"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #2563eb, #9333ea)"
                  borderRadius="12px"
                >
                  <span className="font-bold px-8 py-3 text-lg">
                    Get Started
                  </span>
                </ShimmerButton>
              </Link>

              <Link href="/contact">
                <button className="px-8 py-3 text-lg font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all duration-300 border border-zinc-700 hover:border-zinc-600">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
