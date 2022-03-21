import type { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEvent, useRef } from 'react'
import { useState } from 'react'

import styles from '../styles/main.module.css'


const Home: NextPage = () => {
  const [inputEl, setInputEl] = useState("")
  const [text, setText] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentInput = e.target.value
    setInputEl(currentInput)
    setText(currentInput)
  }

  return (
    <>
      <Head>
        <title>LIFF-TEX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainStyle}>
        <div className={styles.previewStyle}>
          {text}
        </div>
        <input
          value={inputEl}
          className={styles.inputStyle}
          onChange={(e) => handleChange(e)}
        />
      </main>
    </>
  )
}

export default Home
