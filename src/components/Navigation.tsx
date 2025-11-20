'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, User, Shield, Flame } from 'lucide-react'
import * as analytics from '@/lib/analytics'
import { getUserStats } from '@/app/actions/gamification'

import ShimmerButton from '@/components/magicui/shimmer-button'

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
  const { user, isSignedIn } = useUser()
  const [isAdmin, setIsAdmin] = useState(false)
  const [streak, setStreak] = useState(0)

  useEffect(() => {
    if (isSignedIn && user?.primaryEmailAddress?.emailAddress) {
      const email = user.primaryEmailAddress.emailAddress
      if (['mannan0010@gmail.com', 'sirenxmedia@gmail.com'].includes(email)) {
        setIsAdmin(true)
      }
      
      // Fetch Streak
      getUserStats().then(stats => setStreak(stats.streak))
    }
  }, [isSignedIn, user])

  const mainNavigation: NavigationItem[] = [
    { name: 'Story', href: '/story' },
        {
          name: 'Systems',
          href: '#',
          hasDropdown: true,
          dropdownItems: [
            { name: 'Instagram Ignited', href: '/instagram-ignited' },
            { name: 'AI Influencers', href: '/ai-influencers' },
            { name: 'Digital Products', href: '/digital-products' },
            { name: 'AI Automations', href: '/ai-automations' }
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
      <header className="fixed top-4 left-4 right-4 z-50 bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2" onClick={() => analytics.trackNavigation('Logo', '/', 'main_nav')}>
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
                
                {/* Admin Link - Desktop */}
                {isAdmin && (
                  <Link
                    href="/admin/users"
                    className="px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 rounded-full flex items-center gap-2"
                  >
                    <Shield size={14} />
                    Admin
                  </Link>
                )}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {!isSignedIn ? (
                <Link 
                  href="/sign-in"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-full transition-all"
                >
                  <span>Sign In</span>
                </Link>
              ) : (
                <div className="flex items-center gap-3">
                   {streak > 0 && (
                     <div className="flex items-center gap-1 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full">
                       <Flame size={14} className="text-orange-500 fill-orange-500 animate-pulse" />
                       <span className="text-xs font-bold text-orange-400">{streak} Day Streak</span>
                     </div>
                   )}
                   <Link href="/learning" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                      My Learning
                   </Link>
                </div>
              )}
              
              <a
                href="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5"
                onClick={() => {
                  analytics.trackCTAClick('header_nav', 'JOIN', 'https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5')
                }}
                data-polar-checkout
                data-polar-checkout-theme="dark"
              >
                <ShimmerButton
                  className="shadow-lg"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #2563eb, #9333ea)"
                  borderRadius="9999px"
                >
                  <span className="whitespace-nowrap text-sm font-bold px-6 py-2">
                    JOIN EMPIRE
                  </span>
                </ShimmerButton>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              {!isSignedIn ? (
                <Link 
                  href="/sign-in"
                  className="text-sm font-medium text-gray-300 hover:text-white"
                >
                  Sign In
                </Link>
              ) : (
                 <Link href="/learning" className="text-sm font-medium text-zinc-300 hover:text-white">
                    My Learning
                 </Link>
              )}
              <button
                className="p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ULTRA SIMPLE Mobile Menu - Fixed to viewport */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-zinc-900 z-[100] overflow-y-auto">
          <div className="p-6 space-y-4">
             {/* Admin Link - Mobile */}
             {isAdmin && (
                <Link
                  href="/admin/users"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-red-400 bg-red-500/10 rounded-lg font-medium flex items-center gap-2 mb-4"
                >
                  <Shield size={16} />
                  Admin Dashboard
                </Link>
             )}

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
