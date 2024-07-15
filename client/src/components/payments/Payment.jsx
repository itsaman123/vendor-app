import CheckoutForm from './CheckoutForm';
import Navbar from '../Navbar';
import Footer from '../Footer';
import React, { useState, useEffect } from "react";

import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import axios from "axios";
// import PaymentForm from "./PaymentForm";
 
const stripe = loadStripe('Your API KEY');
export default function Payment() {
  const [clientSecret, setClientSecret] = useState(null);
 
    useEffect(() => {
        axios
            .post("http://localhost:4000/create-payment-intent", {
                items: [{ id: 1, name: "momos", amount: 40.00 }],
            })
            .then((resp) => setClientSecret(resp.data.clientSecret));
    }, []);
 
    const options = {
        clientSecret,
        theme: "stripe",
    };
   

  return (
    clientSecret && (
      <Elements stripe={stripe} options={options}>
          <CheckoutForm></CheckoutForm>
      </Elements>

  )
    //  <>
    //  <Navbar />
    //   <CheckoutForm />
    //   <Footer />
    //  </>
  );
};


