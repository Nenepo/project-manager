import ActiveProject from "../components/ActiveProject"
import NoProject from "../components/NoProject";
import PageWidth from "../components/PageWidth"
import ProjectForm from "../components/ProjectForm"

function MainPage({ addProject, showProject, activeProject, cancelShowProject, onFormSubmit }) {
  return (
    <PageWidth>
      {showProject ? (
        <ProjectForm
          cancelShowProject={cancelShowProject}
          onFormSubmit={onFormSubmit}
          initialFormData={activeProject || { title: "", description: "", date: "" }}
        />
      ) : activeProject ? (
        <ActiveProject activeProject={activeProject}/>
      ) : (
        <NoProject addProject={addProject}/>
      )}
    </PageWidth>
  );
}


export default MainPage