import { Box, Button } from "@mui/material";
import { auth } from "../firebaseConfig";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const signOut = () => {
    console.log(auth);
    auth.signOut().then(() => {
      console.log(auth), navigate("/");
    });
  };
  const slides = [
    {
      title: "Welcome to the First Slide",
      description:
        "<h2>This is the first slide.</h2><br><h3>This is a simple application that allows you to create a new user and to login to the application.</h3>",
    },
    {
      title: "Here is the second slide",
      description: "<bold>This is the second slide.</bold>",
    },
    {
      title: "Welcome to the Home Page",
      description:
        "<h2>This is the home page of the application.</h2><br><h3>This is a simple application that allows you to create a new user and to login to the application.</h3>",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(slides[0]);
 

  return (
    <>
      <Box as="h1" sx={{ textAlign: "center", marginTop: "20px" }}>
        Votre présentation
        <Button variant="contained" onClick={signOut}>
          SIGN OUT {user?.email ? user?.email : "null"}
        </Button>
      </Box>
      <Box
        sx={{
          background: "lightgray",
          display: "flex",
          width: "90vw",
          height: "80vh",
          margin: "20px auto 0 auto",
        }}
      >
        <Slider slides={slides} setCurrentSlide={setCurrentSlide} />
        <Box
          id="contentOfSlide"
          sx={{
            border: "1px solid black",
            padding: "20px",
            width: "100%",
          }}
        >
          {currentSlide.description}
        </Box>
      </Box>
    </>
  );
}
