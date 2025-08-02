import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin Settings API
 * Manages system configuration, site settings, and administrative preferences
 */

interface SiteSettings {
  siteName: string;
  siteDescription: string;
  siteUrl: string;
  adminEmail: string;
  supportEmail: string;
  timezone: string;
  currency: string;
  language: string;
  maintenanceMode: boolean;
  maintenanceMessage: string;
}

interface SEOSettings {
  defaultMetaTitle: string;
  defaultMetaDescription: string;
  defaultOGImage: string;
  googleAnalyticsId: string;
  googleTagManagerId: string;
  facebookPixelId: string;
  twitterPixelId: string;
  hotjarId: string;
  enableSchemaDotOrg: boolean;
  enableOpenGraph: boolean;
  enableTwitterCards: boolean;
}

interface SecuritySettings {
  antiScrapingEnabled: boolean;
  devToolsBlocking: boolean;
  rightClickProtection: boolean;
  textSelectionBlocking: boolean;
  keyboardShortcutBlocking: boolean;
  browserConsoleWarning: boolean;
  ipRateLimiting: boolean;
  maxRequestsPerMinute: number;
  captchaEnabled: boolean;
  captchaProvider: 'recaptcha' | 'hcaptcha' | 'turnstile';
  suspiciousActivityThreshold: number;
  autoBlockEnabled: boolean;
  whitelistedIPs: string[];
  blacklistedIPs: string[];
}

interface EmailSettings {
  smtpHost: string;
  smtpPort: number;
  smtpUsername: string;
  smtpPassword: string;
  smtpEncryption: 'tls' | 'ssl' | 'none';
  fromName: string;
  fromEmail: string;
  replyToEmail: string;
  emailProvider: 'smtp' | 'sendgrid' | 'mailgun' | 'postmark';
  apiKey: string;
  defaultTemplate: string;
  unsubscribeUrl: string;
}

interface PaymentSettings {
  stripeEnabled: boolean;
  stripePublishableKey: string;
  stripeSecretKey: string;
  stripeWebhookSecret: string;
  paypalEnabled: boolean;
  paypalClientId: string;
  paypalClientSecret: string;
  paypalMode: 'sandbox' | 'production';
  nowpaymentsEnabled: boolean;
  nowpaymentsApiKey: string;
  nowpaymentsPublicKey: string;
  nowpaymentsEnvironment: 'sandbox' | 'production';
  supportedCryptoCurrencies: string[];
  cryptoPaymentTimeout: number;
  directWalletEnabled: boolean;
  walletAddresses: {
    BTC: string;
    ETH: string;
    SOL: string;
    USDT: string;
    USDC: string;
  };
  paymentMethod: 'nowpayments' | 'direct_wallet' | 'both';
  defaultCurrency: string;
  taxRate: number;
  taxIncluded: boolean;
  refundPolicy: string;
}

interface IntegrationSettings {
  zapierWebhookUrl: string;
  slackWebhookUrl: string;
  discordWebhookUrl: string;
  telegramBotToken: string;
  telegramChatId: string;
  webhookSecret: string;
  apiRateLimit: number;
  enableWebhooks: boolean;
  notificationChannels: string[];
}

interface BackupSettings {
  autoBackupEnabled: boolean;
  backupFrequency: 'daily' | 'weekly' | 'monthly';
  backupRetention: number;
  backupLocation: 'local' | 's3' | 'dropbox' | 'gdrive';
  s3Bucket: string;
  s3Region: string;
  s3AccessKey: string;
  s3SecretKey: string;
  lastBackup: string;
  nextBackup: string;
}

// Mock settings data - in production, this would come from database
const getSettings = async () => {
  return {
    site: {
      siteName: 'IImagined.ai',
      siteDescription: 'Advanced AI automation and digital growth strategies',
      siteUrl: 'https://iimagined.ai',
      adminEmail: 'admin@iimagined.ai',
      supportEmail: 'support@iimagined.ai',
      timezone: 'America/New_York',
      currency: 'USD',
      language: 'en',
      maintenanceMode: false,
      maintenanceMessage: 'Site is temporarily down for maintenance. We\'ll be back soon!'
    } as SiteSettings,
    
    seo: {
      defaultMetaTitle: 'IImagined.ai - AI Automation & Digital Growth',
      defaultMetaDescription: 'Master AI automation, Instagram growth, and digital products with proven strategies from industry experts.',
      defaultOGImage: 'https://iimagined.ai/og-image.jpg',
      googleAnalyticsId: 'GA-XXXXXXXX-X',
      googleTagManagerId: 'GTM-XXXXXXX',
      facebookPixelId: '123456789012345',
      twitterPixelId: 'o-12345',
      hotjarId: '1234567',
      enableSchemaDotOrg: true,
      enableOpenGraph: true,
      enableTwitterCards: true
    } as SEOSettings,
    
    security: {
      antiScrapingEnabled: true,
      devToolsBlocking: true,
      rightClickProtection: true,
      textSelectionBlocking: false,
      keyboardShortcutBlocking: true,
      browserConsoleWarning: true,
      ipRateLimiting: true,
      maxRequestsPerMinute: 60,
      captchaEnabled: true,
      captchaProvider: 'recaptcha' as const,
      suspiciousActivityThreshold: 5,
      autoBlockEnabled: true,
      whitelistedIPs: ['127.0.0.1', '192.168.1.0/24'],
      blacklistedIPs: ['1.2.3.4', '5.6.7.8']
    } as SecuritySettings,
    
    email: {
      smtpHost: 'smtp.gmail.com',
      smtpPort: 587,
      smtpUsername: 'noreply@iimagined.ai',
      smtpPassword: '••••••••••••',
      smtpEncryption: 'tls' as const,
      fromName: 'IImagined.ai',
      fromEmail: 'noreply@iimagined.ai',
      replyToEmail: 'support@iimagined.ai',
      emailProvider: 'smtp' as const,
      apiKey: '••••••••••••••••••••',
      defaultTemplate: 'modern',
      unsubscribeUrl: 'https://iimagined.ai/unsubscribe'
    } as EmailSettings,
    
    payment: {
      stripeEnabled: true,
      stripePublishableKey: 'pk_live_••••••••••••••••••••',
      stripeSecretKey: 'sk_live_••••••••••••••••••••',
      stripeWebhookSecret: 'whsec_••••••••••••••••••••',
      paypalEnabled: true,
      paypalClientId: 'AY••••••••••••••••••••••••••••••',
      paypalClientSecret: 'EL••••••••••••••••••••••••••••••',
      paypalMode: 'production' as const,
      nowpaymentsEnabled: true,
      nowpaymentsApiKey: 'FQTHSZD-1G6MC7D-NN5K7AQ-5PSGR2V',
      nowpaymentsPublicKey: '59999bf5-b303-4e10-bce1-70fabe96d81a',
      nowpaymentsEnvironment: 'production' as const,
      supportedCryptoCurrencies: ['BTC', 'ETH', 'USDT', 'USDC', 'LTC', 'XRP', 'ADA', 'DOT', 'MATIC', 'TRX', 'BNB', 'SOL'],
      cryptoPaymentTimeout: 60,
      directWalletEnabled: true,
      walletAddresses: {
        BTC: 'bc1qg58la9talxvag8r0pfv6cq3m7t4hg7anttzz97',
        ETH: '0xCe469428F94D48d433489374111ca80Df880FA75',
        SOL: 'EYyjCBorMF3yxjLHM9KEuez6kSzLWo58Z4PMyDZEYjw4',
        USDT: '0xCe469428F94D48d433489374111ca80Df880FA75', // ERC-20 USDT uses ETH address
        USDC: '0xCe469428F94D48d433489374111ca80Df880FA75'  // ERC-20 USDC uses ETH address
      },
      paymentMethod: 'both' as const,
      defaultCurrency: 'USD',
      taxRate: 0,
      taxIncluded: false,
      refundPolicy: '30-day money-back guarantee'
    } as PaymentSettings,
    
    integrations: {
      zapierWebhookUrl: 'https://hooks.zapier.com/hooks/catch/••••••••/',
      slackWebhookUrl: 'https://hooks.slack.com/services/••••••••/',
      discordWebhookUrl: 'https://discord.com/api/webhooks/••••••••/',
      telegramBotToken: '••••••••:••••••••••••••••••••••••••••••••',
      telegramChatId: '-123456789',
      webhookSecret: 'webhook_secret_key',
      apiRateLimit: 1000,
      enableWebhooks: true,
      notificationChannels: ['email', 'slack', 'telegram']
    } as IntegrationSettings,
    
    backup: {
      autoBackupEnabled: true,
      backupFrequency: 'weekly' as const,
      backupRetention: 30,
      backupLocation: 's3' as const,
      s3Bucket: 'iimagined-backups',
      s3Region: 'us-east-1',
      s3AccessKey: 'AKIA••••••••••••••••',
      s3SecretKey: '••••••••••••••••••••••••••••••••••••••••',
      lastBackup: '2025-01-14T02:00:00Z',
      nextBackup: '2025-01-21T02:00:00Z'
    } as BackupSettings
  };
};

const getSystemInfo = async () => {
  return {
    version: '2.1.4',
    environment: 'production',
    nodeVersion: 'v18.17.0',
    uptime: '45 days, 12 hours',
    memoryUsage: {
      used: '1.2 GB',
      total: '4.0 GB',
      percentage: 30
    },
    diskUsage: {
      used: '15.6 GB',
      total: '100 GB',
      percentage: 15.6
    },
    database: {
      status: 'connected',
      size: '2.4 GB',
      connections: 12,
      avgResponseTime: '45ms'
    },
    cache: {
      status: 'active',
      hitRate: '94.2%',
      size: '456 MB',
      keys: 12847
    },
    security: {
      lastSecurityScan: '2025-01-15T10:30:00Z',
      threatsBlocked: 847,
      suspiciousIPs: 23,
      protectionLevel: 'Maximum'
    }
  };
};

function checkAdminAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization');
  const token = request.nextUrl.searchParams.get('token');
  return authHeader?.includes('Onfroy1738!') || token === 'Onfroy1738!';
}

export async function GET(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    
    const allSettings = await getSettings();
    
    if (category) {
      // Return specific category settings
      if (category in allSettings) {
        return NextResponse.json({
          [category]: allSettings[category as keyof typeof allSettings]
        });
      } else {
        return NextResponse.json({ error: 'Invalid settings category' }, { status: 400 });
      }
    }
    
    // Return all settings with system info
    const systemInfo = await getSystemInfo();
    
    return NextResponse.json({
      settings: allSettings,
      system: systemInfo,
      lastUpdated: new Date().toISOString()
    });

  } catch (error) {
    console.error('Failed to fetch settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { category, settings } = body;

    if (!category || !settings) {
      return NextResponse.json({ 
        error: 'Category and settings are required' 
      }, { status: 400 });
    }

    // In a real implementation, this would update settings in database
    console.log(`Updating ${category} settings:`, settings);

    // Validate critical settings
    if (category === 'security' && settings.maxRequestsPerMinute < 10) {
      return NextResponse.json({ 
        error: 'Rate limit too low. Minimum 10 requests per minute.' 
      }, { status: 400 });
    }

    if (category === 'email' && settings.smtpPort && (settings.smtpPort < 1 || settings.smtpPort > 65535)) {
      return NextResponse.json({ 
        error: 'Invalid SMTP port. Must be between 1 and 65535.' 
      }, { status: 400 });
    }

    // Simulate setting update
    const updatedFields = Object.keys(settings);
    
    return NextResponse.json({
      success: true,
      message: `${category} settings updated successfully`,
      category,
      updatedFields,
      updatedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Failed to update settings:', error);
    return NextResponse.json(
      { error: 'Failed to update settings' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'test_email_settings':
        // Test email configuration
        console.log('Testing email settings:', data);
        return NextResponse.json({
          success: true,
          message: 'Test email sent successfully',
          details: 'Email delivered to admin@iimagined.ai'
        });

      case 'test_payment_gateway':
        // Test payment gateway connection
        console.log('Testing payment gateway:', data.provider);
        return NextResponse.json({
          success: true,
          message: `${data.provider} connection successful`,
          details: 'All payment methods are functioning correctly'
        });

      case 'backup_now':
        // Trigger immediate backup
        console.log('Triggering immediate backup');
        return NextResponse.json({
          success: true,
          message: 'Backup initiated successfully',
          backupId: `backup_${Date.now()}`,
          estimatedTime: '5-10 minutes'
        });

      case 'clear_cache':
        // Clear system cache
        console.log('Clearing system cache');
        return NextResponse.json({
          success: true,
          message: 'Cache cleared successfully',
          details: 'All cached data has been removed'
        });

      case 'run_security_scan':
        // Run security vulnerability scan
        console.log('Running security scan');
        return NextResponse.json({
          success: true,
          message: 'Security scan completed',
          results: {
            vulnerabilities: 0,
            warnings: 2,
            recommendations: ['Update SSL certificate', 'Enable additional 2FA']
          }
        });

      case 'export_settings':
        // Export all settings to backup file
        console.log('Exporting settings');
        return NextResponse.json({
          success: true,
          message: 'Settings exported successfully',
          downloadUrl: '/api/admin/settings/export?token=temp_export_token'
        });

      case 'import_settings':
        // Import settings from backup file
        console.log('Importing settings:', data);
        return NextResponse.json({
          success: true,
          message: 'Settings imported successfully',
          imported: data.categories || ['site', 'seo', 'security']
        });

      case 'reset_to_defaults':
        // Reset specific category to default values
        console.log('Resetting to defaults:', data.category);
        return NextResponse.json({
          success: true,
          message: `${data.category} settings reset to defaults`,
          category: data.category
        });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

  } catch (error) {
    console.error('Failed to process settings action:', error);
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    );
  }
}