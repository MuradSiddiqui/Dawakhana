import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/admin/'],
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
				crawlDelay: 0,
			},
			{
				userAgent: 'Bingbot',
				allow: '/',
				crawlDelay: 0,
			},
		],
		sitemap: 'https://dawakhanamufeed.pk/sitemap.xml',
		host: 'https://dawakhanamufeed.pk',
	};
} 