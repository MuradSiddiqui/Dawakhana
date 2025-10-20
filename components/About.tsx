'use client';
import React from 'react';
import Image from 'next/image';
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
					<div className="space-y-6">
						<figure className="mx-auto max-w-[260px] rounded-2xl shadow-xl ring-1 ring-gray-200/60 bg-white">
							<div className="rounded-2xl overflow-hidden">
								<Image 
									src="/images/founderco.jpeg" 
									alt="Hakeem Muhammad Mohsin Siddiqui"
									width={520}
									height={693}
									className="h-auto w-full object-cover"
									priority
								/>
							</div>
							<figcaption className="px-2 py-2 text-center">
								<p className="text-sm font-semibold text-gray-900 leading-snug break-words">Hakeem Muhammad Mohsin Siddiqui</p>
								<p className="text-xs text-gray-500">Clinic Director</p>
							</figcaption>
						</figure>
						<figure className="mx-auto max-w-[260px] rounded-2xl shadow-xl ring-1 ring-gray-200/60 bg-white">
							<div className="rounded-2xl overflow-hidden">
								<Image 
									src="/images/founder.jpg" 
									alt="Hakeem Makhdoom Muhammad Murad Siddiqui"
									width={520}
									height={693}
									className="h-auto w-full object-cover"
								/>
							</div>
							<figcaption className="px-2 py-2 text-center">
								<p className="text-sm font-semibold text-gray-900 leading-snug break-words">Hakeem Makhdoom Muhammad Murad Siddiqui</p>
								<p className="text-xs text-gray-500">Founder</p>
							</figcaption>
						</figure>
					</div>
					<p className="mt-3 text-sm text-gray-500 text-center"> <code className="bg-gray-100 px-1 rounded"></code></p>
				</div>
			</div>
		</div>
	);
} 