import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Por la verdad</title>
        <meta name="description" content="App de la verdad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
        <NavBar />

        <div className={styles.content} >
          <div className={styles.content_info} >
            <div>
              <h1>Por la justicia</h1>
              <h1>Por el derecho a la verdad</h1>
              <h1>Por un pais mejor</h1>
              <p>Por un pais donde la verdad y la justicia </p>
            </div>
          </div>

          <div className={styles.content_info}>
            <Image 
              src='/imageLogo.svg'
              alt="logo imagen"
              width={400}
              height={400}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
