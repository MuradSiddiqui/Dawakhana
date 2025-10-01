export default function Hero() {
	return (
		<div className="text-center py-16 bg-gradient-to-br from-gray-50 to-white">
			<div className="container-site">
				<img src="/logo.png" alt="Clinic logo" className="h-20 w-20 mx-auto mb-6 rounded-lg shadow-lg" />
				<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3" dir="rtl">بسم الله الرحمن الرحيم</h1>
				<p className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4" dir="rtl">وَإِذا مَرِضْتُ فَهُوَ يَشْفِيْن..</p>
				<p className="text-xl sm:text-2xl text-gray-700 mb-3" dir="rtl">اور جب میں بیمار ہوتا ہوں تو وہی (الله)مجھے شفا دیتا ہے..</p>
				<p className="text-lg sm:text-xl text-gray-600 mb-8">And when I am ill, it is He who cures me.</p>
				<div className="flex items-center justify-center gap-4">
					<a href="#branches" className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 text-gray-800 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm">Find a Branch</a>
					<a href="#contact" className="inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 text-white bg-rose-700 hover:bg-rose-800 border-rose-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">Contact Us</a>
				</div>
			</div>
		</div>
	);
} 