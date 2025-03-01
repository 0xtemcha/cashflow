'use client'

import type { Transaction } from '@prisma/client'
import { LucideLoaderCircle } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { upsertTransaction } from '../actions/upsert-transaction'

type TransactionUpsertFormProps = {
	transaction?: Transaction
}

const TransactionUpsertForm = ({ transaction }: TransactionUpsertFormProps) => {
	const [isPending, startTransition] = React.useTransition()

	const upsertTransactionAction = (formData: FormData) => {
		startTransition(async () => {
			console.log(upsertTransaction.bind(null, transaction?.id))
			await upsertTransaction.bind(null, transaction?.id)(formData)
		})
	}

	return (
		<form action={upsertTransactionAction} className="flex flex-col gap-y-2">
			<Label htmlFor="title">Title</Label>
			<Input type="text" id="title" name="title" defaultValue={transaction?.title} />

			<Label htmlFor="description">Description</Label>
			<Textarea id="description" name="description" defaultValue={transaction?.description} />

			<Button type="submit" disabled={isPending}>
				{isPending && <LucideLoaderCircle className="animate-spin" />}
				{transaction ? 'Edit' : 'Add'}
			</Button>
		</form>
	)
}

export { TransactionUpsertForm }
