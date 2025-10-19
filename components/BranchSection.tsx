'use client';
import React from 'react';
import { Phone, MapPin, Facebook, Mail } from 'lucide-react';
import type { Branch } from '../data/branches';
import { useLanguage } from '../lib/LanguageContext';

type Props = { branch: Branch };

const dayKeyMap: Record<string, string> = {
	'Mon': 'monday',
	'Tue': 'tuesday',
	'Wed': 'wednesday',
	'Thu': 'thursday',
	'Fri': 'friday',
	'Sat': 'saturday',
	'Sun': 'sunday'
};

export default function BranchSection({ branch }: Props) {
	const { t } = useLanguage();
	return (
		<section id={branch.id} className="py-8 sm:py-12 border-t-2 border-gray-200 first:border-t-0">
			<div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-gray-100 hover-lift group relative overflow-hidden">
				
				<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-rose-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
				<h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{branch.city}</h3>
				<p className="text-base sm:text-lg text-gray-700 mb-4">{branch.address}</p>
				<div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
					<a className="inline-flex items-center gap-1 sm:gap-2 rounded-lg border-2 border-rose-200 px-2 sm:px-4 py-2 text-rose-800 hover:bg-rose-50 transition-colors font-medium text-sm sm:text-base" href={`tel:${branch.phone.replace(/\s/g,'')}`} aria-label={`Call ${branch.city}`}>
						<Phone className="h-3 w-3 sm:h-4 sm:w-4 phone-icon" /> <span className="hidden sm:inline">Call </span>{branch.phone}
					</a>
					<a 
						className="inline-flex items-center gap-1 sm:gap-2 rounded-lg border-2 border-gray-300 px-2 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors font-medium text-sm sm:text-base touch-manipulation cursor-pointer" 
						href={branch.gmapUrl} 
						target="_blank" 
						rel="noopener noreferrer" 
						aria-label={`Directions to ${branch.city}`}
						onClick={(e) => {
							// Ensure the link works on mobile by preventing any interference
							e.stopPropagation();
						}}
					>
						<MapPin className="h-3 w-3 sm:h-4 sm:w-4 location-icon pointer-events-none" /> <span className="hidden sm:inline pointer-events-none">Directions</span>
					</a>
					{branch.email && (
						<a className="inline-flex items-center gap-1 sm:gap-2 rounded-lg border-2 border-gray-300 px-2 sm:px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors font-medium text-sm sm:text-base" href={`mailto:${branch.email}`}>
							<Mail className="h-3 w-3 sm:h-4 sm:w-4 mail-icon" /> <span className="hidden sm:inline">{branch.email}</span>
						</a>
					)}
					{branch.facebookUrl && (
						<a 
							className="inline-flex items-center gap-1 sm:gap-2 rounded-lg border-2 border-blue-200 px-2 sm:px-4 py-2 text-blue-700 hover:bg-blue-50 active:bg-blue-100 transition-colors font-medium text-sm sm:text-base touch-manipulation cursor-pointer" 
							href={branch.facebookUrl} 
							target="_blank" 
							rel="noopener noreferrer"
							onClick={(e) => {
								// Ensure the link works on mobile by preventing any interference
								e.stopPropagation();
							}}
						>
							<Facebook className="h-3 w-3 sm:h-4 sm:w-4 facebook-icon pointer-events-none" /> <span className="hidden sm:inline pointer-events-none">Facebook</span>
						</a>
					)}
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
					<div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 relative overflow-hidden">
						
						<div className="absolute top-4 right-4 w-16 h-16 bg-rose-100 rounded-full blur-2xl opacity-50"></div>
						<h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 relative z-10">Opening Hours</h4>
						<div className="overflow-x-auto relative z-10">
							<table className="w-full text-left text-sm">
								<thead>
									<tr className="border-b-2 border-rose-200">
										<th scope="col" className="py-4 pr-4 text-gray-900 font-bold text-sm">Day</th>
										<th scope="col" className="py-4 text-gray-900 font-bold text-sm">Hours</th>
									</tr>
								</thead>
								<tbody>
									{branch.hours.map((h, index) => {
										const dayKey = dayKeyMap[h.day] || h.day.toLowerCase();
										const translatedDay = t(`common.${dayKey}`);
										const translatedClosed = t('common.closed');
										
										const formatTiming = (openTime: string, closeTime: string) => {
											if (openTime === 'Closed' || closeTime === 'Closed') return translatedClosed;
											
											if (openTime.includes('–') || openTime.includes('-')) {
												return openTime;
											}
											
											if (closeTime && closeTime !== '') {
												return `${openTime} – ${closeTime}`;
											}
											
											return openTime;
										};
										
										return (
											<tr key={h.day} className={`border-b border-gray-100 hover:bg-rose-50/50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
												<th scope="row" className="py-4 pr-4 font-semibold text-gray-800 text-sm">{translatedDay}</th>
												<td className="py-4 text-gray-700 text-sm break-words font-medium">
													{h.open === 'Closed' ? (
														<span className="text-red-600 font-semibold">{translatedClosed}</span>
													) : (
														<span>{formatTiming(h.open, h.close)}</span>
													)}
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
					<div className="relative group">
						<div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-300">
							<iframe
								src={branch.gmapEmbedUrl}
								width="100%"
								height="100%"
								style={{ border: 0 }}
								loading="lazy"
								allowFullScreen
								title={`${branch.city} Clinic Location`}
								className="group-hover:scale-105 transition-transform duration-300"
							></iframe>
						</div>
						
						<div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-lg border border-white/20">
							<div className="flex items-center justify-between gap-2">
								<div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
									<div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
										<svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<div className="min-w-0 flex-1">
										<p className="font-semibold text-gray-900 text-sm sm:text-base truncate">{branch.city} Clinic</p>
										<p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Precise location shown</p>
									</div>
								</div>
								<a 
									href={branch.gmapUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 bg-rose-600 text-white text-xs font-medium rounded-md sm:rounded-lg hover:bg-rose-700 active:bg-rose-800 transition-colors flex-shrink-0 touch-manipulation cursor-pointer"
									onClick={(e) => {
										// Ensure the link works on mobile by preventing any interference
										e.stopPropagation();
									}}
								>
									<svg className="w-3 h-3 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
									<span className="hidden sm:inline pointer-events-none">Open</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 