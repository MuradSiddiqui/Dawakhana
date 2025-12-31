'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HappyNewYearGif() {
	const [isVisible, setIsVisible] = useState(true);
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsVisible(false);
		}, 300); // Match animation duration
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			handleClose();
		}, 5000); // 5 seconds

		return () => clearTimeout(timer);
	}, []);

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (isVisible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isVisible]);

	if (!isVisible) {
		return null;
	}

	return (
		<div
			className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
				isClosing ? 'opacity-0' : 'opacity-100'
			}`}
			onClick={handleClose}
		>
			<div
				className={`relative max-w-[90vw] max-h-[90vh] p-4 md:p-6 transition-all duration-300 ${
					isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={handleClose}
					className="absolute -top-2 -right-2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
					aria-label="Close"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-800"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				{/* GIF Container with subtle animation */}
				<div className="relative animate-pulse-slow">
					<Image
						src="/Happy New Year Hello GIF.gif"
						alt="Happy New Year"
						width={800}
						height={600}
						className="max-w-full h-auto rounded-xl shadow-2xl border-4 border-white/20"
						unoptimized
						priority
					/>
				</div>

				{/* Subtle hint text */}
				<p className="text-white/80 text-sm text-center mt-4 font-light animate-fade-in">
					Click anywhere to close
				</p>
			</div>
		</div>
	);
}

