import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '../lib/LanguageContext';
import { Inter, Noto_Nastaliq_Urdu } from 'next/font/google';
import StructuredData from '../components/StructuredData';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
	subsets: ['arabic'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-urdu',
	preload: true,
	adjustFontFallback: true,
});

const siteUrl = 'https://dawakhanaa.pk';

export const metadata: Metadata = {
	title: {
		default: 'Mufeed e aam Dawakhana - Best Dawakhana in Pakistan | Karachi, Hyderabad, Mirpurkhas, Dadu',
		template: '%s | Mufeed e aam Dawakhana',
	},
	description: 'Mufeed e aam Dawakhana - Leading healthcare clinic in Sindh, Pakistan. Providing compassionate medical care, treatment services, and consultation in Karachi, Hyderabad, Mirpurkhas, and Dadu. مفید عام دواخانہ - بہترین طبی خدمات',
	keywords: [
		'Dawakhana',
		'Mufeed e aam Dawakhana',
		'دواخانہ',
		'مفید عام دواخانہ',
		'Best Dawakhana in Pakistan',
		'Dawakhana in Sindh',
		'Dawakhana in Karachi',
		'Dawakhana in Hyderabad',
		'Dawakhana in Mirpurkhas',
		'Dawakhana in Dadu',
		'Herbal Medicine Pakistan',
		'Traditional Medicine Sindh',
		'جڑی بوٹیوں کی دوائی',
		'روایتی ادویات',
		'Clinic in Karachi',
		'Clinic in Hyderabad',
		'Clinic in Mirpurkhas',
		'Clinic in Dadu',
		'Healthcare Pakistan',
		'Medical clinic Sindh',
		'Doctor consultation Pakistan',
		'Treatment center Pakistan',
		'Best dawakhana in Pakistan',
		'Sindh medical clinic',
		'Pakistan healthcare',
		'Urdu dawakhana',
		'Traditional medicine Pakistan',
		'Herbal treatment Pakistan',
		'Natural medicine Sindh',
		'دوا خانہ کراچی',
		'دوا خانہ حیدرآباد',
		'دوا خانہ میرپورخاص',
		'دوا خانہ دادو',
	],
	authors: [{ name: 'Mufeed e aam Dawakhana' }],
	creator: 'Mufeed e aam Dawakhana',
	publisher: 'Mufeed e aam Dawakhana',
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
		languages: {
			'en-PK': '/',
			'ur-PK': '/',
		},
	},
	openGraph: {
		title: 'Mufeed e aam Dawakhana - Best Medical Clinic in Pakistan',
		description: 'Leading healthcare clinic in Sindh, Pakistan. Providing compassionate medical care in Karachi, Hyderabad, Mirpurkhas, and Dadu. مفید عام دواخانہ',
		url: siteUrl,
		siteName: 'Mufeed e aam Dawakhana',
		locale: 'en_PK',
		type: 'website',
		images: [
			{
				url: '/logo.png',
				width: 1200,
				height: 630,
				alt: 'Mufeed e aam Dawakhana Logo',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Mufeed e aam Dawakhana - Best Medical Clinic in Pakistan',
		description: 'Leading healthcare clinic in Sindh, Pakistan. Medical care in Karachi, Hyderabad, Mirpurkhas, and Dadu.',
		images: ['/logo.png'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code', // Add your Google Search Console verification code
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} ${notoNastaliqUrdu.variable}`}>
			<head>
				<StructuredData />
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/android-chrome-192x192.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="theme-color" content="#e11d48" />
				<meta name="msapplication-TileColor" content="#e11d48" />
				<meta name="geo.region" content="PK-SD" />
				<meta name="geo.placename" content="Sindh, Pakistan" />
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<LanguageProvider>
					{children}
				</LanguageProvider>
				<Analytics />
			</body>
		</html>
	);
} 