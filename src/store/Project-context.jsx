import { createContext} from "react";

export const ProjectContext = createContext({
  addProject: () => {},
  projects: [],
  deleteProject: () => {},
  onFormSubmit: () => {},
  cancelShowProject:  () => {},
})