import { type MyZodType, z } from '^common/defaultZod';
import {
	arraySchema,
	detailsSchema,
	languagesContentValidationSchema,
	mongoIDSchema,
	slugSchema,
	stringDateSchema,
	summarySchema,
} from '^common/elements';
import { imageValidationSchema } from './generals/Image';
import { publishableContentSchema } from './generals/BasicPublishableInformation';

// Define message constants
const eventMessages = {
	email: {
		required: {
			en: 'Email is required',
			fr: 'Email est requis',
			ar: 'البريد الإلكتروني مطلوب',
		},
		invalid: {
			en: 'Invalid email address',
			fr: 'Adresse e-mail invalide',
			ar: 'عنوان البريد الإلكتروني غير صالح',
		},
	},
	password: {
		required: {
			en: 'Password is required',
			fr: 'Mot de passe est requis',
			ar: 'كلمة المرور مطلوبة',
		},
		invalid: {
			en: 'Invalid password',
			fr: 'Mot de passe invalide',
			ar: 'كلمة مرور غير صالحة',
		},
	},
	phone: {
		required: {
			en: 'Phone number is required',
			fr: 'Le numéro de téléphone est requis',
			ar: 'رقم الهاتف مطلوب',
		},
		invalid: {
			en: 'Invalid phone number',
			fr: 'Numéro de téléphone invalide',
			ar: 'رقم الهاتف غير صالح',
		},
	},
	firstName: {
		required: {
			en: 'First Name is required',
			fr: 'Le prénom est requis',
			ar: 'الاسم الأول مطلوب',
		},
		invalid: {
			en: 'Invalid First Name',
			fr: 'Prénom invalide',
			ar: 'الاسم الأول غير صالح',
		},
	},
	lastName: {
		required: {
			en: 'Last Name is required',
			fr: 'Le nom de famille est requis',
			ar: 'اسم العائلة مطلوب',
		},
		invalid: {
			en: 'Invalid Last Name',
			fr: 'Nom de famille invalide',
			ar: 'اسم العائلة غير صالح',
		},
	},
	document: {
		description: {
			en: 'User document Schema',
			fr: 'Schéma de document utilisateur',
			ar: 'مخطط وثيقة المستخدم',
		},
		invalid: {
			en: 'Invalid User Schema',
			fr: 'Schéma utilisateur invalide',
			ar: 'مخطط مستخدم غير صالح',
		},
		required: {
			en: 'User document Schema is required',
			fr: 'Le schéma de document utilisateur est requis',
			ar: 'مخطط وثيقة المستخدم مطلوب',
		},
	},
};

/* --------------------------------- User Login Schema --------------------------------- */

/* --------------------------------- User Apps Schema --------------------------------- */

/* --------------------------------- User Document Schema --------------------------------- */

export const EventDocumentSchema = (locale: LanguagesI) => {
	const {  ...schema } = publishableContentSchema(locale).shape;
	return z.object<MyZodType<Omit<EventsI, 'website'>>>(
		{
			...eventsInformationSchema(locale).shape,
			...schema,
			startDate: stringDateSchema(locale),
			endDate: stringDateSchema(locale),
			partners: arraySchema(z.string(), locale),

			category: mongoIDSchema(locale).optional(),
			thumbnail: imageValidationSchema(locale),
			images: arraySchema(imageValidationSchema(locale), locale),
		},
		{
			description: eventMessages.document.description[locale],
			invalid_type_error: eventMessages.document.invalid[locale],
			required_error: eventMessages.document.required[locale],
		}
	);
};
/* --------------------------------- User Schema --------------------------------- */

export const PublicEventsIValidationSchema = (locale: LanguagesI) => {
	return z.object<MyZodType<PublicEventsI>>(
		{
			...EventDocumentSchema(locale).shape,
			_id: mongoIDSchema(locale),
			createdAt: stringDateSchema(locale),
			updatedAt: stringDateSchema(locale),
		},
		{
			description: eventMessages.document.description[locale],
			invalid_type_error: eventMessages.document.invalid[locale],
			required_error: eventMessages.document.required[locale],
		}
	);
};
/* -------------------------------------Information schema ------------------------------ */
export const eventsInformationSchema = (locale: LanguagesI) =>
	z.object<MyZodType<EventsInformationI>>(
		{
			name: languagesContentValidationSchema({ min: 3, max: 100 }),
			summary: summarySchema,
			details: detailsSchema,
			slug: slugSchema(locale),
		},
		{
			description: eventMessages.document.description[locale],
			invalid_type_error: eventMessages.document.invalid[locale],
			required_error: eventMessages.document.required[locale],
		}
	);

/* -------------------------------------Images schema ------------------------------ */
export const eventsImagesSchema = (locale: LanguagesI) =>
	z.object<MyZodType<EventsImagesI>>({
		thumbnail: imageValidationSchema(locale),
		images: arraySchema(imageValidationSchema(locale), locale),
	});
/* -------------------------------------Labels schema ------------------------------ */
export const eventsLabelsSchema = (locale: LanguagesI) =>
	z.object<MyZodType<PublishableLabelsI>>({
		label: z
			.string({
				description: 'Event label',
				invalid_type_error: eventMessages.document.invalid[locale],
				required_error: eventMessages.document.required[locale],
			})
			.optional(),
		tags: arraySchema(z.string(), locale),
	});
