import "./App.css";
import NoteList from "./components/NoteList";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { getNotesList } from "./services/notesApi.js";
import Home from "./components/Home.jsx";
import NewNote from "./components/NewNote.jsx";
import EditNote from "./components/EditNote.jsx";
import AboutUs from "./components/AboutUs.jsx";
import NoteDetails from "./components/NoteDetails.jsx";



function App() {
  const [categories, setCategories] = useState([]);
  const [allNotes, setAllNotes] = useState([]);
  const [notes, setNotes] = useState([]);
  // console.log(notes)
  // console.log(categories)

  function getNotes() {
    getNotesList()
      .then((data) => {
        setAllNotes([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getNotes();
  });

  useEffect(() => {
    setNotes(allNotes)
  },[allNotes, notes])

  return (
    <>
      <Router>
        <SideBar allNotes={allNotes} setNotes={setNotes} setCategories={setCategories} categories={categories}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NoteList notes={notes} categories={categories}/>} />
          <Route path="/notes/new" element={<NewNote categories={categories}/>} />
          <Route path="/notes/:id" element={<NoteDetails notes={notes} />} />
          <Route path="/notes/:id/edit" element={<EditNote categories={categories}/>} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
