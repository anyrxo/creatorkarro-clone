import Link from 'next/link'
import SocialIcon from './SocialIcon'
import NumberTicker from './magicui/number-ticker'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    courses: [
      { name: 'Instagram Ignited', href: '/instagram-ignited' },
      { name: 'Digital Products', href: '/digital-products' },
      { name: 'N8N AI Automations', href: '/n8n-ai-automations' },
      { name: 'AI Influencers', href: '/ai-influencers' },
      { name: 'ComfyUI & Workflows', href: '/comfyui-workflows' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Free Resources', href: '/resources' },
      { name: 'About Anyro', href: '/about' }
    ],
    legal: [
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' }
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
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">II</span>magined<span className="text-blue-400">.ai</span>
            </h3>
            <p className="text-zinc-300 mb-8 leading-relaxed text-lg">
              Transform your passion into profit with AI automation, viral content systems, and digital product mastery. Join <NumberTicker value={4000} className="text-blue-400 font-semibold" />+ students building their creator empire.
            </p>
            
            {/* Quick Access to Whop */}
            <div className="mb-6">
              <Link
                href="https://whop.com/anyro/premium-monthly-0a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                Join Our Community
              </Link>
            </div>
            <div className="flex space-x-4">
              {footerLinks.social.map((link) => (
                <SocialIcon
                  key={link.name}
                  platform={link.platform as any}
                  variant="color"
                  size={24}
                  href={link.href}
                  target="_blank"
                  className="hover:scale-110 transition-transform duration-200"
                />
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
                    className="text-zinc-300 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4"
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
                    className="text-zinc-300 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4"
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
                    className="text-zinc-300 hover:text-white transition-all duration-200 hover:translate-x-1 block py-1 border-l-2 border-transparent hover:border-blue-400 pl-3 hover:pl-4"
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
            <div className="flex flex-col sm:flex-row items-center gap-4 text-zinc-300 text-sm">
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
