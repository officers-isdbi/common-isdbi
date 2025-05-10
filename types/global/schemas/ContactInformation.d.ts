declare interface ContactInformationI {
	emails: string[];
	validatedEmails?: string[];
	phones: string[];
	faxes?: string[];
	websites: string[];
	socialMediaUrls?: SocialMediaUrlsI;
}
/* declare interface PhoneI {
	number: string;
	code?: string;
} */
declare interface SocialMediaUrlsI {
	facebook?: string;
	x?: string;
	instagram?: string;
	youtube?: string;
	linkedin?: string;
	tiktok?: string;
	discord?: string;
	pintrest?: string;
	whatsapp?: string;
	telegram?: string;
	behance?: string;
	snapchat?: string;
	twitch?: string;
	eventbrite?: string;
	meetup?: string;
	mastodon?: string;
	bluesky?: string;
	thread?: string;
	slack?: string;
	polywork?: string;
	quora?: string;
	lemmy?: string;
}
