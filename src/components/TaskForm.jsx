import React, { useState } from 'react';

function TaskForm() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks

    setTasks((prevTasks) => [
      ...prevTasks,
      task,
    ]);
    setTask('');
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
      <h2 className='text-green-900 font-bold text-2xl'>Tasks</h2>
      <div className='flex items-center space-x-4 pb-6'>
        <input
          type="text"
          name='task'
          value={task}
          onChange={handleChange}
          className='bg-gray-300 outline-blue-600 pl-1 text-sm py-1 rounded'
        />
        <button onClick={addTask} className='text-sm font-medium'>Add Task</button>
      </div>

      <div className='overflow-auto h-64'> {/* Make the task list scrollable */}
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div key={index} className='py-4 px-2 bg-gray-200 flex justify-between items-center mb-2 rounded'>
              <p className='text-sm font-medium'>{task}</p>
              <button onClick={() => removeTask(index)} className='text-green-900 text-sm font-medium'>Clear</button>
            </div>
          ))
        ) : (
          <p className='text-sm font-medium'>This project does not have any tasks yet</p>
        )}
      </div>
    </>
  );
}

export default TaskForm;
