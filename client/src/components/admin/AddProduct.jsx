// import React, { useState } from 'react';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
// import axios from 'axios';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { host } from '../APIRoutes';
 
// const AddProduct = () => {
//     const [formData, setFormData] = useState({
//         title: '',
//         name: '',
//         price: '',
//         description: '',
//         discount: '',
//         size: '',
//         review: '',
//         rating: '',
//         category: '',
//         stock: '',
//         image: null
//     });

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//     };

//     const handleOnSubmit = async (e) => {
//         e.preventDefault();
//         // console.log(formData);
//         const { title, name, price, description, discount, size, review, rating, category, stock, image } = formData;
//         try {
//             const data = await axios.post(`${host}/product/v1/addProducts`, {
//                 title,
//                 name,
//                 price,
//                 description,
//                 discount,
//                 size,
//                 review,
//                 rating,
//                 category,
//                 stock,
//                 image
//             });
//             if (data.status === false) {
//                 console.log("error")
//                 toast.error("Some error occured")
//             }
//             if (data.status === true) {
//                 console.log("success")
//                 toast.success("Product added successfully")
//             }

//         } catch (error) {
//             toast.error("Error");
//             console.error('Error:', error);
//         }
//     };


//     return (
//         <>
//             <Navbar />

//             <div className="flex flex-row min-h-screen justify-center items-center mt-5">
//                 <form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
//                     <div className="flex flex-wrap -mx-3 mb-6">
//                         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
//                                 Title
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                                 id="title"
//                                 type="text"
//                                 placeholder="Title"
//                                 name="title"
//                                 value={formData.title}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="w-full md:w-1/2 px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
//                                 Name
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                 id="name"
//                                 type="text"
//                                 placeholder="Name"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap -mx-3 mb-6">
//                         <div className="w-1/2 px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
//                                 Price
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                 id="price"
//                                 type="number"
//                                 placeholder="999"
//                                 name="price"
//                                 value={formData.price}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="w-full md:w-1/2 px-3">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
//                                 Description
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                 id="description"
//                                 type="text"
//                                 placeholder="Description"
//                                 name="description"
//                                 value={formData.description}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap -mx-3 mb-2">
//                         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="discount">
//                                 Discount
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                 id="discount"
//                                 type="number"
//                                 placeholder="Discount"
//                                 name="discount"
//                                 value={formData.discount}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="size">
//                                 Size
//                             </label>
//                             <div className="relative">
//                                 <select
//                                     className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="size"
//                                     name="size"
//                                     value={formData.size}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="S">S</option>
//                                     <option value="M">M</option>
//                                     <option value="L">L</option>
//                                 </select>
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="review">
//                                 Review
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                 id="review"
//                                 type="text"
//                                 placeholder="Review"
//                                 name="review"
//                                 value={formData.review}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap -mx-3 mb-2 mt-5">
//                         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rating">
//                                 Rating
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                 id="rating"
//                                 type="number"
//                                 placeholder="Rating"
//                                 name="rating"
//                                 value={formData.rating}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
//                                 Category
//                             </label>
//                             <div className="relative">
//                                 <select
//                                     className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                     id="category"
//                                     name="category"
//                                     value={formData.category}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="Women">Women</option>
//                                     <option value="Men">Men</option>
//                                     <option value="Kids">Kids</option>
//                                 </select>
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                                         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
//                                 Stock
//                             </label>
//                             <input
//                                 className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                 id="stock"
//                                 type="number"
//                                 placeholder="Stock"
//                                 name="stock"
//                                 value={formData.stock}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
//                             <input
//                                 className="appearance-none mt-5 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                                 id="image"
//                                 type="file"
//                                 placeholder="Upload Image"
//                                 name="image"
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className="md:w-2/3 m-3">
//                             <button className="shadow bg-[#45ACC3] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
//                                 Add Product
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <ToastContainer />


//             <Footer />
//         </>
//     );
// };

// export default AddProduct;



import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { host } from '../APIRoutes';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        price: '',
        description: '',
        discount: '',
        size: '',
        review: '',
        rating: '',
        category: '',
        stock: '',
        image: null
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleFileChange = (event) => {
        setFormData((prevFormData) => ({ ...prevFormData, image: event.target.files[0] }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const { title, name, price, description, discount, size, review, rating, category, stock, image } = formData;

        const data = new FormData();
        data.append('title', title);
        data.append('name', name);
        data.append('price', price);
        data.append('description', description);
        data.append('discount', discount);
        data.append('size', size);
        data.append('review', review);
        data.append('rating', rating);
        data.append('category', category);
        data.append('stock', stock);
        data.append('file', image); // Append the file with the key 'file'

        try {
            const response = await axios.post(`${host}/product/v1/addProducts`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 201) {
                toast.success("Product added successfully");
            } else {
                toast.error("Some error occurred");
            }
        } catch (error) {
            toast.error("Error");
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-row min-h-screen justify-center items-center mt-5">
                <form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="title"
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="name"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="price"
                                type="number"
                                placeholder="999"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="description"
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="discount">
                                Discount
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="discount"
                                type="number"
                                placeholder="Discount"
                                name="discount"
                                value={formData.discount}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="size">
                                Size
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="size"
                                    name="size"
                                    value={formData.size}
                                    onChange={handleChange}
                                >
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="review">
                                Review
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="review"
                                type="text"
                                placeholder="Review"
                                name="review"
                                value={formData.review}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2 mt-5">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="rating">
                                Rating
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="rating"
                                type="number"
                                placeholder="Rating"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="category">
                                Category
                            </label>
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option value="Women">Women</option>
                                    <option value="Men">Men</option>
                                    <option value="Kids">Kids</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                                Stock
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="stock"
                                type="number"
                                placeholder="Stock"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-full md:w-3/3 px-3 mb-6 md:mb-0">
                            <input
                                className="appearance-none mt-5 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="file"
                                type="file"
                                placeholder="Upload Image"
                                name="file"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="md:w-2/3 m-3">
                            <button className="shadow bg-[#45ACC3] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Add Product
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
            <Footer />
        </>
    );
};

export default AddProduct;
