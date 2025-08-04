import { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "AI Automation Guide 2025: Complete Business Automation Masterclass",
  description: "The ultimate AI automation guide for business owners. Learn N8N, workflow automation, and AI tools that save 40+ hours/week.",
  openGraph: {
    title: "AI Automation Guide 2025",
    description: "Complete guide to AI automation - proven strategies, tools, and techniques for 2025",
    url: "https://iimagined.ai/blog/ai-automation-guide",
    siteName: "IImagined.ai",
    type: "article",
    images: [{
      url: "https://iimagined.ai/images/ai-automation-guide-og.jpg",
      width: 1200,
      height: 630,
      alt: "AI Automation Guide"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Guide 2025",
    description: "Complete guide to AI automation - proven strategies, tools, and techniques for 2025"
  }
}

export default function AIAutomationGuide() {
  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-purple-400 text-sm font-semibold">AI AUTOMATION TOOLS 2025</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Ultimate AI Automation Guide: <span className="text-purple-400">Save 40+ Hours/Week</span> with Business Automation
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master <span className="text-white font-semibold">N8N automation, workflow tools, and AI business systems</span> that generated <span className="text-green-400 font-bold">$88K/month</span> working just 4 hours daily. Complete step-by-step implementation guide.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
                <span className="text-blue-400 font-semibold">Complete Guide</span>
              </div>
              <div className="bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
                <span className="text-green-400 font-semibold">Proven Systems</span>
              </div>
              <div className="bg-zinc-800/50 px-4 py-2 rounded-full border border-zinc-700">
                <span className="text-purple-400 font-semibold">40+ Hours Saved</span>
              </div>
            </div>

            <Link
              href="/n8n-ai-automations"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl"
            >
              Get The Complete N8N Automation System
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Real AI Automation Results: $88K/Month</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">$47K/mo</div>
                <div className="text-gray-400 text-sm">AI Agency Services</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">$23K/mo</div>
                <div className="text-gray-400 text-sm">Automation Templates</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$18K/mo</div>
                <div className="text-gray-400 text-sm">Course Sales</div>
              </div>
              <div className="bg-zinc-900 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">92%</div>
                <div className="text-gray-400 text-sm">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-y border-blue-500/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Get My Exact N8N Automation System That Generated <span className="text-blue-400">$88K/Month</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Why spend months building these AI automation tools from scratch? Get my complete N8N automation system with 
              <span className="text-white font-semibold"> 50+ pre-built workflows, business automation templates, and the exact AI workflow automation</span> 
              that powers my $88K/month automated business.
            </p>
            
            <Link
              href="/n8n-ai-automations"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl"
            >
              Get The Complete N8N Automation System
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            
            <div className="mt-4 text-sm text-gray-400">
              ⭐ 4.9/5 from 2,400+ students | 🔒 30-day money-back guarantee | 🚀 Save 40+ hours per week
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}