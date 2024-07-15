import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { host } from './APIRoutes';

const CategoryCard = () => {
  const [item, setItem] = useState([]);
 

  useEffect(() => {
    axios.get(`${host}/product/v1/productbycategory/honey`)
      .then((response) => {
        console.log(response.data);
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  
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
 
      
 <h1 className="text-5xl  m-5 text-center font-serif bg-gray-300 border-1 rounded-3">Explore the Variety of Fresh Products</h1>
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
                loading='lazy'
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

      <ToastContainer />

    </>
  );
};

export default CategoryCard;
