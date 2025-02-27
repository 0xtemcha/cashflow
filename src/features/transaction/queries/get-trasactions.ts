import { prisma } from '@/lib/prisma'

export const getTransactions = async () => {
	return await prisma.transaction.findMany({
		orderBy: {
			createdAt: 'desc',
		},
	})
}
