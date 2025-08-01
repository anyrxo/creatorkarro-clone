'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useState, useEffect } from 'react'

export default function HomePage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const partnersAnimation = useScrollAnimation({ threshold: 0.3 })
  const linksAnimation = useScrollAnimation({ threshold: 0.2 })
  const blogAnimation = useScrollAnimation({ threshold: 0.1 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })
  
  // Social proof counter animation
  const [studentsCount, setStudentsCount] = useState(0)
  const [revenueCount, setRevenueCount] = useState(0)
  const [followersCount, setFollowersCount] = useState(0)
  
  useEffect(() => {
    const studentInterval = setInterval(() => {
      setStudentsCount(prev => prev < 12847 ? prev + 127 : 12847)
    }, 10)
    
    const revenueInterval = setInterval(() => {
      setRevenueCount(prev => prev < 2.3 ? prev + 0.05 : 2.3)
    }, 20)
    
    const followerInterval = setInterval(() => {
      setFollowersCount(prev => prev < 125 ? prev + 2 : 125)
    }, 15)
    
    return () => {
      clearInterval(studentInterval)
      clearInterval(revenueInterval)
      clearInterval(followerInterval)
    }
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
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing hero-gradient overflow-hidden relative">
        {/* Urgency Banner */}
        <div className="absolute top-0 left-0 right-0 bg-red-600/90 text-white py-2 text-center z-10 animate-pulse">
          <p className="text-sm font-medium">
            ⚡ LIMITED TIME: Save $200 on all courses - Only {Math.floor(Math.random() * 5 + 3)} spots left today!
          </p>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-5xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full text-sm text-gray-300 mb-8 border border-zinc-600">
              <span className="animate-pulse">🔥</span>
              <span>Trusted by {studentsCount.toLocaleString()}+ creators worldwide</span>
              <span className="animate-pulse">🔥</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">I Went From</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                $0 to $15K/Month
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">In Just 8 Months</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
              Now I'm Teaching {studentsCount.toLocaleString()}+ People
              <br />
              <span className="text-green-400">The EXACT System I Used</span>
            </p>
            
            {/* Social Proof Metrics */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">{studentsCount.toLocaleString()}+</p>
                <p className="text-sm text-gray-400">Active Students</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-400">${revenueCount.toFixed(1)}M+</p>
                <p className="text-sm text-gray-400">Student Revenue</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-400">{followersCount}M+</p>
                <p className="text-sm text-gray-400">Combined Followers</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <Link
                href="/instagram-ignited"
                className="cta-button inline-block text-lg btn-animate animate-glow hover-lift relative"
              >
                <span className="relative z-10">Get Instant Access - 67% OFF Today Only</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg animate-pulse opacity-50"></div>
              </Link>
              
              <p className="text-sm text-gray-400">
                ⚡ 30-Day Money Back Guarantee • No Questions Asked
              </p>
              
              {/* Recent Activity */}
              <div className="flex items-center justify-center gap-2 text-sm text-yellow-400 animate-fade-in">
                <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                <span>Sarah M. just enrolled 3 minutes ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Agitate-Solution Section */}
      <section className="section-spacing bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-500">The Harsh Reality:</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300">
              <p className="flex items-start justify-center gap-3">
                <span className="text-red-500 text-2xl">❌</span>
                <span><strong className="text-white">99% of creators</strong> never make a single dollar online</span>
              </p>
              <p className="flex items-start justify-center gap-3">
                <span className="text-red-500 text-2xl">❌</span>
                <span><strong className="text-white">95% give up</strong> within their first 3 months</span>
              </p>
              <p className="flex items-start justify-center gap-3">
                <span className="text-red-500 text-2xl">❌</span>
                <span>They waste <strong className="text-white">months posting content</strong> that nobody sees</span>
              </p>
              <p className="flex items-start justify-center gap-3">
                <span className="text-red-500 text-2xl">❌</span>
                <span>They have <strong className="text-white">no strategy</strong>, no system, no guidance</span>
              </p>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">
              But What If You Had...
            </h3>
            <div className="space-y-6 text-lg md:text-xl text-gray-300">
              <p className="flex items-start justify-center gap-3">
                <span className="text-green-500 text-2xl">✅</span>
                <span>A <strong className="text-white">proven blueprint</strong> that's generated millions in revenue</span>
              </p>
              <p className="flex items-start justify-center gap-3">
                <span className="text-green-500 text-2xl">✅</span>
                <span><strong className="text-white">Step-by-step systems</strong> that work in 2025 and beyond</span>
              </p>
              <p className="flex items-start justify-center gap-3">
                <span className="text-green-500 text-2xl">✅</span>
                <span>Access to <strong className="text-white">viral strategies</strong> top creators don't share</span>
              </p>
              <p className="flex items-start justify-center gap-3">
                <span className="text-green-500 text-2xl">✅</span>
                <span>A <strong className="text-white">supportive community</strong> of 12,000+ successful creators</span>
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              That's Exactly What You Get Inside:
            </p>
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

      {/* Products Section with Conversion Optimization */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={linksAnimation.elementRef}
            className={`text-center mb-12 scroll-fade-up ${linksAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Path to Success</span>
            </h2>
            <p className="text-xl text-gray-400">Join thousands who transformed their lives with these proven systems</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Instagram Ignited Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-left ${linksAnimation.isVisible ? 'visible scroll-stagger-1' : ''} relative overflow-hidden`}>
              {/* Best Seller Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                BEST SELLER
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-float"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">INSTAGRAM MASTERY</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                <span className="text-blue-400">Instagram</span> Ignited
              </h3>
              <p className="text-gray-400 mb-4">Turn <span className="text-blue-300">viral content</span> into $10K+/month income</p>
              
              {/* Success Metrics */}
              <div className="space-y-2 mb-6">
                <p className="text-sm text-green-400">✅ 8,432 students enrolled</p>
                <p className="text-sm text-green-400">✅ Average: 50K followers in 90 days</p>
                <p className="text-sm text-green-400">✅ 4.9/5 rating (2,847 reviews)</p>
              </div>
              
              {/* Price with Discount */}
              <div className="mb-4">
                <p className="text-gray-500 line-through text-sm">$497</p>
                <p className="text-3xl font-bold text-white">$197 <span className="text-sm text-gray-400 font-normal">one-time</span></p>
                <p className="text-xs text-red-400">Save $300 - Today Only!</p>
              </div>
              
              <Link href="/instagram-ignited" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:scale-105">
                Get Instant Access →
              </Link>
            </div>

            {/* Digital Products Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-up ${linksAnimation.isVisible ? 'visible scroll-stagger-2' : ''} relative overflow-hidden`}>
              {/* Hot Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                🔥 HOT
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-float [animation-delay:0.3s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">PASSIVE INCOME</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors duration-300">
                <span className="text-green-400">Digital</span> Products
              </h3>
              <p className="text-gray-400 mb-4">Scale to <span className="text-green-300">$10K/month</span> with proven info products</p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm text-green-400">✅ 3,241 students earning</p>
                <p className="text-sm text-green-400">✅ Average: $5K in first 60 days</p>
                <p className="text-sm text-green-400">✅ 4.8/5 rating (1,432 reviews)</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-500 line-through text-sm">$397</p>
                <p className="text-3xl font-bold text-white">$147 <span className="text-sm text-gray-400 font-normal">one-time</span></p>
                <p className="text-xs text-red-400">Save $250 - Limited Time!</p>
              </div>
              
              <Link href="/digital-products" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center block group-hover:scale-105">
                Start Earning Now →
              </Link>
            </div>

            {/* N8N AI Automations Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-right ${linksAnimation.isVisible ? 'visible scroll-stagger-3' : ''} relative overflow-hidden`}>
              {/* New Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                NEW
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-float [animation-delay:0.6s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">AI AUTOMATION</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-300">
                <span className="text-purple-400">N8N AI</span> Automations
              </h3>
              <p className="text-gray-400 mb-4">Save 40+ hours/week with <span className="text-purple-300">AI workflows</span></p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm text-green-400">✅ 1,847 automations built</p>
                <p className="text-sm text-green-400">✅ Save 40+ hours per week</p>
                <p className="text-sm text-green-400">✅ 5.0/5 rating (621 reviews)</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-500 line-through text-sm">$597</p>
                <p className="text-3xl font-bold text-white">$297 <span className="text-sm text-gray-400 font-normal">one-time</span></p>
                <p className="text-xs text-red-400">Launch Price - 50% OFF!</p>
              </div>
              
              <Link href="/n8n-ai-automations" className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-center block group-hover:scale-105">
                Automate Everything →
              </Link>
            </div>

            {/* AI Influencers Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-left ${linksAnimation.isVisible ? 'visible scroll-stagger-4' : ''} relative overflow-hidden`}>
              {/* Trending Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                TRENDING
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full mr-3 animate-float [animation-delay:0.9s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">AI MODELS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors duration-300">
                <span className="text-pink-400">AI</span> Influencers
              </h3>
              <p className="text-gray-400 mb-4">Create <span className="text-pink-300">virtual models</span> earning 24/7</p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm text-green-400">✅ 2,134 AI models created</p>
                <p className="text-sm text-green-400">✅ Average: $3K/month per model</p>
                <p className="text-sm text-green-400">✅ 4.9/5 rating (892 reviews)</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-500 line-through text-sm">$697</p>
                <p className="text-3xl font-bold text-white">$397 <span className="text-sm text-gray-400 font-normal">one-time</span></p>
                <p className="text-xs text-red-400">Save $300 - This Week Only!</p>
              </div>
              
              <Link href="/ai-influencers" className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 text-center block group-hover:scale-105">
                Create AI Models →
              </Link>
            </div>

            {/* ComfyUI Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-up ${linksAnimation.isVisible ? 'visible scroll-stagger-5' : ''} relative overflow-hidden`}>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-float [animation-delay:1.2s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">AI ART</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors duration-300">
                <span className="text-orange-400">ComfyUI</span> Workflows
              </h3>
              <p className="text-gray-400 mb-4">Professional <span className="text-orange-300">AI art workflows</span> that sell</p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm text-green-400">✅ 127 pro workflows included</p>
                <p className="text-sm text-green-400">✅ Create art 10x faster</p>
                <p className="text-sm text-green-400">✅ 4.7/5 rating (543 reviews)</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-500 line-through text-sm">$297</p>
                <p className="text-3xl font-bold text-white">$97 <span className="text-sm text-gray-400 font-normal">one-time</span></p>
                <p className="text-xs text-red-400">Save $200 - Best Value!</p>
              </div>
              
              <Link href="/comfyui-workflows" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-center block group-hover:scale-105">
                Get Workflows →
              </Link>
            </div>

            {/* Free Resources Card */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-right ${linksAnimation.isVisible ? 'visible scroll-stagger-6' : ''} relative overflow-hidden`}>
              {/* Free Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                100% FREE
              </div>
              
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-float [animation-delay:1.5s]"></div>
                <span className="text-sm text-gray-400 uppercase tracking-wider">BONUS CONTENT</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                <span className="text-yellow-400">Free</span> Resources
              </h3>
              <p className="text-gray-400 mb-4">Premium <span className="text-yellow-300">tools & templates</span> valued at $500+</p>
              
              <div className="space-y-2 mb-6">
                <p className="text-sm text-green-400">✅ 50+ Canva templates</p>
                <p className="text-sm text-green-400">✅ Viral hooks database</p>
                <p className="text-sm text-green-400">✅ Content calendar system</p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-500 line-through text-sm">$500 value</p>
                <p className="text-3xl font-bold text-white">FREE <span className="text-sm text-gray-400 font-normal">limited time</span></p>
                <p className="text-xs text-yellow-400">No credit card required!</p>
              </div>
              
              <Link
                href="https://anyrxo.gumroad.com"
                target="_blank"
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 text-center block group-hover:scale-105"
              >
                Get Free Access →
              </Link>
            </div>
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
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-left ${blogAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
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
            </div>

            {/* Blog Post 2 */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-up ${blogAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
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
            </div>

            {/* Blog Post 3 */}
            <div className={`testimonial-card card-hover hover-glow group scroll-fade-right ${blogAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
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

      {/* FAQ Section - Handle Objections */}
      <section className="section-spacing bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">Everything you need to know before joining</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">Do I need experience to start?</h3>
              <p className="text-gray-300">
                Absolutely not! All courses start from zero and take you step-by-step. 
                <strong className="text-white"> 73% of our successful students had ZERO followers</strong> when they started. 
                The system works for complete beginners.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">How quickly will I see results?</h3>
              <p className="text-gray-300">
                Most students see their first viral post within <strong className="text-white">7-14 days</strong>. 
                The average student hits 10K followers in their <strong className="text-white">first 30 days</strong> 
                and starts monetizing by day 60. Results depend on your consistency.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">What if it doesn't work for me?</h3>
              <p className="text-gray-300">
                We offer a <strong className="text-white">30-day money-back guarantee</strong>. 
                If you follow the system and don't see results, we'll refund every penny. 
                <strong className="text-white"> Less than 2% of students</strong> ever request refunds 
                because the system actually works.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">How much time do I need to invest?</h3>
              <p className="text-gray-300">
                Just <strong className="text-white">30-60 minutes per day</strong> is enough to see results. 
                Our automation systems save you 40+ hours per week. Many students manage everything 
                as a side hustle while working full-time jobs.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-6 border border-zinc-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold mb-3 text-white">Is the price going up?</h3>
              <p className="text-gray-300">
                Yes. We increase prices as we add more content and success stories. 
                <strong className="text-white"> Prices already increased 3 times this year</strong>. 
                Lock in today's price before the next increase. You get lifetime access 
                to all future updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-spacing relative overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 animate-gradient"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div
            ref={ctaAnimation.elementRef}
            className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Your Success Story <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Starts Today
              </span>
            </h2>
            
            <p className="text-2xl text-white mb-4 font-medium">
              Join 12,847+ Creators Who Changed Their Lives
            </p>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't wait another day watching others succeed while you struggle. 
              The strategies that took me from <strong className="text-white">$0 to $15K/month</strong> are waiting for you.
              <br /><br />
              <span className="text-yellow-400">⚠️ Prices increase in 48 hours</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                href="/instagram-ignited"
                className="cta-button inline-block text-lg btn-animate animate-glow hover-lift relative px-12 py-4"
              >
                <span className="relative z-10">Start Your Journey Now →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg animate-pulse opacity-50"></div>
              </Link>
              
              <p className="text-gray-400">
                or <Link href="/resources" className="text-blue-400 hover:text-blue-300 underline">browse free resources</Link>
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span> 30-Day Money Back Guarantee
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Lifetime Access
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span> Free Updates Forever
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">✓</span> 24/7 Support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
