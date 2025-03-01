'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { transactionPath, transactionsPath } from '@/paths'

export const upsertTransaction = async (
	id: string | undefined,
	_actionState: { message: string },
	formData: FormData,
) => {
	const data = {
		title: formData.get('title') as string,
		description: formData.get('description') as string,
	}

	await prisma.transaction.upsert({
		where: {
			id: id || '',
		},
		update: data,
		create: data,
	})

	revalidatePath(transactionsPath())
	if (id) {
		redirect(transactionPath(id))
	}

	return { message: 'Transaction added.' }
}
