import { initialTransactions } from '@/mocked-data'
import type { Transaction } from '../types'

export const getTransactions = async (): Promise<Transaction[]> => {
	await new Promise((resolve) => setTimeout(resolve, 2000))

	return new Promise((resolve) => {
		resolve(initialTransactions)
	})
}
