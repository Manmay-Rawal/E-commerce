import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg rounded-md'>
        <div className='flex items-center '>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARBIUEFIQhZATBAokBfxf1nrfqxv8lBOj1w&s" alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default CartItem