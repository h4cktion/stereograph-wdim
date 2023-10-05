import { FILTERS } from "@/constants";

const Filters = ({
  setFilters,
  filters,
}: {
  setFilters: (arg: string[]) => void;
  filters: string[];
}) => {
  const changeFilters = (filter: string) => {
    if (filters.includes(filter)) {
      const updatedFilters = filters.filter(
        (existingFilter) => existingFilter !== filter
      );
      setFilters(updatedFilters);
      return;
    }
    setFilters([...filters, filter]);
  };

  return (
    <ul className="flex justify-around my-4 bg-white p-2 rounded-md text-slate-700">
      <li>Filtres :</li>
      {FILTERS.map((filter) => (
        <li key={filter} className="flex gap-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            value={filter}
            id={filter}
            onChange={() => changeFilters(filter)}
          />
          <label htmlFor={filter} className="cursor-pointer">
            {filter}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Filters;
