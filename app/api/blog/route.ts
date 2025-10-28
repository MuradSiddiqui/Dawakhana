import { NextResponse } from 'next/server';
import { getBlogPosts, getPaginatedBlogPosts } from '../../../lib/notion';

// Cache for blog posts
const cache = new Map();
const CACHE_DURATION = 1 * 60 * 1000; // 1 minute (reduced for faster updates)

// Function to clear cache
function clearCache() {
  cache.clear();
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const language = (searchParams.get('lang') as 'en' | 'ur') || 'en';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '6');
    const paginated = searchParams.get('paginated') === 'true';
    const clearCache = searchParams.get('clearCache') === 'true';
    
    // Clear cache if requested
    if (clearCache) {
      cache.clear();
    }
    
    // Create cache key
    const cacheKey = `blog-${language}-${page}-${limit}-${paginated}`;
    const cached = cache.get(cacheKey);
    
    // Return cached data if available and not expired
    if (cached && Date.now() - cached.timestamp < CACHE_DURATION && !clearCache) {
      return NextResponse.json(cached.data);
    }
    
    let result;
    if (paginated) {
      result = await getPaginatedBlogPosts(language, page, limit);
    } else {
      result = await getBlogPosts(language);
    }
    
    // Cache the result
    cache.set(cacheKey, {
      data: result,
      timestamp: Date.now()
    });
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}