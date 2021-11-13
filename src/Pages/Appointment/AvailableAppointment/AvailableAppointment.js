import { Container, Typography } from "@mui/material";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
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
        Avilable Appointment:- {date.toDateString()}
      </Typography>
    </Container>
  );
};

export default AvailableAppointment;
