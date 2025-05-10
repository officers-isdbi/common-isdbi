import type { ZodTypeAny } from 'zod';

import { z } from '^common/defaultZod';

export const ServiceResponseSchema = <T extends ZodTypeAny>(dataSchema: T) =>
	z.object({
		success: z.boolean(),
		message: z.string(),
		data: dataSchema.optional(),
		statusCode: z.number(),
	});
