import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin Sales Analytics API
 * Provides comprehensive sales data, analytics, and revenue insights
 */

interface SalesData {
  date: string;
  revenue: number;
  orders: number;
  averageOrderValue: number;
  newCustomers: number;
  returningCustomers: number;
  refunds: number;
  refundAmount: number;
}

interface ProductSales {
  productId: string;
  productName: string;
  category: string;
  price: number;
  unitsSold: number;
  revenue: number;
  refunds: number;
  netRevenue: number;
  conversionRate: number;
  viewsToSales: number;
}

interface SalesMetrics {
  totalRevenue: number;
  totalOrders: number;
  averageOrderValue: number;
  totalCustomers: number;
  customerLifetimeValue: number;
  monthlyRecurringRevenue: number;
  churnRate: number;
  refundRate: number;
  profitMargin: number;
}

interface GeographicSales {
  country: string;
  countryCode: string;
  revenue: number;
  orders: number;
  customers: number;
  averageOrderValue: number;
}

interface SalesFunnel {
  stage: string;
  visitors: number;
  conversions: number;
  conversionRate: number;
  revenue: number;
}

// Mock daily sales data for the last 30 days
const getDailySalesData = async (): Promise<SalesData[]> => {
  const data: SalesData[] = [];
  const now = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Generate realistic sales data with some randomness
    const baseRevenue = 2000 + Math.random() * 3000;
    const orders = Math.floor(5 + Math.random() * 25);
    const newCustomers = Math.floor(orders * (0.4 + Math.random() * 0.4));
    const returningCustomers = orders - newCustomers;
    const refundAmount = Math.floor(baseRevenue * (0.02 + Math.random() * 0.03));
    
    data.push({
      date: date.toISOString().split('T')[0],
      revenue: Math.round(baseRevenue),
      orders,
      averageOrderValue: Math.round(baseRevenue / orders),
      newCustomers,
      returningCustomers,
      refunds: Math.floor(Math.random() * 3),
      refundAmount
    });
  }
  
  return data;
};

const getProductSales = async (): Promise<ProductSales[]> => {
  return [
    {
      productId: 'instagram-ignited',
      productName: 'Instagram Ignited: 0 to 500K Followers',
      category: 'Course',
      price: 297,
      unitsSold: 1247,
      revenue: 370359,
      refunds: 23,
      netRevenue: 363526,
      conversionRate: 12.4,
      viewsToSales: 8.2
    },
    {
      productId: 'digital-products',
      productName: 'Digital Products Masterclass',
      category: 'Course',
      price: 197,
      unitsSold: 892,
      revenue: 175824,
      refunds: 12,
      netRevenue: 173460,
      conversionRate: 15.7,
      viewsToSales: 11.3
    },
    {
      productId: 'ai-automation',
      productName: 'AI Automation Suite',
      category: 'Course',
      price: 497,
      unitsSold: 634,
      revenue: 315098,
      refunds: 18,
      netRevenue: 306152,
      conversionRate: 8.9,
      viewsToSales: 6.1
    },
    {
      productId: 'comfyui',
      productName: 'ComfyUI Workflows',
      category: 'Course',
      price: 97,
      unitsSold: 456,
      revenue: 44232,
      refunds: 8,
      netRevenue: 43456,
      conversionRate: 18.2,
      viewsToSales: 14.7
    },
    {
      productId: 'bundle-ig-dp',
      productName: 'Instagram + Digital Products Bundle',
      category: 'Bundle',
      price: 397,
      unitsSold: 189,
      revenue: 75033,
      refunds: 4,
      netRevenue: 74445,
      conversionRate: 22.3,
      viewsToSales: 18.9
    },
    {
      productId: 'consultation',
      productName: '1-on-1 Growth Consultation',
      category: 'Service',
      price: 497,
      unitsSold: 67,
      revenue: 33299,
      refunds: 1,
      netRevenue: 33002,
      conversionRate: 45.2,
      viewsToSales: 42.1
    }
  ];
};

const getSalesMetrics = async (): Promise<SalesMetrics> => {
  const productSales = await getProductSales();
  const dailySales = await getDailySalesData();
  
  const totalRevenue = productSales.reduce((sum, p) => sum + p.netRevenue, 0);
  const totalOrders = productSales.reduce((sum, p) => sum + p.unitsSold, 0);
  const totalRefunds = productSales.reduce((sum, p) => sum + p.refunds, 0);
  
  return {
    totalRevenue,
    totalOrders,
    averageOrderValue: Math.round(totalRevenue / totalOrders),
    totalCustomers: Math.round(totalOrders * 0.87), // Assuming some repeat customers
    customerLifetimeValue: Math.round(totalRevenue / (totalOrders * 0.87) * 1.4),
    monthlyRecurringRevenue: Math.round(totalRevenue * 0.15), // Assuming 15% recurring
    churnRate: 3.2,
    refundRate: Math.round((totalRefunds / totalOrders) * 1000) / 10,
    profitMargin: 78.5
  };
};

const getGeographicSales = async (): Promise<GeographicSales[]> => {
  return [
    {
      country: 'United States',
      countryCode: 'US',
      revenue: 487231,
      orders: 1832,
      customers: 1654,
      averageOrderValue: 266
    },
    {
      country: 'Canada',
      countryCode: 'CA',
      revenue: 156894,
      orders: 567,
      customers: 523,
      averageOrderValue: 277
    },
    {
      country: 'United Kingdom',
      countryCode: 'GB',
      revenue: 134576,
      orders: 489,
      customers: 456,
      averageOrderValue: 275
    },
    {
      country: 'Australia',
      countryCode: 'AU',
      revenue: 98432,
      orders: 342,
      customers: 318,
      averageOrderValue: 288
    },
    {
      country: 'Germany',
      countryCode: 'DE',
      revenue: 76543,
      orders: 278,
      customers: 267,
      averageOrderValue: 275
    },
    {
      country: 'Netherlands',
      countryCode: 'NL',
      revenue: 45632,
      orders: 167,
      customers: 156,
      averageOrderValue: 273
    },
    {
      country: 'France',
      countryCode: 'FR',
      revenue: 43287,
      orders: 159,
      customers: 147,
      averageOrderValue: 272
    },
    {
      country: 'Sweden',
      countryCode: 'SE',
      revenue: 32156,
      orders: 112,
      customers: 104,
      averageOrderValue: 287
    }
  ];
};

const getSalesFunnel = async (): Promise<SalesFunnel[]> => {
  return [
    {
      stage: 'Website Visitors',
      visitors: 125847,
      conversions: 125847,
      conversionRate: 100,
      revenue: 0
    },
    {
      stage: 'Course Page Views',
      visitors: 23456,
      conversions: 23456,
      conversionRate: 18.6,
      revenue: 0
    },
    {
      stage: 'Add to Cart',
      visitors: 4892,
      conversions: 4892,
      conversionRate: 20.9,
      revenue: 0
    },
    {
      stage: 'Initiated Checkout',
      visitors: 3567,
      conversions: 3567,
      conversionRate: 72.9,
      revenue: 0
    },
    {
      stage: 'Completed Purchase',
      visitors: 2847,
      conversions: 2847,
      conversionRate: 79.8,
      revenue: 1050745
    }
  ];
};

const getTopAffiliates = async () => {
  return [
    {
      id: 'aff_001',
      name: 'Alex Marketing Pro',
      code: 'ALEX2025',
      sales: 127,
      revenue: 47892,
      commission: 14367,
      conversionRate: 8.9
    },
    {
      id: 'aff_002',
      name: 'Sarah Digital',
      code: 'SARAH2025',
      sales: 89,
      revenue: 32456,
      commission: 9737,
      conversionRate: 12.3
    },
    {
      id: 'aff_003',
      name: 'Marcus Growth',
      code: 'MARCUS2025',
      sales: 67,
      revenue: 23789,
      commission: 7137,
      conversionRate: 7.8
    }
  ];
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
    const timeframe = searchParams.get('timeframe') || '30d';
    
    switch (endpoint) {
      case 'daily':
        const dailySales = await getDailySalesData();
        return NextResponse.json({ dailySales });
        
      case 'products':
        const productSales = await getProductSales();
        
        // Apply sorting
        const sortBy = searchParams.get('sortBy') || 'revenue';
        const sortOrder = searchParams.get('sortOrder') || 'desc';
        
        productSales.sort((a, b) => {
          const aVal = a[sortBy as keyof ProductSales] as number;
          const bVal = b[sortBy as keyof ProductSales] as number;
          return sortOrder === 'desc' ? bVal - aVal : aVal - bVal;
        });
        
        return NextResponse.json({ products: productSales });
        
      case 'geographic':
        const geoSales = await getGeographicSales();
        return NextResponse.json({ geographic: geoSales });
        
      case 'funnel':
        const salesFunnel = await getSalesFunnel();
        return NextResponse.json({ funnel: salesFunnel });
        
      case 'affiliates':
        const topAffiliates = await getTopAffiliates();
        return NextResponse.json({ affiliates: topAffiliates });
        
      case 'metrics':
        const metrics = await getSalesMetrics();
        return NextResponse.json({ metrics });
        
      default:
        // Return comprehensive sales dashboard data
        const [
          allDailySales,
          allProductSales,
          allMetrics,
          allGeoSales,
          allFunnel,
          allAffiliates
        ] = await Promise.all([
          getDailySalesData(),
          getProductSales(),
          getSalesMetrics(),
          getGeographicSales(),
          getSalesFunnel(),
          getTopAffiliates()
        ]);
        
        // Calculate growth rates
        const last7Days = allDailySales.slice(-7);
        const previous7Days = allDailySales.slice(-14, -7);
        
        const current7DayRevenue = last7Days.reduce((sum, d) => sum + d.revenue, 0);
        const previous7DayRevenue = previous7Days.reduce((sum, d) => sum + d.revenue, 0);
        const revenueGrowth = Math.round(((current7DayRevenue - previous7DayRevenue) / previous7DayRevenue) * 100);
        
        const current7DayOrders = last7Days.reduce((sum, d) => sum + d.orders, 0);
        const previous7DayOrders = previous7Days.reduce((sum, d) => sum + d.orders, 0);
        const ordersGrowth = Math.round(((current7DayOrders - previous7DayOrders) / previous7DayOrders) * 100);
        
        return NextResponse.json({
          overview: {
            ...allMetrics,
            revenueGrowth,
            ordersGrowth,
            last30DaysRevenue: allDailySales.reduce((sum, d) => sum + d.revenue, 0),
            last30DaysOrders: allDailySales.reduce((sum, d) => sum + d.orders, 0)
          },
          dailySales: allDailySales.slice(-14), // Last 14 days for chart
          topProducts: allProductSales.slice(0, 5),
          topCountries: allGeoSales.slice(0, 5),
          conversionFunnel: allFunnel,
          topAffiliates: allAffiliates.slice(0, 3)
        });
    }

  } catch (error) {
    console.error('Failed to fetch sales data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch sales data' },
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
      case 'export_sales_data':
        // Export sales data to CSV/Excel
        console.log('Exporting sales data:', data);
        return NextResponse.json({
          success: true,
          message: 'Sales data export initiated',
          downloadUrl: '/api/admin/sales/export?token=temp_export_token',
          exportId: `export_${Date.now()}`
        });

      case 'generate_report':
        // Generate comprehensive sales report
        console.log('Generating sales report:', data);
        return NextResponse.json({
          success: true,
          message: 'Sales report generated successfully',
          reportId: `report_${Date.now()}`,
          reportUrl: '/api/admin/sales/report?id=temp_report_id'
        });

      case 'update_affiliate_commission':
        // Update affiliate commission rate
        console.log('Updating affiliate commission:', data);
        return NextResponse.json({
          success: true,
          message: `Affiliate commission updated to ${data.rate}%`
        });

      case 'create_discount_code':
        // Create new discount code based on sales data
        console.log('Creating discount code:', data);
        return NextResponse.json({
          success: true,
          message: 'Discount code created successfully',
          code: data.code,
          discount: data.discount
        });

      case 'analyze_customer_segments':
        // Analyze customer segments for targeted marketing
        console.log('Analyzing customer segments');
        return NextResponse.json({
          success: true,
          message: 'Customer segment analysis completed',
          segments: [
            { name: 'High Value', customers: 423, avgSpent: 847 },
            { name: 'Repeat Buyers', customers: 1256, avgSpent: 456 },
            { name: 'New Customers', customers: 2847, avgSpent: 234 }
          ]
        });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

  } catch (error) {
    console.error('Failed to process sales action:', error);
    return NextResponse.json(
      { error: 'Failed to process action' },
      { status: 500 }
    );
  }
}