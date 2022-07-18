import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Reveal from "./Reveal";
import Slider from "./Slider";
import Rv from "./Rv";
import ListButtons from "./ListButtons";

export default function ViewSlidePresentation() {
  const [reveal, setReveal] = useState(null);
  useEffect(() => {
    setReveal(new Rv());
  }, []);

  const slides = [
    {
      title: "Welcome to the First Slide",
      description:
        "<h2>This is the first slide.</h2><br><h3>This is a simple application that allows you to create a new user and to login to the application.</h3>",
      // background:"aquamarine"
    },
    {
      title: "Here is the second slide",
      description: "<bold>This is the second slide.</bold>",
      // background:"blue"
    },
    {
      title: "Welcome to the Home Page",
      description:
        "<h2>This is the home page of the application.</h2><br><h3>This is a simple application that allows you to create a new user and to login to the application.</h3>",
      // background:"purple"
    },
  ];

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
          position: "relative",
        }}
      >
        <Slider slides={slides} />
        <Box
          sx={{
            background: "lightgray",
            display: "flex",
            width: "90vw",
            height: "80vh",
            border: "1px solid black",
          }}
        >
          <Reveal slides={slides} />
        </Box>

        <ListButtons reveal={reveal} />
      </Box>
    </>
  );
}
