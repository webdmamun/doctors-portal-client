import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Typography, Button, Container, Box } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  alignItems: "center",
  height: "500px",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3" sx={{ mb: 5 }}>
              Your New Smile <br /> Start Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 14, color: "gray", my: 5 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Get an Appoinment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img src={chair} alt="Chair" width="400px" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
