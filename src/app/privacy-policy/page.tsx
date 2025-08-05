'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import ScrambleText from '@/components/magicui/scramble-text'

export default function PrivacyPolicyPage() {
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
                text="Privacy Policy"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                scrambleSpeed={1}
                revealSpeed={1}
              />
            </div>
            <TypingAnimation
              text="Your privacy matters. Here's how we handle your information to deliver exceptional course experiences and community access."
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
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Overview</h2>
              <p className="text-lg">
                IImagined.ai ("we," "us," "our") operates premium digital courses and community platforms. This Privacy Policy explains how we collect, use, and protect your information when you purchase our courses, join our community, or interact with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Information We Collect</h2>
              
              <div className="space-y-6">
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Purchase Information</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Payment details and billing information</li>
                    <li>• Course enrollment and access records</li>
                    <li>• Whop membership and subscription data</li>
                    <li>• Transaction history and refund requests</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Account Information</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Name, email address, and contact details</li>
                    <li>• Username and profile information</li>
                    <li>• Community participation and engagement data</li>
                    <li>• Course progress and completion status</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl font-semibold mb-4 text-pink-300">Usage Data</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Website navigation and interaction patterns</li>
                    <li>• Course viewing time and engagement metrics</li>
                    <li>• Device information and browser details</li>
                    <li>• IP address and location data (when necessary)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">How We Use Your Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-blue-300">Course Delivery</h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• Provide access to purchased courses</li>
                    <li>• Track progress and completion</li>
                    <li>• Send course updates and materials</li>
                    <li>• Facilitate community interactions</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-green-300">Business Operations</h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• Process payments and subscriptions</li>
                    <li>• Handle customer support requests</li>
                    <li>• Improve our courses and platform</li>
                    <li>• Analyze user engagement patterns</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-purple-300">Marketing & Communication</h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• Send educational content and updates</li>
                    <li>• Promote relevant courses and offers</li>
                    <li>• Share success stories and testimonials</li>
                    <li>• Conduct market research and surveys</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-orange-300">Legal & Compliance</h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• Comply with legal obligations</li>
                    <li>• Prevent fraud and abuse</li>
                    <li>• Enforce our terms of service</li>
                    <li>• Respond to legal requests</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-red-400">Information Sharing</h2>
              <div className="space-y-4">
                <p>We may share your information in the following situations:</p>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>Service Providers:</strong> With trusted third-party providers who help deliver our services (payment processors, hosting providers, email services)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>Consent:</strong> With your explicit consent for specific purposes</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Data Security & Retention</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-300">Security Measures</h3>
                  <p className="text-zinc-300 text-sm">
                    We implement industry-standard security measures including encryption, secure servers, and regular security audits to protect your data. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-300">Data Retention</h3>
                  <p className="text-zinc-300 text-sm">
                    We retain your information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. Course access and community participation data may be retained indefinitely.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-indigo-400">Your Rights</h2>
              <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6">
                <p className="mb-4 text-zinc-300">Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="space-y-2 text-zinc-300">
                  <li>• <strong>Access:</strong> Request copies of your personal data</li>
                  <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your data (subject to limitations)</li>
                  <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                </ul>
                <p className="mt-4 text-sm text-zinc-400">
                  Note: Exercising these rights may impact your ability to access courses and community features you've purchased.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-green-400">Cookies & Tracking</h2>
              <p className="mb-4 text-zinc-300">
                We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. By using our services, you consent to our use of cookies as described in our Cookie Policy.
              </p>
              <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-4">
                <p className="text-sm text-zinc-400">
                  You can manage cookie preferences through your browser settings, but this may affect functionality of our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">International Transfers</h2>
              <p className="text-zinc-300">
                Your information may be transferred to and processed in countries outside your residence, including the United States. We ensure appropriate safeguards are in place to protect your data during international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Updates to This Policy</h2>
              <p className="text-zinc-300 mb-4">
                We may update this Privacy Policy periodically. We'll notify you of significant changes via email or through our platform. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
              <p className="text-zinc-200 mb-6 text-lg">
                Questions about this Privacy Policy? We're here to help.
              </p>
              <div className="space-y-2">
                <p className="text-blue-300">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:privacy@iimagined.ai" className="text-blue-400 hover:text-blue-300 underline">
                    privacy@iimagined.ai
                  </a>
                </p>
                <p className="text-purple-300">
                  <strong>Business Inquiries:</strong>{' '}
                  <a href="mailto:biz@iimagined.ai" className="text-purple-400 hover:text-purple-300 underline">
                    biz@iimagined.ai
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