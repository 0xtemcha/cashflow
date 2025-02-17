import Link from 'next/link'
import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { initialTransactions } from '@/mocked-data'
import { transactionsPath } from '@/paths'

const TransactionPage = async ({
	params,
	// searchParams,
}: {
	params: Promise<{ transactionId: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
	const transactionId = (await params).transactionId
	// const queryParams = await searchParams
	const transaction = initialTransactions.find(
		(transaction) => transaction.id === transactionId,
	)

	if (!transaction) {
		return (
			<Placeholder
				label="Transaction not found"
				button={
					<Button asChild variant="outline">
						<Link href={transactionsPath()}>My Transactions</Link>
					</Button>
				}
			/>
		)
	}

	return (
		<div>
			<h2 className="text-lg">{transaction.title}</h2>
			<p className="text-sm">{transaction.description}</p>
		</div>
	)
}

export default TransactionPage
