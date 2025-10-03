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
		gmapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.518106634938!2d67.101863!3d24.914413999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338d10a39de55%3A0x43611f2c5ce26f7d!2sMufeed-e-Aam%20Dawakhana!5e0!3m2!1sen!2sde!4v1759531374884!5m2!1sen!2sde',
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
		gmapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.5874881876534!2d68.3640484!3d25.3851382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f1f99d2903%3A0xe682615fe8abe1d9!2sMufeed-e-Aam%20Dawakhana!5e0!3m2!1sen!2sde!4v1759531400633!5m2!1sen!2sde',
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
		gmapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3600.316462219741!2d69.021498!3d25.5278335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394eac19a6b7c0a7%3A0x9f4ccc2bd889b33e!2sMufeed-e-Aam%20Dawakhana!5e0!3m2!1sen!2sde!4v1759531414108!5m2!1sen!2sde',
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
		gmapUrl: 'https://maps.app.goo.gl/UPuzYFShgE2hGkMj6',
		gmapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3563.173676244486!2d67.7818056!3d26.7388333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ0JzE5LjgiTiA2N8KwNDYnNTQuNSJF!5e0!3m2!1sen!2sde!4v1759531427256!5m2!1sen!2sde',
		facebookUrl: 'https://www.facebook.com/share/1QQQJiH4My/',
	},
]; 