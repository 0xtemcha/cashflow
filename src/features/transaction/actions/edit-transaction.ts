'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { transactionsPath } from '@/paths'

export const editTransaction = async (id: string, formData: FormData) => {
	const data = {
		title: formData.get('title'),
		description: formData.get('description'),
	}

	await prisma.transaction.update({
		where: {
			id,
		},
		data: {
			title: data.title as string,
			description: data.description as string,
		},
	})

	revalidatePath(transactionsPath())
	redirect(transactionsPath())
}
