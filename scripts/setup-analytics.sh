#!/bin/bash

###############################################################################
# Analytics Setup Script
#
# This script configures analytics for the Next.js application
# Run this after deploying to set up tracking infrastructure
###############################################################################

echo "========================================="
echo "Analytics & Conversion Tracking Setup"
echo "========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "${YELLOW}Creating .env.local file...${NC}"
    touch .env.local
fi

# Function to add or update environment variable
add_env_var() {
    local key=$1
    local value=$2

    if grep -q "^${key}=" .env.local; then
        # Update existing
        sed -i "s|^${key}=.*|${key}=${value}|" .env.local
        echo "${GREEN}✓ Updated ${key}${NC}"
    else
        # Add new
        echo "${key}=${value}" >> .env.local
        echo "${GREEN}✓ Added ${key}${NC}"
    fi
}

echo "Step 1: Google Analytics 4 Configuration"
echo "========================================="
echo ""
echo "Go to: https://analytics.google.com/analytics/web/"
echo "Create a GA4 property if you haven't already"
echo ""
read -p "Enter your GA4 Measurement ID (G-XXXXXXXXXX): " GA4_ID

if [ -z "$GA4_ID" ]; then
    echo "${RED}✗ GA4 Measurement ID is required${NC}"
    exit 1
fi

add_env_var "NEXT_PUBLIC_GA_MEASUREMENT_ID" "$GA4_ID"

echo ""
echo "To enable server-side conversion tracking:"
echo "1. Go to GA4 Admin > Data Streams > Your Stream"
echo "2. Scroll to 'Measurement Protocol API secrets'"
echo "3. Create an API secret"
echo ""
read -p "Enter GA4 API Secret (or press Enter to skip): " GA4_SECRET

if [ ! -z "$GA4_SECRET" ]; then
    add_env_var "GA4_API_SECRET" "$GA4_SECRET"
fi

echo ""
echo "Step 2: Microsoft Clarity (Optional)"
echo "========================================="
echo ""
echo "Go to: https://clarity.microsoft.com/"
echo "Create a project and get your Project ID"
echo ""
read -p "Enter Clarity Project ID (or press Enter to skip): " CLARITY_ID

if [ ! -z "$CLARITY_ID" ]; then
    add_env_var "NEXT_PUBLIC_CLARITY_ID" "$CLARITY_ID"
fi

echo ""
echo "Step 3: Facebook Pixel (Optional)"
echo "========================================="
echo ""
echo "Go to: https://business.facebook.com/events_manager"
echo "Create a pixel and get your Pixel ID"
echo ""
read -p "Enter Facebook Pixel ID (or press Enter to skip): " FB_PIXEL

if [ ! -z "$FB_PIXEL" ]; then
    add_env_var "NEXT_PUBLIC_FB_PIXEL_ID" "$FB_PIXEL"
fi

echo ""
echo "Step 4: Whop Webhook Configuration"
echo "========================================="
echo ""
echo "Go to: https://dash.whop.com/settings/webhooks"
echo "Add webhook URL: https://yourdomain.com/api/webhooks/whop"
echo "Copy the webhook secret"
echo ""
read -p "Enter Whop Webhook Secret (or press Enter to skip): " WHOP_SECRET

if [ ! -z "$WHOP_SECRET" ]; then
    add_env_var "WHOP_WEBHOOK_SECRET" "$WHOP_SECRET"
fi

echo ""
echo "${GREEN}========================================="
echo "Setup Complete!"
echo "=========================================${NC}"
echo ""
echo "Configuration saved to .env.local"
echo ""
echo "Next steps:"
echo "1. Rebuild your application: npm run build"
echo "2. Deploy the changes"
echo "3. Test tracking by visiting your site"
echo "4. Check GA4 DebugView to verify events"
echo ""
echo "Useful links:"
echo "- GA4 DebugView: https://analytics.google.com/analytics/web/#/a${GA4_ID}/debugview"
echo "- Clarity Dashboard: https://clarity.microsoft.com/projects"
echo "- Whop Webhooks: https://dash.whop.com/settings/webhooks"
echo ""
echo "${YELLOW}⚠ Important: Make sure to add .env.local to .gitignore!${NC}"
echo ""

# Check if .env.local is in .gitignore
if ! grep -q "\.env\.local" .gitignore 2>/dev/null; then
    echo ".env.local" >> .gitignore
    echo "${GREEN}✓ Added .env.local to .gitignore${NC}"
fi

echo ""
echo "To verify your setup, run:"
echo "  npm run dev"
echo "  Open http://localhost:3000"
echo "  Open browser console and check for analytics messages"
echo ""
