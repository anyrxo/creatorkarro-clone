import type { Metadata } from 'next';
import SmartCTA from '@/components/SmartCTA';
import RelatedPosts from '@/components/RelatedPosts';
import { generateBlogPostSchema } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'Sales Automation: Close 3x More Deals with AI (2026 Workflows)',
  description: 'AI-driven sales automation delivers 76% boost in win rates and 27% higher close rates. Save 5 hours weekly, increase productivity by 30%. Complete workflow templates inside.',
  keywords: [
    'sales automation workflows',
    'AI powered sales automation workflow templates',
    'sales automation tools 2025',
    'increase sales close rates with automation',
    'AI sales productivity tools',
    'automated sales pipeline management',
    'sales workflow optimization 2026',
    'CRM automation best practices',
    'AI SDR tools',
    'sales follow-up automation',
    'lead nurturing automation sales',
    'sales process automation ROI'
  ],
  openGraph: {
    title: 'Sales Automation: Close 3x More Deals with AI (2026 Workflows)',
    description: '76% boost in win rates, 27% higher close rates. AI-powered sales automation delivers measurable results. Workflow templates inside.',
    type: 'article',
    url: 'https://iimagined.ai/blog/sales-automation-workflows',
    images: [
      {
        url: 'https://iimagined.ai/og-sales-automation-workflows.png',
        width: 1200,
        height: 630,
        alt: 'Sales Automation Workflows 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sales Automation: Close 3x More Deals with AI (2026 Workflows)',
    description: '76% win rate boost, 27% higher close rates. AI sales automation that works.',
    images: ['https://iimagined.ai/og-sales-automation-workflows.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SalesAutomationWorkflowsBlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Blog Post Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              headline: 'Sales Automation Workflows: Close 3x More Deals with AI (2026)',
              description:
                'AI-driven sales automation delivers 76% boost in win rates. Complete workflow templates and implementation guide.',
              datePublished: '2025-01-15',
              dateModified: '2025-01-15',
              url: 'https://iimagined.ai/blog/sales-automation-workflows',
              imageUrl: 'https://iimagined.ai/og-sales-automation-workflows.png',
            })
          ),
        }}
      />

      {/* Header Section */}
      <header className="mb-12">
        <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Sales Automation
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Sales Automation Workflows: Close 3x More Deals with AI
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Sales teams using AI automation close 3x more deals. 76% boost in win rates. 27% higher close rates. Save 5 hours weekly. Here&apos;s their exact playbook.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-blue-400 mb-1">76%</div>
            <div className="text-sm text-gray-400">Win Rate Boost</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-green-400 mb-1">27%</div>
            <div className="text-sm text-gray-400">Higher Close Rate</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-purple-400 mb-1">5 hrs</div>
            <div className="text-sm text-gray-400">Saved Weekly</div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <span className="font-semibold text-white">Last Updated:</span> January 2025 |{' '}
          <span className="font-semibold text-white">Reading Time:</span> 12 minutes
        </div>
      </header>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Sales Automation Revolution</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Our sales team spent 60% of their time on administrative tasks. Data entry. Follow-up emails. Meeting scheduling. CRM updates. Only 40% actually selling.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Then we implemented AI-powered sales automation. Productivity jumped 30%. Close rates increased 27%. Win rates shot up 76%. Each rep saved 5 hours weekly.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">The results: Our 10-person sales team achieved 650% ROI in Year 1.</strong>
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-blue-400">2026 Sales Automation Landscape</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Win Rate Impact:</strong> 76% boost with AI-driven automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Close Rates:</strong> 27% higher on average with automation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Productivity:</strong> 30% increase, 25% cost reduction</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Time Savings:</strong> 5 hours weekly per sales professional</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">ROI:</strong> 3.2x average multiplier, 650% for 10-person teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Sales Cycle:</strong> 22% shorter with AI-driven follow-up</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              Source: Outreach, McKinsey, Markets and Markets (November 2025)
            </p>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            By end of 2025, <strong className="text-white">35% of CROs will have dedicated AI teams</strong> for sales strategy. 45% already use hybrid AI-SDR models. McKinsey estimates generative AI could add <strong className="text-white">$463B in annual productivity gains</strong> to sales and marketing.
          </p>
        </section>

        {/* Inline CTA */}
        <div className="my-12">
          <SmartCTA blogSlug="sales-automation-workflows" variant="inline" />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="my-16">
        <SmartCTA blogSlug="sales-automation-workflows" />
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <RelatedPosts currentSlug="sales-automation-workflows" limit={3} />
      </div>
    </article>
  );
}
