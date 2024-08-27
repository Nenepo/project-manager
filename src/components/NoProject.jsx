import image from "../assets/no-projects.png"
function NoProject({addProject}) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 h-screen">
      <img src={image} alt="" className="w-20 h-20" />
          <h2 className="font-bold text-green-950">No Project Selected</h2>
          <p className="text-green-300">Select a project or get started with a new one</p>
          <button onClick={addProject} className="text-green-300 bg-green-700 p-2 text-sm rounded-md hover:opacity-80 transition-opacity duration-500 ease-in-out">
            Create a new project
          </button>
        </div>
  )
}

export default NoProject