'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function HomePage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const partnersAnimation = useScrollAnimation({ threshold: 0.3 })
  const linksAnimation = useScrollAnimation({ threshold: 0.2 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

  const partners = [
    { name: 'Quillbot', logo: 'https://ext.same-assets.com/1161517358/1713187735.svg' },
    { name: 'Harber London', logo: 'https://ext.same-assets.com/1161517358/1512880195.svg' },
    { name: 'Gainful', logo: 'https://ext.same-assets.com/1161517358/3521062091.svg' },
    { name: 'Intelligent Change', logo: 'https://ext.same-assets.com/1161517358/266310045.svg' },
    { name: 'Cohesive', logo: 'https://ext.same-assets.com/1161517358/3834285082.svg' },
    { name: 'Omnisend', logo: 'https://ext.same-assets.com/1161517358/3275847761.svg' },
    { name: 'Submagic', logo: 'https://ext.same-assets.com/1161517358/1225272574.svg' }
  ]

  const testimonials = [
    {
      name: "Houston Kold",
      role: "Online Entrepreneur",
      avatar: "https://ext.same-assets.com/1161517358/1430260149.webp",
      content: "This program is a game-changer! I went from a few thousand followers to 20K in my first month using viral content strategies. Now, I'm making $7K+ per month and have grown my brand to 80K followers. The transformation has been amazing!"
    },
    {
      name: "Arnas Gintalas",
      role: "Online Entrepreneur",
      avatar: "https://ext.same-assets.com/1161517358/3465280603.webp",
      content: "As the founder of a 1,000,000-follower page, I can say that few people understand the Instagram game, as well as Anyro does. Instagram is now my full-time career. I have detached my time from money and am now living my best life."
    },
    {
      name: "Tochi",
      role: "Content Creator",
      avatar: "https://ext.same-assets.com/1161517358/366375215.webp",
      content: "When I first joined the program, I had just 400 Instagram followers and was struggling to see any results. After taking the course, I grew my following to 240K in under 12 months, and I've since launched my own community and newsletter. And I'm just getting started!"
    },
    {
      name: "Alvie O'Brien",
      role: "Agency Owner",
      avatar: "https://ext.same-assets.com/1161517358/432373971.webp",
      content: "The IImagined program is incredible. I went from 200-400 views per video to 2,000-3,000, with my first video hitting 250K views using Anyro's strategies. The community and Anyro's personal advice have been invaluable. Highly recommend!"
    },
    {
      name: "Pascal",
      role: "Online Entrepreneur",
      avatar: "https://ext.same-assets.com/1161517358/2908592891.webp",
      content: "This program is incredible! After completing this course, my video reached 2 million views, and I gained 8,000 followers overnight. I highly recommend it to all creators!"
    },
    {
      name: "Tim",
      role: "Content Creator",
      avatar: "https://ext.same-assets.com/1161517358/430339476.webp",
      content: "I remember when I first joined, feeling lost and unsure in my content creation journey. But the program's structure helped me quickly grasp the essentials, leading to rapid audience growth and reaching 100K followers on Instagram."
    }
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-4xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block px-4 py-2 bg-zinc-800 rounded-full text-sm text-gray-300 mb-8">
              WELCOME
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Creating Content. Designing Products.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Sharing Everything I Learn.
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Start your creator journey:
            </p>
            <Link
              href="/creator-world"
              className="cta-button inline-block btn-animate animate-glow hover-lift"
            >
              Start Here
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section with Horizontal Scroll */}
      <section className="py-12 border-b border-zinc-800 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={partnersAnimation.elementRef}
            className={`text-center mb-8 scroll-fade ${partnersAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider">PARTNERS</p>
          </div>
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="flex items-center justify-center h-8 min-w-[150px] mx-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={32}
                    className="h-8 w-auto filter invert opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="flex items-center justify-center h-8 min-w-[150px] mx-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={32}
                    className="h-8 w-auto filter invert opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={linksAnimation.elementRef}
            className={`text-center mb-12 scroll-fade-up ${linksAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">LINKS</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Community Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-left ${linksAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-float"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">COMMUNITY</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">Instagram Ignited</h3>
              <p className="text-gray-400 mb-6">Turn content creation into a full-time career.</p>
              <Link href="/creator-world" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Join here →
              </Link>
            </div>

            {/* Course Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-right ${linksAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-float [animation-delay:0.5s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">COURSE</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">Digital Product Academy</h3>
              <p className="text-gray-400 mb-6">Scale your digital product to $10K/month.</p>
              <Link href="/dpa" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Enroll now →
              </Link>
            </div>

            {/* YouTube Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-left ${linksAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-float [animation-delay:1s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">YOUTUBE</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-300">My most valuable videos</h3>
              <p className="text-gray-400 mb-6">Tutorials, online money, motivation, and lifestyle.</p>
              <Link
                href="https://www.youtube.com/@anyrxo"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2"
              >
                Explore all videos →
              </Link>
            </div>

            {/* Resources Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-right ${linksAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-float [animation-delay:1.5s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">RESOURCES</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">Free Resources</h3>
              <p className="text-gray-400 mb-6">All my free courses to level up your online business</p>
              <Link
                href="https://anyrxo.gumroad.com/"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2"
              >
                Access resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={testimonialsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              What others have to say...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card card-hover hover-lift group scroll-fade-up ${testimonialsAnimation.isVisible ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold group-hover:text-blue-400 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={ctaAnimation.elementRef}
            className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get Started Today
              </span>
            </h2>
            <Link
              href="/creator-world"
              className="cta-button inline-block text-lg btn-animate animate-glow hover-lift"
            >
              Join Instagram Ignited
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
