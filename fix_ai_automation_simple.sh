#!/bin/bash

# Get the content after line 110 (the actual component content)
tail -n +110 "/Users/anyro/Downloads/New-Project(10)/creatorkarro-clone/src/app/blog/ai-automation-guide/page.tsx.backup" > /tmp/ai-automation-content.tsx

# Create a new file with proper structure
cat > "/Users/anyro/Downloads/New-Project(10)/creatorkarro-clone/src/app/blog/ai-automation-guide/page.tsx" << 'EOF'
'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlogMetrics from '@/components/BlogMetrics'

export default function AIAutomationGuide() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const toolsAnimation = useScrollAnimation({ threshold: 0.1 })
  const workflowAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.2 })

  return (
    <div className="min-h-screen bg-dark">
EOF

# Add the content
cat /tmp/ai-automation-content.tsx >> "/Users/anyro/Downloads/New-Project(10)/creatorkarro-clone/src/app/blog/ai-automation-guide/page.tsx"

echo "Fixed ai-automation-guide.tsx with simpler structure"