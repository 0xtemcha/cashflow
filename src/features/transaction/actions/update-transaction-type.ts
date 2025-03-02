'use server'

import { type TransactionType } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { fromErrorToActionState, toActionState } from '@/components/form/utils/to-action-state'
import { prisma } from '@/lib/prisma'
import { transactionsPath } from '@/paths'

export const updateTransactionType = async (id: string, type: TransactionType) => {
	try {
		await prisma.transaction.update({
			where: {
				id,
			},
			data: {
				type,
			},
		})
	} catch (error) {
		return fromErrorToActionState(error)
	}

	revalidatePath(transactionsPath())

	return toActionState('SUCCESS', 'Transaction type updated.')
}
