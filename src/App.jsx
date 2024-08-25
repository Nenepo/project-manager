import { useState } from "react";
import SideBar from "./components/SideBar";
import MainPage from "./pages/MainPage";

function App() {

  const [showProject, setShowProject] = useState(false);
  const [projects, setProjects] = useState([])

  const addProject = () => {
    setShowProject(true);
  };

  const cancelShowProject = (e) => {
    setShowProject(false)
  };

  const selectProject = () => {

  };

  const submitProject = () => {
    setProjects();
    setShowProject(false);
  }

  return (
    <section className="flex w-full ">
      <SideBar addProject={addProject} />
      <MainPage addProject={addProject} showProject={showProject} cancelShowProject={cancelShowProject} />
    </section>
  );
}

export default App;
