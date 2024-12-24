import { TaskItem } from "../TaskItem";

export const TaskContainer = ({ taskList, removeTask }) => {
  return (
    <main className="flex ">
      <section className="border-2 border-violet-900 w-[500px] flex flex-col gap-3 p-3">
        {taskList.map((task) => (
          <TaskItem key={task} task={task} removeTask={removeTask} />
        ))}
      </section>
    </main>
  );
};
