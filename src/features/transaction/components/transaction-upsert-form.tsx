'use client'

import type { Transaction } from '@prisma/client'
import React, { useActionState } from 'react'
import { FieldError } from '@/components/form/field-error'
import { Form } from '@/components/form/form'
import { SubmitButton } from '@/components/form/submit-button'
import { EMPTY_ACTION_STATE } from '@/components/form/utils/to-action-state'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { fromCent } from '@/utils/currency'
import { upsertTransaction } from '../actions/upsert-transaction'

type TransactionUpsertFormProps = {
	transaction?: Transaction
}

const TransactionUpsertForm = ({ transaction }: TransactionUpsertFormProps) => {
	const [actionState, action] = useActionState(upsertTransaction.bind(null, transaction?.id), EMPTY_ACTION_STATE)

	return (
		<Form action={action} actionState={actionState}>
			<Label htmlFor="title">Title</Label>
			<Input
				type="text"
				id="title"
				name="title"
				defaultValue={(actionState.payload?.get('title') as string) ?? transaction?.title}
			/>
			<FieldError actionState={actionState} name="title" />

			<Label htmlFor="description">Description</Label>
			<Textarea
				id="description"
				name="description"
				defaultValue={(actionState.payload?.get('description') as string) ?? transaction?.description}
			/>
			<FieldError actionState={actionState} name="description" />

			<div className="mb-1 w-full">
				<Label htmlFor="amount">Amount (UAH)</Label>
				<Input
					id="amount"
					name="amount"
					type="number"
					step={0.01}
					defaultValue={
						(actionState.payload?.get('amount') as string) ?? (transaction?.amount ? fromCent(transaction?.amount) : '')
					}
				/>
				<FieldError actionState={actionState} name="amount" />
			</div>

			<SubmitButton label={transaction ? 'Edit' : 'Add'} />
		</Form>
	)
}

export { TransactionUpsertForm }
