import "./App.css";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Notes from "./components/Notes";

function App() {
  return (
    <div>
      <SideBar />
      <div className="grid p-4 sm:ml-64">Add new Note</div>
      <Notes />
    </div>
  );
}

export default App;
