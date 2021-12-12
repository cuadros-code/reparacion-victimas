import { AppRoutes } from 'constants/routes'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.nav} >

      <div>
        <Link href={AppRoutes.HOME}>
          <a>
            <p className={styles.title}>El Testimonio</p>
          </a>
        </Link>
      </div>

      <div className={styles.links} >
        <ul>
          <Link href={AppRoutes.HOME}>
            <a>Inicio</a>
          </Link>
          <Link href='/'>
            <a>Sobre el proyecto</a>
          </Link>
          <Link href={AppRoutes.AUTH}>
            <a>Iniciar Sesión</a>
          </Link> 
        </ul>
      </div>

    </nav>
  )
}

export default NavBar
