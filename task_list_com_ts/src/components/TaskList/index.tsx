import { useState } from "react";
import { Task } from "../Task";
import { TaskListInterface } from "../../types/TaskList.type";
import { EnableLines } from "../EnableLines";

export const TaskList = ({ tasks, removeTask }: TaskListInterface) => {
  const [isEnabledLines, setIsEnabledLines] = useState<boolean>(false);

  return (
    <>
      <EnableLines
        isEnabledLines={isEnabledLines}
        setIsEnabledLines={setIsEnabledLines}
      />

      <section className="p-2 border-solid border-violet-800 border-2 text-white flex flex-col gap-4">
        {tasks.map((task: string, index: number) => {
          return (
            <Task
              key={index}
              task={task}
              removeTask={removeTask}
              isEnabledLines={isEnabledLines}
            />
          );
        })}
      </section>
    </>
  );
};
