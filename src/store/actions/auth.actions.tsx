import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useSetRecoilState } from 'recoil';
import { auth } from 'src/config/firebase.config';
import { IFormLogin, IFormRegister } from 'src/interfaces/index';
import { authAtom } from '../state/auth';

const useAuthActions = () => {

  const setAuth = useSetRecoilState(authAtom)

  const registerUser = async ( userRegister: IFormRegister ) => {
    try {
      const { email, fullName, password } = userRegister
      const response = await createUserWithEmailAndPassword(auth, email, password)
      const { user: { uid } } = response

      setAuth({
        isAuthenticated: true,
        user: {
          email,
          id: uid,
          name: fullName
      }})

    } catch (error) {
      throw new Error('Error al registrar usuario')
    }
  }

  const loginUser = ( userLogin: IFormLogin ) => {
    try {
      
    } catch (error) {
      
    }
  }

  const resetPassword = ( email: string ) => {
    
  }

  const logout = () => {
    
  }

  const updateDisplayName = ( name: string ) => {
    try {
      if(auth.currentUser)
        updateProfile(auth.currentUser, { displayName: name }) 
    } catch (error) {
      throw new Error('Error updating display name')
    }
  }

  return {
    resetPassword,
    registerUser,
    loginUser,
    logout,
  }
}

export default useAuthActions
