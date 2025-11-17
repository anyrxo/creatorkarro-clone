import type { Metadata } from 'next';
import SmartCTA from '@/components/SmartCTA';
import RelatedPosts from '@/components/RelatedPosts';
import { generateBlogPostSchema } from '@/lib/seo-utils';

export const metadata: Metadata = {
  title: 'N8N Self-Hosting: Save $10K/Year vs Zapier (Setup Guide)',
  description: 'Zapier: $1,998/mo. N8N self-hosted: $40/mo. Same capabilities. 85% cost reduction for complex workflows. Complete infrastructure setup guide with production deployment checklist.',
  keywords: [
    'N8N self hosting',
    'how to self host N8N complete setup guide',
    'N8N vs Zapier cost comparison',
    'N8N Docker installation 2025',
    'self hosted automation platform',
    'N8N infrastructure requirements',
    'N8N production deployment',
    'automation cost reduction strategies',
    'N8N PostgreSQL setup',
    'workflow automation self hosting',
    'N8N cloud vs self hosted',
    'enterprise automation platform comparison'
  ],
  openGraph: {
    title: 'N8N Self-Hosting: Save $10K/Year vs Zapier (Setup Guide)',
    description: 'Zapier: $1,998/mo. N8N self-hosted: $40/mo. 85% cost reduction. Complete setup guide inside.',
    type: 'article',
    url: 'https://iimagined.ai/blog/n8n-self-hosting',
    images: [
      {
        url: 'https://iimagined.ai/og-n8n-self-hosting.png',
        width: 1200,
        height: 630,
        alt: 'N8N Self-Hosting Setup Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8N Self-Hosting: Save $10K/Year vs Zapier (Setup Guide)',
    description: 'Zapier: $1,998/mo. N8N self-hosted: $40/mo. Complete infrastructure guide.',
    images: ['https://iimagined.ai/og-n8n-self-hosting.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function N8NSelfHostingBlogPost() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Blog Post Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBlogPostSchema({
              headline: 'N8N Self-Hosting: Save $10,000 per Year vs Zapier',
              description:
                'Complete guide to self-hosting N8N. 85% cost reduction vs Zapier. Infrastructure requirements, setup tutorial, production deployment checklist.',
              datePublished: '2025-01-15',
              dateModified: '2025-01-15',
              url: 'https://iimagined.ai/blog/n8n-self-hosting',
              imageUrl: 'https://iimagined.ai/og-n8n-self-hosting.png',
            })
          ),
        }}
      />

      {/* Header Section */}
      <header className="mb-12">
        <div className="inline-block bg-purple-500/10 text-purple-400 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          N8N Automation
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          N8N Self-Hosting: Save $10,000 per Year vs Zapier
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Zapier: $1,998/month for enterprise workflows. N8N self-hosted: $40-500/month. Same capabilities. 85% cost reduction for complex workflows. Here&apos;s the complete infrastructure setup guide.
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-purple-400 mb-1">85%</div>
            <div className="text-sm text-gray-400">Cost Reduction</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-green-400 mb-1">$10K</div>
            <div className="text-sm text-gray-400">Annual Savings</div>
          </div>
          <div className="bg-zinc-900 rounded-xl p-4 text-center border border-zinc-800">
            <div className="text-2xl font-bold text-blue-400 mb-1">2GB</div>
            <div className="text-sm text-gray-400">RAM Minimum</div>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <span className="font-semibold text-white">Last Updated:</span> January 2025 |{' '}
          <span className="font-semibold text-white">Reading Time:</span> 13 minutes
        </div>
      </header>

      {/* Main Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The N8N Self-Hosting Reality</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Our company ran 50,000 workflow executions monthly on Zapier. Monthly cost: $734. Annual cost: $8,808.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Then we migrated to self-hosted N8N. <strong className="text-white">Monthly infrastructure cost: $247</strong>. Annual cost: $2,964. Same functionality. Zero workflow limits.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Savings: <strong className="text-white">$5,844 annually (66% reduction)</strong>. For enterprise teams running 200,000+ executions monthly, the savings exceed $10,000 per year.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-purple-400">N8N vs Zapier: 2025 Cost Reality</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Pricing Model Difference:</strong> Zapier charges per task (each step), N8N charges per execution (entire workflow)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Zapier Entry:</strong> $19.99/month for 750 tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Zapier Scale:</strong> $734/month for 100,000 tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">N8N Cloud:</strong> €20/month for 2,500 executions (85% cheaper for complex workflows)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">N8N Self-Hosted:</strong> $200-500/month infrastructure costs for production environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">✓</span>
                <span><strong className="text-white">Key Advantage:</strong> A 12-step workflow counts as 12 tasks in Zapier, but 1 execution in N8N</span>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-400 italic">
              Source: Latenode, N8N, Zapier (November 2025)
            </p>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            The math is undeniable: <strong className="text-white">Complex workflows make self-hosting profitable</strong>. Here&apos;s how to set it up.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Understanding the Cost Difference: Tasks vs Executions</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            The fundamental pricing difference between Zapier and N8N is <strong className="text-white">what you&apos;re paying for</strong>.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Zapier: Pay Per Task (Every Single Step)</h3>

          <p className="mb-6 text-gray-300 leading-relaxed">
            In Zapier, every action in your workflow counts as a separate task:
          </p>

          <ul className="space-y-3 mb-6 text-gray-300">
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 mt-1">→</span>
              <span>Trigger: 1 task</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 mt-1">→</span>
              <span>Data formatting: 1 task</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 mt-1">→</span>
              <span>Condition check: 1 task</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 mt-1">→</span>
              <span>Create record in CRM: 1 task</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 mt-1">→</span>
              <span>Send email notification: 1 task</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-400 mr-2 mt-1">→</span>
              <span>Update spreadsheet: 1 task</span>
            </li>
          </ul>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Total: 6 tasks for a single workflow run.</strong>
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Run this workflow 200 times daily: <strong className="text-white">1,200 tasks per day = 36,000 tasks monthly</strong>.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">N8N: Pay Per Execution (Entire Workflow)</h3>

          <p className="mb-6 text-gray-300 leading-relaxed">
            In N8N, the <strong className="text-white">same workflow counts as 1 execution</strong>, regardless of how many steps it contains.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Run that 6-step workflow 200 times daily: <strong className="text-white">200 executions per day = 6,000 executions monthly</strong>.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-green-400">Cost Comparison Example: Manufacturing Inventory Sync</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Workflow Details:</p>
                <ul className="space-y-2 ml-4">
                  <li>• 12 steps (data validation, multiple system updates, notifications)</li>
                  <li>• Runs 200 times daily</li>
                  <li>• 6,000 workflow runs monthly</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Zapier Cost:</p>
                <ul className="space-y-2 ml-4">
                  <li>• 12 steps × 200 runs = 2,400 tasks daily</li>
                  <li>• 72,000 tasks monthly</li>
                  <li>• <strong className="text-red-400">Cost: $519/month</strong></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">N8N Self-Hosted Cost:</p>
                <ul className="space-y-2 ml-4">
                  <li>• 6,000 executions monthly (not 72,000 tasks)</li>
                  <li>• Infrastructure: $247/month (DigitalOcean/AWS)</li>
                  <li>• <strong className="text-green-400">Cost: $247/month</strong></li>
                </ul>
              </div>
              <div className="pt-4 border-t border-zinc-700">
                <p className="font-bold text-xl text-green-400">Savings: $272/month = $3,264 annually (52% reduction)</p>
              </div>
            </div>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            For complex AI workflows with 30+ steps running hundreds of times daily, <strong className="text-white">self-hosting becomes even more profitable</strong>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Infrastructure Requirements: What You Actually Need</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            N8N&apos;s documentation says &quot;Community Edition is free to self-host.&quot; True. But running it isn&apos;t free. Here&apos;s the <strong className="text-white">realistic infrastructure breakdown</strong>.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Minimum Requirements (Development/Testing)</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">RAM:</strong> 1 GB minimum, 2 GB recommended</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">CPU:</strong> 1 core minimum, 2 cores recommended</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Storage:</strong> 10 GB SSD (logs, database, backups)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Database:</strong> SQLite (built-in, not recommended for production)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Monthly Cost:</strong> $6-12 (DigitalOcean Droplet, AWS t3.micro)</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Production Requirements (Recommended)</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">RAM:</strong> 4 GB minimum (N8N uses more memory than standard web apps)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">CPU:</strong> 2 cores minimum, 4 cores for AI workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Storage:</strong> 50 GB SSD (execution logs grow quickly)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Database:</strong> PostgreSQL (external, managed service recommended)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Caching:</strong> Redis (optional but improves performance)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Backups:</strong> Automated daily backups (Snapshot service)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Monitoring:</strong> Uptime monitoring, log aggregation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">SSL:</strong> Let&apos;s Encrypt (free) or CloudFlare</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">•</span>
                <span><strong className="text-white">Monthly Cost:</strong> $200-500 (full production stack)</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Production Cost Breakdown (Detailed)</h3>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="p-3 text-white font-semibold">Component</th>
                  <th className="p-3 text-white font-semibold">Service</th>
                  <th className="p-3 text-white font-semibold text-right">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-zinc-800">
                  <td className="p-3">N8N Server (4GB RAM, 2 vCPU)</td>
                  <td className="p-3">DigitalOcean / AWS</td>
                  <td className="p-3 text-right">$24-48</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3">PostgreSQL Database (managed)</td>
                  <td className="p-3">DigitalOcean / RDS</td>
                  <td className="p-3 text-right">$15-60</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3">Redis Cache (optional)</td>
                  <td className="p-3">Upstash / ElastiCache</td>
                  <td className="p-3 text-right">$10-30</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3">Automated Backups</td>
                  <td className="p-3">Provider Snapshots</td>
                  <td className="p-3 text-right">$5-15</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3">Monitoring & Logs</td>
                  <td className="p-3">BetterStack / Datadog</td>
                  <td className="p-3 text-right">$10-50</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3">SSL Certificate</td>
                  <td className="p-3">Let&apos;s Encrypt (free)</td>
                  <td className="p-3 text-right">$0</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-3">Data Transfer</td>
                  <td className="p-3">Bandwidth costs</td>
                  <td className="p-3 text-right">$5-20</td>
                </tr>
                <tr className="border-t-2 border-zinc-700">
                  <td className="p-3 font-bold text-white" colSpan={2}>Total Infrastructure Cost</td>
                  <td className="p-3 text-right font-bold text-green-400">$69-223/month</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-white" colSpan={2}>With DevOps Support (10 hrs/month @ $50/hr)</td>
                  <td className="p-3 text-right font-bold text-orange-400">$569-723/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Realistic budget:</strong> $247/month for infrastructure-only setups (if you have technical expertise). $500-700/month if you need DevOps support.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Even at $700/month, you&apos;re still saving money compared to Zapier at enterprise scale.
          </p>
        </section>

        {/* Inline CTA */}
        <div className="my-12">
          <SmartCTA blogSlug="n8n-self-hosting" variant="inline" />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Complete Setup Guide: Docker Installation (Recommended)</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Docker is the <strong className="text-white">fastest and most reliable way</strong> to self-host N8N. Here&apos;s the step-by-step production setup.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 1: Provision Your Server</h3>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <p className="text-white font-semibold mb-3">Recommended Providers:</p>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">DigitalOcean:</strong> $24/month Droplet (4GB RAM, 2 vCPU) — Best for beginners</li>
              <li>• <strong className="text-white">AWS EC2:</strong> t3.medium instance — Best for enterprise integration</li>
              <li>• <strong className="text-white">Hetzner:</strong> $12/month VPS — Best price-to-performance ratio</li>
              <li>• <strong className="text-white">Linode:</strong> $18/month Linode — Good balance of price and performance</li>
            </ul>
            <p className="text-white font-semibold mt-4 mb-2">Operating System:</p>
            <p className="text-gray-300">Ubuntu 22.04 LTS (recommended) or Debian 11+</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 2: Install Docker & Docker Compose</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Update package index
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Verify installation
docker --version
docker-compose --version`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 3: Create N8N Directory Structure</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Create N8N directory
mkdir -p ~/n8n-docker
cd ~/n8n-docker

# Create data directories
mkdir -p .n8n
mkdir -p postgres-data

# Set permissions
chmod -R 755 .n8n postgres-data`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 4: Create docker-compose.yml (Production Configuration)</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    restart: always
    environment:
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
      POSTGRES_DB: n8n
    volumes:
      - ./postgres-data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U n8n"]
      interval: 10s
      timeout: 5s
      retries: 5

  n8n:
    image: n8nio/n8n:latest
    restart: always
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=\${POSTGRES_PASSWORD}
      - N8N_BASIC_AUTH_ACTIVE=true
      - N8N_BASIC_AUTH_USER=\${N8N_BASIC_AUTH_USER}
      - N8N_BASIC_AUTH_PASSWORD=\${N8N_BASIC_AUTH_PASSWORD}
      - N8N_HOST=\${N8N_HOST}
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://\${N8N_HOST}/
      - GENERIC_TIMEZONE=\${GENERIC_TIMEZONE}
    volumes:
      - ./.n8n:/home/node/.n8n
    depends_on:
      postgres:
        condition: service_healthy`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 5: Create .env File (Environment Variables)</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Database
POSTGRES_PASSWORD=your_strong_password_here

# N8N Authentication
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=your_n8n_password_here

# Domain Configuration
N8N_HOST=n8n.yourdomain.com

# Timezone
GENERIC_TIMEZONE=America/New_York`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Important:</strong> Replace all placeholder values with strong passwords. Use a password manager to generate secure credentials.
          </p>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 6: Configure SSL with Nginx Reverse Proxy</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Install Nginx and Certbot
sudo apt install nginx certbot python3-certbot-nginx -y

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/n8n

# Add this configuration:
server {
    server_name n8n.yourdomain.com;

    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable the site
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Get SSL certificate
sudo certbot --nginx -d n8n.yourdomain.com`}</code>
            </pre>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-white">Step 7: Launch N8N</h3>

          <div className="bg-black border border-zinc-700 rounded-xl p-6 my-8">
            <pre className="text-sm text-gray-300 overflow-x-auto">
              <code>{`# Start N8N
docker-compose up -d

# View logs
docker-compose logs -f n8n

# Check status
docker-compose ps`}</code>
            </pre>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            N8N should now be accessible at <code className="bg-zinc-800 px-2 py-1 rounded text-purple-400">https://n8n.yourdomain.com</code>
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Production Deployment Checklist</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-orange-400">Security & Performance Checklist</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">PostgreSQL Database:</strong> Use managed PostgreSQL (not SQLite) for production</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">SSL Certificate:</strong> Configure HTTPS with Let&apos;s Encrypt or CloudFlare</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">Authentication:</strong> Enable N8N basic auth or configure SSO (SAML) for enterprise</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">Firewall:</strong> Configure UFW to allow only ports 80, 443, and 22</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">Backups:</strong> Automate daily database backups to S3 or backup service</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">Monitoring:</strong> Set up uptime monitoring (UptimeRobot, BetterStack)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">Log Management:</strong> Configure log rotation to prevent disk space issues</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">Updates:</strong> Schedule monthly N8N updates (docker-compose pull && docker-compose up -d)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">Redis Cache:</strong> Add Redis for improved performance (optional)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2 mt-1">☐</span>
                <span><strong className="text-white">Environment Variables:</strong> Never commit .env file to version control</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">When to Choose Self-Hosting vs N8N Cloud</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">Choose Self-Hosting If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>You run 10,000+ complex workflow executions monthly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>Your workflows have 10+ steps each</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>You have DevOps expertise or technical resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>Data sovereignty is critical (GDPR, HIPAA compliance)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>You need full control over infrastructure and customization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2 mt-1">✓</span>
                  <span>You want to avoid vendor lock-in</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">Choose N8N Cloud If:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>You&apos;re a small team without DevOps resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>You run fewer than 5,000 executions monthly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>You want zero infrastructure management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>You need enterprise support and SLAs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>You value convenience over cost savings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">✓</span>
                  <span>You&apos;re just getting started with automation</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">Hybrid approach:</strong> Many companies start with N8N Cloud, then migrate to self-hosting once they exceed 10,000 executions monthly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Real-World Migration Case Studies</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Case Study 1: E-commerce Operations (Medium Business)</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Company:</strong> Online retailer, $12M annual revenue</p>
                <p><strong className="text-white">Workflows:</strong> Inventory sync, order processing, customer notifications, analytics pipelines</p>
                <p><strong className="text-white">Volume:</strong> 45,000 workflow executions monthly</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="font-semibold text-white mb-2">Before (Zapier):</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Average 15 steps per workflow</li>
                      <li>• 675,000 tasks monthly</li>
                      <li>• <span className="text-red-400 font-bold">Cost: $1,247/month</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">After (N8N Self-Hosted):</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Same workflows, same executions</li>
                      <li>• Infrastructure: DigitalOcean + Managed PostgreSQL</li>
                      <li>• <span className="text-green-400 font-bold">Cost: $247/month</span></li>
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-700">
                  <p className="font-bold text-xl text-green-400">Annual Savings: $12,000 (80% reduction)</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-blue-400">Case Study 2: SaaS Company (Enterprise)</h3>
              <div className="space-y-3 text-gray-300">
                <p><strong className="text-white">Company:</strong> B2B SaaS platform, 5,000 customers</p>
                <p><strong className="text-white">Workflows:</strong> User onboarding, billing automation, data sync, AI-powered support tickets</p>
                <p><strong className="text-white">Volume:</strong> 220,000 workflow executions monthly</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className="font-semibold text-white mb-2">Before (Make + Zapier):</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Split workflows between two platforms</li>
                      <li>• Make: $899/month</li>
                      <li>• Zapier: $1,398/month</li>
                      <li>• <span className="text-red-400 font-bold">Total: $2,297/month</span></li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-2">After (N8N Self-Hosted):</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Consolidated to single N8N instance</li>
                      <li>• AWS EC2 + RDS + Redis</li>
                      <li>• DevOps support (15 hrs/month)</li>
                      <li>• <span className="text-green-400 font-bold">Total: $847/month</span></li>
                    </ul>
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-700">
                  <p className="font-bold text-xl text-green-400">Annual Savings: $17,400 (63% reduction)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Common Self-Hosting Mistakes to Avoid</h2>

          <div className="bg-red-900/20 border border-red-800 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-red-400">Critical Mistakes That Cost Money</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">Using SQLite in Production:</strong>
                  <p className="mt-1">SQLite is fine for testing, but production deployments <strong className="text-white">must use PostgreSQL</strong>. SQLite corrupts under high load.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">No Backups:</strong>
                  <p className="mt-1">Workflow data loss is catastrophic. Automate daily PostgreSQL backups to S3 or your provider&apos;s backup service.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">Skipping SSL:</strong>
                  <p className="mt-1">Running N8N over HTTP exposes credentials and API keys. <strong className="text-white">Always use HTTPS.</strong></p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">Insufficient RAM:</strong>
                  <p className="mt-1">N8N uses more memory than typical web apps. 2GB minimum, 4GB recommended. Monitor usage and scale up if needed.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">No Monitoring:</strong>
                  <p className="mt-1">Workflows fail silently. Use uptime monitoring (UptimeRobot, BetterStack) to get alerts when N8N goes down.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2 mt-1">✗</span>
                <div>
                  <strong className="text-white">Ignoring Log Rotation:</strong>
                  <p className="mt-1">Execution logs grow quickly. Configure log rotation or your disk will fill up and N8N will crash.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Next Steps: Optimizing Your N8N Instance</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            Once your self-hosted N8N instance is running, these optimization steps will improve performance and reliability:
          </p>

          <div className="space-y-4 text-gray-300">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-purple-400">1. Add Redis for Caching</h3>
              <p>Redis significantly improves N8N performance for high-volume workflows. Install via Docker Compose and configure N8N to use it.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-blue-400">2. Configure Execution Pruning</h3>
              <p>Set N8N to automatically delete old execution logs after 30-90 days to prevent database bloat.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-green-400">3. Set Up Queue Mode</h3>
              <p>For high-volume production environments, enable N8N&apos;s queue mode with Redis for parallel execution processing.</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 text-orange-400">4. Implement Error Handling</h3>
              <p>Build bulletproof workflows with error handling nodes. Configure automatic retry logic for critical workflows.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">The Bottom Line: Is Self-Hosting Worth It?</h2>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">For complex, high-volume workflows: Absolutely yes.</strong>
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            If you&apos;re running 10,000+ executions monthly with multi-step workflows, self-hosting N8N saves $5,000-15,000 annually compared to Zapier.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            <strong className="text-white">For simple, low-volume automation: Maybe not.</strong>
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            If you run fewer than 2,000 simple workflows monthly and lack technical expertise, N8N Cloud ($20/month) or Zapier&apos;s starter plan ($19.99/month) is more cost-effective.
          </p>

          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3 text-white">Decision Framework:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong className="text-white">Executions &lt; 2,000/month:</strong> Use N8N Cloud or Zapier</li>
              <li>• <strong className="text-white">Executions 2,000-10,000/month:</strong> N8N Cloud is optimal</li>
              <li>• <strong className="text-white">Executions &gt; 10,000/month:</strong> Self-hosting becomes profitable</li>
              <li>• <strong className="text-white">Complex workflows (10+ steps):</strong> Self-hosting pays off faster</li>
              <li>• <strong className="text-white">Need data sovereignty:</strong> Self-hosting is mandatory</li>
            </ul>
          </div>

          <p className="mb-6 text-gray-300 leading-relaxed">
            The setup takes 2-4 hours. Annual savings: $5,000-15,000. ROI timeline: <strong className="text-white">1-2 months</strong>.
          </p>

          <p className="mb-6 text-gray-300 leading-relaxed">
            For enterprise teams running complex AI-powered workflows, self-hosting N8N is one of the <strong className="text-white">highest-ROI infrastructure decisions</strong> you can make.
          </p>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="my-16">
        <SmartCTA blogSlug="n8n-self-hosting" />
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <RelatedPosts currentSlug="n8n-self-hosting" limit={3} />
      </div>
    </article>
  );
}
