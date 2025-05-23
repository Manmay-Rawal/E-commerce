import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 rounded-s-md shadow-lg">
        <AddressCard />
      </div>
      <div>
      <div className="lg:grid grid-cols-3 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="shadow-lg p-5">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr className="opacity-10" />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between text-black pt-3">
                <span>Price</span>
                <span>4573₹</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">-3419₹</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Dilivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between font-bold pt-3">
                <span>Total Amount</span>
                <span className="text-green-600">1278₹</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full"
              sx={{ marginTop: "2.5rem", backgroundColor: "#4F46E5" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary