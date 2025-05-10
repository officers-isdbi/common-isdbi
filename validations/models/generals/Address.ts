import { type MyZodType, z } from '^common/defaultZod';

// Define message constants
const addressMessages = {
	province: {
		required: {
			en: 'Province is required',
			fr: 'La province est requise',
			ar: 'المقاطعة مطلوبة',
		},
		small: {
			en: 'Province id must be at least 1',
			fr: "L'id de la province doit être au moins 1",
			ar: 'يجب أن يكون معرف المقاطعة على الأقل 1',
		},
		big: {
			en: 'Province id must be at most 58',
			fr: "L'id de la province doit être au plus 58",
			ar: 'يجب أن يكون معرف المقاطعة على الأكثر 58',
		},
	},
	city: {
		required: {
			en: 'City is required',
			fr: 'La ville est requise',
			ar: 'المدينة مطلوبة',
		},
		small: {
			en: 'City id must be at least 0',
			fr: "L'id de la ville doit être au moins 0",
			ar: 'يجب أن يكون معرف المدينة على الأقل 0',
		},
		big: {
			en: 'City id must be at most 100000',
			fr: "L'id de la ville doit être au plus 100000",
			ar: 'يجب أن يكون معرف المدينة على الأكثر 100000',
		},
	},
	address: {
		required: {
			en: 'Address is required',
			fr: "L'adresse est requise",
			ar: 'العنوان مطلوب',
		},
	},
	document: {
		description: {
			en: 'Address document Schema',
			fr: "Schéma de document d'adresse",
			ar: 'مخطط وثيقة العنوان',
		},
		invalid: {
			en: 'Invalid Address Schema',
			fr: "Schéma d'adresse invalide",
			ar: 'مخطط عنوان غير صالح',
		},
		required: {
			en: 'Address document Schema is required',
			fr: "Le schéma de document d'adresse est requis",
			ar: 'مخطط وثيقة العنوان مطلوب',
		},
	},
};

export const AddressValidationSchema = (locale: LanguagesI) => {
	return z.object<MyZodType<AddressI>>(
		{
			province: z
				.number({
					required_error: addressMessages.province.required[locale],
					coerce: true,
				})
				.gte(1, addressMessages.province.small[locale])
				.max(58, addressMessages.province.big[locale]),
			city: z
				.number({
					required_error: addressMessages.city.required[locale],
					coerce: true,
				})
				.gte(0, addressMessages.city.small[locale])
				.max(100000, addressMessages.city.big[locale]),
			address: z
				.string({
					required_error: addressMessages.address.required[locale],
				})
				.max(120)
				.optional(),
		},
		{
			description: addressMessages.document.description[locale],
			invalid_type_error: addressMessages.document.invalid[locale],
			required_error: addressMessages.document.required[locale],
		}
	);
};
