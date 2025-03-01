import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { createTransaction } from '../actions/create-transaction'

const TransactionCreateForm = () => {
	return (
		<form action={createTransaction} className="flex flex-col gap-y-2">
			<Label htmlFor="title">Title</Label>
			<Input type="text" id="title" name="title" />

			<Label htmlFor="description">Description</Label>
			<Textarea id="description" name="description" />

			<Button type="submit">Add</Button>
		</form>
	)
}

export { TransactionCreateForm }
