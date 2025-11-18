import type { Metadata } from 'next';
import SmartCTA from '@/components/blog/SmartCTA';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { generateBlogPostSchema } from '@/lib/blog-schema';

export const metadata: Metadata = {
  title: 'N8N Error Handling: Bulletproof Workflows (2026 Practices)',
  description: 'Your workflow fails at 2am. This system catches and fixes it automatically. Error Trigger nodes, retry logic, exponential backoff, production-ready error workflows.',
  keywords: [
    'N8N error handling',
    'N8N workflow error handling best practices',
    'N8N retry logic automation',
    'N8N Error Trigger node tutorial',
    'bulletproof N8N workflows',
    'N8N exponential backoff retry',
    'production ready N8N workflows',
    'N8N error workflow examples',
    'automated error recovery N8N',
    'N8N workflow monitoring 2025',
    'resilient automation workflows',
    'N8N failsafe automation'
  ],
  openGraph: {
    title: 'N8N Error Handling: Bulletproof Workflows (2026 Practices)',
    description: 'Workflow fails at 2am? This system catches and fixes it. Complete error handling guide.',
    type: 'article',
    url: 'https://iimagined.ai/blog/n8n-error-handling',
    images: [
      {
        url: 'https://iimagined.ai/og-n8n-error-handling.png',
        width: 1200,
        height: 630,
        alt: 'N8N Error Handling Best Practices',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8N Error Handling: Bulletproof Workflows (2026 Practices)',
    description: 'Build workflows that catch and fix errors automatically. Complete guide.',
    images: ['https://iimagined.ai/og-n8n-error-handling.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function N8NErrorHandlingBlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Blog Post Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              title: 'N8N Error Handling: Build Bulletproof Workflows',
              description:
                'Complete guide to N8N error handling. Error Trigger nodes, retry logic, exponential backoff, production-ready workflows.',
              slug: 'n8n-error-handling',
              publishedTime: '2025-01-15',
              modifiedTime: '2025-01-15',
              category: 'Development',
              keywords: [
                'N8N error handling',
                'N8N workflow error handling best practices',
                'N8N retry logic automation',
                'N8N Error Trigger node tutorial',
                'bulletproof N8N workflows',
                'N8N exponential backoff retry',
                'production ready N8N workflows',
                'N8N error workflow examples',
                'automated error recovery N8N',
                'N8N workflow monitoring 2025',
                'resilient automation workflows',
                'N8N failsafe automation'
              ]
            })
          ),
        }}
      />

      {/* Header Section */}
      <header className="mb-12">
        <div className="inline-block bg-red-500/10 text-red-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Error Handling
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          N8N Error Handling: Build Bulletproof Workflows
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Your workflow fails at 2am. This system catches and fixes it automatically. Error Trigger nodes, exponential backoff retry, intelligent alerting. Zero silent failures. Here&apos;s the complete production-ready framework.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-red-400 mb-1">3-5x</div>
            <div className="text-sm text-gray-400">Retry Attempts</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
            <div className="text-sm text-gray-400">Reliability Target</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-blue-400 mb-1">Zero</div>
            <div className="text-sm text-gray-400">Silent Failures</div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <span className="font-semibold text-white">Last Updated:</span> January 2025 |{' '}
          <span className="font-semibold text-white">Reading Time:</span> 15 minutes
        </div>
      </header>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Production Error Handling Reality</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            2:37 AM. Slack notification: <strong className="text-white">&quot;Critical workflow failed: Daily Revenue Report&quot;</strong>. The marketing team won&apos;t have data for their 9 AM meeting. No one knows when it failed. No automatic recovery.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            This was our reality before implementing proper N8N error handling.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            After implementing error workflows: <strong className="text-white">Automatic retry 3 times with exponential backoff</strong>. Still failing? Slack alert with full error context. Fallback workflow runs alternate version. Team gets partial data instead of nothing.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-red-400">N8N Error Handling Framework (2025)</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Error Trigger Node:</strong> Dedicated error workflows triggered when any workflow fails</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Retry on Fail:</strong> Built into every node, configurable attempts and delays</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Exponential Backoff:</strong> Custom retry logic with increasing delays (2s, 4s, 8s, 16s)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Recommended Strategy:</strong> 3-5 retries with 5-10 second delays, ±20% jitter</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Prioritized Alerting:</strong> Critical failures → PagerDuty, non-critical → Slack</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Fallback Workflows:</strong> Alternate paths when primary execution fails</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              Source: N8N Docs, AIFire, Agent For Everything (November 2025)
            </p>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Production-ready workflows <strong className="text-white">never fail silently</strong>. They retry automatically, log errors properly, alert intelligently, and recover gracefully.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Layer 1: Node-Level Retry (Built-In)</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Every N8N node has <strong className="text-white">Retry on Fail</strong> settings. This is your first line of defense against transient errors.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Configuring Retry on Fail</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">Node Settings → Settings → Retry on Fail:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">1.</span>
                <div>
                  <strong className="text-white">Max Tries:</strong> Number of retry attempts (recommended: 3-5)
                  <p className="mt-1 text-sm">Higher for critical external API calls, lower for internal operations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">2.</span>
                <div>
                  <strong className="text-white">Wait Between Tries (ms):</strong> Delay before retrying (recommended: 5000-10000ms)
                  <p className="mt-1 text-sm">5 seconds gives external services time to recover</p>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">When to Use Retry on Fail</h3>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3 text-green-400">✓ Always Enable For:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• External API calls (Stripe, Shopify, HubSpot)</li>
                <li>• Database operations (temporary connection issues)</li>
                <li>• HTTP requests to third-party services</li>
                <li>• File uploads/downloads (network flakiness)</li>
                <li>• Email sending (SMTP temporary failures)</li>
                <li>• Webhook deliveries</li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-3 text-red-400">✗ Don&apos;t Enable For:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Data transformation nodes (won&apos;t fix logic errors)</li>
                <li>• Non-idempotent operations (duplicate orders)</li>
                <li>• Operations with side effects (already-sent emails)</li>
                <li>• Actions that modify state irreversibly</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Recommended Retry Configurations by Use Case</h3>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="p-3 text-white font-semibold">Operation Type</th>
                  <th className="p-3 text-white font-semibold">Max Tries</th>
                  <th className="p-3 text-white font-semibold">Wait (ms)</th>
                  <th className="p-3 text-white font-semibold">Reasoning</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">External API Calls</td>
                  <td className="p-3">3-5</td>
                  <td className="p-3">5000</td>
                  <td className="p-3">Rate limits, temporary outages</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">Database Queries</td>
                  <td className="p-3">3</td>
                  <td className="p-3">3000</td>
                  <td className="p-3">Connection pool exhaustion</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">File Operations</td>
                  <td className="p-3">5</td>
                  <td className="p-3">10000</td>
                  <td className="p-3">Network issues, storage delays</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">Email Sending</td>
                  <td className="p-3">4</td>
                  <td className="p-3">8000</td>
                  <td className="p-3">SMTP server rate limiting</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">Webhook Delivery</td>
                  <td className="p-3">3</td>
                  <td className="p-3">5000</td>
                  <td className="p-3">Recipient server downtime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Inline CTA */}
        <div className="my-12">
          <SmartCTA blogSlug="n8n-error-handling" variant="inline" />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Layer 2: Error Trigger Workflows (Production Essential)</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Error Trigger nodes create <strong className="text-white">dedicated error handling workflows</strong> that execute when any linked workflow fails.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Setting Up Error Workflows</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">3-Step Setup Process:</p>
            <ol className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-3">1.</span>
                <div>
                  <strong className="text-white">Create Error Workflow:</strong>
                  <p className="mt-1">New workflow → Add &quot;Error Trigger&quot; node as first node</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-3">2.</span>
                <div>
                  <strong className="text-white">Build Error Handling Logic:</strong>
                  <p className="mt-1">Add Slack/Email notifications, logging, fallback operations</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-3">3.</span>
                <div>
                  <strong className="text-white">Link to Main Workflow:</strong>
                  <p className="mt-1">Main workflow → Settings → Error Workflow → Select your error workflow</p>
                </div>
              </li>
            </ol>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Production Error Workflow Architecture</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">7-Node Production Error Handler</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`1. Error Trigger
   ↓
2. Function Node: Extract error details
   → Workflow name
   → Error message
   → Failed node
   → Timestamp
   → Input data
   ↓
3. Switch Node: Classify error severity
   → Critical: Payment processing, customer-facing
   → Warning: Internal reports, data sync
   → Info: Non-essential workflows
   ↓
4a. [Critical Path] PagerDuty Alert
   → Immediate page to on-call engineer
   → Include full error context
   ↓
4b. [Warning Path] Slack #alerts channel
   → Detailed error message
   → Link to workflow execution
   ↓
4c. [Info Path] Log to database
   → Error tracking table
   → No immediate alert
   ↓
5. Postgres Node: Log all errors
   → Error history for analysis
   ↓
6. Fallback Workflow (if applicable)
   → Trigger alternate data source
   → Partial success better than total failure
   ↓
7. Email Summary (daily digest)
   → All errors from past 24 hours`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Error Data Available in Error Trigger</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`// Error Trigger provides this data:
{{
  "execution": {
    "id": "12345",
    "mode": "trigger",
    "startedAt": "2025-01-15T14:23:00.000Z"
  },
  "workflow": {
    "id": "67890",
    "name": "Daily Revenue Report"
  },
  "node": {
    "name": "Stripe API",
    "type": "n8n-nodes-base.stripe"
  },
  "error": {
    "message": "Request failed with status code 429",
    "description": "Rate limit exceeded",
    "context": {
      "httpCode": 429,
      "requestId": "req_abc123"
    }
  }
}}`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Example: Critical Error Slack Alert</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">Slack Node Message Template</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`🚨 **CRITICAL WORKFLOW FAILURE**

**Workflow:** {{ $json.workflow.name }}
**Failed Node:** {{ $json.node.name }}
**Error:** {{ $json.error.message }}

**Details:**
• Execution ID: {{ $json.execution.id }}
• Time: {{ DateTime.fromISO($json.execution.startedAt).toFormat('yyyy-MM-dd HH:mm:ss') }}
• Error Description: {{ $json.error.description }}

**Action Required:**
1. Check execution logs: https://n8n.yourcompany.com/execution/{{ $json.execution.id }}
2. Review error context above
3. Implement fix or trigger manual recovery

CC: @engineering-oncall`}</code>
            </pre>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Layer 3: Exponential Backoff (Advanced Retry)</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            N8N&apos;s built-in retry uses <strong className="text-white">linear delays</strong> (same wait time). Exponential backoff <strong className="text-white">increases wait time</strong> between retries, giving external services more time to recover.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Why Exponential Backoff?</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Linear Retry (Built-in N8N):</p>
                <code className="bg-black border border-zinc-700 rounded px-3 py-2 block">
                  Attempt 1 → wait 5s → Attempt 2 → wait 5s → Attempt 3 → wait 5s → Fail
                </code>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Exponential Backoff (Custom):</p>
                <code className="bg-black border border-zinc-700 rounded px-3 py-2 block">
                  Attempt 1 → wait 2s → Attempt 2 → wait 4s → Attempt 3 → wait 8s → Attempt 4 → wait 16s → Success
                </code>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              <strong className="text-white">Result:</strong> Higher success rate because external services have more recovery time
            </p>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Used by:</strong> Google APIs, Amazon AWS, Microsoft Azure, Stripe. Industry-standard pattern for production systems.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Implementing Custom Exponential Backoff</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">8-Node Exponential Backoff Loop</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`1. Manual/Webhook Trigger
   ↓
2. Set Node: Initialize retry counter
   retryCount = 0
   maxRetries = 5
   ↓
3. HTTP Request Node (API call)
   • Settings: Continue on Fail = TRUE
   ↓
4. IF Node: Check if succeeded
   → Success? Go to node 8
   → Failed? Continue to node 5
   ↓
5. Function Node: Calculate exponential delay
   const retryCount = $json.retryCount;
   const baseDelay = 1000; // 1 second
   const maxDelay = 32000; // 32 seconds
   const jitter = Math.random() * 0.4 - 0.2; // ±20%

   let delay = Math.min(
     baseDelay * Math.pow(2, retryCount),
     maxDelay
   );
   delay = delay * (1 + jitter);

   return {
     delay: Math.floor(delay),
     retryCount: retryCount + 1
   };
   ↓
6. Wait Node: Dynamic delay
   Time: {{ $json.delay }} ms
   ↓
7. IF Node: Check retry limit
   → retryCount < maxRetries? Loop back to node 3
   → retryCount >= maxRetries? Trigger error workflow
   ↓
8. Success Node: Process result`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Exponential Backoff with Jitter (Production Formula)</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`// Exponential backoff calculation with jitter
const retryCount = $json.retryCount || 0;
const baseDelay = 1000; // 1 second
const maxDelay = 32000; // 32 seconds cap
const maxRetries = 5;

// Exponential calculation: 2^retryCount
let delay = baseDelay * Math.pow(2, retryCount);

// Cap at maximum to prevent excessive waits
delay = Math.min(delay, maxDelay);

// Add jitter (±20% randomness to prevent thundering herd)
const jitterFactor = 1 + (Math.random() * 0.4 - 0.2);
delay = delay * jitterFactor;

// Check if we should retry
const shouldRetry = retryCount < maxRetries;

return {
  delay: Math.floor(delay),
  retryCount: retryCount + 1,
  shouldRetry: shouldRetry,
  message: \`Retry \${retryCount + 1}/\${maxRetries} after \${Math.floor(delay)}ms\`
};

// Delay progression with jitter:
// Retry 1: ~1,000ms (0.8s - 1.2s)
// Retry 2: ~2,000ms (1.6s - 2.4s)
// Retry 3: ~4,000ms (3.2s - 4.8s)
// Retry 4: ~8,000ms (6.4s - 9.6s)
// Retry 5: ~16,000ms (12.8s - 19.2s)`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Jitter purpose:</strong> Prevents multiple failed requests from retrying simultaneously (&quot;thundering herd&quot; problem).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Production-Ready Error Handling Patterns</h2>

          <h3 className="text-2xl font-bold mb-4 text-white">Pattern 1: Critical Payment Processing</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">Workflow: Stripe Payment → Database → Email Receipt</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Stripe Node:</strong> Retry 5x, 10s delay (payment gateway can be slow)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Database Node:</strong> Retry 3x, 5s delay (connection issues)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Email Node:</strong> Retry 4x, 8s delay (SMTP temporary failures)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Error Workflow:</strong> Immediate PagerDuty alert + log to database</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Fallback:</strong> Queue payment for manual review if automated processing fails</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Pattern 2: Data Synchronization (Less Critical)</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">Workflow: Fetch CRM Data → Transform → Update Analytics DB</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">API Node:</strong> Retry 3x, 5s delay (standard external API)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Database Node:</strong> Retry 2x, 3s delay (internal database)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Error Workflow:</strong> Slack notification to #data-team</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Fallback:</strong> Skip failed record, continue with next batch</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Pattern 3: Non-Critical Reporting</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">Workflow: Weekly Marketing Metrics Email</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Database Query:</strong> Retry 2x, 3s delay</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Email Node:</strong> Retry 3x, 5s delay</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Error Workflow:</strong> Log to database only (no alert)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Fallback:</strong> None (can manually regenerate if needed)</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Monitoring & Alerting Best Practices</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">Production Monitoring Checklist</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <div>
                  <strong className="text-white">Error Logging Database:</strong>
                  <p className="mt-1">Create <code className="bg-zinc-800 px-2 py-1 rounded">workflow_errors</code> table with: execution_id, workflow_name, error_message, timestamp, severity</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <div>
                  <strong className="text-white">Daily Error Summary:</strong>
                  <p className="mt-1">Scheduled workflow that queries error table, sends digest email each morning</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <div>
                  <strong className="text-white">Uptime Monitoring:</strong>
                  <p className="mt-1">UptimeRobot or BetterStack ping critical workflow webhook endpoints every 5 minutes</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <div>
                  <strong className="text-white">Success Rate Tracking:</strong>
                  <p className="mt-1">Log both successes and failures, calculate success rate per workflow weekly</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <div>
                  <strong className="text-white">Prioritized Alerting:</strong>
                  <p className="mt-1">Critical → PagerDuty (immediate page), Warning → Slack (#alerts), Info → Database log only</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <div>
                  <strong className="text-white">Execution History Retention:</strong>
                  <p className="mt-1">Configure N8N to retain execution history for 30-90 days for debugging</p>
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Error Severity Classification</h3>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="p-3 text-white font-semibold">Severity</th>
                  <th className="p-3 text-white font-semibold">Examples</th>
                  <th className="p-3 text-white font-semibold">Alert Channel</th>
                  <th className="p-3 text-white font-semibold">Response Time</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-bold text-red-400">Critical</td>
                  <td className="p-3">Payment processing, customer-facing features, security alerts</td>
                  <td className="p-3">PagerDuty (immediate)</td>
                  <td className="p-3">&lt; 15 minutes</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-bold text-orange-400">Warning</td>
                  <td className="p-3">Data sync failures, internal reports, automated emails</td>
                  <td className="p-3">Slack #alerts</td>
                  <td className="p-3">&lt; 4 hours</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-bold text-yellow-400">Info</td>
                  <td className="p-3">Non-critical reports, cleanup tasks, optional operations</td>
                  <td className="p-3">Database log only</td>
                  <td className="p-3">Next business day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Common Error Scenarios & Solutions</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-red-400">Scenario: API Rate Limit (429 Error)</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Symptoms:</strong> HTTP 429 errors from external APIs</p>
                <p><strong className="text-white">Solution:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Enable retry with exponential backoff (5 retries, starting at 10s)</li>
                  <li>• Add rate limiting node before API call (max 100 requests/minute)</li>
                  <li>• Parse <code className="bg-zinc-800 px-2 py-1 rounded">Retry-After</code> header if provided by API</li>
                  <li>• Consider queueing requests during off-peak hours</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Scenario: Database Connection Timeout</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Symptoms:</strong> &quot;Connection timeout&quot; errors on database nodes</p>
                <p><strong className="text-white">Solution:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Verify database accepts connections from N8N server IP</li>
                  <li>• Increase connection timeout in node settings (default 10s → 30s)</li>
                  <li>• Enable retry (3 attempts, 5s delay)</li>
                  <li>• Check database server connection pool settings</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Scenario: Intermittent Network Failures</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Symptoms:</strong> Random &quot;ECONNREFUSED&quot; or &quot;ETIMEDOUT&quot; errors</p>
                <p><strong className="text-white">Solution:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Enable retry on all HTTP/API nodes (5 attempts, 10s delay)</li>
                  <li>• Add health check node before critical API calls</li>
                  <li>• Implement exponential backoff for persistent failures</li>
                  <li>• Monitor network path (traceroute) to identify bottlenecks</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Scenario: Data Validation Failures</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Symptoms:</strong> &quot;Required field missing&quot; or &quot;Invalid data format&quot; errors</p>
                <p><strong className="text-white">Solution:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Add validation node before API calls (check required fields)</li>
                  <li>• Use IF node to filter out invalid records, continue workflow</li>
                  <li>• Log validation failures to database for manual review</li>
                  <li>• DON&apos;T retry (data validation errors won&apos;t fix themselves)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Bottom Line</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Production workflows <strong className="text-white">fail</strong>. APIs go down. Databases timeout. Networks flake. Rate limits hit.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            The difference between amateur and production-ready automation: <strong className="text-white">How you handle those failures</strong>.
          </p>

          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-white">Production-Ready Error Handling Framework:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Layer 1:</strong> Node-level retry (3-5 attempts, 5-10s delay)</li>
              <li>• <strong className="text-white">Layer 2:</strong> Error Trigger workflows (catch all failures, intelligent alerting)</li>
              <li>• <strong className="text-white">Layer 3:</strong> Exponential backoff (custom retry for critical operations)</li>
              <li>• <strong className="text-white">Monitoring:</strong> Error logging database + daily digests</li>
              <li>• <strong className="text-white">Alerting:</strong> Severity-based (Critical → PagerDuty, Warning → Slack)</li>
              <li>• <strong className="text-white">Fallbacks:</strong> Alternate data sources when primary fails</li>
            </ul>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Start simple:</strong> Enable retry on external API nodes. Add one Error Trigger workflow. See failures get caught automatically.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Then layer in exponential backoff for critical paths. Add intelligent alerting. Build fallback workflows.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Your 2 AM pages decrease. <strong className="text-white">Workflow reliability hits 99.9%</strong>. Silent failures become impossible.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            That&apos;s the power of <strong className="text-white">bulletproof N8N error handling</strong>.
          </p>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="my-16">
        <SmartCTA blogSlug="n8n-error-handling" />
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <RelatedPosts currentSlug="n8n-error-handling" limit={3} />
      </div>
    </article>
  );
}
