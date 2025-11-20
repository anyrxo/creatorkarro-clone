'use client';

import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Aurora Background Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
            >
                <div className="text-center mb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-2"
                    >
                        Welcome Back
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-purple-200/70"
                    >
                        Sign in to continue your learning journey
                    </motion.p>
                </div>

                <div className="bg-zinc-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
                    <SignIn
                        appearance={{
                            elements: {
                                rootBox: 'w-full',
                                card: 'bg-transparent shadow-none w-full',
                                headerTitle: 'hidden',
                                headerSubtitle: 'hidden',
                                formButtonPrimary: 'bg-purple-600 hover:bg-purple-700 text-white',
                                formFieldInput: 'bg-black/50 border-zinc-700 text-white',
                                formFieldLabel: 'text-zinc-400',
                                footerActionLink: 'text-purple-400 hover:text-purple-300',
                                identityPreviewText: 'text-zinc-300',
                                formFieldInputShowPasswordButton: 'text-zinc-400',
                            },
                            layout: {
                                socialButtonsPlacement: 'bottom',
                                showOptionalFields: false,
                            }
                        }}
                        redirectUrl="/learning"
                    />
                </div>
            </motion.div>
        </div>
    );
}
