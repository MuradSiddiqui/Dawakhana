import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://example.com';

export const metadata: Metadata = {
	title: {
		default: 'Mufeed e aam Dawakhana',
		template: '%s | Mufeed e aam Dawakhana',
	},
	description: 'Mufeed e aam Dawakhana – compassionate, community-first care across Sindh.',
	metadataBase: new URL(siteUrl),
	icons: {
		icon: [
			{ url: '/favicon.ico', sizes: 'any' },
			{ url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
		],
		shortcut: '/favicon.ico',
		apple: [
			{ url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
		],
	},
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: 'Mufeed e aam Dawakhana',
		description: 'Compassionate, community-first care across Sindh.',
		url: siteUrl,
		siteName: 'Mufeed e aam Dawakhana',
		locale: 'en_PK',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mufeed e aam Dawakhana',
		description: 'Compassionate, community-first care across Sindh.',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#e11d48" />
				<meta name="msapplication-TileColor" content="#e11d48" />
			</head>
			<body>{children}</body>
		</html>
	);
} 