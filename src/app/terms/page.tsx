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

            <section className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-700/50 text-sm">
              <h2 className="text-2xl font-bold mb-6 text-blue-400">1. Agreement to Terms</h2>
              <p className="mb-4 text-zinc-300">
                By accessing IImagined.ai ("we," "us," "our") or purchasing any of our courses, joining our community, or using our services, you agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and all applicable laws and regulations. These Terms constitute a legally binding agreement between you and IImagined.ai regarding your use of our Platform.
              </p>
              <p className="text-zinc-400 mb-4">
                <strong>IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, YOU ARE EXPRESSLY PROHIBITED FROM USING OR ACCESSING OUR SERVICES AND MUST DISCONTINUE USE IMMEDIATELY.</strong>
              </p>
              <p className="text-zinc-300">
                We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms by your continued use of the Site after the date such revised Terms are posted.
              </p>
            </section>

            <section className="text-sm">
              <h2 className="text-2xl font-bold mb-6 text-purple-400">2. Intellectual Property Rights</h2>
              <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-700/30 space-y-4">
                <p className="text-zinc-300">
                  Unless otherwise indicated, the Site and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
                </p>
                <p className="text-zinc-300">
                  The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
                <p className="text-zinc-300">
                  Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content, and the Marks.
                </p>
              </div>
            </section>

            <section className="text-sm">
              <h2 className="text-2xl font-bold mb-6 text-red-400">3. User Representations & Prohibited Activities</h2>
              <div className="bg-red-900/10 border border-red-500/20 rounded-2xl p-8 space-y-4">
                <p className="text-zinc-300">
                  By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
                </p>
                <p className="text-zinc-300">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                </p>
                <ul className="space-y-2 text-zinc-400 list-disc pl-5">
                  <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                  <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
                  <li>Engage in unauthorized framing of or linking to the Site.</li>
                  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                  <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                  <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                  <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                  <li>Sell or otherwise transfer your profile.</li>
                </ul>
              </div>
            </section>

            <section className="text-sm">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">4. Purchases and Payment</h2>
              <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-xl p-6 space-y-4">
                <p className="text-zinc-300">
                  We accept the following forms of payment: Visa, Mastercard, American Express, Discover, and PayPal via our secure payment processors (Stripe, Polar, Whop). You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update your account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars.
                </p>
                <p className="text-zinc-300">
                  You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. If your order is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
                </p>
                <p className="text-zinc-300 font-bold">
                  NO REFUNDS WILL BE ISSUED FOR "CHANGE OF MIND" OR "FAILURE TO IMPLEMENT". REFER TO OUR REFUND POLICY FOR SPECIFIC CRITERIA RELATING TO OUR CONDITIONAL GUARANTEE.
                </p>
              </div>
            </section>

            <section className="text-sm">
              <h2 className="text-2xl font-bold mb-6 text-indigo-400">5. Earnings Disclaimer</h2>
              <div className="bg-indigo-900/10 border border-indigo-500/20 rounded-xl p-6 space-y-4">
                <p className="text-zinc-300">
                  Every effort has been made to accurately represent this product and its potential. However, there is no guarantee that you will earn any money using the techniques and ideas in these materials. Examples in these materials are not to be interpreted as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas, and techniques. We do not position this product as a "get rich quick scheme."
                </p>
                <p className="text-zinc-300">
                  Your level of success in attaining the results claimed in our materials depends on the time you devote to the program, ideas and techniques mentioned, your finances, knowledge and various skills. Since these factors differ according to individuals, we cannot guarantee your success or income level. Nor are we responsible for any of your actions.
                </p>
                <p className="text-zinc-300">
                  Materials in our product and our website may contain information that includes or is based upon forward-looking statements within the meaning of the securities litigation reform act of 1995. Forward-looking statements give our expectations or forecasts of future events. You can identify these statements by the fact that they do not relate strictly to historical or current facts. They use words such as "anticipate," "estimate," "expect," "project," "intend," "plan," "believe," and other words and terms of similar meaning in connection with a description of potential earnings or financial performance.
                </p>
              </div>
            </section>

            <section className="text-sm">
              <h2 className="text-2xl font-bold mb-6 text-orange-400">6. Dispute Resolution & Class Action Waiver</h2>
              <div className="bg-orange-900/10 border border-orange-500/20 rounded-xl p-6 space-y-4">
                <p className="text-zinc-300">
                  <strong>Binding Arbitration:</strong> If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute (except those Disputes expressly excluded below) will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
                </p>
                <p className="text-zinc-300">
                  <strong>Class Action Waiver:</strong> The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                </p>
              </div>
            </section>

            <section className="text-sm">
              <h2 className="text-2xl font-bold mb-6 text-cyan-400">7. Limitation of Liability</h2>
              <p className="text-zinc-300 bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
                IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
              </p>
            </section>

            <section className="text-sm">
              <h2 className="text-2xl font-bold mb-6 text-pink-400">8. Indemnification</h2>
              <p className="text-zinc-300">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your use of the Site; (2) breach of these Terms of Service; (3) any breach of your representations and warranties set forth in these Terms of Service; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}