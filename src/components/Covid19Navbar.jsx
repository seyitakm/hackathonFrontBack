import React from "react";
import "./Styles.css";
const Covid19Navbar = () => {
  return (
    <>
      <div className="covid19">
        <h2>COVID-19 Recources:</h2>
        <div className="covid19_width">
          <div className="covid19__care">
            <a href="#">Get Care Now </a>
            <a href="#">Vaccine FAQs </a>
            <a href="#">Visitor Police </a>
            <a href="#">Safe Care </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid19Navbar;
