import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddAddress = () => {
    const [address, setAddress] = useState({
        house_no: '',
        street_name: '',
        landmark: '',
        postal_code: '',
        city_district: '',
        state: '',
        phone: ''

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((preventAddress) => ({ ...preventAddress, [name]: value })
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("form submitted")
        const { house_no, street_name, landmark, postal_code, city_district, state, phone } = address;
        
        try {
            
            const data = await axios.post(`${process.env.REACT_APP_WEB_URL}/users/v1/user-address`, {
                house_no,
                street_name,
                landmark,
                postal_code,
                city_district,
                state,
                phone
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log(data)
            if (data.status === 201) {
                toast.success("Address added successfully")
            }
            else {
                toast.error("Error occured")
            }
        }
        catch (error) {
            console.error('Error:', error);
            alert("error")

        }
    }



    return (
        <>
            <Navbar />

            <div className="parentcontainer">
                <p className="text-green-800 text-center mt-3 mb-3 font-bold">MY BAG  -----  ADDRESS<span className='text-gray-500 text-center mt-3 mb-3 font-bold'> ----- PAYMENT</span></p>




                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="house_no" id="house_no" value={address.house_no} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-black dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="house_no" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">House no</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="street_name" id="street_name" value={address.street_name} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-black dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="street_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street name</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="landmark" id="landmark" value={address.landmark} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-black dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="landmark" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Landmark</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="postal_code" id="postal_code" value={address.postal_code} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-black dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="postal_code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal code</label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="city_district" id="city_district" value={address.city_district} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-black dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="city_district" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City/District</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="state" id="state" value={address.state} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-black dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="state" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" name="phone" id="phone" value={address.phone} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-black-500 bg-transparent border-0 border-b-2 border-black dark:text-black dark:border-black dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-500 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <button className="shadow bg-[#45ACC3] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mb-5 rounded" type="submit">
                        Add Address
                    </button>
                </form>


            </div>
            <ToastContainer />

            <Footer />

        </>
    )
}

export default AddAddress