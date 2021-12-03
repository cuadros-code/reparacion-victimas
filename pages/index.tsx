import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Por la verdad</title>
        <meta name="description" content="App de la verdad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
      </main>
    </div>
  )
}

export default Home
