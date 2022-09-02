import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSpec from "./components/products/AddSpec";
import SpecialtiesList from "./components/products/SpecialtiesList";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
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

import SpecDetails from "./components/products/SpecDetails";
import EditSpec from "./components/products/EditSpec";

import AboutUserPage from "./pages/AboutUserPage";
import CartPage from "./pages/CartPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/spec" element={<SpecialtiesList />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/user" element={<AboutUserPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/activation" element={<ActivationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/add" element={<AddSpec />} />
      <Route path="/changepass" element={<ChangePassPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricelist" element={<PriceList />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/details/:id" element={<SpecDetails />} />
      <Route path="/schedule" element={<DoctorsSchedule />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/edit/:id" element={<EditSpec />} />
    </Routes>
  );
};

export default MainRoutes;
