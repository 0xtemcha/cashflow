'use server'

import { prisma } from '@/lib/prisma'

export const deleteTransaction = async (id: string) => {
	await prisma.transaction.delete({
		where: {
			id,
		},
	})
}
