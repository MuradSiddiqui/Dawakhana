import { Client } from '@notionhq/client';

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// Your Notion database ID
const DATABASE_ID = process.env.NOTION_DATABASE_ID || '';

export interface BlogPost {
  id: string;
  title: {
    en: string;
    ur: string;
  };
  content: {
    en: string;
    ur: string;
  };
  featuredImage?: string;
  publishDate: string;
  status: 'Draft' | 'Published';
  seoDescription: {
    en: string;
    ur: string;
  };
  tags: {
    en: string[];
    ur: string[];
  };
  slug: {
    en: string;
    ur: string;
  };
  createdAt: string;
  updatedAt: string;
  language: 'en' | 'ur' | 'both';
}

// Fetch all published blog posts
export async function getBlogPosts(language: 'en' | 'ur' = 'en'): Promise<BlogPost[]> {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      console.warn('Notion credentials not configured');
      return [];
    }

    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'Publish Date',
          direction: 'descending'
        }
      ]
    });

    return response.results.map((page: any) => transformNotionPage(page, language));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch paginated blog posts
export async function getPaginatedBlogPosts(
  language: 'en' | 'ur' = 'en',
  page: number = 1,
  limit: number = 6
): Promise<{ posts: BlogPost[]; totalPages: number; currentPage: number; totalPosts: number }> {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      console.warn('Notion credentials not configured');
      return { posts: [], totalPages: 0, currentPage: 1, totalPosts: 0 };
    }

    const startCursor = page > 1 ? undefined : undefined; // For now, we'll get all and paginate client-side
    // Note: Notion API doesn't support offset-based pagination directly
    // We'll implement client-side pagination for simplicity

    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        property: 'Status',
        select: {
          equals: 'Published'
        }
      },
      sorts: [
        {
          property: 'Publish Date',
          direction: 'descending'
        }
      ]
    });

    const allPosts = response.results.map((page: any) => transformNotionPage(page, language));
    const totalPosts = allPosts.length;
    const totalPages = Math.ceil(totalPosts / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const posts = allPosts.slice(startIndex, endIndex);

    return {
      posts,
      totalPages,
      currentPage: page,
      totalPosts
    };
  } catch (error) {
    console.error('Error fetching paginated blog posts:', error);
    return { posts: [], totalPages: 0, currentPage: 1, totalPosts: 0 };
  }
}

// Fetch a single blog post by slug
export async function getBlogPost(slug: string, language: 'en' | 'ur' = 'en'): Promise<BlogPost | null> {
  try {
    if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
      console.warn('Notion credentials not configured');
      return null;
    }

    const response = await notion.search({
      query: '',
      filter: {
        property: 'object',
        value: 'page'
      },
      page_size: 100
    });

    const post = response.results.find((page: any) => {
      const enSlug = page.properties?.['Slug (English)']?.rich_text?.[0]?.plain_text || '';
      const urSlug = page.properties?.['Slug (Urdu)']?.rich_text?.[0]?.plain_text || '';
      const cleanEnSlug = enSlug.startsWith('/') ? enSlug.substring(1) : enSlug;
      const cleanUrSlug = urSlug.startsWith('/') ? urSlug.substring(1) : urSlug;
      return cleanEnSlug === slug || cleanUrSlug === slug;
    });

    if (!post) {
      return null;
    }

    return transformNotionPage(post, language);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Transform Notion page to our BlogPost interface
function transformNotionPage(page: any, language: 'en' | 'ur' = 'en'): BlogPost {
  const properties = page.properties;
  
  // Extract English content
  const enTitle = properties['Title (English)']?.title?.[0]?.plain_text || '';
  const enContent = properties['Content (English)']?.rich_text?.map((block: any) => block.plain_text).join('') || '';
  const enSeoDescription = properties['SEO Description (English)']?.rich_text?.map((block: any) => block.plain_text).join('') || '';
  const enTags = properties['Tags (English)']?.multi_select?.map((tag: any) => tag.name) || [];
  const enSlug = properties['Slug (English)']?.rich_text?.[0]?.plain_text || '';
  
  // Extract Urdu content
  const urTitle = properties['Title (Urdu)']?.rich_text?.[0]?.plain_text || '';
  const urContent = properties['Content (Urdu)']?.rich_text?.map((block: any) => block.plain_text).join('') || '';
  const urSeoDescription = properties['SEO Description (Urdu)']?.rich_text?.map((block: any) => block.plain_text).join('') || '';
  const urTags = properties['Tags (Urdu)']?.multi_select?.map((tag: any) => tag.name) || [];
  const urSlug = properties['Slug (Urdu)']?.rich_text?.[0]?.plain_text || '';
  
  // Clean slugs
  const cleanEnSlug = enSlug.startsWith('/') ? enSlug.substring(1) : enSlug;
  const cleanUrSlug = urSlug.startsWith('/') ? urSlug.substring(1) : urSlug;
  
  // Determine language availability
  const hasEnglish = enTitle && enContent;
  const hasUrdu = urTitle && urContent;
  let postLanguage: 'en' | 'ur' | 'both' = 'en';
  
  if (hasEnglish && hasUrdu) {
    postLanguage = 'both';
  } else if (hasUrdu) {
    postLanguage = 'ur';
  }

  return {
    id: page.id,
    title: {
      en: enTitle,
      ur: urTitle
    },
    content: {
      en: enContent,
      ur: urContent
    },
    featuredImage: properties['Featured Image']?.files?.[0]?.file?.url || '',
    publishDate: properties['Publish Date']?.date?.start || '',
    status: properties.Status?.select?.name || 'Draft',
    seoDescription: {
      en: enSeoDescription,
      ur: urSeoDescription
    },
    tags: {
      en: enTags,
      ur: urTags
    },
    slug: {
      en: cleanEnSlug,
      ur: cleanUrSlug
    },
    createdAt: page.created_time,
    updatedAt: page.last_edited_time,
    language: postLanguage
  };
}

// Generate slug from title
export function generateSlug(title: string, language: 'en' | 'ur' = 'en'): string {
  if (language === 'ur') {
    // For Urdu, use transliteration or keep as is
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\u0600-\u06FF]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Get available languages for a post
export function getAvailableLanguages(post: BlogPost): ('en' | 'ur')[] {
  const languages: ('en' | 'ur')[] = [];
  
  if (post.title.en && post.content.en) {
    languages.push('en');
  }
  
  if (post.title.ur && post.content.ur) {
    languages.push('ur');
  }
  
  return languages;
}