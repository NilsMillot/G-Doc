import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { updateDoc, collection, doc, onSnapshot, getDoc } from 'firebase/firestore';
import './EditSlide.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function EditSlide({database}) {
    const isMounted = useRef()
    let params = useParams();
    const slideCollectionRef = collection(database, `presentations/${params.idPresentation}/slides`);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const getQuillData = (value) => {
        setDescription(value)
    }
    useEffect(() => {
        const updateSlide = setTimeout(() => {
            const slide = doc(slideCollectionRef, params.id)
            updateDoc(slide, {
                description: description
            })
            .then(() => {
                setShowNotif(true);

                setTimeout(() => {
                    setShowNotif(false);
                }, 4000)
            })
            .catch(() => {
                // TO DO : Déclencher une notif "Le slide n'a pas pu être sauvegardé"
            })
        }, 1000)
        return () => clearTimeout(updateSlide)
    }, [description])

    const docRef1 = doc(database, `presentations/${params.idPresentation}/slides`, params.id);
    async function getSlide () {
        return await getDoc(docRef1);
    }
    const getData = () => {
        getSlide().then((doc) => {
            setTitle(doc.data().title);
            setDescription(doc.data().description);
            console.log('%cEditSlide.jsx line:47 doc.data()', 'color: #007acc;', doc.data());
        });
    }

    useEffect(() => {
        if (isMounted.current) {
            return
        }

        isMounted.current = true;
        getData()
    }, [])

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
        <div className='container'>
            <Snackbar open={showNotif} autoHideDuration={2000}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Slide sauvegardé !
                </Alert>
            </Snackbar>
            <h1 className='title'>{title}</h1>
            <div className='quill-section'>
                <ReactQuill
                    className='react-quill'
                    value={description}
                    onChange={getQuillData}
                />
            </div>
        </div>
    )
}
