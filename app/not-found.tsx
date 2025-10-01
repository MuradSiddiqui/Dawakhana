export default function NotFound() {
	return (
		<div className="container-site py-12 text-center">
			<h1 className="text-2xl font-semibold text-gray-900">Page Not Found</h1>
			<p className="mt-2 text-gray-600">The page you're looking for doesn't exist.</p>
			<a href="/" className="mt-4 inline-flex items-center gap-2 rounded-md border px-4 py-2 text-white bg-rose-700 hover:bg-rose-800 border-rose-700">Go Home</a>
		</div>
	);
} 