import Link from 'next/link'
import SocialIcon from './SocialIcon'
import NumberTicker from './magicui/number-ticker'
import ScrambleText from './magicui/scramble-text'
import * as analytics from '@/lib/analytics'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    courses: [
      { name: 'Instagram Ignited', href: '/instagram-ignited' },
      { name: 'AI Influencers', href: '/ai-influencers' },
      { name: 'Digital Products', href: '/digital-products' },
      { name: 'FX Trading Mastery', href: '/fx-trading' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'FX Calculator', href: '/fx-calc' },
      { name: 'Free Resources', href: '/resources' },
      { name: 'About Anyro', href: '/about' }
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
      {/* Beautiful Pulsing Background - Same as Homepage */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-2xl animate-pulse opacity-40"
          style={{ 
            left: '10%', 
            top: '20%',
            animationDuration: '6s'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-600/8 to-purple-600/8 blur-2xl animate-pulse opacity-30"
          style={{ 
            right: '10%', 
            bottom: '20%',
            animationDuration: '8s',
            animationDelay: '2s'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/8 to-blue-600/8 blur-xl animate-pulse opacity-25"
          style={{ 
            left: '60%', 
            top: '60%', 
            transform: 'translate(-50%, -50%)',
            animationDuration: '7s',
            animationDelay: '4s'
          }}
        />
      </div>

      {/* Heartbeat Grid Pulsing from Center - Footer Version */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center Point - Heart of the pulse */}
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(59, 130, 246, 0.6)',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
            animation: 'pulse 3s infinite ease-in-out'
          }}
        />
        
        {/* Grid Lines radiating from center */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }}>
          <defs>
            <pattern id="footerGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGrid)" />
        </svg>
        
        {/* Pulsing lines from center - Footer version */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
              style={{
                left: '50%',
                top: '40%',
                width: '150px',
                height: '1px',
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                animation: `pulse 3s infinite ease-in-out ${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
      
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
                href="https://whop.com/anyro/premium-monthly-0a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                onClick={() => {
                  analytics.trackCTAClick('footer', 'Join Our Community', 'https://whop.com/anyro/premium-monthly-0a/')
                  analytics.trackOutboundLink('https://whop.com/anyro/premium-monthly-0a/', 'Join Our Community', 'footer')
                }}
              >
                Join Our Community
              </Link>
            </div>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <div
                  key={link.name}
                  onClick={() => analytics.trackSocialClick(link.platform, 'footer')}
                >
                  <SocialIcon
                    platform={link.platform as any}
                    variant="color"
                    size={24}
                    href={link.href}
                    target="_blank"
                    className="hover:scale-110 transition-transform duration-200"
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
                    className="text-zinc-200 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4"
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
                    className="text-zinc-200 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4"
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
                    className="text-zinc-200 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4"
                    onClick={() => analytics.trackNavigation(link.name, link.href, 'footer')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">II</span>magined.ai. All rights reserved. Created by{' '}
              <Link href="/about" className="text-blue-400 hover:text-blue-300">
                Anyro
              </Link>
            </div>

            {/* Community CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-zinc-200 text-sm">
              <div className="flex items-center gap-2">
                <NumberTicker value={4000} className="text-blue-400 font-semibold" />+
                <span>students building their empire</span>
              </div>
              <span className="hidden sm:block">•</span>
              <Link
                href="https://whop.com/anyro/premium-monthly-0a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold hover:underline transition-all duration-200"
                onClick={() => {
                  analytics.trackCTAClick('footer_bottom', 'Join Community', 'https://whop.com/anyro/premium-monthly-0a/')
                  analytics.trackOutboundLink('https://whop.com/anyro/premium-monthly-0a/', 'Join Community', 'footer_bottom')
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
