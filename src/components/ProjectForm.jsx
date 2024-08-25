import { useState } from "react"


function ProjectForm({ cancelShowProject }) {

  const initialFormData = {
    title: "",
    description: "",
    date: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  };

  const cancelProject = () => {

    setFormData(initialFormData);
    cancelShowProject();

  };

  const submitProject = (e) => {
    e.preventDefault();
    cancelProject()
  };


  return (

    <form onSubmit={submitProject}>
      <div>
        <button onClick={cancelProject}>Cancel</button>
        <button type="submit">Save</button>
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input name="title" id="title" type="text" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input name="description" id="description" type="text" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="date">date</label>
        <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} />
      </div>
    </form>
  )
}

export default ProjectForm