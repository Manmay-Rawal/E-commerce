import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useState } from "react";


const HomeSectionCarousel = () => {

  const [ActiveIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const ActivePerv = () => {setActiveIndex(ActiveIndex - 1)};
  const ActiveNext = () => {setActiveIndex(ActiveIndex + 1)};
  const syncActiveIndex = (items) => {setActiveIndex(items)};
;
  const items = [1, 1, 1, 1, 1, 1,, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

  return (
    <div className="relative lg:px-8 px-4">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          ActiveIndex={ActiveIndex}
        />
        {ActiveIndex !== items.length - 5 && <Button
          variant="contained"
          className="z-50"
          onClick={ActivePerv}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          area-label="right"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
        {ActiveIndex !== ActiveIndex+5 && <Button
          variant="contained"
          className="z-50"
          onClick={ActiveNext}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          area-label="right"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
