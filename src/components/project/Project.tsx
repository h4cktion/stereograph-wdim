import { BASE_URL } from "@/constants";
import { useParams } from "react-router-dom";
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
    <>
      {project && JSON.stringify(project)}
      {isLoading && <span>Récupération du projet...</span>}
    </>
  );
};

export default Project;
