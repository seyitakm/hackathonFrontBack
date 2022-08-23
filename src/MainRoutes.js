import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import Specialties from "./pages/Specialties";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/*a" element={<NotFoundPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/spec" element={<Specialties />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default MainRoutes;
