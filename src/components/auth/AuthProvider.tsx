import { ClerkProvider } from '@clerk/nextjs';

export function AuthProvider({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider
            appearance={{
                variables: {
                    colorPrimary: '#8b5cf6',
                    colorBackground: '#0a0118',
                    colorInputBackground: '#1a0b2e',
                    colorInputText: '#ffffff',
                    colorText: '#ffffff',
                    colorTextSecondary: '#e9d5ff',
                },
                elements: {
                    formButtonPrimary:
                        'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700',
                    card: 'bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20',
                    headerTitle: 'text-white',
                    headerSubtitle: 'text-purple-200',
                    socialButtonsBlockButton:
                        'border-purple-500/30 hover:border-purple-500/50 hover:bg-purple-500/10',
                    formFieldLabel: 'text-purple-200',
                    footerActionLink: 'text-violet-400 hover:text-violet-300',
                },
            }}
        >
            {children}
        </ClerkProvider>
    );
}
