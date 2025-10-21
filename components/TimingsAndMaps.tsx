'use client';
import React from 'react';
import { branches } from '../data/branches';
import BranchSection from './BranchSection';
import { useLanguage } from '../lib/LanguageContext';

export default function TimingsAndMaps() {
	const { t, isRTL } = useLanguage();
	
	return (
		<div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100" dir={isRTL ? 'rtl' : 'ltr'}>
			<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">{t('timings.title')}</h2>
			{branches.map(b => (
				<BranchSection key={b.id} branch={b} />
			))}
		</div>
	);
} 