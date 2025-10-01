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
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
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
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
			</head>
			<body>{children}</body>
		</html>
	);
} 