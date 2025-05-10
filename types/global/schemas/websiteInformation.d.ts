declare interface WebsiteInformationI {
	name: LanguagesContentI;
	domain: string;
	description: LanguagesContentI;
	keywords: string[];
	aboutUs: LanguagesContentI; // Markdown format
	ourStory: LanguagesContentI; // Markdown format
	events: LanguagesContentI; // Markdown format
	contactInformation: ContactInformationI;
	addresses: AddressI[];
}
