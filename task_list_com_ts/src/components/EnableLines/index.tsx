import { EnableLinesInterface } from "../../types/EnableLines.type";

export const EnableLines = ({
  isEnabledLines,
  setIsEnabledLines,
}: EnableLinesInterface) => {
  return (
    <div className="flex gap-2 items-center mb-[8px]">
      <input
        type="checkbox"
        name="bottom-border"
        className="w-[15px] h-[15px] accent-violet-600"
        checked={isEnabledLines}
        onChange={() => setIsEnabledLines(!isEnabledLines)}
      />

      <label htmlFor="bottom-border" className="text-white">
        Habilitar linhas
      </label>
    </div>
  );
};
