'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import * as analytics from '@/lib/analytics'

interface DropdownItem {
  name: string
  href: string
}

interface NavigationItem {
  name: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: DropdownItem[]
  external?: boolean
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
      setIsMenuOpen(false)
    }
  }, [isMenuOpen])

  // Keyboard shortcut for closing menu and dropdowns (Escape key)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        setIsCoursesOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const mainNavigation: NavigationItem[] = [
    { name: 'Story', href: '/story' },
    {
      name: 'Courses',
      href: '#',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Instagram Ignited', href: '/instagram-ignited' },
        { name: 'AI Influencers', href: '/ai-influencers' },
        { name: 'Digital Products', href: '/digital-products' },
        { name: 'FX Trading Mastery', href: '/fx-trading' }
      ]
    },
    { name: 'Resources', href: '/resources' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const allNavigation: NavigationItem[] = [...mainNavigation, { name: 'Join', href: 'https://whop.com/iimagined/all-access-reimagined/', external: true }]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-xl border-b border-zinc-800 glass-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo - Far Left */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => analytics.trackNavigation('Logo', '/', 'main_nav')}
          >
            <Image
              src="/anyro.webp"
              alt="Anyro"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold whitespace-nowrap">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">II</span>magined
            </span>
          </Link>

          {/* Desktop Navigation - Centered with flex-grow */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="nav-pill flex items-center space-x-1">
              {mainNavigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative group"
                      onMouseLeave={() => setIsCoursesOpen(false)}
                    >
                      <button
                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-zinc-700/50 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                        onMouseEnter={() => setIsCoursesOpen(true)}
                        onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            setIsCoursesOpen(!isCoursesOpen)
                          }
                          if (e.key === 'Escape') {
                            setIsCoursesOpen(false)
                          }
                        }}
                        aria-expanded={isCoursesOpen}
                        aria-haspopup="true"
                        aria-label={`${item.name} menu`}
                      >
                        {item.name}
                        <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <div
                        role="menu"
                        aria-label={`${item.name} dropdown menu`}
                        className={`absolute top-full left-0 mt-2 w-56 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] py-2 z-50 transition-all duration-300 ease-out glass-premium ${
                          isCoursesOpen
                            ? 'opacity-100 visible transform translate-y-0 scale-100'
                            : 'opacity-0 invisible transform -translate-y-4 scale-95'
                        }`}
                      >
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className={`block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300 hover:transform hover:translate-x-2 rounded-lg mx-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset ${
                              isCoursesOpen ? `opacity-100 delay-${index * 50}` : 'opacity-0'
                            }`}
                            style={{ transitionDelay: isCoursesOpen ? `${index * 50}ms` : '0ms' }}
                            onClick={() => analytics.trackNavigation(dropdownItem.name, dropdownItem.href, 'dropdown')}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-zinc-700/50 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                      onClick={() => analytics.trackNavigation(item.name, item.href, 'main_nav')}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Whop Community - Far Right */}
          <div className="hidden md:block">
            <Link
              href="https://whop.com/iimagined/all-access-reimagined/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-pill px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] backdrop-blur-sm border-blue-500/50 hover:border-blue-400/50 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
              onClick={() => {
                analytics.trackCTAClick('header_nav', 'JOIN', 'https://whop.com/iimagined/all-access-reimagined/')
                analytics.trackOutboundLink('https://whop.com/iimagined/all-access-reimagined/', 'JOIN', 'header_nav')
              }}
            >
              JOIN
            </Link>
          </div>

          {/* Mobile menu button - positioned to the right */}
          <div className="md:hidden ml-auto">
            <button
              className="p-2 text-gray-300 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-lg"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen)
                if (!isMenuOpen) {
                  analytics.trackEvent('mobile_menu_opened', { location: 'header' })
                }
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu backdrop */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 z-40 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className={`lg:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 transition-all duration-300 ease-in-out z-50 shadow-2xl ${
            isMenuOpen
              ? 'opacity-100 transform translate-y-0 visible'
              : 'opacity-0 transform -translate-y-4 invisible'
          }`}
        >
          <div className="px-4 py-6 space-y-4">
            {allNavigation.map((item, index) => (
              <div
                key={item.name}
                className={`transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? `transform translate-x-0 opacity-100 delay-${index * 75}`
                    : 'transform -translate-x-8 opacity-0'
                }`}
              >
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg"
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    >
                      {item.name}
                      <ChevronDown size={16} className={`transform transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`ml-4 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                      isCoursesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg ${
                            isCoursesOpen
                              ? `transform translate-x-0 opacity-100 delay-${dropdownIndex * 50}`
                              : 'transform -translate-x-4 opacity-0'
                          }`}
                          onClick={() => {
                            analytics.trackNavigation(dropdownItem.name, dropdownItem.href, 'mobile')
                            setIsMenuOpen(false)
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg ${
                      item.external
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-center hover:from-blue-500 hover:to-purple-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => {
                      if (item.external) {
                        analytics.trackCTAClick('mobile_menu', item.name, item.href)
                        analytics.trackOutboundLink(item.href, item.name, 'mobile_menu')
                      } else {
                        analytics.trackNavigation(item.name, item.href, 'mobile')
                      }
                      setIsMenuOpen(false)
                    }}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
