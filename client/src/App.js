import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import FrontPage from "./components/FrontPage";
import AddProduct from "./components/admin/AddProduct";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Invoice from "./components/Invoice";
import ProductDetails from "./components/ProductDetails";
import ProductCarousel1 from "./components/ProductCarousel1";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<FrontPage />} />
        <Route path="/addProducts" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
        <Route path="/ProductCarousel1" element={<ProductCarousel1 />} />
      </Routes>
    </BrowserRouter>
  );
}