import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg rounded-md">
      <div className="flex items-center ">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARBIUEFIQhZATBAokBfxf1nrfqxv8lBOj1w&s"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">men selim mid persion also use</p>
          <p className="opacity-70">Size:S wight</p>
          <p className="opacity-70 mt-2"> seller:Crishtaliyo fashion</p>

          <div className="flex space-x-5 items-center text-gray-500 pt-6">
            <p className="font-semibold">199₹</p>
            <p className="opacity-70 line-through">199₹</p>
            <p className="font-semibold text-green-900">50% off</p>
          </div>
          <div className="lg:flex items-center lg:space-x-10 pt-4">
            <div className="flex items-center space-x-2">
              <IconButton>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <span className="py-1 px-7 rounded-sm border">3</span>
              <IconButton sx={{ color:"RGB(145 85 253)"}}>
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
            <div>
              <Button sx={{ color:"RGB(145 85 253)"}}>
                Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
