import Header from '../parts/Header'; 
import Footer from '../parts/Footer'; 

export default function Layout({children}){
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  )
}