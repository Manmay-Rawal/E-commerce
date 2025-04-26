import React, { useRef, useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = ({data,sectionName}) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const SlidePrev = () => {
    carouselRef.current.slidePrev();
    setActiveIndex(prev => Math.max(prev - 1, 0));
  };

  const SlideNext = () => {
    carouselRef.current.slideNext();
    setActiveIndex(prev => Math.min(prev + 1, items.length - 1));
  };

  const items = data
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  return (
    <div >
      <h2 className="font-extrabold text-2xl py-5 text-gray-800 text-center ">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          controlsStrategy="alternate"
          onSlideChanged={(e) => setActiveIndex(e.item)} 
        />

        {activeIndex !== 0 && (
          <Button
            variant="contained"
            onClick={SlidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="left"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(270deg)", color: "black" }}
            />
          </Button>
        )}

        {activeIndex !== items.length - 5 && (
          <Button
            variant="contained"
            onClick={SlideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="right"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
