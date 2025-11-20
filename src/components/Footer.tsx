'use client'

import Link from 'next/link'
import SocialIcon from './SocialIcon'
import NumberTicker from './magicui/number-ticker'
import ScrambleText from './magicui/scramble-text'
import ShimmerButton from './magicui/shimmer-button'
import * as analytics from '@/lib/analytics'
import HeroBackground from './HeroBackground'
import { ctaLinks } from '@/config/navigation'

export default function Footer() {
  const currentYear = 2025
  
  const footerLinks = {
    courses: [
      { name: 'Instagram Ignited', href: '/instagram-ignited' },
      { name: 'AI Influencers', href: '/ai-influencers' },
      { name: 'Digital Products', href: '/digital-products' },
      { name: 'AI Automations', href: '/ai-automations' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Free Resources', href: '/resources' }
    ],
    legal: [
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookie-policy' }
    ],
    social: [
      { name: 'Instagram', href: 'https://www.instagram.com/anyrxo/', platform: 'instagram' },
      { name: 'YouTube', href: 'https://www.youtube.com/@anyrxo', platform: 'youtube' },
      { name: 'Twitter', href: 'https://twitter.com/anyrxo', platform: 'twitter' },
      { name: 'TikTok', href: 'https://tiktok.com/@anyro', platform: 'tiktok' },
      { name: 'Newsletter', href: 'https://anyro.beehiiv.com/subscribe', platform: 'beehiiv' }
    ]
  }

  return (
    <footer className="relative bg-zinc-900 border-t border-zinc-800 overflow-hidden">
      <HeroBackground variant="footer" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <ScrambleText
                text="IImagined.ai"
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                scrambleSpeed={1}
                revealSpeed={1}
              />
            </div>
            <p className="text-zinc-200 mb-8 leading-relaxed text-lg">
              Transform your passion into profit with AI automation, viral content systems, and digital product mastery. Join <NumberTicker value={4000} className="text-blue-400 font-semibold" />+ students building their creator empire.
            </p>
            
            {/* Quick Access to Whop */}
            <div className="mb-6">
              <Link
                href={ctaLinks.allAccess}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
                onClick={() => {
                  analytics.trackCTAClick('footer', 'Join Our Community', ctaLinks.allAccess)
                  analytics.trackOutboundLink(ctaLinks.allAccess, 'Join Our Community', 'footer')
                }}
              >
                <ShimmerButton
                  className="shadow-lg"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #2563eb, #9333ea)"
                  borderRadius="9999px"
                >
                  <span className="whitespace-nowrap text-sm md:text-base font-bold px-6 py-3">
                    Join Our Community
                  </span>
                </ShimmerButton>
              </Link>
            </div>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <div
                  key={link.name}
                  onClick={() => analytics.trackSocialClick(link.platform, 'footer')}
                  className="rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:ring-offset-zinc-900"
                >
                  <SocialIcon
                    platform={link.platform as any}
                    variant="color"
                    size={24}
                    href={link.href}
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4">Premium Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-200 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg"
                    onClick={() => analytics.trackNavigation(link.name, link.href, 'footer')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-200 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg"
                    onClick={() => analytics.trackNavigation(link.name, link.href, 'footer')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-200 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg"
                    onClick={() => analytics.trackNavigation(link.name, link.href, 'footer')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

          {/* Disclaimers */}
        <div className="pt-6 border-t border-zinc-800 mb-6">
          <div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-6 max-w-5xl mx-auto">
            <h4 className="text-zinc-500 font-bold mb-3 text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-600" />
              Legal Disclaimer
            </h4>
            <div className="text-zinc-500 text-[10px] leading-relaxed space-y-2 font-mono">
              <p>
                <strong>NOT FINANCIAL ADVICE.</strong> The content provided on IImagined.ai and associated channels is for educational and informational purposes only. We do not guarantee any specific financial results. Your success depends on your execution, market conditions, and individual effort.
              </p>
              <p>
                <strong>EARNINGS DISCLOSURE.</strong> Any revenue figures mentioned are from our own results or verified student case studies. These are exceptional results and not typical. Most people who buy "how-to" information get little to no results because they fail to take action.
              </p>
              <p>
                <strong>AI & AUTOMATION.</strong> Strategies involving AI and third-party platforms (Instagram, Fanvue, etc.) are subject to those platforms' Terms of Service. We teach you how to use these tools effectively, but we do not own or control them.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">II</span>magined.ai. All rights reserved. Created by{' '}
              <Link href="/about" className="text-blue-400 hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg">
                Anyro
              </Link>
            </div>

            {/* Community CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-zinc-200 text-sm">
              <div className="flex items-center gap-2">
                <NumberTicker value={8500} className="text-blue-400 font-semibold" />+
                <span>community members building their empire</span>
              </div>
              <span className="hidden sm:block">•</span>
              <Link
                href={ctaLinks.allAccess}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold hover:underline transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset rounded-lg"
                onClick={() => {
                  analytics.trackCTAClick('footer_bottom', 'Join Community', ctaLinks.allAccess)
                  analytics.trackOutboundLink(ctaLinks.allAccess, 'Join Community', 'footer_bottom')
                }}
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Rich Snippet */}
        <div className="hidden">
          <div itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">IImagined.ai</span>
            <link itemProp="url" href="https://iimagined.ai" />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressCountry">United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
