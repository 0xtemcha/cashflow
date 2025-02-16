import Link from 'next/link'
import { initialTransactions } from '@/mocked-data'
import { transactionPath } from '@/paths'

const TransactionsPage = () => {
	return (
		<div>
			{initialTransactions.map((transaction) => (
				<div key={transaction.id}>
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
