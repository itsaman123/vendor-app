import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { host } from './APIRoutes';

const Shop = () => {
  const [item, setItem] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    axios.get(`${host}/product/v1/products`)
      .then((response) => {
        console.log(response.data);
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    axios.post(`${host}/product/v1/searchProduct`, {
      keyword: searchItem
    })
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addToCart = () => {
    if (item) {
      axios.post(`${host}/cart/v1/cart`, item)
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
      <div className="filter h-20 w-full">
        <div className="float-right">
          <div className="w-7/8 max-w-screen-md py-2 leading-6 mx-6">
            <form method="post" onSubmit={handleSearch} className="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
              <svg className="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input
                type="text"
                name="search"
                className="h-12 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
                placeholder="Casual shirt"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
              />
              <button type="submit" className="absolute right-0 mr-1 inline-flex h-10 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700">Search</button>
            </form>
          </div>
        </div>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {item.map((products) => (
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={products._id}>
            <Link className="no-underline" to={`/productdetails/${products._id}`}>
              <img
                src={products.image}
                alt="Product"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
            </Link>

            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">{products.title}</span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                {products.name}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  Rs.{products.price}
                </p>
                <p className="text-sm text-green-700 cursor-auto ml-2 mt-3 bg-green">Disc: Rs.{products.discount}</p>
                <div className="ml-auto">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer hover:text-blue hover:fill-black" onClick={addToCart}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  


                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <Footer />
      <ToastContainer />

    </>
  );
};

export default Shop;
