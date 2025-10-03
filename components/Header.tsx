"use client";
import { useState, useEffect } from 'react';
import NavLink from './NavLink';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className={`sticky top-0 z-50 transition-all duration-300 ${
			scrolled 
				? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl' 
				: 'bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-lg'
		}`}>
			<div className="container-site flex items-center justify-between h-20">
				<div className="flex items-center gap-4 group">
					<div className="relative">
						<img src="/logo.png" alt="Mufeed e aam Dawakhana" className="h-12 w-12 rounded-xl group-hover:shadow-xl transition-all duration-300" />
						<div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-rose-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
					</div>
					<span className="text-xl font-bold text-gray-900 group-hover:text-rose-700 transition-colors duration-300">
						Mufeed e aam Dawakhana
					</span>
				</div>
				<nav className="hidden md:flex items-center gap-2">
					<NavLink href="#about">About</NavLink>
					<NavLink href="#branches">Branches</NavLink>
					<NavLink href="#timings-maps">Timings & Maps</NavLink>
					<NavLink href="#contact">Contact</NavLink>
				</nav>
				<button
					className={`md:hidden inline-flex items-center justify-center rounded-xl border-2 px-4 py-2 transition-all duration-300 ${
						open 
							? 'border-rose-300 bg-rose-50 text-rose-700' 
							: 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
					}`}
					aria-label="Toggle menu"
					onClick={() => setOpen(v => !v)}
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{open ? (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						) : (
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
						)}
					</svg>
				</button>
			</div>
			<div className={`md:hidden transition-all duration-300 overflow-hidden ${
				open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
			}`}>
				<div className="border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg">
					<div className="container-site py-6 flex flex-col gap-3">
						<NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
						<NavLink href="#branches" onClick={() => setOpen(false)}>Branches</NavLink>
						<NavLink href="#timings-maps" onClick={() => setOpen(false)}>Timings & Maps</NavLink>
						<NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
					</div>
				</div>
			</div>
		</header>
	);
} 