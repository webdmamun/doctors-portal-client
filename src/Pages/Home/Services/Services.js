import React from "react";
import "./Services.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "./Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: fluoride,
  },
  {
    name: "Cavity Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: cavity,
  },
  {
    name: "Whitening Treatment",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    img: whitening,
  },
];

const Services = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              color: "info.main",
              m: 2,
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{ textAlign: "center", fontWeight: 500, m: 2 }}
          >
            Services We Provide
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {services.map((service) => (
              <Service key={service.name} service={service}></Service>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Services;
