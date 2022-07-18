import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function Presentations() {
  const presentations = [
    {
      title: "Title of first presentation",
      slides: [
        {
          title: "This is the title of First Slide",
          description: "This is the description of First Slide",
        },
        {
          title: "This is the title of 2nd Slide",
          description: "This is the description of Scnd Slide",
        },
        {
          title: "This is the title of 3rd Slide",
          description: "desc 3rd Slide",
        },
      ],
    },
    {
      title: "Title of 2nd presentation",
      slides: [],
    },
    {
      title: "Title of 3rd presentatio fezefzez ezfn",
      slides: [
        {
          title: "1st Slide",
          description: "This is the description of 2nde Slide",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Box as="h1" sx={{ textAlign: "center", marginTop: "20px" }}>
        Vos présentations
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: "70vw",
          margin: "20px auto 0 auto",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {presentations.map((presentation, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              background: "slategray",
              maxWidth: "200px",
              border: "1px solid black",
              borderRadius: "20px",
              color: "white",
              padding: "10px",
              margin: "10px",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            <span>{presentation.title}</span>
            <IconButton
              sx={{ position: "absolute", bottom: "-4px", right: "-30px" }}
              aria-label="update"
              onClick={() => {
                console.log("doit editer cette slide: ");
              }}
            >
              <CreateRoundedIcon
                sx={{ height: "22px", width: "22px" }}
              ></CreateRoundedIcon>
            </IconButton>
            <IconButton
              sx={{ position: "absolute", bottom: "25px", right: "-30px" }}
              aria-label="delete"
              onClick={() => {
                console.log("doit supprimer cette slide: ");
              }}
            >
              <DeleteIcon sx={{ height: "22px", width: "22px" }}></DeleteIcon>
            </IconButton>
          </Box>
        ))}
      </Box>
      <IconButton
        sx={{ width: "max-content", margin: "20px auto 0 auto" }}
        aria-label="add"
        onClick={() => {
          console.log("doit ajouter une slide après celle ci: ");
        }}
      >
        <AddCircleOutlineIcon
          sx={{ height: "40px", width: "40px" }}
        ></AddCircleOutlineIcon>
      </IconButton>
    </Box>
  );
}
