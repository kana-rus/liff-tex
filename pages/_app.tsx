import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  // const [liffObject, setLiffObject] = useState(null)
  const LiffID = process.env.LIFF_ID

  useEffect(() => {
    import('@line/liff').then((liff: any) => {
      liff
        .init({
          liffId: LiffID
        })
        .then(() => {
          if (!liff.isLoggedIn()) {
            liff.login({})
          }
          // setLiffObject(liff)

          // trial ---
          liff.openwindow({
            url: "https://liff-tex.vercel.app/",
            external: true,
          })
          // ---------

        })
        .catch((err: any) => {
          console.error({ err })
        })
    })
  }, [])

  // pageProps.liff = liffObject
  return <Component {...pageProps} />
}

export default MyApp
