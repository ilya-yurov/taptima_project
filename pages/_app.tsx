import type { AppProps } from 'next/app'
import { Global, ThemeProvider } from '@emotion/react'
import { baseTheme } from '../styles/baseTheme'
import { GlobalTheme } from '../styles/globalTheme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={baseTheme}>
			<Global styles={GlobalTheme} />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
