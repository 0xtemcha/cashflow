import { prisma } from '@/lib/prisma'
import type { Transaction } from '../types'

export const getTransactions = async (): Promise<Transaction[]> => {
	return await prisma.transaction.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})
}
