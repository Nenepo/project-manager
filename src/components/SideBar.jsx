
function SideBar({addProject, projects}) {

 
  return (
    <div className="w-[20%]  bg-green-950 rounded-r-3xl mt-20 h-[87vh] pl-8 pt-20 ">
      <h2 className="uppercase text-white font-semibold">Your Projects</h2>
      <button onClick={addProject} className="text-green-300 bg-green-700 p-2 mt-6 text-sm rounded-md hover:opacity-80 transition-opacity duration-500 ease-in-out">Add Project</button>
      {projects}
    </div>
  )
}

export default SideBar