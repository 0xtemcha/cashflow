'use client'

import { Transaction, type TransactionType } from '@prisma/client'
import { LucideTrash } from 'lucide-react'
import { toast } from 'sonner'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { updateTransactionType } from '../actions/update-transaction-type'
import { TRANSACTION_STATUS_LABELS } from '../constants'

type TransactionMoreMenuProps = {
	transaction: Transaction
	trigger: React.ReactElement
}

const TransactionMoreMenu = ({ transaction, trigger }: TransactionMoreMenuProps) => {
	const deleteButton = (
		<DropdownMenuItem>
			<LucideTrash className="size-4" />
			<span>Delete</span>
		</DropdownMenuItem>
	)

	const handleUpdateTransactionType = async (value: string) => {
		const result = await updateTransactionType(transaction.id, value as TransactionType)

		if (result.status === 'ERROR') {
			toast.error(result.message)
		} else if (result.status === 'SUCCESS') {
			toast.success(result.message)
		}
	}

	const transactionStatusRadioGroupItems = (
		<DropdownMenuRadioGroup value={transaction.type} onValueChange={handleUpdateTransactionType}>
			{(Object.keys(TRANSACTION_STATUS_LABELS) as Array<TransactionType>).map((key) => (
				<DropdownMenuRadioItem key={key} value={key}>
					{TRANSACTION_STATUS_LABELS[key]}
				</DropdownMenuRadioItem>
			))}
		</DropdownMenuRadioGroup>
	)

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" side="right">
				{transactionStatusRadioGroupItems}
				<DropdownMenuSeparator />
				{deleteButton}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export { TransactionMoreMenu }
