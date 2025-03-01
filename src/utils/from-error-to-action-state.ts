import { ZodError } from 'zod'

export type ActionState = { message: string; payload?: FormData }

export const fromErrorToActionState = (error: unknown, formData?: FormData): ActionState => {
	if (error instanceof ZodError) {
		// if validation error with Zod, return first error message
		return {
			message: error.errors[0].message,
			payload: formData,
		}
	} else if (error instanceof Error) {
		return {
			// if another error instance, return error message
			// e.g. database error
			message: error.message,
			payload: formData,
		}
	} else {
		// if not an error instance but something else crashed
		// return generic error message
		return {
			message: 'Unknown error occurred.',
			payload: formData,
		}
	}
}
