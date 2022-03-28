import { ChangeEvent, useEffect, useState } from 'react'
import Head from 'next/head'

import styles from '../styles/main.module.css'

import katex from 'katex'
import html2canvas from 'html2canvas'

/*
const post = (dataURL: string) => {
  const form = document.createElement('form')
  form.action = '/api/dlpoint?openExternalBrowser=1'
  form.method = 'post'
  form.innerHTML = `<input name='dataURL' value=${dataURL}>`
  document.body.appendChild(form)
  form.submit()
}
const postDataURLof = (element: HTMLElement) => {
  html2canvas(element)
    .then(canvas => {
      const dataURL = canvas.toDataURL()
     post(JSON.stringify(dataURL))
    })
}
*/
const downloadKatexImage = (area: HTMLElement) => {
  html2canvas(area)
    .then(canvas => {
      const downloadLink = document.getElementsByTagName("a")[0]
      downloadLink.href = canvas.toDataURL()
      downloadLink.click()
    })
}
const renderKatex = (
    katexArea: HTMLElement,
    inputText: string
  ) => {
    katex.render(String.raw`${inputText}`, katexArea, {
      throwOnError: false,
      displayMode: true
    })
}
const getProperKatexFontSize = (
    katexArea: HTMLElement,
    currentFontSize: number
  ): number => {
    const wRate = katexArea.clientWidth / katexArea.scrollWidth
    const hRate = katexArea.clientHeight / katexArea.scrollHeight
    return currentFontSize * (wRate*wRate) * (hRate*hRate)
}

const Home = () => {
  const LiffID = process.env.LIFF_ID || ""
  useEffect(() => {
    import('@line/liff').then(liffFile => {
      const liff = liffFile.default
      liff.init({
            liffId: LiffID,
            withLoginOnExternalBrowser: true,
          })
        
    })
  }, [])

  const [katexFontSize, setKatexFontSize] = useState(1.6)
  const [katexArea, setKatexArea] = useState<HTMLElement>()
  useEffect(() => {
    setKatexArea(
      document.getElementById('katex-area')!
    )
  }, [])
  

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    renderKatex(katexArea!, e.target.value)
    const newKatexFontSize = getProperKatexFontSize(katexArea!, katexFontSize)
    setKatexFontSize(newKatexFontSize)
    document.documentElement.style.setProperty(
      '--katex-font-size', `${newKatexFontSize}em`
    )
  }
  const handleClick = () => {
    downloadKatexImage(katexArea!)
  }

  return (
    <>
      <Head>
        <title>LIFF-TEX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainStyle}>
        <div
          className={styles.katexAreaStyle}
          id="katex-area"
        />
        <textarea
          className={styles.inputStyle}
          onChange={(e) => handleChange(e)}
        />
        <button className={styles.buttonStyle} onClick={handleClick}>
          download
        </button>
        <a download='KaTeX.png'></a>
      </main>
    </>
  )
}

export default Home