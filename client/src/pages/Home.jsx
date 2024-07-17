/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card1 from '../components/Card1'
// import FrontPage from '../components/FrontPage'
// import AddProduct from '../components/admin/AddProduct'
// import Shop from '../components/Shop'
import ProductCarousel1 from '../components/ProductCarousel1'
import Banner from '../components/Banner'
import HeroPage from '../components/HeroPage'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Banner />
      <CategoryCard />
      <ProductCarousel1 />
      <Card1 />
      {/* <Shop /> */}
      <Footer />
    </>
  )
}

export default Home