import { LucideMinus, LucidePlus } from 'lucide-react'
import Link from 'next/link'
import { Heading } from '@/components/heading'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { initialTransactions } from '@/mocked-data'
import { transactionPath } from '@/paths'

const TRANSACTION_TYPE_ICONS = {
	INCOME: <LucidePlus color="var(--color-green-500)" />,
	OUTCOME: <LucideMinus color="var(--color-destructive)" />,
}

const TransactionsPage = () => {
	return (
		<div className="flex flex-1 flex-col gap-y-8">
			<Heading
				title={'My Transactions'}
				description="All your transactions at one place"
			/>

			<div className="animate-fade-from-top flex flex-1 flex-col items-center gap-y-4">
				{initialTransactions.map((transaction) => (
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
				))}
			</div>
		</div>
	)
}

export default TransactionsPage
