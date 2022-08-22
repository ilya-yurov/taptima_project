import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import store from '../src/redux/redux-store'
import {Global, ThemeProvider} from '@emotion/react'
import {baseTheme} from '../styles/baseTheme'
import {GlobalTheme} from '../styles/globalTheme'

function MyApp({Component, pageProps}: AppProps) {

	return (
		<Provider store={store}>
			<ThemeProvider theme={baseTheme}>
				<Global styles={GlobalTheme}/>
				<Component {...pageProps} />
			</ThemeProvider>
		</Provider>
	)
}

export default MyApp
