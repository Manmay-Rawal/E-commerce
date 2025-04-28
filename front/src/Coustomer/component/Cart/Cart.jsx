import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-6 relative">
        <div className="col-span-2">
          <CartItem />
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="shadow-lg">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between text-black pt-3">
                <span>Price</span>
                <span>₹4573</span>
              </div>
              <div className="flex justify-between text-black pt-3">
                <span>Discount</span>
                <span></span>
              </div>
              <div className="flex justify-between text-black pt-3">
                <span>Dilivery Charge</span>
                <span>₹4573</span>
              </div>
              <div className="flex justify-between text-black pt-3">
                <span>Total Amount</span>
                <span>₹4573</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
