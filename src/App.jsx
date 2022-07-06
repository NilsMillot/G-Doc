import { Routes, Route } from "react-router-dom";
import ViewSlidePresentation from "./components/ViewSlidePresentation";
import Presentation from "./components/Presentation";
import { database } from "./firebaseConfig";

function App() {
  return (
    <Routes>
      <Route path="/presentation" element={<ViewSlidePresentation />} />
      <Route path="/" element={<Presentation slidesInDb={database} />} />
    </Routes>
  );
}

export default App;
