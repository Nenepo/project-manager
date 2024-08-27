import { useState } from "react";
import SideBar from "./components/SideBar";
import MainPage from "./pages/MainPage";

function App() {

  const [showProject, setShowProject] = useState(false);
  const [projects, setProjects] = useState([])
  const [activeProject, setActiveProject] = useState(null);


  const addProject = () => {
    setShowProject(true);
  };

  const cancelShowProject = () => {
    setShowProject(false)
  };


  const submitProject = (newProject) => {
    setProjects(prevProjects => [...prevProjects, newProject]);
    setShowProject(false);
  }

  const deleteProject = (projectToBeDeleted) => {
    setProjects(prevProjects =>
      prevProjects.filter(project => project !== projectToBeDeleted)
    );
    setActiveProject(null);
  }
  return (
    <section className="flex w-full ">
      <SideBar
        addProject={addProject}
        projects={projects}
        setActiveProject={setActiveProject}
        activeProject={activeProject}
      />
      <MainPage
        addProject={addProject}
        showProject={showProject}
        cancelShowProject={cancelShowProject}
        onFormSubmit={submitProject}
        activeProject={activeProject}
        deleteProject={deleteProject}
      />
    </section>
  );
}

export default App;
