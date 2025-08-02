'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
  color: string
}

// Mock data generator
const generateItems = (start: number, count: number): GalleryItem[] => {
  const colors = [
    'from-purple-600 to-blue-600',
    'from-pink-600 to-purple-600',
    'from-blue-600 to-cyan-600',
    'from-green-600 to-teal-600',
    'from-orange-600 to-red-600',
    'from-indigo-600 to-purple-600'
  ]

  return Array.from({ length: count }, (_, i) => ({
    id: `item-${start + i}`,
    title: `Creation ${start + i + 1}`,
    description: `A mesmerizing digital artwork that pushes the boundaries of creativity and imagination.`,
    image: `/api/placeholder/600/800`,
    color: colors[(start + i) % colors.length]
  }))
}

export function InfiniteGallery() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [items, setItems] = useState<GalleryItem[]>(() => generateItems(0, 12))
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Load more items
  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return
    
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newItems = generateItems(items.length, 12)
    setItems(prev => [...prev, ...newItems])
    
    // Stop after 100 items for demo
    if (items.length + newItems.length >= 100) {
      setHasMore(false)
    }
    
    setLoading(false)
  }, [items.length, loading, hasMore])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = loadMoreRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [loadMore])

  return (
    <section ref={containerRef} className="relative bg-black py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, purple 0%, transparent 50%), radial-gradient(circle at 80% 80%, blue 0%, transparent 50%)',
            y: useTransform(scrollYProgress, [0, 1], [0, -200])
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Infinite Inspiration
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Scroll through an endless gallery of AI-generated masterpieces, 
            each one unique and captivating.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 12) * 0.05
                }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900">
                  {/* Gradient overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />
                  
                  {/* Image container */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    <motion.div
                      className="absolute inset-0 bg-zinc-800"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      {/* Placeholder for actual image */}
                      <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-20`} />
                    </motion.div>
                    
                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-2"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {item.title}
                    </motion.h3>
                    <motion.p 
                      className="text-zinc-400 text-sm"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Tags */}
                    <motion.div 
                      className="flex gap-2 mt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {['AI', 'Digital', 'Art'].map((tag, i) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs bg-white/10 text-white rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                    initial={false}
                  >
                    <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                      View Details
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load more trigger */}
        <div 
          ref={loadMoreRef} 
          className="h-20 flex items-center justify-center mt-12"
        >
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-4"
            >
              <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              <span className="text-zinc-400">Loading more creations...</span>
            </motion.div>
          )}
          
          {!hasMore && items.length > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-zinc-500"
            >
              You've reached the end of the gallery
            </motion.p>
          )}
        </div>

        {/* Floating UI elements */}
        <motion.div
          className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {items.length} items loaded
        </motion.div>
      </div>
    </section>
  )
}