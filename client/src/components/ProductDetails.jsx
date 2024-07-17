import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { host } from './APIRoutes';

const ProductDetails = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_WEB_URL}/product/v1/products/${id}`)
            .then((response) => {
                const pitem = response.data;
                setItem(pitem);
                console.log(pitem);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const addToCart = () => {
        if (item) {
            axios.post(`${process.env.REACT_APP_WEB_URL}/cart/v1/cart`, item)
                .then((response) => {
                    console.log('Added to cart:', response.data);
                    toast.success('Item added to cart successfully!');
                })
                .catch((error) => {
                    console.log('Error adding to cart:', error);
                    toast.error('Failed to add item to cart.');
                });
        } else {
            toast.error('Cart is Empty');
        }
    };

    return (
        <>

            <Navbar />

            <section className="text-gray-700 body-font overflow-hidden bg-white">
                <div className="container px-5 py-24 mx-auto">
                    {item ? (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/3 w-full h-3/5 object-cover object-center rounded border border-gray-200"
                                src={item.image}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    {item.description}
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {item.name}
                                </h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        {[...Array(5)].map((_, index) => {
                                            const fullStar = index < Math.floor(item.rating);
                                            const halfStar = index < item.rating && !fullStar;

                                            return (
                                                <svg
                                                    key={index}
                                                    fill={fullStar ? "currentColor" : "none"}
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4 text-[#2c4e7f] starclass"
                                                    viewBox="0 0 24 24"
                                                    tooltip={item.rating}
                                                >
                                                    {fullStar ? (
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    ) : halfStar ? (
                                                        <>
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" clipPath="inset(0 50% 0 0)" />
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" />
                                                        </>
                                                    ) : (
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    )}
                                                </svg>
                                            );
                                        })}

                                        <span className="text-gray-600 ml-3">{item.review} Reviews</span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                        Discount: Rs. {item.discount}
                                    </span>
                                </div>
                                <p className="leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex items-center pb-3 border-b-2 border-gray-200 mb-3">
                                    <div className="flex">
                                        <span className="mr-3">Stock: {item.stock}</span>
                                    </div>
                                    <div className="flex ml-6 items-center">
                                        <span className="mr-3">Size</span>
                                        <div className="relative">
                                            <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                                <option value={item.size}>{item.size}</option>
                                            </select>
                                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    className="w-4 h-4"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        Rs.{item.price}
                                    </span>
                                    <button
                                        className="flex ml-auto text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-white rounded"
                                        onClick={addToCart}
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>No items found</p>
                    )}
                </div>
            </section>
            <ToastContainer />

            <Footer />
        </>
    );
}

export default ProductDetails;
