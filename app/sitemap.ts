import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	const base = 'https://dawakhanaa.pk';
	const lastModified = new Date();

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
	];
} 