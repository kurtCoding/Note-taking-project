import "./App.css";
// import AboutUs from "./components/AboutUs";
import NoteList from "./components/NoteList";
import SideBar from "./components/SideBar";

function App() {
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
