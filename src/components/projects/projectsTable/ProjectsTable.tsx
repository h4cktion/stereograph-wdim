import { trashIcon } from "@/assets/icons";
import { Project } from "@/types";
import { filterByEtape, formatId, getEtapeColor } from "@/utils/tableUtils";
import { useState } from "react";
import Filters from "./Filters";

const ProjectsTable = ({
  projects,
  showProject,
  isLoading,
  deleteProject,
}: {
  projects: Project[] | null | undefined;
  showProject: (id: number | string) => void;
  deleteProject: (id: number | string) => void;
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
            filterByEtape(projects, filters).map(
              ({ id, commentaire, description, nom, etape }) => (
                <tr
                  key={id}
                  onClick={() => showProject(id!)}
                  className="cursor-pointer odd:bg-slate-100 hover:bg-slate-200"
                >
                  <td className="p-2">{formatId(id!)}</td>
                  <td>{nom}</td>
                  <td>{description}</td>
                  <td>{commentaire}</td>
                  <td className={getEtapeColor(etape)}>{etape}</td>
                  <td
                    className="cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteProject(id!);
                    }}
                  >
                    {trashIcon()}
                  </td>
                </tr>
              )
            )}
        </tbody>
      </table>
      {isLoading && <span>"Récupération des projets..."</span>}
    </div>
  );
};

export default ProjectsTable;
