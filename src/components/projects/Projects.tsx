import { Project } from "@/types";
import ProjectsTable from "./projectsTable/ProjectsTable";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useFetchApi } from "@/hooks/useFetchApi";
import AddProject from "./addProject/AddProject";
import { BASE_URL } from "@/constants";
import { useMutation, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Paper from "../layouts/Paper";
import { homeIcon } from "@/assets/icons";

const Projects = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);
  const { isLoading, data: projects } = useFetchApi<
    Project[] | null | undefined
  >("Projects", "/projects");

  const showProject = (id: number | string) => {
    navigate(`/projet/${id}`);
  };
  const addProject = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
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
  const deleteProject = (id: number | string) => {
    deleteFileMutation.mutateAsync(id);
  };

  return (
    <Paper>
      <h1 className="text-xl text-center">Projets</h1>
      <button
        onClick={addProject}
        className="absolute top-4 right-4 bg-teal-100 border-[1px] border-teal-500
      p-2 cursor-pointer text-teal-500 rounded-md hover:shadow-lg"
      >
        Ajouter un Projet
      </button>
      <Link to="/" className="absolute top-8 left-8">
        {homeIcon()}
      </Link>
      <ProjectsTable
        projects={projects}
        showProject={showProject}
        deleteProject={deleteProject}
        isLoading={isLoading}
      />
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <AddProject closeModal={closeModal} />
        </Modal>
      )}
    </Paper>
  );
};

export default Projects;
