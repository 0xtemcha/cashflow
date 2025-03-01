import type { Transaction } from '@prisma/client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { editTransaction } from '../actions/edit-transaction'

type TransactionEditFormProps = {
	transaction: Transaction
}

const TransactionEditForm = ({ transaction }: TransactionEditFormProps) => {
	return (
		<form action={editTransaction.bind(null, transaction.id)} className="flex flex-col gap-y-2">
			<Label htmlFor="title">Title</Label>
			<Input type="text" id="title" name="title" defaultValue={transaction.title} />

			<Label htmlFor="description">Description</Label>
			<Textarea id="description" name="description" defaultValue={transaction.description} />

			<Button type="submit">Edit</Button>
		</form>
	)
}

export { TransactionEditForm }
