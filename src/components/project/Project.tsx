import { BASE_URL } from "@/constants";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";

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
    <div className="w-8/12 m-auto p-8 bg-slate-50 my-8 rounded-xl shadow-xl text-slate-500 relative">
      {project && (
        <>
          <h1 className="text-xl text-center">Détail du projet {project.id}</h1>
          <Link
            to={"/projets"}
            className="absolute top-4 right-4 p-2 bg-teal-100 text-teal-500 rounded-lg hover:shadow-md cursor-pointer"
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
    </div>
  );
};

export default Project;
