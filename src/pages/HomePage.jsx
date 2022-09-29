import React from "react";
import CardHome from "../components/CardHome";
import Footer from "../components/Footer";
import SpecialtiesList from "../components/products/SpecialtiesList";
import SliderHome from "../components/SliderHome";

const HomePage = () => {
  return (
    <div>
      <SliderHome />
      {/* <TabsHome /> */}
      <CardHome />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Наши специалисты</h1>
        <div style={{ width: "80%" }}>
          <SpecialtiesList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
