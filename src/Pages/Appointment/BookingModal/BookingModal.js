import {
  Fade,
  Modal,
  Typography,
  Box,
  Backdrop,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

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

const BookingModal = ({ openBooking, handleBookingClose, booking, date }) => {
  const { name, time } = booking;

  const handleBookingSubmit = (e) => {
    alert("form submitted");
    // collect data
    // sent to the server
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
              size="small"
            />
            <TextField
              label="Phone Number"
              type="number"
              sx={{ width: "90%", margin: "5px" }}
              id="outlined-size-small"
              size="small"
            />
            <TextField
              label="Email"
              type="email"
              sx={{ width: "90%", margin: "5px" }}
              id="outlined-size-small"
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
