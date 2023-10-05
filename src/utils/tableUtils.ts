import { Project } from "@/types";

export const sum = (a: number, b: number) => {
  return a + b;
};

export const filterByEtape = (lists: Project[], conditions: string[]) => {
  if (conditions.length === 0) return lists;
  return lists.filter((list) => conditions.includes(list.etape));
};
