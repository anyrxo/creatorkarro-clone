// Content Cluster Visualization Component
'use client'

import { useState } from 'react'

interface ClusterVisualizationProps {
  clusterId: string
  pillarTitle: string
  clusterPages: Array<{
    id: string
    title: string
    keyword: string
    difficulty: number
    searchVolume: number
  }>
  internalLinks: Array<{
    fromPage: string
    toPage: string
    linkType: string
    contextualRelevance: number
  }>
}

export default function ClusterVisualization({
  clusterId,
  pillarTitle,
  clusterPages,
  internalLinks
}: ClusterVisualizationProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'hierarchy' | 'network'>('hierarchy')

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      {/* Controls */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-white">Cluster Visualization</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('hierarchy')}
            className={`px-4 py-2 rounded ${
              viewMode === 'hierarchy' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-600 text-gray-300'
            }`}
          >
            Hierarchy
          </button>
          <button
            onClick={() => setViewMode('network')}
            className={`px-4 py-2 rounded ${
              viewMode === 'network' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-600 text-gray-300'
            }`}
          >
            Network
          </button>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="bg-gray-900 rounded-lg p-8 min-h-96">
        {viewMode === 'hierarchy' ? (
          <HierarchyView
            pillarTitle={pillarTitle}
            clusterPages={clusterPages}
            selectedNode={selectedNode}
            onNodeSelect={setSelectedNode}
          />
        ) : (
          <NetworkView
            pillarTitle={pillarTitle}
            clusterPages={clusterPages}
            internalLinks={internalLinks}
            selectedNode={selectedNode}
            onNodeSelect={setSelectedNode}
          />
        )}
      </div>

      {/* Node Details */}
      {selectedNode && (
        <div className="mt-6 bg-gray-700 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-2">Node Details</h4>
          {selectedNode === 'pillar' ? (
            <div>
              <div className="text-blue-400 font-semibold">{pillarTitle}</div>
              <div className="text-sm text-gray-400 mt-1">Pillar Page - Central Hub</div>
              <div className="text-sm text-gray-300 mt-2">
                Connected to {clusterPages.length} cluster pages
              </div>
            </div>
          ) : (
            (() => {
              const page = clusterPages.find(p => p.id === selectedNode)
              return page ? (
                <div>
                  <div className="text-green-400 font-semibold">{page.title}</div>
                  <div className="text-sm text-gray-400 mt-1">
                    Keyword: {page.keyword}
                  </div>
                  <div className="flex space-x-4 text-sm text-gray-300 mt-2">
                    <span>Volume: {page.searchVolume}</span>
                    <span>Difficulty: {page.difficulty}/100</span>
                  </div>
                </div>
              ) : null
            })()
          )}
        </div>
      )}
    </div>
  )
}

function HierarchyView({
  pillarTitle,
  clusterPages,
  selectedNode,
  onNodeSelect
}: {
  pillarTitle: string
  clusterPages: any[]
  selectedNode: string | null
  onNodeSelect: (node: string) => void
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Pillar Page */}
      <div
        onClick={() => onNodeSelect('pillar')}
        className={`
          bg-blue-600 text-white p-4 rounded-lg mb-8 cursor-pointer
          transition-all duration-200 hover:bg-blue-700
          ${selectedNode === 'pillar' ? 'ring-2 ring-blue-400' : ''}
        `}
      >
        <div className="text-center">
          <div className="font-semibold"> Pillar Page</div>
          <div className="text-sm mt-1 max-w-48 truncate">{pillarTitle}</div>
        </div>
      </div>

      {/* Connection Lines */}
      <div className="relative mb-8">
        <div className="absolute top-0 left-1/2 w-px h-8 bg-gray-500 transform -translate-x-1/2"></div>
        <div className="absolute top-8 left-1/2 w-96 h-px bg-gray-500 transform -translate-x-1/2"></div>
        {clusterPages.slice(0, 8).map((_, index) => {
          const totalPages = Math.min(clusterPages.length, 8)
          const spacing = 384 / (totalPages - 1) // 384px = w-96
          const leftOffset = (spacing * index) - 192 // Center around 0
          return (
            <div
              key={index}
              className="absolute top-8 w-px h-8 bg-gray-500"
              style={{ left: `calc(50% + ${leftOffset}px)` }}
            ></div>
          )
        })}
      </div>

      {/* Cluster Pages */}
      <div className="grid grid-cols-4 gap-4 max-w-4xl">
        {clusterPages.slice(0, 8).map((page) => (
          <div
            key={page.id}
            onClick={() => onNodeSelect(page.id)}
            className={`
              bg-green-600 text-white p-3 rounded cursor-pointer
              transition-all duration-200 hover:bg-green-700
              ${selectedNode === page.id ? 'ring-2 ring-green-400' : ''}
            `}
          >
            <div className="text-center">
              <div className="text-xs font-semibold mb-1"> Cluster</div>
              <div className="text-xs truncate">{page.title}</div>
              <div className="text-xs text-green-200 mt-1">
                Vol: {page.searchVolume}
              </div>
            </div>
          </div>
        ))}
      </div>

      {clusterPages.length > 8 && (
        <div className="mt-4 text-center text-gray-400 text-sm">
          +{clusterPages.length - 8} more cluster pages
        </div>
      )}
    </div>
  )
}

function NetworkView({
  pillarTitle,
  clusterPages,
  internalLinks,
  selectedNode,
  onNodeSelect
}: {
  pillarTitle: string
  clusterPages: any[]
  internalLinks: any[]
  selectedNode: string | null
  onNodeSelect: (node: string) => void
}) {
  // Simplified network visualization
  return (
    <div className="relative h-96 overflow-hidden">
      {/* Central Pillar Node */}
      <div
        onClick={() => onNodeSelect('pillar')}
        className={`
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-blue-600 text-white p-4 rounded-full cursor-pointer
          transition-all duration-200 hover:bg-blue-700
          ${selectedNode === 'pillar' ? 'ring-2 ring-blue-400' : ''}
        `}
        style={{ zIndex: 10 }}
      >
        <div className="text-center">
          <div className="text-xs font-semibold">PILLAR</div>
        </div>
      </div>

      {/* Cluster Nodes in Circle */}
      {clusterPages.slice(0, 12).map((page, index) => {
        const angle = (index * 360) / Math.min(clusterPages.length, 12)
        const radius = 140
        const x = Math.cos(angle * Math.PI / 180) * radius
        const y = Math.sin(angle * Math.PI / 180) * radius
        
        return (
          <div key={page.id}>
            {/* Connection Line */}
            <div
              className="absolute border-t border-gray-500"
              style={{
                top: '50%',
                left: '50%',
                width: `${radius}px`,
                transformOrigin: '0 0',
                transform: `rotate(${angle}deg)`,
                zIndex: 1
              }}
            ></div>
            
            {/* Cluster Node */}
            <div
              onClick={() => onNodeSelect(page.id)}
              className={`
                absolute bg-green-600 text-white p-2 rounded cursor-pointer
                transition-all duration-200 hover:bg-green-700
                ${selectedNode === page.id ? 'ring-2 ring-green-400' : ''}
              `}
              style={{
                top: `calc(50% + ${y}px)`,
                left: `calc(50% + ${x}px)`,
                transform: 'translate(-50%, -50%)',
                zIndex: 5
              }}
            >
              <div className="text-xs text-center w-16">
                <div className="font-semibold truncate">{page.keyword}</div>
                <div className="text-green-200">{page.searchVolume}</div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Inter-cluster connections */}
      {internalLinks
        .filter(link => link.linkType === 'cluster-to-cluster')
        .slice(0, 5)
        .map((link, index) => {
          const fromIndex = clusterPages.findIndex(p => p.id === link.fromPage)
          const toIndex = clusterPages.findIndex(p => p.id === link.toPage)
          
          if (fromIndex === -1 || toIndex === -1 || fromIndex >= 12 || toIndex >= 12) return null
          
          const fromAngle = (fromIndex * 360) / Math.min(clusterPages.length, 12)
          const toAngle = (toIndex * 360) / Math.min(clusterPages.length, 12)
          const radius = 140
          
          const fromX = Math.cos(fromAngle * Math.PI / 180) * radius
          const fromY = Math.sin(fromAngle * Math.PI / 180) * radius
          const toX = Math.cos(toAngle * Math.PI / 180) * radius
          const toY = Math.sin(toAngle * Math.PI / 180) * radius
          
          const centerX = (fromX + toX) / 2
          const centerY = (fromY + toY) / 2
          const distance = Math.sqrt((toX - fromX) ** 2 + (toY - fromY) ** 2)
          const angle = Math.atan2(toY - fromY, toX - fromX) * 180 / Math.PI
          
          return (
            <div
              key={`${link.fromPage}-${link.toPage}`}
              className="absolute border-t border-purple-400 border-dashed opacity-60"
              style={{
                top: `calc(50% + ${centerY}px)`,
                left: `calc(50% + ${centerX}px)`,
                width: `${distance}px`,
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                zIndex: 2
              }}
            ></div>
          )
        })}
      
      {clusterPages.length > 12 && (
        <div className="absolute bottom-4 left-4 text-gray-400 text-sm">
          Showing 12 of {clusterPages.length} cluster pages
        </div>
      )}
    </div>
  )
}