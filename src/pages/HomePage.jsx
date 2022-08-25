// import React from "react";
// import Footer from "../components/Footer";
// // import ActivationPage from "./ActivationPage";

// const HomePage = () => {
//   return (
//     <div>
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../components/Styles/HomePage.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function HomePage() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="  " alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" alt="" />
        </SwiperSlide>
      </Swiper>
      <Footer />
    </>
  );
}
