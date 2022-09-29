import React from "react";
import ImageSlider from "./ImageSlider";
import "./Styles/SliderHome.css";

const slides = [
  {
    url: "https://zdorovie-lab.kg/wp-content/webp-express/webp-images/uploads/2018/09/banner-2.jpg.webp",
    title: "2",
  },
  {
    url: "https://zdorovie-lab.kg/wp-content/webp-express/webp-images/uploads/2018/09/banner-3.jpg.webp",
    title: "1",
  },
  {
    url: "https://zdorovie-lab.kg/wp-content/webp-express/webp-images/uploads/2018/09/banner-1.jpg.webp",
    title: "3",
  },
];
const containerStyles = {
  width: "100%",
  height: "450px",
  margin: "0 auto",
  transition: "1s",
};
const overlaySlide = {
  width: "50%",
  position: "absolute",
  left: 0,
  top: "64px",
  height: "450px",
  zIndex: "1",
  background: "rgba(255,255,255,0.1)",
  backdropFilter: "blur(10px)",
};

const SliderHome = () => {
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
        <div style={overlaySlide}>
          <div className="overlayContent">
            <h2>Лабораторные исследования</h2>
            <p>
              Более 150 видов точных медицинских тестов. Уверенность в каждом
              результате!
            </p>
            <button>Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
