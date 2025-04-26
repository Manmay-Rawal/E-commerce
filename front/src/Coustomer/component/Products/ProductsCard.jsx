import React from "react";
import Products from "./Products";
import "./ProductsCard.css";

const ProductsCard = () => {
  return (
    <div className="productsCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
      <img
        className="w-full h-full object-cover object-left-top"
        src="https://cdn.pixabay.com/photo/2023/11/06/06/24/woman-8368918_640.jpg"
        alt=" hello"
      />
      </div>
      <div className="textPart bg-wight p-3">
        <div>
          <p className="font-bold opacity-60">Universal</p>
          <p>Casual dress were everywere and also smooth</p>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <p className="text-2xl font-bold">$199</p>
          <p className="line-through opacity-50">$1999</p>
          <p className="text-green-600 font-semibold">80% off</p>
        </div>
      </div>
    </div>
  ); 
};

export default ProductsCard;
