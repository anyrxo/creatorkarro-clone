'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import ScrambleText from '@/components/magicui/scramble-text'

export default function TermsPage() {
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
                text="Terms of Service"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                scrambleSpeed={1}
                revealSpeed={1}
              />
            </div>
            <TypingAnimation
              text="Your agreement with us. These terms govern your use of our courses, community, and all IImagined services."
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
              <h2 className="text-2xl font-bold mb-6 text-blue-400">Agreement to Terms</h2>
              <p className="text-lg mb-4">
                By accessing IImagined.ai ("we," "us," "our") or purchasing any of our courses, joining our community, or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
              </p>
              <p className="text-zinc-300 text-sm">
                If you do not agree with any of these terms, you are prohibited from using or accessing our services. Continued use constitutes acceptance of any updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Service Description</h2>
              
              <div className="space-y-6">
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Digital Courses</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Premium video courses on AI automation, content creation, and digital products</li>
                    <li>• Course materials, templates, and resources delivered digitally</li>
                    <li>• Access provided through third-party platforms (primarily Whop)</li>
                    <li>• Course content and structure subject to updates and improvements</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Community Access</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Private community forums and discussion groups</li>
                    <li>• Direct access to instructors and fellow students</li>
                    <li>• Regular live sessions, Q&As, and mastermind calls</li>
                    <li>• Networking opportunities with other course members</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-xl font-semibold mb-4 text-pink-300">Support Services</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Technical support for course access and content</li>
                    <li>• Strategic guidance and implementation assistance</li>
                    <li>• Regular content updates and platform improvements</li>
                    <li>• Priority support for premium members</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-red-400">Prohibited Uses</h2>
              <div className="space-y-4">
                <p>You may not use our services for any unlawful purpose or in any way that could damage, disable, or impair our services. Specifically prohibited:</p>
                <ul className="space-y-3 text-zinc-300">
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>Content Redistribution:</strong> Sharing, reselling, or redistributing course materials without explicit written permission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>Account Sharing:</strong> Allowing others to access your account or sharing login credentials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>Reverse Engineering:</strong> Attempting to copy, modify, or create derivative works from our content</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>Harmful Activities:</strong> Using our platform to harass others, spread misinformation, or engage in illegal activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">•</span>
                    <span><strong>System Abuse:</strong> Attempting to hack, overwhelm, or otherwise compromise our systems</span>
                  </li>
                </ul>
                <p className="text-sm text-zinc-400 mt-4">
                  Violation of these terms may result in immediate termination of access without refund.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">Payment Terms</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-blue-300">Course Purchases</h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• All prices are in USD and subject to change</li>
                    <li>• Payment processed securely through Stripe</li>
                    <li>• Immediate access granted upon successful payment</li>
                    <li>• No recurring charges for one-time purchases</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-green-300">Subscription Services</h3>
                  <ul className="space-y-2 text-sm text-zinc-300">
                    <li>• Monthly subscriptions auto-renew unless cancelled</li>
                    <li>• Cancel anytime through your account dashboard</li>
                    <li>• Refunds prorated only in specific circumstances</li>
                    <li>• Price changes communicated 30 days in advance</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Intellectual Property Rights</h2>
              <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-xl p-6">
                <p className="mb-4 text-zinc-300">All content, including but not limited to courses, videos, text, graphics, logos, and software, is the exclusive property of IImagined.ai and protected by copyright, trademark, and other intellectual property laws.</p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Your License</h4>
                    <p className="text-sm text-zinc-300">We grant you a limited, non-exclusive, non-transferable license to access and use our content for personal educational purposes only.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Restrictions</h4>
                    <p className="text-sm text-zinc-300">You may not modify, distribute, transmit, display, reproduce, or create derivative works from our content without express written consent.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cyan-300 mb-2">Termination</h4>
                    <p className="text-sm text-zinc-300">Your license terminates immediately upon breach of these terms or termination of your account.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-indigo-400">Disclaimers & Limitations</h2>
              <div className="space-y-6">
                <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-300">Educational Purpose</h3>
                  <p className="text-zinc-300 text-sm">
                    Our courses are for educational purposes only. We do not guarantee specific results, income, or success. Your results depend on your effort, implementation, and market conditions beyond our control.
                  </p>
                </div>
                
                <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-orange-300">No Warranties</h3>
                  <p className="text-zinc-300 text-sm">
                    Services are provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
                  </p>
                </div>

                <div className="bg-red-900/10 border border-red-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3 text-red-300">Limitation of Liability</h3>
                  <p className="text-zinc-300 text-sm">
                    In no event shall IImagined.ai be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or use, regardless of the theory of liability.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-green-400">User Responsibilities</h2>
              <div className="bg-green-900/10 border border-green-500/20 rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Account Security</h4>
                    <p className="text-sm text-zinc-300">You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Accurate Information</h4>
                    <p className="text-sm text-zinc-300">You must provide accurate, current, and complete information during registration and keep it updated.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Compliance</h4>
                    <p className="text-sm text-zinc-300">You must comply with all applicable laws and regulations when using our services.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-2">Community Standards</h4>
                    <p className="text-sm text-zinc-300">Maintain respectful, professional conduct in all community interactions. No spam, harassment, or inappropriate content.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-purple-400">Termination</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold mb-4 text-purple-300">By You</h3>
                  <p className="text-zinc-300 text-sm">
                    You may terminate your account at any time by contacting support. Termination does not entitle you to a refund except as specified in our Refund Policy.
                  </p>
                </div>
                <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30">
                  <h3 className="text-lg font-semibold mb-4 text-purple-300">By Us</h3>
                  <p className="text-zinc-300 text-sm">
                    We may terminate or suspend your access immediately for violations of these terms, fraudulent activity, or other reasons we deem necessary to protect our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-orange-400">Dispute Resolution</h2>
              <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-6">
                <p className="text-zinc-300 mb-4">
                  Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <div className="space-y-2 text-sm text-zinc-400">
                  <p>• Arbitration shall take place in the United States</p>
                  <p>• The arbitrator's decision shall be final and binding</p>
                  <p>• You waive your right to participate in class action lawsuits</p>
                  <p>• Small claims court disputes under $10,000 may be pursued individually</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">Governing Law</h2>
              <p className="text-zinc-300">
                These Terms of Service are governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">Changes to Terms</h2>
              <p className="text-zinc-300 mb-4">
                We reserve the right to modify these terms at any time. Material changes will be communicated via email or prominent notice on our platform. Continued use after changes constitutes acceptance of updated terms.
              </p>
              <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-4">
                <p className="text-sm text-zinc-400">
                  We recommend reviewing these terms periodically to stay informed of any updates that may affect your use of our services.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 text-pink-400">Severability</h2>
              <p className="text-zinc-300">
                If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect. The unenforceable provision will be replaced with an enforceable provision that most closely achieves the original intent.
              </p>
            </section>

            <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/30 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Questions About These Terms?</h2>
              <p className="text-zinc-200 mb-6 text-lg">
                Need clarification on any of these terms? We're here to help.
              </p>
              <div className="space-y-2">
                <p className="text-blue-300">
                  <strong>Legal Inquiries:</strong>{' '}
                  <a href="mailto:legal@iimagined.ai" className="text-blue-400 hover:text-blue-300 underline">
                    legal@iimagined.ai
                  </a>
                </p>
                <p className="text-purple-300">
                  <strong>General Support:</strong>{' '}
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