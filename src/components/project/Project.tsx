import { BASE_URL } from "@/constants";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Paper from "../layouts/Paper";
import { backIcon } from "@/assets/icons";
import { useState } from "react";
import Modal from "../modal/Modal";
import AddProject from "../projects/addProject/AddProject";

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();

  const { data: project, isLoading } = useQuery(["project", id], async () => {
    const response = await fetch(`${BASE_URL}/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  });

  const updateProject = () => {
    setShowModal(true);
  };

  return (
    <>
      <Paper>
        {project && (
          <>
            <h1 className="text-xl text-center">
              Détail du projet {project.id}
            </h1>
            <Link to={"/projets"} className="absolute top-8 right-8">
              {backIcon()}
            </Link>
            <div className="flex flex-col w-full justify-evenly gap-2 pt-6">
              <span>Nom: {project.nom}</span>
              <span>Desciption: {project.description}</span>
              <span>Etape: {project.etape}</span>
            </div>
            <div className="flex w-full justify-center">
              <button
                onClick={() => updateProject()}
                className="p-2 bg-teal-100 border-[1px] border-teal-500 text-teal-500 rounded-lg hover:shadow-md cursor-pointer"
              >
                Modifier
              </button>
            </div>
          </>
        )}
        {isLoading && <span>Récupération du projet...</span>}
      </Paper>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <AddProject
            closeModal={() => setShowModal(false)}
            initData={project}
          />
        </Modal>
      )}
    </>
  );
};

export default Project;
