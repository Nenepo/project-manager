import { useState } from "react";

function SideBar({ addProject, projects, setActiveProject, activeProject }) {
  return (
    <div className="w-[40%] md:w-[20%] bg-green-950 rounded-r-3xl mt-10 h-[93.5vh] pl-8 pt-20">
      <h2 className="uppercase text-white font-semibold">Your Projects</h2>
      <button 
        onClick={addProject} 
        className="text-green-300 bg-green-700 p-2 mt-6 text-sm rounded-md hover:opacity-80 transition-opacity duration-500 ease-in-out">
        Add Project
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
