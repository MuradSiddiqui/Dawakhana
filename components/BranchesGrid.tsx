import React from 'react';
import { branches } from '../data/branches';
import BranchCard from './BranchCard';

export default function BranchesGrid() {
	return (
		<div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100">
			<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 text-center">Our Branches</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{branches.map(b => (
					<BranchCard key={b.id} branch={b} />
				))}
			</div>
		</div>
	);
} 