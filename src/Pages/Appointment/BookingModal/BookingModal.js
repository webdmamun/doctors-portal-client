import React, { useState } from "react";
import {
  Fade,
  Modal,
  Typography,
  Box,
  Backdrop,
  TextField,
  Button,
} from "@mui/material";
import useAuth from "./../../../Hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    // collect data
    const appointment = {
      ...bookingInfo,
      time,
      serviceName: name,
      date: date.toLocaleDateString(),
    };
    // sent to the server
    fetch("https://agile-bayou-19050.herokuapp.com/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });

    handleBookingClose();
    e.preventDefault();
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openBooking}
      onClose={handleBookingClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openBooking}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            {name}
          </Typography>

          <form onSubmit={handleBookingSubmit}>
            <TextField
              disabled
              label="Time"
              sx={{ width: "90%", margin: "5px" }}
              id="outlined-size-small"
              defaultValue={time}
              size="small"
            />
            <TextField
              label="Name"
              sx={{ width: "90%", margin: "5px" }}
              id="outlined-size-small"
              name="patientName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              label="Phone Number"
              type="number"
              name="phone"
              onBlur={handleOnBlur}
              sx={{ width: "90%", margin: "5px" }}
              id="outlined-size-small"
              size="small"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              onBlur={handleOnBlur}
              sx={{ width: "90%", margin: "5px" }}
              id="outlined-size-small"
              defaultValue={user.email}
              size="small"
            />
            <TextField
              disabled
              label="Date"
              sx={{ width: "90%", margin: "5px" }}
              id="outlined-size-small"
              defaultValue={date}
              size="small"
            />
            <Button
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
              }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default BookingModal;
