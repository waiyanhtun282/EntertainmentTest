import Footer from "../../footer/Footer"
import Nav from "../../nav/Nav"

const Layout = ({children}:any) => {
  return (
    <>
      <Nav />
         {children}
      <Footer/>
    </>
  )
}

export default Layout
