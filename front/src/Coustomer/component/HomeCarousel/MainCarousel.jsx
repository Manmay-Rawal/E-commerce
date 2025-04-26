import React from "react";
import { MainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function MainCarousel() {
  const items = MainCarouselData.map((item) => (
    <img className="cursor-pointer mx-auto" role="presentation" src={item.image} />
  ));

  return<AliceCarousel 
  items={items}
disableButtonsControls
autoPlay
autoPlayInterval={1000}
infinite
   />;
}

export default MainCarousel;
