import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
const Invoice = () => {
    return (
        <>
            <Navbar />
            <div className="h-12 bg-yellow-500">
                <div className="header flex align-center justify-center text-3xl font-bold font-monospace">
                    <div>Invoice Honey Kalash Private Limited</div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Invoice