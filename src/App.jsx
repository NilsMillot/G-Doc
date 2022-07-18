import { Routes, Route } from "react-router-dom";
import ViewSlidePresentation from "./components/ViewSlidePresentation";
import Presentations from "./components/Presentations";
import { database } from "./firebaseConfig";
import EditSlide from "./components/EditSlide/EditSlide";

function App() {
  return (
    <Routes>
      <Route
        path="/presentation/:presentationId"
        element={<ViewSlidePresentation slidesInDb={database} />}
      />
      <Route path="/" element={<Presentations />} />
      <Route
        path="/edit-slide/:id"
        element={<EditSlide database={database} />}
      />
    </Routes>
  );
}

export default App;
