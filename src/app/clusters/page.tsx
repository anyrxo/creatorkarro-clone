// Content Cluster Management Interface
import { Metadata } from 'next'
import { contentClusterEngine, generateQuickCluster, generateLocalCluster } from '@/lib/content-cluster-engine'
import ClusterVisualization from '@/components/ClusterVisualization'

export const metadata: Metadata = {
  title: 'Content Cluster Architecture | SEO Domination Dashboard',
  description: 'Visualize and manage content clusters for maximum SEO impact. Topic authority, internal linking, and semantic optimization.',
  robots: 'noindex, nofollow' // Keep internal tool private
}

// Generate multiple clusters for comprehensive topic coverage
const coreTopics = [
  'ai-automation-business',
  'instagram-growth-strategies', 
  'digital-marketing-automation',
  'passive-income-systems',
  'online-course-creation'
]

const generatedClusters = coreTopics.map(topic => generateQuickCluster(topic, 'large'))

export default function ClustersPage() {
  // Calculate overall statistics
  const totalPages = generatedClusters.reduce((sum, cluster) => 
    sum + 1 + cluster.clusterPages.length, 0) // +1 for pillar page
  
  const totalAuthority = generatedClusters.reduce((sum, cluster) => 
    sum + cluster.topicAuthority, 0)
  
  const totalInternalLinks = generatedClusters.reduce((sum, cluster) => 
    sum + cluster.internalLinkStructure.length, 0)
  
  const averageAuthority = Math.round(totalAuthority / generatedClusters.length)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            Content Cluster Architecture
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Semantic SEO domination through strategic content clustering and internal linking
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400">{generatedClusters.length}</h3>
              <p className="text-gray-300">Active Clusters</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400">{totalPages}</h3>
              <p className="text-gray-300">Total Pages</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400">{averageAuthority}</h3>
              <p className="text-gray-300">Avg Authority</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400">{totalInternalLinks}</h3>
              <p className="text-gray-300">Internal Links</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cluster Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Content Cluster Overview</h2>
          
          <div className="grid gap-8">
            {generatedClusters.map((cluster, index) => (
              <div key={cluster.id} className="bg-gray-800 rounded-lg p-8">
                {/* Cluster Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {cluster.pillarPage.title}
                    </h3>
                    <p className="text-gray-300">
                      Authority Score: <span className="text-blue-400 font-semibold">{cluster.topicAuthority}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Cluster Pages</div>
                    <div className="text-2xl font-bold text-green-400">{cluster.clusterPages.length}</div>
                  </div>
                </div>
                
                {/* Pillar Page Details */}
                <div className="bg-gray-700 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">
                    🏛️ Pillar Page: {cluster.pillarPage.primaryKeyword}
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">URL:</span>
                      <div className="text-white font-mono">{cluster.pillarPage.url}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Word Count:</span>
                      <div className="text-white">{cluster.pillarPage.wordCount.toLocaleString()}</div>
                    </div>
                    <div>
                      <span className="text-gray-400">Sections:</span>
                      <div className="text-white">{cluster.pillarPage.sections.length}</div>
                    </div>
                  </div>
                  
                  {/* Pillar Sections */}
                  <div className="mt-4">
                    <div className="text-gray-400 text-sm mb-2">Content Sections:</div>
                    <div className="grid md:grid-cols-2 gap-2">
                      {cluster.pillarPage.sections.slice(0, 8).map((section, i) => (
                        <div key={i} className="text-sm text-gray-300 bg-gray-600 p-2 rounded">
                          {section.heading}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Cluster Pages Grid */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">
                    📄 Cluster Pages ({cluster.clusterPages.length})
                  </h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cluster.clusterPages.slice(0, 9).map((page, i) => (
                      <div key={page.id} className="bg-gray-700 p-4 rounded">
                        <div className="text-sm font-semibold text-white mb-1 truncate">
                          {page.title}
                        </div>
                        <div className="text-xs text-gray-400 mb-2 font-mono">
                          {page.url}
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-blue-300">
                            {page.intent}
                          </span>
                          <span className="text-yellow-300">
                            Vol: {page.searchVolume}
                          </span>
                          <span className="text-red-300">
                            KD: {page.difficulty}
                          </span>
                        </div>
                      </div>
                    ))}
                    {cluster.clusterPages.length > 9 && (
                      <div className="bg-gray-600 p-4 rounded flex items-center justify-center">
                        <span className="text-gray-300">
                          +{cluster.clusterPages.length - 9} more pages
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Internal Link Structure */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">
                    🔗 Internal Link Structure ({cluster.internalLinkStructure.length} links)
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-gray-700 p-3 rounded">
                      <div className="text-yellow-400 font-semibold">Pillar → Cluster</div>
                      <div className="text-white">
                        {cluster.internalLinkStructure.filter(l => l.linkType === 'pillar-to-cluster').length} links
                      </div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded">
                      <div className="text-blue-400 font-semibold">Cluster → Pillar</div>
                      <div className="text-white">
                        {cluster.internalLinkStructure.filter(l => l.linkType === 'cluster-to-pillar').length} links
                      </div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded">
                      <div className="text-green-400 font-semibold">Cluster ↔ Cluster</div>
                      <div className="text-white">
                        {cluster.internalLinkStructure.filter(l => l.linkType === 'cluster-to-cluster').length} links
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Competitor Gaps */}
                {cluster.competitorGap.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">
                      ⚡ Content Opportunities (Top 5)
                    </h4>
                    <div className="space-y-2">
                      {cluster.competitorGap.slice(0, 5).map((gap, i) => (
                        <div key={i} className="bg-gray-700 p-3 rounded flex justify-between items-center">
                          <div>
                            <div className="text-white font-semibold">{gap.keyword}</div>
                            <div className="text-xs text-gray-400">{gap.suggestedContent}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-green-400 font-semibold">
                              {gap.opportunity}/100
                            </div>
                            <div className="text-xs text-gray-400">
                              KD: {gap.difficulty}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Semantic Keywords */}
                <div>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">
                    🎯 Semantic Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cluster.semanticKeywords.slice(0, 12).map((keyword, i) => (
                      <span key={i} className="bg-cyan-900 text-cyan-200 px-3 py-1 rounded-full text-sm">
                        {keyword}
                      </span>
                    ))}
                    {cluster.semanticKeywords.length > 12 && (
                      <span className="bg-gray-600 text-gray-300 px-3 py-1 rounded-full text-sm">
                        +{cluster.semanticKeywords.length - 12} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Implementation Strategy</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Week 1: Pillar Page Creation</h3>
                <p className="text-gray-300">
                  Create {generatedClusters.length} comprehensive pillar pages with {Math.round(generatedClusters.reduce((sum, c) => sum + c.pillarPage.wordCount, 0) / 1000)}k+ words total.
                  Focus on topic authority and comprehensive coverage.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Week 2-3: Cluster Page Development</h3>
                <p className="text-gray-300">
                  Build {Math.round(totalPages * 0.6)} high-priority cluster pages targeting long-tail keywords.
                  Focus on search intent matching and conversion optimization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Week 4: Internal Link Implementation</h3>
                <p className="text-gray-300">
                  Deploy {totalInternalLinks} strategic internal links to create powerful link equity flow.
                  Implement contextual anchor text optimization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Ongoing: Monitor & Expand</h3>
                <p className="text-gray-300">
                  Track rankings, expand successful clusters, and fill competitor content gaps.
                  Target {generatedClusters.reduce((sum, c) => sum + c.competitorGap.length, 0)} identified opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Options */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Export Cluster Data</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
              📄 Export JSON
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold">
              🗺️ Generate Sitemap
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
              📝 Export Markdown
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold">
              📊 Analytics Report
            </button>
          </div>
          
          <div className="mt-8 p-6 bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-3">Projected SEO Impact</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">+{Math.round(totalAuthority * 0.3)}%</div>
                <div className="text-sm text-gray-400">Organic Traffic</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">+{Math.round(totalPages * 1.2)}</div>
                <div className="text-sm text-gray-400">Keyword Rankings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">+{Math.round(averageAuthority * 0.8)}%</div>
                <div className="text-sm text-gray-400">Domain Authority</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">90%</div>
                <div className="text-sm text-gray-400">Indexation Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}