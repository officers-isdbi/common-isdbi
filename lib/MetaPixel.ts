type MetaPixelEventParams = Record<string, any>;

// Track custom events
export function trackEvent(
	eventName: string,
	params: MetaPixelEventParams = {},
) {
	if (typeof window !== "undefined" && window.fbq) {
		window.fbq("track", eventName, params);
	} else {
		console.warn("Meta Pixel is not initialized.");
	}
}
export function initFBP(pixelId: string) {
	if (typeof window !== "undefined" && window.fbq) {
		window.fbq("init", pixelId);
		window.fbq("track", "PageView");
	}
}
export function pageView() {
	if (typeof window !== "undefined" && window.fbq) {
		window.fbq("track", "PageView");
	} else {
		console.warn("Meta Pixel is not initialized.");
	}
}
