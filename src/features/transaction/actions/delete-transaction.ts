'use server'

import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { transactionsPath } from '@/paths'

export const deleteTransaction = async (id: string) => {
	await prisma.transaction.delete({
		where: {
			id,
		},
	})

	redirect(transactionsPath())
}
