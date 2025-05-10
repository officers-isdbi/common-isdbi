import { type MyZodType, z } from '^common/defaultZod';
import { languagesContentValidationSchema, urlSchema } from '^common/elements';
import { imageValidationSchema } from './Image';

export const sponsorsValidationSchema = (locale: LanguagesI) =>
	z.object<MyZodType<SponsorI>>({
		image: imageValidationSchema(locale),
		title: languagesContentValidationSchema(),
		link: urlSchema(locale),
	});
