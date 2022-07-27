import { Box, TextField, Button, Paper } from "@mui/material";
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./LoginUi.scss";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        //width: "90vw",
        height: "100vh",
        //margin: "20px auto 0 auto",
        overflow: "hidden",
        backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/pwa-gr6.appspot.com/o/esgi-2.jpeg?alt=media&token=9d0e1823-ddd0-4abb-b783-943bc3a1da8e)`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box id="cercle"></Box>
      <Box
        sx={{
          textAlign: "center",
          //backgroundColor: "rgba(100, 100, 100, .6)",
          width: "90vw",
          height: "70vh",
          margin: "100px auto 0 auto",
        }}
      >
        <Box sx={{ alignItems: "center" }}>
          <div className="main">
            <div className="sub-main">
              <div>
                <h1 style={{ paddingTop: "5px" }}>Register</h1>
                <div style={{ paddingTop: "80px" }}>
                  <input
                    type="text"
                    placeholder="Email"
                    className="name input"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="second-input">
                  <input
                    type="password"
                    placeholder="Password"
                    className="name input"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className="login-button">
                  <button class="button-auth" onClick={register}>
                    Register
                  </button>
                </div>

                <p className="link">
                  <a
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Déjà inscrit ?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
