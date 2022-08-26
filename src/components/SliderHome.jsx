import React from "react";
import "./Styles/SliderHome.css";

const SliderHome = () => {
  return (
    <image-carousel interval="5e3">
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2016/11/14/03/05/surgery-1822458__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2017/08/06/07/12/dentist-2589771__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2017/02/01/13/53/analysis-2030265__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2015/07/10/21/00/hospital-840135__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2019/04/03/03/05/medical-equipment-4099428__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2017/06/28/14/03/dental-2450751__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2018/01/18/09/26/equipment-3089883__340.jpg"
      />
      <img
        slot="image"
        src="https://cdn.pixabay.com/photo/2020/03/14/17/05/virus-4931227__340.jpg"
      />
    </image-carousel>
  );
};

export default SliderHome;
