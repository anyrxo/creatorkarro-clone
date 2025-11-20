'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    DollarSign,
    Users,
    Activity,
    TrendingUp,
    Mail,
    Key,
    Shield,
    Loader2,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { getAdminStats, AdminStats } from '@/app/actions/admin-stats';
import { generateLicenseKeys } from '@/app/actions/admin-keys';

export default function AdminDashboard() {
    const { user, isLoaded } = useUser();
    const router = useRouter();
    const [stats, setStats] = useState<AdminStats>({
        totalRevenue: 0,
        activeStudents: 0,
        todaysSignups: 0,
        recentActivity: []
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        if (isLoaded) {
            if (!user) {
                router.push('/sign-in');
            } else {
                loadStats();
            }
        }
    }, [isLoaded, user, router]);

    const loadStats = async () => {
        try {
            const data = await getAdminStats();
            setStats(data);
        } catch (error) {
            console.error('Failed to load stats', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGenerateKeys = async () => {
        if (confirm('Generate 10 new All-Access keys?')) {
            setIsGenerating(true);
            await generateLicenseKeys(10);
            setIsGenerating(false);
            alert('10 Keys Generated Successfully! Check the Keys tab.');
        }
    };

    const handleBlastEmail = () => {
        alert('Email Blast System coming soon! This will integrate with Resend to message all 100+ active students.');
    };

    if (!isLoaded || !user || isLoading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] p-8 text-white">
            {/* Background Ambience */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent mb-2">
                            Empire Command
                        </h1>
                        <p className="text-zinc-400">
                            Overview of your digital empire stats and controls.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button 
                            onClick={loadStats}
                            className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400"
                        >
                            <Activity className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Live Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <StatsCard 
                        label="Total Revenue" 
                        value={`$${stats.totalRevenue.toLocaleString()}`} 
                        icon={DollarSign} 
                        color="text-green-400" 
                        bg="bg-green-500/10"
                        border="border-green-500/20"
                    />
                    <StatsCard 
                        label="Active Students" 
                        value={stats.activeStudents.toString()} 
                        icon={Users} 
                        color="text-blue-400" 
                        bg="bg-blue-500/10"
                        border="border-blue-500/20"
                    />
                    <StatsCard 
                        label="Today's Signups" 
                        value={stats.todaysSignups.toString()} 
                        icon={TrendingUp} 
                        color="text-purple-400" 
                        bg="bg-purple-500/10"
                        border="border-purple-500/20"
                    />
                    <StatsCard 
                        label="System Status" 
                        value="Online" 
                        icon={Shield} 
                        color="text-emerald-400" 
                        bg="bg-emerald-500/10"
                        border="border-emerald-500/20"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Col: Quick Actions & Navigation */}
                    <div className="space-y-8">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6"
                        >
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-purple-400" />
                                Quick Actions
                            </h2>
                            <div className="grid grid-cols-1 gap-4">
                                <button 
                                    onClick={handleBlastEmail}
                                    className="w-full p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 hover:border-blue-500/50 rounded-xl flex items-center gap-4 transition-all group text-left"
                                >
                                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Blast Email</h3>
                                        <p className="text-xs text-zinc-400">Send update to all students</p>
                                    </div>
                                </button>

                                <button 
                                    onClick={handleGenerateKeys}
                                    disabled={isGenerating}
                                    className="w-full p-4 bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl flex items-center gap-4 transition-all group text-left"
                                >
                                    <div className="p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                                        {isGenerating ? <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" /> : <Key className="w-6 h-6 text-emerald-400" />}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Generate 10 Keys</h3>
                                        <p className="text-xs text-zinc-400">Instantly create stock</p>
                                    </div>
                                </button>
                            </div>
                        </motion.div>

                        {/* Navigation Links */}
                        <div className="grid grid-cols-2 gap-4">
                            <Link href="/admin/users" className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl hover:bg-zinc-800/50 transition-colors flex flex-col items-center justify-center gap-2 text-center">
                                <Users className="w-6 h-6 text-zinc-400" />
                                <span className="text-sm font-medium text-zinc-300">Manage Users</span>
                            </Link>
                            <Link href="/admin/keys" className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl hover:bg-zinc-800/50 transition-colors flex flex-col items-center justify-center gap-2 text-center">
                                <Key className="w-6 h-6 text-zinc-400" />
                                <span className="text-sm font-medium text-zinc-300">License Keys</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Col: Recent Activity Feed */}
                    <div className="lg:col-span-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 h-full"
                        >
                            <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
                            <div className="space-y-6">
                                {stats.recentActivity.length === 0 ? (
                                    <div className="text-zinc-500 text-center py-12">No recent activity</div>
                                ) : (
                                    stats.recentActivity.map((activity, i) => (
                                        <div key={i} className="flex items-start gap-4 pb-6 border-b border-white/5 last:border-0 last:pb-0">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                                activity.type === 'signup' ? 'bg-purple-500/10 text-purple-400' : 'bg-green-500/10 text-green-400'
                                            }`}>
                                                {activity.type === 'signup' ? <Users className="w-5 h-5" /> : <Key className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">
                                                    {activity.type === 'signup' ? 'New User Signup' : 'License Redeemed'}
                                                </p>
                                                <p className="text-sm text-zinc-400 mb-1">
                                                    {activity.user}
                                                </p>
                                                <p className="text-xs text-zinc-500">
                                                    {activity.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                            
                            <div className="mt-8 pt-4 border-t border-white/5 text-center">
                                <Link href="/admin/users" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                                    View All History <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatsCard({ label, value, icon: Icon, color, bg, border }: any) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-zinc-900/50 backdrop-blur-xl border ${border} rounded-2xl p-6 flex items-start justify-between`}
        >
            <div>
                <p className="text-zinc-400 text-sm mb-1">{label}</p>
                <h3 className={`text-3xl font-bold ${color}`}>{value}</h3>
            </div>
            <div className={`p-3 rounded-xl ${bg}`}>
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
        </motion.div>
    );
}
