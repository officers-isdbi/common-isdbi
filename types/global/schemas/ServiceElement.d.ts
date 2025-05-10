declare interface ServiceElementI {
	title: LanguagesContentI;
	description: LanguagesContentI;
	image: CaptionedImageI; // URL or path to image
}
declare interface RatedServiceElementI extends ServiceElementI {
	rating: number;
}
declare interface NumberedServiceElementI extends Omit<ServiceElementI, 'image'> {
	count: number;
}
