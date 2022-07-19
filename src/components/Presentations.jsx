import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Presentations({ db }) {
  const [presentations, setPresentations] = useState([]);
  const presentationsCollectionRef = collection(db, "presentations");

  async function getPresentations() {
    const presentationsSnapshot = await getDocs(presentationsCollectionRef);
    const presentationsTitleList = presentationsSnapshot.docs.map((doc) =>
      doc.data()
    );
    const presentationsIdList = presentationsSnapshot.docs.map((doc) => doc.id);
    const presentationsList = presentationsTitleList.map(
      (presentation, index) => {
        return {
          ...presentation,
          id: presentationsIdList[index],
        };
      }
    );
    return presentationsList;
  }

  async function deleteDocFromDb(presentationId) {
    await deleteDoc(doc(db, "presentations", presentationId));
  }

  useEffect(() => {
    getPresentations().then((presentations) => {
      setPresentations(presentations);
    });
  }, []);

  useEffect(() => {
    console.log(
      "%cPresentations.jsx line:38 presentations",
      "color: #007acc;",
      presentations
    );
  }, [presentations]);

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
            <Link to={`presentation/${presentation.id}`}>
              <IconButton
                sx={{ position: "absolute", bottom: "-4px", right: "-30px" }}
                aria-label="update"
              >
                <CreateRoundedIcon
                  sx={{ height: "22px", width: "22px" }}
                ></CreateRoundedIcon>
              </IconButton>
            </Link>
            {/* TODO: Delete all sub collections !
             https://firebase.google.com/docs/firestore/manage-data/delete-data */}
            <IconButton
              sx={{ position: "absolute", bottom: "25px", right: "-30px" }}
              aria-label="delete"
              onClick={() => {
                deleteDocFromDb(presentation.id)
                  .then(() => {
                    setPresentations(
                      presentations.filter((p) => p.id !== presentation.id)
                    );
                  })
                  .catch(() => {
                    alert("Erreur lors de la suppression de la présentation");
                  });
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
