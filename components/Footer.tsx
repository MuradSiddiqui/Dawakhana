import React from 'react';
import { Facebook, MapPin, Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="mt-24 border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 via-white to-rose-50 relative overflow-hidden">
			
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-10 right-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl"></div>
				<div className="absolute bottom-10 left-10 w-40 h-40 bg-rose-100 rounded-full blur-3xl"></div>
			</div>
			
			<div className="container-site py-16 relative z-10">
			
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
					
					<div className="text-center md:text-left">
						<div className="flex items-center justify-center md:justify-start gap-4 mb-6">
							<img src="/logo.png" alt="Mufeed e aam Dawakhana" className="h-12 w-12 sm:h-16 sm:w-16 rounded-xl" />
							<div>
								<h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mufeed e aam</h3>
								<p className="text-lg font-semibold text-rose-700">Dawakhana</p>
							</div>
						</div>
						<p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
							Compassionate, community healthcare across Sindh. Providing accessible medical care with dignity and respect.
						</p>
					</div>
					
					<div className="text-center md:text-left">
						<h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Links</h4>
						<nav className="flex flex-col gap-3 sm:gap-4">
							<a href="#about" className="text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base">
								About Us
							</a>
							<a href="#branches" className="text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base">
								Our Branches
							</a>
							<a href="#timings-maps" className="text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base">
								Timings & Maps
							</a>
							<a href="#contact" className="text-gray-600 hover:text-rose-700 font-medium transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base">
								Contact Us
							</a>
						</nav>
					</div>
					
					<div className="text-center md:text-left">
						<h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h4>
						<div className="space-y-3 sm:space-y-4">
							<div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
								<MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600 flex-shrink-0" />
								<span className="text-xs sm:text-sm">Sindh, Pakistan</span>
							</div>
							<div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
								<Phone className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600 flex-shrink-0" />
								<span className="text-xs sm:text-sm">Multiple locations</span>
							</div>
							<div className="flex items-center justify-center md:justify-start gap-3 text-gray-600">
								<Mail className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600 flex-shrink-0" />
								<span className="text-xs sm:text-sm">Contact branches directly</span>
							</div>
						</div>
					</div>
				</div>
				
				
				<div className="border-t border-gray-200 pt-6 sm:pt-8">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
						<p className="text-xs sm:text-sm text-gray-600 font-medium text-center sm:text-left">
							© {new Date().getFullYear()} Mufeed e aam Dawakhana. All rights reserved.
						</p>
						<div className="flex items-center gap-4 sm:gap-6">
							<a 
								href="https://www.facebook.com/share/1QQQJiH4My/" 
								target="_blank" 
								rel="noopener noreferrer" 
								aria-label="Facebook" 
								className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-600 text-white hover:bg-blue-700 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
							>
								<Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
} 