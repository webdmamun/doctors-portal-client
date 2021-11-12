import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import bg from "../../../images/appointment-bg.png";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const appoinmentBg = {
  background: `url(${bg})`,
  backgroundColor: "rgba(65, 73, 92, 0.8)",
  backgroundBlendMode: "darken",

  marginTop: 200,
};

const AppoinmentBanner = () => {
  return (
    <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 400, marginTop: "-120px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid item xs={4} md={6} sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Typography variant="h6" sx={{ color: "#10CFE4", mb: 5 }}>
              Appoinment
            </Typography>
            <Typography variant="h4" sx={{ color: "white", my: 5 }}>
              Make an Appoinment Today
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "white", fontSize: 14, fontWeight: 300, my: 5 }}
            >
              Its a long established fact that a reader will be distractallly
              Its a long established fact that a reader will be distractallly
              Its a long established fact that a reader will be distractallly
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppoinmentBanner;
