import React from "react";
import { useNavigate } from "react-router-dom";


function HomeSectionCard({ product }) {

  const navigate=useNavigate();
  const handleProduct =()=>{
    navigate(`/product/${5}`)
  }

  return (
    <div className="cursor-pointer flex flex-col items-center rounded-lg shadow-lg bg-white w-[15rem] overflow-hidden mx-3" onClick={handleProduct}>
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl || product.image}
          alt=""
        />
      </div>

      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900">{product.brand}</h1>
        <p className="mt-2 text-sm text-gray-500">
          {" "}
          {product.title}
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
