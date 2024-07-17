import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { host } from './APIRoutes';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const { password, email } = formData;
        try {
            const response = await axios.post(`${process.env.REACT_APP_WEB_URL}/users/v1/login`, {
                password,
                email
            });
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                toast.success("User Logged In Successfully");
                navigate('/profile');
            } else {
                toast.error("Error occurred");
            }
        } catch (error) {
            toast.error("Error");
            console.error('Error:', error);
        }
    };

    return (
        <>
            <div className="flex flex-row min-h-screen justify-center items-center mt-5">
                <form className="w-full max-w-lg" onSubmit={handleOnSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
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
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
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
                            <p>Don't have an account? Please <a href="/register">Register</a></p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="md:w-2/3 m-3">
                            <button className="shadow bg-[#45ACC3] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default Login;
