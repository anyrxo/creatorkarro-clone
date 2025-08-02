'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useState, useEffect } from 'react'
import ParticleBackground from '@/components/ParticleBackground'
import InteractiveBackground from '@/components/InteractiveBackground'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedText, { GradientText } from '@/components/AnimatedText'
import EnhancedButton from '@/components/EnhancedButton'
import ScrollAnimation, { StaggeredAnimation, TextScramble } from '@/components/ScrollAnimation'
import { TiltCard } from '@/components/HoverEffects'

export default function HomePage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const partnersAnimation = useScrollAnimation({ threshold: 0.3 })
  const linksAnimation = useScrollAnimation({ threshold: 0.2 })
  const blogAnimation = useScrollAnimation({ threshold: 0.1 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })
  
  // Subtle counter animation for community size
  const [communitySize, setCommunitySize] = useState(0)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCommunitySize(prev => prev < 12000 ? prev + 200 : 12000)
    }, 20)
    
    return () => clearInterval(timer)
  }, [])

  const partners = [
    { name: 'Google Gemini', logo: '/partners/google-gemini.png' },
    { name: 'Claude AI', logo: '/partners/claude.png' },
    { name: 'n8n', logo: '/partners/n8n.png' },
    { name: 'Make', logo: '/partners/make.png' },
    { name: 'Zapier', logo: '/partners/zapier.png' },
    { name: 'NVIDIA', logo: '/partners/nvidia.png' },
    { name: 'DigitalOcean', logo: '/partners/digitalocean.png' },
    { name: 'Loom', logo: '/partners/loom.png' },
    { name: 'Whop', logo: '/partners/whop.png' },
    { name: 'Manus AI', logo: '/partners/manus-ai.png' },
    { name: 'AI Platform', logo: '/partners/partner-1.png' },
    { name: 'Tech Stack', logo: '/partners/partner-2.avif' },
    { name: 'Cloud Partner', logo: '/partners/partner-3.png' },
    { name: 'Integration Hub', logo: '/partners/partner-4.webp' }
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
      name: "Jake Chen",
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
      name: "Ashton Torres",
      role: "AI Content Creator",
      course: "AI Influencers",
      avatar: "https://ext.same-assets.com/1161517358/432373971.webp", 
      content: "AI Influencers opened up a completely new revenue stream for me! I created 3 AI models that generate content 24/7. Within 2 months, my AI models gained 200K combined followers and started earning $8K/month through partnerships. Anyro's approach to AI content is revolutionary!"
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
    <div className="min-h-screen bg-dark relative">
      <ParticleBackground />
      <InteractiveBackground />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 hero-gradient overflow-hidden relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-4xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block px-4 py-2 bg-zinc-800/80 backdrop-blur-sm rounded-full text-sm text-gray-300 mb-8 border border-zinc-700/50">
              <AnimatedText animation="counter" countTo={communitySize} suffix="+" className="text-blue-400 font-semibold">0</AnimatedText>
              <span className="ml-1">creators learning together</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <AnimatedText delay={200} className="text-white drop-shadow-[0_2px_10px_rgba(59,130,246,0.5)]">Creating Content.</AnimatedText>{' '}
              <AnimatedText delay={400} className="text-white drop-shadow-[0_2px_10px_rgba(147,51,234,0.5)]">Building Products.</AnimatedText>
              <br />
              <GradientText className="text-4xl md:text-6xl font-bold drop-shadow-[0_4px_20px_rgba(59,130,246,0.8)]" gradient="primary">
                <AnimatedText delay={600}>Sharing My Journey.</AnimatedText>
              </GradientText>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              From zero to full-time creator. Explore the strategies, tools, and courses that transformed my life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <EnhancedButton variant="primary" size="lg" href="/instagram-ignited">
                Start Learning →
              </EnhancedButton>
              <div className="flex gap-4">
                <Link
                  href="/story"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-1 inline-flex items-center"
                >
                  Read My Story →
                </Link>
                <Link
                  href="/blog"
                  className="text-purple-400 hover:text-purple-300 font-medium transition-all duration-300 hover:translate-x-1 inline-flex items-center"
                >
                  Browse Articles →
                </Link>
              </div>
            </div>
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

      {/* Courses & Resources Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={linksAnimation.elementRef}
            className={`text-center mb-12 scroll-fade-up ${linksAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn & Grow
            </h2>
            <p className="text-xl text-gray-400">Courses and resources to accelerate your creator journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Instagram Ignited Card */}
            <AnimatedCard hoverEffect="glow" glowColor="blue" delay={100} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-float"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">INSTAGRAM</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                <span className="text-blue-400">Instagram</span> Ignited
              </h3>
              <p className="text-gray-400 mb-4">Transform your Instagram into a thriving business with proven viral strategies.</p>
              <div className="text-sm text-gray-500 mb-6">
                <p>8,000+ students • 4.9★ rating</p>
              </div>
              <Link href="/instagram-ignited" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                Learn more →
              </Link>
            </AnimatedCard>

            {/* Digital Products Card */}
            <AnimatedCard hoverEffect="tilt" glowColor="green" delay={200} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-float [animation-delay:0.3s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">DIGITAL PRODUCTS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                <span className="text-green-400">Digital</span> Products
              </h3>
              <p className="text-gray-400 mb-4">Create and sell digital products that generate passive income while you sleep.</p>
              <div className="text-sm text-gray-500 mb-6">
                <p>3,000+ students • 4.8★ rating</p>
              </div>
              <Link href="/digital-products" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                Learn more →
              </Link>
            </AnimatedCard>

            {/* N8N AI Automations Card */}
            <AnimatedCard hoverEffect="scale" glowColor="purple" delay={300} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-float [animation-delay:0.6s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">AUTOMATION</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                <span className="text-purple-400">N8N AI</span> Automations
              </h3>
              <p className="text-gray-400 mb-4">Automate your entire workflow with AI-powered systems that work 24/7.</p>
              <div className="text-sm text-gray-500 mb-6">
                <p>1,800+ students • 5.0★ rating</p>
              </div>
              <Link href="/n8n-ai-automations" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                Learn more →
              </Link>
            </AnimatedCard>

            {/* AI Influencers Card */}
            <AnimatedCard hoverEffect="magnetic" glowColor="pink" delay={400} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 animate-float [animation-delay:0.9s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">AI INFLUENCERS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors duration-300">
                <span className="text-pink-400">AI</span> Influencers
              </h3>
              <p className="text-gray-400 mb-4">Build AI-powered virtual influencers that create content and engage audiences.</p>
              <div className="text-sm text-gray-500 mb-6">
                <p>2,100+ students • 4.9★ rating</p>
              </div>
              <Link href="/ai-influencers" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                Learn more →
              </Link>
            </AnimatedCard>

            {/* ComfyUI Card */}
            <AnimatedCard hoverEffect="lift" glowColor="orange" delay={500} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-float [animation-delay:1.2s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">COMFYUI</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                <span className="text-orange-400">ComfyUI</span> & Workflows
              </h3>
              <p className="text-gray-400 mb-4">Master AI art creation with professional ComfyUI workflows.</p>
              <div className="text-sm text-gray-500 mb-6">
                <p>500+ students • 4.7★ rating</p>
              </div>
              <Link href="/comfyui-workflows" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2 inline-flex items-center">
                Learn more →
              </Link>
            </AnimatedCard>

            {/* Free Resources Card */}
            <AnimatedCard hoverEffect="glow" glowColor="yellow" delay={600} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-float [animation-delay:1.5s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">RESOURCES</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                <span className="text-yellow-400">Free</span> Resources
              </h3>
              <p className="text-gray-400 mb-4">Access free templates, tools, and guides to kickstart your journey.</p>
              <div className="text-sm text-gray-500 mb-6">
                <p>50+ templates • Always free</p>
              </div>
              <Link
                href="https://anyrxo.gumroad.com"
                target="_blank"
                className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2 inline-flex items-center"
              >
                Browse free resources →
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={blogAnimation.elementRef}
            className={`text-center mb-12 scroll-fade-up ${blogAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">BLOG</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Latest <span className="text-blue-400">Creator</span> Insights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Blog Post 1 */}
            <AnimatedCard hoverEffect="lift" glowColor="blue" delay={100} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-float"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">GROWTH GUIDE</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                From 0 to <span className="text-blue-400">500K Followers</span>
              </h3>
              <p className="text-gray-400 mb-4">The complete Instagram blueprint that took me from zero to half a million followers and $15K/month</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 15, 2025</span>
              </div>
              <Link href="/blog/500k-followers" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Read more →
              </Link>
            </AnimatedCard>

            {/* Blog Post 2 */}
            <AnimatedCard hoverEffect="tilt" glowColor="purple" delay={200} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-float [animation-delay:0.3s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">SUCCESS STORY</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                From 800 to <span className="text-purple-400">125K Followers</span>
              </h3>
              <p className="text-gray-400 mb-4">How Marcus Rivera used Instagram Ignited to build a $15K/month business in just 8 months</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>12 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 8, 2025</span>
              </div>
              <Link href="/blog/instagram-ignited-success-stories" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Read more →
              </Link>
            </AnimatedCard>

            {/* Blog Post 3 */}
            <AnimatedCard hoverEffect="glow" glowColor="green" delay={300} className="p-6 group">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-float [animation-delay:0.6s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">MONETIZATION GUIDE</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                The Ultimate <span className="text-green-400">Whop Clipping Strategy</span>
              </h3>
              <p className="text-gray-400 mb-4">Turn Twitch streams into a $10K/month business with this proven system used by 500+ successful clippers</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>15 min read</span>
                <span className="mx-2">•</span>
                <span>Jan 22, 2025</span>
              </div>
              <Link href="/blog/whop-clipping" className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-2">
                Read more →
              </Link>
            </AnimatedCard>
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
              <AnimatedCard
                key={index}
                hoverEffect="lift"
                glowColor="blue"
                delay={index * 100}
                className="p-6 group"
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
              </AnimatedCard>
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
              Ready to <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Start Your Journey?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our community of creators who are building their dream businesses. 
              Whether you're just starting or ready to scale, we have something for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <EnhancedButton
                variant="primary"
                size="lg"
                href="/instagram-ignited"
              >
                Explore Courses
              </EnhancedButton>
              <Link
                href="/blog"
                className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 hover:translate-x-1 inline-flex items-center"
              >
                Read Free Content →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
