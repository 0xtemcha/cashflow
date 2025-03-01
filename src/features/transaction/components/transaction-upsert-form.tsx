'use client'

import type { Transaction } from '@prisma/client'
import React, { useActionState } from 'react'
import { SubmitButton } from '@/components/form/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { upsertTransaction } from '../actions/upsert-transaction'

type TransactionUpsertFormProps = {
	transaction?: Transaction
}

const TransactionUpsertForm = ({ transaction }: TransactionUpsertFormProps) => {
	const [actionState, action] = useActionState(upsertTransaction.bind(null, transaction?.id), {
		message: '',
	})

	return (
		<form action={action} className="flex flex-col gap-y-2">
			<Label htmlFor="title">Title</Label>
			<Input
				type="text"
				id="title"
				name="title"
				defaultValue={(actionState.payload?.get('title') as string) ?? transaction?.title}
			/>

			<Label htmlFor="description">Description</Label>
			<Textarea
				id="description"
				name="description"
				defaultValue={(actionState.payload?.get('description') as string) ?? transaction?.description}
			/>

			<SubmitButton label={transaction ? 'Edit' : 'Add'} />

			{actionState.message}
		</form>
	)
}

export { TransactionUpsertForm }
