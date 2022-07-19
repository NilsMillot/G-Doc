import { Routes, Route } from "react-router-dom";
import ViewSlidePresentation from "./components/ViewSlidePresentation";
import Presentations from "./components/Presentations";
import { database } from "./firebaseConfig";
import EditSlide from "./components/EditSlide/EditSlide";
import AddSlide from "./components/AddSlide/AddSlide";

function App() {
  return (
    <Routes>
      <Route
        path="/presentation/:presentationId"
        element={<ViewSlidePresentation db={database} />}
      />
      <Route path="/" element={<Presentations db={database} />} />
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
}

export default App;
