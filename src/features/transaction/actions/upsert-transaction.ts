'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'
import { transactionPath, transactionsPath } from '@/paths'

const upsertTransactionSchema = z.object({
	title: z.string().min(1).max(191),
	description: z.string().min(1).max(1024),
})

export const upsertTransaction = async (
	id: string | undefined,
	_actionState: { message: string },
	formData: FormData,
) => {
	try {
		const data = upsertTransactionSchema.parse({
			title: formData.get('title'),
			description: formData.get('description'),
		})

		await prisma.transaction.upsert({
			where: {
				id: id || '',
			},
			update: data,
			create: data,
		})
	} catch (error) {
		return { message: `Something went wrong. ${error}`, payload: formData }
	}

	revalidatePath(transactionsPath())
	if (id) {
		redirect(transactionPath(id))
	}

	return { message: 'Transaction added.' }
}
