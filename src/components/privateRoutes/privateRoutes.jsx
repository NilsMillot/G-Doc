import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";

const PrivateRoutes = ({children})=>{
    return auth.User ? children : <Navigate to="/"/>
}

export default PrivateRoutes;