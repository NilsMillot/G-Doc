import { Routes, Route } from "react-router-dom";
import ViewSlidePresentation from "./components/ViewSlidePresentation";
import Presentations from "./components/Presentations";
import { database } from "./firebaseConfig";
import EditSlide from "./components/EditSlide/EditSlide";

function App() {
  return (
    <Routes>
      <Route path="/presentation" element={<ViewSlidePresentation />} />
      <Route path="/" element={<Presentations slidesInDb={database} />} />
      <Route
        path="/edit-slide/:id"
        element={<EditSlide database={database} />}
      />
    </Routes>
  );
}

export default App;
