export default function About() {
	return (
		<div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
				<div className="md:col-span-2 space-y-8">
					<section aria-labelledby="about-overview">
						<h2 id="about-overview" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
						<p className="text-lg text-gray-700 mb-4 leading-relaxed">Mufeed-e-Aam Dawakhana is a community-focused Unani clinic network serving patients across Sindh. Under the leadership of Hakeem Muhammad Mohsin Siddiqui, we offer compassionate primary care with a special emphasis on holistic, evidence-guided practice. Our branches operate on clearly published timings to help patients plan convenient visits.</p>
						<p className="text-lg text-gray-700 leading-relaxed">Hakeem Muhammad Mohsin Siddiqui (Fazil-ut-Tibb-wal-Jarahat; M.A. History, University of Sindh) has operated the clinics since 1993. He oversees clinical services, training, and public education initiatives. All clinics are registered with the Sindh Healthcare Commission.</p>
					</section>

					<section aria-labelledby="about-history" className="pt-6 border-t-2 border-gray-200">
						<h3 id="about-history" className="text-3xl font-bold text-gray-900 mb-4">Founder and History</h3>
						<p className="text-lg text-gray-700 leading-relaxed">Hakeem Makhdoom Muhammad Murad Siddiqui (born 1925, Sehwan Sharif) founded Dar al-Shifa Mufeed-e-Aam Dawakhana clinics. Fluent in English, Farsi, Urdu, Sindhi, Balochi, and Punjabi, he dedicated his life to learning and service. He established a public library in Sehwan Sharif featuring works on Unani Tibb and education, and was a respected general physician known for treating a wide spectrum of ailments.</p>
					</section>
				</div>
				<div>
					<figure className="aspect-[3/4] w-full rounded-2xl bg-gray-100 overflow-hidden shadow-xl">
						<img src="/images/founder.jpg" alt="Hakeem Makhdoom Muhammad Murad Siddiqui" className="h-full w-full object-cover" />
					</figure>
					<p className="mt-3 text-sm text-gray-500 text-center"> <code className="bg-gray-100 px-1 rounded"></code></p>
				</div>
			</div>
		</div>
	);
} 