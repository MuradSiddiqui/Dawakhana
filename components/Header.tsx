"use client";
import { useState } from 'react';
import NavLink from './NavLink';

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
			<div className="container-site flex items-center justify-between h-20">
				<div className="flex items-center gap-4">
					<img src="/logo.png" alt="Clinic logo" className="h-12 w-12 rounded-lg" />
					<span className="text-xl font-bold text-gray-900">Mufeed e aam Dawakhana</span>
				</div>
				<nav className="hidden md:flex items-center gap-1">
					<NavLink href="#about">About</NavLink>
					<NavLink href="#branches">Branches</NavLink>
					<NavLink href="#timings-maps">Timings & Maps</NavLink>
					<NavLink href="#contact">Contact</NavLink>
				</nav>
				<button
					className="md:hidden inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
					aria-label="Toggle menu"
					onClick={() => setOpen(v => !v)}
				>
					<span className="text-lg">☰</span>
				</button>
			</div>
			{open && (
				<div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-lg">
					<div className="container-site py-4 flex flex-col gap-2">
						<NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
						<NavLink href="#branches" onClick={() => setOpen(false)}>Branches</NavLink>
						<NavLink href="#timings-maps" onClick={() => setOpen(false)}>Timings & Maps</NavLink>
						<NavLink href="#contact" onClick={() => setOpen(false)}>Contact</NavLink>
					</div>
				</div>
			)}
		</header>
	);
} 