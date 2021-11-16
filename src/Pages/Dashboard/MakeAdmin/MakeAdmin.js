import React, { useState } from "react";
import { Button, TextField, Alert } from "@mui/material";
import useAuth from "./../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://agile-bayou-19050.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          id="standard-basic"
          label="Admin Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button type="submit" variant="contained">
          Add Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin Added Succesfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
