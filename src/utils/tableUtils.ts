import { DONE, IN_PROGRESS } from "@/constants";
import { Project } from "@/types";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const filterByEtape = (lists: Project[], conditions: string[]) => {
  if (conditions.length === 0) return lists;
  return lists.filter((list) => conditions.includes(list.etape));
};

export const getEtapeColor = (etape: string) => {
  switch (etape) {
    case IN_PROGRESS:
      return "text-orange-400";
    case DONE:
      return "text-green-400";
  }
};

export const formatId = (id: number | string) => {
  if (id.toString().length < 3) return id.toString();
  return id.toString().substring(0, 4);
};
