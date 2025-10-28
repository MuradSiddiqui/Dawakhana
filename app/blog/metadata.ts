import type { Metadata } from 'next';

export const blogMetadata: Metadata = {
  title: 'Herbal Medicine Blog | Mufeed e aam Dawakhana - جڑی بوٹیوں کا بلاگ',
  description: 'Discover traditional herbal medicine, natural healing remedies, and expert insights on herbal treatments. جڑی بوٹیوں کی دوائی، روایتی ادویات اور قدرتی شفا کے بارے میں مکمل معلومات۔',
  keywords: [
    'herbal medicine blog',
    'جڑی بوٹیوں کا بلاگ',
    'traditional medicine',
    'روایتی ادویات',
    'natural healing',
    'dawakhana blog',
    'herbal remedies Pakistan',
    'جڑی بوٹیوں کی دوائی',
    'herbal treatment',
    'natural medicine',
    'traditional healing',
    'herbal knowledge',
    'medicinal plants',
    'alternative medicine',
    'holistic health',
    'dawakhana articles',
    'herbal medicine tips',
    'natural remedies',
    'traditional healthcare',
    'herbal education'
  ],
  openGraph: {
    title: 'Herbal Medicine Blog | Mufeed e aam Dawakhana',
    description: 'Expert insights on traditional herbal medicine and natural healing remedies.',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mufeed e aam Dawakhana Herbal Medicine Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herbal Medicine Blog | Mufeed e aam Dawakhana',
    description: 'Expert insights on traditional herbal medicine and natural healing remedies.',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: '/blog',
    languages: {
      'en-PK': '/blog',
      'ur-PK': '/blog',
    },
  },
};
