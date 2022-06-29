import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";

export default function Home() {
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

  useEffect(() => {
    let zone = document.querySelector("#contentOfSlide");
    zone.innerHTML = currentSlide?.description;
  }, [currentSlide]);
  return (
    <>
      <Box as="h1" sx={{ textAlign: "center", marginTop: "20px" }}>
        Votre présentation
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
