import "./App.css";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
function App() {
  return (
    <div>
      <SideBar />
      <div className="grid p-4 sm:ml-64">
        <div>Add new Note</div>
      </div>
    </div>
  );
}

export default App;
