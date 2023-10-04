import { Project } from "@/types";
import { useQuery } from "react-query";
import ProjectsTable from "./projectsTable/ProjectsTable";
import { useState } from "react";
import Modal from "../modal/Modal";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const { isLoading, data: projects } = useQuery<Project[] | null | undefined>(
    "Projects",
    () => fetch("http://localhost:3000/projects").then((res) => res.json())
  );

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
          <span>Ma super modal</span>
        </Modal>
      )}
    </>
  );
};

export default Projects;
