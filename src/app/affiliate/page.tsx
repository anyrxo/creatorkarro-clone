'use client'

import { useUser } from '@clerk/nextjs'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, DollarSign, Users, ExternalLink, Shield, Sparkles, Loader2, CreditCard } from 'lucide-react'
import Link from 'next/link'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { claimAffiliateCode, getAffiliateCode, getAffiliateStats, updatePayoutEmail, getPayoutEmail } from '@/app/actions/affiliate'

export default function AffiliatePage() {
    const { user, isLoaded, isSignedIn } = useUser()
    const [referralLink, setReferralLink] = useState('')
    const [customCode, setCustomCode] = useState('')
    const [claimedCode, setClaimedCode] = useState<string | null>(null)
    const [isClaiming, setIsClaiming] = useState(false)
    const [claimError, setClaimError] = useState('')
    const [copied, setCopied] = useState(false)
    const [stats, setStats] = useState({ referrals: 0, earnings: 0 })
    const [paypalEmail, setPaypalEmail] = useState('')
    const [isSavingPaypal, setIsSavingPaypal] = useState(false)
    const [paypalSaved, setPaypalSaved] = useState(false)

    useEffect(() => {
        if (user) {
            // Use try-catch to prevent fetch errors from breaking the page
            const fetchData = async () => {
                try {
                    // 1. Check if they have a custom code
                    const code = await getAffiliateCode()
                    if (code) {
                        setClaimedCode(code)
                        setReferralLink(`${window.location.origin}/${code}`)
                    } else {
                        // Fallback to default ID ref
                        setReferralLink(`${window.location.origin}?ref=${user.id}`)
                    }

                    // 2. Fetch Stats
                    const fetchedStats = await getAffiliateStats()
                    setStats(fetchedStats)

                    // 3. Fetch Payout Email
                    const email = await getPayoutEmail()
                    if (email) setPaypalEmail(email)
                } catch (error) {
                    console.error("Error loading affiliate data:", error)
                    // Set fallback link if error
                    setReferralLink(`${window.location.origin}?ref=${user.id}`)
                }
            }
            
            fetchData()
        }
    }, [user])

    const handleClaim = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsClaiming(true)
        setClaimError('')

        try {
            const result = await claimAffiliateCode(customCode)
            if (result.success) {
                setClaimedCode(result.code!)
                setReferralLink(`${window.location.origin}/${result.code}`)
            } else {
                setClaimError(result.error || 'Failed to claim code')
            }
        } catch (error) {
            setClaimError('An unexpected error occurred. Please try again.')
        }
        setIsClaiming(false)
    }

    const handleSavePaypal = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSavingPaypal(true)
        try {
            await updatePayoutEmail(paypalEmail)
            setPaypalSaved(true)
            setTimeout(() => setPaypalSaved(false), 2000)
        } catch (error) {
            console.error("Error saving email:", error)
        }
        setIsSavingPaypal(false)
    }

    const copyLink = () => {
        navigator.clipboard.writeText(referralLink)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    if (!isLoaded) return <div className="min-h-screen bg-black" />

    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-4">
                <div className="text-center max-w-md">
                    <h1 className="text-3xl font-bold text-white mb-4">Join the Empire Program</h1>
                    <p className="text-zinc-400 mb-8">Sign in to access your unique affiliate link and start earning 40% commissions.</p>
                    <Link href="/sign-in">
                        <ShimmerButton className="mx-auto">
                            <span className="px-8 py-3 text-sm font-bold">Sign In to Join</span>
                        </ShimmerButton>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 pt-24">
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6"
                    >
                        <Sparkles className="w-4 h-4" />
                        Official Partner Program
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4">
                        Build Wealth With Us
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Earn 40% recurring commission on every sale you refer. Share the blueprint, get paid, and help others build their empire.
                    </p>

                    <div className="mt-8 bg-zinc-900/30 border border-white/5 rounded-xl p-6 max-w-3xl mx-auto text-left">
                         <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                             <Shield className="w-5 h-5 text-purple-400" />
                             How it works
                         </h3>
                         <div className="grid md:grid-cols-3 gap-4">
                             <div className="bg-black/30 p-4 rounded-lg">
                                 <div className="text-purple-400 font-bold mb-1">1. Share Link</div>
                                 <div className="text-sm text-zinc-400">Copy your unique link below. Share it on social media, YouTube, or with friends.</div>
                             </div>
                             <div className="bg-black/30 p-4 rounded-lg">
                                 <div className="text-blue-400 font-bold mb-1">2. We Track</div>
                                 <div className="text-sm text-zinc-400">We track every click. Even if they buy days later, you get credit.</div>
                             </div>
                             <div className="bg-black/30 p-4 rounded-lg">
                                 <div className="text-green-400 font-bold mb-1">3. You Earn</div>
                                 <div className="text-sm text-zinc-400">When they activate a license, you instantly see $39.60 in your dashboard.</div>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    
                    {/* Stats Card - Left */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-zinc-400 font-medium mb-2">Your Commission Rate</h3>
                            <div className="text-5xl font-bold text-green-400">40%</div>
                            <p className="text-sm text-zinc-500 mt-2">On all course sales</p>
                        </div>
                        <div className="mt-8 p-4 bg-black/30 rounded-xl border border-white/5">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-zinc-400">Total Referrals</span>
                                <span className="text-white font-bold">{stats.referrals}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-zinc-400">Total Earnings</span>
                                <span className="text-green-400 font-bold">${stats.earnings.toFixed(2)}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Link Generator - Center (Hero) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                        
                        <h3 className="text-xl font-bold text-white mb-6 relative z-10">Your Unique Empire Link</h3>
                        
                        {claimedCode ? (
                            <div className="flex flex-col md:flex-row gap-4 relative z-10">
                                <div className="flex-1 bg-black/50 border border-white/10 rounded-xl px-6 py-4 flex items-center gap-3">
                                    <Shield className="text-purple-400 w-5 h-5 flex-shrink-0" />
                                    <code className="text-zinc-300 font-mono truncate">{referralLink}</code>
                                </div>
                                <button
                                    onClick={copyLink}
                                    className="bg-white text-black hover:bg-zinc-200 font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-colors min-w-[160px]"
                                >
                                    {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                    {copied ? 'Copied!' : 'Copy Link'}
                                </button>
                            </div>
                        ) : (
                            <div className="relative z-10">
                                <p className="text-zinc-400 mb-4">Claim your custom handle (e.g., "callan") to get a branded link.</p>
                                <form onSubmit={handleClaim} className="flex gap-2">
                                    <input 
                                        type="text" 
                                        value={customCode}
                                        onChange={(e) => setCustomCode(e.target.value.toLowerCase())}
                                        placeholder="Enter custom code..."
                                        className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500"
                                        minLength={3}
                                        maxLength={20}
                                        pattern="[a-z0-9]+"
                                    />
                                    <button 
                                        type="submit" 
                                        disabled={isClaiming || !customCode}
                                        className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-xl font-bold disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {isClaiming ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Claim'}
                                    </button>
                                </form>
                                {claimError && <p className="text-red-400 text-sm mt-2">{claimError}</p>}
                                <p className="text-xs text-zinc-500 mt-4">Or use default: {referralLink}</p>
                            </div>
                        )}

                        <p className="text-zinc-400 text-sm mt-6 relative z-10">
                            Share this link on social media, YouTube, or with friends. When they click, we track them. When they buy, you get paid.
                        </p>
                    </motion.div>
                </div>

                {/* Payout Settings & Community Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                     {/* Payout Info & Settings */}
                     <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-blue-400" />
                            Payout Details
                        </h3>
                        <div className="text-sm text-zinc-400 space-y-4 mb-6">
                            <p>
                                Payouts are processed via PayPal or Bank Transfer (Wise).
                            </p>
                            <p>
                                In most cases, <strong className="text-white">payouts are same-day processed</strong> upon our system receiving the request for any balance over $50.
                            </p>
                        </div>

                        <form onSubmit={handleSavePaypal} className="relative">
                            <label className="text-xs font-bold text-zinc-500 uppercase mb-1 block">PayPal Email</label>
                            <div className="flex gap-2">
                                <input 
                                    type="email" 
                                    value={paypalEmail}
                                    onChange={(e) => setPaypalEmail(e.target.value)}
                                    placeholder="your@paypal.com"
                                    className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
                                    required
                                />
                                <button 
                                    type="submit" 
                                    disabled={isSavingPaypal}
                                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold disabled:opacity-50 transition-all min-w-[100px]"
                                >
                                    {isSavingPaypal ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : (paypalSaved ? <Check className="w-4 h-4 mx-auto" /> : 'Save')}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Community Links */}
                    <div className="space-y-4">
                        <a 
                            href="https://discord.gg/ychmBgGCPa" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block group bg-[#5865F2]/10 border border-[#5865F2]/20 hover:bg-[#5865F2]/20 p-6 rounded-2xl transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#5865F2] rounded-full flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 00-5.4868 0c-.1636-.3933-.4058-.7835-.6178-1.1588a.0771.0771 0 00-.0785-.0371 19.7363 19.7363 0 00-4.8852 1.5151.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.0991.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-white group-hover:text-[#5865F2] transition-colors">Join the Discord</h3>
                                    <p className="text-sm text-zinc-400">Network with 4,000+ builders. Free access.</p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-zinc-500 ml-auto" />
                            </div>
                        </a>

                        <a 
                            href="https://t.me/iimagined" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block group bg-[#0088cc]/10 border border-[#0088cc]/20 hover:bg-[#0088cc]/20 p-6 rounded-2xl transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#0088cc] rounded-full flex items-center justify-center text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.638z"/></svg>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-white group-hover:text-[#0088cc] transition-colors">Join Telegram</h3>
                                    <p className="text-sm text-zinc-400">Get daily alpha and updates directly.</p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-zinc-500 ml-auto" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
