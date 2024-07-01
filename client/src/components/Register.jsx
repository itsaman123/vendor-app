import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
         const { name, email, password } = formData;
        try {
            const data = await axios.post('http://localhost:8000/users/v1/register', {
                name,
                email,
                password
            });
             if (data.status === 201) {
                toast.success("User created Successfully")
                navigate('/login')
            }
            else{
                toast.error("Error occured");
            }

        } catch (error) {
            toast.error("Error occured");
            console.error('Error:', error);
        }
    };


    return (
        <>
            <div className="flex flex-row min-h-screen justify-center items-center mt-5">
                <form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="title">
                                Email
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="email"
                                type="email"
                                placeholder="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-full px-3">
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
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                                Password
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="password"
                                type="password"
                                placeholder="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                             <p>Already have an account, please <a href="/login">LogIn</a></p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3">
                        <div className="md:w-2/3 m-3">
                            <button className="shadow bg-[#45ACC3] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
                <ToastContainer />

            </div>

        </>
    );
};

export default Register;
