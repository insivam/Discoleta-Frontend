import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={6} alignItems="center">
          <Box paddingX={20} paddingY={20}>
            <form>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Sign in to Discoleta
              </Typography>
              <TextField
                id="usuario"
                label="E-mail"
                variant="outlined"
                name="usuario"
                margin="normal"
                fullWidth
              />
              <TextField
                id="senha"
                label="Password"
                variant="outlined"
                name="senha"
                margin="normal"
                type="password"
                fullWidth
              />
              <Box marginTop={2} textAlign="center">
                <Link to="/home" className="Signin">
                  <Button className="Signin" type="submit" variant="contained" color="primary">
                    Sign in
                  </Button>
                </Link>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                New to Discoleta?
                </Typography>
              </Box>
              <Box>
              <Link to="/cadastro" className="Signin">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                style={{ fontWeight: "bold" }}
              >
                Create an account
              </Typography>
              </Link>

              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} alignItems="center" className="back" >
        <div style={{ minHeight: "100vh" }}>
            <h1 className="teste">
                TESTE
            </h1>

        </div>
       
        </Grid>
       
      </Grid>
    </>
  );
}

export default Login;