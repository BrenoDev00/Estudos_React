import { useState } from "react";
import { CheckBox } from "../CheckBox";
import { TaskItem } from "../TaskItem";

export const TaskContainer = ({ taskList, removeTask }) => {
  const [checked, setChecked] = useState(false);

  return taskList.length > 0 ? (
    <main className="-translate-y-6 flex flex-col gap-2">
      <CheckBox
        checked={checked}
        setChecked={setChecked}
        label="Habilitar linhas"
      />

      <section className="border-2 border-violet-900 w-[500px] flex flex-col gap-3 p-3">
        {taskList.map((task, index) => (
          <TaskItem
            key={`task-item-${index}`}
            task={task}
            removeTask={removeTask}
            showBorderBottom={checked}
          />
        ))}
      </section>
    </main>
  ) : (
    <p>Aqui você verá suas tarefas cadastradas.</p>
  );
};
