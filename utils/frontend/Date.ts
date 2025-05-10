const LocaleDate: Record<LanguagesI, Intl.DateTimeFormat> = {
	en: new Intl.DateTimeFormat('en-UK', {
		dateStyle: 'full',
		timeStyle: 'medium',
	}),
	fr: new Intl.DateTimeFormat('fr-FR', {
		dateStyle: 'full',
		timeStyle: 'medium',
	}),
	/* ar: new Intl.DateTimeFormat('ar-DZ', {
		dateStyle: 'full',
		timeStyle: 'medium',
	}), */
};
export default LocaleDate;

export function toHTMLDateTime(date: Date): string {
	return date.toISOString().slice(0, 16);
}
