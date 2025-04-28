import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
const DeliveryAddressForm = () => {
  return (
    <div>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 5 }} className=" rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
          <div className="p-5 py-7 cursor-pointer">
            <AddressCard />
            <Button sx={{mt:2,bgcolor:"RGB(145 85 253)"}} size="large" variant="contained">Deliver Here</Button>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }} >
            <Box className="rounded-e-md shadow-md p-5">
                <form>
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, sm: 6}}>
                            <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                            />
                            <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;