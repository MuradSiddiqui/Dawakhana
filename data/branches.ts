export type Hours = { day: string; open: string; close: string };

export type Branch = {
	id: 'karachi' | 'hyderabad' | 'mirpurkhas' | 'dadu';
	city: string;
	address: string;
	phone: string;
	email?: string;
	hours: Hours[];
	imageUrl: string;
	gmapUrl: string;
	gmapEmbedUrl: string;
	facebookUrl?: string;
};

// Helper to mark closed days
const closed: Hours = { day: '', open: 'Closed', close: 'Closed' } as Hours;

export const branches: Branch[] = [
	{
		id: 'karachi',
		city: 'Karachi',
		address: 'Karachi, Pakistan',
		phone: '021 34663679',
		hours: [
			{ day: 'Mon', open: '12:00 PM', close: '6:00 PM' },
			{ day: 'Tue', open: 'Closed', close: 'Closed' },
			{ day: 'Wed', open: 'Closed', close: 'Closed' },
			{ day: 'Thu', open: 'Closed', close: 'Closed' },
			{ day: 'Fri', open: 'Closed', close: 'Closed' },
			{ day: 'Sat', open: 'Closed', close: 'Closed' },
			{ day: 'Sun', open: '12:00 PM', close: '3:00 PM' },
		],
		imageUrl: '/images/branches/karachi.jpg',
		gmapUrl: 'https://maps.app.goo.gl/kwN2x2WBLwrKtSDQ6',
		gmapEmbedUrl: 'https://www.google.com/maps?q=Karachi%20Clinic&output=embed',
		facebookUrl: 'https://www.facebook.com/share/1QQQJiH4My/',
	},
	{
		id: 'hyderabad',
		city: 'Hyderabad',
		address: 'Hyderabad, Pakistan',
		phone: '022 785888',
		hours: [
			{ day: 'Mon', open: 'Closed', close: 'Closed' },
			{ day: 'Tue', open: '11:00 AM – 2:00 PM, 5:00 PM – 10:00 PM', close: '' as unknown as string },
			{ day: 'Wed', open: 'Closed', close: 'Closed' },
			{ day: 'Thu', open: '11:00 AM – 2:00 PM, 5:00 PM – 10:00 PM', close: '' as unknown as string },
			{ day: 'Fri', open: 'Closed', close: 'Closed' },
			{ day: 'Sat', open: 'Closed', close: 'Closed' },
			{ day: 'Sun', open: 'Closed', close: 'Closed' },
		],
		imageUrl: '/images/branches/hyderabad.jpg',
		gmapUrl: 'https://maps.app.goo.gl/C77nysj32cAh81VS8',
		gmapEmbedUrl: 'https://www.google.com/maps?q=Hyderabad%20Clinic&output=embed',
		facebookUrl: 'https://www.facebook.com/share/1QQQJiH4My/',
	},
	{
		id: 'mirpurkhas',
		city: 'Mirpurkhas',
		address: 'Mirpurkhas, Pakistan',
		phone: '0333 2785888',
		hours: [
			{ day: 'Mon', open: 'Closed', close: 'Closed' },
			{ day: 'Tue', open: 'Closed', close: 'Closed' },
			{ day: 'Wed', open: '10:00 AM', close: '6:00 PM' },
			{ day: 'Thu', open: 'Closed', close: 'Closed' },
			{ day: 'Fri', open: 'Closed', close: 'Closed' },
			{ day: 'Sat', open: 'Closed', close: 'Closed' },
			{ day: 'Sun', open: 'Closed', close: 'Closed' },
		],
		imageUrl: '/images/branches/mirpurkhas.jpg',
		gmapUrl: 'https://maps.app.goo.gl/uo7rv7dj614TVjYV6',
		gmapEmbedUrl: 'https://www.google.com/maps?q=Mirpurkhas%20Clinic&output=embed',
		facebookUrl: 'https://www.facebook.com/share/1QQQJiH4My/',
	},
	{
		id: 'dadu',
		city: 'Dadu',
		address: 'Dadu, Pakistan',
		phone: '0333 2785888',
		hours: [
			{ day: 'Mon', open: 'Closed', close: 'Closed' },
			{ day: 'Tue', open: 'Closed', close: 'Closed' },
			{ day: 'Wed', open: 'Closed', close: 'Closed' },
			{ day: 'Thu', open: 'Closed', close: 'Closed' },
			{ day: 'Fri', open: '10:00 AM', close: '6:00 PM' },
			{ day: 'Sat', open: 'Closed', close: 'Closed' },
			{ day: 'Sun', open: 'Closed', close: 'Closed' },
		],
		imageUrl: '/images/branches/dadu.jpg',
		gmapUrl: 'https://maps.app.goo.gl/1ZBsEuA9vAy2o3Z56',
		gmapEmbedUrl: 'https://www.google.com/maps?q=Dadu%20Clinic&output=embed',
		facebookUrl: 'https://www.facebook.com/share/1QQQJiH4My/',
	},
]; 