'use client';
import React from 'react';
import { branches } from '../data/branches';
import BranchSection from './BranchSection';
import { useLanguage } from '../lib/LanguageContext';

export default function TimingsAndMaps() {
	const { t, isRTL } = useLanguage();
	
	return (
		<div 
			className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100 timings-maps-section" 
			dir={isRTL ? 'rtl' : 'ltr'}
			onClick={(e) => {
				// Prevent unwanted navigation when clicking on non-interactive elements
				const target = e.target as HTMLElement;
				if (target.tagName !== 'A' && target.tagName !== 'BUTTON' && !target.closest('a') && !target.closest('button')) {
					e.stopPropagation();
				}
			}}
		>
			<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">{t('timings.title')}</h2>
			{branches.map(b => (
				<BranchSection key={b.id} branch={b} />
			))}
		</div>
	);
} 