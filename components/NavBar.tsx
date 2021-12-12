import { AppRoutes } from 'constants/routes'
import Link from 'next/link'
import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {

  const [activateMenu, setActivateMenu] = useState(false)

  const handleMenu = () => setActivateMenu(!activateMenu)

  return (
    <nav 
    className={`${styles.nav} ${activateMenu && styles.activated}`} 
    >
      <div className={`${styles.display}`}>
      <div>
        <Link href={AppRoutes.HOME}>
          <a>
            <p className={styles.title}>El Testimonio</p>
          </a>
        </Link>
      </div>
      <div>
        <button onClick={handleMenu} className={styles.buttonMenu}>
          <FiMenu size={30} color='#ffff'/>
        </button>
      </div>
      </div>

      <div className={`${styles.links} ${activateMenu && styles.activatedLink}`} >
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
