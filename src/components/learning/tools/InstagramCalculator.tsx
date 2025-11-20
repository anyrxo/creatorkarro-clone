'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Users, Heart, BarChart3 } from 'lucide-react';

export default function InstagramCalculator() {
    const [followers, setFollowers] = useState(1000);
    const [likes, setLikes] = useState(50);
    const [comments, setComments] = useState(5);
    const [shares, setShares] = useState(2);
    const [saves, setSaves] = useState(10);
    const [postsPerWeek, setPostsPerWeek] = useState(7);

    // Calculate engagement rate
    const totalEngagement = likes + comments + (shares * 2) + (saves * 3);
    const engagementRate = followers > 0 ? ((totalEngagement / followers) * 100).toFixed(2) : 0;

    // Calculate projected growth
    const weeklyGrowth = parseFloat(engagementRate) * postsPerWeek * 10;
    const monthlyGrowth = Math.round(weeklyGrowth * 4.3);
    const projectedFollowers30Days = followers + monthlyGrowth;
    const projectedFollowers90Days = followers + (monthlyGrowth * 3);

    // Calculate potential earnings
    const estimatedEarningsPerPost = followers > 10000
        ? Math.round((followers / 1000) * 10)
        : 0;
    const monthlyEarningsPotential = estimatedEarningsPerPost * postsPerWeek * 4;

    return (
        <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Calculator className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Instagram Growth Calculator</h2>
                    <p className="text-purple-200/70 text-sm">Project your growth and earnings potential</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white mb-4">Your Current Stats</h3>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Current Followers
                        </label>
                        <input
                            type="number"
                            value={followers}
                            onChange={(e) => setFollowers(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Avg Likes/Post
                            </label>
                            <input
                                type="number"
                                value={likes}
                                onChange={(e) => setLikes(parseInt(e.target.value) || 0)}
                                className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Avg Comments
                            </label>
                            <input
                                type="number"
                                value={comments}
                                onChange={(e) => setComments(parseInt(e.target.value) || 0)}
                                className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Avg Shares
                            </label>
                            <input
                                type="number"
                                value={shares}
                                onChange={(e) => setShares(parseInt(e.target.value) || 0)}
                                className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Avg Saves
                            </label>
                            <input
                                type="number"
                                value={saves}
                                onChange={(e) => setSaves(parseInt(e.target.value) || 0)}
                                className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Posts Per Week
                        </label>
                        <input
                            type="number"
                            value={postsPerWeek}
                            onChange={(e) => setPostsPerWeek(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4">Your Projections</h3>

                    {/* Engagement Rate */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-purple-200 text-sm">Engagement Rate</span>
                            <Heart className="w-5 h-5 text-pink-400" />
                        </div>
                        <div className="text-4xl font-bold text-white">{engagementRate}%</div>
                        <div className="text-xs text-purple-300 mt-1">
                            {parseFloat(engagementRate) > 3 ? '🔥 Excellent!' : parseFloat(engagementRate) > 1 ? '✅ Good' : '⚠️ Needs improvement'}
                        </div>
                    </motion.div>

                    {/* Growth Projections */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-green-200 text-sm">30-Day Growth</span>
                            <TrendingUp className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">+{monthlyGrowth.toLocaleString()}</div>
                        <div className="text-xs text-green-300 mt-1">
                            Projected: {projectedFollowers30Days.toLocaleString()} followers
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-blue-200 text-sm">90-Day Growth</span>
                            <Users className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">+{(monthlyGrowth * 3).toLocaleString()}</div>
                        <div className="text-xs text-blue-300 mt-1">
                            Projected: {projectedFollowers90Days.toLocaleString()} followers
                        </div>
                    </motion.div>

                    {/* Earnings Potential */}
                    {followers >= 10000 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-yellow-200 text-sm">Monthly Earnings Potential</span>
                                <BarChart3 className="w-5 h-5 text-yellow-400" />
                            </div>
                            <div className="text-3xl font-bold text-white">${monthlyEarningsPotential.toLocaleString()}</div>
                            <div className="text-xs text-yellow-300 mt-1">
                                Based on ${estimatedEarningsPerPost}/post × {postsPerWeek * 4} posts/month
                            </div>
                        </motion.div>
                    )}

                    {followers < 10000 && (
                        <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-4 text-center">
                            <p className="text-purple-200 text-sm">
                                💡 Reach 10K followers to unlock monetization estimates
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Action Items */}
            <div className="mt-8 p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl">
                <h4 className="text-white font-bold mb-3">📋 Action Steps to Hit These Numbers:</h4>
                <ul className="space-y-2 text-purple-200 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Post {postsPerWeek}x per week consistently (use batch creation from Module 2)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Focus on hooks that stop the scroll (3-second rule from Module 2)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Engage with your niche 30 min/day to boost algorithm favor</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Analyze top performers weekly and replicate what works</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
