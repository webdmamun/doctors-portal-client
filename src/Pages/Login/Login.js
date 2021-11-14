import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from "@mui/material";
import loginImg from "../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginWithEmailPassword, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginWithEmailPassword(
      loginData.email,
      loginData.password,
      location,
      history
    );
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
              Login
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
                <NavLink
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                    marginBottom: "10px",
                  }}
                  to="/register"
                >
                  <Button variant="text">New User? please register</Button>
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
                  Login
                </Button>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">Account Log in Succesfully!</Alert>
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

export default Login;
