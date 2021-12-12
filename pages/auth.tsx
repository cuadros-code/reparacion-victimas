import Link from 'next/link';
import IconButton from 'components/IconButton'
import styles from '../styles/Auth.module.css'
import TextField from '../components/TextField';
import PrimaryButton from 'components/PrimaryButton';

const auth = () => {
  return (
    <div className={styles.content} >
      <div className={styles.content_form} >
        <div className={styles.info}>

        </div>
        <div className={styles.form}>
          <div className={styles.center}>
            <h3>Iniciar sesión</h3>
            <p>inicia sesión para tener acceso </p>
            <IconButton icon='google'>
              Sesion con Google
            </IconButton>
            <IconButton icon='facebook'>
              Sesion con Facebook
            </IconButton>
            
            <form>
              <TextField label='Correo' placeholder='Ingrese el correo'/>
              <TextField label='Contraseña' placeholder='Ingrese la contraseña' type='password'/>
              <div className={styles.linkPass}>
                <Link href='/'>
                  <a>Has olvidado tu contraseña ?</a>
                </Link>
              </div>
              <PrimaryButton>
                Iniciar sesión
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>     
    </div>
  )
}

export default auth
