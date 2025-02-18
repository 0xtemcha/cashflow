import Link from 'next/link'
import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { TransactionItem } from '@/features/transaction/components/transaction-item'
import { getTransaction } from '@/features/transaction/queries/get-transaction'
import { transactionsPath } from '@/paths'

const TransactionPage = async ({
	params,
	// searchParams,
}: {
	params: Promise<{ transactionId: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
	// const queryParams = await searchParams
	const transactionId = (await params).transactionId
	const transaction = await getTransaction(transactionId)

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
		<div className="animate-fade-from-top flex justify-center">
			<TransactionItem transaction={transaction} isDetail={true} />
		</div>
	)
}

export default TransactionPage
