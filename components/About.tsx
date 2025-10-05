'use client';
import React from 'react';
import { useLanguage } from '../lib/LanguageContext';

export default function About() {
	const { t, isRTL } = useLanguage();
	
	return (
		<div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100" dir={isRTL ? 'rtl' : 'ltr'}>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
				<div className="md:col-span-2 space-y-8">
					<section aria-labelledby="about-overview">
						<h2 id="about-overview" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
						<p className="text-lg text-gray-700 mb-4 leading-relaxed">{t('about.description')}</p>
						<p className="text-lg text-gray-700 leading-relaxed">{t('about.founder.description')}</p>
					</section>

					<section aria-labelledby="about-history" className="pt-6 border-t-2 border-gray-200">
						<h3 id="about-history" className="text-3xl font-bold text-gray-900 mb-4">{t('about.founder.title')}</h3>
						<p className="text-lg text-gray-700 leading-relaxed">{t('about.founder.history')}</p>
					</section>
				</div>
				<div>
					<figure className="aspect-[3/4] w-full rounded-2xl bg-gray-100 overflow-hidden shadow-xl">
						<img src="/images/founder.jpg" alt="Hakeem Makhdoom Muhammad Murad Siddiqui" className="h-full w-full object-cover" />
					</figure>
					<p className="mt-3 text-sm text-gray-500 text-center"> <code className="bg-gray-100 px-1 rounded"></code></p>
				</div>
			</div>
		</div>
	);
} 