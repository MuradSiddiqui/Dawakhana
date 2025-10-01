import React from 'react';
import type { Branch } from '../data/branches';

type Props = { branch: Branch };
export default function BranchCard({ branch }: Props) {
	return (
		<a href={`#${branch.id}`} className="group relative block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-rose-500 focus:ring-opacity-50 transition-all duration-300 transform hover:-translate-y-1">
			<img src={branch.imageUrl} alt={branch.city} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
			<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
			<div className="absolute bottom-0 p-6 w-full">
				<h3 className="text-white text-xl font-bold drop-shadow-lg">{branch.city}</h3>
				<p className="text-white/90 text-sm mt-1 drop-shadow">Click to view details</p>
			</div>
		</a>
	);
} 