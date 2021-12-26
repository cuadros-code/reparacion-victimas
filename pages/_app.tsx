import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'src/components/Layout'
import { createContext } from 'react'
import { auth, db, googleProvider, facebookProvider } from 'src/config/firebase.config'
import { ProviderProps } from 'src/interfaces/ContextApp.interface'
import ErrorBoundary from 'src/components/ErrorBoundary'

export const FirebaseContext = createContext({} as ProviderProps)

function MyApp({ Component, pageProps }: AppProps) {

  const { Provider } = FirebaseContext;

  return (
    <ErrorBoundary>
      <Provider
        value={{
          auth,
          db,
          facebookProvider,
          googleProvider,
        }}
        >
        <Layout>
          <Component {...pageProps} />
        </Layout> 
      </Provider>      
    </ErrorBoundary>
  )
}

export default MyApp
