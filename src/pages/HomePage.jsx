import React from "react";
import CardHome from "../components/CardHome";

import Footer from "../components/Footer";

import SliderHome from "../components/SliderHome";
import TabsHome from "../components/TabsHome";

const HomePage = () => {
  return (
    <div>
      <SliderHome />
      <TabsHome />
      <CardHome />

      <Footer />
    </div>
  );
};

export default HomePage;
