import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-sans" role="navigation">
      <a href="/" className="pl-8">Logo</a>
      <div className="pr-8 md:block hidden text-black">
        <a href="/" className="p-4 no-underline text-black-50">Home</a>
        <a href="/about" className="p-4">About</a>
        <a href="/services" className="p-4">Services</a>
        <a href="/contact" className="p-4">Contact</a>
      </div>  
    </nav>
    </>
  )
}

export default Navbar