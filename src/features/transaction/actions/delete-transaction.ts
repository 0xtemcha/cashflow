'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { transactionsPath } from '@/paths'

export const deleteTransaction = async (id: string) => {
	await prisma.transaction.delete({
		where: {
			id,
		},
	})

	// On-Demand Caching (ISR, Revalidate)
	revalidatePath(transactionsPath())

	redirect(transactionsPath())
}
