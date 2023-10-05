import { BASE_URL } from "@/constants";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Paper from "../layouts/Paper";

const Project = () => {
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

  return (
    <Paper>
      {project && (
        <>
          <h1 className="text-xl text-center">Détail du projet {project.id}</h1>
          <Link
            to={"/projets"}
            className="absolute top-4 right-4 p-2 bg-teal-100 border-[1px] border-teal-500 text-teal-500 rounded-lg hover:shadow-md cursor-pointer"
          >
            Retour
          </Link>
          <div className="flex flex-col w-full justify-evenly gap-2 pt-6">
            <span>Nom: {project.nom}</span>
            <span>Desciption: {project.description}</span>
            <span>Etape: {project.etape}</span>
          </div>
        </>
      )}
      {isLoading && <span>Récupération du projet...</span>}
    </Paper>
  );
};

export default Project;
