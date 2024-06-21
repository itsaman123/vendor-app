import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import FrontPage from "./components/FrontPage";
import AddProduct from "./components/admin/AddProduct";
import Register from "./components/Register";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<FrontPage />} />
        <Route path="/addProducts" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}