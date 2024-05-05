import "./App.css";
import NoteList from "./components/NoteList";
import SideBar from "./components/SideBar";
// import AboutUs from "./components/AboutUs";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getNotesList } from "./services/notesApi.js";
import Home from "./components/Home.jsx";
import NewNote from "./components/NewNote.jsx";
import NoteDetails from "./components/NoteDetails.jsx";
import EditNote from "./components/EditNote.jsx";

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
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Notes" element={<NoteList />} />
          <Route path="/Notes/new" element={<NewNote />} />
          <Route path="/Notes/:id" element={<NoteDetails/>} />
          <Route path="/Note/:id/edit" element={<EditNote />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
