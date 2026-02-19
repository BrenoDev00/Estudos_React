import { Button } from "../Button";
import { TaskInputInterface } from "../../types/TaskInput.type";
import { useState } from "react";

export const TaskInput = ({ addTask, dataTest }: TaskInputInterface) => {
  const [taskValue, setTaskValue] = useState<string>("");

  const handleAddTask = (): void => {
    if (taskValue.trim()) {
      addTask(taskValue);
      setTaskValue("");
    }
  };

  return (
    <section className="flex gap-2 mt-[30px] justify-between">
      <input
        data-test={dataTest}
        type="text"
        placeholder="digite sua task"
        onInput={(event) => setTaskValue(event.currentTarget.value)}
        className="bg-slate-600 text-white grow outline-none py-1 px-2"
        value={taskValue}
      />

      <Button
        dataTest="task-register-button"
        label="Cadastrar"
        onClick={handleAddTask}
      />
    </section>
  );
};
