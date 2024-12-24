import { TaskItem } from "../TaskItem";

export const TaskContainer = ({ taskList, removeTask }) => {
  return taskList.length > 0 ? (
    <main className="-translate-y-6">
      <section className="border-2 border-violet-900 w-[500px] flex flex-col gap-3 p-3">
        {taskList.map((task, index) => (
          <TaskItem
            key={`task-item-${index}`}
            task={task}
            removeTask={removeTask}
          />
        ))}
      </section>
    </main>
  ) : (
    "Aqui você verá suas tarefas cadastradas."
  );
};
