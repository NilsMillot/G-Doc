import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { updateDoc, collection, doc, onSnapshot, getDoc } from 'firebase/firestore';
import './EditSlide.css';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export default function EditSlide({database}) {
    const isMounted = useRef()
    let params = useParams();
    const slideCollectionRef = collection(database, `presentations/${params.idPresentation}/slides`);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const getQuillData = (value) => {
        setContent(value)
    }
    useEffect(() => {
        const updateSlide = setTimeout(() => {
            const slide = doc(database, `presentations/${params.idPresentation}/slides`, params.id)
            updateDoc(slide, {
                content: content
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
    }, [content])

    async function getSlide () {
        const docRef1 = doc(database, `presentations/${params.idPresentation}/slides`, params.id);
        return await getDoc(docRef1);
    }
    const getData = () => {
        getSlide().then((doc) => {
            console.log("here");
            console.log(doc);
            setTitle(doc.data().title);
            setContent(doc.data().content);
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
            <Breadcrumbs className='breadcrumbs' aria-label="breadcrumb">
                <Link className="link-back" underline="hover" color="inherit" onClick={() => navigate(`/presentation/${params.idPresentation}`)}>
                    <ArrowBackIcon className='link-back-icon' />
                    Retourner à la présentation
                </Link>
            </Breadcrumbs>
            <Snackbar open={showNotif} autoHideDuration={2000}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Slide sauvegardé !
                </Alert>
            </Snackbar>
            <h1 className='title'>{title}</h1>
            <div className='quill-section'>
                <ReactQuill
                    className='react-quill'
                    value={content || ''}
                    onChange={getQuillData}
                />
            </div>
        </div>
    )
}
