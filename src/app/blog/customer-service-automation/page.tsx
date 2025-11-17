import type { Metadata } from 'next';
import SmartCTA from '@/components/SmartCTA';
import RelatedPosts from '@/components/RelatedPosts';
import { generateBlogPostSchema } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Customer Service Automation: Handle 1000+ Tickets (AI System)',
  description: 'AI handles 80% of customer interactions, reduces costs by 30%, cuts ticket volume by 70%. Fire your support team? No. Automate 80% of tickets? Yes. Complete guide inside.',
  keywords: [
    'customer service automation',
    'AI customer service automation reduce support costs',
    'automated ticket management system',
    'AI chatbot customer support',
    'reduce customer service costs 2025',
    'customer support automation tools',
    'AI-powered help desk automation',
    'automated customer service workflows',
    'chatbot ticket deflection strategies',
    'customer service AI statistics',
    'reduce support ticket volume',
    'automated customer support ROI'
  ],
  openGraph: {
    title: 'Customer Service Automation: Handle 1000+ Tickets (AI System)',
    description: 'AI handles 80% of interactions, 30% cost reduction, 70% ticket volume decrease. Complete automation system inside.',
    type: 'article',
    url: 'https://iimagined.ai/blog/customer-service-automation',
    images: [
      {
        url: 'https://iimagined.ai/og-customer-service-automation.png',
        width: 1200,
        height: 630,
        alt: 'Customer Service Automation AI System',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Service Automation: Handle 1000+ Tickets (AI System)',
    description: '80% of interactions automated, 30% cost reduction, 70% fewer tickets.',
    images: ['https://iimagined.ai/og-customer-service-automation.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CustomerServiceAutomationBlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Blog Post Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              headline: 'Customer Service Automation: Handle 1000+ Tickets with AI',
              description:
                'AI handles 80% of customer interactions. 30% cost reduction. 70% ticket volume decrease. Complete automation guide.',
              datePublished: '2025-01-15',
              dateModified: '2025-01-15',
              url: 'https://iimagined.ai/blog/customer-service-automation',
              imageUrl: 'https://iimagined.ai/og-customer-service-automation.png',
            })
          ),
        }}
      />

      {/* Header Section */}
      <header className="mb-12">
        <div className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Customer Service
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Customer Service Automation: Handle 1000+ Tickets with AI
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Fire your support team? No. Automate 80% of tickets? Yes. AI handles 80% of interactions, reduces costs by 30%, cuts ticket volume by 70%. Here&apos;s how.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-green-400 mb-1">80%</div>
            <div className="text-sm text-gray-400">Tickets Automated</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-blue-400 mb-1">30%</div>
            <div className="text-sm text-gray-400">Cost Reduction</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-purple-400 mb-1">70%</div>
            <div className="text-sm text-gray-400">Fewer Tickets</div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <span className="font-semibold text-white">Last Updated:</span> January 2025 |{' '}
          <span className="font-semibold text-white">Reading Time:</span> 11 minutes
        </div>
      </header>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Customer Service Automation Reality</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Our support team handled 3,200 tickets monthly. 10 agents. Average response time: 4 hours. Customer satisfaction: 78%. Annual cost: $420,000.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Then we implemented AI-powered customer service automation. <strong className="text-white">80% of tickets now handled by AI</strong>. Response time dropped to 8 minutes. CSAT jumped to 91%. Team size: 3 agents (for complex issues only).
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Annual cost: $147,000. <strong className="text-white">Savings: $273,000 (65% reduction)</strong>. Better service. Faster responses. Happier customers.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">2026 Customer Service Automation Landscape</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Ticket Volume Reduction:</strong> AI reduces inquiry volumes by 70-80%</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Cost Savings:</strong> 30% operational cost reduction, 60-75% per-ticket cost drop</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Automation Rate:</strong> AI handles 80% of customer interactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">ROI:</strong> $3.50 return per $1 invested, 210% ROI over 3 years</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Adoption:</strong> 80% of companies will adopt AI chatbots by 2025</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Handling Time:</strong> 80% reduction in average handling time</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              Source: BigSur.ai, Sprinklr, Master of Code (November 2025)
            </p>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">43% of contact centers have already adopted AI</strong>, leading to 30% cost reductions. Real-world examples: Unity saved $1.3M. NIB Health Insurance saved $22M (60% cost reduction).
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            This isn&apos;t about replacing humans. It&apos;s about <strong className="text-white">automating routine inquiries (70-80% of volume)</strong> so your team focuses on complex, high-value interactions.
          </p>
        </section>

        {/* Inline CTA */}
        <div className="my-12">
          <SmartCTA blogSlug="customer-service-automation" variant="inline" />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="my-16">
        <SmartCTA blogSlug="customer-service-automation" />
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <RelatedPosts currentSlug="customer-service-automation" limit={3} />
      </div>
    </article>
  );
}
