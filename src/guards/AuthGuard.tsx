import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { authAtom } from "src/store/state/auth"
import { useRouter } from "next/router"
import { AppRoutes } from '../constants/routes';

export function AuthGuard({ children }: { children: JSX.Element }) {
  const router = useRouter()
  const authValues = useRecoilValue(authAtom)

  useEffect(() => {
      if (!authValues.isAuthenticated) {
        router.push(AppRoutes.AUTH)
      }else {
        router.push(AppRoutes.PROFILE)
      }

  }, [authValues])

  if (authValues.isAuthenticated) {
    return <>{children}</>
  }

  return null
}