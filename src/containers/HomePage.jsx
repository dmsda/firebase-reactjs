import React from "react";

import { Box, Typography } from "@mui/material";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import styles from "./HomePage.module.css";

const HomePage = () => {

const [user] = useAuthState(auth);

  return (
    <>
      <Box className={styles.container}>
        <Typography variant="body1">Halo, ini adalah halaman utama</Typography>
        {user ? ( <Typography variant="body2">{user.email}</Typography> ) : ""}
        {user ? ( <Typography variant="body2">{user.uid}</Typography> ) : ""}
      </Box>
    </>
  );
};

export default HomePage;
