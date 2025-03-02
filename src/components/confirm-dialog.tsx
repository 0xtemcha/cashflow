import { cloneElement, useState } from 'react'
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from './ui/button'

type UseConfirmDialogArgs = {
	title?: string
	description?: string
	action: (payload: FormData) => void
	trigger: React.ReactElement
}

const useConfirmDialog = ({
	title = 'Are you absolutely sure?',
	description = 'This action cannot be undone. Make sure you understand the consequences.',
	action,
	trigger,
}: UseConfirmDialogArgs) => {
	const [isOpen, setIsOpen] = useState(false)

	const dialogTrigger = cloneElement(trigger, {
		onClick: () => setIsOpen((state) => !state),
	} as React.HTMLAttributes<HTMLElement>)

	const dialog = (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>{title}</AlertDialogTitle>
					<AlertDialogDescription>{description}</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<form action={action}>
						<Button type="submit">Confirm</Button>
					</form>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)

	return [dialogTrigger, dialog] as const
}

export { useConfirmDialog }
