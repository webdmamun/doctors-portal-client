import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import loginImg from "../../images/login.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerWithEmailPassword, isLoading, authError } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert(" your password did not match");
      return;
    }
    registerWithEmailPassword(loginData.email, loginData.password);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ m: 3, p: 3 }} elevation={3}>
            <Typography
              sx={{ textAlign: "center", color: "gray" }}
              variant="body1"
              gutterBottom
            >
              Create an Account
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    marginBottom: "10px",
                  }}
                  id="filled-basic"
                  type="email"
                  name="email"
                  onChange={handleOnChange}
                  label="Email"
                  variant="filled"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    marginBottom: "10px",
                  }}
                  id="filled-basic"
                  name="password"
                  onChange={handleOnChange}
                  type="password"
                  label="Password"
                  variant="filled"
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    marginBottom: "10px",
                  }}
                  id="filled-basic"
                  name="password2"
                  onChange={handleOnChange}
                  type="password"
                  label="Re-type Your Password"
                  variant="filled"
                />
                <NavLink
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    marginBottom: "10px",
                  }}
                  to="/login"
                >
                  <Button variant="text">New User? Please Log in</Button>
                </NavLink>
                <Button
                  sx={{ width: "75%", m: 1 }}
                  variant="contained"
                  type="submit"
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    marginBottom: "10px",
                  }}
                >
                  Register
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Account Succesfully created!</Alert>
            )}
            {authError && (
              <Alert severity="error">{authError} — check it out!</Alert>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={loginImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
