import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'src/styles/Home.module.css'
import PrimaryButton from 'src/components/PrimaryButton'

const Home: NextPage = () => {

  const onClickAction = () => {
    throw new Error('Error al registrar usuario')
  }
  return (
    <div>
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
                <PrimaryButton onClick={onClickAction}>
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
