import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const initialTransactions = [
	{
		title: 'Transaction 1',
		description: 'Transaction 1 description',
		type: 'INCOME' as const,
		amount: 100,
	},
	{
		title: 'Transaction 2',
		description: 'Transaction 2 description',
		type: 'OUTCOME' as const,
		amount: 50,
	},
	{
		title: 'Transaction 3',
		description: 'Transaction 3 description',
		type: 'INCOME' as const,
		amount: 9999,
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
