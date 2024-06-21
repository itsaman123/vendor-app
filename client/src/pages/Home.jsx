/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FrontPage from '../components/FrontPage'
import AddProduct from '../components/admin/AddProduct'
const Home = () => {
  return (
    <>
    <Navbar />    
    <h1 className='text-center max-h-screen'>This is Home page</h1>

    <Footer />
    </>
  )
}

export default Home