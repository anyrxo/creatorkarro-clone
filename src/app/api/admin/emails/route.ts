import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin Email Marketing API
 * Manages email campaigns, newsletters, and automated sequences
 */

interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  type: 'newsletter' | 'promotional' | 'course_update' | 'welcome_sequence' | 'abandoned_cart';
  status: 'draft' | 'scheduled' | 'sent' | 'paused';
  createdAt: string;
  scheduledAt?: string;
  sentAt?: string;
  recipients: number;
  opened: number;
  clicked: number;
  unsubscribed: number;
  bounced: number;
  openRate: number;
  clickRate: number;
  unsubscribeRate: number;
  template: string;
  segment: string;
  content: {
    preheader: string;
    bodyText: string;
    cta: {
      text: string;
      url: string;
    };
  };
  analytics: {
    revenue: number;
    conversions: number;
    conversionRate: number;
  };
}

interface EmailList {
  id: string;
  name: string;
  description: string;
  subscribers: number;
  activeSubscribers: number;
  segmentRules: string[];
  createdAt: string;
  lastUpdated: string;
  growthRate: number;
}

interface EmailTemplate {
  id: string;
  name: string;
  category: 'newsletter' | 'promotional' | 'transactional' | 'course';
  subject: string;
  preheader: string;
  content: string;
  thumbnail: string;
  usageCount: number;
  createdAt: string;
}

// Mock email campaigns data
const getEmailCampaigns = async (): Promise<EmailCampaign[]> => {
  return [
    {
      id: 'camp_001',
      name: 'Instagram Growth Tips Newsletter #47',
      subject: ' 3 Instagram Growth Hacks That Got Me 50K Followers',
      type: 'newsletter',
      status: 'sent',
      createdAt: '2025-01-15T08:00:00Z',
      sentAt: '2025-01-15T10:00:00Z',
      recipients: 15420,
      opened: 8934,
      clicked: 1256,
      unsubscribed: 23,
      bounced: 45,
      openRate: 57.9,
      clickRate: 14.1,
      unsubscribeRate: 0.15,
      template: 'newsletter_modern',
      segment: 'instagram_subscribers',
      content: {
        preheader: 'These 3 simple hacks will transform your Instagram growth...',
        bodyText: 'Hey there! This week I\'m sharing the exact 3 strategies that helped me gain 50K followers...',
        cta: {
          text: 'Read Full Guide',
          url: 'https://iimagined.ai/blog/instagram-growth-2025'
        }
      },
      analytics: {
        revenue: 8947,
        conversions: 67,
        conversionRate: 5.3
      }
    },
    {
      id: 'camp_002',
      name: 'Digital Products Flash Sale',
      subject: ' 48-Hour Flash Sale: 50% Off All Courses',
      type: 'promotional',
      status: 'sent',
      createdAt: '2025-01-12T14:00:00Z',
      sentAt: '2025-01-12T16:00:00Z',
      recipients: 12867,
      opened: 9234,
      clicked: 2847,
      unsubscribed: 67,
      bounced: 28,
      openRate: 71.8,
      clickRate: 30.8,
      unsubscribeRate: 0.52,
      template: 'promotional_urgency',
      segment: 'course_interested',
      content: {
        preheader: 'Limited time: Save 50% on Instagram Ignited + Digital Products courses',
        bodyText: 'This is a limited 48-hour flash sale on our most popular courses...',
        cta: {
          text: 'Claim 50% Discount',
          url: 'https://iimagined.ai/courses?discount=FLASH50'
        }
      },
      analytics: {
        revenue: 47892,
        conversions: 234,
        conversionRate: 8.2
      }
    },
    {
      id: 'camp_003',
      name: 'AI Automation Course Update',
      subject: ' New Module Added: ChatGPT Advanced Workflows',
      type: 'course_update',
      status: 'sent',
      createdAt: '2025-01-10T11:00:00Z',
      sentAt: '2025-01-10T12:00:00Z',
      recipients: 634,
      opened: 487,
      clicked: 312,
      unsubscribed: 2,
      bounced: 1,
      openRate: 76.8,
      clickRate: 64.1,
      unsubscribeRate: 0.32,
      template: 'course_update',
      segment: 'ai_automation_students',
      content: {
        preheader: 'New advanced ChatGPT workflows module is now live!',
        bodyText: 'Great news! I\'ve just added a brand new module covering advanced ChatGPT workflows...',
        cta: {
          text: 'Access New Module',
          url: 'https://iimagined.ai/courses/ai-automation/module-9'
        }
      },
      analytics: {
        revenue: 0,
        conversions: 0,
        conversionRate: 0
      }
    },
    {
      id: 'camp_004',
      name: 'Welcome Series: Email 3',
      subject: '👋 Your First Week Checklist (+ Free Instagram Templates)',
      type: 'welcome_sequence',
      status: 'sent',
      createdAt: '2025-01-08T09:30:00Z',
      sentAt: '2025-01-08T10:00:00Z',
      recipients: 892,
      opened: 654,
      clicked: 287,
      unsubscribed: 8,
      bounced: 5,
      openRate: 73.3,
      clickRate: 43.9,
      unsubscribeRate: 0.90,
      template: 'welcome_sequence',
      segment: 'new_subscribers',
      content: {
        preheader: 'Here\'s your week 1 action plan + free Instagram templates',
        bodyText: 'Welcome to day 3! You\'re doing amazing. Here\'s your week 1 checklist...',
        cta: {
          text: 'Download Free Templates',
          url: 'https://iimagined.ai/free-instagram-templates'
        }
      },
      analytics: {
        revenue: 2847,
        conversions: 23,
        conversionRate: 8.0
      }
    },
    {
      id: 'camp_005',
      name: 'Abandoned Cart Recovery',
      subject: '🛒 You left something behind... (Special 25% discount inside)',
      type: 'abandoned_cart',
      status: 'scheduled',
      createdAt: '2025-01-15T16:00:00Z',
      scheduledAt: '2025-01-16T09:00:00Z',
      recipients: 156,
      opened: 0,
      clicked: 0,
      unsubscribed: 0,
      bounced: 0,
      openRate: 0,
      clickRate: 0,
      unsubscribeRate: 0,
      template: 'abandoned_cart',
      segment: 'cart_abandoners_24h',
      content: {
        preheader: 'Complete your purchase with this exclusive 25% discount',
        bodyText: 'I noticed you were interested in our Instagram Ignited course but didn\'t complete your purchase...',
        cta: {
          text: 'Complete Purchase (25% Off)',
          url: 'https://iimagined.ai/checkout?discount=COMEBACK25'
        }
      },
      analytics: {
        revenue: 0,
        conversions: 0,
        conversionRate: 0
      }
    }
  ];
};

const getEmailLists = async (): Promise<EmailList[]> => {
  return [
    {
      id: 'list_001',
      name: 'Instagram Growth Subscribers',
      description: 'Subscribers interested in Instagram growth strategies',
      subscribers: 15420,
      activeSubscribers: 14892,
      segmentRules: ['interested_in:instagram', 'engagement_level:high'],
      createdAt: '2024-06-01T00:00:00Z',
      lastUpdated: '2025-01-15T10:30:00Z',
      growthRate: 12.3
    },
    {
      id: 'list_002',
      name: 'Digital Product Entrepreneurs',
      description: 'People building digital product businesses',
      subscribers: 12867,
      activeSubscribers: 12234,
      segmentRules: ['interested_in:digital_products', 'business_owner:true'],
      createdAt: '2024-07-15T00:00:00Z',
      lastUpdated: '2025-01-14T15:45:00Z',
      growthRate: 8.7
    },
    {
      id: 'list_003',
      name: 'AI Automation Students',
      description: 'Students enrolled in AI automation courses',
      subscribers: 634,
      activeSubscribers: 612,
      segmentRules: ['course_enrolled:ai_automation', 'student_status:active'],
      createdAt: '2024-10-10T00:00:00Z',
      lastUpdated: '2025-01-12T11:20:00Z',
      growthRate: 15.2
    },
    {
      id: 'list_004',
      name: 'VIP Members',
      description: 'High-value customers and repeat buyers',
      subscribers: 423,
      activeSubscribers: 418,
      segmentRules: ['total_spent:>500', 'vip_status:true'],
      createdAt: '2024-08-01T00:00:00Z',
      lastUpdated: '2025-01-13T09:15:00Z',
      growthRate: 6.4
    }
  ];
};

const getEmailTemplates = async (): Promise<EmailTemplate[]> => {
  return [
    {
      id: 'tpl_001',
      name: 'Modern Newsletter',
      category: 'newsletter',
      subject: 'Weekly Growth Tips',
      preheader: 'Your weekly dose of growth strategies',
      content: '<html>Newsletter template content...</html>',
      thumbnail: '/email-templates/modern-newsletter.png',
      usageCount: 47,
      createdAt: '2024-06-01T00:00:00Z'
    },
    {
      id: 'tpl_002',
      name: 'Promotional Urgency',
      category: 'promotional',
      subject: 'Limited Time Offer',
      preheader: 'Don\'t miss out on this exclusive deal',
      content: '<html>Promotional template content...</html>',
      thumbnail: '/email-templates/promotional-urgency.png',
      usageCount: 23,
      createdAt: '2024-07-01T00:00:00Z'
    },
    {
      id: 'tpl_003',
      name: 'Course Update',
      category: 'course',
      subject: 'New Module Available',
      preheader: 'Your course has been updated with new content',
      content: '<html>Course update template content...</html>',
      thumbnail: '/email-templates/course-update.png',
      usageCount: 12,
      createdAt: '2024-08-01T00:00:00Z'
    }
  ];
};

const getEmailStats = async () => {
  const campaigns = await getEmailCampaigns();
  const lists = await getEmailLists();
  
  const sentCampaigns = campaigns.filter(c => c.status === 'sent');
  const totalRecipients = sentCampaigns.reduce((sum, c) => sum + c.recipients, 0);
  const totalOpened = sentCampaigns.reduce((sum, c) => sum + c.opened, 0);
  const totalClicked = sentCampaigns.reduce((sum, c) => sum + c.clicked, 0);
  const totalRevenue = sentCampaigns.reduce((sum, c) => sum + c.analytics.revenue, 0);
  const totalSubscribers = lists.reduce((sum, l) => sum + l.activeSubscribers, 0);
  
  return {
    totalCampaigns: campaigns.length,
    sentCampaigns: sentCampaigns.length,
    scheduledCampaigns: campaigns.filter(c => c.status === 'scheduled').length,
    totalSubscribers,
    avgOpenRate: Math.round((totalOpened / totalRecipients) * 100 * 10) / 10,
    avgClickRate: Math.round((totalClicked / totalRecipients) * 100 * 10) / 10,
    totalRevenue,
    revenuePerEmail: Math.round((totalRevenue / totalRecipients) * 100) / 100,
    topPerformingCampaigns: campaigns.sort((a, b) => b.analytics.revenue - a.analytics.revenue).slice(0, 3),
    recentCampaigns: campaigns.slice(0, 5)
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
    const endpoint = searchParams.get('endpoint');
    
    switch (endpoint) {
      case 'campaigns':
        const campaigns = await getEmailCampaigns();
        const campaignStats = await getEmailStats();
        
        // Apply filters
        const status = searchParams.get('status');
        const type = searchParams.get('type');
        
        let filteredCampaigns = campaigns;
        
        if (status && status !== 'all') {
          filteredCampaigns = filteredCampaigns.filter(c => c.status === status);
        }
        
        if (type && type !== 'all') {
          filteredCampaigns = filteredCampaigns.filter(c => c.type === type);
        }
        
        return NextResponse.json({
          campaigns: filteredCampaigns,
          stats: campaignStats
        });
        
      case 'lists':
        const lists = await getEmailLists();
        return NextResponse.json({ lists });
        
      case 'templates':
        const templates = await getEmailTemplates();
        return NextResponse.json({ templates });
        
      default:
        // Return overview data
        const allCampaigns = await getEmailCampaigns();
        const allStats = await getEmailStats();
        const allLists = await getEmailLists();
        
        return NextResponse.json({
          overview: allStats,
          recentCampaigns: allCampaigns.slice(0, 5),
          lists: allLists.slice(0, 3)
        });
    }

  } catch (error) {
    console.error('Failed to fetch email data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch email data' },
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
    const { action, campaignId, data } = body;

    switch (action) {
      case 'create_campaign':
        // In a real implementation, this would create campaign in database
        console.log('Creating email campaign:', data);
        return NextResponse.json({
          success: true,
          message: 'Email campaign created successfully',
          campaignId: `camp_${Date.now()}`
        });

      case 'send_campaign':
        // Send campaign immediately
        console.log(`Sending campaign ${campaignId} immediately`);
        return NextResponse.json({
          success: true,
          message: 'Campaign sent successfully',
          sentTo: Math.floor(Math.random() * 10000) + 5000
        });

      case 'schedule_campaign':
        // Schedule campaign for later
        console.log(`Scheduling campaign ${campaignId} for ${data.scheduledAt}`);
        return NextResponse.json({
          success: true,
          message: `Campaign scheduled for ${data.scheduledAt}`
        });

      case 'duplicate_campaign':
        // Duplicate existing campaign
        console.log(`Duplicating campaign ${campaignId}`);
        return NextResponse.json({
          success: true,
          message: 'Campaign duplicated successfully',
          newCampaignId: `camp_${Date.now()}_copy`
        });

      case 'create_list':
        // Create new email list
        console.log('Creating email list:', data);
        return NextResponse.json({
          success: true,
          message: 'Email list created successfully',
          listId: `list_${Date.now()}`
        });

      case 'bulk_import':
        // Bulk import subscribers
        console.log(`Bulk importing ${data.subscribers.length} subscribers to list ${data.listId}`);
        return NextResponse.json({
          success: true,
          message: `${data.subscribers.length} subscribers imported successfully`,
          imported: data.subscribers.length,
          duplicates: Math.floor(Math.random() * 10),
          invalid: Math.floor(Math.random() * 5)
        });

      case 'create_template':
        // Create new email template
        console.log('Creating email template:', data);
        return NextResponse.json({
          success: true,
          message: 'Email template created successfully',
          templateId: `tpl_${Date.now()}`
        });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

  } catch (error) {
    console.error('Failed to process email action:', error);
    return NextResponse.json(
      { error: 'Failed to process action' },
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
    const { campaignId, updates } = body;

    // In a real implementation, this would update the campaign in database
    console.log(`Updating email campaign ${campaignId}:`, updates);

    const allowedUpdates = ['name', 'subject', 'content', 'scheduledAt', 'status'];
    const validUpdates = Object.keys(updates).filter(key => allowedUpdates.includes(key));

    if (validUpdates.length === 0) {
      return NextResponse.json({ error: 'No valid updates provided' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Email campaign updated successfully',
      updatedFields: validUpdates
    });

  } catch (error) {
    console.error('Failed to update email campaign:', error);
    return NextResponse.json(
      { error: 'Failed to update email campaign' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const searchParams = request.nextUrl.searchParams;
    const campaignId = searchParams.get('campaignId');

    if (!campaignId) {
      return NextResponse.json({ error: 'Campaign ID required' }, { status: 400 });
    }

    // In a real implementation, this would soft delete the campaign
    console.log(`Deleting email campaign ${campaignId}`);

    return NextResponse.json({
      success: true,
      message: 'Email campaign deleted successfully'
    });

  } catch (error) {
    console.error('Failed to delete email campaign:', error);
    return NextResponse.json(
      { error: 'Failed to delete email campaign' },
      { status: 500 }
    );
  }
}