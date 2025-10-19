'use client';

import React, { useState, useEffect } from 'react';
import { ChevronUp, MessageCircle } from 'lucide-react';
import { contact } from '../data/contact';

export default function FloatingButtons() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			setIsVisible(scrollTop > 200);
		};

		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const openWhatsApp = () => {
		// Format phone number for WhatsApp (same logic as Contact component)
		const raw = contact.mainPhone.replace(/[^0-9]/g, '');
		const wa = raw.startsWith('0') ? `92${raw.slice(1)}` : (raw.startsWith('92') ? raw : `92${raw}`);
		const whatsappUrl = `https://wa.me/${wa}?text=${encodeURIComponent('Assalamualaikum, I would like to inquire.')}`;
		window.open(whatsappUrl, '_blank');
	};

	return (
		<div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
			{/* WhatsApp Button */}
			<button
				onClick={openWhatsApp}
				className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-300 flex items-center justify-center animate-bounce hover:animate-none"
				aria-label="Contact us on WhatsApp"
				title="Contact us on WhatsApp"
			>
				<MessageCircle className="h-6 w-6" />
			</button>

			{/* Scroll to Top Button */}
			<button
				onClick={scrollToTop}
				className={`w-12 h-12 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-300 flex items-center justify-center ${
					isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
				}`}
				aria-label="Scroll to top"
				title="Scroll to top"
			>
				<ChevronUp className="h-6 w-6" />
			</button>
		</div>
	);
}
