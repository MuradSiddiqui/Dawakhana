import React from 'react';
import { Phone, MapPin, Facebook, Mail } from 'lucide-react';
import type { Branch } from '../data/branches';

type Props = { branch: Branch };

export default function BranchSection({ branch }: Props) {
	return (
		<section id={branch.id} className="py-12 border-t-2 border-gray-200 first:border-t-0">
			<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
				<h3 className="text-3xl font-bold text-gray-900 mb-2">{branch.city}</h3>
				<p className="text-lg text-gray-700 mb-4">{branch.address}</p>
				<div className="flex flex-wrap items-center gap-3 mb-6">
					<a className="inline-flex items-center gap-2 rounded-lg border-2 border-rose-200 px-4 py-2 text-rose-800 hover:bg-rose-50 transition-colors font-medium" href={`tel:${branch.phone.replace(/\s/g,'')}`} aria-label={`Call ${branch.city}`}>
						<Phone className="h-4 w-4" /> Call {branch.phone}
					</a>
					<a className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors font-medium" href={branch.gmapUrl} target="_blank" rel="noopener noreferrer" aria-label={`Directions to ${branch.city}`}>
						<MapPin className="h-4 w-4" /> Directions
					</a>
					{branch.email && (
						<a className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors font-medium" href={`mailto:${branch.email}`}>
							<Mail className="h-4 w-4" /> {branch.email}
						</a>
					)}
					{branch.facebookUrl && (
						<a className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-200 px-4 py-2 text-blue-700 hover:bg-blue-50 transition-colors font-medium" href={branch.facebookUrl} target="_blank" rel="noopener noreferrer">
							<Facebook className="h-4 w-4" /> Facebook
						</a>
					)}
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-gray-50 rounded-xl p-6">
						<h4 className="text-xl font-semibold text-gray-900 mb-4">Opening Hours</h4>
						<div className="overflow-x-auto">
							<table className="min-w-[320px] text-left text-sm">
								<thead>
									<tr>
										<th scope="col" className="py-3 pr-4 text-gray-900 font-semibold">Day</th>
										<th scope="col" className="py-3 text-gray-900 font-semibold">Hours</th>
									</tr>
								</thead>
								<tbody>
									{branch.hours.map(h => (
										<tr key={h.day} className="border-t border-gray-200">
											<th scope="row" className="py-3 pr-4 font-medium text-gray-700">{h.day}</th>
											<td className="py-3 text-gray-700">{h.open === 'Closed' ? 'Closed' : (h.close ? `${h.open} – ${h.close}` : h.open)}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
					<div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100 shadow-lg">
						<iframe
							src={branch.gmapEmbedUrl}
							width="100%"
							height="100%"
							style={{ border: 0 }}
							loading="lazy"
							allowFullScreen
							title={`${branch.city} map`}
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
} 