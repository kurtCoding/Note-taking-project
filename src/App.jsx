import "./App.css";
// import AboutUs from "./components/AboutUs";
import NoteList from "./components/NoteList";
import SideBar from "./components/SideBar";
import AboutUs from "./components/AboutUs";
import Notes from "./components/Notes";
import { getNotesList, addNewNote } from "./services/notesApi.js";
import { useEffect, useState } from "react";


function App() {
  const [notes, setNotes] = useState([]);

  function getNotes() {
    getNotesList()
      .then((data) => {
        setNotes([...data]);
      })
      .catch((error) => {
        //handle error
      });
  }

  useEffect(() => {
    getNotes();
  }, []);
  
  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <NoteList />
      {/* <AboutUs /> */}
    </div>
  );
}

export default App;
