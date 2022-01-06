import { onAuthStateChanged, User } from "firebase/auth"
import { FirebaseContext } from "pages/_app"
import { useContext, useEffect, useLayoutEffect, useState } from "react"
import { useSetRecoilState } from "recoil"
import { authAtom } from "src/store/state/auth"

const useAuth = () => {

  const setAuth = useSetRecoilState(authAtom)

  const { auth } = useContext(FirebaseContext)

  useEffect(() => {
    
    onAuthStateChanged(auth, ( user ) => {
      if ( user ) {
        setAuth({
          isAuthenticated: true,
          user: {
            id: user.uid,
            email: user.email!,
            name: user.displayName ?? ''
          }
        })
      } else {
        setAuth({
          isAuthenticated: false,
          user: null
        })
      }
    })
  }, [])

  return null
}

export default useAuth
