import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditSlide from './components/EditSlide/EditSlide';
import { database } from './firebaseConfig';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit-slide/:id" element={<EditSlide database={database}/>} />
    </Routes>
  );
}

export default App;
