import { useQuery } from "react-query";

const Projects = () => {
  const { isLoading, error, data } = useQuery("projets", () =>
    fetch("http://localhost:3000/projects").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <div>{JSON.stringify(data[0])}</div>;
};

export default Projects;
