import React from 'react'
import { getTransactions } from '../queries/get-trasactions'
import { TransactionItem } from './transaction-item'

const TransactionList = async () => {
	const transactions = await getTransactions()

	return (
		<div className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
			{transactions.map((transaction) => (
				<TransactionItem key={transaction.id} transaction={transaction} />
			))}
		</div>
	)
}

export { TransactionList }
