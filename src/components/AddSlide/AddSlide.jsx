import React, { useEffect, useState, useRef } from 'react';
import { Box, IconButton } from "@mui/material";
import { collection, doc, getDoc, getDocs,setDoc, addDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function AddSlide({ db }) {
    const [titleOfPresentation, setTitleOfPresentation] = useState("");
    const isMounted = useRef()
    const [titleSlide, setTitleSlide] = useState('');
    const [description, setDescription] = useState('');

    let params = useParams();

    const getQuillData = (value) => {
        setDescription(value)
    }
    const getTilteSlide = (e) => {
        setTitleSlide(e.target.value)
    }
    const PresentationCollectionRef = collection(db,"presentations")
    const IdPresentationCollectionRef = doc(PresentationCollectionRef,params.presentationId)

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

      async function createSlide(title,description) {
        await addDoc(collection(IdPresentationCollectionRef,"slides"), {
          title: title,
          content : description,
        });
        console.log("hh")
      }
      function handleSubmitNewSlide() {
        createSlide(titleSlide,description).then(() => {
          
        });
      }

      const [showNotif, setShowNotif] = React.useState(false);
      const Alert = React.forwardRef(function Alert(props, ref) {
          return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
  
      const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
      }
      
          setShowNotif(false);
        };
      
    return (
        <>
            <Box as="h1" sx={{ textAlign: "center", marginTop: "20px" }}>
            Ajouter une slide à {titleOfPresentation}
            <button  
        onClick={handleSubmitNewSlide}
          >Creer</button>
        </Box>  
  
        <div className='container'>
            <Snackbar open={showNotif} autoHideDuration={2000}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Slide sauvegardé !
                </Alert>
            </Snackbar>
            <input onChange={getTilteSlide} value={titleSlide} type='text' name="title"></input>
            <div className='quill-section'>
                <ReactQuill
                    className='react-quill'
                    value={description}
                    onChange={getQuillData}
                />
            </div>
        </div>
      
     </>
    )
}