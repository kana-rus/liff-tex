import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, useEffect, useState } from 'react'

import styles from '../styles/main.module.css'

import katex from 'katex'
import html2canvas from 'html2canvas'


const Home: NextPage = () => {
  const [katexFontSize, setKatexFontSize] = useState(1.6)

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const currentText = e.target.value
    const katexArea = document.getElementById("katex-area")!
    katex.render(String.raw`${currentText}`, katexArea!, {
      throwOnError: false,
      displayMode: true
    })

    const rate = katexArea.clientWidth / katexArea.scrollWidth
    const newKatexFontSize = katexFontSize * rate * rate
    setKatexFontSize(newKatexFontSize)
    document.documentElement.style.setProperty(
      '--katex-font-size', `${newKatexFontSize}em`
    )
  }

  const handleClick = () => {
    html2canvas(document.getElementById('katex-area')!).then(canvas => {
      const downloadEl = document.createElement("a")
      downloadEl.download = "KaTeX.jpg"
      downloadEl.href = canvas.toDataURL("image/jpeg")
      downloadEl.click()
    })
  }

  return (
    <>
      <Head>
        <title>LIFF-TEX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainStyle}>
        <div className={styles.previewStyle} id="katex-area" />
        <textarea
          className={styles.inputStyle}
          onChange={(e) => handleChange(e)}
        />
        <button className={styles.buttonStyle}
          onClick={handleClick}
        >
          download
        </button>
      </main>
    </>
  )
}

export default Home
