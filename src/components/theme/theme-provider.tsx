import { ThemeProvider as BaseThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<BaseThemeProvider attribute="class" defaultTheme="system" enableSystem>
			{children}
		</BaseThemeProvider>
	)
}

export { ThemeProvider }
