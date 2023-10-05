import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FormData, Project } from "@/types";
import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "@/constants";

const AddProject = () => {
  const queryClient = useQueryClient();
  const fields: FormData = {
    nom: "",
    description: "",
    commentaire: "",
    etape: "",
  };

  const [formData, setFormData] = useState<FormData>(fields);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    saveNotificationMutation.mutate({ ...formData, id: uuidv4() });
  };

  const saveNotificationMutation = useMutation(
    (data: Project) =>
      fetch(`${BASE_URL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Projects");
      },
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(fields).map((field) => (
        <div key={field}>
          <label htmlFor={field}>{field}</label>
          <input
            type="text"
            id={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddProject;
