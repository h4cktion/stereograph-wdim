import { useMutation, useQueryClient } from "react-query";
import { BASE_URL } from "@/constants";
import { Project } from "@/types";
import { useState } from "react";

function useCreateOrUpdateProject() {
  const queryClient = useQueryClient();

  const [isSuccess, setIsSucess] = useState(false);

  const createOrUpdateProject = useMutation<Project, unknown, Project>(
    async (data: Project) => {
      let method = "POST";
      let url = `${BASE_URL}/projects`;

      if (data.id) {
        method = "PUT";
        url = `${BASE_URL}/projects/${data.id}`;
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      return response.json();
    },
    {
      onSuccess: (responseData) => {
        queryClient.invalidateQueries("Projects");
        queryClient.invalidateQueries(["project", responseData.id]);
        setIsSucess(true);
      },
    }
  );

  return { createOrUpdateProject, isSuccess };
}

export default useCreateOrUpdateProject;
