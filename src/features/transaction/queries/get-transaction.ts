import { prisma } from '@/lib/prisma'
import type { Transaction } from '../types'

export const getTransaction = async (id: string): Promise<Transaction | null> => {
	return await prisma.transaction.findUnique({
		where: {
			id,
		},
	})
}
