import { IconButton } from "@mui/material";
import React from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Link, useNavigate } from "react-router-dom";

export default function ListButtons({ reveal, id, slides, db, removeSlide }) {
  function handleClickDelete(currentSlide) {
    const idCurrentSlide = currentSlide.getAttribute("data-id");
    removeSlide(idCurrentSlide);
  }

  const navigate = useNavigate();
  function handleClickEdit(currentSlide) {
    const idCurrentSlide = currentSlide.getAttribute("data-id");
    navigate(`/edit-slide/${idCurrentSlide}`);
  }

  return (
    <>
      <IconButton
        sx={{ position: "absolute", bottom: "100px", right: "13px" }}
        aria-label="update"
        size="large"
        onClick={() => {
          handleClickEdit(reveal.getCurrentSlide());
        }}
      >
        <CreateRoundedIcon
          sx={{ height: "40px", width: "40px" }}
        ></CreateRoundedIcon>
      </IconButton>
      <IconButton
        sx={{ position: "absolute", bottom: "170px", right: "13px" }}
        aria-label="delete"
        size="large"
        onClick={() => handleClickDelete(reveal.getCurrentSlide())}
      >
        <DeleteIcon sx={{ height: "40px", width: "40px" }}></DeleteIcon>
      </IconButton>
      <Link to={`/add-slide/${id}`}>
        <IconButton
          sx={{ position: "absolute", bottom: "240px", right: "13px" }}
          aria-label="add"
          size="large"
          onClick={() => {
            console.log(
              "doit ajouter une slide après celle ci: ",
              reveal.getCurrentSlide()
            );
          }}
        >
          <AddCircleOutlineIcon
            sx={{ height: "40px", width: "40px" }}
          ></AddCircleOutlineIcon>
        </IconButton>
      </Link>
    </>
  );
}
