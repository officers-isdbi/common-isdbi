import { type MyZodType, z } from '^common/defaultZod';
import {
	booleanSchema,
	languagesContentValidationSchema,
	mongoIDSchema,
	slugSchema,
	summarySchema,
} from '^common/elements';

export const basicPublishableInformationValidationSchema = (locale: LanguagesI) =>
	z.object<MyZodType<BasicPublishableInformationI>>({
		name: languagesContentValidationSchema({ min: 2, max: 100 }),
		summary: summarySchema,
		slug: slugSchema(locale),
	});

export const basicPublishableInformationWithIdValidationSchema = (locale: LanguagesI) =>
	z.object<MyZodType<BasicPublishableInformationWithIdI>>({
		_id: mongoIDSchema(locale),
		...basicPublishableInformationValidationSchema(locale).shape,
	});

/* -------------------------------------States schema ------------------------------ */
export const statesSchema = (locale: LanguagesI) =>
	z.object<MyZodType<PublishableStatesI>>({
		enabled: booleanSchema(locale),
		isPublished: booleanSchema(locale),
	});

export const publishableContentSchema = (locale: LanguagesI) =>
	z.object<MyZodType<PublishableContentI>>({
		...statesSchema(locale).shape,
		...basicPublishableInformationValidationSchema(locale).shape,
		label: z.string().optional(),
		tags: z.array(z.string()),
	});
