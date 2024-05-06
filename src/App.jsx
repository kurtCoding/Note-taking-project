import "./App.css";
import NoteList from "./components/NoteList";
import SideBar from "./components/SideBar";
// import AboutUs from "./components/AboutUs";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getNotesList } from "./services/notesApi.js";
import Home from "./components/Home.jsx";
import NewNote from "./components/NewNote.jsx";
// import NoteDetails from "./components/NoteDetails.jsx";
import EditNote from "./components/EditNote.jsx";
import AboutUs from "./components/AboutUs.jsx";
import NoteDetails from "./components/NoteDetails.jsx";



function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);
  function getNotes() {
    getNotesList()
      .then((data) => {
        setNotes([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <Router>
        <SideBar notes={notes} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NoteList notes={notes} />} />
          <Route path="/notes/new" element={<NewNote />} />
          <Route path="/notes/:id" element={<NoteDetails notes={notes} />} />
          <Route path="/note/:id/edit" element={<EditNote />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
