'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import ScrambleText from '@/components/magicui/scramble-text'

export default function CookiePolicyPage() {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-dark relative">
      {/* Beautiful Pulsing Background - Same as Homepage */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl animate-pulse opacity-60"
          style={{ 
            left: '15%', 
            top: '5%',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-600/15 to-purple-600/15 blur-2xl animate-pulse opacity-50"
          style={{ 
            right: '5%', 
            bottom: '15%',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/15 to-blue-600/15 blur-xl animate-pulse opacity-40"
          style={{ 
            left: '50%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            animationDuration: '5s',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Magical Title */}
          <div 
            ref={titleAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <ScrambleText
                text="Cookie Policy"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                scrambleSpeed={1}
                revealSpeed={1}
              />
            </div>
            <TypingAnimation
              text="We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content across our platform."
              className="text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto"
              duration={30}
            />
          </div>

          {/* Content */}
          <div 
            ref={contentAnimation.elementRef}
            className={`space-y-8 text-zinc-200 leading-relaxed scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="text-sm text-zinc-400 mb-8">
              <p><strong>Effective Date:</strong> January 1, 2025</p>
              <p><strong>Last Updated:</strong> January 1, 2025</p>
            </div>

            <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">What Are Cookies?</h2>
              <p className="text-lg mb-4">
                Cookies are small text files that websites place on your device to store information about your preferences, login status, and browsing behavior. They help us provide you with a better, more personalized experience.
              </p>
              <p className="text-zinc-300 text-sm">
                By using IImagined.ai, you consent to our use of cookies as described in this policy. You can manage your cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Essential Cookies</h3>
                  <p className="text-zinc-300 mb-3">These cookies are necessary for our website to function properly and cannot be disabled.</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• Authentication and login session management</li>
                    <li>• Shopping cart and payment processing functionality</li>
                    <li>• Security features and fraud prevention</li>
                    <li>• Load balancing and site performance</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Performance Cookies</h3>
                  <p className="text-zinc-300 mb-3">These cookies help us understand how visitors interact with our website.</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• Google Analytics for traffic analysis and user behavior</li>
                    <li>• Page load times and site performance metrics</li>
                    <li>• Error reporting and debugging information</li>
                    <li>• A/B testing and conversion optimization</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Functional Cookies</h3>
                  <p className="text-zinc-300 mb-3">These cookies enable enhanced functionality and personalization.</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• User preferences and customization settings</li>
                    <li>• Language and region preferences</li>
                    <li>• Course progress tracking and bookmarks</li>
                    <li>• Chat and support widget functionality</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-semibold mb-4 text-orange-300">Marketing Cookies</h3>
                  <p className="text-zinc-300 mb-3">These cookies are used to deliver relevant advertisements and track campaign performance.</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• Facebook Pixel for social media advertising</li>
                    <li>• Google Ads tracking and conversion measurement</li>
                    <li>• Email marketing integration and tracking</li>
                    <li>• Affiliate program tracking and commissions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">Third-Party Services</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-300">Analytics & Tracking</h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• <strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                    <li>• <strong>Hotjar:</strong> User session recordings and heatmaps</li>
                    <li>• <strong>Mixpanel:</strong> Event tracking and user journey analytics</li>
                    <li>• <strong>Facebook Pixel:</strong> Social media advertising optimization</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold mb-4 text-yellow-300">Platform Integration</h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• <strong>Stripe:</strong> Payment processing and subscription management</li>
                    <li>• <strong>Whop:</strong> Course delivery and community access</li>
                    <li>• <strong>Intercom:</strong> Customer support chat functionality</li>
                    <li>• <strong>ConvertKit:</strong> Email marketing and automation</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-cyan-900/10 border border-cyan-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Managing Your Cookie Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-cyan-300">Browser Settings</h3>
                  <p className="text-zinc-300 mb-3">Most browsers allow you to control cookies through their settings:</p>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                    <li>• <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                    <li>• <strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                    <li>• <strong>Edge:</strong> Settings → Cookies and site permissions</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 rounded-lg p-4">
                  <h4 className="font-semibold text-cyan-300 mb-2">Important Note</h4>
                  <p className="text-sm text-zinc-300">
                    Disabling certain cookies may impact your experience on our website. Essential cookies cannot be disabled as they are necessary for basic functionality.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-green-400">Cookie Consent Management</h2>
              <div className="space-y-6">
                <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-300">Your Consent</h3>
                  <p className="text-zinc-300 mb-3">
                    By continuing to use our website, you consent to our use of cookies. For first-time visitors, we may display a cookie banner allowing you to accept or customize your preferences.
                  </p>
                  <div className="space-y-2 text-sm text-zinc-400">
                    <p>• You can withdraw consent at any time through browser settings</p>
                    <p>• Some cookies are essential and cannot be disabled</p>
                    <p>• Disabling cookies may affect website functionality</p>
                  </div>
                </div>

                <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-300">Opt-Out Options</h3>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <p><strong>Google Analytics:</strong> Use Google's opt-out browser add-on</p>
                    <p><strong>Facebook Pixel:</strong> Adjust ad preferences in your Facebook settings</p>
                    <p><strong>Marketing Cookies:</strong> Use "Do Not Track" browser settings</p>
                    <p><strong>Email Tracking:</strong> Unsubscribe from our mailing list</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-indigo-400">Cookie Retention</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold mb-4 text-indigo-300">Session Cookies</h3>
                  <p className="text-zinc-300 text-sm mb-3">
                    These cookies are temporary and are deleted when you close your browser. They help maintain your session and shopping cart.
                  </p>
                  <p className="text-zinc-400 text-xs">Duration: End of browser session</p>
                </div>
                
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold mb-4 text-indigo-300">Persistent Cookies</h3>
                  <p className="text-zinc-300 text-sm mb-3">
                    These cookies remain on your device for a set period or until you delete them. They remember your preferences and login status.
                  </p>
                  <p className="text-zinc-400 text-xs">Duration: 30 days to 2 years</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Data Security</h2>
              <div className="bg-purple-900/10 border border-purple-500/20 rounded-xl p-6">
                <p className="text-zinc-300 mb-4">
                  We implement appropriate security measures to protect the information collected through cookies. However, no method of transmission over the internet is 100% secure.
                </p>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p>• Cookies are encrypted when containing sensitive information</p>
                  <p>• We regularly review and update our security practices</p>
                  <p>• Third-party services are carefully vetted for security compliance</p>
                  <p>• We never store payment information in cookies</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-orange-400">International Transfers</h2>
              <p className="text-zinc-300 mb-4">
                Some of our third-party services may process cookie data outside your country of residence. We ensure appropriate safeguards are in place for international data transfers.
              </p>
              <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-4">
                <p className="text-sm text-zinc-400">
                  By using our services, you consent to the processing of your cookie data in countries with different privacy laws than your own.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-pink-400">Children's Privacy</h2>
              <div className="bg-pink-900/10 border border-pink-500/20 rounded-xl p-6">
                <p className="text-zinc-300 mb-3">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children through cookies or any other means.
                </p>
                <p className="text-sm text-zinc-400">
                  If you believe we have collected information from a child under 13, please contact us immediately so we can delete this information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">Updates to This Policy</h2>
              <p className="text-zinc-300 mb-4">
                We may update this Cookie Policy periodically to reflect changes in our practices or applicable laws. We'll notify you of significant changes through our website or email.
              </p>
              <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-4">
                <p className="text-sm text-zinc-400">
                  Continued use of our website after policy updates constitutes acceptance of the revised terms.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Questions About Cookies?</h2>
              <p className="text-zinc-200 mb-6 text-lg">
                Need help managing your cookie preferences or have questions about our cookie practices?
              </p>
              <div className="space-y-2">
                <p className="text-blue-300">
                  <strong>Privacy Team:</strong>{' '}
                  <a href="mailto:privacy@iimagined.ai" className="text-blue-400 hover:text-blue-300 underline">
                    privacy@iimagined.ai
                  </a>
                </p>
                <p className="text-purple-300">
                  <strong>Technical Support:</strong>{' '}
                  <a href="mailto:support@iimagined.ai" className="text-purple-400 hover:text-purple-300 underline">
                    support@iimagined.ai
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}