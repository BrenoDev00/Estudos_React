import { Button } from "../Button";
import { TaskInputInterface } from "../../types/TaskInput.type";

export const TaskInput = ({ addTask }: TaskInputInterface) => {
  let newTask: string = "";

  return (
    <section className="flex gap-2 mt-[30px] justify-between">
      <input
        type="text"
        placeholder="digite sua task"
        onInput={(event) => {
          const target = event.target as HTMLInputElement;
          newTask = target.value;
        }}
        className="bg-slate-600 text-white grow outline-none py-1 px-2"
      />

      <Button
        label="Cadastrar"
        onClick={() => {
          if (newTask.length > 0) {
            addTask(newTask);
          }
        }}
      />
    </section>
  );
};
