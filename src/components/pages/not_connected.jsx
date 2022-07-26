import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";



export default function NotConnected() {
  let navigate = useNavigate();

  return (
    <>
      <Box as="h1" sx={{ textAlign: "center", marginTop: "20px" }}>
        NO ACCOUNT PLEASE <a onClick={navigate("/")}>SIGN IN</a> OR{" "}
        <a onClick={navigate("register")}>REGISTER</a>
      </Box>
    </>
  );
}
