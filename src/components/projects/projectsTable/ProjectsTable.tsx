import { trashIcon } from "@/assets/icons";
import { Project } from "@/types";

const ProjectsTable = ({
  projects,
  showProject,
  isLoading,
  deleteProject,
}: {
  projects: Project[] | null | undefined;
  showProject: (project: Project) => void;
  deleteProject: (project: Project) => void;
  isLoading: boolean;
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Commentaire</th>
            <th>Étape</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project.id} onClick={() => showProject(project)}>
              <td>{project.id}</td>
              <td>{project.nom}</td>
              <td>{project.description}</td>
              <td>{project.commentaire}</td>
              <td>{project.etape}</td>
              <td
                className="cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteProject(project);
                }}
              >
                {trashIcon()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <span>"Récupération des projets..."</span>}
    </>
  );
};

export default ProjectsTable;
