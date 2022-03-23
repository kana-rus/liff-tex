import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import liff from '@line/liff'
//import { Liff } from '@line/liff'


function MyApp({ Component, pageProps }: AppProps) {
  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid 'window is not defined' error
    import('@line/liff').then(() => {
      liff.init({ liffId: process.env.LIFF_ID! })
    })
  })

  return <Component {...pageProps} />
}

export default MyApp
