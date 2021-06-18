import '../styles/globals.css'
import Head from 'next/head'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width" />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
}

export default MyApp
