type EventsMessagesKeys = 'found-events-successfully' | 'failed-to-find-events';
export const eventsMessages: Record<EventsMessagesKeys, LanguagesContentI<string>> = {
	'found-events-successfully': {
		en: 'Events found successfully.',
		// es: "Eventos encontrados con éxito.",
		fr: 'Événements trouvés avec succès.',
	},
	'failed-to-find-events': {
		en: 'Failed to find events.',
		// es: "No se pudieron encontrar eventos.",
		fr: 'Échec de la recherche des événements.',
	},
};
