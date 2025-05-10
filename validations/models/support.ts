import { type MyZodType, z } from '^common/defaultZod';
import { emailSchema, nameSchema, phoneSchema } from '^common/elements';

// Define message constants
const supportMessages = {
	customerName: {
		required: {
			en: 'Customer name is required',
			fr: 'Le nom du client est requis',
			ar: 'اسم العميل مطلوب',
		},
		invalid: {
			en: 'Customer name is not a valid name',
			fr: "Le nom du client n'est pas valide",
			ar: 'اسم العميل غير صالح',
		},
	},
	email: {
		required: {
			en: 'Email is required',
			fr: "L'email est requis",
			ar: 'البريد الإلكتروني مطلوب',
		},
		invalid: {
			en: 'Email is not a valid email',
			fr: "L'email n'est pas valide",
			ar: 'البريد الإلكتروني غير صالح',
		},
	},
	report: {
		required: {
			en: 'Report is required',
			fr: 'Le rapport est requis',
			ar: 'التقرير مطلوب',
		},
		invalid: {
			en: 'Report is not a valid string',
			fr: "Le rapport n'est pas une chaîne valide",
			ar: 'التقرير ليس سلسلة صالحة',
		},
	},
	subject: {
		required: {
			en: 'Subject is required',
			fr: 'Le sujet est requis',
			ar: 'الموضوع مطلوب',
		},
		invalid: {
			en: 'Subject is not a valid string',
			fr: "Le sujet n'est pas une chaîne valide",
			ar: 'الموضوع ليس سلسلة صالحة',
		},
	},
	status: {
		invalid: {
			en: 'Status is not a valid status',
			fr: "Le statut n'est pas valide",
			ar: 'الحالة غير صالحة',
		},
		required: {
			en: 'Status is required',
			fr: 'Le statut est requis',
			ar: 'الحالة مطلوبة',
		},
	},
};

export const requestSupportValidationSchema = (locale: LanguagesI) =>
	z.object<MyZodType<RequestSupportI>>({
		customerName: nameSchema(locale),
		email: emailSchema(locale),
		/* status: z.enum(['pending', 'resolved', 'rejected'], {
			errorMap: () => ({ message: supportMessages.status.invalid[locale] }),
			required_error: supportMessages.status.required[locale],
		}), */
		phone: phoneSchema(locale),
		report: z.string({
			description: 'Report',
			invalid_type_error: supportMessages.report.invalid[locale],
			required_error: supportMessages.report.required[locale],
		}),
		subject: z.string({
			description: 'Subject',
			invalid_type_error: supportMessages.subject.invalid[locale],
			required_error: supportMessages.subject.required[locale],
		}),
	});
