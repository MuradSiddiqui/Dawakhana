import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
	const base = 'https://example.com';
	return [
		{ url: base + '/', changeFrequency: 'weekly', priority: 1 },
		{ url: base + '/#about', changeFrequency: 'monthly', priority: 0.8 },
		{ url: base + '/#branches', changeFrequency: 'monthly', priority: 0.8 },
		{ url: base + '/#timings-maps', changeFrequency: 'monthly', priority: 0.8 },
		{ url: base + '/#contact', changeFrequency: 'monthly', priority: 0.8 },
	];
} 