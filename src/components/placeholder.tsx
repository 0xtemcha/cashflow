import { LucideMessageSquareWarning } from 'lucide-react'
import React, { cloneElement, type JSX } from 'react'

type PlaceholderProps = {
	label: string
	icon?: JSX.Element
	button?: JSX.Element
}

const Placeholder = ({
	label,
	icon = <LucideMessageSquareWarning />,
	button = <div />,
}: PlaceholderProps) => {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-y-2 self-center">
			{cloneElement(icon, {
				className: 'size-16',
			})}
			<h2 className="text-center text-lg">{label}</h2>
			{cloneElement(button, {
				className: 'h-10',
			})}
		</div>
	)
}

export { Placeholder }
