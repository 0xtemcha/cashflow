export type TransactionType = 'INCOME' | 'OUTCOME'

export type Transaction = {
	id: string
	title: string
	description: string
	type: TransactionType
}
