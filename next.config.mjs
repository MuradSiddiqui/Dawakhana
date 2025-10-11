/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ['lucide-react'],
	},
	output: 'export',
	images: {
		unoptimized: true,
	},
	// Security headers
	async headers() {
		return [
			{
				// Apply these headers to all routes
				source: '/:path*',
				headers: [
					// Prevent clickjacking attacks
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					// Prevent MIME type sniffing
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					// Enable browser XSS protection
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					// Referrer policy
					{
						key: 'Referrer-Policy',
						value: 'strict-origin-when-cross-origin',
					},
					// Permissions policy
					{
						key: 'Permissions-Policy',
						value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
					},
					// Strict Transport Security (HTTPS only)
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					// Content Security Policy
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