// Membutuhkan state untuk meng-track value dari TextField
import React, { useState } from "react";

// Gunakan .module.css untuk mendapatkan scoped css
import styles from "./LoginOrRegisterForm.module.css";

import { Grid, Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    // Karena state berupa Object
    // dan state sifatnya immutable

    // maka untuk set statenya
    // menggunakan spread dan overwrite
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    console.log("Login");
  };

  const registerHandler = () => {
    console.log("Register");
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "95vh" }}
    >
      <Box className={styles.boxy} component="form" noValidate>
        <Typography variant="body1">
          {loginOrRegister === "login" ? "Login Page" : "Register Page"}
        </Typography>

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          size="small"
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />

        <TextField
          label="password"
          type="Password"
          variant="outlined"
          size="small"
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />

        <Button
          variant="outlined"
          size="small"
          onClick={buttonLoginOrRegisterOnClickHandler}
        >
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>

        {loginOrRegister === "login" ? (
          <Link to="/register">
            <Typography variant="body1">or do you want Register ?</Typography>
          </Link>
        ) : (
          <Link to="/login">
            <Typography variant="body1">or do you want Login ?</Typography>
          </Link>
        )}
      </Box>
    </Grid>
  );
};

export default LoginOrRegisterForm;