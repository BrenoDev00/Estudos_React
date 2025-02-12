import { UseFormRegisterReturn } from "react-hook-form";

export const FormField = (props: {
  label: string;
  type: string;
  id: string;
  register: UseFormRegisterReturn;
}) => {
  const { label, type, id, register } = props;

  return (
    <div className="flex flex-col gap">
      <label className="text-slate-200" htmlFor={id}>
        {label}
      </label>

      <input
        type={type}
        id={id}
        className="border border-gray-600 outline-none p-1 text-slate-100"
        {...register}
      />
    </div>
  );
};
