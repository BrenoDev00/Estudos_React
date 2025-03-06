import { ButtonInterface } from "../../types/Button.type";

export const Button = ({
  variant,
  label,
  onClick,
  dataTest,
}: ButtonInterface) => {
  return (
    <button
      data-test={dataTest}
      type="button"
      className={`${
        variant === "secondary" ? "bg-slate-600" : "bg-violet-800"
      } text-white p-2 rounded-md`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
