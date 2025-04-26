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
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">Company</Typography>
          <div>
            <Button variant="text" sx={{ color: "white" }}>About</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Blog</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Press</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Jobs</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Partners</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">Solution</Typography>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Marketing</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Analytics</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Commerse</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Insits</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Supports</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">Documentation</Typography>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Gides</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>API Test</Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">Legal</Typography>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Claim</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Privacy</Button>
          </div>
          <div>
            <Button variant="text" sx={{ color: "white" }}>Terms</Button>
          </div>
        </Grid>

      </Grid>
        <Grid>

        </Grid>
    </div>
  );
};

export default Footer;
