import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import { createContext } from 'react'
import { auth, db } from 'config/firebase.config'
import { ProviderProps } from 'interfaces/ContextApp.interface'

export const Firebase = createContext({} as ProviderProps)

function MyApp({ Component, pageProps }: AppProps) {

  const { Provider } = Firebase;

  return (
    <Provider
      value={{
        auth,
        db
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </Provider>      
  )
}

export default MyApp
