import { BASE_URL } from "@/constants";
import { useQuery } from "react-query";

export function useFetchApi<T>(name: string, url: string) {
  return useQuery<T | null | undefined>(name, () =>
    fetch(`${BASE_URL}${url}`).then((res) => res.json())
  );
}
