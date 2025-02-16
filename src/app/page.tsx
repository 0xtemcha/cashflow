import Link from 'next/link'
import { transactionsPath } from '@/paths'

const HomePage = () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<div>
				<h2 className="text-3xl font-bold tracking-tight">Home</h2>
				<p className="text-muted-foreground text-sm">
					Your home place to start
				</p>
			</div>

			<div className="flex flex-1 flex-col items-center">
				<Link href={transactionsPath()} className="text-sm underline">
					My Transactions
				</Link>
			</div>
		</div>
	)
}

export default HomePage
