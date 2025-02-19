import { Suspense } from 'react'
import { Heading } from '@/components/heading'
import { TransactionList } from '@/features/transaction/components/transaction-list'

const TransactionsPage = async () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading
				title={'My Transactions'}
				description="All your transactions at one place"
			/>

			<Suspense>
				<TransactionList />
			</Suspense>
		</div>
	)
}

export default TransactionsPage
