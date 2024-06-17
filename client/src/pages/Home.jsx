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
    <AddProduct />
    <Footer />
    </>
  )
}

export default Home