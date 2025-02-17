import { LucideArrowRightLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { homePath, transactionsPath } from '@/paths'
import { ThemeSwitcher } from './theme/theme-switcher'
import { buttonVariants } from './ui/button'

const Header = () => {
	return (
		<nav className="bg-background/75 supports-backdrop-blur:bg-background/60 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
			<div className="flex items-center gap-x-2">
				<Link
					href={homePath()}
					className={buttonVariants({ variant: 'ghost' })}
				>
					<LucideArrowRightLeft />
					<h1 className="text-lg font-semibold">Cashflow</h1>
				</Link>
			</div>
			<div className="flex items-center gap-x-2">
				<ThemeSwitcher />
				<Link
					href={transactionsPath()}
					className={buttonVariants({ variant: 'default' })}
				>
					My Transactions
				</Link>
			</div>
		</nav>
	)
}

export { Header }
