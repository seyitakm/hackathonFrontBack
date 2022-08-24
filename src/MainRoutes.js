import React from "react";
import { Route, Routes } from "react-router-dom";
import AddSpec from "./components/products/AddSpec";

import SpecialtiesList from "./components/products/SpecialtiesList";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import Contacts from "./pages/Contacts";
import DoctorsSchedule from "./pages/DoctorsSchedule";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PriceList from "./pages/PriceList";
import RegisterPage from "./pages/RegisterPage";
import Services from "./pages/Services";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/spec" element={<SpecialtiesList />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/add" element={<AddSpec />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/pricelist" element={<PriceList />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/schedule" element={<DoctorsSchedule />} />
    </Routes>
  );
};

export default MainRoutes;
