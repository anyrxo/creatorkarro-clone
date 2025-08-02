import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin Courses API
 * Manages digital product courses, enrollments, and completion tracking
 */

interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  status: 'active' | 'inactive' | 'coming_soon';
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  totalLessons: number;
  enrollments: number;
  revenue: number;
  rating: number;
  reviews: number;
  createdAt: string;
  updatedAt: string;
  instructor: string;
  featuredImage: string;
  tags: string[];
  learningOutcomes: string[];
  requirements: string[];
  completionRate: number;
}

interface CourseEnrollment {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  userEmail: string;
  enrolledAt: string;
  progress: number;
  completedLessons: number;
  lastAccessedAt: string;
  status: 'active' | 'completed' | 'paused';
  certificateIssued: boolean;
}

// Mock course data - replace with database queries
const getCourses = async (): Promise<Course[]> => {
  return [
    {
      id: 'course_001',
      title: 'Instagram Ignited: 0 to 500K Followers',
      slug: 'instagram-ignited',
      description: 'Complete Instagram growth system that took me from 0 to 500K+ followers using proven strategies',
      price: 297,
      currency: 'USD',
      status: 'active',
      category: 'Social Media',
      level: 'intermediate',
      duration: '8 weeks',
      totalLessons: 24,
      enrollments: 1247,
      revenue: 370359,
      rating: 4.8,
      reviews: 189,
      createdAt: '2024-08-15T00:00:00Z',
      updatedAt: '2025-01-15T10:30:00Z',
      instructor: 'Anyro',
      featuredImage: '/courses/instagram-ignited/hero.webp',
      tags: ['instagram', 'growth', 'social-media', 'followers'],
      learningOutcomes: [
        'Grow from 0 to 500K+ followers using proven strategies',
        'Create viral content that gets massive engagement',
        'Build a profitable Instagram business',
        'Master Instagram algorithm and growth hacks'
      ],
      requirements: [
        'Instagram account (can be new)',
        'Basic understanding of social media',
        'Commitment to implement strategies consistently'
      ],
      completionRate: 78
    },
    {
      id: 'course_002',
      title: 'Digital Products Masterclass',
      slug: 'digital-products',
      description: 'Learn how to create, market, and sell digital products that generate $10K+ per month',
      price: 197,
      currency: 'USD',
      status: 'active',
      category: 'Business',
      level: 'beginner',
      duration: '6 weeks',
      totalLessons: 18,
      enrollments: 892,
      revenue: 175824,
      rating: 4.9,
      reviews: 156,
      createdAt: '2024-09-20T00:00:00Z',
      updatedAt: '2025-01-12T14:20:00Z',
      instructor: 'Anyro',
      featuredImage: '/courses/digital-products/hero.webp',
      tags: ['digital-products', 'business', 'passive-income', 'online-selling'],
      learningOutcomes: [
        'Create high-converting digital products',
        'Set up automated sales funnels',
        'Generate $10K+ monthly passive income',
        'Build a scalable digital product business'
      ],
      requirements: [
        'Basic computer skills',
        'Willingness to learn marketing',
        'Time commitment of 5-10 hours per week'
      ],
      completionRate: 82
    },
    {
      id: 'course_003',
      title: 'AI Automation Suite',
      slug: 'ai-automation',
      description: 'Automate your entire workflow with AI tools and save 40+ hours per week',
      price: 497,
      currency: 'USD',
      status: 'active',
      category: 'Technology',
      level: 'advanced',
      duration: '10 weeks',
      totalLessons: 32,
      enrollments: 634,
      revenue: 315098,
      rating: 4.7,
      reviews: 89,
      createdAt: '2024-10-10T00:00:00Z',
      updatedAt: '2025-01-08T12:15:00Z',
      instructor: 'Anyro',
      featuredImage: '/courses/ai-automation/hero.webp',
      tags: ['ai', 'automation', 'productivity', 'workflow'],
      learningOutcomes: [
        'Automate content creation with AI',
        'Build custom AI workflows',
        'Save 40+ hours per week',
        'Scale your business with automation'
      ],
      requirements: [
        'Basic technical knowledge',
        'Understanding of business processes',
        'Access to AI tools (covered in course)'
      ],
      completionRate: 71
    },
    {
      id: 'course_004',
      title: 'ComfyUI Workflows',
      slug: 'comfyui',
      description: 'Master ComfyUI for professional AI image generation and custom workflows',
      price: 97,
      currency: 'USD',
      status: 'active',
      category: 'AI Tools',
      level: 'intermediate',
      duration: '4 weeks',
      totalLessons: 12,
      enrollments: 456,
      revenue: 44232,
      rating: 4.6,
      reviews: 67,
      createdAt: '2024-11-01T00:00:00Z',
      updatedAt: '2025-01-05T09:30:00Z',
      instructor: 'Anyro',
      featuredImage: '/courses/comfyui/hero.webp',
      tags: ['comfyui', 'ai-images', 'workflows', 'stable-diffusion'],
      learningOutcomes: [
        'Master ComfyUI interface and workflows',
        'Create professional AI images',
        'Build custom automation workflows',
        'Generate consistent high-quality content'
      ],
      requirements: [
        'Computer with GPU (recommended)',
        'Basic understanding of AI image generation',
        'Willingness to learn technical concepts'
      ],
      completionRate: 85
    },
    {
      id: 'course_005',
      title: 'Revenue Optimization Masterclass',
      slug: 'revenue-optimization',
      description: 'Advanced strategies to optimize conversion rates and maximize revenue from digital products',
      price: 397,
      currency: 'USD',
      status: 'coming_soon',
      category: 'Marketing',
      level: 'advanced',
      duration: '8 weeks',
      totalLessons: 28,
      enrollments: 0,
      revenue: 0,
      rating: 0,
      reviews: 0,
      createdAt: '2025-01-01T00:00:00Z',
      updatedAt: '2025-01-01T00:00:00Z',
      instructor: 'Anyro',
      featuredImage: '/courses/revenue-optimization/hero.webp',
      tags: ['revenue', 'optimization', 'conversion', 'marketing'],
      learningOutcomes: [
        'Optimize conversion rates by 300%+',
        'Implement advanced pricing psychology',
        'Build high-converting sales funnels',
        'Maximize lifetime customer value'
      ],
      requirements: [
        'Existing digital product or business',
        'Basic understanding of marketing',
        'Analytics tracking setup'
      ],
      completionRate: 0
    }
  ];
};

const getCourseEnrollments = async (): Promise<CourseEnrollment[]> => {
  return [
    {
      id: 'enroll_001',
      courseId: 'course_001',
      userId: '1',
      userName: 'Marcus Rivera',
      userEmail: 'marcus.rivera@email.com',
      enrolledAt: '2025-01-10T08:30:00Z',
      progress: 75,
      completedLessons: 18,
      lastAccessedAt: '2025-01-15T10:30:00Z',
      status: 'active',
      certificateIssued: false
    },
    {
      id: 'enroll_002',
      courseId: 'course_002',
      userId: '2',
      userName: 'Sarah Johnson',
      userEmail: 'sarah.johnson@email.com',
      enrolledAt: '2025-01-08T14:20:00Z',
      progress: 100,
      completedLessons: 18,
      lastAccessedAt: '2025-01-14T15:45:00Z',
      status: 'completed',
      certificateIssued: true
    },
    // Add more enrollments as needed
  ];
};

const getCourseStats = async () => {
  const courses = await getCourses();
  const enrollments = await getCourseEnrollments();
  
  const activeCourses = courses.filter(c => c.status === 'active');
  const totalRevenue = courses.reduce((sum, c) => sum + c.revenue, 0);
  const totalEnrollments = courses.reduce((sum, c) => sum + c.enrollments, 0);
  const avgRating = courses.filter(c => c.rating > 0).reduce((sum, c) => sum + c.rating, 0) / courses.filter(c => c.rating > 0).length;
  
  return {
    totalCourses: courses.length,
    activeCourses: activeCourses.length,
    totalEnrollments,
    totalRevenue,
    avgRating: Math.round(avgRating * 10) / 10,
    completionRate: Math.round(courses.reduce((sum, c) => sum + c.completionRate, 0) / courses.length),
    topPerforming: courses.sort((a, b) => b.revenue - a.revenue).slice(0, 3),
    recentEnrollments: enrollments.slice(0, 5)
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
    const courseId = searchParams.get('courseId');
    
    if (courseId) {
      // Get specific course details
      const courses = await getCourses();
      const course = courses.find(c => c.id === courseId);
      
      if (!course) {
        return NextResponse.json({ error: 'Course not found' }, { status: 404 });
      }
      
      const enrollments = await getCourseEnrollments();
      const courseEnrollments = enrollments.filter(e => e.courseId === courseId);
      
      return NextResponse.json({
        course,
        enrollments: courseEnrollments,
        stats: {
          totalEnrollments: courseEnrollments.length,
          activeStudents: courseEnrollments.filter(e => e.status === 'active').length,
          completedStudents: courseEnrollments.filter(e => e.status === 'completed').length,
          avgProgress: Math.round(courseEnrollments.reduce((sum, e) => sum + e.progress, 0) / courseEnrollments.length)
        }
      });
    }

    // Get all courses with stats
    const courses = await getCourses();
    const stats = await getCourseStats();
    
    // Apply filters
    const status = searchParams.get('status');
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let filteredCourses = courses;

    if (status && status !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.status === status);
    }

    if (category && category !== 'all') {
      filteredCourses = filteredCourses.filter(course => course.category.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      filteredCourses = filteredCourses.filter(course => 
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.description.toLowerCase().includes(search.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }

    return NextResponse.json({
      courses: filteredCourses,
      stats,
      pagination: {
        total: filteredCourses.length,
        page: 1,
        limit: 50
      }
    });

  } catch (error) {
    console.error('Failed to fetch courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
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
    const { action, courseId, data } = body;

    switch (action) {
      case 'create_course':
        // In a real implementation, this would create course in database
        console.log('Creating course:', data);
        return NextResponse.json({
          success: true,
          message: 'Course created successfully',
          courseId: `course_${Date.now()}`
        });

      case 'update_status':
        // In a real implementation, this would update course status
        console.log(`Updating course ${courseId} status to ${data.status}`);
        return NextResponse.json({
          success: true,
          message: `Course status updated to ${data.status}`
        });

      case 'bulk_enroll':
        // Handle bulk student enrollment
        console.log(`Bulk enrolling students in course ${courseId}:`, data.userIds);
        return NextResponse.json({
          success: true,
          message: `${data.userIds.length} students enrolled successfully`
        });

      case 'generate_certificates':
        // Generate completion certificates
        console.log(`Generating certificates for course ${courseId}`);
        return NextResponse.json({
          success: true,
          message: 'Certificates generated and sent to completed students',
          certificatesGenerated: Math.floor(Math.random() * 20) + 5
        });

      case 'send_course_update':
        // Send update notification to all enrolled students
        console.log(`Sending course update for ${courseId}:`, data.message);
        return NextResponse.json({
          success: true,
          message: 'Course update sent to all enrolled students'
        });

      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

  } catch (error) {
    console.error('Failed to process course action:', error);
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
    const { courseId, updates } = body;

    // In a real implementation, this would update the course in database
    console.log(`Updating course ${courseId}:`, updates);

    const allowedUpdates = ['title', 'description', 'price', 'status', 'tags', 'learningOutcomes'];
    const validUpdates = Object.keys(updates).filter(key => allowedUpdates.includes(key));

    if (validUpdates.length === 0) {
      return NextResponse.json({ error: 'No valid updates provided' }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Course updated successfully',
      updatedFields: validUpdates
    });

  } catch (error) {
    console.error('Failed to update course:', error);
    return NextResponse.json(
      { error: 'Failed to update course' },
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
    const courseId = searchParams.get('courseId');

    if (!courseId) {
      return NextResponse.json({ error: 'Course ID required' }, { status: 400 });
    }

    // In a real implementation, this would soft delete or archive the course
    console.log(`Archiving course ${courseId}`);

    return NextResponse.json({
      success: true,
      message: 'Course archived successfully'
    });

  } catch (error) {
    console.error('Failed to archive course:', error);
    return NextResponse.json(
      { error: 'Failed to archive course' },
      { status: 500 }
    );
  }
}