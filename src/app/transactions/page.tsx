import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { CardCompact } from '@/components/card-compact'
import { Heading } from '@/components/heading'
import { Placeholder } from '@/components/placeholder'
import { RedirectToast } from '@/components/redirect-toast'
import { Spinner } from '@/components/spinner'
import { TransactionList } from '@/features/transaction/components/transaction-list'
import { TransactionUpsertForm } from '@/features/transaction/components/transaction-upsert-form'

// Examples of how to hop out of static rendering and into dynamic rendering

// Force the whole page to be dynamic
// export const dynamic = 'force-dynamic'

// Time based cache (ISR)
// export const revalidate = 30

const TransactionsPage = async () => {
	return (
		<>
			<div className="flex flex-1 flex-col gap-y-8">
				<Heading title={'My Transactions'} description="All your transactions at one place" />

				<CardCompact
					title="Add Transaction"
					description="A new Transaction will be added"
					content={<TransactionUpsertForm />}
					className="w-full max-w-[580px] self-center"
				/>

				<ErrorBoundary fallback={<Placeholder label="Something went wrong. (using react-error-boundary)" />}>
					<Suspense fallback={<Spinner />}>
						<TransactionList />
					</Suspense>
				</ErrorBoundary>
			</div>
			<RedirectToast />
		</>
	)
}

export default TransactionsPage
