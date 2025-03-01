'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'
import { transactionsPath } from '@/paths'

export const createTransaction = async (formData: FormData) => {
	const data = {
		title: formData.get('title'),
		description: formData.get('description'),
	}

	await prisma.transaction.create({
		data: {
			title: data.title as string,
			description: data.description as string,
		},
	})

	revalidatePath(transactionsPath())
}
