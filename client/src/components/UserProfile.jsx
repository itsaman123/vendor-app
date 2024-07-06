import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import { host } from './APIRoutes';

const UserProfile = () => {
    const [udata, setUserData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('No token found');
            setError('No token found. Please log in.');
            return;
        }

        axios.get(`${host}/users/v1/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
             setUserData(response.data);
        })
        .catch((error) => {
            if (error.response) {
                console.log('Error response:', error.response.data);
                setError(error.response.data.message || 'An error occurred');
            } else if (error.request) {
                console.log('Error request:', error.request);
                setError('No response from the server');
            } else {
                console.log('Error message:', error.message);
                setError('An error occurred');
            }
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center items-center">
                <div className="bg-white mt-5 mb-5 max-w-2xl shadow overflow-hidden sm:rounded-lg">
                    {/* <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            User Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Details and information about the user.
                        </p>
                    </div> */}
                     
                    {udata ? (
                        <div className="border-t border-gray-200">
                            <dl>
                                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {udata.name}
                                    </dd>
                                </div>
                                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                        {udata.email}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    ) : (
                        <div className="px-4 py-5 sm:px-6">
                            <p className="text-sm text-red-500">{error || 'Loading...'}</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserProfile;
