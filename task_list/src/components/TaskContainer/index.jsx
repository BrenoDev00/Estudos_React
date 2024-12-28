import { useState } from "react";
import { TaskItem } from "../TaskItem";

export const TaskContainer = ({ taskList, removeTask }) => {
  const [checked, setChecked] = useState(false);

  return taskList.length > 0 ? (
    <main className="-translate-y-6">
      <input
        type="checkbox"
        name="border-bottom"
        id="border-btn"
        checked={checked}
        onClick={() => setChecked(!checked)}
      />
      <label htmlFor="border-bottom">Habilitar linhas</label>

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
