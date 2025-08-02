import Link from 'next/link'
import SocialIcon from './SocialIcon'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    courses: [
      { name: 'Instagram Ignited', href: '/instagram-ignited' },
      { name: 'Digital Products', href: '/digital-products' },
      { name: 'AI Automation Agency', href: '/ai-automation-agency' }
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
              IImagined<span className="text-blue-400">.ai</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Master Instagram growth, AI automation, and digital product creation. Join 127K+ creators building profitable online businesses.
            </p>
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
            <ul className="space-y-2">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
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
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
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
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
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
              © {currentYear} IImagined.ai. All rights reserved. Created by{' '}
              <Link href="/about" className="text-blue-400 hover:text-blue-300">
                Anyro
              </Link>
            </div>

            {/* Newsletter CTA */}
            <div className="text-gray-400 text-sm">
              Join 127K+ creators •{' '}
              <Link
                href="https://anyro.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                Subscribe to Newsletter
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
