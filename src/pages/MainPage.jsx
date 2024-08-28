import ActiveProject from "../components/ActiveProject"
import NoProject from "../components/NoProject";
import PageWidth from "../components/PageWidth"
import ProjectForm from "../components/ProjectForm"


// import { useCallback } from 'react';

// const handleInputChange = useCallback((e) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({ ...prevData, [name]: value }));
// }, []);


function MainPage({ showProject, activeProject, cancelShowProject, onFormSubmit }) {
 

  return (
    <PageWidth>
      {showProject ? (
        <ProjectForm
          initialFormData={activeProject || { title: "", description: "", date: "" }}
        />
      ) : activeProject ? (
        <ActiveProject activeProject={activeProject} />
      ) : (
        <NoProject/>
      )}
    </PageWidth>
  );
}


export default MainPage