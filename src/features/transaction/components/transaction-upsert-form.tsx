import type { Transaction } from '@prisma/client'
import React from 'react'
import { SubmitButton } from '@/components/form/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { upsertTransaction } from '../actions/upsert-transaction'

type TransactionUpsertFormProps = {
	transaction?: Transaction
}

const TransactionUpsertForm = ({ transaction }: TransactionUpsertFormProps) => {
	return (
		<form action={upsertTransaction.bind(null, transaction?.id)} className="flex flex-col gap-y-2">
			<Label htmlFor="title">Title</Label>
			<Input type="text" id="title" name="title" defaultValue={transaction?.title} />

			<Label htmlFor="description">Description</Label>
			<Textarea id="description" name="description" defaultValue={transaction?.description} />

			<SubmitButton label={transaction ? 'Edit' : 'Add'} />
		</form>
	)
}

export { TransactionUpsertForm }
