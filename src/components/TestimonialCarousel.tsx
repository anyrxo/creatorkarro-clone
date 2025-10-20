'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight, Quote, Pause, Play, Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  course: string
  avatar: string
  content: string
  rating?: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
}

export default function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)
  const intervalRef = useRef<NodeJS.Timeout>()

  const goToNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }, [isAnimating, testimonials.length])

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(goToNext, interval)
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, isAutoPlaying, interval, goToNext])

  const current = testimonials[currentIndex]

  return (
    <div
      className="relative max-w-4xl mx-auto"
      role="region"
      aria-label="Customer testimonials carousel"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Main testimonial card */}
      <div className="relative bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-zinc-800 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-50" />
        
        {/* Quote icon */}
        <Quote className="absolute top-8 right-8 w-24 h-24 text-zinc-800/30 rotate-180" />

        {/* Pause/Play Button */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 z-20 p-3 bg-zinc-800/80 hover:bg-zinc-700 rounded-full transition-all duration-200 backdrop-blur-sm"
          aria-label={isAutoPlaying ? "Pause carousel" : "Play carousel"}
        >
          {isAutoPlaying ? (
            <Pause className="w-5 h-5 text-white" />
          ) : (
            <Play className="w-5 h-5 text-white" />
          )}
        </button>

        {/* Content */}
        <div className="relative z-10">
          <div className={cn(
            "transition-all duration-300 ease-out",
            isAnimating ? "opacity-0 transform scale-95" : "opacity-100 transform scale-100"
          )}>
            {/* Avatar and info */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-500/50">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-white">{current.name}</h4>
                <p className="text-sm text-gray-400">{current.role}</p>
                <p className="text-xs text-blue-400 font-medium">{current.course}</p>
              </div>
            </div>

            {/* Rating */}
            {current.rating && (
              <div
                className="flex gap-1 mb-4"
                role="img"
                aria-label={`Rated ${current.rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5",
                      i < current.rating! ? "fill-yellow-400 text-yellow-400" : "text-zinc-700"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
            )}

            {/* Testimonial text */}
            <p className="text-gray-300 leading-relaxed text-lg italic">
              "{current.content}"
            </p>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-gray-400 hover:text-white hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-gray-400 hover:text-white hover:bg-zinc-700/50 transition-all duration-300 hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "transition-all duration-300",
              currentIndex === index
                ? "w-8 h-2 bg-blue-500 rounded-full"
                : "w-2 h-2 bg-zinc-700 rounded-full hover:bg-zinc-600"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Mini testimonials preview */}
      <div className="hidden lg:flex justify-center gap-4 mt-8">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "p-4 rounded-lg border transition-all duration-300 max-w-xs",
              currentIndex === index
                ? "border-blue-500 bg-zinc-800/50 scale-105"
                : "border-zinc-800 bg-zinc-900/30 opacity-60 hover:opacity-100 hover:border-zinc-700"
            )}
          >
            <div className="flex items-center gap-3 mb-2">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="text-sm font-medium text-white">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.course}</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 line-clamp-2 text-left">
              "{testimonial.content}"
            </p>
          </button>
        ))}
      </div>
    </div>
  )
}