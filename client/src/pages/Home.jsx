/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FrontPage from '../components/FrontPage'
import Card1 from '../components/Card1'
import AddProduct from '../components/admin/AddProduct'
import Banner from '../components/Banner'
import HeroPage from '../components/HeroPage'
import Shop from '../components/Shop'
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Banner />     
      <Card1 />
      <Shop />

      <Footer />
    </>
  )
}

export default Home