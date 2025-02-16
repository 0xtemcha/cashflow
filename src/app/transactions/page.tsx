import Link from 'next/link'
import { initialTransactions } from '@/mocked-data'
import { transactionPath } from '@/paths'

const TRANSACTION_TYPE_ICONS = {
	INCOME: '🤑',
	OUTCOME: '💸',
}

const TransactionsPage = () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">My Transactions</h2>
				<p className="text-muted-foreground text-sm">
					All your transactions at one place
				</p>
			</div>

			<div className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
				{initialTransactions.map((transaction) => (
					<div
						key={transaction.id}
						className="w-full max-w-[420px] rounded border border-slate-100 p-4"
					>
						<div>{TRANSACTION_TYPE_ICONS[transaction.type]}</div>
						<h3 className="truncate text-lg font-semibold">
							{transaction.title}
						</h3>
						<p className="truncate text-sm text-slate-500">
							{transaction.description}
						</p>
						<Link
							href={transactionPath(transaction.id)}
							className="text-sm underline"
						>
							View
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default TransactionsPage
