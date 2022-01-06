import { useContext, useState } from 'react'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { useRouter } from 'next/router'
import { AppRoutes } from 'src/constants/routes'
import { FiMenu } from 'react-icons/fi'
import { authAtom } from 'src/store/state/auth'
import PrimaryButton from './PrimaryButton'
import styles from '../styles/NavBar.module.css'
import useAuthActions from 'src/store/actions/auth.actions'
import useAuth from 'src/hooks/useAuth'

const NavBar = () => {

  const [activateMenu, setActivateMenu] = useState(false)

  const router = useRouter()
  const userAuth = useRecoilValue(authAtom)
  const authActions = useAuthActions()
  const handleMenu = () => setActivateMenu(!activateMenu)
  useAuth()

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
          {
            userAuth.user 
            ? <PrimaryButton onClick={authActions.logout}>Cerrar sesión</PrimaryButton>
            : <PrimaryButton onClick={() => router.push(AppRoutes.AUTH)}>Iniciar Sesión</PrimaryButton>
          }
        </ul>
      </div>

    </nav>
  )
}

export default NavBar
