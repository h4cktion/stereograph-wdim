import { Project } from "@/types";
import ProjectsTable from "./projectsTable/ProjectsTable";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useFetchApi } from "@/hooks/useFetchApi";
import AddProject from "./addProject/AddProject";
import { BASE_URL } from "@/constants";
import { useMutation, useQueryClient } from "react-query";

const Projects = () => {
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const { isLoading, data: projects } = useFetchApi<
    Project[] | null | undefined
  >("Projects", "/projects");

  const showProject = (project: Project) => {
    console.log("project", project);
  };
  const addProject = () => {
    setShowModal(true);
  };

  const deleteFileMutation = useMutation(
    async (id: number | string) => {
      await fetch(`${BASE_URL}/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Projects");
      },
    }
  );
  const deleteProject = (project: Project) => {
    console.log("delete", project);
    deleteFileMutation.mutateAsync(project.id);
  };

  return (
    <>
      <button onClick={addProject}>Ajouter un Projet</button>
      <ProjectsTable
        projects={projects}
        showProject={showProject}
        deleteProject={deleteProject}
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
