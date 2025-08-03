'use client'

import React from 'react'
import Link from 'next/link'

export default function CloudAutomationInfrastructurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800"><section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
            CLOUD INFRASTRUCTURE AUTOMATION
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Build $1M+ Self-Healing
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Cloud Infrastructure</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Master enterprise-grade cloud automation with Kubernetes, Terraform, and AWS. Build infrastructure that scales automatically, self-heals instantly, and costs 70% less to operate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#infrastructure-tools" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Start Building Infrastructure
            </Link>
            <Link href="#scaling-strategies" className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              View Scaling Strategies
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-300">Infrastructure Uptime</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Deployments</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
              <div className="text-gray-300">Auto Scaling Capacity</div>
            </div>
          </div>
        </div>
      </section>

      <section id="infrastructure-tools" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Essential <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Infrastructure Tools</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Industry-leading tools for building automated, scalable, and resilient cloud infrastructure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-blue-400 font-bold">K8s</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Kubernetes</h3>
                  <p className="text-gray-400">Container Orchestration</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Automated container deployment, scaling, and management. Deploy applications that automatically scale from 1 to 10,000 instances.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Auto-scaling</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Self-healing</span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Load balancing</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-purple-400 font-bold">TF</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Terraform</h3>
                  <p className="text-gray-400">Infrastructure as Code</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Declarative infrastructure provisioning across AWS, Azure, and GCP. Version control your entire infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Multi-cloud</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Version control</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">State management</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-green-400 font-bold">λ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AWS Lambda</h3>
                  <p className="text-gray-400">Serverless Computing</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Event-driven serverless functions that scale automatically. Pay only for compute time you use, from milliseconds to hours.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Event-driven</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Auto-scaling</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Pay-per-use</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-yellow-400 font-bold">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Prometheus</h3>
                  <p className="text-gray-400">Monitoring & Alerting</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Real-time monitoring with powerful alerting. Track every metric and get notified before problems become outages.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Real-time</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Custom metrics</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Smart alerts</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-red-400 font-bold">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">ArgoCD</h3>
                  <p className="text-gray-400">GitOps Deployment</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Declarative continuous deployment using Git as the source of truth. Automatic rollbacks and drift detection.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">GitOps</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Auto-rollback</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">Drift detection</span>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-cyan-400 font-bold">🔧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ansible</h3>
                  <p className="text-gray-400">Configuration Management</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Agentless automation for configuration management and application deployment. Simple YAML playbooks.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Agentless</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">YAML-based</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Idempotent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Proven <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Architecture Patterns</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Battle-tested architectural patterns for building resilient, scalable cloud infrastructure
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Microservices + API Gateway</h3>
              <p className="text-gray-300 mb-6">
                Decompose monoliths into independently deployable services with centralized routing, authentication, and rate limiting.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Independent scaling and deployment</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Technology diversity per service</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Fault isolation and resilience</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Event-Driven Architecture</h3>
              <p className="text-gray-300 mb-6">
                Asynchronous communication using event buses, queues, and pub/sub patterns for loose coupling and scalability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Decoupled service communication</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Real-time data processing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Elastic scaling capabilities</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Multi-Cloud Strategy</h3>
              <p className="text-gray-300 mb-6">
                Deploy across AWS, Azure, and GCP for vendor independence, cost optimization, and geographic distribution.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Vendor lock-in avoidance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Cost optimization through competition</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Geographic redundancy</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Infrastructure as Code</h3>
              <p className="text-gray-300 mb-6">
                Version-controlled, repeatable infrastructure deployments with automated testing and validation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Reproducible environments</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Version control and rollbacks</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Automated compliance testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="scaling-strategies" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Advanced <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Scaling Strategies</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Proven techniques for scaling from startup to enterprise with millions of users
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Horizontal Auto-Scaling</h3>
              <p className="text-gray-300 mb-4">
                Automatically add/remove instances based on demand metrics like CPU, memory, or custom application metrics.
              </p>
              <div className="text-blue-400 font-mono text-sm">
                Target: 70% CPU utilization<br/>
                Min instances: 2<br/>
                Max instances: 100<br/>
                Scale-out cooldown: 5 minutes
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-500/10 to-cyan-600/10 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Vertical Auto-Scaling</h3>
              <p className="text-gray-300 mb-4">
                Dynamically adjust CPU and memory allocation for containers and VMs based on real-time resource needs.
              </p>
              <div className="text-green-400 font-mono text-sm">
                CPU: 100m - 2000m<br/>
                Memory: 128Mi - 4Gi<br/>
                Update frequency: 15s<br/>
                Recommendation window: 24h
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-4">Predictive Scaling</h3>
              <p className="text-gray-300 mb-4">
                Use machine learning to predict traffic patterns and scale infrastructure before demand spikes occur.
              </p>
              <div className="text-purple-400 font-mono text-sm">
                Prediction window: 48 hours<br/>
                ML model accuracy: 94%<br/>
                Pre-scale buffer: 15 minutes<br/>
                Cost savings: 35%
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Real-World <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Use Cases</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            How industry leaders use cloud automation to achieve unprecedented scale and reliability
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3"></span>
                <h3 className="text-xl font-bold text-white">E-commerce Platform</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Global e-commerce company handling 10M+ daily transactions with zero downtime during Black Friday sales.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Peak Traffic Handling:</span>
                  <span className="text-green-400">1000x normal load</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Auto-scaling Response:</span>
                  <span className="text-green-400">&lt; 30 seconds</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Infrastructure Cost:</span>
                  <span className="text-green-400">60% reduction</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Deployment Frequency:</span>
                  <span className="text-green-400">50+ per day</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="w-3 h-3 bg-blue-400 rounded-full mr-3"></span>
                <h3 className="text-xl font-bold text-white">Financial Services</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Banking platform processing millions of transactions with strict compliance and security requirements.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Transaction Processing:</span>
                  <span className="text-blue-400">50M+ per day</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Security Compliance:</span>
                  <span className="text-blue-400">SOC2 + PCI DSS</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Uptime Requirement:</span>
                  <span className="text-blue-400">99.99%</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Disaster Recovery:</span>
                  <span className="text-blue-400">&lt; 15 minutes</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="w-3 h-3 bg-purple-400 rounded-full mr-3"></span>
                <h3 className="text-xl font-bold text-white">Media Streaming</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Video streaming platform serving millions of concurrent users worldwide with adaptive bitrate streaming.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>Concurrent Users:</span>
                  <span className="text-purple-400">5M+ peak</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Content Delivery:</span>
                  <span className="text-purple-400">Global CDN</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Video Quality:</span>
                  <span className="text-purple-400">Adaptive 4K/8K</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Latency Target:</span>
                  <span className="text-purple-400">&lt; 100ms</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="flex items-center mb-4">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                <h3 className="text-xl font-bold text-white">IoT Manufacturing</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Smart factory with thousands of IoT sensors requiring real-time data processing and predictive maintenance.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>IoT Devices:</span>
                  <span className="text-yellow-400">100K+ sensors</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Data Processing:</span>
                  <span className="text-yellow-400">Real-time ML</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Predictive Accuracy:</span>
                  <span className="text-yellow-400">96% uptime</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Edge Computing:</span>
                  <span className="text-yellow-400">50+ locations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>

          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">TC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">TechCorp - $2M Infrastructure Savings</h3>
                  <p className="text-gray-300 mb-4">
                    "Implementing cloud automation reduced our infrastructure costs by 65% while improving reliability. Our deployment time went from 6 hours to 6 minutes, and we achieved 99.99% uptime."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-blue-400">65% cost reduction</span>
                    <span className="text-green-400">60x faster deployments</span>
                    <span className="text-purple-400">99.99% uptime</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-green-500/10 to-cyan-600/10 rounded-xl border border-green-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">FS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">FinanceScale - Zero-Downtime Scaling</h3>
                  <p className="text-gray-300 mb-4">
                    "Our automated infrastructure scales from 10 to 1000 instances seamlessly during market volatility. We process 100M+ transactions daily with complete reliability and regulatory compliance."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-green-400">100x auto-scaling</span>
                    <span className="text-cyan-400">100M+ daily transactions</span>
                    <span className="text-blue-400">Zero downtime</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">MS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">MediaStream - Global Scale</h3>
                  <p className="text-gray-300 mb-4">
                    "Cloud automation enabled us to serve 10M concurrent users during our biggest live event. The infrastructure scaled automatically across 50+ regions without any manual intervention."
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-purple-400">10M concurrent users</span>
                    <span className="text-pink-400">50+ global regions</span>
                    <span className="text-red-400">Auto-scaling events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-blue-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Build <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Enterprise Infrastructure?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using cloud automation to scale infinitely while reducing costs by 70%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Start Your Infrastructure Journey
            </Link>
            <Link href="/blog" className="px-8 py-4 border border-gray-600 rounded-xl text-white font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Explore More Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}