'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface StickyCTAProps {
  price: string
  originalPrice?: string
  ctaText?: string
  ctaLink: string
  productName: string
}

export default function StickyCTA({ 
  price, 
  originalPrice, 
  ctaText = "Get Instant Access", 
  ctaLink,
  productName 
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  const isPolar = ctaLink.includes('polar.sh')
  const polarProps = isPolar ? { 'data-polar-checkout': true, 'data-polar-checkout-theme': 'dark' } : {}

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 600px (approx hero height)
      const show = window.scrollY > 600
      if (show !== isVisible) {
        setIsVisible(show)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:hidden"
        >
          <div className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-4 flex items-center justify-between max-w-md mx-auto ring-1 ring-white/5">
            <div className="flex flex-col">
              <span className="text-xs text-zinc-400 font-medium">{productName}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-white">{price}</span>
                {originalPrice && (
                  <span className="text-xs text-zinc-500 line-through decoration-zinc-500/50">{originalPrice}</span>
                )}
              </div>
            </div>
            <Link 
              href={ctaLink}
              {...polarProps as any}
              className="bg-white text-black px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-zinc-200 transition-colors"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
