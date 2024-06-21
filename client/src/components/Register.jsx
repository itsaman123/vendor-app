import { useState } from "react";
import axios from "axios";

import React from 'react'

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
                // );
        axios.post("http://localhost:8000/users/v1/register", formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /> <br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /> <br />

                <label htmlFor="password">Email:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} /> <br />


                <button type="submit">Submit</button>
            </form>

        </>
    )
}


export default Register;