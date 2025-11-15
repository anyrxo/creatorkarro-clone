import os
import re
from pathlib import Path

# Get all files that need fixing
files = [
    "src/app/blog/500k-followers/page.tsx",
    "src/app/blog/advanced-comfyui-workflows-professional-ai-art/page.tsx",
    "src/app/blog/ai-automation-beginners-guide/page.tsx",
    "src/app/blog/ai-content-opportunity/page.tsx",
    "src/app/blog/ai-image-generation-guide/page.tsx",
    "src/app/blog/ai-influencer-agency-model-scale-to-100k-month/page.tsx",
    "src/app/blog/ai-influencer-brand-deals-how-to-land-sponsorships/page.tsx",
    "src/app/blog/ai-influencer-content-calendar-automation-strategy/page.tsx",
    "src/app/blog/ai-influencer-legal-ethics-complete-guide/page.tsx",
    "src/app/blog/ai-influencer-monetization-complete-guide-2025/page.tsx",
    "src/app/blog/ai-seo-content-optimization/page.tsx",
    "src/app/blog/alpha-evolve-ai-business-empire/page.tsx",
    "src/app/blog/business-automation-tools/page.tsx",
    "src/app/blog/chatgpt-automation-workflows/page.tsx",
    "src/app/blog/claude-4-agentic-coding-revolution/page.tsx",
    "src/app/blog/claude-4-vs-gpt-4-comparison/page.tsx",
    "src/app/blog/cloud-automation-infrastructure/page.tsx",
    "src/app/blog/comfyui-advanced-techniques-professional-workflows/page.tsx",
    "src/app/blog/comfyui-workflow-library/page.tsx",
    "src/app/blog/content-scaling-framework/page.tsx",
    "src/app/blog/creating-ai-influencers/page.tsx",
    "src/app/blog/database-automation-systems/page.tsx",
    "src/app/blog/deepseek-market-disruption/page.tsx",
    "src/app/blog/devops-automation-pipeline/page.tsx",
    "src/app/blog/es-futures-trading-strategy/page.tsx",
    "src/app/blog/essential-n8n-workflows/page.tsx",
    "src/app/blog/faceless-content-strategy/page.tsx",
    "src/app/blog/ftmo-challenge-guide-pass-first-attempt-2025/page.tsx",
    "src/app/blog/ftmo-vs-topstep-prop-firm-review/page.tsx",
    "src/app/blog/futures-trading-for-beginners-guide/page.tsx",
    "src/app/blog/futures-trading-psychology-master-emotions-win/page.tsx",
    "src/app/blog/gpt5-roadmap-creator-empire/page.tsx",
    "src/app/blog/how-to-make-money-with-ai-influencers-15-proven-methods/page.tsx",
    "src/app/blog/how-to-sell-templates/page.tsx",
    "src/app/blog/instagram-content-pillars-build-engaged-audience/page.tsx",
    "src/app/blog/instagram-hashtag-strategy-2025-what-actually-works/page.tsx",
    "src/app/blog/instagram-ignited-success-stories/page.tsx",
    "src/app/blog/instagram-reels-guide/page.tsx",
    "src/app/blog/instagram-reels-viral-formula-10m-views-2025/page.tsx",
    "src/app/blog/iot-automation-systems/page.tsx",
    "src/app/blog/lora-training-guide-consistent-ai-influencer-faces/page.tsx",
    "src/app/blog/macd-indicator-trading-strategy/page.tsx",
    "src/app/blog/machine-learning-automation/page.tsx",
    "src/app/blog/mobile-app-automation/page.tsx",
    "src/app/blog/monetize-with-ai/page.tsx",
    "src/app/blog/multi-platform-ai-influencer-strategy-2025/page.tsx",
    "src/app/blog/n8n-ai-integration-openai-gpt-chatgpt-complete-workflows/page.tsx",
    "src/app/blog/n8n-api-integration-connect-any-service-workflows/page.tsx",
    "src/app/blog/n8n-beginners-guide/page.tsx",
    "src/app/blog/n8n-crm-automation-pipedrive-hubspot-salesforce/page.tsx",
    "src/app/blog/n8n-instagram-automation-complete-growth-workflow/page.tsx",
    "src/app/blog/no-code-automation-tools/page.tsx",
    "src/app/blog/order-flow-trading-strategy-complete-guide/page.tsx",
    "src/app/blog/personal-brand-building/page.tsx",
    "src/app/blog/product-launch-strategy/page.tsx",
    "src/app/blog/prompt-engineering-guide/page.tsx",
    "src/app/blog/prop-firm-comparison-ftmo-topstep-mff-fundedtrading-2025/page.tsx",
    "src/app/blog/robotic-process-automation/page.tsx",
    "src/app/blog/rsi-trading-strategy-complete-guide/page.tsx",
    "src/app/blog/saas-automation-systems/page.tsx",
    "src/app/blog/sales-page-psychology/page.tsx",
    "src/app/blog/scalping-strategies-es-futures-5-proven-methods/page.tsx",
    "src/app/blog/security-automation-systems/page.tsx",
    "src/app/blog/shopify-automation-ai/page.tsx",
    "src/app/blog/social-media-automation/page.tsx",
    "src/app/blog/social-media-calendar/page.tsx",
    "src/app/blog/stable-diffusion-vs-midjourney-ai-influencer-creation/page.tsx",
    "src/app/blog/telegram-bot-monetization/page.tsx",
    "src/app/blog/tiktok-growth-hacks/page.tsx",
    "src/app/blog/topstep-vs-myfundedtrader-comparison/page.tsx",
    "src/app/blog/trading-psychology-master-your-emotions/page.tsx",
    "src/app/blog/virtual-influencer-marketing-strategy-dominate-social-media/page.tsx",
    "src/app/blog/whop-clipping/page.tsx",
    "src/app/blog/why-n8n-is-different/page.tsx",
    "src/app/blog/youtube-shorts-strategy/page.tsx",
]

base_path = Path("C:/Users/manna/Downloads/iimaginedaii/creatorkarro-clone")

for file_path in files:
    full_path = base_path / file_path
    try:
        with open(full_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Fix publishedTime
        content = re.sub(
            r'publishedTime: metadata\.openGraph\.publishedTime',
            r'publishedTime: (metadata.openGraph as any)?.publishedTime as string',
            content
        )

        # Fix modifiedTime
        content = re.sub(
            r'modifiedTime: metadata\.openGraph\.modifiedTime',
            r'modifiedTime: (metadata.openGraph as any)?.modifiedTime as string',
            content
        )

        # Fix image
        content = re.sub(
            r'image: metadata\.openGraph\.images\[0\]\.url',
            r'image: (metadata.openGraph?.images as Array<{url: string}>)?.[0]?.url || ""',
            content
        )

        # Fix keywords
        content = re.sub(
            r'keywords: metadata\.keywords \|\| \[\]',
            r'keywords: metadata.keywords as string[] || []',
            content
        )

        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"Fixed: {file_path}")
    except Exception as e:
        print(f"Error fixing {file_path}: {e}")

print("\nAll files fixed!")
