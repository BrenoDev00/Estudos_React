export const Dropdown = (props: {
  label: string;
  id: string;
  options: string[];
}) => {
  const { label, id, options } = props;

  return (
    <div className="flex flex-col gap">
      <label className="text-slate-200" htmlFor={id}>
        {label}
      </label>

      <select
        id={id}
        className="border border-gray-600 text-slate-100 outline-none p-1"
      >
        <option className="bg-slate-800"></option>

        {options.map((gender, index) => {
          return (
            <>
              <option key={index} className="text-slate-200 bg-slate-800">
                {gender}
              </option>
            </>
          );
        })}
      </select>
    </div>
  );
};
