import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className=' p-3 shadow-lg hover:shadow-2xl'>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
            <Grid size={{ xs: 6 }}>
                <div className='flex cursor-pointer'>
                    <img className='object-cover object-top h-[5rem] w-[5rem] ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARBIUEFIQhZATBAokBfxf1nrfqxv8lBOj1w&s" alt="" />
                    <div className="ml-5">
                        <p className=''>Women Shirt for ever Style</p>
                        <p className='font-semibold text-sm opacity-50 '>Size:M</p>
                        <p className='font-semibold text-sm opacity-50 '>Color:Black</p>
                    </div>
                </div>
            </Grid>

            <Grid size={{ xs: 2 }}>
                 <p>1998₹</p>
            </Grid>
            <Grid size={{ xs: 4 }}>
                {true && <div> <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 text-sm mr-2'/>
                    <span>
                         Delivery On March 03
                    </span>
                </p>
                <p className='text-sm opacity-50'>
                    Your items has been Delivered
                </p>
                </div>}
                {false && <p>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 text-sm mr-2'/>
                    <span>
                        Expected Delivery On March 03
                    </span>
                </p>}
            </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard