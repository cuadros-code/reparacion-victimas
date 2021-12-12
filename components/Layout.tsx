import NavBar from "./NavBar"

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ( { children }: LayoutProps ) => {
  return (
    <div>
      <NavBar />
      { children }
    </div>
  )
}

export default Layout
