import React from "react";
import { Grid, Paper, Typography, Button } from "@mui/material";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const { name, time, space } = booking;
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ py: 2 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              color: "#18D2CD",
              m: 2,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              color: "",
              m: 2,
            }}
          >
            {time}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              color: "gray",
              m: 2,
            }}
          >
            {space} SPACES AVAILABLE
          </Typography>
          <Button
            onClick={handleBookingOpen}
            variant="contained"
            sx={{
              backgroundColor: "#5CE7ED",
              color: "#ffffff",
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            Book Appointment
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        handleBookingClose={handleBookingClose}
        openBooking={openBooking}
        date={date}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
