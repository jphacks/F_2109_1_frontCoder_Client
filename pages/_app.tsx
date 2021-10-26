import type { AppProps } from 'next/app'
import '../styles/globals.css'
import AceComponent from '../component/aceComponent/ace'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
