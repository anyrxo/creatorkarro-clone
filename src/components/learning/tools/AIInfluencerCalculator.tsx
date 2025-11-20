'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, Zap, Target } from 'lucide-react';

export default function AIInfluencerCalculator() {
    const [platform, setPlatform] = useState<'instagram' | 'tiktok' | 'fanvue'>('instagram');
    const [followers, setFollowers] = useState(10000);
    const [postsPerWeek, setPostsPerWeek] = useState(7);
    const [subscriptionPrice, setSubscriptionPrice] = useState(9.99);
    const [ppvPrice, setPpvPrice] = useState(15);
    const [ppvPerMonth, setPpvPerMonth] = useState(4);

    // Platform conversion rates (followers to subscribers)
    const conversionRates = {
        instagram: 0.02, // 2%
        tiktok: 0.015,   // 1.5%
        fanvue: 0.05,    // 5%
    };

    // Calculate potential subscribers
    const potentialSubscribers = Math.round(followers * conversionRates[platform]);

    // Monthly subscription revenue
    const monthlySubRevenue = potentialSubscribers * subscriptionPrice;

    // PPV revenue (assuming 30% of subscribers buy PPV)
    const ppvBuyers = Math.round(potentialSubscribers * 0.3);
    const monthlyPPVRevenue = ppvBuyers * ppvPrice * ppvPerMonth;

    // Total monthly revenue
    const totalMonthlyRevenue = monthlySubRevenue + monthlyPPVRevenue;

    // Annual projection
    const annualRevenue = totalMonthlyRevenue * 12;

    // Content creation cost estimate (AI tools)
    const monthlyCosts = 150; // Flux, hosting, etc.
    const netMonthlyProfit = totalMonthlyRevenue - monthlyCosts;

    return (
        <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <DollarSign className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">AI Influencer Revenue Calculator</h2>
                    <p className="text-purple-200/70 text-sm">Project your virtual model empire earnings</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white mb-4">Your Model Stats</h3>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Primary Platform
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['instagram', 'tiktok', 'fanvue'] as const).map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPlatform(p)}
                                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-all ${platform === p
                                            ? 'bg-purple-500/30 border-purple-500/50 text-white'
                                            : 'bg-purple-500/5 border-purple-500/10 text-purple-200 hover:bg-purple-500/10'
                                        } border`}
                                >
                                    {p.charAt(0).toUpperCase() + p.slice(1)}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-purple-300 mt-2">
                            Conversion: {(conversionRates[platform] * 100).toFixed(1)}% of followers → subscribers
                        </p>
                    </div>

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

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Subscription Price
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">$</span>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={subscriptionPrice}
                                    onChange={(e) => setSubscriptionPrice(parseFloat(e.target.value) || 0)}
                                    className="w-full pl-8 pr-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                PPV Price
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">$</span>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={ppvPrice}
                                    onChange={(e) => setPpvPrice(parseFloat(e.target.value) || 0)}
                                    className="w-full pl-8 pr-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            PPV Posts Per Month
                        </label>
                        <input
                            type="number"
                            value={ppvPerMonth}
                            onChange={(e) => setPpvPerMonth(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4">Revenue Projections</h3>

                    {/* Potential Subscribers */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-blue-200 text-sm">Potential Subscribers</span>
                            <Users className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-4xl font-bold text-white">{potentialSubscribers.toLocaleString()}</div>
                        <div className="text-xs text-blue-300 mt-1">
                            From {followers.toLocaleString()} followers
                        </div>
                    </motion.div>

                    {/* Monthly Revenue */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-green-200 text-sm">Monthly Revenue</span>
                            <DollarSign className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">${totalMonthlyRevenue.toLocaleString()}</div>
                        <div className="text-xs text-green-300 mt-2 space-y-1">
                            <div>Subscriptions: ${monthlySubRevenue.toLocaleString()}</div>
                            <div>PPV Sales: ${monthlyPPVRevenue.toLocaleString()}</div>
                        </div>
                    </motion.div>

                    {/* Net Profit */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-purple-200 text-sm">Net Monthly Profit</span>
                            <TrendingUp className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">${netMonthlyProfit.toLocaleString()}</div>
                        <div className="text-xs text-purple-300 mt-1">
                            After ${monthlyCosts} in AI tool costs
                        </div>
                    </motion.div>

                    {/* Annual Projection */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-yellow-200 text-sm">Annual Revenue</span>
                            <Zap className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">${annualRevenue.toLocaleString()}</div>
                        <div className="text-xs text-yellow-300 mt-1">
                            ${(netMonthlyProfit * 12).toLocaleString()} net profit
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Action Plan */}
            <div className="mt-8 p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-400" />
                    Your Action Plan to Hit These Numbers:
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-purple-200 text-sm">
                        <div className="font-bold text-purple-100">Phase 1: Model Creation (Week 1-2)</div>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>Train LoRA for consistent face (Module 1)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>Generate 100+ high-quality images</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>Create 10 dance/video clips</span>
                        </li>
                    </div>
                    <div className="space-y-2 text-purple-200 text-sm">
                        <div className="font-bold text-purple-100">Phase 2: Growth (Week 3-8)</div>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>Post {postsPerWeek}x/week on {platform}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>Engage 30min/day to boost reach</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>Drive followers to subscription platform</span>
                        </li>
                    </div>
                </div>
            </div>

            {/* Reality Check */}
            <div className="mt-4 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-200 text-sm">
                    💡 <strong>Reality Check:</strong> These are projections based on industry averages.
                    Your actual results depend on content quality, consistency, and niche selection.
                    Most successful AI influencers reach these numbers in 3-6 months.
                </p>
            </div>
        </div>
    );
}
