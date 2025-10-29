'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Simple Hero */}
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Master AI Automation & Instagram Growth
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 mb-8">
            Build $10K+/month businesses with proven AI tools, N8N automation, and social media strategies
          </p>
          <Link
            href="/instagram-ignited"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition"
          >
            Start Learning <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <Link href="/instagram-ignited" className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-3xl font-bold mb-4">Instagram Ignited</h3>
            <p className="text-zinc-400 mb-4">Master Instagram growth, monetization, and content strategies</p>
            <div className="text-blue-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Learn More <ChevronRight size={16} />
            </div>
          </Link>

          <Link href="/n8n-ai-automations" className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-3xl font-bold mb-4">N8N AI Automations</h3>
            <p className="text-zinc-400 mb-4">Build powerful AI workflows and automation systems</p>
            <div className="text-blue-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Learn More <ChevronRight size={16} />
            </div>
          </Link>

          <Link href="/digital-products" className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition">
            <div className="text-5xl mb-4">💳</div>
            <h3 className="text-3xl font-bold mb-4">Digital Products Empire</h3>
            <p className="text-zinc-400 mb-4">Create and sell profitable digital products at scale</p>
            <div className="text-blue-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Learn More <ChevronRight size={16} />
            </div>
          </Link>

          <Link href="/ai-influencers" className="group bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-3xl font-bold mb-4">AI Influencers</h3>
            <p className="text-zinc-400 mb-4">Create virtual influencers with AI-powered content</p>
            <div className="text-blue-400 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
              Learn More <ChevronRight size={16} />
            </div>
          </Link>

        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <div className="text-5xl font-bold text-blue-400 mb-2">127K+</div>
            <div className="text-zinc-400">Students</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-purple-400 mb-2">4.8/5</div>
            <div className="text-zinc-400">Rating</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-green-400 mb-2">$10K+</div>
            <div className="text-zinc-400">Avg Monthly Income</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-zinc-400">Support</div>
          </div>
        </div>
      </div>
    </div>
  )
}
