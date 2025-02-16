const TransactionPage = async ({
	params,
	searchParams,
}: {
	params: Promise<{ transactionId: string }>
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
	const transactionId = (await params).transactionId
	const queryParams = await searchParams

	return (
		<div>
			<h2 className="text-lg">Transaction: {transactionId}</h2>
			<p>Search params: {JSON.stringify(queryParams)}</p>
		</div>
	)
}

export default TransactionPage
