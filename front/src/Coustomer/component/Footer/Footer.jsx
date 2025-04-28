import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        className="bg-black text-white text-center mt-8"
        sx={{ bgcolor: "black", color: "white", py: 2, px: 3, justifyContent: "space-between", textAlign: "center" }}
      >
        <Grid size={{xs:12,sm:6,md:3}}>
          <Typography className="pb-5" variant="h6">Company</Typography>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>About</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Blog</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Press</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Jobs</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Partners</Button>
          </div>
        </Grid>

        <Grid size={{xs:12,sm:6,md:3}}>
          <Typography className="pb-5" variant="h6">Solution</Typography>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Marketing</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Analytics</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Commerse</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Insits</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Supports</Button>
          </div>
        </Grid>

        <Grid size={{xs:12,sm:6,md:3}}>
          <Typography className="pb-5" variant="h6">Documentation</Typography>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Gides</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>API Test</Button>
          </div>
        </Grid>

        <Grid size={{xs:12,sm:6,md:3}}>
          <Typography className="pb-5" variant="h6">Legal</Typography>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Claim</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Privacy</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white", fontSize:"13px" }}>Terms</Button>
          </div>
        </Grid>

      </Grid>
        <Grid size={{xs:12}} >
            <Typography className="text-center text-white" fontSize="15px" sx={{ bgcolor: "black", color: "white", py: 2, px: 3 }}> 
                © 2023 All rights reserved | This template is made with <span className="text-red-500">❤️</span> by <a href="" className="text-red-500">Manmay Rawal</a>
            </Typography>
        </Grid>
    </div>
  );
};

export default Footer;
