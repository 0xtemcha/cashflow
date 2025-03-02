import { Transaction, type TransactionType } from '@prisma/client'
import { LucideTrash } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
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

	const transactionStatusRadioGroupItems = (
		<DropdownMenuRadioGroup value={transaction.type}>
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
