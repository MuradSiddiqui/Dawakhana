'use client';
import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
	const { t, isRTL } = useLanguage();
	
	return (
		<footer className="mt-24 border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 via-white to-rose-50 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
			
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-10 right-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl"></div>
				<div className="absolute bottom-10 left-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl"></div>
			</div>
			
			<div className="container-site py-16 relative z-10">
			
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
					
					{/* Company Info - Column 1 */}
					<div className={`text-center md:text-left ${isRTL ? 'md:order-3' : ''}`}>
						<div className="flex items-center justify-center md:justify-start gap-4 mb-6">
							<img src="/logo.png" alt="Mufeed e aam Dawakhana" className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl" />
							<div>
								<h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mufeed e aam</h3>
								<p className="text-lg font-semibold text-rose-700">Dawakhana</p>
							</div>
						</div>
						<p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
							{t('footer.description')}
						</p>
					</div>
					
					{/* Quick Links - Column 2 */}
					<div className={`text-center md:text-left ${isRTL ? 'md:order-2' : ''}`}>
						<h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{t('footer.quickLinks')}</h4>
						<nav className="flex flex-col gap-3 sm:gap-4 items-center md:items-start">
							<a href="#about" className={`text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 transform text-sm sm:text-base ${isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}>
								{t('nav.about')}
							</a>
							<a href="#branches" className={`text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 transform text-sm sm:text-base ${isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}>
								{t('nav.branches')}
							</a>
							<a href="#timings-maps" className={`text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 transform text-sm sm:text-base ${isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}>
								{t('nav.timings')}
							</a>
							<a href="/blog" className={`text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 transform text-sm sm:text-base ${isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}>
								{t('nav.blog')}
							</a>
							<a href="#contact" className={`text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 transform text-sm sm:text-base ${isRTL ? 'hover:-translate-x-1' : 'hover:translate-x-1'}`}>
								{t('nav.contact')}
							</a>
						</nav>
					</div>
					
					{/* Contact - Column 3 */}
					<div className={`text-center md:text-left ${isRTL ? 'md:order-1' : ''}`}>
						<h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">{t('footer.getInTouch')}</h4>
						<div className="space-y-3 sm:space-y-4">
							<div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
								<MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600 flex-shrink-0" />
								<span className="text-xs sm:text-sm">{isRTL ? 'سندھ، پاکستان' : 'Sindh, Pakistan'}</span>
							</div>
							<div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
								<Phone className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600 flex-shrink-0" />
								<span className="text-xs sm:text-sm">{t('footer.multipleLocations')}</span>
							</div>
							<div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
								<Mail className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600 flex-shrink-0" />
								<span className="text-xs sm:text-sm">{t('footer.contactBranches')}</span>
							</div>
						</div>
					</div>
				</div>
				
				
				<div className="border-t border-gray-200 pt-6 sm:pt-8">
					<div className="text-center">
						<p className="text-xs sm:text-sm text-gray-600 font-medium">
							© {new Date().getFullYear()} Mufeed e aam Dawakhana. {t('All rights reserved')}
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
} 