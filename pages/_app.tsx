import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeadBar } from '@/components/HeadBar/headBar'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
          <HeadBar/>

      <Component {...pageProps} />

    </>
  )
  
}

export default MyApp
