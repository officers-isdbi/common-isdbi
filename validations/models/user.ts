import { type MyZodType, z } from '^common/defaultZod';
import {
	booleanSchema,
	emailSchema,
	mongoIDSchema,
	passwordSchema,
	phoneSchema,
	stringDateSchema,
} from '^common/elements';
import { PersonalInformationSchema } from './generals/PersonalInformation';

// Define message constants
const userMessages = {
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
export const userLoginSchema = (locale: LanguagesI) =>
	z.object<MyZodType<UserLogInI>>(
		{
			email: emailSchema(locale),
			password: passwordSchema(locale),
			stay: booleanSchema(locale).optional(),
		},
		{
			description: userMessages.document.description[locale],
			invalid_type_error: userMessages.document.invalid[locale],
			required_error: userMessages.document.required[locale],
		}
	);

export const userLoginWithCaptchaSchema = (locale: LanguagesI) =>
	z.object<MyZodType<UserLogInWithCaptchaI>>(
		{
			email: emailSchema(locale),
			password: passwordSchema(locale),
			stay: booleanSchema(locale).optional(),
			captcha: z.string({
				required_error: userMessages.document.required[locale],
				invalid_type_error: userMessages.document.invalid[locale],
			}),
		},
		{
			description: userMessages.document.description[locale],
			invalid_type_error: userMessages.document.invalid[locale],
			required_error: userMessages.document.required[locale],
		}
	);

/* --------------------------------- User Apps Schema --------------------------------- */

/* --------------------------------- User Document Schema --------------------------------- */

export const UserDocumentSchema = (locale: LanguagesI) => {
	const { firstName, lastName } = PersonalInformationSchema(locale).shape;
	return z.object<MyZodType<UserDocumentI>>(
		{
			email: emailSchema(locale),
			firstName,
			lastName,
			password: passwordSchema(locale),
			phone: phoneSchema(locale),
			enabled: booleanSchema(locale),
			lastLogin: stringDateSchema(locale),
			createdAt: stringDateSchema(locale),
			emailValidated: booleanSchema(locale),
			updatedAt: stringDateSchema(locale),
			salt: z.string(),
			_id: mongoIDSchema(locale),
			isAdmin: booleanSchema(locale),
		},
		{
			description: userMessages.document.description[locale],
			invalid_type_error: userMessages.document.invalid[locale],
			required_error: userMessages.document.required[locale],
		}
	);
};
/* --------------------------------- User Schema --------------------------------- */

export const GeneralUserSchema = (locale: LanguagesI) => {
	const { firstName, lastName } = PersonalInformationSchema(locale).shape;
	return z.object<MyZodType<UserI>>(
		{
			_id: mongoIDSchema(locale),
			email: emailSchema(locale),
			firstName,
			lastName,
			phone: phoneSchema(locale),
			enabled: booleanSchema(locale),
			lastLogin: stringDateSchema(locale),
			emailValidated: booleanSchema(locale),
			isAdmin: booleanSchema(locale),
		},
		{
			description: userMessages.document.description[locale],
			invalid_type_error: userMessages.document.invalid[locale],
			required_error: userMessages.document.required[locale],
		}
	);
};

export const PublicUserBWSSchema = (locale: LanguagesI) => {
	const { firstName, lastName } = PersonalInformationSchema(locale).shape;
	return z.object<MyZodType<PublicUserI>>(
		{
			email: emailSchema(locale),
			phone: phoneSchema(locale),
			_id: mongoIDSchema(locale),
			firstName,
			lastName,
			enabled: booleanSchema(locale),
			emailValidated: booleanSchema(locale),
			lastLogin: stringDateSchema(locale),
			isAdmin: booleanSchema(locale),
		},
		{
			description: userMessages.document.description[locale],
			invalid_type_error: userMessages.document.invalid[locale],
			required_error: userMessages.document.required[locale],
		}
	);
};
export const AuthUserSchema = (locale: LanguagesI) =>
	z.object<MyZodType<UserAuthI>>(
		{
			user: PublicUserBWSSchema(locale),
			new: booleanSchema(locale).optional(),
		},
		{
			description: userMessages.document.description[locale],
			invalid_type_error: userMessages.document.invalid[locale],
			required_error: userMessages.document.required[locale],
		}
	);

export const NecessaryUserSchema = (locale: LanguagesI) =>
	GeneralUserSchema(locale);

/* --------------------------------- User Register Schema --------------------------------- */
export const userCreateAdminSchema = (locale: LanguagesI) => {
	const { firstName, lastName } = PersonalInformationSchema(locale).shape;
	return z.object<MyZodType<RegistrationAdminI>>(
		{
			email: emailSchema(locale),
			phone: phoneSchema(locale),
			firstName,
			lastName,
		},
		{
			description: userMessages.document.description[locale],
			invalid_type_error: userMessages.document.invalid[locale],
			required_error: userMessages.document.required[locale],
		}
	);
};
export const userRegisterSchema = (locale: LanguagesI) => {
	const schema = z.object<MyZodType<RegistrationUserI>>(
		{
			...userCreateAdminSchema(locale).shape,
			password: passwordSchema(locale),
			confirmPassword: passwordSchema(locale),
		},
		{
			description: userMessages.document.description[locale],
			invalid_type_error: userMessages.document.invalid[locale],
			required_error: userMessages.document.required[locale],
		}
	);
	schema.superRefine(({ confirmPassword, password }, ctx) => {
		if (confirmPassword !== password) {
			ctx.addIssue({
				code: 'custom',
				message: userMessages.password.invalid[locale],
			});
		}
	});
	return schema;
};

export const changePasswordSchema = (locale: LanguagesI) => {
	const schema = z
		.object<MyZodType<ChangePasswordI>>(
			{
				oldPassword: passwordSchema(locale),
				newPassword: passwordSchema(locale),
				confirmPassword: passwordSchema(locale),
			},
			{
				description: userMessages.document.description[locale],
				invalid_type_error: userMessages.document.invalid[locale],
				required_error: userMessages.document.required[locale],
			}
		)
		.refine(
			({ confirmPassword, newPassword }) =>
				confirmPassword === newPassword,
			{
				message: userMessages.password.invalid[locale],
				path: ['confirmPassword'],
			}
		);

	return schema;
};
