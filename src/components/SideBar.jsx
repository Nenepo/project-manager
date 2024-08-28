import { useContext } from "react";
import { ProjectContext } from "../store/Project-context";

function SideBar({  setActiveProject, activeProject }) {
 
const  { addProject, projects} =  useContext(ProjectContext)

  return (
    <div className="w-1/3 md:w-72 bg-green-950 rounded-r-xl mt-10 h-[93.5vh] pl-8 pt-20">
      <h2 className="uppercase text-stone-50  font-semibold">Your Projects</h2>
      <button 
        onClick={addProject} 
        className="text-green-300 bg-green-700 p-2 mt-6 text-sm rounded-md hover:opacity-80 transition-opacity duration-500 ease-in-out">
        + Add Project
      </button>
      <div className="mt-10 pr-8">
        {projects.map((project) => (
          <p 
            onClick={() => setActiveProject(project)}
            className={`text-green-300 cursor-pointer py-1 pl-2 text-sm rounded-sm ${activeProject?.title === project.title ? "bg-green-800" : ""}`}
            key={project.title}>
            {project.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
