import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadBar } from '@/components/HeadBar/headBar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          </Head>

      <Component {...pageProps} />

    </>
  )
  
}

export default MyApp
