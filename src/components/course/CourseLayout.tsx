'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

// Value Badge Component - Fixed to TOP RIGHT position
interface ValueBadgeProps {
  value: string
  className?: string
}

export function ValueBadge({ value, className = '' }: ValueBadgeProps) {
  return (
    <div className={`absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10 ${className}`}>
      {value}
    </div>
  )
}

// Module Card Component - Consistent design with proper badge positioning
interface ModuleCardProps {
  number: number
  title: string
  description: string
  color: string
  bgColor: string
  borderColor: string
  whatYouLearn: string[]
  deliverables?: string[]
  tools?: string[]
  value: string
  isVisible: boolean
  staggerClass?: string
}

export function ModuleCard({
  number,
  title,
  description,
  color,
  bgColor,
  borderColor,
  whatYouLearn,
  deliverables = [],
  tools = [],
  value,
  isVisible,
  staggerClass = ''
}: ModuleCardProps) {
  return (
    <div className={`relative ${bgColor} border ${borderColor} rounded-lg p-8 scroll-fade-up card-hover hover-lift ${isVisible ? `visible ${staggerClass}` : ''}`}>
      <ValueBadge value={value} />
      <div className="flex items-start space-x-6">
        <div className={`${color.replace('text-', 'bg-')} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0`}>
          {number}
        </div>
        <div className="flex-1 pr-8"> {/* Add right padding to prevent overlap with badge */}
          <h3 className={`text-2xl font-bold mb-4 ${color}`}>{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-white mb-2">What You'll Learn:</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                {whatYouLearn.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            {(deliverables.length > 0 || tools.length > 0) && (
              <div>
                <h4 className="font-semibold text-white mb-2">{deliverables.length > 0 ? 'Deliverables:' : 'Tools Included:'}</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  {(deliverables.length > 0 ? deliverables : tools).map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Bonus Card Component - Consistent design with corner badges
interface BonusCardProps {
  icon: string
  title: string
  description: string
  value: string
  isVisible: boolean
  staggerClass?: string
}

export function BonusCard({ icon, title, description, value, isVisible, staggerClass = '' }: BonusCardProps) {
  return (
    <div className={`relative bg-gradient-to-br from-gold-900/20 to-yellow-900/20 border border-gold-500/30 rounded-lg p-6 text-center card-hover hover-lift scroll-fade-up ${isVisible ? `visible ${staggerClass}` : ''}`}>
      <ValueBadge value={value} className="bg-gold-500" />
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-3 text-gold-400">{title}</h3>
      <p className="text-gray-400 text-sm pr-8">{description}</p>
    </div>
  )
}

// Problem Card Component - Consistent 6-grid layout
interface ProblemCardProps {
  icon: string
  title: string
  description: string
  isVisible: boolean
  staggerClass?: string
}

export function ProblemCard({ icon, title, description, isVisible, staggerClass = '' }: ProblemCardProps) {
  return (
    <div className={`bg-zinc-900 border border-red-500/20 rounded-lg p-8 text-center card-hover hover-lift scroll-fade-up ${isVisible ? `visible ${staggerClass}` : ''}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-red-400">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

// Testimonial Card Component - Consistent 3-card layout
interface TestimonialCardProps {
  name: string
  role: string
  image: string
  testimonial: string
  result: string
  isVisible: boolean
  staggerClass?: string
}

export function TestimonialCard({ name, role, image, testimonial, result, isVisible, staggerClass = '' }: TestimonialCardProps) {
  return (
    <div className={`testimonial-card card-hover hover-lift group scroll-fade-up ${isVisible ? `visible ${staggerClass}` : ''}`}>
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
        />
        <div>
          <h4 className="font-semibold group-hover:text-pink-400 transition-colors duration-300">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
        {testimonial}
      </p>
      <div className="bg-pink-600/10 border border-pink-600/30 rounded-lg p-3 group-hover:bg-pink-600/20 group-hover:border-pink-500/50 transition-all duration-300">
        <p className="text-sm font-semibold text-pink-300 group-hover:text-pink-200 transition-colors duration-300">{result}</p>
      </div>
    </div>
  )
}

// FAQ Card Component - Consistent design
interface FAQItem {
  question: string
  answer: string
  isVisible: boolean
  staggerClass?: string
}

export function FAQCard({ question, answer, isVisible, staggerClass = '' }: FAQItem) {
  return (
    <div className={`bg-zinc-800 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${isVisible ? `visible ${staggerClass}` : ''}`}>
      <h3 className="text-xl font-bold mb-3 text-pink-400">{question}</h3>
      <p className="text-gray-300">{answer}</p>
    </div>
  )
}

// Pricing Comparison Component - 3-option layout
interface PricingOption {
  name: string
  description: string
  price: string
  originalPrice?: string
  features: string[]
  badge?: string
  badgeColor?: string
  disabled?: boolean
  popular?: boolean
}

interface PricingComparisonProps {
  options: PricingOption[]
  isVisible: boolean
}

export function PricingComparison({ options, isVisible }: PricingComparisonProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {options.map((option, index) => (
        <div
          key={index}
          className={`${
            option.disabled 
              ? 'bg-zinc-900 border border-zinc-700' 
              : option.popular 
                ? 'bg-gradient-to-br from-pink-900/30 to-purple-900/30 border-2 border-pink-500' 
                : 'bg-zinc-900 border border-zinc-700'
          } rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up relative ${
            isVisible ? `visible scroll-stagger-${index + 1}` : ''
          }`}
        >
          {option.badge && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className={`${option.badgeColor || 'bg-red-500'} text-white px-4 py-2 rounded-full font-bold text-sm ${option.popular ? 'animate-pulse' : ''}`}>
                {option.badge}
              </div>
            </div>
          )}

          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-2 ${option.disabled ? 'text-gray-400' : option.popular ? 'text-pink-400' : 'text-white'}`}>
              {option.name}
            </h3>
            <p className={`${option.disabled ? 'text-gray-500' : 'text-gray-300'} mb-4`}>{option.description}</p>
            
            {option.originalPrice && (
              <div className="flex items-center justify-center space-x-3 mb-2">
                <span className="text-gray-400 line-through text-2xl">{option.originalPrice}</span>
                {!option.disabled && <span className="text-green-400 font-bold text-lg">Save {option.originalPrice.replace('$', '').replace(',', '') - option.price.replace('$', '').replace(',', '') > 0 ? `$${option.originalPrice.replace('$', '').replace(',', '') - option.price.replace('$', '').replace(',', '')}` : ''}!</span>}
              </div>
            )}
            
            <div className={`text-6xl font-bold mb-2 ${option.disabled ? 'text-gray-500' : option.popular ? 'text-pink-400' : 'text-white'}`}>
              {option.price}
            </div>
            <p className={option.disabled ? 'text-gray-500' : 'text-gray-300'}>One-time payment, lifetime access</p>
          </div>

          <div className="space-y-3 text-left mb-8">
            {option.features.map((feature, featureIndex) => (
              <p key={featureIndex} className={option.disabled ? 'text-gray-500' : 'text-gray-300'}>
                ✓ {feature}
              </p>
            ))}
          </div>

          {option.disabled ? (
            <div className="bg-gray-800 text-gray-500 py-3 px-6 rounded-lg font-bold">
              Not Available
            </div>
          ) : (
            <Link 
              href="#" 
              className={`cta-button inline-block w-full text-center mb-4 btn-animate ${option.popular ? 'animate-glow' : ''} hover-lift`}
            >
              {option.popular ? '🚀 Secure Your Spot NOW' : 'Get Started'} - {option.price}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

// Hero Section Component
interface HeroSectionProps {
  badge?: string
  badgeColor?: string
  title: string | React.ReactNode
  description: string | React.ReactNode
  ctaText: string
  ctaLink: string
  socialProof: {
    images: string[]
    rating: number
    text: string
  }
  stats?: Array<{
    value: string
    label: string
    color: string
  }>
  isVisible: boolean
}

export function HeroSection({ 
  badge, 
  badgeColor = 'bg-green-600/30 text-green-300', 
  title, 
  description, 
  ctaText, 
  ctaLink, 
  socialProof, 
  stats,
  isVisible 
}: HeroSectionProps) {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-5xl mx-auto scroll-fade-up ${isVisible ? 'visible' : ''}`}>
          {badge && (
            <div className={`${badgeColor} border rounded-lg p-3 mb-6 inline-block card-hover`}>
              <p className="font-semibold">{badge}</p>
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            {description}
          </p>

          <Link href={ctaLink} className="cta-button inline-block text-lg mb-8 btn-animate animate-glow hover-lift">
            {ctaText}
          </Link>

          {/* Social Proof */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {socialProof.images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                ))}
              </div>
              <div className="flex text-yellow-400">
                {'★'.repeat(socialProof.rating)}
              </div>
              <span className="text-sm text-gray-400">{socialProof.text}</span>
            </div>
          </div>

          {/* Stats */}
          {stats && (
            <div className={`grid grid-cols-${Math.min(stats.length, 3)} gap-4 max-w-2xl mx-auto`}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-zinc-900/50 rounded-lg p-4">
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Section Header Component
interface SectionHeaderProps {
  badge?: string
  badgeColor?: string
  title: string | React.ReactNode
  description?: string | React.ReactNode
  isVisible: boolean
}

export function SectionHeader({ badge, badgeColor = 'text-gray-400', title, description, isVisible }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 scroll-fade-up ${isVisible ? 'visible' : ''}`}>
      {badge && <p className={`text-sm ${badgeColor} uppercase tracking-wider mb-4`}>{badge}</p>}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      {description && <p className="text-xl text-gray-400">{description}</p>}
    </div>
  )
}