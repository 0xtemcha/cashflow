import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const initialTransactions = [
	{
		title: 'Transaction 1',
		description: 'Transaction 1 description',
		type: 'INCOME' as const,
	},
	{
		title: 'Transaction 2',
		description: 'Transaction 2 description',
		type: 'OUTCOME' as const,
	},
]

const seed = async () => {
	const t0 = performance.now()
	console.log('DB Seed: Started ...')

	await prisma.transaction.deleteMany()

	await prisma.transaction.createMany({
		data: initialTransactions,
	})

	const t1 = performance.now()
	console.log(`DB Seed: Finished (${t1 - t0}ms)`)
}

seed()
