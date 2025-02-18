import { Heading } from '@/components/heading'
import { TransactionItem } from '@/features/transaction/components/transaction-item'
import { getTransactions } from '@/features/transaction/queries/get-trasactions'

const TransactionsPage = async () => {
	const transactions = await getTransactions()

	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading
				title={'My Transactions'}
				description="All your transactions at one place"
			/>

			<div className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
				{transactions.map((transaction) => (
					<TransactionItem key={transaction.id} transaction={transaction} />
				))}
			</div>
		</div>
	)
}

export default TransactionsPage
