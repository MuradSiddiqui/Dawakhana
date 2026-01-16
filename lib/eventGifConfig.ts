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
	enabled: false, // 👈 Change to true to enable
	gifPath: '/Happy New Year Hello GIF.gif',
	altText: 'Happy New Year',
	displayDuration: 5000, // 5 seconds
};


// Uncomment and use these when needed, or create your own

// For EID Mubarak:
// export const eventGifConfig: EventGifConfig = {
// 	enabled: true,
// 	gifPath: '/EID Mubarak GIF.gif', // Add your EID GIF to public folder
// 	altText: 'EID Mubarak',
// 	displayDuration: 5000,
// };

// For Ramazan Mubarak:
// export const eventGifConfig: EventGifConfig = {
// 	enabled: true,
// 	gifPath: '/Ramazan Mubarak GIF.gif', // Add your Ramazan GIF to public folder
// 	altText: 'Ramazan Mubarak',
// 	displayDuration: 5000,
// };

// For any other event:
// export const eventGifConfig: EventGifConfig = {
// 	enabled: true,
// 	gifPath: '/Your Event GIF.gif', // Add your GIF to public folder
// 	altText: 'Your Event Name',
// 	displayDuration: 5000,
// };

