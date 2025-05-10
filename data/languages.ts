interface LanguageElementI {
	lang: string;
	name: string;
	image: string;
}
export const LanguagesMap: Record<LanguagesI, LanguageElementI> = {
	en: {
		lang: 'en',
		name: 'English',
		image: '/images/united-kingdom.png',
	},
	//ar: 'العربية',
	fr: {
		lang: 'fr',
		name: 'Français',
		image: '/images/france.png',
	},
};
