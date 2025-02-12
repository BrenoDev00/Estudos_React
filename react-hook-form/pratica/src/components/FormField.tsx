export const FormField = (props: {
  label: string;
  type: string;
  id: string;
}) => {
  const { label, type, id } = props;

  return (
    <div className="flex flex-col gap">
      <label className="text-slate-200" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border border-gray-600 outline-none p-1 text-slate-100"
      />
    </div>
  );
};
