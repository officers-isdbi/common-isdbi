type MasonryMessagesKeys = 'found-masonry-successfully' | 'failed-to-find-masonry';
export const masonryMessages: Record<MasonryMessagesKeys, LanguagesContentI<string>> = {
	'found-masonry-successfully': {
		en: 'Images found successfully.',
		// ar: "تم العثور على الصور بنجاح.",
		fr: 'Images trouvées avec succès.',
	},
	'failed-to-find-masonry': {
		en: 'Failed to find images.',
		// ar: "فشل في العثور على الصور.",
		fr: 'Échec de la recherche d\'images.',
	},
};
