import { useState } from "react";
import FormInput from "./FormInput";
import { FORM_FIELDS } from "..";

function ProjectForm({ cancelShowProject, onFormSubmit }) {
  const initialFormData = {
    title: "",
    description: "",
    date: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [activeInput, setActiveInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFocus = (name) => {
    setActiveInput(name);
  };

  const cancelProject = () => {
    setFormData(initialFormData);
    cancelShowProject();
  };

  const submitProject = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.date) {
      alert("All fields are required!");
      return;
    }

    console.log(formData);
    localStorage.setItem("data",formData)

    onFormSubmit(formData);

    cancelProject();
  };

  return (
    <form
      onSubmit={submitProject}
      className="flex flex-col justify-center space-y-6 px-6 md:px-0 items-center md:w-[60%] mx-auto h-screen"
    >
      <div className="flex w-full justify-end items-center space-x-2">
        <button
          className="text-green-950 border-none text-sm"
          type="button"
          onClick={cancelProject}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-green-950 text-sm px-2 py-1 rounded text-white border-none"
        >
          Save
        </button>
      </div>
      {FORM_FIELDS.map((form) => (
        <FormInput
          key={form.name}
          label={form.label}
          name={form.name}
          id={form.name}
          type={form.type}
          value={formData[form.name]}
          onChange={handleChange}
          onFocus={() => handleFocus(form.name)} // Set active on focus
          active={activeInput === form.name} // Check if this is the active input
        />
      ))}
    </form>
  );
}

export default ProjectForm;
