import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `linear-gradient(45deg, transparent, #564f9fc4, #564f9fc4), url(${slides[currentIndex].url})`,
  };
  //   const leftArrowStyles = {
  //     position: "absolute",
  //     top: "50%",
  //     transform: "translate(0, -50%)",
  //     left: "32px",
  //     fontSize: "45px",
  //     color: "#fff",
  //     zIndex: 2,
  //     cursor: "pointer",
  //   };
  //   const rightArrowStyles = {
  //     position: "absolute",
  //     top: "50%",
  //     transform: "translate(0, -50%)",
  //     right: "32px",
  //     fontSize: "45px",
  //     color: "#fff",
  //     zIndex: 2,
  //     cursor: "pointer",
  //   };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }
  //   setInterval(goToNext, 5000);
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "25px",
    transition: "1s",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={sliderStyles}>
      {/* <div style={leftArrowStyles} onClick={goToPrevious}>
        ⫷
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ⫸
      </div> */}
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} style={dotStyles}></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
