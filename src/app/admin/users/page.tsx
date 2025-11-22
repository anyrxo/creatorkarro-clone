'use client'

import { useState, useEffect } from 'react'
import { getStudents, inviteStudent, revokeAccess, deleteUser, toggleAdmin, updateAffiliateCode } from '@/app/actions/admin-users'
import { Loader2, Plus, Mail, User, Calendar, Ban, CheckCircle, Search, Copy, Shield, ShieldAlert, Edit2, Save, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AdminUsersPage() {
    const [students, setStudents] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isInviting, setIsInviting] = useState(false)
    const [inviteEmail, setInviteEmail] = useState('')
    const [inviteResult, setInviteResult] = useState<{ success: boolean; key?: string; message?: string } | null>(null)
    const [searchTerm, setSearchTerm] = useState('')

    // Editing state
    const [editingId, setEditingId] = useState<string | null>(null)
    const [editCode, setEditCode] = useState('')
    const [isSavingCode, setIsSavingCode] = useState(false)

    useEffect(() => {
        loadStudents()
    }, [])

    const loadStudents = async () => {
        setIsLoading(true)
        const data = await getStudents()
        setStudents(data)
        setIsLoading(false)
    }

    const handleInvite = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsInviting(true)
        setInviteResult(null)

        const result = await inviteStudent(inviteEmail)

        if (result.success) {
            setInviteResult({
                success: true,
                key: result.key,
                message: `Access granted to ${inviteEmail}. Since email delivery is not configured, please copy the key below:`
            })
            setInviteEmail('')
            loadStudents()
        } else {
            setInviteResult({ success: false, message: result.error || 'Failed to invite' })
        }
        setIsInviting(false)
    }

    const handleRevoke = async (id: string) => {
        if (!confirm('Are you sure you want to revoke access? This cannot be undone.')) return
        await revokeAccess(id)
        loadStudents()
    }

    const handleToggleAdmin = async (userId: string, currentStatus: boolean) => {
        if (!userId) return alert('User must claim a key and link an account before they can be made admin.')
        if (!confirm(`Are you sure you want to ${currentStatus ? 'REMOVE' : 'GRANT'} admin privileges?`)) return

        await toggleAdmin(userId, currentStatus)
        loadStudents()
    }

    const startEditing = (userId: string, currentCode: string) => {
        setEditingId(userId)
        setEditCode(currentCode || '')
    }

    const saveAffiliateCode = async (userId: string) => {
        if (!editCode.trim()) return
        setIsSavingCode(true)
        const result = await updateAffiliateCode(userId, editCode)
        setIsSavingCode(false)

        if (result.error) {
            alert(result.error)
        } else {
            setEditingId(null)
            loadStudents()
        }
    }

    const filteredStudents = students.filter(s =>
        (s.email && s.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (s.key && s.key.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (s.user_id && s.user_id.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (s.affiliate_code && s.affiliate_code.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="p-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Students & Access</h1>
                    <p className="text-zinc-400">Manage who has access to the platform.</p>
                </div>

                <div className="bg-zinc-900/50 border border-white/10 p-4 rounded-xl w-full md:w-auto">
                    <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <Plus className="w-4 h-4 text-purple-400" />
                        Grant New Access
                    </h3>
                    <form onSubmit={handleInvite} className="flex gap-2">
                        <input
                            type="email"
                            value={inviteEmail}
                            onChange={(e) => setInviteEmail(e.target.value)}
                            placeholder="Enter student email..."
                            className="bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 min-w-[240px]"
                            required
                        />
                        <button
                            type="submit"
                            disabled={isInviting}
                            className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                        >
                            {isInviting ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Grant'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Invite Result Notification */}
            <AnimatePresence>
                {inviteResult && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`mb-8 p-4 rounded-xl border ${inviteResult.success ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}
                    >
                        <div className="flex items-start gap-3">
                            {inviteResult.success ? (
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                            ) : (
                                <Ban className="w-5 h-5 text-red-400 mt-0.5" />
                            )}
                            <div>
                                <h4 className={`font-bold ${inviteResult.success ? 'text-green-400' : 'text-red-400'}`}>
                                    {inviteResult.success ? 'Success' : 'Error'}
                                </h4>
                                <p className="text-sm text-zinc-300 mt-1">{inviteResult.message}</p>
                                {inviteResult.key && (
                                    <div className="mt-3 flex items-center gap-2 bg-black/30 p-2 rounded-lg border border-white/5">
                                        <code className="font-mono text-purple-300">{inviteResult.key}</code>
                                        <button
                                            onClick={() => navigator.clipboard.writeText(inviteResult.key!)}
                                            className="p-1 hover:bg-white/10 rounded transition-colors"
                                            title="Copy Key"
                                        >
                                            <Copy className="w-4 h-4 text-zinc-400" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search */}
            <div className="mb-6 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by email, key, ID, or affiliate code..."
                    className="w-full bg-zinc-900/30 border border-white/5 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                />
            </div>

            {/* Students List */}
            {isLoading ? (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                </div>
            ) : (
                <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/5">
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Student / Email</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Role</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Affiliate ID</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Status</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">License Key</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Date</th>
                                <th className="p-4 text-xs font-medium text-zinc-400 uppercase">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {filteredStudents.map((student) => (
                                <tr key={student.id} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                                <User className="w-4 h-4 text-purple-400" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-white">
                                                    {student.email || 'Unknown Email'}
                                                </div>
                                                <div className="text-xs text-zinc-500 font-mono">
                                                    {student.user_id ? student.user_id.slice(0, 8) + '...' : 'Not Linked'}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        {student.is_admin ? (
                                            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                                <Shield className="w-3 h-3" />
                                                Admin
                                            </span>
                                        ) : (
                                            <span className="text-xs text-zinc-500">Student</span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        {editingId === student.user_id ? (
                                            <div className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    value={editCode}
                                                    onChange={(e) => setEditCode(e.target.value)}
                                                    className="w-24 bg-black/50 border border-white/20 rounded px-2 py-1 text-xs text-white focus:border-purple-500 outline-none"
                                                    autoFocus
                                                />
                                                <button onClick={() => saveAffiliateCode(student.user_id)} disabled={isSavingCode} className="text-green-400 hover:text-green-300">
                                                    {isSavingCode ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3" />}
                                                </button>
                                                <button onClick={() => setEditingId(null)} className="text-red-400 hover:text-red-300">
                                                    <X className="w-3 h-3" />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 group">
                                                <code className="text-xs text-zinc-300 font-mono">
                                                    {student.affiliate_code || '-'}
                                                </code>
                                                {student.user_id && (
                                                    <button
                                                        onClick={() => startEditing(student.user_id, student.affiliate_code)}
                                                        className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-white transition-opacity"
                                                        title="Edit Affiliate ID"
                                                    >
                                                        <Edit2 className="w-3 h-3" />
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${student.status === 'claimed'
                                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                                            : student.status === 'active'
                                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                                : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                            }`}>
                                            {student.status === 'active' ? 'Invited / Pending' : student.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <code className="bg-black/30 px-2 py-1 rounded text-xs text-zinc-300 border border-white/5 font-mono">
                                            {student.key}
                                        </code>
                                    </td>
                                    <td className="p-4 text-sm text-zinc-500">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(student.created_at).toLocaleDateString()}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        {student.status !== 'revoked' && (
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => handleToggleAdmin(student.user_id, student.is_admin)}
                                                    className="text-purple-400 hover:text-purple-300 text-xs font-medium hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
                                                    disabled={!student.user_id}
                                                    title={!student.user_id ? "User must claim key first" : "Toggle Admin"}
                                                >
                                                    {student.is_admin ? 'Remove Admin' : 'Make Admin'}
                                                </button>
                                                <button
                                                    onClick={() => handleRevoke(student.id)}
                                                    className="text-yellow-500 hover:text-yellow-400 text-xs font-medium hover:underline"
                                                >
                                                    Revoke
                                                </button>
                                                <button
                                                    onClick={async () => {
                                                        if (confirm('Are you sure you want to DELETE this user? This will remove their license key and profile data permanently.')) {
                                                            await deleteUser(student.id)
                                                            loadStudents()
                                                        }
                                                    }}
                                                    className="text-red-500 hover:text-red-400 text-xs font-medium hover:underline"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                            {filteredStudents.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="p-8 text-center text-zinc-500">
                                        No students found matching your criteria.
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

