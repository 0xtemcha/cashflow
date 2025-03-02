import { Transaction } from '@prisma/client'
import { LucideTrash } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

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

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" side="right">
				{deleteButton}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export { TransactionMoreMenu }
