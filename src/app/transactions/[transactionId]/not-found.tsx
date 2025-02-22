import Link from 'next/link'
import React from 'react'
import { Placeholder } from '@/components/placeholder'
import { Button } from '@/components/ui/button'
import { transactionsPath } from '@/paths'

const NotFound = () => {
	return (
		<Placeholder
			label="We could not find your trsansaction."
			button={
				<Button asChild variant="outline">
					<Link href={transactionsPath()}>My Transactions</Link>
				</Button>
			}
		/>
	)
}

export default NotFound
