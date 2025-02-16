import { initialTransactions } from '@/mocked-data'

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
		return <div>Transaction not found</div>
	}

	return (
		<div>
			<h2 className="text-lg">{transaction.title}</h2>
			<p className="text-sm">{transaction.description}</p>
		</div>
	)
}

export default TransactionPage
