import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Reveal from "./Reveal";
import Slider from "./Slider";
import Rv from "./Rv";
import ListButtons from "./ListButtons";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { Link, useParams } from "react-router-dom";

export default function ViewSlidePresentation({ db }) {
  const [reveal, setReveal] = useState(null);
  const [slides, setSlides] = useState([]);
  const [titleOfPresentation, setTitleOfPresentation] = useState("");
  let params = useParams();

  // Get the presentation title
  const docRef = doc(db, "presentations", params.presentationId);
  async function getDc() {
    return await getDoc(docRef);
  }
  useEffect(() => {
    getDc().then((pres) => {
      setTitleOfPresentation(pres.data().title);
    });
  }),
    [];

  // Get the slides
  async function getSlides() {
    const slidesSnapshot = await getDocs(
      collection(db, `presentations/${params.presentationId}/slides`)
    );
    const slidesTitleList = slidesSnapshot.docs.map((doc) => doc.data());
    const slidesIdList = slidesSnapshot.docs.map((doc) => doc.id);
    const slidesList = slidesTitleList.map((presentation, index) => {
      return {
        ...presentation,
        id: slidesIdList[index],
      };
    });
    return slidesList;
  }

  useEffect(() => {
    getSlides().then((slides) => {
      setSlides(slides);
    });
    setReveal(new Rv());
  }, []);

  async function removeSlide(id) {
    await deleteDoc(
      doc(db, `presentations/${params.presentationId}/slides`, id)
    );
    getSlides().then((slides) => {
      setSlides(slides);
    });
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Box as="h1" sx={{ marginRight: "20px" }}>
          {titleOfPresentation}
        </Box>
        <Link to="/presentation">
          <span style={{ fontSize: "2rem" }}>Retour sur vos présentations</span>
        </Link>
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

        <ListButtons
          reveal={reveal}
          id={params.presentationId}
          // slides={slides}
          removeSlide={removeSlide}
          db={db}
        />
      </Box>
    </>
  );
}
