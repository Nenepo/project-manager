import ProjectForm from "../components/ProjectForm"

function MainPage({ addProject, showProject, cancelShowProject }) {
  // if there is no project, show this

  return <div className="w-[80%] ">
    {showProject ?
      <ProjectForm cancelShowProject={cancelShowProject} />
      : <div className="flex flex-col justify-center items-center space-y-4 h-screen">
        <h2 className="font-bold text-green-950">No Project Selected</h2>
        <p className="text-green-300">Select a project or get started with a new one</p>
        <button onClick={addProject} className="  text-green-300 bg-green-700 p-2  text-sm rounded-md hover:opacity-80 transition-opacity duration-500 ease-in-out">Create a new project</button>
      </div>
    }

  </div>

}

export default MainPage