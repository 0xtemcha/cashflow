import { Suspense } from 'react'
import { Heading } from '@/components/heading'
import { Spinner } from '@/components/spinner'
import { TransactionList } from '@/features/transaction/components/transaction-list'

const TransactionsPage = async () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading
				title={'My Transactions'}
				description="All your transactions at one place"
			/>

			<Suspense fallback={<Spinner />}>
				<TransactionList />
			</Suspense>
		</div>
	)
}

export default TransactionsPage
