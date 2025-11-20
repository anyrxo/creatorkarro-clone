'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Briefcase, TrendingUp, Calculator } from 'lucide-react';

// Based on real AI agency pricing data (2024)
const servicePackages = {
    'AI Chatbot': {
        setup: { min: 2000, max: 5000 },
        monthly: { min: 300, max: 800 },
        hours: 20,
        description: 'Customer support automation'
    },
    'Workflow Automation': {
        setup: { min: 3000, max: 8000 },
        monthly: { min: 500, max: 1500 },
        hours: 30,
        description: 'Business process automation'
    },
    'Lead Generation Bot': {
        setup: { min: 2500, max: 6000 },
        monthly: { min: 400, max: 1000 },
        hours: 25,
        description: 'Automated lead capture & nurture'
    },
    'Content Automation': {
        setup: { min: 1500, max: 4000 },
        monthly: { min: 300, max: 700 },
        hours: 15,
        description: 'Social media & email automation'
    },
};

export default function AgencyPricingCalculator() {
    const [selectedService, setSelectedService] = useState<keyof typeof servicePackages>('AI Chatbot');
    const [setupPrice, setSetupPrice] = useState(3500);
    const [monthlyRetainer, setMonthlyRetainer] = useState(500);
    const [clientsPerMonth, setClientsPerMonth] = useState(2);
    const [retentionMonths, setRetentionMonths] = useState(12);
    const [monthlyCosts, setMonthlyCosts] = useState(200); // Tools, software, etc.

    const service = servicePackages[selectedService];

    // Calculate revenue
    const monthlySetupRevenue = setupPrice * clientsPerMonth;
    const monthlyRetainerRevenue = monthlyRetainer * clientsPerMonth * retentionMonths;
    const totalMonthlyRevenue = monthlySetupRevenue + (monthlyRetainer * clientsPerMonth);

    // Calculate costs
    const deliveryHours = service.hours * clientsPerMonth;
    const effectiveHourlyRate = setupPrice / service.hours;

    // Annual projections
    const annualSetupRevenue = monthlySetupRevenue * 12;
    const annualRetainerRevenue = monthlyRetainer * clientsPerMonth * 12;
    const totalAnnualRevenue = annualSetupRevenue + annualRetainerRevenue;
    const annualCosts = monthlyCosts * 12;
    const annualProfit = totalAnnualRevenue - annualCosts;

    // Client lifetime value
    const clientLTV = setupPrice + (monthlyRetainer * retentionMonths);

    return (
        <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Calculator className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">AI Agency Pricing Calculator</h2>
                    <p className="text-purple-200/70 text-sm">Calculate your agency's revenue potential (based on 2024 market rates)</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Input Section */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white mb-4">Service Configuration</h3>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Service Type
                        </label>
                        <select
                            value={selectedService}
                            onChange={(e) => {
                                const service = e.target.value as keyof typeof servicePackages;
                                setSelectedService(service);
                                setSetupPrice(Math.round((servicePackages[service].setup.min + servicePackages[service].setup.max) / 2));
                                setMonthlyRetainer(Math.round((servicePackages[service].monthly.min + servicePackages[service].monthly.max) / 2));
                            }}
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                        >
                            {Object.keys(servicePackages).map((service) => (
                                <option key={service} value={service}>
                                    {service} - {servicePackages[service as keyof typeof servicePackages].description}
                                </option>
                            ))}
                        </select>
                        <p className="text-xs text-purple-300 mt-2">
                            Industry range: ${service.setup.min.toLocaleString()} - ${service.setup.max.toLocaleString()} setup |
                            ${service.monthly.min} - ${service.monthly.max}/mo retainer
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Setup Fee
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">$</span>
                                <input
                                    type="number"
                                    value={setupPrice}
                                    onChange={(e) => setSetupPrice(parseInt(e.target.value) || 0)}
                                    className="w-full pl-8 pr-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Monthly Retainer
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">$</span>
                                <input
                                    type="number"
                                    value={monthlyRetainer}
                                    onChange={(e) => setMonthlyRetainer(parseInt(e.target.value) || 0)}
                                    className="w-full pl-8 pr-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            New Clients Per Month
                        </label>
                        <input
                            type="number"
                            value={clientsPerMonth}
                            onChange={(e) => setClientsPerMonth(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                        <p className="text-xs text-purple-300 mt-1">
                            Realistic for solo: 1-2 | Small team: 3-5 | Established: 5-10
                        </p>
                    </div>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Avg Client Retention (months)
                        </label>
                        <input
                            type="number"
                            value={retentionMonths}
                            onChange={(e) => setRetentionMonths(parseInt(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                        <p className="text-xs text-purple-300 mt-1">
                            Industry average: 8-14 months for good service
                        </p>
                    </div>

                    <div>
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Monthly Operating Costs
                        </label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300">$</span>
                            <input
                                type="number"
                                value={monthlyCosts}
                                onChange={(e) => setMonthlyCosts(parseInt(e.target.value) || 0)}
                                className="w-full pl-8 pr-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-500/50 transition-all"
                            />
                        </div>
                        <p className="text-xs text-purple-300 mt-1">
                            N8N, ChatGPT API, Make, hosting, etc.
                        </p>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-4">Revenue Projections</h3>

                    {/* Monthly Revenue */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-green-200 text-sm">Monthly Revenue</span>
                            <DollarSign className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">${totalMonthlyRevenue.toLocaleString()}</div>
                        <div className="text-xs text-green-300 mt-2 space-y-1">
                            <div>Setup Fees: ${monthlySetupRevenue.toLocaleString()}</div>
                            <div>Retainers: ${(monthlyRetainer * clientsPerMonth).toLocaleString()}</div>
                        </div>
                    </motion.div>

                    {/* Annual Revenue */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-blue-200 text-sm">Annual Revenue</span>
                            <TrendingUp className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">${totalAnnualRevenue.toLocaleString()}</div>
                        <div className="text-xs text-blue-300 mt-2">
                            Net Profit: ${annualProfit.toLocaleString()} (after costs)
                        </div>
                    </motion.div>

                    {/* Client LTV */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-purple-200 text-sm">Client Lifetime Value</span>
                            <Users className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">${clientLTV.toLocaleString()}</div>
                        <div className="text-xs text-purple-300 mt-1">
                            Per client over {retentionMonths} months
                        </div>
                    </motion.div>

                    {/* Effective Hourly Rate */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-yellow-200 text-sm">Effective Hourly Rate</span>
                            <Briefcase className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div className="text-3xl font-bold text-white">${Math.round(effectiveHourlyRate)}/hr</div>
                        <div className="text-xs text-yellow-300 mt-1">
                            Based on {service.hours}hrs per setup
                        </div>
                    </motion.div>

                    {/* Capacity Planning */}
                    <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                        <h4 className="text-white font-bold text-sm mb-2">Monthly Workload:</h4>
                        <div className="space-y-1 text-sm text-purple-200">
                            <div className="flex justify-between">
                                <span>Delivery Hours:</span>
                                <span className="font-bold">{deliveryHours}hrs</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Active Clients:</span>
                                <span className="font-bold">{clientsPerMonth * retentionMonths}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Realistic Action Plan */}
            <div className="mt-8 p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl">
                <h4 className="text-white font-bold mb-3">📋 Realistic 90-Day Launch Plan:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-purple-200 text-sm">
                    <div>
                        <div className="font-bold text-purple-100 mb-2">Month 1: Foundation</div>
                        <ul className="space-y-1 text-xs">
                            <li>• Master N8N + ChatGPT API</li>
                            <li>• Build 2 demo automations</li>
                            <li>• Create service packages</li>
                            <li>• Set up basic website</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold text-purple-100 mb-2">Month 2: First Clients</div>
                        <ul className="space-y-1 text-xs">
                            <li>• Cold outreach (50/day)</li>
                            <li>• Offer discounted pilots</li>
                            <li>• Land 1-2 paying clients</li>
                            <li>• Build case studies</li>
                        </ul>
                    </div>
                    <div>
                        <div className="font-bold text-purple-100 mb-2">Month 3: Scale</div>
                        <ul className="space-y-1 text-xs">
                            <li>• Refine service delivery</li>
                            <li>• Increase outreach volume</li>
                            <li>• Target 3-4 new clients</li>
                            <li>• Build referral system</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Reality Check */}
            <div className="mt-4 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                <p className="text-blue-200 text-sm">
                    <strong>Reality Check:</strong> Most agencies take 3-6 months to land first client, 6-12 months to hit $10K/mo.
                    Success requires consistent outreach (50+ prospects/week), strong case studies, and excellent delivery.
                    These numbers assume you're actively selling and delivering quality work.
                </p>
            </div>
        </div>
    );
}
