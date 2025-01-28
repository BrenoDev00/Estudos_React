export const ProductFilters = () => {
  return (
    <section className="flex justify-center items-center py-8">
      <input
        type="radio"
        id="filter-0"
        name="filter-selection"
        className="hidden"
      />
      <label
        htmlFor="filter-0"
        className="rounded-s-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
      >
        Todos
      </label>

      <input
        type="radio"
        id="filter-1"
        name="filter-selection"
        className="hidden"
      />
      <label
        htmlFor="filter-1"
        className="bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
      >
        Masculino
      </label>

      <input
        type="radio"
        id="filter-2"
        name="filter-selection"
        className="hidden"
      />
      <label
        htmlFor="filter-2"
        className="rounded-e-lg bg-slate-950 hover:bg-slate-800 p-2 text-sm text-slate-100 cursor-pointer"
      >
        Feminino
      </label>
    </section>
  );
};
