import { useContext, useState } from 'react';
import Link from 'next/link';
import IconButton from 'src/components/IconButton'
import styles from 'src/styles/Auth.module.css'
import TextField from 'src/components/TextField';
import PrimaryButton from 'src/components/PrimaryButton';
import Divider from 'src/components/Divider';
import { AppRoutes } from 'src/constants/routes';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { useForm } from "react-hook-form";
import { IFormLogin, IFormRegister } from 'src/interfaces/Auth.interface';
import { schemaLogin, schemaRegister } from 'src/validationSchemes/Auth.validation';
import { signInWithPopup } from 'firebase/auth';
import { FirebaseContext } from './_app';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authAtom } from 'src/store/state/auth';

const Auth = () => {

  const [viewLogin, setViewLogin] = useState(true);
  const setAuth = useSetRecoilState(authAtom)
  const userAuth = useRecoilValue(authAtom)

  const { googleProvider, auth } = useContext(FirebaseContext)

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<IFormLogin>({
    resolver: yupResolver(schemaLogin)
  });

  const { 
    register: formRegister, 
    handleSubmit : handleSubmitRegister, 
    formState: { errors : errosRegister } 
    } = useForm<IFormRegister>({
    resolver: yupResolver(schemaRegister)
  });

  const changeView = () => setViewLogin(!viewLogin);

  const onSubmitLogin = (dataForm: IFormLogin) => {
    console.log(dataForm);
  }

  const onSubmitRegister = (dataForm: IFormRegister) => {
    console.log(dataForm);
  }

  const signWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      if(user){
        setAuth({
          isAuthenticated: true,
          user: {
            id    : user.uid,
            email : user.email!,
            name  : user.displayName ?? '',
        }})
      }
    } catch (error) {
      console.log(error);
    }
  }

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
                  <h3>Iniciar sesi??n</h3>
                  <IconButton icon='google' onClick={signWithGoogle}>
                    Sesion con Google
                  </IconButton>
                  <Divider label='sesi??n con correo' />
                  <form onSubmit={handleSubmit(onSubmitLogin)}>
                    <TextField {...register("email")} label='Correo' placeholder='Ingrese el correo'/>
                    <p className='error_message'>{errors.email?.message}</p>
                    <TextField  {...register("password")} label='Contrase??a' placeholder='Ingrese la contrase??a' type='password'/>
                    <p className='error_message'>{errors.password?.message}</p>
                    <div className={styles.linkPass}>
                      <Link href={AppRoutes.AUTH}>
                        <a>Has olvidado tu contrase??a ?</a>
                      </Link>
                    </div>
                    <PrimaryButton type='submit'>
                      Iniciar sesi??n
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
                  <Divider label='registrarse con correo' />
                  <form onSubmit={handleSubmitRegister(onSubmitRegister)}>
                    <TextField {...formRegister("fullName")} label='Nombre completo' placeholder='Ingrese el nombre completo'/>
                    <p className='error_message'>{errosRegister.fullName?.message}</p>
                    <TextField {...formRegister("email")} label='Correo' placeholder='Ingrese el correo'/>
                    <p className='error_message'>{errosRegister.email?.message}</p>
                    <TextField {...formRegister("password")} label='Contrase??a' placeholder='Ingrese la contrase??a' type='password'/>
                    <p className='error_message'>{errosRegister.password?.message}</p>
                    <PrimaryButton type='submit'>
                      Registrarse
                    </PrimaryButton>
                  </form>
                  <p className={styles.register}>ya tiene una cuenta? 
                    <span onClick={changeView}> Iniciar sesi??n</span>
                  </p>
                </>
            }
            
          </div>
        </div>
      </div>     
    </div>
  )
}

Auth.requireAuth = false;

export default Auth
