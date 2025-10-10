export default function Hero() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-rose-50 relative overflow-hidden">
			
			<div className="absolute inset-0 opacity-5">
				<div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full blur-3xl"></div>
				<div className="absolute bottom-20 right-10 w-40 h-40 bg-rose-300 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose-100 rounded-full blur-2xl"></div>
			</div>
			
			<div className="text-center max-w-5xl mx-auto px-4 relative z-10">
				
				<div className="mb-12 animate-fade-in">
					<div className="relative">
						<img src="/logo.png" alt="Mufeed e aam Dawakhana - Leading Healthcare Clinic in Sindh, Pakistan" className="h-32 w-32 mx-auto rounded-2xl " />
					</div>
				</div>
				
				
				<div className="mb-12 animate-slide-up">
					<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight whitespace-nowrap drop-shadow-sm" dir="rtl">
						بسم الله الرحمن الرحيم
					</h1>
					<p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-8 leading-relaxed drop-shadow-sm" dir="rtl">
						وَإِذا مَرِضْتُ فَهُوَ يَشْفِيْن..
					</p>
				</div>
				
				
				<div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
					<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-700 mb-6 leading-relaxed font-medium" dir="rtl">
						اور جب میں بیمار ہوتا ہوں تو وہی (الله) مجھے شفا دیتا ہے..
					</p>
				</div>
				
				
				<div className="mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
					<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium italic">
						And when I am ill, it is He who cures me.
					</p>
				</div>
				
				
				<div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
					<a 
						href="#branches" 
						className="group inline-flex items-center gap-3 rounded-xl border-2 border-gray-300 px-8 py-4 text-gray-800 hover:bg-white hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
					>
						<span>Find a Branch</span>
						<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
					</a>
					<a 
						href="#contact" 
						className="group inline-flex items-center gap-3 rounded-xl border-2 px-8 py-4 text-white bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 border-rose-600 hover:shadow-xl transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
					>
						<span>Contact Us</span>
						<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}