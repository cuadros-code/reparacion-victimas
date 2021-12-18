import Head from 'next/head';
import NavBar from "./NavBar"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ( { children }: LayoutProps ) => {
  return (
    <div>
      <Head>
        <title>Por la verdad</title>
        <meta name="description" content="App de la verdad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      { children }
    </div>
  )
}

export default Layout
