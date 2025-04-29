import React from "react";
import Products from "./Products";
import "./ProductsCard.css";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({product}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productsCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
      <img
        className="w-full h-full object-cover object-left-top"
        src={product.imageUrl}
        alt=" hello"
      />
      </div>
      <div className="textPart bg-wight p-3">
        <div>
          <p className="font-bold opacity-60">{product.brand}</p>
          <p>{product.title}</p>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <p className="text-2xl font-bold">{product.price}₹</p>
          <p className="line-through opacity-50">{product.discountedPrice}₹</p>
          <p className="text-green-600 font-semibold">{product.discountPersent}% off</p>
        </div>
      </div>
    </div>
  ); 
};

export default ProductsCard;
