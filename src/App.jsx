import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../src/firebaseConfig";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotConnected from "./components/pages/not_connected";
import ViewSlidePresentation from "./components/ViewSlidePresentation";
import Presentations from "./components/Presentations";
import { database } from "./firebaseConfig";
import EditSlide from "./components/EditSlide/EditSlide";
import AddSlide from "./components/AddSlide/AddSlide";

function App() {
  const [user, loading, error] = useAuthState(auth);
  const [connected, setConnected] = useState(false);
  //const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if(user?.email) setConnected(true);
  }, [user, loading]);

  if (connected) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>Error 404</div>} />
        <Route
          path="/presentation/:presentationId"
          element={<ViewSlidePresentation db={database} />}
        />
        <Route path="/presentation" element={<Presentations db={database} />} />
        <Route
          path="/edit-slide/:id"
          element={<EditSlide database={database} />}
        />
        <Route
          path="/add-slide/:presentationId"
          element={<AddSlide db={database} />}
        />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {loading ? <></> : <Route path="*" element={<NotConnected />} />}
      </Routes>
    );
  }
}

export default App;
