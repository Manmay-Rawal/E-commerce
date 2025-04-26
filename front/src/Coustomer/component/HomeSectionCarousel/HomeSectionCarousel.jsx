
import React, { useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { mens_kurta } from "../../../Data/Men/men_kurta";

const HomeSectionCarousel = () => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const SlidePrev = () => carouselRef.current.slidePrev();
  const SlideNext = () => carouselRef.current.slideNext();

  const items = mens_kurta
    .slice(0, 10)
    .map((item, index) => <HomeSectionCard key={index} product={item} />);

  return (
    <div className="">
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          responsive={responsive}
          disableButtonsControls
          disableDotsControls
          controlsStrategy="alternate"
        />

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
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
