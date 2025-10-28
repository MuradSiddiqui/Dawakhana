import { NextResponse } from 'next/server';
import { getBlogPost } from '../../../../lib/notion';

// Cache for individual blog posts
const postCache = new Map();
const POST_CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const { searchParams } = new URL(request.url);
    const language = (searchParams.get('lang') as 'en' | 'ur') || 'en';
    
    // Create cache key
    const cacheKey = `post-${slug}-${language}`;
    const cached = postCache.get(cacheKey);
    
    // Return cached data if available and not expired
    if (cached && Date.now() - cached.timestamp < POST_CACHE_DURATION) {
      return NextResponse.json(cached.data);
    }
    
    const post = await getBlogPost(slug, language);
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }
    
    // Cache the result
    postCache.set(cacheKey, {
      data: post,
      timestamp: Date.now()
    });
    
    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}