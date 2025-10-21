'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import ScrambleText from '@/components/magicui/scramble-text'
import {
  ChevronRight,
  BookOpen,
  MessageCircle,
  Mail,
  ExternalLink,
  HelpCircle,
  FileText,
  Users,
  Zap
} from 'lucide-react'

export default function HelpPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const resourcesAnimation = useScrollAnimation({ threshold: 0.2 })

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
                    We're Here to Help
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight">
                <ScrambleText
                  text="Help Center"
                  className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight"
                  scrambleSpeed={1}
                  revealSpeed={1}
                />
              </h1>

              <div className="max-w-4xl mx-auto">
                <TypingAnimation
                  text="Find answers, access resources, and connect with our support team to get the most out of your IImagined experience."
                  className="text-xl md:text-2xl text-zinc-300 leading-relaxed"
                  duration={40}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Help Cards */}
      <section className="relative py-16 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <BookOpen size={28} />,
                title: 'Documentation',
                description: 'Course guides and tutorials',
                href: '/resources',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <MessageCircle size={28} />,
                title: 'Community',
                description: 'Join Telegram group',
                href: 'https://t.me/IImagined',
                external: true,
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: <Mail size={28} />,
                title: 'Email Support',
                description: 'Contact our team',
                href: '/contact',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <HelpCircle size={28} />,
                title: 'FAQs',
                description: 'Common questions',
                href: '/faq',
                color: 'from-orange-500 to-red-500'
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="block h-full"
                >
                  <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-300 group h-full">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} bg-opacity-20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      {card.title}
                      {card.external && <ExternalLink size={16} className="text-zinc-400" />}
                    </h3>
                    <p className="text-zinc-400">{card.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <BlurIn
              word="Popular Topics"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              duration={0.6}
            />
            <p className="text-xl text-zinc-400">
              Quick answers to the most common questions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'How do I access my course after purchase?',
                answer: 'All courses are hosted on Whop. After purchase, you\'ll receive an email with access instructions and your login details.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'Yes! We offer a 365-day action-based money-back guarantee. If you complete the course and don\'t see results, we\'ll refund you.'
              },
              {
                question: 'How long do I have access to courses?',
                answer: 'Lifetime! Once you purchase a course, you get lifetime access including all future updates and new content.'
              },
              {
                question: 'Can I get help if I\'m stuck?',
                answer: 'Absolutely! All course members get access to our private community and support channels where you can ask questions anytime.'
              },
              {
                question: 'Are the courses suitable for beginners?',
                answer: 'Yes! Our courses are designed for all levels, from complete beginners to advanced users. We include step-by-step tutorials and resources.'
              },
              {
                question: 'How often are courses updated?',
                answer: 'We update our courses regularly (typically monthly) to ensure you always have access to the latest strategies and tools.'
              }
            ].map((topic, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-2">
                  <HelpCircle size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                  {topic.question}
                </h3>
                <p className="text-zinc-300 leading-relaxed">{topic.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq">
              <ShimmerButton
                className="shadow-lg"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #3b82f6, #9333ea)"
                borderRadius="12px"
              >
                <span className="font-semibold px-6 py-3 flex items-center gap-2">
                  View All FAQs
                  <ChevronRight size={18} />
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <BlurIn
              word="Learning Resources"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              duration={0.6}
            />
            <p className="text-xl text-zinc-400">
              Everything you need to succeed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText size={32} />,
                title: 'Free Resources',
                description: 'Download free templates, workflows, and guides to kickstart your journey.',
                cta: 'Browse Free Stuff',
                href: 'https://anyrxo.gumroad.com',
                external: true,
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: <Users size={32} />,
                title: 'Course Access',
                description: 'Access all your courses, modules, and exclusive content on our platform.',
                cta: 'Go to Courses',
                href: 'https://whop.com/anyro/premium-monthly-0a/',
                external: true,
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Zap size={32} />,
                title: 'Blog & Tutorials',
                description: 'Read in-depth guides, case studies, and tutorials on our blog.',
                cta: 'Read Blog',
                href: '/blog',
                gradient: 'from-purple-500 to-pink-500'
              }
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${resource.gradient} bg-opacity-20 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {resource.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{resource.title}</h3>
                <p className="text-zinc-300 leading-relaxed mb-6">{resource.description}</p>
                <Link
                  href={resource.href}
                  target={resource.external ? '_blank' : undefined}
                  rel={resource.external ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${resource.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                >
                  {resource.cta}
                  {resource.external ? <ExternalLink size={16} /> : <ChevronRight size={16} />}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black"></div>

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed">
              Our support team is here to help you succeed. Reach out anytime!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <ShimmerButton
                  className="shadow-2xl"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #2563eb, #9333ea)"
                  borderRadius="12px"
                >
                  <span className="font-bold px-8 py-3 text-lg">
                    Contact Support
                  </span>
                </ShimmerButton>
              </Link>

              <Link href="https://t.me/IImagined" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 text-lg font-semibold text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all duration-300 border border-zinc-700 hover:border-zinc-600">
                  Join Community
                </button>
              </Link>
            </div>

            <div className="mt-12 p-6 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-xl max-w-2xl mx-auto">
              <p className="text-zinc-300 mb-2">
                <span className="font-semibold text-white">Response Time:</span> We typically respond within 12-24 hours during business days
              </p>
              <p className="text-zinc-300">
                <span className="font-semibold text-white">Email:</span>{' '}
                <a href="mailto:anyro@iimagined.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                  anyro@iimagined.ai
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
