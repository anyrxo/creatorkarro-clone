'use client'

import { useState, useEffect } from 'react'
import { generateLicenseKeys, getLicenseKeys, deleteLicenseKey, disableLicenseKey } from '@/app/actions/admin-keys'
import { Key, Plus, Copy, Check, Loader2, Trash2, Ban, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AdminKeysPage() {
    const [keys, setKeys] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isGenerating, setIsGenerating] = useState(false)
    const [copiedId, setCopiedId] = useState<string | null>(null)
    const [expiryHours, setExpiryHours] = useState<number | ''>('')

    useEffect(() => {
        loadKeys()
    }, [])

    const loadKeys = async () => {
        setIsLoading(true)
        const data = await getLicenseKeys()
        setKeys(data)
        setIsLoading(false)
    }

    const handleGenerate = async () => {
        setIsGenerating(true)
        try {
            const hours = expiryHours === '' ? undefined : Number(expiryHours)
            const result = await generateLicenseKeys(1, 'all-access', hours)
            
            if (result.error) {
                alert('Error generating key: ' + result.error)
            }
        } catch (error) {
            alert('Failed to generate key. Please try again.')
            console.error(error)
        } finally {
            await loadKeys()
            setIsGenerating(false)
            setExpiryHours('')
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this key?')) return
        await deleteLicenseKey(id)
        setKeys(keys.filter(k => k.id !== id))
    }

    const handleDisable = async (id: string) => {
        if (!confirm('Disable this key? It will no longer work.')) return
        await disableLicenseKey(id)
        loadKeys() // Reload to see status update
    }

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text)
        setCopiedId(id)
        setTimeout(() => setCopiedId(null), 2000)
    }

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">License Keys</h1>
                    <p className="text-zinc-400">Manage access keys for students.</p>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-black/30 border border-white/10 rounded-lg px-3 py-2">
                        <Clock className="w-4 h-4 text-zinc-400" />
                        <input 
                            type="number" 
                            placeholder="Expires in (hrs)" 
                            value={expiryHours}
                            onChange={(e) => setExpiryHours(Number(e.target.value))}
                            className="bg-transparent text-white text-sm w-24 focus:outline-none placeholder:text-zinc-600"
                        />
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
                    >
                        {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                        Generate Key
                    </button>
                </div>
            </div>

            {isLoading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                </div>
            ) : (
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/5">
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Key</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Status</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">User ID</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Created</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Expires</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {keys.map((key) => (
                                <tr key={key.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-mono text-sm text-white">{key.key}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                            key.status === 'active' 
                                                ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                                                : key.status === 'claimed' 
                                                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                        }`}>
                                            {key.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-sm text-zinc-500 font-mono">
                                        {key.user_id ? key.user_id.slice(0, 12) + '...' : '-'}
                                    </td>
                                    <td className="p-4 text-sm text-zinc-500">
                                        {new Date(key.created_at).toLocaleDateString()}
                                    </td>
                                    <td className="p-4 text-sm text-zinc-500">
                                        {key.expires_at ? new Date(key.expires_at).toLocaleString() : 'Never'}
                                    </td>
                                    <td className="p-4 flex items-center gap-2">
                                        <button
                                            onClick={() => copyToClipboard(key.key, key.id)}
                                            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            title="Copy Key"
                                        >
                                            {copiedId === key.id ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                        {key.status !== 'disabled' && (
                                            <button
                                                onClick={() => handleDisable(key.id)}
                                                className="p-2 text-zinc-400 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors"
                                                title="Disable Key"
                                            >
                                                <Ban className="w-4 h-4" />
                                            </button>
                                        )}
                                        <button
                                            onClick={() => handleDelete(key.id)}
                                            className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                            title="Delete Key"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {keys.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="p-8 text-center text-zinc-500">
                                        No keys found. Generate one to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}
