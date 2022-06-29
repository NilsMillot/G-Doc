import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
          position: "relative",
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
        <IconButton
          sx={{ position: "absolute", bottom: "20px", right: "10px" }}
          aria-label="update"
          size="large"
          onClick={() => {
            alert(
              'Vous avez cliqué sur le bouton "Update pour la slide ayant pour titre", "' +
                currentSlide.title +
                '"'
            );
          }}
        >
          <CreateRoundedIcon
            sx={{ height: "40px", width: "40px" }}
          ></CreateRoundedIcon>
        </IconButton>
        <IconButton
          sx={{ position: "absolute", bottom: "90px", right: "10px" }}
          aria-label="delete"
          size="large"
          onClick={() => {
            alert(
              'Vous avez cliqué sur le bouton "Delete la slide ayant pour titre", "' +
                currentSlide.title +
                '"'
            );
          }}
        >
          <DeleteIcon sx={{ height: "40px", width: "40px" }}></DeleteIcon>
        </IconButton>
        <IconButton
          sx={{ position: "absolute", bottom: "160px", right: "10px" }}
          aria-label="add"
          size="large"
          onClick={() => {
            alert('Vous avez cliqué sur le bouton "Add"');
          }}
        >
          <AddCircleOutlineIcon
            sx={{ height: "40px", width: "40px" }}
          ></AddCircleOutlineIcon>
        </IconButton>
      </Box>
    </>
  );
}
