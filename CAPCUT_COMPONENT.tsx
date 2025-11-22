// CapCut Interactive Cheat Sheet Component
// To be added to ResourceCard.tsx

function CapCutCheatSheet() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeOS, setActiveOS] = useState<'windows' | 'mac'>('windows')
    const [copiedShortcut, setCopiedShortcut] = useState<string | null>(null)

    const shortcuts = {
        editing: [
            { action: 'Split/Cut clip', windows: 'Ctrl + B', mac: 'Cmd + B', frequency: 'most-used' },
            { action: 'Delete selected clip', windows: 'Delete', mac: 'Delete', frequency: 'most-used' },
            { action: 'Undo', windows: 'Ctrl + Z', mac: 'Cmd + Z', frequency: 'most-used' },
            { action: 'Redo', windows: 'Ctrl + Y', mac: 'Cmd + Shift + Z', frequency: 'most-used' },
            { action: 'Play/Pause', windows: 'Space', mac: 'Space', frequency: 'most-used' },
            { action: 'Speed up playback', windows: 'L', mac: 'L', frequency: 'common' },
            { action: 'Slow down playback', windows: 'J', mac: 'J', frequency: 'common' },
            { action: 'Frame forward', windows: 'Right Arrow', mac: 'Right Arrow', frequency: 'common' },
            { action: 'Frame backward', windows: 'Left Arrow', mac: 'Left Arrow', frequency: 'common' },
            { action: 'Add marker', windows: 'M', mac: 'M', frequency: 'common' },
        ],
        timeline: [
            { action: 'Zoom in timeline', windows: 'Ctrl + Scroll Up', mac: 'Cmd + Scroll Up', frequency: 'most-used' },
            { action: 'Zoom out timeline', windows: 'Ctrl + Scroll Down', mac: 'Cmd + Scroll Down', frequency: 'most-used' },
            { action: 'Fit timeline to window', windows: 'Shift + Z', mac: 'Shift + Z', frequency: 'common' },
            { action: 'Select all clips', windows: 'Ctrl + A', mac: 'Cmd + A', frequency: 'common' },
            { action: 'Deselect all', windows: 'Ctrl + D', mac: 'Cmd + D', frequency: 'common' },
            { action: 'Ripple delete gap', windows: 'Shift + Delete', mac: 'Shift + Delete', frequency: 'pro' },
        ],
        effects: [
            { action: 'Add text', windows: 'T', mac: 'T', frequency: 'most-used' },
            { action: 'Add audio', windows: 'A', mac: 'A', frequency: 'most-used' },
            { action: 'Add transition', windows: 'Ctrl + T', mac: 'Cmd + T', frequency: 'common' },
            { action: 'Copy effect', windows: 'Ctrl + C', mac: 'Cmd + C', frequency: 'common' },
            { action: 'Paste effect', windows: 'Ctrl + V', mac: 'Cmd + V', frequency: 'common' },
            { action: 'Reset effect', windows: 'Ctrl + R', mac: 'Cmd + R', frequency: 'pro' },
        ],
        export: [
            { action: 'Export video', windows: 'Ctrl + E', mac: 'Cmd + E', frequency: 'most-used' },
            { action: 'Quick export', windows: 'Ctrl + Shift + E', mac: 'Cmd + Shift + E', frequency: 'common' },
            { action: 'Save project', windows: 'Ctrl + S', mac: 'Cmd + S', frequency: 'most-used' },
        ]
    }

    const workflows = [
        {
            title: '⚡ 5-Minute Reel Workflow',
            steps: [
                'Import clip (Drag & Drop)',
                'Trim with I/O points (I for In, O for Out)',
                'Split at beat markers (Ctrl/Cmd + B)',
                'Add text overlay (T key)',
                'Speed ramp key moments (Speed → Curve)',
                'Add trending audio (A key → Trending)',
                'Export in 1080x1920 (Ctrl/Cmd + E)'
            ]
        },
        {
            title: '🎬 Professional Edit Flow',
            steps: [
                'Organize media in folders first',
                'Create sequence with first clip',
                'Use J K L for review (Back → Pause → Forward)',
                'Mark best takes with M (markers)',
                'Build rough cut with Ctrl/Cmd + B splits',
                'Add B-roll over gaps',
                'Color grade last (Auto Enhance → Fine-tune)',
                'Export with Max Quality + Bitrate'
            ]
        }
    ]

    const proTips = [
        { tip: 'Disable auto-save', reason: 'Prevents lag on low-end PCs. Save manually with Ctrl+S.' },
        { tip: 'Use proxy files', reason: '4K footage? Right-click → Generate Proxy for smooth editing.' },
        { tip: 'Keyboard > Mouse', reason: 'Pros edit 3x faster using shortcuts. Memorize top 10.' },
        { tip: 'Pre-cut audio to beat', reason: 'Add markers on beat drops before cutting clips. Saves hours.' },
        { tip: 'Templates are gold', reason: 'Save your best edits as templates. Reuse transitions/effects.' }
    ]

    const handleCopyShortcut = (shortcut: string, id: string) => {
        navigator.clipboard.writeText(shortcut)
        setCopiedShortcut(id)
        setTimeout(() => setCopiedShortcut(null), 2000)
    }

    const filteredShortcuts = Object.entries(shortcuts).reduce((acc, [category, items]) => {
        const filtered = items.filter(item =>
            item.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item[activeOS].toLowerCase().includes(searchTerm.toLowerCase())
        )
        if (filtered.length > 0) {
            acc[category] = filtered
        }
        return acc
    }, {} as typeof shortcuts)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-black text-white mb-2">⚡ CapCut Speed Editing Master Class</h3>
                <p className="text-gray-400">Cut your editing time in HALF with these professional shortcuts and workflows</p>
            </div>

            {/* OS Selector & Search */}
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex bg-[#1a1a1a] p-1 rounded-xl border border-[#2a2a2a]">
                    <button
                        onClick={() => setActiveOS('windows')}
                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeOS === 'windows'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        🪟 Windows
                    </button>
                    <button
                        onClick={() => setActiveOS('mac')}
                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeOS === 'mac'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        🍎 Mac
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Search shortcuts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 outline-none"
                />
            </div>

            {/* Shortcuts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(filteredShortcuts).map(([category, items]) => (
                    <div key={category} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                        <h4 className="text-lg font-bold text-white mb-4 capitalize flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            {category}
                        </h4>
                        <div className="space-y-2">
                            {items.map((item, idx) => {
                                const shortcutId = `${category}-${idx}`
                                const isCopied = copiedShortcut === shortcutId
                                return (
                                    <div key={idx} className="group flex items-center justify-between p-3 bg-[#0f0f0f] rounded-lg hover:bg-[#141414] transition-colors">
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-300 font-medium">{item.action}</p>
                                            {item.frequency === 'most-used' && (
                                                <span className="text-xs text-green-400 font-bold">⭐ ESSENTIAL</span>
                                            )}
                                            {item.frequency === 'pro' && (
                                                <span className="text-xs text-purple-400 font-bold">🔥 PRO</span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleCopyShortcut(item[activeOS], shortcutId)}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-[#2a2a2a] rounded-lg group-hover:bg-blue-600 transition-all"
                                        >
                                            <code className="text-xs font-bold text-white">{item[activeOS]}</code>
                                            {isCopied ? (
                                                <Check className="w-3 h-3 text-green-400" />
                                            ) : (
                                                <Copy className="w-3 h-3 text-gray-400 group-hover:text-white" />
                                            )}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Workflows */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">🎯 Proven Editing Workflows</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    {workflows.map((workflow, idx) => (
                        <div key={idx} className="bg-[#0f0f0f] rounded-xl p-5 border border-[#2a2a2a]">
                            <h5 className="text-lg font-bold text-white mb-4">{workflow.title}</h5>
                            <div className="space-y-2">
                                {workflow.steps.map((step, stepIdx) => (
                                    <div key={stepIdx} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">
                                            {stepIdx + 1}
                                        </span>
                                        <p className="text-sm text-gray-300">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">💡 Pro Tips That Actually Matter</h4>
                <div className="space-y-3">
                    {proTips.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-black/40 rounded-lg">
                            <span className="text-2xl">💎</span>
                            <div>
                                <p className="font-bold text-yellow-200">{item.tip}</p>
                                <p className="text-sm text-gray-400 mt-1">{item.reason}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-red-500/20">
                    📥 Download PDF Cheat Sheet
                </button>
            </div>
        </div>
    )
}
