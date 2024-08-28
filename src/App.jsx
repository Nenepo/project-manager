import { useState } from "react";
import SideBar from "./components/SideBar";
import MainPage from "./pages/MainPage";
import { ProjectContext } from "./store/Project-context";

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

  const ctxValue = {
    addProject: addProject,
    projects: projects,
    deleteProject: deleteProject,
   onFormSubmit: submitProject,


  }
  return (
    <ProjectContext.Provider value={ctxValue}>
      <section className="flex w-full ">
        <SideBar
          setActiveProject={setActiveProject}
          activeProject={activeProject}
        />
        <MainPage
          showProject={showProject}
          activeProject={activeProject}
        />
      </section>
    </ProjectContext.Provider>
  );
}

export default App;
