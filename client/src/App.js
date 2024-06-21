import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import FrontPage from "./components/FrontPage";
import AddProduct from "./components/admin/AddProduct";
import Register from "./components/Register";
import Login from "./components/Login";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<FrontPage />} />
        <Route path="/addProducts" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}