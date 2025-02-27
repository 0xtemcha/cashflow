import { prisma } from '@/lib/prisma'

export const getTransaction = async (id: string) => {
	return await prisma.transaction.findUnique({
		where: {
			id,
		},
	})
}
