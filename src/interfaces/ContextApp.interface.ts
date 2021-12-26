import { Auth, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Firestore } from 'firebase/firestore/lite';

export interface ProviderProps {
  db               : Firestore,
  auth             : Auth,
  facebookProvider : FacebookAuthProvider,
  googleProvider   : GoogleAuthProvider,
}