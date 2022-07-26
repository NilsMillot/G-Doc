import { Box } from "@mui/material";
import React from "react";


export default function NotConnected() {
  return (
    <>
      <Box as="h1" sx={{ textAlign: "center", marginTop: "20px" }}>
        NO ACCOUNT PLEASE <a href="./">SIGN IN</a> OR{" "}
        <a href="./register">REGISTER</a>
      </Box>
    </>
  );
}
