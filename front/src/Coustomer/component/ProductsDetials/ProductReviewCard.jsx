import { Avatar, Box, Grid } from "@mui/material";
import React from "react";
import Rating from "@mui/material/Rating"; 

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid size={{ xs: 1}}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ bgcolor: "#9155fd", width: 56, height: 56 }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid size={{ xs: 9}}>
          <div className="space-y-2">
            <div>
            <h1 className="text-lg font-semibold text-lg">Rohit Sharma</h1>
            <p className="opacity-50">April-04-2023</p>
            </div>
          </div>
          <Rating value={4.5} name='half-rating' precision={.5} readOnly/>
          <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
