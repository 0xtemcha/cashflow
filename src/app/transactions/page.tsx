import Link from 'next/link'
import { initialTransactions } from '@/mocked-data'
import { transactionPath } from '@/paths'

const TRANSACTION_TYPE_ICONS = {
	INCOME: '🤑',
	OUTCOME: '💸',
}

const TransactionsPage = () => {
	return (
		<div>
			{initialTransactions.map((transaction) => (
				<div key={transaction.id}>
					{TRANSACTION_TYPE_ICONS[transaction.type]}
					<h2 className="text-lg">{transaction.title}</h2>
					<Link
						href={transactionPath(transaction.id)}
						className="text-sm underline"
					>
						View
					</Link>
				</div>
			))}
		</div>
	)
}

export default TransactionsPage
