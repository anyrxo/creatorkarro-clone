'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter } from 'lucide-react'
import { getResourcesByCourse } from '@/data/resources'
import { ResourceCard } from '@/components/resources/ResourceCard'

interface ResourcesPageProps {
    params: {
        courseId: string
    }
}

export default function ResourcesPage({ params }: ResourcesPageProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeFilter, setActiveFilter] = useState<'all' | 'guide' | 'template' | 'tool'>('all')

    const allResources = getResourcesByCourse(params.courseId)

    const filteredResources = allResources.filter(resource => {
        const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesFilter = activeFilter === 'all' || resource.category === activeFilter
        return matchesSearch && matchesFilter
    })

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        Course Resources
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Access high-value templates, tools, and guides designed to help you execute faster.
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-6 mb-12">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search resources..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-[#3b82f6] transition-colors"
                        />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
                        {['all', 'guide', 'template', 'tool'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter as any)}
                                className={`px-6 py-4 rounded-xl font-medium capitalize whitespace-nowrap transition-colors ${activeFilter === filter
                                        ? 'bg-white text-black'
                                        : 'bg-[#0f0f0f] text-gray-400 hover:bg-[#1f1f1f] border border-[#1f1f1f]'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                    ))}
                </div>

                {filteredResources.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No resources found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
