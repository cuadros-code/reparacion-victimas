import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PrimaryButton from 'components/PrimaryButton'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Por la verdad</title>
        <meta name="description" content="App de la verdad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} >
        <div className={styles.content} >
          <div className={styles.content_info} >
            <div>
              <div className={styles.module}>
                <h1>Por la justicia</h1>
                <h1>Por el derecho a la verdad</h1>
                <h1>Por un pais mejor</h1>
              </div>
              <div className={styles.module}>
                <p>La libertad es una conquista y no una donación,</p>
                <p>esto exige una búsqueda permanente y una lucha constante por</p>
                <p>la verdad la justicia y la reparación.</p>
              </div>
              <div className={styles.module}>
                <div className={styles.contentButton}>
                <PrimaryButton>
                  Buscar la verdad
                </PrimaryButton>
                </div>
              </div>
            </div>

          </div>

          <div className={styles.content_info}>
            <Image 
              src='/imageLogo.svg'
              alt="logo imagen"
              width={700}
              height={700}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
