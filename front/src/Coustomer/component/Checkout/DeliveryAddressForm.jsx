import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
const DeliveryAddressForm = () => {

const handleSubmit = (e) => {
e.preventDefault();
const formData = new FormData(e.target);
const data = {
  firstName: formData.get("firstName"),
  lastName: formData.get("lastName"),
  address: formData.get("address"),
  city: formData.get("city"),
  state: formData.get("state/province/region"),
  zip: formData.get("zip/postal code"),
  phone: formData.get("phone number"),
}


console.log("address",data)
}

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
                <form onSubmit={handleSubmit}>
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
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6}}>
                            <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>
                        <Grid size={{ xs: 12}}>
                            <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            autoComplete="given-name"
                            multiline
                            rows={4}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6}}>
                            <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6}}>
                            <TextField
                            required
                            id="state/province/region"
                            name="state/province/region"
                            label="State/Province/Region"
                            fullWidth
                            autoComplete="given-name"
                            />
                        </Grid>
                        <Grid size={{ xs: 12 , sm: 6}}>
                        
                            <TextField
                            required
                            id="zip/postal code"
                            name="zip/postal code"
                            label="Zip/Postal code"
                            fullWidth
                            autoComplete="Shipping postal-code"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6}}>
                            <TextField
                            required
                            id="phone number"
                            name="phone number"
                            label="Phone Number"
                            fullWidth
                            autoComplete="tel"
                            />
                        </Grid>
                        <Button sx={{py:1.5, mt:2,bgcolor:"RGB(145 85 253)"}} size="large" variant="contained" type="submit">Deliver Here</Button>
                    </Grid>
                </form>
            </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;