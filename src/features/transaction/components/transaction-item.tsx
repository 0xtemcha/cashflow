import { LucideArrowUpRightFromSquare } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { transactionPath } from '@/paths'
import { TRANSACTION_TYPE_ICONS } from '../constants'
import type { Transaction } from '../types'

type TransactionItemProps = {
	transaction: Transaction
	isDetail?: boolean
}

const TransactionItem = ({ transaction, isDetail }: TransactionItemProps) => {
	const detailButton = (
		<Link
			href={transactionPath(transaction.id)}
			className={`text-sm ${buttonVariants({ variant: 'outline', size: 'icon' })}`}
		>
			<LucideArrowUpRightFromSquare />
		</Link>
	)
	return (
		<div className="flex w-full max-w-[580px] gap-x-1">
			<Card className="w-full">
				<CardContent className="flex w-full items-start justify-between gap-x-6 p-4">
					<div className="flex flex-col gap-1 overflow-x-hidden">
						<CardTitle className="truncate">{transaction.title}</CardTitle>

						<p
							className={cn('text-muted-foreground text-sm', {
								'line-clamp-1': !isDetail,
							})}
						>
							{transaction.description}
						</p>
					</div>
					<div className="flex items-center gap-4">
						{TRANSACTION_TYPE_ICONS[transaction.type]}
					</div>
				</CardContent>
			</Card>

			{isDetail ? null : (
				<div className="flex flex-col gap-y-1">{detailButton}</div>
			)}
		</div>
	)
}

export { TransactionItem }
