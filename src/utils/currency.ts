import { MyBig } from '@/lib/big'

export const toCent = (amount: number) => new MyBig(amount).mul(100).round(0).toNumber()

export const fromCent = (amount: number) => new MyBig(amount).div(100).round(2).toNumber()

export const toCurrencyFromCent = (amount: number) =>
	new Intl.NumberFormat('hr-HR', {
		style: 'currency',
		currency: 'UAH',
	}).format(fromCent(amount))
