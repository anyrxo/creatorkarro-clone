'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Target, Zap, AlertCircle } from 'lucide-react';

export default function DigitalProductCalculator() {
    const [productType, setProductType] = useState<'course' | 'ebook' | 'template'>('course');
    const [creationHours, setCreationHours] = useState(40);
    const [desiredHourlyRate, setDesiredHourlyRate] = useState(100);
    const [targetSales, setTargetSales] = useState(100);
    const [marketingBudget, setMarketingBudget] = useState(500);
    const [platformFees, setPlatformFees] = useState(5); // percentage

    // Calculate minimum price to break even
    const totalCreationCost = creationHours * desiredHourlyRate;
    const totalCosts = totalCreationCost + marketingBudget;
    const feeMultiplier = 1 - (platformFees / 100);
    const breakEvenPrice = totalCosts / (targetSales * feeMultiplier);

    // Suggested pricing tiers
    const starterPrice = Math.ceil(breakEvenPrice * 1.2); // 20% profit margin
    const professionalPrice = Math.ceil(breakEvenPrice * 2); // 100% profit margin
    const premiumPrice = Math.ceil(breakEvenPrice * 3); // 200% profit margin

    // Revenue projections for each tier
    const calculateRevenue = (price: number, conversionRate: number) => {
        const sales = Math.round(targetSales * conversionRate);
        const grossRevenue = sales * price;
        const netRevenue = grossRevenue * feeMultiplier;
        const profit = netRevenue - totalCosts;
        const roi = ((profit / totalCosts) * 100).toFixed(0);
        return { sales, grossRevenue, netRevenue, profit, roi };
    };

    const starterMetrics = calculateRevenue(starterPrice, 1.0);
    const proMetrics = calculateRevenue(professionalPrice, 0.6);
    const premiumMetrics = calculateRevenue(premiumPrice, 0.3);

    // Product type recommendations
    const productRecommendations = {
        course: { hours: '40-100', price: '$97-$497', audience: 'People wanting transformation' },
        ebook: { hours: '20-40', price: '$27-$97', audience: 'People wanting quick knowledge' },
        template: { hours: '10-30', price: '$47-$197', audience: 'People wanting done-for-you' },
    };

    return (
        <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <DollarSign className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Digital Product Pricing Calculator</h2>
                    <p className="text-purple-200/70 text-sm">Find your perfect price point for maximum profit</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white mb-4">Your Product Details</h3>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Product Type
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['course', 'ebook', 'template'] as const).map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setProductType(type)}
                                    className={`px-4 py-3 rounded-lg font-medium text-sm transition-all capitalize ${productType === type
                                            ? 'bg-purple-500/30 border-purple-500/50 text-white'
                                            : 'bg-purple-500/5 border-purple-500/10 text-purple-200 hover:bg-purple-500/10'
                                        } border`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <div className="mt-2 p-3 bg-purple-500/5 border border-purple-500/10 rounded-lg">
                            <p className="text-xs text-purple-200">
                                <strong>Typical:</strong> {productRecommendations[productType].hours} hours |
                                {productRecommendations[productType].price} |
                                For {productRecommendations[productType].audience}
                            </p>
                        </div>
                    </div>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Creation Time (hours)
                        </label>
                        <input
                            type="number"
                            value={creationHours}
                            onChange={(e) => setCreationHours(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Your Desired Hourly Rate
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">$</span>
                            <input
                                type="number"
                                value={desiredHourlyRate}
                                onChange={(e) => setDesiredHourlyRate(parseInt(e.target.value) || 0)}
                                className="w-full pl-8 pr-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Target Sales (first launch)
                        </label>
                        <input
                            type="number"
                            value={targetSales}
                            onChange={(e) => setTargetSales(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Marketing Budget
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">$</span>
                                <input
                                    type="number"
                                    value={marketingBudget}
                                    onChange={(e) => setMarketingBudget(parseInt(e.target.value) || 0)}
                                    className="w-full pl-8 pr-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Platform Fees (%)
                            </label>
                            <input
                                type="number"
                                value={platformFees}
                                onChange={(e) => setPlatformFees(parseInt(e.target.value) || 0)}
                                className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                        <h4 className="text-white font-bold text-sm mb-2">Total Investment:</h4>
                        <div className="space-y-1 text-sm text-purple-200">
                            <div className="flex justify-between">
                                <span>Creation Cost:</span>
                                <span className="font-bold">${totalCreationCost.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Marketing:</span>
                                <span className="font-bold">${marketingBudget.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between border-t border-purple-500/20 pt-1 mt-1">
                                <span>Total:</span>
                                <span className="font-bold text-white">${totalCosts.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing Tiers */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4">Recommended Pricing Tiers</h3>

                    {/* Starter Tier */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <h4 className="text-blue-200 text-sm font-medium">Starter Tier</h4>
                                <div className="text-3xl font-bold text-white">${starterPrice}</div>
                            </div>
                            <Target className="w-8 h-8 text-blue-400" />
                        </div>
                        <div className="space-y-1 text-sm text-blue-200">
                            <div className="flex justify-between">
                                <span>Expected Sales:</span>
                                <span className="font-bold">{starterMetrics.sales}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Gross Revenue:</span>
                                <span className="font-bold">${starterMetrics.grossRevenue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Net Profit:</span>
                                <span className="font-bold text-white">${starterMetrics.profit.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between border-t border-blue-500/20 pt-1 mt-1">
                                <span>ROI:</span>
                                <span className="font-bold text-green-400">{starterMetrics.roi}%</span>
                            </div>
                        </div>
                        <p className="text-xs text-blue-300 mt-3">
                            ✅ Safe bet - Easy to sell, good volume
                        </p>
                    </motion.div>

                    {/* Professional Tier */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-2 border-purple-500/50 rounded-xl p-6 relative"
                    >
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-purple-500 rounded-full text-xs font-bold text-white">
                            RECOMMENDED
                        </div>
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <h4 className="text-purple-200 text-sm font-medium">Professional Tier</h4>
                                <div className="text-3xl font-bold text-white">${professionalPrice}</div>
                            </div>
                            <Zap className="w-8 h-8 text-purple-400" />
                        </div>
                        <div className="space-y-1 text-sm text-purple-200">
                            <div className="flex justify-between">
                                <span>Expected Sales:</span>
                                <span className="font-bold">{proMetrics.sales}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Gross Revenue:</span>
                                <span className="font-bold">${proMetrics.grossRevenue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Net Profit:</span>
                                <span className="font-bold text-white">${proMetrics.profit.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between border-t border-purple-500/20 pt-1 mt-1">
                                <span>ROI:</span>
                                <span className="font-bold text-green-400">{proMetrics.roi}%</span>
                            </div>
                        </div>
                        <p className="text-xs text-purple-300 mt-3">
                            🔥 Sweet spot - Best profit margins
                        </p>
                    </motion.div>

                    {/* Premium Tier */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <h4 className="text-yellow-200 text-sm font-medium">Premium Tier</h4>
                                <div className="text-3xl font-bold text-white">${premiumPrice}</div>
                            </div>
                            <TrendingUp className="w-8 h-8 text-yellow-400" />
                        </div>
                        <div className="space-y-1 text-sm text-yellow-200">
                            <div className="flex justify-between">
                                <span>Expected Sales:</span>
                                <span className="font-bold">{premiumMetrics.sales}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Gross Revenue:</span>
                                <span className="font-bold">${premiumMetrics.grossRevenue.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Net Profit:</span>
                                <span className="font-bold text-white">${premiumMetrics.profit.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between border-t border-yellow-500/20 pt-1 mt-1">
                                <span>ROI:</span>
                                <span className="font-bold text-green-400">{premiumMetrics.roi}%</span>
                            </div>
                        </div>
                        <p className="text-xs text-yellow-300 mt-3">
                            💎 High-ticket - Needs strong positioning
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Strategy Guide */}
            <div className="mt-8 p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl">
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-purple-400" />
                    Pricing Strategy Tips:
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-purple-200 text-sm">
                    <div>
                        <div className="font-bold text-purple-100 mb-2">Value Ladder Approach</div>
                        <p className="text-xs">
                            Offer all 3 tiers: Starter (entry), Professional (main offer), Premium (upsell)
                        </p>
                    </div>
                    <div>
                        <div className="font-bold text-purple-100 mb-2">Anchoring Effect</div>
                        <p className="text-xs">
                            Show Premium first to make Professional look like a great deal
                        </p>
                    </div>
                    <div>
                        <div className="font-bold text-purple-100 mb-2">Launch Discount</div>
                        <p className="text-xs">
                            Start 30% off for first 50 buyers, then raise to full price
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
