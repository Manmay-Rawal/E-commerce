import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import { Box, fontSize } from '@mui/system'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div  className='lg:px-20 px-5 shadow-xl'>
        <div>
            <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>
        </div>
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>

        <Grid className="space-x-5 mt-5" container>
            {[1,1,1,1,1].map((item)=> <Grid container className="shadow-xl rounded-md p-5 w-full " sx={{ alignItems: "center", justifyContent: "space-between" }}>
                <Grid size={{ xs: 6 }}>
                    <div className='flex items-center space-x-2'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARBIUEFIQhZATBAokBfxf1nrfqxv8lBOj1w&s" alt="" />
                        <div className='space-y-2 ml-5'>
                            <p className='font-semibold'>Women shirt are always good</p>
                            <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color-Black</span><span>size-M</span></p>
                            <p>Seller:idea</p>
                            <p>1998₹</p>
                        </div>
                    </div>
                </Grid>
                <Grid>
                    <Box sx={{ color:deepPurple[500]}}>
                            <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 text-5xl"/>
                            <span>Rate & Review Products</span>
                    </Box>
                </Grid>
            </Grid>)}
            
        </Grid>
    </div>
  )
}

export default OrderDetails