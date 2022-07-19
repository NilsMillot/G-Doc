import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import DeleteModal from "./Modals/DeleteModal";
import CreatePresentationModal from "./Modals/CreatePresentationModal";
import { v4 as uuidv4 } from 'uuid';
import PresentationCard from "./Cards/PresentationCard";

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

  // Create presentation
  const [newTitle, setNewTitle] = useState("");

  async function createPresentation(title) {
    await setDoc(doc(db, "presentations",uuidv4()), {
      title: title,
    });
    console.log("hh")
  }

  function handleSubmitNewTitle() {
    createPresentation(newTitle).then(() => {
      setPresentations([...presentations, { title: newTitle }]);
    });
    console.log(
      "crééer une nouvelle présentation dans la bdd avec le titre :",
      newTitle
    );
  }

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
          <Box key={index}>
            {/* TODO: Delete all sub collections !
             https://firebase.google.com/docs/firestore/manage-data/delete-data */}
            <PresentationCard
              presentation={presentation}
              onClickYesDelete={() => {
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
            />
          </Box>
        ))}
      </Box>
      <CreatePresentationModal
        setNewTitle={setNewTitle}
        onClickYes={handleSubmitNewTitle}
      />
    </Box>
  );
}
