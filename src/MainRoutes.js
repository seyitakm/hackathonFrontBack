import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";
import AboutUsPage from "./pages/AboutUsPage";
import ActivationPage from "./pages/ActivationPage";
import ChangePassPage from "./pages/ChangePassPage";
import Contacts from "./pages/Contacts";
import DoctorsSchedule from "./pages/DoctorsSchedule";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PriceList from "./pages/PriceList";
import RegisterPage from "./pages/RegisterPage";
import Services from "./pages/Services";
import Specialties from "./pages/Specialties";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/activation" element={<ActivationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/changepass" element={<ChangePassPage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/spec" element={<Specialties />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricelist" element={<PriceList />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/schedule" element={<DoctorsSchedule />} />
    </Routes>
  );
};

export default MainRoutes;
