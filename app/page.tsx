import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import BranchesGrid from '../components/BranchesGrid';
import TimingsAndMaps from '../components/TimingsAndMaps';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function Page() {
	return (
		<div>
			<Header />
			<main>
				<section id="home">
					<Hero />
				</section>
				<div className="space-y-24 py-24">
					<section id="about" className="container-site">
						<About />
					</section>
					<section id="branches" className="container-site">
						<BranchesGrid />
					</section>
					<section id="timings-maps" className="container-site">
						<TimingsAndMaps />
					</section>
					<section id="contact" className="container-site">
						<Contact />
					</section>
				</div>
			</main>
			<Footer />
			<FloatingButtons />
		</div>
	);
} 