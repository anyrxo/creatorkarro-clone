
'use client'

import { useState } from 'react'
import { Save, Loader2 } from 'lucide-react'

export default function AdminSettingsPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate save
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsLoading(false)
        alert('Settings saved!')
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
            <p className="text-zinc-400 mb-8">Configure your platform settings.</p>

            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                <form onSubmit={handleSave} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Platform Name</label>
                        <input 
                            type="text" 
                            defaultValue="IImagined"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-zinc-300 mb-2">Support Email</label>
                        <input 
                            type="email" 
                            defaultValue="support@iimagined.ai"
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors disabled:opacity-50"
                        >
                            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

