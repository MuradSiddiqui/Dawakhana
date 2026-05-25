/**
 * Event GIF Configuration
 * 
 * To enable an event GIF:
 * 1. Set `enabled: true`
 * 2. Update the `noticeImagePath` and `gifPath` to point to your files in the public folder
 * 3. Update the alt text values for accessibility
 * 4. Optionally adjust `displayDuration` (in milliseconds)
 * 
 * To disable: Set `enabled: false`
 */

export interface EventGifConfig {
	enabled: boolean;
	noticeImagePath?: string;
	noticeAltText?: string;
	gifPath: string;
	altText: string;
	displayDuration: number; // in milliseconds
}


// Set enabled: true to show the GIF, false to hide it
export const eventGifConfig: EventGifConfig = {
	enabled: true,
	noticeImagePath: '/images/holdiay.png',
	noticeAltText: 'Eid Ul Adha holiday notice',
	gifPath: '/images/Eid Ul Adha GIF.gif',
	altText: 'Eid Ul Adha Mubarak',
	displayDuration: 60000, // 1 minute
};

