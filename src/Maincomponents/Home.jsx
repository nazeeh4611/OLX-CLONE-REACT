import React from 'react'
import Navbar from '../components/Navbar'
import Navmenu from '../components/Navmenu'
import Footer from '../components/Footer'
import ProductList from '../Maincomponents/ProductList'
function Home() {
  return (
    <>
     <Navbar/>
     <Navmenu/>
    <ProductList/>
    <Footer/>
    </>
  )
}

export default Home