import { trashIcon } from "@/assets/icons";
import { Project } from "@/types";
import { filterByEtape } from "@/utils/tableUtils";
import { useState } from "react";
import Filters from "./Filters";

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
  const [filters, setFilters] = useState<string[]>([]);

  return (
    <div className=" mt-8">
      <Filters setFilters={setFilters} filters={filters} />
      <table className="w-full table-auto">
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
          {projects &&
            filterByEtape(projects, filters).map((project) => (
              <tr
                key={project.id}
                onClick={() => showProject(project)}
                className="cursor-pointer odd:bg-slate-100 hover:bg-slate-200"
              >
                <td className="p-2">{project.id}</td>
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
    </div>
  );
};

export default ProjectsTable;
