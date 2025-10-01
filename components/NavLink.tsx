type Props = { href: string; children: React.ReactNode; onClick?: () => void };
export default function NavLink({ href, children, onClick }: Props) {
	return (
		<a
			href={href}
			onClick={onClick}
			className="text-gray-700 hover:text-rose-700 px-3 py-2 rounded-md text-sm font-medium"
		>
			{children}
		</a>
	);
} 