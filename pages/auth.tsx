import { useState } from 'react';
import Link from 'next/link';
import IconButton from 'components/IconButton'
import styles from '../styles/Auth.module.css'
import TextField from '../components/TextField';
import PrimaryButton from 'components/PrimaryButton';
import Divider from 'components/Divider';
import { AppRoutes } from 'constants/routes';

const Auth = () => {

  const [viewLogin, setViewLogin] = useState(true);


  const changeView = () => setViewLogin(!viewLogin);

  return (
    <div className={styles.content} >
      <div className={styles.content_form} >
        <div className={styles.info}>
          <h1>Bienvenido de nuevo</h1>
        </div>
        <div className={styles.form}>
          <div className={styles.center}>
            {
              viewLogin ?
                <>
                  <h3>Iniciar sesión</h3>
                  <IconButton icon='google'>
                    Sesion con Google
                  </IconButton>
                  <IconButton icon='facebook'>
                    Sesion con Facebook
                  </IconButton>
                  <Divider label='sesión con correo' />
                  <form>
                    <TextField label='Correo' placeholder='Ingrese el correo'/>
                    <TextField label='Contraseña' placeholder='Ingrese la contraseña' type='password'/>
                    <div className={styles.linkPass}>
                      <Link href={AppRoutes.AUTH}>
                        <a>Has olvidado tu contraseña ?</a>
                      </Link>
                    </div>
                    <PrimaryButton>
                      Iniciar sesión
                    </PrimaryButton>
                  </form>
                  <p className={styles.register}>no tiene una cuenta? 
                  <span onClick={changeView}> Registrarse</span>
                  </p>
                </>
                :
                <>
                  <h3>Registrarse</h3>
                  <IconButton icon='google'>
                    Registro con Google
                  </IconButton>
                  <IconButton icon='facebook'>
                    Registro con Facebook
                  </IconButton>
                  <Divider label='registrarse con correo' />
                  <form>
                    <TextField label='Nombre completo' placeholder='Ingrese el nombre completo'/>
                    <TextField label='Correo' placeholder='Ingrese el correo'/>
                    <TextField label='Contraseña' placeholder='Ingrese la contraseña' type='password'/>
                    <PrimaryButton>
                      Registrarse
                    </PrimaryButton>
                  </form>
                  <p className={styles.register}>ya tiene una cuenta? 
                    <span onClick={changeView}> Iniciar sesión</span>
                  </p>
                </>
            }
            
          </div>
        </div>
      </div>     
    </div>
  )
}

export default Auth
