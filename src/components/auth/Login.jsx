import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

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
    <>
      <Box as="h1" sx={{ textAlign: "center", marginTop: "20px" }}>
        Votre présentation
      </Box>
      <Box
        sx={{
          textAlign: "center",
          background: "lightgray",
          width: "90vw",
          height: "80vh",
          margin: "20px auto 0 auto",
        }}
      >
        <h1>Sign in</h1>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={signIn}>Sign in</button>
        <button
          onClick={() => {
            console.log("register");
            navigate("/register");
          }}
        >
          Register
        </button>
      </Box>
    </>
  );
}
