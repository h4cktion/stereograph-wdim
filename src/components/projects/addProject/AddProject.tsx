import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Project } from "@/types";
import { DONE, IN_PROGRESS, TODO } from "@/constants";
import useCreateOrUpdateProject from "@/hooks/useCreateOrUpdate";

const AddProject = ({
  initData,
  closeModal,
}: {
  initData?: Project;
  closeModal: () => void;
}) => {
  // const queryClient = useQueryClient();
  const fields: Project = {
    id: initData?.id || undefined,
    nom: initData?.nom || "",
    description: initData?.description || "",
    commentaire: initData?.commentaire || "",
    etape: initData?.etape || "",
  };

  const [formData, setFormData] = useState<Project>(fields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData({ ...formData, etape: value });
  };

  const formIsValidYesIKnowIsVeryBad = ({
    nom,
    description,
    commentaire,
    etape,
  }: Project) => {
    if (
      nom.trim() === "" ||
      description.trim() === "" ||
      commentaire.trim() === "" ||
      etape.trim() === ""
    )
      return false;
    return true;
  };
  const { createOrUpdateProject, isSuccess } = useCreateOrUpdateProject();

  const handleSubmit = (e: FormEvent, formData: Project) => {
    e.preventDefault();
    if (formIsValidYesIKnowIsVeryBad(formData))
      createOrUpdateProject.mutate(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [closeModal, isSuccess]);

  return (
    <div className="text-slate-400 mt-8">
      <h1 className="text-2xl uppercase text-center">ajouter un projet</h1>
      <form
        onSubmit={(e) => handleSubmit(e, formData)}
        className="my-4 flex flex-col gap-2"
      >
        <div className="flex gap-2 items-center">
          <label htmlFor="nom" className="w-4/12">
            Nom <span className="text-red-300">*</span>
          </label>
          <input
            type="text"
            className="border-slate-200 border-2 rounded-md p-2 w-8/12 focus:border-teal-200 focus:outline-none "
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="description" className="w-4/12">
            Description <span className="text-red-300">*</span>
          </label>
          <input
            type="text"
            className="border-slate-200 border-2 rounded-md p-2 w-8/12 focus:border-teal-200 focus:outline-none "
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="commentaire" className="w-4/12">
            Commentaire <span className="text-red-300">*</span>
          </label>
          <input
            type="text"
            className="border-slate-200 border-2 rounded-md p-2 w-8/12 focus:border-teal-200 focus:outline-none "
            id="commentaire"
            name="commentaire"
            value={formData.commentaire}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="etape" className="w-4/12">
            Etape <span className="text-red-300">*</span>
          </label>
          <select
            className="border-slate-200 border-2 rounded-md p-2 w-8/12 focus:border-teal-200 focus:outline-none "
            id="etape"
            value={formData.etape}
            onChange={handleSelectChange}
          >
            <option value="">Sélectionnez une Etape</option>
            <option value={TODO}>{TODO}</option>
            <option value={IN_PROGRESS}>{IN_PROGRESS}</option>
            <option value={DONE}>{DONE}</option>
          </select>
        </div>

        <div className="flex w-full justify-center mt-4">
          <button
            type="submit"
            className="p-2 bg-teal-100 text-teal-500 border-[1px] border-teal-500 hover:shadow-md rounded-lg uppercase"
          >
            sauvegarder
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
