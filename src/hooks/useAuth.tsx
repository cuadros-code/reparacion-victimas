import { onAuthStateChanged, User } from "firebase/auth"
import { FirebaseContext } from "pages/_app"
import { useContext, useState } from "react"

const useAuth = () => {

  const [user, setUser] = useState<User | null>()

  const { auth } = useContext(FirebaseContext)

  onAuthStateChanged(auth, ( user ) => {
    if ( user ) {
      setUser( user )
    } else {
      setUser( null )
    }
  })

  return {
    user,
  }
}

export default useAuth
