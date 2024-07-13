import React from 'react'
import Logo from './assets/heropageimage.png'
const HeroPage = () => {
  return (
    <>
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-4xl font-bold leadi sm:text-5xl">Discover the Sweetest Honey Straight from the Farm
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Pure, Natural, and Sustainably Sourced Honey for Every Taste
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img src={Logo} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
          </div>
        </div>
      </section>
    </>

  )
}

export default HeroPage


