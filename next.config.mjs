/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ['lucide-react'],
	},
	images: {
		unoptimized: true,
	},
	async headers() {
		return [
			{
				source: '/:path*',
				headers: [
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'Content-Security-Policy',
						value: [
							"default-src 'self'",
							"script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com",
							"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
							"img-src 'self' data: https: blob:",
							"font-src 'self' data: https://fonts.gstatic.com",
							"connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
							"frame-src 'self' https://www.google.com https://www.facebook.com",
							"object-src 'none'",
							"base-uri 'self'",
							"form-action 'self'",
							"frame-ancestors 'none'",
							"upgrade-insecure-requests",
						].join('; '),
					},
				],
			},
		];
	},
};

export default nextConfig; 