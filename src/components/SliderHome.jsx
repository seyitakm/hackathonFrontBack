import React from "react";
import "./Styles/SliderHome.css";

const SliderHome = () => {
  return (
    <image-carousel interval="5e3">
      <img slot="image" src="https://picsum.photos/1920/1080?random&1" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&2" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&3" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&4" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&5" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&6" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&7" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&8" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&9" />
      <img slot="image" src="https://picsum.photos/1920/1080?random&10" />
    </image-carousel>
  );
};

export default SliderHome;
