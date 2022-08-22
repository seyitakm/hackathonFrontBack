import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<RegisterPage />} />
      <Route path="/register" element={<LoginPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
};

export default MainRoutes;
