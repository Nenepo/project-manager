import ActiveProject from "../components/ActiveProject"
import NoProject from "../components/NoProject";
import PageWidth from "../components/PageWidth"
import ProjectForm from "../components/ProjectForm"

// import { useCallback } from 'react';

// const handleInputChange = useCallback((e) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({ ...prevData, [name]: value }));
// }, []);


function MainPage({ addProject, showProject, activeProject, cancelShowProject, onFormSubmit, deleteProject }) {
  return (
    <PageWidth>
      {showProject ? (
        <ProjectForm
          cancelShowProject={cancelShowProject}
          onFormSubmit={onFormSubmit}
          initialFormData={activeProject || { title: "", description: "", date: "" }}
        />
      ) : activeProject ? (
        <ActiveProject activeProject={activeProject} deleteProject={deleteProject}/>
      ) : (
        <NoProject addProject={addProject}/>
      )}
    </PageWidth>
  );
}


export default MainPage