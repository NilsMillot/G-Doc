import { Box } from "@mui/material";
import React from "react";

export default function Slider({ slides, setCurrentSlide }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "20vw",
        height: "100%",
        overflow: "scroll",
        backgroundColor: "#3B3B58",
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            backgroundColor: "#A96DA3",
            paddingY: "1rem",
            margin: "5px 10px",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => setCurrentSlide(slide)}
        >
          <h2>{slide.title}</h2>
        </Box>
      ))}
    </Box>
  );
}
