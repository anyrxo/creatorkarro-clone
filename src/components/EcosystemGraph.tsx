'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Plus, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface EcosystemGraphProps {
  currentCourseId: 'instagram-ignited' | 'ai-influencers' | 'digital-products' | 'ai-automations'
}

export default function EcosystemGraph({ currentCourseId }: EcosystemGraphProps) {
  const courses = [
    {
      id: 'instagram-ignited',
      name: 'Instagram Ignited',
      role: 'Traffic Engine',
      gradient: 'from-orange-500 to-red-600',
      description: 'Generate massive attention'
    },
    {
      id: 'ai-influencers',
      name: 'AI Influencers',
      role: 'Face/Brand',
      gradient: 'from-pink-500 to-purple-600',
      description: 'Scale personal brand'
    },
    {
      id: 'digital-products',
      name: 'Digital Products',
      role: 'Monetization',
      gradient: 'from-green-500 to-emerald-600',
      description: 'Convert traffic to cash'
    },
    {
      id: 'ai-automations',
      name: 'AI Automations',
      role: 'System/Scale',
      gradient: 'from-orange-400 to-red-500',
      description: 'Automate fulfillment'
    }
  ]

  // Sort courses so the current one is first, then the others follow logically
  // Ideally, we want to show the "Missing Pieces" effect
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-1.5 mb-4">
            <span className="text-zinc-300 text-xs font-bold tracking-widest uppercase">The Empire Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Just Build a Course. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Build an Empire.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Most creators fail because they only have one piece of the puzzle. 
            The Empire Pass gives you the entire machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />

          {courses.map((course, index) => {
            const isCurrent = course.id === currentCourseId
            
            return (
              <div key={course.id} className="relative z-10 h-full">
                <div 
                  className={`
                    h-full p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300
                    ${isCurrent 
                      ? `bg-zinc-900/80 border-${course.gradient.split(' ')[1].replace('from-', '')}/50 shadow-xl shadow-${course.gradient.split(' ')[1].replace('from-', '')}/10` 
                      : 'bg-zinc-950/50 border-zinc-800/50 opacity-70 hover:opacity-100 hover:bg-zinc-900'
                    }
                  `}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className={`
                        w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white font-bold
                        bg-gradient-to-br ${course.gradient}
                      `}>
                        {index + 1}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{course.name}</h3>
                      <div className="text-xs font-mono text-zinc-500 uppercase mb-3">{course.role}</div>
                      <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{course.description}</p>
                    </div>
                    
                    {isCurrent ? (
                      <div className="flex items-center gap-2 text-green-400 text-sm font-bold bg-green-500/10 px-3 py-2 rounded-lg w-fit">
                        <CheckCircle className="w-4 h-4" />
                        Included
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-zinc-500 text-sm">
                        <div className="w-4 h-4 border border-zinc-600 rounded-full flex items-center justify-center">
                           <div className="w-2 h-2 bg-zinc-600 rounded-full" />
                        </div>
                        Also in Empire Pass
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Mobile Arrow */}
                {index < courses.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-zinc-700 rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center p-6 bg-zinc-900/50 border border-white/10 rounded-2xl max-w-2xl mx-auto">
             <div className="flex items-center gap-4 text-lg md:text-xl font-medium text-white mb-4">
                <span className="opacity-50">Single Course ($399)</span>
                <ArrowRight className="w-5 h-5 text-zinc-600" />
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Empire Pass ($99/mo)</span>
             </div>
             <p className="text-zinc-400 text-sm mb-6">
               Why pay for just one engine when you can get the entire fleet?
             </p>
             <Link 
               href="/checkout?course=empire-bundle"
               className="w-full md:w-auto bg-white text-black px-8 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
             >
               Upgrade to Empire Pass <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

