import React from 'react'
import TaskForm from './TaskForm'

function ActiveProject({ activeProject }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 h-screen">
      <div>
        <h2 className="font-bold text-green-950">{activeProject.title}</h2>
        <button>Delete</button>
      </div>
      <p className="text-green-300">{activeProject.date}</p>

      <div className="border-b border-green-900">
        <p className="text-green-300">{activeProject.description}</p>

      </div>

       <TaskForm/>
    </div>
  )
}

export default ActiveProject