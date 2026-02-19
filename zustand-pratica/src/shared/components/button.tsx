import type { ButtonProps } from "../../models/button-props";

export const Button = ({
  variant = "secondary",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: `${variant === "secondary" ? "blue" : "white"}`,
        color: `${variant === "secondary" ? "white" : "black"}`,
        borderRadius: "8px",
        fontSize: "16px",
        padding: "6px",
      }}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
