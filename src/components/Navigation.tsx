'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
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
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-xl border-b border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={() => analytics.trackNavigation('Logo', '/', 'main_nav')}>
              <Image src="/anyro.webp" alt="Anyro" width={40} height={40} className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold whitespace-nowrap">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">II</span>magined
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center space-x-1">
                {mainNavigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.hasDropdown ? (
                      <div className="relative group" onMouseLeave={() => setIsCoursesOpen(false)}>
                        <button
                          className="flex items-center px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-zinc-700/50"
                          onMouseEnter={() => setIsCoursesOpen(true)}
                          onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                        >
                          {item.name}
                          <ChevronDown size={16} className={`ml-1 transition-transform ${isCoursesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isCoursesOpen && (
                          <div className="absolute top-full left-0 mt-2 w-56 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-xl shadow-2xl py-2 z-50">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-5 py-3 text-sm text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300"
                                onClick={() => analytics.trackNavigation(dropdownItem.name, dropdownItem.href, 'dropdown')}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 rounded-full hover:bg-zinc-700/50"
                        onClick={() => analytics.trackNavigation(item.name, item.href, 'main_nav')}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Desktop Join Button */}
            <div className="hidden md:block">
              <Link
                href="https://whop.com/iimagined/all-access-reimagined/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 rounded-full font-semibold"
                onClick={() => {
                  analytics.trackCTAClick('header_nav', 'JOIN', 'https://whop.com/iimagined/all-access-reimagined/')
                  analytics.trackOutboundLink('https://whop.com/iimagined/all-access-reimagined/', 'JOIN', 'header_nav')
                }}
              >
                JOIN
              </Link>
            </div>

            {/* ULTRA SIMPLE Mobile menu button */}
            <button
              className="md:hidden p-3 text-white bg-blue-600 rounded-lg"
              onClick={() => {
                console.log('CLICKED! Current state:', isMenuOpen)
                setIsMenuOpen(!isMenuOpen)
              }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* ULTRA SIMPLE Mobile Menu - Fixed to viewport */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-zinc-900 z-[100] overflow-y-auto">
          <div className="p-6 space-y-4">
            {allNavigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full text-left px-4 py-3 text-white bg-zinc-800 rounded-lg flex items-center justify-between"
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    >
                      {item.name}
                      <ChevronDown size={16} className={isCoursesOpen ? 'rotate-180' : ''} />
                    </button>
                    {isCoursesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-zinc-800"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg ${
                      item.external
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 font-semibold text-center'
                        : 'text-gray-300 hover:text-white bg-zinc-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
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
      )}
    </>
  )
}
