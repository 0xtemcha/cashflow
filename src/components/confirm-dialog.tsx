import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from './ui/button'

type ConfirmDialogProps = {
	title?: string
	description?: string
	action: (payload: FormData) => void
	trigger: React.ReactElement
}

const ConfirmDialog = ({
	title = 'Are you absolutely sure?',
	description = 'This action cannot be undone. Make sure you understand the consequences.',
	action,
	trigger,
}: ConfirmDialogProps) => {
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
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
}

export { ConfirmDialog }
