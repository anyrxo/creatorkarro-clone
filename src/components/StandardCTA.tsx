'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { ChevronRight } from 'lucide-react'

/**
 * Standardized CTA Button Component
 *
 * VARIANTS:
 * - primary: Main action buttons (Get Started, Enroll Now) - Gradient shimmer
 * - secondary: Supporting actions (Learn More) - Solid gradient
 * - tertiary: Link-style actions (View Course) - Text with hover effect
 * - outline: Border only, transparent bg - for secondary actions
 */

interface StandardCTAProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline'
  text: string
  href: string
  external?: boolean
  showIcon?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function StandardCTA({
  variant = 'primary',
  text,
  href,
  external = false,
  showIcon = true,
  className = '',
  size = 'md'
}: StandardCTAProps) {
  
  const isPolar = href.includes('polar.sh')
  const polarProps = isPolar ? { 'data-polar-checkout': true, 'data-polar-checkout-theme': 'dark' } : {}

  const linkProps = {
    ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    ...polarProps
  }

  // Size mappings
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  // PRIMARY: Shimmer gradient button (Get Started, Enroll Now)
  if (variant === 'primary') {
    return (
      <Link href={href} {...(linkProps as any)} className={`inline-block ${className}`}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ShimmerButton
            className="shadow-2xl"
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
            background="linear-gradient(135deg, #2563eb, #9333ea)"
            borderRadius="12px"
          >
            <span className={`font-bold flex items-center gap-2 ${sizeClasses[size]}`}>
              {text}
              {showIcon && <ChevronRight size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />}
            </span>
          </ShimmerButton>
        </motion.div>
      </Link>
    )
  }

  // SECONDARY: Solid gradient button (Learn More)
  if (variant === 'secondary') {
    return (
      <Link href={href} {...(linkProps as any)} className={`inline-block ${className}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300 flex items-center gap-2 ${sizeClasses[size]}`}
        >
          {text}
          {showIcon && <ChevronRight size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />}
        </motion.button>
      </Link>
    )
  }

  // OUTLINE: Border only button
  if (variant === 'outline') {
    return (
      <Link href={href} {...(linkProps as any)} className={`inline-block ${className}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`font-semibold bg-transparent border-2 border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-xl transition-all duration-300 flex items-center gap-2 ${sizeClasses[size]}`}
        >
          {text}
          {showIcon && <ChevronRight size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />}
        </motion.button>
      </Link>
    )
  }

  // TERTIARY: Text link with hover effect (View Course)
  return (
    <Link href={href} {...(linkProps as any)} className={`inline-block ${className}`}>
      <motion.span
        whileHover={{ x: 5 }}
        className={`font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2 ${
          size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
        }`}
      >
        {text}
        {showIcon && <ChevronRight size={size === 'sm' ? 16 : size === 'lg' ? 20 : 18} />}
      </motion.span>
    </Link>
  )
}

/**
 * USAGE EXAMPLES:
 *
 * Primary CTA (Main Action):
 * <StandardCTA variant="primary" text="Get Started" href="/course" />
 * <StandardCTA variant="primary" text="Enroll Now" href="/checkout" size="lg" />
 *
 * Secondary CTA (Supporting Action):
 * <StandardCTA variant="secondary" text="Learn More" href="/about" />
 * <StandardCTA variant="secondary" text="View Details" href="/details" size="sm" />
 *
 * Tertiary CTA (Link Style):
 * <StandardCTA variant="tertiary" text="View Course" href="/course" />
 * <StandardCTA variant="tertiary" text="Read More" href="/blog" showIcon={false} />
 */
