// Parasite SEO Dashboard - Campaign Management Interface
import { Metadata } from 'next'
import { 
  deployAggressiveCampaign, 
  deploySocialAuthorityCampaign, 
  deployEducationalCampaign 
} from '@/lib/parasite-seo-engine'
import ParasiteCampaignDashboard from '@/components/ParasiteCampaignDashboard'

export const metadata: Metadata = {
  title: 'Parasite SEO Dashboard | High Authority Link Building',
  description: 'Deploy automated parasite SEO campaigns across high-authority platforms. Build backlinks and authority through strategic content placement.',
  robots: 'noindex, nofollow' // Keep internal tool private
}

// Deploy sample campaigns for demonstration
const targetKeywords = [
  'ai automation tools',
  'instagram growth bot', 
  'social media automation',
  'digital marketing automation',
  'content creation tools',
  'email marketing automation',
  'lead generation software',
  'business process automation'
]

// Generate sample campaign data
async function generateSampleCampaigns() {
  const campaigns = [
    await deployAggressiveCampaign(targetKeywords.slice(0, 4)),
    await deploySocialAuthorityCampaign(targetKeywords.slice(2, 6)),
    await deployEducationalCampaign(targetKeywords.slice(4, 8))
  ]
  
  return campaigns
}

export default async function ParasitePage() {
  const campaigns = await generateSampleCampaigns()
  
  // Calculate aggregate statistics
  const totalContent = campaigns.reduce((sum, campaign) => sum + campaign.deployed.length, 0)
  const totalBacklinks = campaigns.reduce((sum, campaign) => 
    sum + campaign.projectedMetrics.totalBacklinks, 0)
  const averageAuthority = Math.round(
    campaigns.reduce((sum, campaign) => sum + campaign.projectedMetrics.averageAuthority, 0) / campaigns.length
  )
  const totalTraffic = campaigns.reduce((sum, campaign) => 
    sum + campaign.projectedMetrics.estimatedTraffic, 0)

  // Extract unique platforms
  const allPlatforms = campaigns.flatMap(campaign => 
    campaign.deployed.map(content => content.platform)
  )
  const uniquePlatforms = [...new Set(allPlatforms)]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-900 to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-4xl">🦠</span>
            <h1 className="text-4xl font-bold">
              Parasite SEO Dashboard
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            High-authority domain exploitation for rapid backlink acquisition and ranking dominance
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-400">{totalContent}</h3>
              <p className="text-gray-300">Deployed Content</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-400">{totalBacklinks}</h3>
              <p className="text-gray-300">Total Backlinks</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-400">{averageAuthority}</h3>
              <p className="text-gray-300">Avg Authority</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-2xl font-bold text-purple-400">{totalTraffic.toLocaleString()}</h3>
              <p className="text-gray-300">Est. Traffic/Month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">High Authority Platforms</h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {uniquePlatforms.map((platform, index) => {
              const authorities = {
                'Medium': 96, 'LinkedIn Pulse': 98, 'Reddit': 91, 'GitHub': 96,
                'Dev.to': 75, 'Hashnode': 72, 'Quora': 93, 'YouTube': 100,
                'Notion Public Pages': 83, 'Substack': 82, 'Ghost.org': 78
              }
              const authority = authorities[platform as keyof typeof authorities] || 80
              const isDofollow = ['GitHub', 'Dev.to', 'Hashnode', 'Notion Public Pages', 'Substack', 'Ghost.org'].includes(platform)
              
              return (
                <div key={platform} className="bg-gray-800 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-white">{platform}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      isDofollow ? 'bg-green-600 text-white' : 'bg-yellow-600 text-white'
                    }`}>
                      {isDofollow ? 'DOFOLLOW' : 'NOFOLLOW'}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Authority:</span>
                      <span className="text-white font-semibold">{authority}/100</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${authority}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Campaign Results */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Active Campaigns</h2>
          
          <div className="space-y-8">
            {campaigns.map((campaign, index) => {
              const strategyNames = [
                'Aggressive Tech Domination',
                'Social Authority Blitz', 
                'Educational Content Parasite'
              ]
              const strategyColors = ['red', 'blue', 'green']
              const color = strategyColors[index]
              
              return (
                <div key={index} className="bg-gray-900 rounded-lg p-8">
                  {/* Campaign Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {strategyNames[index]}
                      </h3>
                      <p className="text-gray-300">
                        {campaign.deployed.length} pieces deployed across {
                          [...new Set(campaign.deployed.map(c => c.platform))].length
                        } platforms
                      </p>
                    </div>
                    <div className={`bg-${color}-600 px-4 py-2 rounded-lg`}>
                      <div className="text-white font-semibold">
                        Authority: {campaign.projectedMetrics.averageAuthority}/100
                      </div>
                    </div>
                  </div>
                  
                  {/* Projected Metrics */}
                  <div className="grid md:grid-cols-4 gap-6 mb-6">
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-2xl font-bold text-green-400">
                        {campaign.projectedMetrics.totalBacklinks}
                      </div>
                      <div className="text-sm text-gray-400">Backlinks</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-2xl font-bold text-blue-400">
                        {campaign.projectedMetrics.estimatedTraffic.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-400">Est. Traffic/Month</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-2xl font-bold text-purple-400">
                        {campaign.projectedMetrics.indexationRate}%
                      </div>
                      <div className="text-sm text-gray-400">Indexation Rate</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-2xl font-bold text-yellow-400">
                        {Math.round(campaign.projectedMetrics.totalBacklinks / campaign.deployed.length)}
                      </div>
                      <div className="text-sm text-gray-400">Links/Content</div>
                    </div>
                  </div>
                  
                  {/* Sample Content */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Sample Deployed Content</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {campaign.deployed.slice(0, 4).map((content, contentIndex) => (
                        <div key={contentIndex} className="bg-gray-800 p-4 rounded">
                          <div className="flex justify-between items-start mb-2">
                            <span className={`px-2 py-1 rounded text-xs font-semibold bg-${color}-600 text-white`}>
                              {content.platform}
                            </span>
                            <span className="text-xs text-gray-400">
                              {content.backlinks.length} links
                            </span>
                          </div>
                          <h5 className="text-sm font-semibold text-white mb-1 line-clamp-2">
                            {content.title}
                          </h5>
                          <p className="text-xs text-gray-400 mb-2">
                            Target: {content.targetKeyword}
                          </p>
                          <div className="text-xs text-blue-400 font-mono truncate">
                            {content.url}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {campaign.deployed.length > 4 && (
                      <div className="mt-4 text-center">
                        <span className="text-gray-400">
                          +{campaign.deployed.length - 4} more content pieces deployed
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Strategy Breakdown */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Deployment Strategies</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-900 bg-opacity-20 border border-red-500 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl"></span>
                <h3 className="text-xl font-bold text-red-400">Aggressive Tech</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• High-authority dev platforms</li>
                <li>• Technical content focus</li>
                <li>• Maximum link velocity</li>
                <li>• Developer audience targeting</li>
                <li>• Open source integration</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-red-500">
                <div className="text-red-400 font-semibold">Platforms:</div>
                <div className="text-sm text-gray-300">Medium, Dev.to, GitHub, Hashnode</div>
              </div>
            </div>
            
            <div className="bg-blue-900 bg-opacity-20 border border-blue-500 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl"></span>
                <h3 className="text-xl font-bold text-blue-400">Social Authority</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Professional networks</li>
                <li>• Thought leadership content</li>
                <li>• Business audience focus</li>
                <li>• Social proof building</li>
                <li>• Industry expertise</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-blue-500">
                <div className="text-blue-400 font-semibold">Platforms:</div>
                <div className="text-sm text-gray-300">LinkedIn, Medium, Quora, Reddit</div>
              </div>
            </div>
            
            <div className="bg-green-900 bg-opacity-20 border border-green-500 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl"></span>
                <h3 className="text-xl font-bold text-green-400">Educational</h3>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Learning platforms</li>
                <li>• Tutorial content</li>
                <li>• Student/learner targeting</li>
                <li>• Resource sharing</li>
                <li>• Knowledge building</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-green-500">
                <div className="text-green-400 font-semibold">Platforms:</div>
                <div className="text-sm text-gray-300">YouTube, Notion, GitHub, Stack Overflow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Implementation Timeline</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Week 1: Account Setup & Authority Building</h3>
                <p className="text-gray-300">
                  Create professional profiles across {uniquePlatforms.length} high-authority platforms.
                  Establish credibility and initial content presence.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Week 2: Content Deployment</h3>
                <p className="text-gray-300">
                  Deploy {totalContent} pieces of high-quality content with strategic internal linking.
                  Focus on keyword targeting and contextual relevance.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Week 3: Link Building & Optimization</h3>
                <p className="text-gray-300">
                  Build {totalBacklinks} strategic backlinks across platforms.
                  Optimize anchor text distribution and link equity flow.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Week 4: Monitoring & Scale</h3>
                <p className="text-gray-300">
                  Track indexation rates, monitor rankings, and scale successful campaigns.
                  Expected {Math.round(averageAuthority * 0.9)}% indexation rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Risk Mitigation & Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-400 mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Gradual content deployment to avoid detection</li>
                <li>• Platform-specific content optimization</li>
                <li>• Diverse anchor text distribution</li>
                <li>• Quality content over quantity approach</li>
                <li>• Regular performance monitoring</li>
                <li>• Community engagement and interaction</li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-400 mb-3">⚠ Risk Mitigation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Account diversification across platforms</li>
                <li>• Content variation to avoid footprints</li>
                <li>• Moderate link velocity implementation</li>
                <li>• Platform TOS compliance monitoring</li>
                <li>• Backup content and account strategies</li>
                <li>• Algorithm update adaptation protocols</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-yellow-900 bg-opacity-20 border border-yellow-500 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3"> Expected Results</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">+{Math.round(totalTraffic * 0.3)}</div>
                <div className="text-sm text-gray-400">Monthly Organic Traffic</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">+{Math.round(totalBacklinks * 0.85)}</div>
                <div className="text-sm text-gray-400">Quality Backlinks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">+{Math.round(averageAuthority * 0.2)}</div>
                <div className="text-sm text-gray-400">Domain Authority Boost</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">90%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}