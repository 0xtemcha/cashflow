'use client'

import type { Transaction } from '@prisma/client'
import React, { useActionState } from 'react'
import { toast } from 'sonner'
import { FieldError } from '@/components/form/field-error'
import { SubmitButton } from '@/components/form/submit-button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useActionFeedback } from '@/hooks/use-action-feedback'
import { EMPTY_ACTION_STATE } from '@/utils/to-action-state'
import { upsertTransaction } from '../actions/upsert-transaction'

type TransactionUpsertFormProps = {
	transaction?: Transaction
}

const TransactionUpsertForm = ({ transaction }: TransactionUpsertFormProps) => {
	const [actionState, action] = useActionState(upsertTransaction.bind(null, transaction?.id), EMPTY_ACTION_STATE)

	useActionFeedback(actionState, {
		onSuccess: ({ actionState }) => {
			if (actionState.message) {
				toast.success(actionState.message)
			}
		},
		onError: ({ actionState }) => {
			if (actionState.message) {
				toast.error(actionState.message)
			}
		},
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
			<FieldError actionState={actionState} name="title" />

			<Label htmlFor="description">Description</Label>
			<Textarea
				id="description"
				name="description"
				defaultValue={(actionState.payload?.get('description') as string) ?? transaction?.description}
			/>
			<FieldError actionState={actionState} name="description" />

			<SubmitButton label={transaction ? 'Edit' : 'Add'} />
		</form>
	)
}

export { TransactionUpsertForm }
