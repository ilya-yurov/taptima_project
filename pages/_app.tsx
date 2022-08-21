import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import store from '../src/redux/redux-store'
import {ThemeProvider} from '@emotion/react'
import {baseTheme} from '../styles/baseTheme'

function MyApp({Component, pageProps}: AppProps) {

	return (
		<Provider store={store}>
			<ThemeProvider theme={baseTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp
