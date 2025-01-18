import { TaskInterface } from "../../types/Task.type";
import { Button } from "../Button";

export const Task = ({ task, removeTask, isEnabledLines }: TaskInterface) => {
  return (
    <div
      className={`${
        isEnabledLines ? "border-b-2 border-slate-600 pb-[10px]" : ""
      } flex gap-2 items-center justify-between`}
    >
      <p className="text-white">{task}</p>

      <Button
        label="Remover"
        variant="secondary"
        onClick={() => removeTask(task)}
      />
    </div>
  );
};
