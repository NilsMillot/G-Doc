import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../src/firebaseConfig";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotConnected from "./components/pages/not_connected";

function App() {
  const [connected, setConnected] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    user?.email ? setConnected(true) : setConnected(false);
    console.log(user);
    console.log("app.jsx")
  }, [user]);
  if (connected) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>Error 404</div>} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotConnected />} />
      </Routes>
    );
  }
}

export default App;
