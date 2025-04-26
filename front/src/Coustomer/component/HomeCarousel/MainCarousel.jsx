import React from "react";
import { MainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function MainCarousel() {
  const items = MainCarouselData.map((item) => (
    <img
      className="cursor-pointer mx-auto"
      role="presentation"
      src={item.image}
    />
  ));

  return (
    <div className="relative -z-10">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={3000}
        infinite
      />
    </div>
  );
}

export default MainCarousel;
