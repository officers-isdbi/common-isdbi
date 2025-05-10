declare interface EventsI< CAT = string, D extends Date | string = string>
	extends PublishableContentI,
		ActivatableI {
	name: LanguagesContentI;
	details: LanguagesContentI;
	slug: string;
	category?: CAT; // reference to Category
	startDate: D;
	endDate: D;
	partners: string[];
	// location: LocationI;
	images: CaptionedImageI[];
	thumbnail: CaptionedImageI;
	tags: string[];
}
declare type CreateEventsI< CAT = string, D extends Date | string = string> = Omit<
	EventsI< CAT, D>,
	'enabled' | 'isPublished' | 'website' | 'thumbnail'
>;
declare interface PublicEventsI<ID = string,  CAT = WEBSITE, D extends Date | string = string>
	extends EventsI< CAT, D> {
	_id: ID;
	createdAt: D;
	updatedAt: D;
}
declare type EventsSortableFields = 'createdAt' | 'updatedAt' | 'name' | 'startDate' | 'partners' | 'tags' | 'enabled';

declare type EventsInformationI = Pick<PublicEventsI, 'name' | 'summary' | 'details' | 'slug'>;
declare type EventsImagesI = Pick<EventsI, 'thumbnail' | 'images'>;
