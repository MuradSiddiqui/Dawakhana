/**
 * Event GIF Configuration
 * 
 * To enable an event GIF:
 * 1. Set `enabled: true`
 * 2. Update the `gifPath` to point to your GIF file in the public folder
 * 3. Update the `altText` for accessibility
 * 4. Optionally adjust `displayDuration` (in milliseconds)
 * 
 * To disable: Set `enabled: false`
 */

export interface EventGifConfig {
	enabled: boolean;
	gifPath: string;
	altText: string;
	displayDuration: number; // in milliseconds
}


// Set enabled: true to show the GIF, false to hide it
export const eventGifConfig: EventGifConfig = {
	enabled: false,
	gifPath: '/Eid Mubarak.gif',
	altText: 'Eid Mubarak',
	displayDuration: 5000, // 5 seconds
};

