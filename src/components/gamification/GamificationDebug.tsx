'use client'

import { useGamification } from '@/context/GamificationContext'

export default function GamificationDebug() {
    const { quests, stats, isLoading } = useGamification()

    return (
        <div className="fixed bottom-4 right-4 bg-black/90 border border-white/20 rounded-lg p-4 text-xs text-white max-w-md z-50">
            <div className="font-bold mb-2">🐛 Gamification Debug</div>
            <div className="space-y-1">
                <div>Loading: {isLoading ? 'Yes' : 'No'}</div>
                <div>Quest Count: {quests.length}</div>
                <div>Stats: {stats ? `${stats.total_xp} XP, Level ${stats.current_level}` : 'None'}</div>
                {quests.length > 0 && (
                    <div className="mt-2 border-t border-white/10 pt-2">
                        <div className="font-semibold">Quests:</div>
                        {quests.map((q, i) => (
                            <div key={i} className="pl-2">
                                • {q.quest?.title || 'Unknown'} ({q.progress}/{q.quest?.target_count})
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
