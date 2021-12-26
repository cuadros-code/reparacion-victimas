import { initializeApp } from 'firebase/app'
import { getFirestore, } from 'firebase/firestore/lite';
import { getAuth, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey            : "AIzaSyClPa-sffQD2RNGb5a-pQASuPg-S88ZTYM",
  authDomain        : "reparacion-d3397.firebaseapp.com",
  projectId         : "reparacion-d3397",
  storageBucket     : "reparacion-d3397.appspot.com",
  messagingSenderId : "91465989103",
  appId             : "1:91465989103:web:392868e52a7408bfaa941a",
  measurementId     : "G-GJ88P7K7W8"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

const facebookProvider = new FacebookAuthProvider()
const googleProvider = new GoogleAuthProvider()

export {
  db,
  auth,
  facebookProvider,
  googleProvider,
}