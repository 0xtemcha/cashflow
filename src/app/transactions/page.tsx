import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Heading } from '@/components/heading'
import { Placeholder } from '@/components/placeholder'
import { Spinner } from '@/components/spinner'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TransactionCreateForm } from '@/features/transaction/components/transaction-create-form'
import { TransactionList } from '@/features/transaction/components/transaction-list'

// Examples of how to hop out of static rendering and into dynamic rendering

// Force the whole page to be dynamic
// export const dynamic = 'force-dynamic'

// Time based cache (ISR)
// export const revalidate = 30

const TransactionsPage = async () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading title={'My Transactions'} description="All your transactions at one place" />

			<Card className="w-full max-w-[580px] self-center">
				<CardHeader>
					<CardTitle>Add Transaction</CardTitle>
					<CardDescription>A new Transaction will be added</CardDescription>
				</CardHeader>
				<CardContent>
					<TransactionCreateForm />
				</CardContent>
			</Card>

			<ErrorBoundary fallback={<Placeholder label="Something went wrong. (using react-error-boundary)" />}>
				<Suspense fallback={<Spinner />}>
					<TransactionList />
				</Suspense>
			</ErrorBoundary>
		</div>
	)
}

export default TransactionsPage
