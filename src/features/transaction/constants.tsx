import { LucideMinus, LucidePlus } from 'lucide-react'

export const TRANSACTION_TYPE_ICONS = {
	INCOME: <LucidePlus color="var(--color-green-500)" />,
	OUTCOME: <LucideMinus color="var(--color-destructive)" />,
}

export const TRANSACTION_STATUS_LABELS = {
	INCOME: 'Income',
	OUTCOME: 'Outcome',
}
