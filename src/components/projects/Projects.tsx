import { Project } from "@/types";
import ProjectsTable from "./projectsTable/ProjectsTable";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useFetchApi } from "@/hooks/useFetchApi";
import AddProject from "./addProject/AddProject";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const { isLoading, data: projects } = useFetchApi<
    Project[] | null | undefined
  >("Projects", "/projects");

  const showProject = (project: Project) => {
    console.log("project", project);
  };
  const addProject = () => {
    console.log("addProject");
    setShowModal(true);
  };

  return (
    <>
      <button onClick={addProject}>Ajouter un Projet</button>
      <ProjectsTable
        projects={projects}
        showProject={showProject}
        isLoading={isLoading}
      />
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <AddProject />
        </Modal>
      )}
    </>
  );
};

export default Projects;
