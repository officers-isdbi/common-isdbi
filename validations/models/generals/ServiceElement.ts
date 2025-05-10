import { type MyZodType, z } from '^common/defaultZod';
import { languagesContentValidationSchema, ratingSchema } from '^common/elements';
import { imageValidationSchema } from './Image';

export const serviceElementValidationSchema = (locale: LanguagesI) =>
	z.object<MyZodType<ServiceElementI>>({
		image: imageValidationSchema(locale),
		title: languagesContentValidationSchema(),
		description: languagesContentValidationSchema({ max: 500 }),
	});
export const ratedServiceElementValidationSchema = (locale: LanguagesI) =>
	z.object<MyZodType<RatedServiceElementI>>({
		image: imageValidationSchema(locale),
		title: languagesContentValidationSchema(),
		description: languagesContentValidationSchema({ max: 500 }),
		rating: ratingSchema(locale),
	});
const countMessages = {
	required: {
		en: 'Count is required',
		fr: 'Le nombre est requis',
		ar: 'العدد مطلوب',
	},
	invalid: {
		en: 'Invalid count',
		fr: 'Nombre invalide',
		ar: 'عدد غير صالح',
	},
};
export const numberedServiceElementValidationSchema = (locale: LanguagesI) =>
	z.object<MyZodType<NumberedServiceElementI>>({
		title: languagesContentValidationSchema(),
		description: languagesContentValidationSchema({ max: 500 }),
		count: z.number({
			invalid_type_error: countMessages.invalid[locale],
			required_error: countMessages.required[locale],
		}),
	});
