import { notFound } from 'next/navigation'
import React from 'react'
import { CardCompact } from '@/components/card-compact'
import { TransactionEditForm } from '@/features/transaction/components/transaction-edit-form'
import { getTransaction } from '@/features/transaction/queries/get-transaction'

type EditTransactionPageProps = {
	params: Promise<{ transactionId: string }>
}

const EditTransactionPage = async ({ params }: EditTransactionPageProps) => {
	const { transactionId } = await params
	const transaction = await getTransaction(transactionId)

	if (!transaction) {
		notFound()
	}

	return (
		<div className="flex flex-1 flex-col items-center justify-center">
			<CardCompact
				title="Edit Transaction"
				description="Edit your transaction"
				content={<TransactionEditForm transaction={transaction} />}
				className="animate-fade-from-top w-full max-w-[580px]"
			/>
		</div>
	)
}

export default EditTransactionPage
