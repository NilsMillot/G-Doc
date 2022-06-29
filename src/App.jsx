import { Routes, Route } from "react-router-dom";
import Presentation from "./components/Presentation";
import { database } from "./firebaseConfig";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Presentation slidesInDb={database} />} />
    </Routes>
  );
}

export default App;
