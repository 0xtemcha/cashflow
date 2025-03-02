'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { setCookieByKey } from '@/actions/cookies'
import { type ActionState, fromErrorToActionState, toActionState } from '@/components/form/utils/to-action-state'
import { prisma } from '@/lib/prisma'
import { transactionPath, transactionsPath } from '@/paths'
import { toCent } from '@/utils/currency'

const upsertTransactionSchema = z.object({
	title: z.string().min(1).max(191),
	description: z.string().min(1).max(1024),
	amount: z.coerce.number().positive(),
})

export const upsertTransaction = async (id: string | undefined, _actionState: ActionState, formData: FormData) => {
	try {
		const data = upsertTransactionSchema.parse({
			title: formData.get('title'),
			description: formData.get('description'),
			amount: formData.get('amount'),
		})

		const dbData = {
			...data,
			amount: toCent(data.amount),
		}

		await prisma.transaction.upsert({
			where: {
				id: id || '',
			},
			update: dbData,
			create: dbData,
		})
	} catch (error) {
		return fromErrorToActionState(error, formData)
	}

	revalidatePath(transactionsPath())
	if (id) {
		await setCookieByKey('toast', 'Ticket updated')
		redirect(transactionPath(id))
	}

	return toActionState('SUCCESS', 'Transaction added.')
}
