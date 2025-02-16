import Link from 'next/link'
import { initialTransactions } from '@/mocked-data'

const TransactionsPage = () => {
	return (
		<div>
			{initialTransactions.map((transaction) => (
				<div key={transaction.id}>
					<h2 className="text-lg">{transaction.title}</h2>

					<Link
						href={`/transactions/${transaction.id}`}
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
