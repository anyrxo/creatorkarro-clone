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
      name: "Marcus Rivera",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://ext.same-assets.com/1161517358/1430260149.webp",
      content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months using Anyro's viral carousel techniques. My engagement rate jumped from 2% to 12%, and I'm now making $15K/month through sponsored posts and my own digital products. The community support is incredible!"
    },
    {
      name: "Sophia Chen",
      role: "Digital Entrepreneur", 
      course: "Digital Products",
      avatar: "https://ext.same-assets.com/1161517358/3465280603.webp",
      content: "The Digital Products course is pure gold! I launched my first info product and hit $10K in sales within 3 weeks. Anyro's pricing psychology and launch strategies are game-changing. I've now built a sustainable $25K/month business selling educational content. Best investment I've ever made!"
    },
    {
      name: "Devon Mitchell",
      role: "Automation Specialist",
      course: "N8N AI Automations", 
      avatar: "https://ext.same-assets.com/1161517358/366375215.webp",
      content: "N8N AI Automations saved me 40+ hours per week! I automated my entire content workflow - from research to posting across 5 platforms. My productivity skyrocketed and I can now focus on strategy instead of repetitive tasks. The workflows Anyro provides are incredibly detailed and actually work!"
    },
    {
      name: "Isabella Torres",
      role: "AI Content Creator",
      course: "AI Influencers",
      avatar: "https://ext.same-assets.com/1161517358/432373971.webp", 
      content: "AI Influencers opened up a completely new revenue stream for me! I created 3 AI personas that generate content 24/7. Within 2 months, my AI influencers gained 200K combined followers and started earning $8K/month through partnerships. Anyro's approach to AI content is revolutionary!"
    },
    {
      name: "Ryan Blackwood",
      role: "Visual Artist",
      course: "ComfyUI & Workflows",
      avatar: "https://ext.same-assets.com/1161517358/2908592891.webp",
      content: "ComfyUI & Workflows turned me into an AI art powerhouse! I can now create stunning visuals in minutes instead of hours. My client work rate increased 500% and I'm charging premium prices for AI-enhanced designs. The workflow templates are incredibly professional and save me endless time!"
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
              <span className="text-blue-400">Creating Content.</span> <span className="text-purple-400">Designing Products.</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Instagram Ignited Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-left ${linksAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-float"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">INSTAGRAM</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                <span className="text-blue-400">Instagram</span> Ignited
              </h3>
              <p className="text-gray-400 mb-6">Turn <span className="text-blue-300">viral content</span> into a full-time career.</p>
              <Link href="/creator-world" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Join here →
              </Link>
            </div>

            {/* Digital Products Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-up ${linksAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-float [animation-delay:0.3s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">DIGITAL PRODUCTS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                <span className="text-green-400">Digital</span> Products
              </h3>
              <p className="text-gray-400 mb-6">Scale to <span className="text-green-300">$10K/month</span> with proven strategies.</p>
              <Link href="/dpa" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Enroll now →
              </Link>
            </div>

            {/* N8N AI Automations Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-right ${linksAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-float [animation-delay:0.6s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">AUTOMATION</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                <span className="text-purple-400">N8N AI</span> Automations
              </h3>
              <p className="text-gray-400 mb-6">Build <span className="text-purple-300">automated workflows</span> that scale.</p>
              <Link href="/vcm" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Automate now →
              </Link>
            </div>

            {/* AI Influencers Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-left ${linksAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 animate-float [animation-delay:0.9s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">AI INFLUENCERS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors duration-300">
                <span className="text-pink-400">AI</span> Influencers
              </h3>
              <p className="text-gray-400 mb-6">Create <span className="text-pink-300">virtual personas</span> that earn 24/7.</p>
              <Link href="/ai-influencers" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Start creating →
              </Link>
            </div>

            {/* ComfyUI Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-up ${linksAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-float [animation-delay:1.2s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">COMFYUI</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                <span className="text-orange-400">ComfyUI</span> & Workflows
              </h3>
              <p className="text-gray-400 mb-6">Master <span className="text-orange-300">AI art creation</span> workflows.</p>
              <Link href="/comfyui-workflows" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Create art →
              </Link>
            </div>

            {/* Free Resources Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-right ${linksAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-float [animation-delay:1.5s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">RESOURCES</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                <span className="text-yellow-400">Free</span> Resources
              </h3>
              <p className="text-gray-400 mb-6">Access <span className="text-yellow-300">premium tools</span> and templates.</p>
              <Link
                href="https://anyrxo.gumroad.com"
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
              What <span className="text-blue-400">students</span> have to say...
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
                    <p className="text-xs text-blue-400 font-medium">{testimonial.course}</p>
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
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Get Started Today
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators building <span className="text-blue-400">profitable</span> businesses with <span className="text-purple-400">Anyro's</span> proven strategies
            </p>
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
