import { notFound } from 'next/navigation'
import { RedirectToast } from '@/components/redirect-toast'
import { TransactionItem } from '@/features/transaction/components/transaction-item'
import { getTransaction } from '@/features/transaction/queries/get-transaction'

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
		notFound()
	}

	return (
		<>
			<div className="animate-fade-from-top flex justify-center">
				<TransactionItem transaction={transaction} isDetail={true} />
			</div>
			<RedirectToast />
		</>
	)
}

export default TransactionPage
