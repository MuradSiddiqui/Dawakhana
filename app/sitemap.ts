import type { MetadataRoute } from 'next';
import { getBlogPosts } from '../lib/notion';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const base = 'https://dawakhanaa.pk';
	const lastModified = new Date();

	// Get blog posts
	const blogPosts = await getBlogPosts();
	const blogUrls = blogPosts.map((post) => ({
		url: base + `/blog/${post.slug}`,
		lastModified: new Date(post.updatedAt),
		changeFrequency: 'weekly' as const,
		priority: 0.8,
	}));

	return [
		{ 
			url: base + '/', 
			lastModified,
			changeFrequency: 'weekly', 
			priority: 1.0 
		},
		{ 
			url: base + '/#about', 
			lastModified,
			changeFrequency: 'monthly', 
			priority: 0.9 
		},
		{ 
			url: base + '/#branches', 
			lastModified,
			changeFrequency: 'monthly', 
			priority: 0.9 
		},
		{ 
			url: base + '/#karachi', 
			lastModified,
			changeFrequency: 'monthly', 
			priority: 0.8 
		},
		{ 
			url: base + '/#hyderabad', 
			lastModified,
			changeFrequency: 'monthly', 
			priority: 0.8 
		},
		{ 
			url: base + '/#mirpurkhas', 
			lastModified,
			changeFrequency: 'monthly', 
			priority: 0.8 
		},
		{ 
			url: base + '/#dadu', 
			lastModified,
			changeFrequency: 'monthly', 
			priority: 0.8 
		},
		{ 
			url: base + '/#timings-maps', 
			lastModified,
			changeFrequency: 'monthly', 
			priority: 0.7 
		},
		{ 
			url: base + '/#contact', 
			lastModified,
			changeFrequency: 'monthly', 
			priority: 0.7 
		},
		{ 
			url: base + '/blog', 
			lastModified,
			changeFrequency: 'weekly', 
			priority: 0.9 
		},
		...blogUrls,
	];
} 