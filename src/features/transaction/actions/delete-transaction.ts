'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { setCookieByKey } from '@/actions/cookies'
import { fromErrorToActionState } from '@/components/form/utils/to-action-state'
import { prisma } from '@/lib/prisma'
import { transactionsPath } from '@/paths'

export const deleteTransaction = async (id: string) => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	try {
		await prisma.transaction.delete({
			where: {
				id,
			},
		})
	} catch (error) {
		return fromErrorToActionState(error)
	}

	// On-Demand Caching (ISR, Revalidate)
	revalidatePath(transactionsPath())
	await setCookieByKey('toast', 'Ticket deleted')
	redirect(transactionsPath())
}
