import './globals.css'
import { LucideArrowRightLeft } from 'lucide-react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { homePath, transactionsPath } from '@/paths'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Cashflow',
	description: 'Personal finance tracking app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<nav className="bg-background/75 supports-backdrop-blur:bg-background/60 fixed top-0 right-0 left-0 z-20 flex w-full justify-between border-b px-5 py-2.5 backdrop-blur">
					<div>
						<Link
							href={homePath()}
							className={buttonVariants({ variant: 'ghost' })}
						>
							<LucideArrowRightLeft />
							<h1 className="text-lg font-semibold">Cashflow</h1>
						</Link>
					</div>
					<div>
						<Link
							href={transactionsPath()}
							className={buttonVariants({ variant: 'default' })}
						>
							My Transactions
						</Link>
					</div>
				</nav>
				<main className="bg-secondary/20 flex min-h-screen flex-1 flex-col overflow-x-hidden overflow-y-auto px-8 py-24">
					{children}
				</main>
			</body>
		</html>
	)
}
