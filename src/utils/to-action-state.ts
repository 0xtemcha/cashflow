import { ZodError } from 'zod'

export type ActionState = {
	message: string
	fieldErrors: Record<string, string[] | undefined>
	timestamp: number
	payload?: FormData
	status?: 'SUCCESS' | 'ERROR'
}

export const EMPTY_ACTION_STATE: ActionState = {
	message: '',
	fieldErrors: {},
	timestamp: Date.now(),
}

export const fromErrorToActionState = (error: unknown, formData?: FormData): ActionState => {
	if (error instanceof ZodError) {
		// if validation error with Zod, return first error message
		return {
			status: 'ERROR',
			message: '',
			fieldErrors: error.flatten().fieldErrors,
			timestamp: Date.now(),
			payload: formData,
		}
	} else if (error instanceof Error) {
		return {
			// if another error instance, return error message
			// e.g. database error
			status: 'ERROR',
			message: error.message,
			fieldErrors: {},
			timestamp: Date.now(),
			payload: formData,
		}
	} else {
		// if not an error instance but something else crashed
		// return generic error message
		return {
			status: 'ERROR',
			message: 'Unknown error occurred.',
			fieldErrors: {},
			timestamp: Date.now(),
			payload: formData,
		}
	}
}

export const toActionState = (status: ActionState['status'], message: string): ActionState => {
	return {
		status,
		message,
		fieldErrors: {},
		timestamp: Date.now(),
	}
}
