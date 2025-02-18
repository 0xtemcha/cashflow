import { initialTransactions } from '@/mocked-data'
import type { Transaction } from '../types'

export const getTransaction = async (
	id: string,
): Promise<Transaction | null> => {
	await new Promise((resolve) => setTimeout(resolve, 2000))

	const maybeTransaction = initialTransactions.find(
		(transaction) => transaction.id === id,
	)

	return new Promise((resolve) => {
		resolve(maybeTransaction ?? null)
	})
}
