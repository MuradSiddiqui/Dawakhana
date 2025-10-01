import React from 'react';
import { Facebook } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="mt-24 border-t-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white">
			<div className="container-site py-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-600">
				<p className="font-medium">© {new Date().getFullYear()} Mufeed e aam Dawakhana. All rights reserved.</p>
				<nav className="flex items-center gap-6">
					<a href="#about" className="hover:text-gray-800 font-medium transition-colors">About</a>
					<a href="#branches" className="hover:text-gray-800 font-medium transition-colors">Branches</a>
					<a href="#timings-maps" className="hover:text-gray-800 font-medium transition-colors">Timings & Maps</a>
					<a href="#contact" className="hover:text-gray-800 font-medium transition-colors">Contact</a>
					<a href="https://www.facebook.com/share/1QQQJiH4My/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors">
						<Facebook className="h-5 w-5" />
					</a>
				</nav>
			</div>
		</footer>
	);
} 