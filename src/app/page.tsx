import Link from 'next/link'
import { transactionsPath } from '@/paths'

const HomePage = () => {
	return (
		<div>
			<h2 className="text-lg">HomePage</h2>

			<Link href={transactionsPath()}>My Transactions</Link>
		</div>
	)
}

export default HomePage
