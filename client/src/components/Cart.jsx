
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const [items, setItems] = useState([]);
  const [orderSummary, setOrderSummary] = useState({
    originalPrice: 0,
    savings: 0,
    storePickup: 0,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    // Fetch cart items
    axios.get(`${process.env.REACT_APP_WEB_URL}/cart/v1/cart/667480e76919b7ac4a79a068`)
      .then((response) => {
        const itemsData = response.data;
        setItems(itemsData);

        // Calculate order summary
        calculateOrderSummary(itemsData);
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  const calculateOrderSummary = (itemsData) => {
    let originalPrice = 0;
    let savings = 0;
    let storePickup = 99; // assuming store pickup fee is fixed
    let tax = 50; // assuming tax is fixed

    itemsData.forEach(item => {
      originalPrice += item.price;
      savings += (item.price * (item.discount / 100));
    });

    const total = originalPrice - savings + storePickup + tax;

    setOrderSummary({
      originalPrice: originalPrice.toFixed(2),
      savings: savings.toFixed(2),
      storePickup: storePickup.toFixed(2),
      tax: tax.toFixed(2),
      total: total.toFixed(2),
    });
  };

  const removeItem = (itemId) => {
    axios.delete(`${process.env.REACT_APP_WEB_URL}/cart/v1/cart/${itemId}`, {
      data: { item_id: itemId }
    })
      .then((response) => {
        const updatedItems = items.filter(item => item._id.$oid !== itemId);
        setItems(updatedItems);
        calculateOrderSummary(updatedItems);
        toast.success("Deleted")
        setTimeout(() => {
          window.location.reload();
        }, 100)
      })
      .catch((error) => {
        toast.error("error")
        console.error('Error deleting cart item:', error);
      });
  };

  return (
    <>
      <Navbar />

      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-black-900 dark:text-black sm:text-2xl">Shopping Cart</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 flex flex-wrap justify-left align-left">
            <div className="mx-auto w-full flex lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {items.map((cartItem) => (
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6" key={cartItem._id}>
                    <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                      <a href="/" className="shrink-0 md:order-1">
                        <img className="hidden h-40 dark:block" src={cartItem.image} alt="item img" />
                      </a>
                      <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                      <div className="flex items-center justify-between md:order-3 md:justify-end">
                        <button
                          type="button"
                          onClick={() => removeItem(cartItem.p_id)}
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                          <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L17.94 6M18 18L6.06 6" />
                          </svg>
                          Remove
                        </button>
                        <div className="text-end md:order-4 md:w-32">
                          <p className="text-base font-bold text-black-900 dark:text-black">Rs. {cartItem.price}</p>
                        </div>
                      </div>

                      <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a href="/" className="text-base font-medium text-black-900 hover:underline dark:text-black">{cartItem.description}</a>
                        <div className="flex items-center gap-4">
                          <button type="button" className="inline-flex items-center text-sm font-medium text-black-500 hover:text-black-900 hover:underline dark:text-black-400 dark:hover:text-black">
                            Rating: {cartItem.rating}
                          </button>
                          <button type="button" className="inline-flex items-center text-sm font-medium text-black-600 hover:underline dark:text-black-500">
                            Size: {cartItem.size}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-black-900 dark:text-black">Order summary</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-black-500 dark:text-black-400">Original price</dt>
                      <dd className="text-base font-medium text-black-900 dark:text-black">Rs. {orderSummary.originalPrice}</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-black-500 dark:text-black-400">Savings</dt>
                      <dd className="text-base font-medium text-green-600">-Rs. {orderSummary.savings}</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-black-500 dark:text-black-400">Store Pickup</dt>
                      <dd className="text-base font-medium text-black-900 dark:text-black">Rs. {orderSummary.storePickup}</dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-black-500 dark:text-black-400">Tax</dt>
                      <dd className="text-base font-medium text-black-900 dark:text-black">Rs. {orderSummary.tax}</dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-black-900 dark:text-black">Total</dt>
                    <dd className="text-base font-bold text-black-900 dark:text-black">Rs. {orderSummary.total}</dd>
                  </dl>
                </div>
                <a href="login" className="flex w-full h-12 items-center justify-center rounded-lg text-sm font-medium text-white focus:outline-none bg-black">Proceed to Checkout</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />

      <Footer />
    </>


  );
};

export default Cart;