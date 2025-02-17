import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { transactionPath } from '@/paths'
import { TRANSACTION_TYPE_ICONS } from '../constants'
import type { Transaction } from '../types'

type TransactionItemProps = {
	transaction: Transaction
}

const TransactionItem = ({ transaction }: TransactionItemProps) => {
	return (
		<Card key={transaction.id} className="w-full max-w-[560px]">
			<CardContent className="flex w-full items-center justify-between gap-x-6 p-4">
				<div className="flex flex-col gap-1 overflow-x-hidden">
					<CardTitle className="truncate">{transaction.title}</CardTitle>
					<p className="text-muted-foreground line-clamp-1 text-sm">
						{transaction.description}
					</p>
				</div>
				<div className="flex items-center gap-4">
					{TRANSACTION_TYPE_ICONS[transaction.type]}
					<Link
						href={transactionPath(transaction.id)}
						className={`text-sm ${buttonVariants({ variant: 'outline' })}`}
					>
						View
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}

export { TransactionItem }
