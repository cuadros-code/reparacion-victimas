import 'src/styles/globals.css'
import Layout from 'src/components/Layout'
import { createContext } from 'react'
import { auth, db, googleProvider, facebookProvider } from 'src/config/firebase.config'
import { ProviderProps } from 'src/interfaces/ContextApp.interface'
import { RecoilRoot } from 'recoil'
import { AuthGuard } from 'src/guards/AuthGuard'
import { NextPage } from 'next'

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
  requireAuth?: boolean
}

export const FirebaseContext = createContext({} as ProviderProps)

function MyApp({ Component, pageProps }:  {Component: NextApplicationPage; pageProps: any }) {

  const { Provider } = FirebaseContext;

  return (
    <>
    <RecoilRoot>
      <Provider
        value={{
          auth,
          db,
          facebookProvider,
          googleProvider,
        }}
        >
        <Layout>
        {
          Component.requireAuth ? (
              <AuthGuard>
                <Component {...pageProps} />
              </AuthGuard>
            ) : (
              <Component {...pageProps} />
            )
        }
        </Layout> 
      </Provider>      
    </RecoilRoot>
    </>
  )
}

export default MyApp
