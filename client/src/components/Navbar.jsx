import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-sans" role="navigation">
        <a href="/" className="pl-8 text-2xl text-bold no-underline text-[#FFC24B]"><h1>Honey kalash</h1></a>
        <div className="pr-8 md:block hidden text-black">
          <a href="/shop" className="p-4 no-underline text-black">Shop</a>
          <a href="/about" className="p-4 no-underline text-black">Products</a>
          <a href="/services" className="p-4 no-underline text-black">Services</a>
          <a href="/contact" className="p-4 no-underline text-black">Cart </a>
          <a href="/addProducts" className="p-4 no-underline text-blue">AddProduct </a>
          {/* <a href="/contact" className="p-4 no-underline text-black"><FaShoppingCart /> </a> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar