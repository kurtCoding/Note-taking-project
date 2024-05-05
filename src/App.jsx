import "./App.css";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import AboutUs from "./components/AboutUs";
import Notes from "./components/Notes";
import { getNotesList } from "./services/notesApi.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getNotesList();
  }, []);
  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
        <div className="grid p-4 sm:ml-64">Add new Note</div>
      </div>
      <Notes />
      <AboutUs />
    </div>
  );
}

export default App;
