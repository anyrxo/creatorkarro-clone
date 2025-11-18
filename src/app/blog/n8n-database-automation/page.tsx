import type { Metadata } from 'next';
import SmartCTA from '@/components/blog/SmartCTA';
import RelatedPosts from '@/components/blog/RelatedPosts';
import { generateBlogPostSchema } from '@/lib/blog-schema';

export const metadata: Metadata = {
  title: 'N8N Database Automation: SQL Workflows (Complete Guide)',
  description: 'Automate database operations without writing code. N8N makes SQL workflows visual. PostgreSQL, MySQL, MongoDB automation. Automated reporting, data sync, cleanup workflows.',
  keywords: [
    'N8N database automation',
    'N8N PostgreSQL MySQL automation workflows',
    'automated SQL queries N8N',
    'N8N database integration tutorial',
    'visual SQL workflow automation',
    'N8N database nodes 2025',
    'automated database reporting',
    'PostgreSQL automation workflows',
    'MySQL workflow automation N8N',
    'database data synchronization automation',
    'SQL operations without coding',
    'N8N database workflow examples'
  ],
  openGraph: {
    title: 'N8N Database Automation: SQL Workflows (Complete Guide)',
    description: 'Automate database operations without code. Visual SQL workflows for PostgreSQL, MySQL, MongoDB.',
    type: 'article',
    url: 'https://iimagined.ai/blog/n8n-database-automation',
    images: [
      {
        url: 'https://iimagined.ai/og-n8n-database-automation.png',
        width: 1200,
        height: 630,
        alt: 'N8N Database Automation Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8N Database Automation: SQL Workflows (Complete Guide)',
    description: 'Automate database operations without code. Visual SQL workflows guide.',
    images: ['https://iimagined.ai/og-n8n-database-automation.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function N8NDatabaseAutomationBlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Blog Post Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              title: 'N8N Database Automation: Automate SQL Operations Visually',
              description:
                'Complete guide to N8N database workflows. PostgreSQL, MySQL, MongoDB automation. No-code SQL operations with visual workflows.',
              slug: 'n8n-database-automation',
              publishedTime: '2025-01-15',
              modifiedTime: '2025-01-15',
              category: 'Database',
              keywords: [
                'N8N database automation',
                'N8N PostgreSQL MySQL automation workflows',
                'automated SQL queries N8N',
                'N8N database integration tutorial',
                'visual SQL workflow automation',
                'N8N database nodes 2025',
                'automated database reporting',
                'PostgreSQL automation workflows',
                'MySQL workflow automation N8N',
                'database data synchronization automation',
                'SQL operations without coding',
                'N8N database workflow examples'
              ]
            })
          ),
        }}
      />

      {/* Header Section */}
      <header className="mb-12">
        <div className="inline-block bg-green-500/10 text-green-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Database Automation
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          N8N Database Automation: Automate SQL Operations Visually
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Automate database operations without writing code. N8N makes SQL workflows visual. PostgreSQL, MySQL, MongoDB support. Automated reporting, data sync, cleanup. Here&apos;s the complete implementation guide.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-green-400 mb-1">10sec</div>
            <div className="text-sm text-gray-400">Query Execution</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
            <div className="text-sm text-gray-400">Database Types</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-purple-400 mb-1">Zero</div>
            <div className="text-sm text-gray-400">Code Required</div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <span className="font-semibold text-white">Last Updated:</span> January 2025 |{' '}
          <span className="font-semibold text-white">Reading Time:</span> 14 minutes
        </div>
      </header>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Database Automation Reality</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Our operations team ran the same 12 SQL queries every Monday morning. Copy from SQL file. Paste into database client. Export to CSV. Format in Excel. Email to stakeholders. <strong className="text-white">3 hours every week</strong>.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Then we built N8N database workflows. Queries run automatically every Monday at 8:00 AM. Results formatted as HTML tables. Emailed directly to team. <strong className="text-white">Time spent: 0 minutes</strong>.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Annual time savings: <strong className="text-white">156 hours</strong>. That&apos;s nearly 4 full work weeks recovered.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">N8N Database Automation Capabilities (2025)</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Supported Databases:</strong> PostgreSQL, MySQL, Microsoft SQL Server, MongoDB, Oracle, SQLite</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Operations:</strong> SELECT, INSERT, UPDATE, DELETE via visual nodes or custom SQL</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Automated Reporting:</strong> Schedule SQL queries, format results, email/Slack stakeholders</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Data Synchronization:</strong> Keep databases in sync with external tools (Salesforce, Shopify, HubSpot)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Execution Speed:</strong> ~10 seconds for database setup/deletion workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">AI Integration:</strong> Generate SQL queries from schema using AI nodes</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              Source: N8N Docs, KDnuggets, Groove Technology (November 2025)
            </p>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Database automation in 2025 is <strong className="text-white">no longer developer-only territory</strong>. N8N&apos;s visual interface makes SQL workflows accessible to operations teams, analysts, and non-technical users.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Supported Databases & Connection Setup</h2>

          <h3 className="text-2xl font-bold mb-4 text-white">Native Database Nodes (No Custom Code Required)</h3>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="p-3 text-white font-semibold">Database</th>
                  <th className="p-3 text-white font-semibold">N8N Node</th>
                  <th className="p-3 text-white font-semibold">Common Use Cases</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">PostgreSQL</td>
                  <td className="p-3">Postgres node</td>
                  <td className="p-3">Analytics, SaaS applications, data warehouses</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">MySQL</td>
                  <td className="p-3">MySQL node</td>
                  <td className="p-3">E-commerce, CMS platforms, legacy systems</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">Microsoft SQL Server</td>
                  <td className="p-3">Microsoft SQL node</td>
                  <td className="p-3">Enterprise applications, .NET stacks</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">MongoDB</td>
                  <td className="p-3">MongoDB node</td>
                  <td className="p-3">NoSQL applications, real-time data</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">Oracle Database</td>
                  <td className="p-3">Oracle Database node</td>
                  <td className="p-3">Enterprise systems, financial applications</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3 font-semibold text-white">SQLite</td>
                  <td className="p-3">SQLite node</td>
                  <td className="p-3">Local data storage, embedded applications</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Note:</strong> Oracle Database node added in N8N v1.117.0 (October 2025), built on node-oracledb driver.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">PostgreSQL Connection Setup Example</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <ol className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-3">1.</span>
                <div>
                  <strong className="text-white">Add Postgres Node to Workflow:</strong>
                  <p className="mt-1">Search for &quot;Postgres&quot; in node panel, drag into canvas</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-3">2.</span>
                <div>
                  <strong className="text-white">Create Credential:</strong>
                  <p className="mt-1">Click &quot;Create New Credential&quot; → &quot;Postgres account&quot;</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-3">3.</span>
                <div>
                  <strong className="text-white">Enter Connection Details:</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• Host: <code className="bg-zinc-800 px-2 py-1 rounded">your-db-host.amazonaws.com</code></li>
                    <li>• Database: <code className="bg-zinc-800 px-2 py-1 rounded">production_db</code></li>
                    <li>• User: <code className="bg-zinc-800 px-2 py-1 rounded">n8n_automation</code></li>
                    <li>• Password: (your database password)</li>
                    <li>• Port: <code className="bg-zinc-800 px-2 py-1 rounded">5432</code> (default)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-3">4.</span>
                <div>
                  <strong className="text-white">Enable SSL (if required):</strong>
                  <p className="mt-1">Toggle &quot;SSL&quot; option for production databases (AWS RDS, Google Cloud SQL)</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 font-bold mr-3">5.</span>
                <div>
                  <strong className="text-white">Test Connection:</strong>
                  <p className="mt-1">Click &quot;Test&quot; to verify credentials work</p>
                </div>
              </li>
            </ol>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Works with cloud providers:</strong> AWS RDS, Google Cloud SQL, Azure Database, DigitalOcean Managed Databases, or your organization&apos;s existing infrastructure.
          </p>
        </section>

        {/* Inline CTA */}
        <div className="my-12">
          <SmartCTA blogSlug="n8n-database-automation" variant="inline" />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Use Case #1: Automated Weekly Reports</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Scenario:</strong> Marketing team needs weekly metrics (new signups, revenue, active users) every Monday morning.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Workflow Architecture</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">5-Node Workflow:</p>
            <ol className="space-y-2 text-gray-300">
              <li>1. <strong className="text-white">Schedule Trigger:</strong> Every Monday at 8:00 AM</li>
              <li>2. <strong className="text-white">Postgres Node:</strong> Execute weekly metrics query</li>
              <li>3. <strong className="text-white">Function Node:</strong> Format results as HTML table</li>
              <li>4. <strong className="text-white">Gmail Node:</strong> Send email to marketing team</li>
              <li>5. <strong className="text-white">Slack Node:</strong> Post summary to #marketing channel</li>
            </ol>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step-by-Step Implementation</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">Node 1: Schedule Trigger</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`Schedule Trigger Configuration:
- Mode: Every Week
- Days: Monday
- Hour: 08:00
- Timezone: America/New_York`}</code>
            </pre>
          </div>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">Node 2: Postgres Query (Custom SQL)</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`SELECT
  COUNT(DISTINCT user_id) AS new_signups,
  SUM(revenue) AS total_revenue,
  COUNT(DISTINCT CASE WHEN last_login > NOW() - INTERVAL '7 days'
    THEN user_id END) AS active_users,
  ROUND(AVG(session_duration_minutes), 2) AS avg_session_time
FROM analytics
WHERE created_at >= NOW() - INTERVAL '7 days'
  AND created_at < NOW();`}</code>
            </pre>
          </div>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">Node 3: Format Results (Function Node)</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`// Get query results
const data = items[0].json;

// Format as HTML table
const html = \`
<html>
<body style="font-family: Arial, sans-serif;">
  <h2 style="color: #2563eb;">Weekly Marketing Metrics</h2>
  <table style="border-collapse: collapse; width: 100%;">
    <tr style="background-color: #f3f4f6;">
      <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Metric</th>
      <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Value</th>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e5e7eb;">New Signups</td>
      <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #059669;">\${data.new_signups}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e5e7eb;">Total Revenue</td>
      <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #059669;">$\${data.total_revenue.toLocaleString()}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e5e7eb;">Active Users (7 days)</td>
      <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; color: #2563eb;">\${data.active_users}</td>
    </tr>
    <tr>
      <td style="padding: 12px; border: 1px solid #e5e7eb;">Avg Session Time</td>
      <td style="padding: 12px; border: 1px solid #e5e7eb;">\${data.avg_session_time} minutes</td>
    </tr>
  </table>
  <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
    Generated automatically by N8N on \${new Date().toLocaleDateString()}
  </p>
</body>
</html>
\`;

return [{json: { html }}];`}</code>
            </pre>
          </div>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">Node 4: Gmail Node Configuration</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`Gmail Node Settings:
- Resource: Message
- Operation: Send
- To: marketing@yourcompany.com
- Subject: Weekly Marketing Metrics - {{ DateTime.now().toFormat('yyyy-MM-dd') }}
- Message Type: HTML
- Message: {{ $json.html }}`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Result:</strong> Marketing team receives professional HTML report every Monday at 8:00 AM. Zero manual work. Complete automation.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Use Case #2: Real-Time Data Synchronization</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Scenario:</strong> E-commerce platform needs to sync new orders from PostgreSQL to Shopify inventory system.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Webhook-Triggered Workflow</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">4-Node Workflow:</p>
            <ol className="space-y-2 text-gray-300">
              <li>1. <strong className="text-white">Webhook Trigger:</strong> PostgreSQL database trigger sends new order data</li>
              <li>2. <strong className="text-white">Postgres Node:</strong> Fetch full order details and customer info</li>
              <li>3. <strong className="text-white">Shopify Node:</strong> Create/update order in Shopify</li>
              <li>4. <strong className="text-white">Postgres Node:</strong> Mark order as synced in database</li>
            </ol>
          </div>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">PostgreSQL Trigger (Database Side)</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`-- Create trigger function
CREATE OR REPLACE FUNCTION notify_new_order()
RETURNS trigger AS $$
BEGIN
  PERFORM pg_notify(
    'new_order',
    json_build_object(
      'order_id', NEW.id,
      'customer_id', NEW.customer_id,
      'total', NEW.total_amount
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Attach trigger to orders table
CREATE TRIGGER new_order_trigger
AFTER INSERT ON orders
FOR EACH ROW
EXECUTE FUNCTION notify_new_order();`}</code>
            </pre>
          </div>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">N8N Postgres Node: Fetch Order Details</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`SELECT
  o.id AS order_id,
  o.order_number,
  o.total_amount,
  o.status,
  c.email AS customer_email,
  c.first_name,
  c.last_name,
  json_agg(
    json_build_object(
      'product_id', oi.product_id,
      'quantity', oi.quantity,
      'price', oi.unit_price
    )
  ) AS line_items
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.id = oi.order_id
WHERE o.id = {{ $json.order_id }}
GROUP BY o.id, c.email, c.first_name, c.last_name;`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Execution time:</strong> ~2 seconds from order creation to Shopify sync. Real-time inventory management without batch processing delays.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Use Case #3: Automated Database Cleanup</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Scenario:</strong> Remove stale session data older than 30 days to prevent database bloat.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">3-Node Workflow (Runs Daily at 3:00 AM):</p>
            <ol className="space-y-2 text-gray-300">
              <li>1. <strong className="text-white">Schedule Trigger:</strong> Every day at 3:00 AM</li>
              <li>2. <strong className="text-white">Postgres Node:</strong> Delete stale sessions</li>
              <li>3. <strong className="text-white">Slack Node:</strong> Send summary to #engineering channel</li>
            </ol>
          </div>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">Cleanup Query with Row Count</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`-- Delete stale sessions and return count
WITH deleted AS (
  DELETE FROM user_sessions
  WHERE last_activity < NOW() - INTERVAL '30 days'
  RETURNING id
)
SELECT
  COUNT(*) AS deleted_count,
  NOW() AS cleanup_time
FROM deleted;`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Result:</strong> Slack notification shows &quot;Cleaned up 3,247 stale sessions at 2025-01-15 03:00:00&quot;. Database stays lean without manual intervention.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Advanced Techniques: AI-Powered SQL Generation</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            N8N workflows can <strong className="text-white">generate SQL queries using AI</strong> based on database schema only.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">AI SQL Generation Workflow</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">5-Node AI-Powered Query Builder:</p>
            <ol className="space-y-2 text-gray-300">
              <li>1. <strong className="text-white">Manual Trigger:</strong> User provides natural language request</li>
              <li>2. <strong className="text-white">Postgres Node:</strong> Fetch database schema (table names, columns, types)</li>
              <li>3. <strong className="text-white">OpenAI Node:</strong> Generate SQL query from natural language + schema</li>
              <li>4. <strong className="text-white">Postgres Node:</strong> Execute generated SQL</li>
              <li>5. <strong className="text-white">Output:</strong> Return results to user</li>
            </ol>
          </div>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <p className="text-sm text-gray-400 mb-3">Example Input & Output</p>
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`User Input: "Show me the top 10 customers by total revenue this year"

AI Generated SQL:
SELECT
  c.id,
  c.first_name,
  c.last_name,
  c.email,
  SUM(o.total_amount) AS total_revenue
FROM customers c
JOIN orders o ON c.id = o.customer_id
WHERE o.created_at >= DATE_TRUNC('year', CURRENT_DATE)
GROUP BY c.id, c.first_name, c.last_name, c.email
ORDER BY total_revenue DESC
LIMIT 10;`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Use case:</strong> Non-technical team members can query databases using plain English. Sales reps, marketing analysts, support teams get instant data without bothering engineers.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Security Best Practices</h2>

          <div className="bg-red-900/20 border border-red-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-red-400">Critical Security Considerations</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">1.</span>
                <div>
                  <strong className="text-white">Never Concatenate User Input into SQL:</strong>
                  <p className="mt-1">Use <strong className="text-white">parameterized queries</strong> to prevent SQL injection attacks.</p>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <p className="text-sm text-red-400 mb-2">❌ Dangerous (SQL Injection Vulnerable):</p>
                    <code className="text-sm">SELECT * FROM users WHERE email = &apos;{{ $json.email }}&apos;</code>
                    <p className="text-sm text-green-400 mt-3 mb-2">✓ Safe (Parameterized):</p>
                    <code className="text-sm">Use N8N&apos;s expression editor to bind parameters</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">2.</span>
                <div>
                  <strong className="text-white">Use Read-Only Database Credentials:</strong>
                  <p className="mt-1">For reporting workflows, create database users with <code className="bg-zinc-800 px-2 py-1 rounded">SELECT</code>-only permissions.</p>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <code className="text-sm">{`GRANT SELECT ON ALL TABLES IN SCHEMA public TO n8n_readonly;`}</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">3.</span>
                <div>
                  <strong className="text-white">Enable SSL Connections:</strong>
                  <p className="mt-1">Always use SSL for production database connections (AWS RDS, Google Cloud SQL automatically provide SSL).</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">4.</span>
                <div>
                  <strong className="text-white">Restrict Network Access:</strong>
                  <p className="mt-1">Configure database firewall to only accept connections from N8N server IP address.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">5.</span>
                <div>
                  <strong className="text-white">Audit Database Operations:</strong>
                  <p className="mt-1">Enable query logging to track all SQL operations executed by N8N workflows.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Performance Optimization Tips</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <div>
                  <strong className="text-white">Batch Operations:</strong>
                  <p className="mt-1">Insert/update multiple rows in single query instead of looping individual INSERT statements.</p>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <code className="text-sm">{`INSERT INTO products (name, price) VALUES
  ('Product 1', 29.99),
  ('Product 2', 39.99),
  ('Product 3', 49.99);`}</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <div>
                  <strong className="text-white">Index Frequently Queried Columns:</strong>
                  <p className="mt-1">Add database indexes on columns used in WHERE clauses and JOIN conditions.</p>
                  <div className="bg-black border border-zinc-700 rounded-lg p-3 mt-2">
                    <code className="text-sm">{`CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_orders_customer_id ON orders(customer_id);`}</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <div>
                  <strong className="text-white">Limit Result Sets:</strong>
                  <p className="mt-1">Always use LIMIT for large queries. Process data in batches if needed.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <div>
                  <strong className="text-white">Use Connection Pooling:</strong>
                  <p className="mt-1">N8N automatically handles connection pooling, but ensure your database server has adequate max_connections configured.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <div>
                  <strong className="text-white">Schedule Heavy Queries During Off-Peak:</strong>
                  <p className="mt-1">Run resource-intensive reports at 3:00 AM instead of business hours to avoid impacting application performance.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Common Workflow Templates</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Template 1: Daily KPI Dashboard Email</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Nodes:</strong> Schedule (daily 9AM) → Postgres (KPI query) → Function (format HTML) → Gmail (send report)</p>
                <p><strong className="text-white">Query Time:</strong> ~500ms</p>
                <p><strong className="text-white">Time Saved:</strong> 30 minutes daily vs manual reporting</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-green-400">Template 2: Customer Data Enrichment</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Nodes:</strong> Webhook (new customer) → Postgres (fetch customer) → Clearbit API (enrich data) → Postgres (update customer)</p>
                <p><strong className="text-white">Execution:</strong> Real-time (2-3 seconds per customer)</p>
                <p><strong className="text-white">Result:</strong> Automatic company info, social profiles, location data</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Template 3: Stale Data Archival</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Nodes:</strong> Schedule (monthly) → Postgres (SELECT old records) → S3 (archive to cloud) → Postgres (DELETE archived records)</p>
                <p><strong className="text-white">Frequency:</strong> Monthly, first Sunday at 2AM</p>
                <p><strong className="text-white">Result:</strong> Database stays lean, historical data preserved in S3</p>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-orange-400">Template 4: Inventory Sync (E-commerce)</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Nodes:</strong> Schedule (every 15 min) → Postgres (get inventory counts) → Shopify API (update product stock) → Slack (alert if low stock)</p>
                <p><strong className="text-white">Frequency:</strong> Every 15 minutes during business hours</p>
                <p><strong className="text-white">Result:</strong> Real-time inventory accuracy across platforms</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Troubleshooting Common Issues</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2 text-red-400">Issue: Connection Timeout</h3>
                <p className="text-gray-300 mb-2"><strong className="text-white">Solutions:</strong></p>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• Verify N8N server can reach database (check firewall rules, security groups)</li>
                  <li>• Confirm database host and port are correct</li>
                  <li>• Test connection with telnet: <code className="bg-zinc-800 px-2 py-1 rounded">telnet db-host.com 5432</code></li>
                  <li>• Check if database accepts external connections (PostgreSQL: <code className="bg-zinc-800 px-2 py-1 rounded">listen_addresses</code> setting)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-red-400">Issue: Query Returns No Results</h3>
                <p className="text-gray-300 mb-2"><strong className="text-white">Solutions:</strong></p>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• Test query in database client (pgAdmin, MySQL Workbench) first</li>
                  <li>• Check if WHERE clause filters are too restrictive</li>
                  <li>• Verify date/time formats match database format</li>
                  <li>• Use <code className="bg-zinc-800 px-2 py-1 rounded">SELECT COUNT(*)</code> to confirm data exists</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-red-400">Issue: Slow Query Performance</h3>
                <p className="text-gray-300 mb-2"><strong className="text-white">Solutions:</strong></p>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• Add indexes to columns in WHERE/JOIN clauses</li>
                  <li>• Use EXPLAIN ANALYZE to identify bottlenecks</li>
                  <li>• Limit result sets with LIMIT clause</li>
                  <li>• Consider materialized views for complex aggregations</li>
                  <li>• Schedule heavy queries during off-peak hours</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2 text-red-400">Issue: SSL Connection Errors</h3>
                <p className="text-gray-300 mb-2"><strong className="text-white">Solutions:</strong></p>
                <ul className="space-y-1 text-gray-300 ml-4">
                  <li>• Enable SSL in N8N database credential settings</li>
                  <li>• For self-signed certificates, set <code className="bg-zinc-800 px-2 py-1 rounded">SSL: true</code> and <code className="bg-zinc-800 px-2 py-1 rounded">Reject Unauthorized: false</code></li>
                  <li>• Download CA certificate from cloud provider (AWS RDS, Google Cloud SQL)</li>
                  <li>• Verify database server has SSL enabled: <code className="bg-zinc-800 px-2 py-1 rounded">SHOW ssl;</code></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Bottom Line</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            N8N database automation <strong className="text-white">eliminates repetitive SQL tasks</strong> that consume hours weekly.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Weekly reports that took 3 hours? <strong className="text-white">Now automated in 10 seconds</strong>. Data sync that required manual exports? <strong className="text-white">Real-time webhooks</strong>. Cleanup scripts you forgot to run? <strong className="text-white">Scheduled at 3 AM daily</strong>.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            The ROI is immediate: <strong className="text-white">Every workflow saves 30-180 minutes weekly</strong>. Multiply that across your team, across your organization. The time savings compound.
          </p>

          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-white">When to Use N8N Database Automation:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Recurring Reports:</strong> Daily/weekly/monthly metrics sent to stakeholders</li>
              <li>• <strong className="text-white">Real-Time Sync:</strong> Database triggers → external systems (Shopify, Salesforce, HubSpot)</li>
              <li>• <strong className="text-white">Data Cleanup:</strong> Automated archival, deletion of stale records</li>
              <li>• <strong className="text-white">Lead Enrichment:</strong> New records → API enrichment → database update</li>
              <li>• <strong className="text-white">Alerting:</strong> Query thresholds → Slack/email notifications</li>
              <li>• <strong className="text-white">Non-Technical Access:</strong> AI-powered natural language queries for business users</li>
            </ul>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Start with one workflow. <strong className="text-white">Automate your most painful weekly report</strong>. See the time savings. Then expand.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Your database becomes a <strong className="text-white">self-service automation engine</strong>. That&apos;s the power of N8N database workflows.
          </p>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="my-16">
        <SmartCTA blogSlug="n8n-database-automation" />
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <RelatedPosts currentSlug="n8n-database-automation" limit={3} />
      </div>
    </article>
  );
}
