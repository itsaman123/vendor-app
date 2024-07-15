// const CheckoutForm = () => {
   

//   return (
//     <>
//     <div className="font-[sans-serif] bg-white p-4 m-[70px]">
//       <div className="md:max-w-5xl max-w-xl mx-auto">
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 max-md:order-1">
//             <h2 className="text-3xl font-extrabold text-gray-800">Make a payment</h2>
//             <p className="text-gray-800 text-sm mt-4">Complete your transaction swiftly and securely with our easy-to-use payment process.</p>

//             <form className="mt-8 max-w-lg">
//               <div className="grid gap-4">
//                 <div>
//                   <input type="text" placeholder="Cardholder's Name"
//                     className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
//                 </div>

//                 <div className="flex bg-gray-100 border rounded-md focus-within:border-purple-500 focus-within:bg-transparent overflow-hidden">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 ml-3" viewBox="0 0 32 20">
//                     <circle cx="10" cy="10" r="10" fill="#f93232" data-original="#f93232" />
//                     <path fill="#fed049"
//                       d="M22 0c-2.246 0-4.312.75-5.98 2H16v.014c-.396.298-.76.634-1.107.986h2.214c.308.313.592.648.855 1H14.03a9.932 9.932 0 0 0-.667 1h5.264c.188.324.365.654.518 1h-6.291a9.833 9.833 0 0 0-.377 1h7.044c.104.326.186.661.258 1h-7.563c-.067.328-.123.66-.157 1h7.881c.039.328.06.661.06 1h-8c0 .339.027.67.06 1h7.882c-.038.339-.093.672-.162 1h-7.563c.069.341.158.673.261 1h7.044a9.833 9.833 0 0 1-.377 1h-6.291c.151.344.321.678.509 1h5.264a9.783 9.783 0 0 1-.669 1H14.03c.266.352.553.687.862 1h2.215a10.05 10.05 0 0 1-1.107.986A9.937 9.937 0 0 0 22 20c5.523 0 10-4.478 10-10S27.523 0 22 0z"
//                       className="hovered-path" data-original="#fed049" />
//                   </svg>
//                   <svg width="44px" height="44px" viewBox="0 -9 58 58" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0.5" y="0.5" width="57" height="39" rx="3.5" fill="white" stroke="#F3F3F3"></rect> <path d="M25.7516 27.4332H21.8901L24.3054 13.4325H28.1667L25.7516 27.4332Z" fill="#15195A"></path> <path d="M39.7499 13.7748C38.9882 13.4915 37.7802 13.1787 36.2865 13.1787C32.4731 13.1787 29.7878 15.0851 29.7713 17.8106C29.7396 19.8215 31.6939 20.9384 33.1556 21.6089C34.6495 22.2941 35.1574 22.7413 35.1574 23.352C35.1422 24.29 33.9502 24.7223 32.8384 24.7223C31.2967 24.7223 30.4707 24.4994 29.2153 23.9776L28.7069 23.7539L28.1665 26.8967C29.0722 27.2835 30.7408 27.6268 32.4731 27.6419C36.5249 27.6419 39.1627 25.765 39.1939 22.8605C39.2093 21.2667 38.1774 20.0454 35.9526 19.0475C34.602 18.4069 33.7749 17.9749 33.7749 17.3195C33.7908 16.7236 34.4745 16.1133 35.9991 16.1133C37.2544 16.0834 38.1768 16.3663 38.8755 16.6494L39.2247 16.7981L39.7499 13.7748V13.7748V13.7748Z" fill="#15195A"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M46.6618 13.4325H49.6486L52.7639 27.433H49.1885C49.1885 27.433 48.8386 25.8244 48.7278 25.3328H43.7699C43.6266 25.705 42.9595 27.433 42.9595 27.433H38.9078L44.6435 14.5941C45.0409 13.6855 45.7407 13.4325 46.6618 13.4325ZM46.4238 18.556C46.4238 18.556 45.2001 21.6689 44.8821 22.4732H48.0918C47.933 21.7733 47.2017 18.4219 47.2017 18.4219L46.9319 17.2156C46.8182 17.5262 46.6539 17.9533 46.543 18.2414C46.4679 18.4366 46.4173 18.568 46.4238 18.556Z" fill="#15195A"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.1589 13.4325H11.3716C12.2138 13.462 12.8971 13.7152 13.1194 14.6094L14.4696 21.0422C14.4697 21.0426 14.4699 21.043 14.47 21.0434L14.8832 22.9796L18.6649 13.4325H22.7481L16.6785 27.4184H12.5951L9.15337 15.253C7.96587 14.6021 6.6106 14.0786 5.09534 13.7154L5.1589 13.4325Z" fill="#15195A"></path> </g></svg>
                  
//                   <input type="number" placeholder="Card Number"
//                     className="px-4 py-3.5 text-gray-800 w-full text-sm outline-none bg-transparent" />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <input type="number" placeholder="EXP."
//                       className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
//                   </div>
//                   <div>
//                     <input type="number" placeholder="CVV"
//                       className="px-4 py-3.5 bg-gray-100 text-gray-800 w-full text-sm border rounded-md focus:border-purple-500 focus:bg-transparent outline-none" />
//                   </div>
//                 </div>
//               </div>

//               <button type="button" className="mt-8 w-40 py-3.5 text-sm bg-purple-500 text-white rounded-md hover:bg-purple-600 tracking-wide">Pay  </button>
//             </form>
//           </div>

//           <div className="bg-gray-100 p-6 rounded-md">
//             <h2 className="text-3xl font-extrabold text-gray-800">$250.00</h2>

//             <ul className="text-gray-800 mt-8 space-y-4">
//               <li className="flex flex-wrap gap-4 text-sm">Split Sneakers <span className="ml-auto font-bold">$150.00</span></li>
//               <li className="flex flex-wrap gap-4 text-sm">Echo Elegance <span className="ml-auto font-bold">$90.00</span></li>
//               <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">$10.00</span></li>
//               <li className="flex flex-wrap gap-4 text-sm font-bold border-t-2 pt-4">Total <span className="ml-auto">$250.00</span></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     </>
//   )
// };

// export default CheckoutForm;



//PaymentForm.js

import React, { useState } from "react";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";

const PAYMENT_SUCESS_URL = "http://localhost:3000/success";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) return;

		setIsLoading(true);
		setMessage("Payment in Progress");

		const resp = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: PAYMENT_SUCESS_URL,
			},
		});

		if (resp.error) setMessage("Some Error Occurred !!");
		setIsLoading(false);
	};

	return (
		<div className="container mx-auto">
			<form onSubmit={handleSubmit}>
				<div className="card w-100 bg-base-100 bg-gray-200 shadow-2xl rounded-lg">
					<div className="card-body p-6">
						<h1 className="card-title font-bold text-2xl mb-4 justify-center">
							Complete your payment here!
						</h1>
						<PaymentElement />
						<div className="card-actions justify-center">
							<button
								className="btn btn-primary rounded-xl text-white px-4 py-2 mt-6"
								disabled={isLoading || !stripe || !elements}
							>
								{isLoading ? "Loading..." : "Pay now"}
							</button>
						</div>
						{message && <div>{message}</div>}
					</div>
				</div>
			</form>
		</div>
	);
};

export default CheckoutForm;
