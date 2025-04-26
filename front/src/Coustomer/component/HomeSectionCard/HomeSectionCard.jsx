import React from 'react'

function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center rounded-lg shadow-lg bg-white w-[15rem] overflow-hidden mx-3'>

    <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src="https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-27-21.jpg?v=1681723151" alt="" />
    </div>

    <div className='p-4'>
        <h1 className='text-lg font-semibold text-gray-900'>noFilter</h1>
        <p className='mt-2 text-sm text-gray-500'> man kurta style for every party</p>
    </div>

    </div>
  )
}

export default HomeSectionCard